import React, { useState, useEffect } from 'react';
import LazyImage from './LazyImage';

/**
 * Minimalistic dodger blue icons
 */
const Icon = ({ type, size = 14 }) => {
  const icons = {
    blog: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8" />,
    code: <path d="M16 18l6-6-6-6 M8 6l-6 6 6 6" />,
    instagram: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></>,
    github: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
    twitter: <><path d="M4 4l16 16M20 4L4 20" /></>,
    mail: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></>,
    calendar: <><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1E90FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }}
    >
      {icons[type]}
    </svg>
  );
};

/**
 * Terminal-style hero section with profile image and minimal animations for performance
 */
const Hero = React.memo(() => {
  // Removed state-based blinking to prevent re-renders
  // const [showCursor, setShowCursor] = useState(true);

  // Blinking cursor effect moved to CSS
  /*
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);
  */

  return (
    <section id="hero" className="terminal-hero">
      <div className="terminal-container">
        {/* Terminal header bar */}
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="terminal-button red"></span>
            <span className="terminal-button yellow"></span>
            <span className="terminal-button green"></span>
          </div>
          <span className="terminal-title">michael@terminal:~</span>
        </div>

        {/* Terminal content */}
        <div className="terminal-content">
          {/* Profile Image */}
          <div className="terminal-image-wrapper">
            <LazyImage
              src="/images/hero/mp.jpeg"
              alt="Michael Preciado - Software Developer"
              className="profile-image terminal-profile-small"
              priority={true}
              fetchPriority="high"
              quality="high"
              maxWidth="200px"
              placeholder={<div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--medium-bg)' }}></div>}
            />
          </div>

          {/* ASCII Art Portrait */}
          <pre className="ascii-art" style={{ display: 'none' }}>
            {`    ⢀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⡀
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⣿⣿
    ⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿
    ⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿`}
          </pre>

          {/* Terminal prompt with name */}
          <div className="terminal-line">
            <h1 className="terminal-name">&gt; Michael Preciado</h1>
          </div>

          {/* Bio section */}
          <div className="terminal-bio">
            <p className="terminal-text">
              <span className="terminal-prompt">&gt;</span> Currently based in California
            </p>
            <p className="terminal-text">
              <span className="terminal-prompt">&gt;</span> Self-taught full stack developer, tech enthusiast & builder
            </p>
            <p className="terminal-text blank-line"></p>
            <p className="terminal-text">
              <span className="terminal-prompt">&gt;</span> currently studying artificial intelligence and working on personal projects.
            </p>
            <p className="terminal-text blank-line"></p>

            {/* Interests section */}
            <p className="terminal-text">
              <span className="terminal-label">interests :</span> tech, software engineering, ai/ml, automation,
            </p>
            <p className="terminal-text terminal-indent">
              web development, data science, photography, hiking,
            </p>
            <p className="terminal-text terminal-indent">
              exploring new ideas
            </p>
            <p className="terminal-text blank-line"></p>

            <p className="terminal-text">
              <a href="/resume" className="terminal-link-inline" style={{ color: '#1E90FF' }}>my work experience</a>
            </p>
            <p className="terminal-text blank-line"></p>

            {/* Status update */}
            <p className="terminal-text terminal-indent">
              <span className="terminal-prompt">↳</span> will update soon
            </p>
            <p className="terminal-text blank-line"></p>

            {/* Links section header */}
            <div className="terminal-links-section">
              <p className="terminal-text">
                <span className="bullet">●</span> <span className="terminal-emphasis">take a look at</span>
              </p>
              <p className="terminal-text terminal-indent-double">
                <span className="link-bullet">○</span> <a href="/blog" className="terminal-link-inline"><Icon type="blog" />my articles...</a>
              </p>
              <p className="terminal-text terminal-indent-double">
                <span className="link-bullet">○</span> <a href="/projects" className="terminal-link-inline"><Icon type="code" />my projects...</a>
              </p>

              <p className="terminal-text">
                <span className="bullet">●</span> <span className="terminal-emphasis">my links</span>
              </p>
              <p className="terminal-text terminal-indent-double">
                <span className="link-bullet">○</span> <a href="https://www.instagram.com/preciado.tech?igsh=MTh0aWo2dndianNmdw%3D%3D&utm_source=qr" className="terminal-link-inline"><Icon type="instagram" />instagram</a>
              </p>
              <p className="terminal-text terminal-indent-double">
                <span className="link-bullet">○</span> <a href="https://github.com/michaelpreciado" className="terminal-link-inline"><Icon type="github" />github</a>
              </p>
              <p className="terminal-text terminal-indent-double">
                <span className="link-bullet">○</span> <a href="https://www.linkedin.com/in/michael-preciado-74959b227/" className="terminal-link-inline"><Icon type="linkedin" />linkedin</a>
              </p>
              <p className="terminal-text terminal-indent-double">
                <span className="link-bullet">○</span> <a href="https://x.com/mpdollars" className="terminal-link-inline"><Icon type="twitter" />x-social</a>
              </p>
              <p className="terminal-text terminal-indent-double">
                <span className="link-bullet">○</span> <a href="mailto:michael@preciadotech.com" className="terminal-link-inline"><Icon type="mail" />email me</a>
              </p>
              <p className="terminal-text terminal-indent-double">
                <span className="link-bullet">○</span> <a href="https://meetings-na2.hubspot.com/michael-preciado" className="terminal-link-inline"><Icon type="calendar" />book a meeting</a>
              </p>
            </div>
          </div>

          {/* Blinking cursor */}
          <div className="terminal-cursor-line">
            <span className="terminal-prompt">$</span>
            <span className="terminal-cursor blinking-cursor">_</span>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero; 
