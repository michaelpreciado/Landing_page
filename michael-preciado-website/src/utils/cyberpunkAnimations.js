// === CYBERPUNK ANIMATIONS UTILITIES === //

/**
 * Create ripple effect on click
 */
export function createRippleEffect(event) {
  const button = event.currentTarget;
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;
  
  const ripple = document.createElement('div');
  ripple.classList.add('ripple');
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  
  button.appendChild(ripple);
  
  // Remove ripple after animation
  setTimeout(() => {
    ripple.remove();
  }, 600);
}

/**
 * Add glitch effect to element
 */
export function addGlitchEffect(element, duration = 300) {
  element.classList.add('glitch-click');
  setTimeout(() => {
    element.classList.remove('glitch-click');
  }, duration);
}

/**
 * Create binary rain effect
 */
export function createBinaryRain(container, dropCount = 50) {
  // Clear existing drops
  const existingDrops = container.querySelectorAll('.binary-drop');
  existingDrops.forEach(drop => drop.remove());
  
  for (let i = 0; i < dropCount; i++) {
    const drop = document.createElement('div');
    drop.classList.add('binary-drop');
    drop.textContent = Math.random() > 0.5 ? '1' : '0';
    drop.style.left = Math.random() * 100 + '%';
    drop.style.animationDelay = Math.random() * 2 + 's';
    drop.style.animationDuration = (Math.random() * 3 + 2) + 's';
    
    container.appendChild(drop);
  }
}

/**
 * Scroll reveal animation observer
 */
export function initScrollReveal() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all reveal elements
  const revealElements = document.querySelectorAll(
    '.cyber-reveal, .cyber-reveal-stagger, .cyber-reveal-glow'
  );
  revealElements.forEach(el => observer.observe(el));
  
  return observer;
}

/**
 * Page transition with neon glow
 */
export function pageTransition(callback, glowDuration = 300) {
  // Create glow overlay
  const overlay = document.createElement('div');
  overlay.classList.add('page-glow-overlay');
  document.body.appendChild(overlay);
  
  // Trigger glow effect
  requestAnimationFrame(() => {
    overlay.classList.add('active');
  });
  
  // Execute callback after glow
  setTimeout(() => {
    if (callback) callback();
    
    // Remove overlay after transition
    setTimeout(() => {
      overlay.classList.remove('active');
      setTimeout(() => {
        overlay.remove();
      }, 300);
    }, 100);
  }, glowDuration);
}

/**
 * Data stream effect for loading states
 */
export function triggerDataStream(element) {
  element.classList.add('data-stream', 'active');
  
  setTimeout(() => {
    element.classList.remove('active');
  }, 500);
  
  setTimeout(() => {
    element.classList.remove('data-stream');
  }, 1000);
}

/**
 * Cyber loading effect
 */
export function addCyberLoading(element, duration = 2000) {
  const originalContent = element.innerHTML;
  element.classList.add('cyber-loading');
  
  setTimeout(() => {
    element.classList.remove('cyber-loading');
  }, duration);
}

/**
 * Enhanced menu item with all effects
 */
export function enhanceMenuItems() {
  const menuItems = document.querySelectorAll('.cyber-menu-item');
  
  menuItems.forEach(item => {
    // Add click handlers
    item.addEventListener('click', (e) => {
      createRippleEffect(e);
      addGlitchEffect(item);
      
      // Add data stream effect
      setTimeout(() => {
        triggerDataStream(item);
      }, 100);
    });
    
    // Add hover handlers for additional effects
    item.addEventListener('mouseenter', () => {
      // Optional: Add subtle binary rain on hover
      if (item.dataset.rain === 'true') {
        createBinaryRain(item, 10);
      }
    });
  });
}

/**
 * Initialize all cyberpunk animations
 */
export function initCyberpunkAnimations() {
  // Initialize scroll reveals
  initScrollReveal();
  
  // Enhance menu items
  enhanceMenuItems();
  
  // Add performance optimizations
  document.querySelectorAll('[class*="cyber-"]').forEach(el => {
    el.classList.add('gpu-accelerated');
  });
  
  console.log('🚀 Cyberpunk animations initialized');
}

/**
 * React hook for cyberpunk animations
 */
export function useCyberpunkAnimations() {
  const [isRevealed, setIsRevealed] = React.useState(false);
  
  React.useEffect(() => {
    initCyberpunkAnimations();
    
    // Check if reduced motion is preferred
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      setIsRevealed(true);
    }
    
    return () => {
      // Cleanup observers if needed
    };
  }, []);
  
  return {
    isRevealed,
    createRippleEffect,
    addGlitchEffect,
    triggerDataStream,
    pageTransition
  };
}

/**
 * Performance monitoring for animations
 */
export function monitorAnimationPerformance() {
  let frameCount = 0;
  let lastTime = performance.now();
  
  function countFrames() {
    frameCount++;
    const currentTime = performance.now();
    
    if (currentTime - lastTime >= 1000) {
      const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
      
      // Log performance warnings
      if (fps < 30) {
        console.warn(`⚠️ Low FPS detected: ${fps}fps. Consider reducing animation complexity.`);
      }
      
      frameCount = 0;
      lastTime = currentTime;
    }
    
    requestAnimationFrame(countFrames);
  }
  
  // Only monitor in development
  if (process.env.NODE_ENV === 'development') {
    requestAnimationFrame(countFrames);
  }
}

// Utility for creating custom cyberpunk elements
export const CyberpunkUtils = {
  // Add neon glow to any element
  addNeonGlow: (element, color = 'rgba(30, 144, 255, 0.6)') => {
    element.style.boxShadow = `0 0 20px ${color}`;
    element.style.transition = 'box-shadow 0.3s ease';
  },
  
  // Create pulsing effect
  addPulse: (element) => {
    element.style.animation = 'neon-pulse 2s ease-in-out infinite';
  },
  
  // Remove all cyberpunk effects
  removeEffects: (element) => {
    element.classList.remove('cyber-reveal', 'cyber-reveal-stagger', 'cyber-reveal-glow');
    element.style.animation = '';
    element.style.boxShadow = '';
  }
};

export default {
  initCyberpunkAnimations,
  createRippleEffect,
  addGlitchEffect,
  pageTransition,
  triggerDataStream,
  useCyberpunkAnimations,
  CyberpunkUtils
};
