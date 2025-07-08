import React, { useRef, useEffect, useMemo } from 'react';

const MatrixRainBackground = () => {
  const canvasRef = useRef(null);

  // Memoize device-specific settings to avoid re-calculation
  const settings = useMemo(() => {
    const isMobile = window.innerWidth <= 768;
    return {
      isMobile,
      // Reduce density and speed on mobile devices
      columnsDivider: isMobile ? 40 : 20, // Fewer columns on mobile
      animationInterval: isMobile ? 100 : 50, // Slower animation on mobile
      fadeFactor: isMobile ? '0.1' : '0.08', // Slower fade on mobile for performance
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let columns = Math.floor(width / settings.columnsDivider);
    const drops = [];
    const binary = '01';

    for (let x = 0; x < columns; x++) {
      drops[x] = Math.floor(Math.random() * -height / 20);
    }

    let timeoutId;

    const draw = () => {
      ctx.fillStyle = `rgba(0, 0, 0, ${settings.fadeFactor})`;
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#1E90FF';

      for (let i = 0; i < drops.length; i++) {
        const text = binary.charAt(Math.floor(Math.random() * binary.length));
        const fontSize = Math.floor(Math.random() * 12 + 8);
        ctx.font = `${fontSize}px monospace`;
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      timeoutId = setTimeout(draw, settings.animationInterval);
    };

    draw();

    const handleResize = () => {
      clearTimeout(timeoutId);
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / settings.columnsDivider);
      drops.length = 0;
      for (let x = 0; x < columns; x++) {
        drops[x] = Math.floor(Math.random() * -height / 20);
      }
      draw();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
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