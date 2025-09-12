import React, { useEffect, useState } from 'react';
import MatrixRainBackground from './MatrixRainBackground';
import PageTransition from './PageTransition';
import PageHeader from './PageHeader';
import Projects from './Projects';
import { autoApplyLiquidGlass } from '../utils/liquidGlass.js';

function ProjectsPage() {
  const [showBackground, setShowBackground] = useState(false);
  // Apply liquid glass effects after DOM is ready
  useEffect(() => {
    autoApplyLiquidGlass();
    // Defer heavy animated background until after first render/idle
    const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 300));
    const idleId = idle(() => setShowBackground(true), { timeout: 1000 });
    return () => {
      if ('cancelIdleCallback' in window) {
        // @ts-ignore
        window.cancelIdleCallback(idleId);
      }
    };
  }, []);
  return (
    <PageTransition>
      {showBackground && <MatrixRainBackground />}
      <PageHeader navTo="/blog" navText="Blogs" />
      <main style={{ position: 'relative', zIndex: 1, paddingTop: '2rem' }}>
        {/* Re-use existing Projects component so cards render consistently */}
        <Projects />
      </main>
    </PageTransition>
  );
}

export default ProjectsPage;