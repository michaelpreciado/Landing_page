import React from 'react';
import { FaLinkedin, FaInstagram, FaBook, FaProjectDiagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const ConnectButton = ({ icon, text, link }) => (
  <a 
    href={link} 
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
      <h2>Connect</h2>
      <div className="connect-buttons-container">
        <ConnectButton icon={<FaLinkedin />} text="LinkedIn" link="https://www.linkedin.com/in/michael-preciado-74959b227/" />
        <ConnectButton icon={<FaXTwitter />} text="X (Twitter)" link="https://x.com/mpdollars" />
        <ConnectButton icon={<FaInstagram />} text="Instagram" link="https://www.instagram.com/michael.preciado/" />
        <ConnectButton icon={<FaProjectDiagram />} text="Projects" link="/projects" />
        <ConnectButton icon={<FaBook />} text="Blogs" link="/blog" />
      </div>
    </section>
  );
}

export default Connect; 