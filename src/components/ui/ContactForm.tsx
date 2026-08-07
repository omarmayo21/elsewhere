import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { trackFormSubmit, trackLead, trackGoogleAdsLead } from '@/services/analytics';

const formSchema = z.object({
  fname: z.string().min(2, 'First name is required'),
  lname: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(5, 'Valid phone number is required'),
  countryCode: z.string().optional(),
  propertyType: z.string().optional(),
  message: z.string().optional(),
  honeypot: z.string().optional(), // Anti-spam
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  formName?: string;
  title?: string;
}

import countries from './countries.json';

export const ContactForm = ({ formName = 'Contact Form' }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [countryCode, setCountryCode] = useState('+20');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setStatus('idle');
    trackFormSubmit(formName);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${data.fname} ${data.lname}`,
          email: data.email,
          phone: `${countryCode}${data.phone}`,
          propertyType: data.propertyType,
          message: data.message || `Phone: ${countryCode}${data.phone}`,
          subject: formName,
          honeypot: data.honeypot,
          sourcePage: typeof window !== 'undefined' ? window.location.pathname : '',
        }),
      });

      if (!response.ok) throw new Error('Submission failed');

      setStatus('success');
      reset();
      trackLead(formName);
      trackGoogleAdsLead();
    } catch (error) {
      console.error(error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-inner-wrapper">
        {status === 'success' ? (
          <div className="form-submission-text" style={{ display: 'block' }}>
            <p><strong>Thank you for contacting us, we will get back to you as soon as possible.</strong>!</p>
          </div>
        ) : (
          <form autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
            
            {status === 'error' && (
              <div className="field-error" style={{ color: 'red', marginBottom: '20px' }}>
                Something went wrong. Please try again later.
              </div>
            )}

            <div className="field-list clear">
              
              <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                <label htmlFor="honeypot">Don't fill this out if you're human</label>
                <input type="text" id="honeypot" {...register('honeypot')} tabIndex={-1} />
              </div>

              <fieldset id="name-yui_3_17_2_1_1558966104947_5275" className={`form-item fields name required ${errors.fname || errors.lname ? 'error' : ''}`}>
                <div className="title">Name <span className="required" aria-hidden="true">*</span></div>
                <legend className="title" style={{ display: 'none' }}>Name</legend>
                <div className="field first-name">
                  <label className="caption">
                    <input className="field-element field-control" type="text" spellCheck="false" maxLength={30} data-title="First" aria-required="true" {...register('fname')} />
                    <span className="caption-text">First Name</span>
                  </label>
                </div>
                <div className="field last-name">
                  <label className="caption">
                    <input className="field-element field-control" type="text" spellCheck="false" maxLength={30} data-title="Last" aria-required="true" {...register('lname')} />
                    <span className="caption-text">Last Name</span>
                  </label>
                </div>
              </fieldset>

              <div id="email-yui_3_17_2_1_1558966104947_5276" className={`form-item field email required ${errors.email ? 'error' : ''}`}>
                <label className="title" htmlFor="email-yui_3_17_2_1_1558966104947_5276-field">
                  Email <span className="required" aria-hidden="true">*</span>
                </label>
                <input className="field-element" id="email-yui_3_17_2_1_1558966104947_5276-field" type="email" autoComplete="email" spellCheck="false" aria-required="true" {...register('email')} />
              </div>

              <div id="phone-9b0b57dc-1da3-4c1c-a77e-3f796ad6dc47" className={`form-item field phone required ${errors.phone ? 'error' : ''}`}>
                <div className="title">Phone <span className="required" aria-hidden="true">*</span></div>
                <div className="field country-code">
                  <label className="caption">
                    <select
                      className="field-element"
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                    >
                      {countries.map((c: any) => (
                        <option key={c.code} value={c.phoneCode}>
                          {c.name} ({c.phoneCode})
                        </option>
                      ))}
                    </select>
                    <span className="caption-text">Country</span>
                  </label>
                </div>
                <div className="field phone-number">
                  <label className="caption">
                    <input className="field-element" id="phone-9b0b57dc-1da3-4c1c-a77e-3f796ad6dc47-field" type="tel" spellCheck="false" aria-required="true" {...register('phone')} />
                    <span className="caption-text">Number</span>
                  </label>
                </div>
              </div>

              <div id="select-722d0794-90b8-4219-bf2e-75bf605ade9c" className="form-item field select">
                <label className="title" htmlFor="select-722d0794-90b8-4219-bf2e-75bf605ade9c-field">
                  Choose a Property Type
                </label>
                <select id="select-722d0794-90b8-4219-bf2e-75bf605ade9c-field" aria-required="false" {...register('propertyType')}>
                  <option value="">Select an option</option>
                  <option value="Apartment 2 bedrooms">Apartment 2 bedrooms</option>
                  <option value="Apartment 3 bedrooms">Apartment 3 bedrooms</option>
                  <option value="Apartment 4 bedrooms">Apartment 4 bedrooms</option>
                  <option value="Duplexes with private Gardens">Duplexes with private Gardens</option>
                  <option value="Special Lofts">Special Lofts</option>
                  <option value="TOWNHOUSE">TOWNHOUSE</option>
                  <option value="TWINHOUSE">TWINHOUSE</option>
                  <option value="STANDALONE VILLA">STANDALONE VILLA</option>
                </select>
              </div>

              <div id="textarea-yui_3_17_2_1_1558966104947_5278" className="form-item field textarea">
                <label className="title" htmlFor="textarea-yui_3_17_2_1_1558966104947_5278-field">
                  Message
                </label>
                <div className="description">Let Us Know What You Need Help With</div>
                <textarea className="field-element" id="textarea-yui_3_17_2_1_1558966104947_5278-field" spellCheck="false" aria-required="false" {...register('message')}></textarea>
              </div>

            </div>

            <div className="form-button-wrapper form-button-wrapper--align-left">
              <button 
                className="button sqs-system-button sqs-editable-button sqs-button-element--primary" 
                type="submit" 
                disabled={isSubmitting}
              >
                <span className="submit-form-label">{isSubmitting ? 'Submitting...' : 'Click Here'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
