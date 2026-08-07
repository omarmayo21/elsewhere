type EventParams = {
  page_name?: string;
  page_path?: string;
  project_name?: string;
  button_name?: string;
  phone_number?: string;
  whatsapp_number?: string;
  form_name?: string;
  lead_type?: string;
  traffic_source?: string;
  device_type?: string;
  timestamp?: string;
  [key: string]: any;
};

// Extends Window to allow access to dataLayer and other third-party tracking scripts safely
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    clarity: (...args: any[]) => void;
  }
}

const isDebug = import.meta.env.VITE_ANALYTICS_DEBUG === 'true';

const logDebug = (eventName: string, params?: EventParams) => {
  if (isDebug && import.meta.env.MODE === 'development') {
    console.log(`[Analytics Debug] Event: ${eventName}`, params || {});
  }
};

const getCommonParams = (): EventParams => {
  return {
    page_path: window.location.pathname,
    device_type: /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
    timestamp: new Date().toISOString(),
  };
};

export const trackEvent = (eventName: string, params?: EventParams) => {
  const mergedParams = { ...getCommonParams(), ...params };
  logDebug(eventName, mergedParams);

  // 1. Google Analytics 4 (gtag)
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, mergedParams);
  }

  // 2. Google Tag Manager (dataLayer)
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...mergedParams,
    });
  }

  // 3. Meta Pixel (fbq)
  if (typeof window !== 'undefined' && window.fbq) {
    // Map some standard GA events to FB standard events
    let fbEvent = 'CustomEvent';
    if (eventName === 'page_view') fbEvent = 'PageView';
    if (eventName === 'generate_lead') fbEvent = 'Lead';
    if (eventName === 'contact') fbEvent = 'Contact';

    if (fbEvent !== 'CustomEvent') {
      window.fbq('track', fbEvent, mergedParams);
    } else {
      window.fbq('trackCustom', eventName, mergedParams);
    }
  }

  // 4. Microsoft Clarity (can capture custom tags)
  if (typeof window !== 'undefined' && window.clarity) {
    window.clarity('set', eventName, mergedParams.page_path || '');
  }
};

// Specialized Helper Functions
export const trackPageView = (page_name: string) => {
  trackEvent('page_view', { page_name });
};

export const trackLead = (form_name: string, lead_type: string = 'contact_form') => {
  trackEvent('generate_lead', { form_name, lead_type });
};

export const trackPhoneClick = (phone_number: string) => {
  trackEvent('phone_click', { phone_number });
};

export const trackWhatsAppClick = (whatsapp_number: string) => {
  trackEvent('whatsapp_click', { whatsapp_number });
};

export const trackFormSubmit = (form_name: string) => {
  trackEvent('form_submit', { form_name });
};

export const trackProjectView = (project_name: string) => {
  trackEvent('view_project', { project_name });
};

export const trackButtonClick = (button_name: string) => {
  trackEvent('button_click', { button_name });
};

export const trackScroll = (percentage: number = 90) => {
  trackEvent(`scroll_${percentage}`);
};
