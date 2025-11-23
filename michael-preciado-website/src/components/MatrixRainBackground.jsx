import React, { useRef, useEffect, useMemo } from 'react';

const MatrixRainBackground = () => {
  const canvasRef = useRef(null);

  const settings = useMemo(() => {
    const isMobile = window.innerWidth <= 768;
    const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isHighEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency >= 8;

    return {
      isMobile,
      isLowEndDevice,
      isHighEndDevice,
      prefersReducedMotion,
      columnWidth: isMobile ? 60 : 20, // Narrower columns = MORE drops
      fadeFactor: isMobile ? '0.15' : '0.08', // Slower fade for more visible trails
      fps: prefersReducedMotion ? 5 : (isMobile ? 20 : (isHighEndDevice ? 30 : 25)), // Slower, more cinematic FPS
      maxColumns: isMobile ? 20 : 100, // MORE columns = more rain!
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
    let scrollY = 0;

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

    // Pre-calculate font size once instead of every frame
    const fontSize = settings.isMobile ? 14 : 12;
    ctx.font = `${fontSize}px monospace`;

    // Optimization: Use a single timestamp for all drops in a frame
    const draw = (currentTime) => {
      const elapsed = currentTime - lastTime;

      // Cap FPS to save battery/performance
      if (elapsed < fpsInterval) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }

      // Adjust for drift
      lastTime = currentTime - (elapsed % fpsInterval);

      // Use lighter fade for more visible trails - slightly optimized alpha
      ctx.fillStyle = `rgba(0, 0, 0, ${settings.fadeFactor})`;
      ctx.fillRect(0, 0, width, height);

      // Dodger blue with slight glow - set once per frame
      ctx.fillStyle = '#1E90FF';
      ctx.shadowBlur = 3;
      ctx.shadowColor = '#1E90FF';
      ctx.textBaseline = 'top';

      // Optimized loop - pre-calculate values
      const dropSpeed = 12;
      const len = drops.length; // Cache length

      for (let i = 0; i < len; i++) {
        // Optimization: Use bitwise OR for faster floor if needed, but Math.random check is fine
        // Only draw if within viewport (plus buffer) to save draw calls
        const y = drops[i] * dropSpeed;

        if (y > -20 && y < height + 20) {
          const text = binary.charAt(Math.random() < 0.5 ? 0 : 1);
          const x = i * settings.columnWidth;
          ctx.fillText(text, x, y);
        }

        if (y > height && Math.random() > 0.97) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      // Reset shadow for next frame
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(draw);
    };

    draw(0);

    // Parallax scroll handler removed to keep background static
    // const handleScroll = () => { ... }
    // window.addEventListener('scroll', handleScroll, { passive: true });

    // Simplified resize handler with debounce
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
        lastTime = 0;
        draw(0);
      }, 200); // Increased debounce to 200ms
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('resize', handleResize);
      // window.removeEventListener('scroll', handleScroll);
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
