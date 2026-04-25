import React, { useEffect, Suspense, lazy } from 'react';
import { Analytics } from '@vercel/analytics/react';
import MatrixRainBackground from './components/MatrixRainBackground';
import Hero from './components/Hero';
import PageTransition from './components/PageTransition';
import { autoApplyLiquidGlass } from './utils/liquidGlass.js';
import { autoApplyScrollReveal } from './utils/scrollReveal.js';

// Lazy load below-the-fold components for better initial performance
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
  // Apply liquid glass effects and scroll reveal after DOM is ready
  useEffect(() => {
    autoApplyLiquidGlass();
    autoApplyScrollReveal();
  }, []);
  return (
    <PageTransition>
      <MatrixRainBackground />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Suspense fallback={<SectionLoader height="300px" />}>
          <Contact />
        </Suspense>
      </main>
      <Analytics />
    </PageTransition>
  );
}

export default App;
