import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

function PageNavButton({ to, text, icon }) {
  return (
    <MotionLink
      to={to}
      className="page-nav-button"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <span>{text}</span>
      <span className="nav-arrow">{icon || '→'}</span>
    </MotionLink>
  );
}

export default PageNavButton; 