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

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

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

      // Use requestIdleCallback for better performance on mobile
      const performDraw = () => {
        ctx.fillStyle = `rgba(0, 0, 0, ${settings.fadeFactor})`;
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = '#1E90FF';

        // Batch DOM operations for better performance
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

      // Use requestIdleCallback when available, fallback to immediate execution
      if (window.requestIdleCallback && settings.isMobile) {
        requestIdleCallback(performDraw, { timeout: 100 });
      } else {
        performDraw();
      }
    };

    draw(0);

    // Debounced resize handler for performance
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        cancelAnimationFrame(animationFrameId);
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        columns = Math.min(
          Math.floor(width / settings.columnWidth),
          settings.maxColumns
        );
        drops.length = 0;
        for (let x = 0; x < columns; x++) {
          drops[x] = Math.floor(Math.random() * -height / 20);
        }
        lastTime = 0; // Reset timer
        draw(0);
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (settings.prefersReducedMotion) {
        return; // No cleanup needed if animation never started
      }
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
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100vw',
        height: '100vh',
        display: 'block',
        background: '#000'
      }}
    />
  );
};

export default MatrixRainBackground; 