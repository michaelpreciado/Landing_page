import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { autoApplyLiquidGlass } from '../utils/liquidGlass.js';

/**
 * Minimalistic coffee icon in dodger blue
 */
function SimpleCoffeeIcon({ size = 80 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1E90FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ 
        filter: 'drop-shadow(0 0 10px rgba(30, 144, 255, 0.5))',
      }}
    >
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  );
}

function Contact() {
  // Apply liquid glass effects when component mounts
  useEffect(() => {
    autoApplyLiquidGlass();
  }, []);

  return (
    <section id="contact" className="fade-in-section terminal-contact">
      <div className="text-center" style={{ position: 'relative', zIndex: 1 }}>
        {/* Wrap motion.span with an anchor tag */}
        <a href="https://buymeacoffee.com/mpreciado" style={{ textDecoration: 'none', color: 'inherit' }}>
          <motion.div
            style={{ display: 'inline-flex', cursor: 'pointer' }}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'loop',
              ease: "easeInOut"
            }}
          >
            <SimpleCoffeeIcon size={80} />
          </motion.div>
        </a>

        {/* Footer */}
        <footer className="site-footer" style={{ marginTop: '4rem', padding: '3rem 1rem 2rem', textAlign: 'center', borderTop: '1px solid var(--border-color)' }}>
          <div className="social-icons" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
            <a href="https://github.com/michaelpreciado" className="footer-icon" aria-label="GitHub" style={{ color: 'var(--medium-text)', textDecoration: 'none', transition: 'color 0.2s' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/michael-preciado-74959b227/" className="footer-icon" aria-label="LinkedIn" style={{ color: 'var(--medium-text)', textDecoration: 'none', transition: 'color 0.2s' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="mailto:michael@preciadotech.com" className="footer-icon" aria-label="Email" style={{ color: 'var(--medium-text)', textDecoration: 'none', transition: 'color 0.2s' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
                <rect x="2" y="4" width="20" height="16" rx="2" ry="2"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>
          <p style={{ fontSize: '0.9rem', margin: '0', color: 'var(--medium-text)', fontFamily: 'var(--font-mono)' }}>
            © 2025 michael preciado
          </p>
          <p style={{ fontSize: '0.8rem', fontStyle: 'italic', opacity: 0.8, margin: '0.5rem 0 0 0', color: 'var(--medium-text)' }}>
            built with caffeine & curiosity.
          </p>
        </footer>
      </div>
    </section>
  );
}

export default Contact; 
