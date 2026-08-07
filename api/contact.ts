import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';

// Initialize Redis only if environment variables are provided
const redis = (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN)
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  : null;

// Safest serverless rate limit: Sliding window (10 requests per 10 minutes per IP)
// Lenient enough to avoid blocking corporate networks, strict enough to stop spam scripts
const rateLimiter = redis
  ? new Ratelimit({
      redis: redis,
      limiter: Ratelimit.slidingWindow(10, '10 m'),
      analytics: false,
    })
  : null;

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

  // Execute Rate Limit
  if (rateLimiter) {
    // Use x-forwarded-for in Vercel to get the actual client IP
    const ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '127.0.0.1';
    
    // We combine the IP with a prefix to avoid collisions with other potential rate limits
    const { success } = await rateLimiter.limit(`contact_form_${ip}`);
    
    if (!success) {
      console.warn(`Rate limit exceeded for IP: ${ip}`);
      return res.status(429).json({ error: 'Too many requests. Please wait a few minutes before trying again.' });
    }
  } else {
    console.warn('UPSTASH_REDIS_REST_URL is not configured. Rate limiting is currently bypassed.');
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
            await sheet.setHeaderRow(['name', 'email', 'phone', 'propertyType', 'message', 'subject', 'sourcePage', 'createdAt']);
          } else {
            throw e;
          }
        }

        console.log('--- Google Sheets Append Diagnostics ---');
        console.log('Spreadsheet ID:', doc.spreadsheetId);
        console.log('Worksheet Title:', sheet.title);
        console.log('Detected Headers:', sheet.headerValues);

        // If sourcePage header is missing from an existing sheet, we might want to add it, but google-spreadsheet
        // requires adding the column manually or resizing. If the user added it, it will map correctly.

        const newRow = await sheet.addRow({
          name: name || '',
          email: email || '',
          phone: req.body.phone || '',
          propertyType: req.body.propertyType || '',
          message: message || '',
          subject: subject || '',
          sourcePage: req.body.sourcePage === '/' ? 'The One Alex' : (req.body.sourcePage || ''),
          createdAt: new Date().toISOString(),
        });

        console.log('Append Response:', newRow ? 'Row Created' : 'No Row Returned');
        if (newRow && newRow.rowNumber) {
           console.log(`Successfully appended to Row Number: ${newRow.rowNumber}`);
        } else {
           console.error('Failed to retrieve row number from append operation.');
           throw new Error('Append operation returned empty or invalid row data.');
        }

        // Verify by reading the row back (this is a bit heavy, but requested for debug)
        const rows = await sheet.getRows({ offset: newRow.rowNumber - 2, limit: 1 });
        if (rows && rows.length > 0) {
           console.log('Verified Appended Data:', rows[0].toObject());
        } else {
           throw new Error('Failed to verify appended row data.');
        }
        
        console.log('----------------------------------------');

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

      const finalSourcePage = req.body.sourcePage === '/' ? 'The One Alex' : (req.body.sourcePage || 'Unknown');
      const createdAt = new Date().toISOString();

      await transporter.sendMail({
        from: process.env.EMAIL_FROM || process.env.SMTP_USER,
        to: process.env.EMAIL_TO,
        replyTo: email,
        subject: `New Lead from ${name}: ${subject || 'Website Contact Form'}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${req.body.phone || ''}\nProperty Type: ${req.body.propertyType || ''}\nMessage:\n${message}\n\nSubject: ${subject}\nSource Page: ${finalSourcePage}\nCreated At: ${createdAt}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${req.body.phone || ''}</p>
          <p><strong>Property Type:</strong> ${req.body.propertyType || ''}</p>
          <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Source Page:</strong> ${finalSourcePage}</p>
          <p><strong>Created At:</strong> ${createdAt}</p>
        `,
      });
    }

    res.status(200).json({ success: true, message: 'Lead captured successfully' });
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
