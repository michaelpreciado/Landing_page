import React from 'react';
import LazyImage from './LazyImage';

function Hero() {
  const firstName = "Michael";
  const lastName = "Preciado";
  const subtitle = "Software Developer & AI Automation";

  return (
    <section id="hero">
      <LazyImage 
        src="/images/hero/mp.jpeg" 
        alt="Michael Preciado - Software Developer" 
        className="profile-image"
        style={{ opacity: 0.65 }}
        priority={true}
        quality="high"
        maxWidth="300px"
        placeholder={<div style={{ width: '150px', height: '150px', borderRadius: '50%', background: 'var(--medium-bg)' }}></div>}
      />
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', minHeight: '4rem' }}>
        <h1 className="hero-name-glow" style={{ marginBottom: '0.2rem', color: 'white', fontSize: '3.5rem', fontWeight: '700' }}>{firstName}</h1> 
        <span 
          aria-hidden="true" 
          className="hero-code-glow"
          style={{ 
            fontSize: '3rem',
            fontFamily: "'Courier New', Courier, monospace",
            marginLeft: '8px',
            marginRight: '8px',
            color: 'white', 
            fontWeight: 'bold'
          }}
        >
          &lt;/&gt; 
        </span>
        <h1 className="hero-name-glow" style={{ marginBottom: '0.2rem', color: 'white', fontSize: '3.5rem', fontWeight: '700' }}>{lastName}</h1>
      </div>
      <p className="hero-subtitle" style={{ minHeight: '1.5rem', fontSize: '1rem', marginTop: '0', color: 'white' }}>{subtitle}</p>
      {/* Skills buttons will be in the Skills component */}
    </section>
  );
}

export default Hero; 