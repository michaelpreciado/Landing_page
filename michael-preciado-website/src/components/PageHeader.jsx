import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

/**
 * PageHeader component for navigation between pages.
 * Displays back to home link and optional navigation to another section.
 */
function PageHeader({ navTo, navText }) {
  return (
    <div className="page-header" style={{ 
      position: 'relative', 
      zIndex: 10, 
      padding: '1rem 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <MotionLink
        to="/"
        className="return-button"
        aria-label="Return to Home"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <FaArrowLeft />
        <span className="return-button-text">Home</span>
      </MotionLink>

      {navTo && navText && (
        <MotionLink
          to={navTo}
          className="nav-link"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          style={{
            color: 'var(--text-color, #fff)',
            textDecoration: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            transition: 'all 0.3s ease'
          }}
        >
          {navText} →
        </MotionLink>
      )}
    </div>
  );
}

export default PageHeader;

