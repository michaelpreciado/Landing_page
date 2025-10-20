import React from 'react';
import LazyImage from './LazyImage';

/**
 * About Me section component featuring professional portrait and bio.
 * Two-column layout with image on left, content on right.
 * Responsive design collapses to single column on mobile.
 */
function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image-wrapper">
          <LazyImage
            src="/images/about/mp.jpeg"
            alt="Michael Preciado - Professional Portrait"
            className="about-image"
            quality="medium"
            maxWidth="800px"
            placeholder={
              <div style={{ 
                width: '100%', 
                height: '100%', 
                background: 'var(--medium-bg)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderRadius: '20px'
              }}>
                📸
              </div>
            }
          />
        </div>

        <div className="about-content">
          <h2 className="about-header">> About Me</h2>
          <div className="about-text">
            <p className="about-intro">
              > I'm a self-taught full-stack developer specializing in modern web development and AI integration. I build scalable applications from responsive interfaces to efficient backend systems, leveraging tools like <span className="tech-highlight">React</span>, <span className="tech-highlight">Node.js</span>, <span className="tech-highlight">Python</span>, and <span className="tech-highlight">cloud infrastructure</span>.
            </p>
            <p className="about-details">
              > With hands-on experience in automation systems and software support, I focus on creating smart, data-driven solutions that enhance productivity and user experience. My work blends software engineering principles with cutting-edge <span className="tech-highlight">AI</span> to help businesses streamline operations and elevate their digital presence.
            </p>
          </div>
        </div>
      </div>

      {/* Visual flow indicator */}
      <div className="about-flow-indicator" aria-hidden="true">
        <div className="flow-line"></div>
        <div className="flow-dot"></div>
      </div>
    </section>
  );
}

export default About; 