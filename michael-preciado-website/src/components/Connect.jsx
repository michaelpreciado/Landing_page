import React from 'react';
import { FaLinkedin, FaInstagram, FaBook, FaProjectDiagram, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const SocialCard = ({ icon, platform, handle, link, description }) => (
  <a 
    href={link} 
    className="social-card"
    target={link.startsWith('http') ? "_blank" : "_self"}
    rel={link.startsWith('http') ? "noopener noreferrer" : ""}
  >
    <div className="social-card-icon">
      {icon}
    </div>
    <div className="social-card-content">
      <h3 className="social-card-platform">{platform}</h3>
      <p className="social-card-handle">{handle}</p>
      {description && <p className="social-card-description">{description}</p>}
    </div>
  </a>
);

function Connect() {
  return (
    <section id="connect">
      <div className="connect-header">
        <h2>Let's Connect</h2>
        <p className="connect-subtitle">Feel free to reach out and tell me anything on your mind</p>
      </div>
      <div className="social-grid">
        <SocialCard 
          icon={<FaXTwitter />} 
          platform="X (Twitter)" 
          handle="@mpdollars" 
          link="https://x.com/mpdollars" 
        />
        <SocialCard 
          icon={<FaInstagram />} 
          platform="Instagram" 
          handle="@michael.preciado" 
          link="https://www.instagram.com/michael.preciado/" 
        />
        <SocialCard 
          icon={<FaGithub />} 
          platform="GitHub" 
          handle="@michaelpreciado" 
          link="https://github.com/michaelpreciado" 
        />
        <SocialCard 
          icon={<FaLinkedin />} 
          platform="LinkedIn" 
          handle="@michael-preciado" 
          link="https://www.linkedin.com/in/michael-preciado-74959b227/" 
        />
        <SocialCard 
          icon={<FaBook />} 
          platform="Blogs" 
          handle="Personal Blog" 
          link="/blog"
        />
        <SocialCard 
          icon={<FaProjectDiagram />} 
          platform="Projects" 
          handle="My Portfolio" 
          link="/projects"
        />
      </div>
    </section>
  );
}

export default Connect; 