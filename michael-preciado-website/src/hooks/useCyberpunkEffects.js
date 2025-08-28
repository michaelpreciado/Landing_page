import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for cyberpunk effects and animations
 */
export const useCyberpunkEffects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const elementRef = useRef(null);

  // Initialize intersection observer for scroll reveals
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Ripple effect function
  const createRipple = (event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('div');
    ripple.classList.add('cyber-ripple');
    Object.assign(ripple.style, {
      position: 'absolute',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(30, 144, 255, 0.6) 0%, rgba(70, 163, 255, 0.4) 30%, transparent 70%)',
      transform: 'scale(0)',
      animation: 'cyber-ripple-effect 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      pointerEvents: 'none',
      width: `${size}px`,
      height: `${size}px`,
      left: `${x}px`,
      top: `${y}px`,
      zIndex: '10'
    });
    
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  // Glitch effect function
  const addGlitch = (element, duration = 300) => {
    if (!element) return;
    
    element.style.animation = 'cyber-glitch 0.3s ease-out';
    setTimeout(() => {
      element.style.animation = '';
    }, duration);
  };

  // Data stream effect
  const triggerDataStream = (element) => {
    if (!element) return;
    
    const stream = document.createElement('div');
    Object.assign(stream.style, {
      position: 'absolute',
      top: '0',
      left: '-100%',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, transparent 0%, rgba(30, 144, 255, 0.6) 50%, transparent 100%)',
      zIndex: '1',
      pointerEvents: 'none',
      transition: 'left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    });
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(stream);
    
    requestAnimationFrame(() => {
      stream.style.left = '100%';
    });
    
    setTimeout(() => stream.remove(), 500);
  };

  // Neon glow effect
  const addNeonGlow = (element, intensity = 'medium') => {
    if (!element) return;
    
    const glowIntensities = {
      low: '0 0 10px rgba(30, 144, 255, 0.4)',
      medium: '0 0 20px rgba(30, 144, 255, 0.6)',
      high: '0 0 30px rgba(30, 144, 255, 0.8), 0 0 60px rgba(30, 144, 255, 0.4)'
    };
    
    element.style.boxShadow = glowIntensities[intensity];
    element.style.transition = 'box-shadow 0.3s ease';
  };

  // Remove all effects
  const removeEffects = (element) => {
    if (!element) return;
    
    element.style.animation = '';
    element.style.boxShadow = '';
    element.querySelectorAll('.cyber-ripple').forEach(ripple => ripple.remove());
  };

  // Binary rain generator
  const createBinaryRain = (container, count = 20) => {
    if (!container) return;
    
    for (let i = 0; i < count; i++) {
      const drop = document.createElement('div');
      Object.assign(drop.style, {
        position: 'absolute',
        color: 'rgba(30, 144, 255, 0.6)',
        fontFamily: 'Courier New, monospace',
        fontSize: '0.8rem',
        left: `${Math.random() * 100}%`,
        animation: `cyber-binary-fall ${Math.random() * 3 + 2}s linear infinite`,
        animationDelay: `${Math.random() * 2}s`,
        pointerEvents: 'none',
        zIndex: '-1'
      });
      drop.textContent = Math.random() > 0.5 ? '1' : '0';
      
      container.appendChild(drop);
    }
  };

  return {
    elementRef,
    isVisible,
    isLoading,
    setIsLoading,
    createRipple,
    addGlitch,
    triggerDataStream,
    addNeonGlow,
    removeEffects,
    createBinaryRain
  };
};

/**
 * Hook for page transitions
 */
export const usePageTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const startTransition = (callback, delay = 300) => {
    setIsTransitioning(true);
    
    // Create glow overlay
    const overlay = document.createElement('div');
    Object.assign(overlay.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      background: 'radial-gradient(circle at center, rgba(30, 144, 255, 0.1) 0%, rgba(70, 163, 255, 0.05) 50%, transparent 100%)',
      opacity: '0',
      pointerEvents: 'none',
      zIndex: '9998',
      transition: 'opacity 0.3s ease'
    });
    
    document.body.appendChild(overlay);
    
    requestAnimationFrame(() => {
      overlay.style.opacity = '1';
    });
    
    setTimeout(() => {
      if (callback) callback();
      
      setTimeout(() => {
        overlay.style.opacity = '0';
        setTimeout(() => {
          overlay.remove();
          setIsTransitioning(false);
        }, 300);
      }, 100);
    }, delay);
  };

  return {
    isTransitioning,
    startTransition
  };
};

/**
 * Hook for menu animations
 */
export const useMenuAnimations = () => {
  const menuRef = useRef(null);

  const enhanceMenuItem = (element) => {
    if (!element) return;

    // Add cyberpunk classes
    element.classList.add('cyber-menu-item');
    
    // Add click handler
    element.addEventListener('click', (e) => {
      createRippleEffect(e);
      addGlitchEffect(element);
    });

    // Add hover handler
    element.addEventListener('mouseenter', () => {
      element.style.transform = 'translateY(-2px)';
      element.style.boxShadow = '0 0 20px rgba(30, 144, 255, 0.6)';
    });

    element.addEventListener('mouseleave', () => {
      element.style.transform = 'translateY(0)';
      element.style.boxShadow = '';
    });
  };

  const createRippleEffect = (event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('div');
    Object.assign(ripple.style, {
      position: 'absolute',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(30, 144, 255, 0.6) 0%, rgba(70, 163, 255, 0.4) 30%, transparent 70%)',
      transform: 'scale(0)',
      animation: 'cyber-ripple-effect 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      pointerEvents: 'none',
      width: `${size}px`,
      height: `${size}px`,
      left: `${x}px`,
      top: `${y}px`,
      zIndex: '10'
    });
    
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  const addGlitchEffect = (element) => {
    element.style.animation = 'cyber-glitch 0.3s ease-out';
    setTimeout(() => {
      element.style.animation = '';
    }, 300);
  };

  useEffect(() => {
    // Auto-enhance menu items
    if (menuRef.current) {
      const menuItems = menuRef.current.querySelectorAll('a, button');
      menuItems.forEach(enhanceMenuItem);
    }
  }, []);

  return {
    menuRef,
    enhanceMenuItem
  };
};

/**
 * Performance monitoring hook
 */
export const useAnimationPerformance = () => {
  const [fps, setFps] = useState(60);
  const [warnings, setWarnings] = useState([]);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animationId;

    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();

      if (currentTime - lastTime >= 1000) {
        const currentFPS = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setFps(currentFPS);

        if (currentFPS < 30) {
          setWarnings(prev => [...prev, `Low FPS detected: ${currentFPS}fps`]);
        }

        frameCount = 0;
        lastTime = currentTime;
      }

      animationId = requestAnimationFrame(measureFPS);
    };

    // Only monitor in development
    if (process.env.NODE_ENV === 'development') {
      animationId = requestAnimationFrame(measureFPS);
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return { fps, warnings };
};

export default {
  useCyberpunkEffects,
  usePageTransition,
  useMenuAnimations,
  useAnimationPerformance
};
