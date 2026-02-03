import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

/**
 * PageHeader component for navigation between pages - Terminal style.
 * Displays back to home link and optional navigation to another section.
 */
function PageHeader({ navTo, navText, title, subtitle }) {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    let frameId = null;

    const updateScrollState = () => {
      frameId = null;
      setIsAtTop(window.scrollY < 40);
    };

    const onScroll = () => {
      if (frameId) {
        return;
      }
      frameId = window.requestAnimationFrame(updateScrollState);
    };

    updateScrollState();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <div className="page-header terminal-page-header" style={{ 
      position: 'relative', 
      zIndex: 10, 
      padding: '1.5rem 1rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '3rem'
    }}>
      <div
        className={`page-header-nav ${isAtTop ? 'is-visible' : 'is-hidden'}`}
        style={{ 
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        alignContent: 'center',
        flexWrap: 'nowrap',
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        padding: '0 1rem',
        gap: '0.5rem',
        minHeight: '44px'
        }}
      >
        <MotionLink
          to="/"
          className="return-button terminal-nav-button"
          aria-label="Return to Home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          style={{ 
            marginRight: 'auto',
            flexShrink: 0,
            alignSelf: 'center'
          }}
        >
          <FaArrowLeft />
          <span className="return-button-text">Home</span>
        </MotionLink>

        {navTo && navText && (
          <MotionLink
            to={navTo}
            className="nav-link terminal-nav-button"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            style={{ 
              marginLeft: 'auto',
              flexShrink: 0,
              alignSelf: 'center'
            }}
          >
            {navText} →
          </MotionLink>
        )}
      </div>
      
      {title && (
        <div className="page-title-section" style={{ marginTop: '1rem' }}>
          <h1 className="page-title-terminal">
            <span className="terminal-prompt">&gt;</span> {title}
          </h1>
          {subtitle && (
            <p className="page-subtitle-terminal">{subtitle}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default PageHeader;
