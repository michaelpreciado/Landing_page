import React, { useEffect, useId } from 'react';
import { motion } from 'framer-motion'; // Import motion
import { autoApplyLiquidGlass } from '../utils/liquidGlass.js';

function ElectricCoffeeIcon({ size = 120 }) {
  const rawId = useId().replace(/:/g, '');
  const glassGradientId = `${rawId}-glass`;
  const liquidGradientId = `${rawId}-liquid`;
  const rimGradientId = `${rawId}-rim`;
  const steamGradientId = `${rawId}-steam`;
  const handleGradientId = `${rawId}-handle`;
  const saucerGradientId = `${rawId}-saucer`;
  const glowId = `${rawId}-glow`;
  const innerGlowId = `${rawId}-inner-glow`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      role="img"
      aria-labelledby={`${rawId}-title`}
      style={{ 
        filter: 'drop-shadow(0 0 25px rgba(0, 200, 255, 0.6)) drop-shadow(0 0 50px rgba(0, 150, 255, 0.3))',
      }}
    >
      <title id={`${rawId}-title`}>3D Electric neon coffee mug</title>
      <defs>
        {/* Glass outer gradient - cyan/blue neon outline */}
        <linearGradient id={glassGradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#00B8D4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0097FF" stopOpacity="0.9" />
        </linearGradient>

        {/* Dark liquid gradient */}
        <linearGradient id={liquidGradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0a0a15" />
          <stop offset="50%" stopColor="#1a0a20" />
          <stop offset="100%" stopColor="#0f0518" />
        </linearGradient>

        {/* Rim gradient - bright neon */}
        <radialGradient id={rimGradientId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#80DEEA" stopOpacity="0.8" />
          <stop offset="70%" stopColor="#00BCD4" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0097A7" stopOpacity="1" />
        </radialGradient>

        {/* Steam gradient - cyan to transparent */}
        <linearGradient id={steamGradientId} x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#64B5F6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#80DEEA" stopOpacity="0" />
        </linearGradient>

        {/* Handle gradient */}
        <linearGradient id={handleGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4DD0E1" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#00BCD4" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#0097A7" stopOpacity="0.9" />
        </linearGradient>

        {/* Saucer gradient */}
        <radialGradient id={saucerGradientId} cx="50%" cy="30%">
          <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#00B8D4" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#006064" stopOpacity="0.1" />
        </radialGradient>

        {/* Outer glow filter */}
        <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Inner glow filter for glass effect */}
        <filter id={innerGlowId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter={`url(#${glowId})`}>
        {/* Saucer/Base platform */}
        <ellipse cx="60" cy="98" rx="45" ry="8" fill={`url(#${saucerGradientId})`} opacity="0.6" />
        <ellipse cx="60" cy="97" rx="38" ry="6" fill="rgba(0, 229, 255, 0.2)" />

        {/* Main mug body (glass container) - 3D perspective */}
        <path
          d="M 35 50 Q 33 55 33 62 L 33 78 Q 33 85 37 88 L 83 88 Q 87 85 87 78 L 87 62 Q 87 55 85 50 Z"
          fill="rgba(5, 10, 30, 0.4)"
          stroke={`url(#${glassGradientId})`}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Inner dark liquid */}
        <path
          d="M 37 54 Q 36 57 36 62 L 36 76 Q 36 82 39 85 L 81 85 Q 84 82 84 76 L 84 62 Q 84 57 83 54 Z"
          fill={`url(#${liquidGradientId})`}
          opacity="0.95"
        />

        {/* Liquid surface reflection */}
        <ellipse 
          cx="60" 
          cy="54" 
          rx="23" 
          ry="4" 
          fill="rgba(0, 150, 255, 0.3)" 
          opacity="0.6"
        />

        {/* Glass rim (top edge) - bright neon */}
        <ellipse 
          cx="60" 
          cy="50" 
          rx="26" 
          ry="5" 
          fill={`url(#${rimGradientId})`}
          filter={`url(#${innerGlowId})`}
        />

        {/* Inner rim shadow for depth */}
        <ellipse 
          cx="60" 
          cy="51" 
          rx="24" 
          ry="4" 
          fill="rgba(10, 10, 25, 0.7)" 
        />

        {/* Left highlight on glass */}
        <path
          d="M 38 56 Q 37 62 37 70 L 37 78 Q 37 82 39 85"
          fill="none"
          stroke="rgba(100, 220, 255, 0.4)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Right highlight on glass */}
        <path
          d="M 82 56 Q 83 62 83 70 L 83 78 Q 83 82 81 85"
          fill="none"
          stroke="rgba(60, 180, 230, 0.3)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Handle - 3D curved */}
        <path
          d="M 87 60 Q 95 60 100 65 Q 105 70 105 75 Q 105 80 100 85 Q 95 90 87 90"
          fill="none"
          stroke={`url(#${handleGradientId})`}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />

        {/* Handle inner edge for 3D effect */}
        <path
          d="M 87 63 Q 93 63 97 67 Q 101 71 101 75 Q 101 79 97 83 Q 93 87 87 87"
          fill="none"
          stroke="rgba(0, 100, 150, 0.5)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Handle highlight */}
        <path
          d="M 89 62 Q 94 62 98 66 Q 102 70 102 74"
          fill="none"
          stroke="rgba(150, 240, 255, 0.6)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Front glass reflection streak */}
        <path
          d="M 45 58 Q 43 65 43 72 Q 43 78 45 83"
          fill="none"
          stroke="rgba(200, 245, 255, 0.25)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Steam wisps - more organic and flowing */}
        <path
          d="M 52 35 Q 48 38 50 42 Q 52 46 50 50"
          stroke={`url(#${steamGradientId})`}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        >
          <animate
            attributeName="opacity"
            values="0.3;0.7;0.3"
            dur="3s"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; -2,-3; 0,0"
            dur="3s"
            repeatCount="indefinite"
          />
        </path>

        <path
          d="M 60 30 Q 56 34 58 39 Q 60 44 58 49"
          stroke={`url(#${steamGradientId})`}
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        >
          <animate
            attributeName="opacity"
            values="0.4;0.8;0.4"
            dur="2.5s"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 1,-4; 0,0"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </path>

        <path
          d="M 68 33 Q 64 37 66 42 Q 68 47 66 51"
          stroke={`url(#${steamGradientId})`}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        >
          <animate
            attributeName="opacity"
            values="0.35;0.75;0.35"
            dur="2.8s"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 2,-3; 0,0"
            dur="2.8s"
            repeatCount="indefinite"
          />
        </path>
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
            <a href="https://github.com" className="footer-icon" aria-label="GitHub" style={{ color: 'var(--medium-text)', textDecoration: 'none' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/michael-preciado-74959b227/" className="footer-icon" aria-label="LinkedIn" style={{ color: 'var(--medium-text)', textDecoration: 'none' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="mailto:michael@preciadotech.com" className="footer-icon" aria-label="Email" style={{ color: 'var(--medium-text)', textDecoration: 'none' }}>
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
