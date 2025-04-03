import React, { useRef, useEffect } from 'react';

const MatrixRainBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let columns = Math.floor(width / 20); // Number of columns based on width
    const drops = []; // y-coordinate for each column
    const binary = '01'; // Characters to use

    // Initialize drops array with random starting positions (negative values)
    for (let x = 0; x < columns; x++) {
      drops[x] = Math.floor(Math.random() * -height / 20); // Start off-screen at random heights
    }

    let timeoutId;

    const draw = () => {
      // Semi-transparent black background for fading effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)'; // Increased opacity for faster fade
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#1E90FF'; // Dodger Blue text
      // ctx.font = '15px monospace'; // Remove fixed font size setting here

      // Loop through columns
      for (let i = 0; i < drops.length; i++) {
        // Random binary character
        const text = binary.charAt(Math.floor(Math.random() * binary.length));
        // Random font size for depth effect
        const fontSize = Math.floor(Math.random() * 12 + 8); // Size between 8px and 20px
        ctx.font = `${fontSize}px monospace`; // Set dynamic font size

        // x, y coordinate
        ctx.fillText(text, i * 20, drops[i] * 20);

        // Reset drop to top randomly after it goes off screen
        if (drops[i] * 20 > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Increment y coordinate
        drops[i]++;
      }

      // Use setTimeout for animation speed control (~20fps)
      timeoutId = setTimeout(draw, 50); // Decreased delay to 50
    };

    draw();

    // Handle window resize
    const handleResize = () => {
      clearTimeout(timeoutId); // Use clearTimeout
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / 20);
      drops.length = 0; // Clear existing drops
      for (let x = 0; x < columns; x++) {
        drops[x] = Math.floor(Math.random() * -height / 20); // Re-initialize with random heights on resize
      }
      draw(); // Restart drawing
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId); // Use clearTimeout
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
        display: 'block', // Ensure it takes up the block
        background: '#000' // Set a black background for the canvas itself
      }}
    />
  );
};

export default MatrixRainBackground; 