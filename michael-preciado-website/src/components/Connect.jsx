import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEtsy, FaTiktok } from 'react-icons/fa';

const ConnectButton = ({ icon, text, link }) => (
  <a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="connect-button"
  >
    <span className="connect-button-content">
      {icon && <span className="connect-button-icon">{icon}</span>} 
      {text}
    </span>
    <span className="connect-button-arrow">&gt;</span>
  </a>
);

function Connect() {
  return (
    <section id="connect" style={{ maxWidth: '600px' }}>
      <h2>Connect With Me</h2>
      <div className="connect-buttons-container">
        <ConnectButton icon={<FaGithub />} text="GitHub" link="https://github.com/michaelpreciado?tab=repositories" />
        <ConnectButton icon={<FaLinkedin />} text="LinkedIn" link="https://www.linkedin.com/in/michael-preciado-74959b227/" />
        <ConnectButton icon={<FaTwitter />} text="X (Twitter)" link="https://x.com/mpdollars" />
        <ConnectButton icon={<FaInstagram />} text="Instagram" link="https://www.instagram.com/michael.preciado/" />
        <ConnectButton icon={<FaEtsy />} text="Etsy Shop" link="https://printsbypreciado.etsy.com" />
        <ConnectButton icon={<FaTiktok />} text="TikTok" link="https://www.tiktok.com/@.michael.preciado" />
      </div>
    </section>
  );
}

export default Connect; 