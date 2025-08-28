// === VANILLA JS PERFORMANCE UTILITIES ===
// Lightweight fallback system for 120 FPS transitions

/**
 * Intersection Observer-based scroll reveal utility
 * Usage: applyScrollReveal(element, options)
 */
export const applyScrollReveal = (element, options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '-50px 0px',
    once = true,
    delay = 0,
    className = 'fx-fade fx-visible'
  } = options;

  if (!element) return;

  // Add initial state
  element.classList.add('fx-fade');
  element.style.willChange = 'transform, opacity';
  element.style.contain = 'layout paint size';
  element.style.transform = 'translateZ(0)';

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          element.classList.add('fx-visible');
          
          // Clean up will-change after animation
          setTimeout(() => {
            element.style.willChange = 'auto';
          }, 200);
        }, delay);
        
        if (once) {
          observer.unobserve(element);
        }
      } else if (!once) {
        element.classList.remove('fx-visible');
      }
    },
    { threshold, rootMargin }
  );

  observer.observe(element);
  return observer;
};

/**
 * Batch apply scroll reveal to multiple elements
 * Usage: batchScrollReveal('.reveal-element', { stagger: 100 })
 */
export const batchScrollReveal = (selector, options = {}) => {
  const { stagger = 0, ...revealOptions } = options;
  const elements = document.querySelectorAll(selector);
  
  elements.forEach((element, index) => {
    applyScrollReveal(element, {
      ...revealOptions,
      delay: stagger * index,
    });
  });
};

/**
 * High-performance ripple effect
 * Usage: addRippleEffect(button)
 */
export const addRippleEffect = (element) => {
  if (!element) return;

  element.classList.add('fx-ripple');
  element.style.position = 'relative';
  element.style.overflow = 'hidden';
  element.style.willChange = 'transform';
  element.style.contain = 'layout paint size';

  const handleClick = (event) => {
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const ripple = document.createElement('div');
    ripple.className = 'fx-ripple-wave';
    Object.assign(ripple.style, {
      position: 'absolute',
      left: `${x}px`,
      top: `${y}px`,
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(30, 144, 255, 0.6) 0%, rgba(70, 163, 255, 0.3) 40%, transparent 70%)',
      transform: 'scale(0) translateZ(0)',
      animation: 'fx-ripple-expand 180ms cubic-bezier(0.23, 1, 0.32, 1)',
      pointerEvents: 'none',
      willChange: 'transform, opacity',
      zIndex: '10',
    });

    element.appendChild(ripple);
    setTimeout(() => ripple.remove(), 180);
  };

  element.addEventListener('click', handleClick);
  return () => element.removeEventListener('click', handleClick);
};

/**
 * Cyberpunk glitch effect
 * Usage: addGlitchEffect(element)
 */
export const addGlitchEffect = (element, trigger = 'click') => {
  if (!element) return;

  element.classList.add('fx-glitch');
  element.style.willChange = 'transform';
  element.style.contain = 'layout paint size';

  const triggerGlitch = () => {
    element.classList.add('fx-active');
    setTimeout(() => {
      element.classList.remove('fx-active');
    }, 180);
  };

  if (trigger === 'click') {
    element.addEventListener('click', triggerGlitch);
    return () => element.removeEventListener('click', triggerGlitch);
  } else if (trigger === 'hover') {
    element.addEventListener('mouseenter', triggerGlitch);
    return () => element.removeEventListener('mouseenter', triggerGlitch);
  }

  return triggerGlitch;
};

/**
 * Enhanced menu items with cyber effects
 * Usage: enhanceMenuItem(menuItem)
 */
export const enhanceMenuItem = (element) => {
  if (!element) return;

  // Add classes
  element.classList.add('fx-glow', 'fx-neon-border');
  element.style.willChange = 'transform, opacity, box-shadow';
  element.style.contain = 'layout paint size';
  element.style.transform = 'translateZ(0)';

  // Add ripple effect
  const removeRipple = addRippleEffect(element);

  // Add hover effects
  const handleMouseEnter = () => {
    element.classList.add('fx-active');
  };

  const handleMouseLeave = () => {
    element.classList.remove('fx-active');
  };

  element.addEventListener('mouseenter', handleMouseEnter);
  element.addEventListener('mouseleave', handleMouseLeave);

  // Return cleanup function
  return () => {
    if (removeRipple) removeRipple();
    element.removeEventListener('mouseenter', handleMouseEnter);
    element.removeEventListener('mouseleave', handleMouseLeave);
    element.style.willChange = 'auto';
  };
};

/**
 * Page transition system
 * Usage: initPageTransitions()
 */
