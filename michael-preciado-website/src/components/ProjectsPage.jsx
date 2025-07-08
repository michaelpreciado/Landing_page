import React, { useEffect } from 'react';
import MatrixRainBackground from './MatrixRainBackground';
import PageTransition from './PageTransition';
import PageHeader from './PageHeader';
import Projects from './Projects';
import { autoApplyLiquidGlass } from '../utils/liquidGlass.js';

function ProjectsPage() {
  // Apply liquid glass effects after DOM is ready
  useEffect(() => {
    autoApplyLiquidGlass();
  }, []);
  return (
    <PageTransition>
      <MatrixRainBackground />
      <PageHeader navTo="/blog" navText="Blogs" />
      <main style={{ position: 'relative', zIndex: 1, paddingTop: '2rem' }}>
        {/* Re-use existing Projects component so cards render consistently */}
        <Projects />
      </main>
    </PageTransition>
  );
}

export default ProjectsPage; 