import React from 'react';
import { Link } from 'react-router-dom';

function ReturnButton({ to = "/", label = "Home" }) {
  return (
    <>
      <Link 
        to={to} 
        className="return-button"
        aria-label={label}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        <span>{label}</span>
      </Link>
      <style>{`
        .return-button {
          position: fixed;
          top: 1.5rem;
          left: 1.5rem;
          z-index: 100;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1rem;
          background: rgba(10, 25, 47, 0.6);
          border: 1px solid rgba(30, 144, 255, 0.25);
          border-radius: 6px;
          color: #B8B0A0;
          font-size: 0.8rem;
          text-decoration: none;
          transition: all 0.2s ease;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        .return-button:hover {
          background: rgba(30, 144, 255, 0.15);
          border-color: rgba(30, 144, 255, 0.4);
          color: #FFFFFF;
        }
        @media (min-width: 640px) {
          .return-button {
            top: 2rem;
            left: 2rem;
          }
        }
      `}</style>
    </>
  );
}

export default ReturnButton;
