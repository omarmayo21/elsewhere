import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import rateLimit from 'express-rate-limit';

// Simple Rate limiting for serverless
const limit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per IP
  message: 'Too many requests from this IP, please try again later.',
  keyGenerator: (req: any) => {
    return req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';
  }
});

const applyMiddleware = (req: VercelRequest, res: VercelResponse, fn: Function) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS setup
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    await applyMiddleware(req, res, limit);
  } catch (error) {
    return res.status(429).json({ error: 'Too many requests' });
  }

  try {
    const { name, email, subject, message, honeypot } = req.body;

    // Invisible Honeypot check
    if (honeypot) {
      // Bot detected, silently accept
      return res.status(200).json({ success: true, message: 'Message sent successfully' });
    }

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // 1. Save to Google Sheets
    if (process.env.GOOGLE_SHEET_ID && process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
      const rawPrivateKey = process.env.GOOGLE_PRIVATE_KEY || "";
      const privateKey = rawPrivateKey
        .replace(/^["']|["']$/g, "")
        .replace(/\\n/g, "\n")
        .trim();

      console.log('--- Google Auth Diagnostics ---');
      console.log('Key exists:', !!process.env.GOOGLE_PRIVATE_KEY);
      console.log('Raw key length:', rawPrivateKey.length);
      console.log('Normalized key length:', privateKey.length);
      console.log('Contains BEGIN:', privateKey.includes('BEGIN PRIVATE KEY'));
      console.log('Contains END:', privateKey.includes('END PRIVATE KEY'));
      console.log('Contains literal \\n:', rawPrivateKey.includes('\\n'));
      console.log('Contains actual newline:', rawPrivateKey.includes('\n') || privateKey.includes('\n'));
      console.log('Starts with BEGIN block:', privateKey.startsWith('-----BEGIN PRIVATE KEY-----'));
      console.log('Ends with END block:', privateKey.endsWith('-----END PRIVATE KEY-----'));
      console.log('-------------------------------');

      if (!privateKey.startsWith('-----BEGIN PRIVATE KEY-----') || !privateKey.endsWith('-----END PRIVATE KEY-----')) {
        console.error('Invalid Google Private Key Format');
        return res.status(500).json({ error: 'Server configuration error: Invalid Google Private Key format.' });
      }

      const auth = new JWT({
        email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        key: privateKey,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });
      const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, auth);
      
      try {
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[0];
        
        try {
          await sheet.loadHeaderRow();
        } catch (e: any) {
          if (e.message && e.message.includes('No values in the header row')) {
            console.log('Initializing headers in empty Google Sheet');
            await sheet.setHeaderRow(['Date', 'Name', 'Email', 'Phone', 'Property Type', 'Subject', 'Message']);
          } else {
            throw e;
          }
        }

        await sheet.addRow({
          Date: new Date().toISOString(),
          Name: name || '',
          Email: email || '',
          Phone: req.body.phone || '',
          'Property Type': req.body.propertyType || '',
          Subject: subject || '',
          Message: message || '',
        });
      } catch (sheetError: any) {
        console.error('--- Google Sheets API Error ---');
        console.error(sheetError);
        console.error('-------------------------------');
        return res.status(500).json({ error: 'Failed to save data to Google Sheets.', details: sheetError.message });
      }
    }

    // 2. Send Email via Gmail SMTP
    if (process.env.SMTP_USER && process.env.SMTP_PASS && process.env.EMAIL_TO) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_FROM || process.env.SMTP_USER,
        to: process.env.EMAIL_TO,
        replyTo: email,
        subject: `New Lead from ${name}: ${subject || 'Website Contact Form'}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject}</p><p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`,
      });
    }

    res.status(200).json({ success: true, message: 'Lead captured successfully' });
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
