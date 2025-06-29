import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function ReturnButton({ to = '/' }) {
  return (
    <Link to={to} className="return-button" aria-label="Return to Home">
      <FaArrowLeft />
      <span className="return-button-text">Home</span>
    </Link>
  );
}

export default ReturnButton; 