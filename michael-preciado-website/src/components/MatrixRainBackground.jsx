import React, { useRef, useEffect, useMemo } from 'react';

const MatrixRainBackground = () => {
  const canvasRef = useRef(null);

  const settings = useMemo(() => {
    const isMobile = window.innerWidth <= 768;
    return {
      isMobile,
      columnWidth: isMobile ? 40 : 20, // Wider columns on mobile to reduce density
      fadeFactor: isMobile ? '0.1' : '0.08',
      fps: isMobile ? 15 : 20, // Slower FPS for mobile
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let lastTime = 0;
    const fpsInterval = 1000 / settings.fps;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let columns = Math.floor(width / settings.columnWidth);
    const drops = [];
    const binary = '01';

    for (let x = 0; x < columns; x++) {
      drops[x] = Math.floor(Math.random() * -height / 20);
    }

    const draw = (currentTime) => {
      animationFrameId = requestAnimationFrame(draw);
      
      const elapsed = currentTime - lastTime;
      if (elapsed < fpsInterval) {
        return; // Skip this frame
      }
      lastTime = currentTime - (elapsed % fpsInterval);

      ctx.fillStyle = `rgba(0, 0, 0, ${settings.fadeFactor})`;
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = '#1E90FF';

      for (let i = 0; i < drops.length; i++) {
        const text = binary.charAt(Math.floor(Math.random() * binary.length));
        const fontSize = Math.floor(Math.random() * 12 + 8);
        ctx.font = `${fontSize}px monospace`;
        ctx.fillText(text, i * settings.columnWidth, drops[i] * 20);

        if (drops[i] * 20 > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
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
        columns = Math.floor(width / settings.columnWidth);
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
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
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