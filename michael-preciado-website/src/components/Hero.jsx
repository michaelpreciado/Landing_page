import React from 'react';
import LazyImage from './LazyImage';

function Hero() {
  const firstName = "Michael";
  const lastName = "Preciado";
  const subtitle = "Software Developer & AI Automation";

  return (
    <section id="hero">
      <LazyImage 
        src="/images/mp.jpeg" 
        alt="Michael Preciado - Software Developer" 
        className="profile-image"
        priority={true}
        quality="high"
        maxWidth="300px"
        placeholder={<div style={{ width: '150px', height: '150px', borderRadius: '50%', background: 'var(--medium-bg)' }}></div>}
      />
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', minHeight: '3rem' }}>
        <h1 style={{ marginRight: '10px', marginBottom: '0.2rem', color: 'white' }}>{firstName}</h1> 
        <span 
          aria-hidden="true" 
          style={{ 
            fontSize: '2.2rem',
            fontFamily: "'Courier New', Courier, monospace",
            marginRight: '10px', 
            marginLeft: '10px',
            color: 'white', 
            fontWeight: 'bold'
          }}
        >
          &lt;/&gt; 
        </span>
        <h1 style={{ marginBottom: '0.2rem', color: 'white' }}>{lastName}</h1>
      </div>
      <p className="hero-subtitle" style={{ minHeight: '1.5rem', fontSize: '1rem', marginTop: '0', color: 'white' }}>{subtitle}</p>
      {/* Skills buttons will be in the Skills component */}
    </section>
  );
}

export default Hero; 