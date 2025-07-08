import React, { useEffect } from 'react';
import MatrixRainBackground from './components/MatrixRainBackground';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Connect from './components/Connect';
import About from './components/About';
import ScrollRevealTerminal from './components/ScrollRevealTerminal';
import Contact from './components/Contact';
import PageTransition from './components/PageTransition';
import { autoApplyLiquidGlass } from './utils/liquidGlass.js';
// Removed './App.css' import as global styles are in index.css

function App() {
  // Apply liquid glass effects after DOM is ready
  useEffect(() => {
    autoApplyLiquidGlass();
  }, []);
  return (
    <PageTransition>
      <MatrixRainBackground />
      <main style={{ position: 'relative', zIndex: 1 }}> {/* Ensure content is above background */}
        <Hero />
        <ScrollRevealTerminal>
          <Skills />
        </ScrollRevealTerminal>
        <ScrollRevealTerminal>
          <Connect />
        </ScrollRevealTerminal>
        <ScrollRevealTerminal>
          <About />
        </ScrollRevealTerminal>
        <ScrollRevealTerminal>
          <Contact />
        </ScrollRevealTerminal>
      </main>
    </PageTransition>
  );
}

export default App;
