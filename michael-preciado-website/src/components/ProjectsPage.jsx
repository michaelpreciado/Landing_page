import React, { useEffect, useState } from 'react';
import MatrixRainBackground from './MatrixRainBackground';
import PageTransition from './PageTransition';
import PageHeader from './PageHeader';
import Projects from './Projects';
import { autoApplyLiquidGlass } from '../utils/liquidGlass.js';

function ProjectsPage() {
  const [showBackground, setShowBackground] = useState(false);
  const [isReady, setIsReady] = useState(false);
  
  // Apply liquid glass effects after DOM is ready
  useEffect(() => {
    // Set ready state immediately to prevent visual bugs
    setIsReady(true);
    autoApplyLiquidGlass();
    
    // Show background immediately for smoother transition
    setShowBackground(true);
  }, []);
  
  return (
    <PageTransition>
      {showBackground && <MatrixRainBackground />}
      <PageHeader navTo="/blog" navText="Blogs" />
      <main style={{ 
        position: 'relative', 
        zIndex: 1, 
        paddingTop: '2rem',
        opacity: isReady ? 1 : 0,
        transition: 'opacity 0.2s ease-in'
      }}>
        {/* Re-use existing Projects component so cards render consistently */}
        <Projects />
      </main>
    </PageTransition>
  );
}

export default ProjectsPage;