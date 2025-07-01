import React from 'react';
import MatrixRainBackground from './MatrixRainBackground';
import PageTransition from './PageTransition';
import ReturnButton from './ReturnButton';
import Projects from './Projects';

function ProjectsPage() {
  return (
    <PageTransition>
      <MatrixRainBackground />
      <ReturnButton />
      <main style={{ position: 'relative', zIndex: 1 }}>
        {/* Re-use existing Projects component so cards render consistently */}
        <Projects />
      </main>
    </PageTransition>
  );
}

export default ProjectsPage; 