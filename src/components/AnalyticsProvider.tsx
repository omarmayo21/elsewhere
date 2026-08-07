import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '@/services/analytics';

export function AnalyticsProvider() {
  const location = useLocation();

  useEffect(() => {
    const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
    const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;
    const CLARITY_ID = import.meta.env.VITE_CLARITY_ID;

    // Initialize GA4
    if (GA_ID && !document.getElementById('ga-script')) {
      const script = document.createElement('script');
      script.id = 'ga-script';
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', GA_ID, {
        send_page_view: false, // We'll handle this manually on route change
      });
    }

    // Initialize Meta Pixel
    if (PIXEL_ID && !document.getElementById('meta-pixel-script')) {
      const script = document.createElement('script');
      script.id = 'meta-pixel-script';
      script.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${PIXEL_ID}');
      `;
      document.head.appendChild(script);
    }

    // Initialize Clarity
    if (CLARITY_ID && !document.getElementById('clarity-script')) {
      const script = document.createElement('script');
      script.id = 'clarity-script';
      script.innerHTML = `
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${CLARITY_ID}");
      `;
      document.head.appendChild(script);
    }
  }, []);

  // Track Page Views on route change
  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  return null;
}
