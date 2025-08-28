import React, { useEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion
import { autoApplyLiquidGlass } from '../utils/liquidGlass.js';

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
          <motion.span
            style={{ fontSize: '4em', display: 'block', cursor: 'pointer' }}
            animate={{ y: [0, -8, 0] }} // Simple bobbing animation
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'loop',
              ease: "easeInOut"
            }}
          >
            ☕
          </motion.span>
          
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
            <a href="https://github.com/mpreciado3" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--medium-text)', textDecoration: 'none' }}>
              GitHub
            </a>
            <a href="https://linkedin.com/in/michael-preciado-dev" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--medium-text)', textDecoration: 'none' }}>
              LinkedIn
            </a>
            <a href="mailto:contact@michaelpreciado.dev" style={{ color: 'var(--medium-text)', textDecoration: 'none' }}>
              Email
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