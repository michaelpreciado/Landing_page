import React, { useEffect, useId } from 'react';
import { motion } from 'framer-motion'; // Import motion
import { autoApplyLiquidGlass } from '../utils/liquidGlass.js';

function ElectricCoffeeIcon({ size = 120 }) {
  const rawId = useId().replace(/:/g, '');
  const cupGradientId = `${rawId}-cup`;
  const rimGradientId = `${rawId}-rim`;
  const steamGradientId = `${rawId}-steam`;
  const glowId = `${rawId}-glow`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      role="img"
      aria-labelledby={`${rawId}-title`}
      style={{ filter: 'drop-shadow(0 0 18px rgba(0, 162, 255, 0.45))' }}
    >
      <title id={`${rawId}-title`}>Electric neon coffee cup</title>
      <defs>
        <linearGradient id={cupGradientId} x1="30" y1="52" x2="90" y2="92" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0B2A52" />
          <stop offset="0.5" stopColor="#0F4C81" />
          <stop offset="1" stopColor="#1E90FF" />
        </linearGradient>
        <linearGradient id={rimGradientId} x1="28" y1="32" x2="92" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#6EC6FF" />
          <stop offset="1" stopColor="#C4F1FF" />
        </linearGradient>
        <linearGradient id={steamGradientId} x1="56" y1="8" x2="72" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#7FDBFF" stopOpacity="0.9" />
          <stop offset="1" stopColor="#7FDBFF" stopOpacity="0" />
        </linearGradient>
        <filter id={glowId} x="-40%" y="-40%" width="180%" height="200%" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="6" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter={`url(#${glowId})`}>
        {/* Saucer */}
        <ellipse cx="60" cy="98" rx="42" ry="10" fill="rgba(0, 140, 255, 0.25)" />
        <ellipse cx="60" cy="96" rx="34" ry="8" fill="rgba(0, 160, 255, 0.35)" />

        {/* Cup body */}
        <path
          d="M20 52h70c8 0 15 7 15 15s-7 15-15 15h-6c-6 14-20 24-34 24S32 96 26 82h-6c-8 0-15-7-15-15s7-15 15-15z"
          fill={`url(#${cupGradientId})`}
          stroke="#63D2FF"
          strokeWidth="2"
        />

        {/* Cup rim */}
        <ellipse cx="45" cy="52" rx="30" ry="14" fill={`url(#${rimGradientId})`} stroke="#97F3FF" strokeWidth="2" />
        <ellipse cx="45" cy="52" rx="24" ry="9" fill="rgba(5, 40, 80, 0.8)" />

        {/* Handle */}
        <path
          d="M90 60c6 0 11 5 11 11s-5 11-11 11h-8"
          fill="none"
          stroke="#7FDBFF"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Highlight */}
        <path
          d="M28 66c2 10 10 28 30 28 20 0 28-18 30-28"
          stroke="rgba(200, 244, 255, 0.35)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Steam */}
        <path
          d="M54 22c-4 6-1 10 2 14 3 4 5 8-1 12"
          stroke={`url(#${steamGradientId})`}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M68 18c-5 8-2 12 1 16 3 4 5 8-1 12"
          stroke={`url(#${steamGradientId})`}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

function Contact() {
  // Apply liquid glass effects when component mounts
  useEffect(() => {
    autoApplyLiquidGlass();
  }, []);

  return (
    <section id="contact" className="fade-in-section">
      <div className="text-center" style={{ position: 'relative', zIndex: 1 }}>
        {/* Wrap motion.span with an anchor tag */}
        <a href="https://buymeacoffee.com/mpreciado" style={{ textDecoration: 'none', color: 'inherit' }}>
          <motion.div
            style={{ display: 'inline-flex', cursor: 'pointer' }}
            animate={{ y: [0, -8, 0] }} // Simple bobbing animation
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'loop',
              ease: "easeInOut"
            }}
          >
            <ElectricCoffeeIcon size={120} />
          </motion.div>
          
        </a>
        <h2>Contact Me</h2>
        {/* Enhanced form with liquid glass container */}
        <div className="liquid-glass liquid-glass--card contact-form-container" data-reactive>
          <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="contact-form" action="/success">
            {/* Netlify hidden input for form name */}
            <input type="hidden" name="form-name" value="contact" />
            {/* Netlify honeypot field */}
            <p style={{ display: 'none' }}>
              <label>Don't fill this out if you're human: <input name="bot-field" /></label>
            </p>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required className="form-input" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email address" required className="form-input" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Type your message here..." required rows="5" className="form-textarea"></textarea>
            </div>

            <motion.button 
              type="submit" 
              className="submit-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>&#x27A4;</span> Send Message
            </motion.button>
          </form>
        </div>
        
        {/* Footer */}
        <footer className="site-footer" style={{ marginTop: '4rem', padding: '3rem 1rem 2rem', textAlign: 'center', borderTop: '1px solid var(--border-color)' }}>
          <div className="social-icons" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
            <a href="https://github.com/mpreciado3" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="GitHub" style={{ color: 'var(--medium-text)', textDecoration: 'none' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/michael-preciado-dev" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="LinkedIn" style={{ color: 'var(--medium-text)', textDecoration: 'none' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="mailto:contact@michaelpreciado.dev" className="footer-icon" aria-label="Email" style={{ color: 'var(--medium-text)', textDecoration: 'none' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
                <rect x="2" y="4" width="20" height="16" rx="2" ry="2"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>
          <p style={{ fontSize: '0.9rem', margin: '0', color: 'var(--medium-text)' }}>
            © 2025 Michael Preciado
          </p>
          <p style={{ fontSize: '0.8rem', fontStyle: 'italic', opacity: 0.8, margin: '0.5rem 0 0 0', color: 'var(--medium-text)' }}>
            Built with caffeine & curiosity.
          </p>
        </footer>
      </div>
    </section>
  );
}

export default Contact; 
