import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

function ReturnButton({ to = '/' }) {
  return (
    <MotionLink
      to={to}
      className="return-button"
      aria-label="Return to Home"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <FaArrowLeft />
      <span className="return-button-text">Home</span>
    </MotionLink>
  );
}

export default ReturnButton; 