import React, { useState, useEffect, useCallback } from 'react';

// List of languages we want to offer. `code` matches Google Translate short code.
const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'pa', label: 'Punjabi' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'zh-CN', label: '中文' },
  { code: 'hi', label: 'हिंदी' },
];

function TranslateButton() {
  const [open, setOpen] = useState(false);
  const [widgetReady, setWidgetReady] = useState(false);

  // Load Google Translate script once on mount
  useEffect(() => {
    // Avoid loading twice
    if (window.google && window.google.translate) return;

    window.googleTranslateElementInit = () => {
      // eslint-disable-next-line no-new
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: LANGUAGES.map(l => l.code).join(','),
          autoDisplay: false,
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element',
      );
    };

    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup: optional – remove script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Detect when the hidden select is available
  useEffect(() => {
    if (widgetReady) return;
    const interval = setInterval(() => {
      const combo = document.querySelector('.goog-te-combo');
      if (combo) {
        setWidgetReady(true);
        clearInterval(interval);
      }
    }, 300);
    return () => clearInterval(interval);
  }, [widgetReady]);

  // Helper to trigger language change
  const changeLanguage = useCallback((code) => {
    const combo = document.querySelector('.goog-te-combo');

    // Helper to set cookie so that even full page reload preserves language
    const setLangCookie = (lang) => {
      const path = `/en/${lang}`;
      document.cookie = `googtrans=${path};path=/`;
      document.cookie = `googtrans=${path};domain=${window.location.hostname};path=/`;
    };

    if (combo) {
      combo.value = code;
      const event = new Event('change');
      combo.dispatchEvent(event);
      setLangCookie(code);
    } else {
      // Fallback: set cookie then reload
      setLangCookie(code);
      window.location.reload();
    }

    setOpen(false);
  }, []);

  return (
    <div className="translate-button-container" style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: 9999 }}>
      {/* Hidden div for Google Translate (kept off-screen but still rendered) */}
      <div
        id="google_translate_element"
        style={{
          position: 'absolute',
          opacity: 0,
          pointerEvents: 'none',
        }}
      ></div>

      <button
        className="translate-button liquid-glass"
        onClick={() => setOpen(prev => !prev)}
        aria-label="Translate website"
      >
        🌐 Translate
      </button>

      {open && (
        <div
          className="translate-popup liquid-glass"
          style={{
            position: 'absolute',
            bottom: '110%',
            left: 0,
            background: 'var(--medium-bg)',
            border: '1px solid var(--border-color)',
            borderRadius: '8px',
            padding: '6px',
            minWidth: '120px',
            zIndex: 10000,
          }}
        >
          {LANGUAGES.map(({ code, label }) => (
            <button
              key={code}
              onClick={() => changeLanguage(code)}
              style={{
                display: 'block',
                width: '100%',
                background: 'transparent',
                border: 'none',
                textAlign: 'left',
                padding: '4px 6px',
                color: 'var(--light-text)',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: '0.85rem',
              }}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default TranslateButton; 