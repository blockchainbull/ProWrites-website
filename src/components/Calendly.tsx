'use client'
import { useEffect } from 'react';

declare global {
  interface Window {
    Calendly: {
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
      }) => void;
    };
  }
}

const CalendlyWidget: React.FC = () => {
  useEffect(() => {
    // Check if already loaded
    if (document.querySelector('[data-calendly-widget="true"]')) {
      return;
    }

    // Add CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    link.setAttribute('data-calendly-widget', 'true');
    document.head.appendChild(link);

    // Add JS
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.setAttribute('data-calendly-widget', 'true');
    
    script.onload = () => {
      console.log('Calendly script loaded'); // Debug log
      
      // Small delay to ensure everything is ready
      setTimeout(() => {
        if (window.Calendly) {
          console.log('Initializing Calendly widget'); // Debug log
          window.Calendly.initBadgeWidget({
            url: 'https://calendly.com/contact-prowrites/20min',
            text: 'Schedule a Meeting',
            color: '#008080',
            textColor: '#ffffff'
          });
        } else {
          console.log('Calendly not available'); // Debug log
        }
      }, 100);
    };

    script.onerror = () => {
      console.error('Failed to load Calendly script');
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup
      const existingLink = document.querySelector('[data-calendly-widget="true"][rel="stylesheet"]');
      const existingScript = document.querySelector('[data-calendly-widget="true"][src*="calendly"]');
      
      if (existingLink) document.head.removeChild(existingLink);
      if (existingScript) document.head.removeChild(existingScript);
    };
  }, []);

  return null;
};

export default CalendlyWidget;