export const initPageTransitions = () => {
  let isTransitioning = false;

  const createGlowOverlay = (intensity = 0.1) => {
    const overlay = document.createElement('div');
    Object.assign(overlay.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      background: `radial-gradient(circle at center, rgba(30, 144, 255, ${intensity}) 0%, rgba(70, 163, 255, ${intensity * 0.3}) 50%, transparent 100%)`,
      opacity: '0',
      pointerEvents: 'none',
      zIndex: '9998',
      transition: 'opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
      transform: 'translateZ(0)',
    });

    document.body.appendChild(overlay);

    requestAnimationFrame(() => {
      overlay.style.opacity = '1';
    });

    return overlay;
  };

  const removeGlowOverlay = (overlay) => {
    overlay.style.opacity = '0';
    setTimeout(() => overlay.remove(), 300);
  };

  const transitionPage = (newContent, callback) => {
    if (isTransitioning) return;
    isTransitioning = true;

    const overlay = createGlowOverlay();
    const currentPage = document.querySelector('.fx-page-transition');

    if (currentPage) {
      currentPage.classList.add('fx-page-exit-active');
    }

    setTimeout(() => {
      if (callback) callback();
      
      // Add new page
      if (newContent) {
        const newPage = document.createElement('div');
        newPage.className = 'fx-page-transition fx-page-enter';
        newPage.innerHTML = newContent;
        
        if (currentPage) {
          currentPage.parentNode.replaceChild(newPage, currentPage);
        }

        requestAnimationFrame(() => {
          newPage.classList.add('fx-page-enter-active');
          newPage.classList.remove('fx-page-enter');
        });
      }

      setTimeout(() => {
        removeGlowOverlay(overlay);
        isTransitioning = false;
      }, 200);
    }, 160);
  };

  return { transitionPage, isTransitioning: () => isTransitioning };
};

/**
 * Auto-initialize all performance effects
 * Usage: autoInitPerformanceEffects()
 */
export const autoInitPerformanceEffects = () => {
  // Initialize scroll reveals
  batchScrollReveal('.fx-fade', { stagger: 50 });
  batchScrollReveal('.fx-slide', { stagger: 30 });

  // Enhance menu items
  const menuItems = document.querySelectorAll('a[href], button, .menu-item');
  menuItems.forEach(enhanceMenuItem);

  // Add glitch effects to specific elements
  const glitchElements = document.querySelectorAll('.fx-glitch');
  glitchElements.forEach(element => addGlitchEffect(element));

  // Initialize page transitions
  const pageTransitions = initPageTransitions();

  return {
    pageTransitions,
    cleanup: () => {
      // Cleanup function for memory management
      menuItems.forEach(item => {
        item.style.willChange = 'auto';
      });
    }
  };
};

/**
 * Performance monitoring utilities
 */
export const PerformanceMonitor = {
  frameCount: 0,
  lastTime: 0,
  fps: 60,
  warnings: [],

  start() {
    this.measure();
  },

  measure() {
    this.frameCount++;
    const currentTime = performance.now();

    if (currentTime - this.lastTime >= 1000) {
      this.fps = Math.round((this.frameCount * 1000) / (currentTime - this.lastTime));
      
      if (this.fps < 30) {
        this.warnings.push(`Low FPS detected: ${this.fps}fps at ${new Date().toLocaleTimeString()}`);
      }

      this.frameCount = 0;
      this.lastTime = currentTime;
    }

    requestAnimationFrame(() => this.measure());
  },

  getFPS() {
    return this.fps;
  },

  getWarnings() {
    return this.warnings;
  },

  reset() {
    this.warnings = [];
    this.frameCount = 0;
    this.lastTime = performance.now();
  }
};

/**
 * Check for reduced motion preference
 */
export const respectsReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Check for high refresh rate display
 */
export const isHighRefreshRate = () => {
  return window.screen && window.screen.refreshRate >= 120;
};

/**
 * Device capability detection
 */
export const DeviceCapabilities = {
  hasHover: () => window.matchMedia('(hover: hover)').matches,
  hasPointer: () => window.matchMedia('(pointer: fine)').matches,
  isMobile: () => window.matchMedia('(max-width: 768px)').matches,
  supportsWillChange: () => 'willChange' in document.documentElement.style,
  supportsContain: () => 'contain' in document.documentElement.style,
  supportsIntersectionObserver: () => 'IntersectionObserver' in window,
};

/**
 * Measure performance of a specific animation
 */
export const measureAnimation = (element, animationName, duration = 1000) => {
  return new Promise((resolve) => {
    const startTime = performance.now();
    let frameCount = 0;
    
    const measure = () => {
      frameCount++;
      const elapsed = performance.now() - startTime;
      
      if (elapsed >= duration) {
        const fps = Math.round((frameCount * 1000) / elapsed);
        resolve({
          fps,
          frameCount,
          duration: elapsed,
          element: element.tagName || 'Unknown',
          animation: animationName,
        });
      } else {
        requestAnimationFrame(measure);
      }
    };
    
    requestAnimationFrame(measure);
  });
};

// Export all utilities
export default {
  applyScrollReveal,
  batchScrollReveal,
  addRippleEffect,
  addGlitchEffect,
  enhanceMenuItem,
  initPageTransitions,
  autoInitPerformanceEffects,
  PerformanceMonitor,
  respectsReducedMotion,
  isHighRefreshRate,
  DeviceCapabilities,
  measureAnimation,
};
