import React from 'react';
import { motion } from 'framer-motion'; // Import motion

function Contact() {
  return (
    <section id="contact" className="fade-in-section">
      <div className="text-center" style={{ position: 'relative', zIndex: 1 }}>
        {/* Wrap motion.span with an anchor tag */}
        <a href="https://buymeacoffee.com/mpreciado" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          <motion.span
            style={{ fontSize: '4em', display: 'block', marginBottom: '15px', cursor: 'pointer' }} // Added cursor: pointer
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
        {/* Ensure form attributes are correct for Netlify */}
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

          <button type="submit" className="submit-button">
            <span style={{ marginRight: '10px' }}>&#x27A4;</span> Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact; 