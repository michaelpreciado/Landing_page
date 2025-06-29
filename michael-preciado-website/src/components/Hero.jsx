import React, { useState, useEffect } from 'react';
import useTypewriter from '../hooks/useTypewriter';

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
      <img 
        src="/images/mp.jpeg" 
        alt="Profile" 
        className="profile-image"
      />
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', minHeight: '3rem' }}>
        <h1 style={{ marginRight: '10px' }}>{typedFirstName}</h1> 
        {showSymbol && (
          <span 
            aria-hidden="true" 
            style={{ 
              fontSize: '2rem',
              fontFamily: "'Courier New', Courier, monospace",
              marginRight: '10px', 
              marginLeft: '10px',
              color: 'white', 
              textShadow: '0 0 5px blue, 0 0 10px blue'
            }}
            className="fade-in"
          >
            &lt;/&gt; 
          </span>
        )}
        <h1>{typedLastName}</h1>
      </div>
      <p className="hero-subtitle" style={{ minHeight: '1.5rem' }}>{typedSubtitle}</p>
      {/* Skills buttons will be in the Skills component */}
    </section>
  );
}

export default Hero; 