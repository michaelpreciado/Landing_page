import React, { useEffect, Suspense, lazy } from 'react';
import { Analytics } from '@vercel/analytics/react';
import MatrixRainBackground from './components/MatrixRainBackground';
import Hero from './components/Hero';
import Skills from './components/Skills';
import ScrollRevealTerminal from './components/ScrollRevealTerminal';
import PageTransition from './components/PageTransition';
import { autoApplyLiquidGlass } from './utils/liquidGlass.js';

// Lazy load below-the-fold components for better initial performance
const Connect = lazy(() => import('./components/Connect'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));

// Lightweight loading fallback for below-the-fold sections
const SectionLoader = ({ height = '300px' }) => (
  <div style={{ 
    height, 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    color: 'var(--medium-text)',
    fontSize: '0.9rem'
  }}>
    Loading section...
  </div>
);

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
          <Suspense fallback={<SectionLoader height="400px" />}>
            <About />
          </Suspense>
        </ScrollRevealTerminal>
        <ScrollRevealTerminal>
          <Suspense fallback={<SectionLoader height="200px" />}>
            <Connect />
          </Suspense>
        </ScrollRevealTerminal>
        <ScrollRevealTerminal>
          <Suspense fallback={<SectionLoader height="300px" />}>
            <Contact />
          </Suspense>
        </ScrollRevealTerminal>
      </main>
      <Analytics />
    </PageTransition>
  );
}

export default App;
