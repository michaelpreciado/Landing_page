import React, { useRef, useEffect, useMemo } from 'react';

const MatrixRainBackground = () => {
  const canvasRef = useRef(null);

  const settings = useMemo(() => {
    const isMobile = window.innerWidth <= 768;
    const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    return {
      isMobile,
      isLowEndDevice,
      prefersReducedMotion,
      columnWidth: isMobile ? 60 : 20, // Much wider columns on mobile to reduce density
      fadeFactor: isMobile ? '0.15' : '0.08', // Faster fade on mobile
      fps: prefersReducedMotion ? 5 : (isMobile || isLowEndDevice) ? 12 : 20, // Adaptive FPS
      maxColumns: isMobile ? 15 : 50, // Limit column count on mobile
    };
  }, []);

  useEffect(() => {
    if (settings.prefersReducedMotion) {
      return; // Respect user preference and save resources
    }
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d', { alpha: false }); // Optimize canvas context
    let animationFrameId;
    let lastTime = 0;
    const fpsInterval = 1000 / settings.fps;

    // Simplified height calculation - use viewport height with buffer
    const getDocumentHeight = () => {
      return Math.max(
        document.documentElement.scrollHeight,
        window.innerHeight + 500 // Add 500px buffer for scrolling
      );
    };

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = getDocumentHeight();

    // Limit columns for better mobile performance
    let columns = Math.min(
      Math.floor(width / settings.columnWidth),
      settings.maxColumns
    );
    
    const drops = [];
    const binary = '01';

    for (let x = 0; x < columns; x++) {
      drops[x] = Math.floor(Math.random() * -height / 20);
    }

    const draw = (currentTime) => {
      const elapsed = currentTime - lastTime;
      if (elapsed < fpsInterval) {
        animationFrameId = requestAnimationFrame(draw);
        return; // Skip this frame
      }
      lastTime = currentTime - (elapsed % fpsInterval);

      ctx.fillStyle = `rgba(0, 0, 0, ${settings.fadeFactor})`;
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = '#1E90FF';
      ctx.textBaseline = 'top';
      
      for (let i = 0; i < drops.length; i++) {
        const text = binary.charAt(Math.floor(Math.random() * binary.length));
        const fontSize = settings.isMobile ? 
          Math.floor(Math.random() * 8 + 12) : // Larger text on mobile
          Math.floor(Math.random() * 12 + 8);
        
        ctx.font = `${fontSize}px monospace`;
        ctx.fillText(text, i * settings.columnWidth, drops[i] * 20);

        if (drops[i] * 20 > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      
      animationFrameId = requestAnimationFrame(draw);
    };

    draw(0);

    // Simplified resize handler with debounce
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        cancelAnimationFrame(animationFrameId);
        width = canvas.width = window.innerWidth;
        height = canvas.height = getDocumentHeight();
        columns = Math.min(
          Math.floor(width / settings.columnWidth),
          settings.maxColumns
        );
        drops.length = 0;
        for (let x = 0; x < columns; x++) {
          drops[x] = Math.floor(Math.random() * -height / 20);
        }
        lastTime = 0;
        draw(0);
      }, 150); // Slightly longer debounce for better performance
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('resize', handleResize);
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
    };
  }, [settings]);

  return (
    <canvas
      ref={canvasRef}
      data-matrix-background="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100vw',
        height: '100%',
        display: 'block',
        background: '#000'
      }}
    />
  );
};

export default MatrixRainBackground; 
