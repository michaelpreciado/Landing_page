import React, { useState, useEffect } from 'react';
import useTypewriter from '../hooks/useTypewriter';
import LazyImage from './LazyImage';

function Hero() {
  const firstName = "Michael";
  const lastName = "Preciado";
  const subtitle = "Software Developer & AI Automation";

  const typedFirstName = useTypewriter(firstName, 75);
  const typedLastName = useTypewriter(lastName, 75);
  const typedSubtitle = useTypewriter(subtitle, 50);

  const [showSymbol, setShowSymbol] = useState(false);

  useEffect(() => {
    if (typedFirstName === firstName && typedLastName === lastName) {
      setShowSymbol(true);
    }
  }, [typedFirstName, typedLastName, firstName, lastName]);

  return (
    <section id="hero">
      <LazyImage 
        src="/images/mp.jpeg" 
        alt="Michael Preciado - Software Developer" 
        className="profile-image"
        priority={true}
        placeholder={<div style={{ width: '150px', height: '150px', borderRadius: '50%', background: 'var(--medium-bg)' }}></div>}
      />
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', minHeight: '3rem' }}>
        <h1 style={{ marginRight: '10px', marginBottom: '0.2rem' }}>{typedFirstName}</h1> 
        {showSymbol && (
          <span 
            aria-hidden="true" 
            style={{ 
              fontSize: '2.2rem',
              fontFamily: "'Courier New', Courier, monospace",
              marginRight: '10px', 
              marginLeft: '10px',
              color: 'var(--light-text)', 
              fontWeight: 'bold'
            }}
            className="fade-in code-symbols"
          >
            &lt;/&gt; 
          </span>
        )}
        <h1 style={{ marginBottom: '0.2rem' }}>{typedLastName}</h1>
      </div>
      <p className="hero-subtitle" style={{ minHeight: '1.5rem', fontSize: '1rem', marginTop: '0' }}>{typedSubtitle}</p>
      {/* Skills buttons will be in the Skills component */}
    </section>
  );
}

export default Hero; 