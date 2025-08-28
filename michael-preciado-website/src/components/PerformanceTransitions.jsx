import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// === PERFORMANCE-OPTIMIZED PAGE TRANSITION ===
export const PageTransition = ({ children, location }) => {
  const containerRef = useRef(null);

  // Optimized variants - only transform and opacity
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 8,
      scale: 0.98,
    },
    enter: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.18,
        ease: [0.23, 1, 0.32, 1], // Custom easing for 120fps
      },
    },
    exit: {
      opacity: 0,
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.16,
        ease: [0.55, 0.085, 0.68, 0.53],
      },
    },
  };

  useEffect(() => {
    // Clean up will-change after animation
    const timer = setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.style.willChange = 'auto';
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        ref={containerRef}
        key={location?.pathname || 'page'}
        variants={pageVariants}
        initial="initial"
        animate="enter"
        exit="exit"
        style={{
          willChange: 'transform, opacity',
          contain: 'layout paint size',
          transform: 'translateZ(0)', // Force GPU layer
        }}
        layout={false} // Disable layout animations for performance
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

// === PERFORMANCE-OPTIMIZED MENU ITEM ===
export const MenuItem = ({ 
  children, 
  onClick, 
  href, 
  className = '',
  ripple = true,
  glitch = true,
  ...props 
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [ripples, setRipples] = useState([]);
  const buttonRef = useRef(null);
  const rippleId = useRef(0);

  // Optimized ripple effect using transform only
  const createRipple = useCallback((event) => {
    if (!ripple || !buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const newRipple = {
      id: rippleId.current++,
      x,
      y,
      size,
    };
    
    setRipples(prev => [...prev, newRipple]);
    
    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 180);
  }, [ripple]);

  const handlePress = useCallback((event) => {
    if (ripple) createRipple(event);
    
    if (glitch) {
      setIsPressed(true);
      setTimeout(() => setIsPressed(false), 180);
    }
    
    if (onClick) onClick(event);
  }, [ripple, glitch, onClick, createRipple]);

  // Optimized variants - GPU-friendly properties only
  const menuVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.0,
      y: -2,
      transition: { duration: 0.14, ease: [0.23, 1, 0.32, 1] }
    },
    tap: { 
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={buttonRef}
      href={href}
      className={`fx-ripple fx-glow fx-neon-border ${isPressed ? 'fx-glitch fx-active' : ''} ${className}`}
      variants={menuVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      onMouseDown={handlePress}
      style={{
        position: 'relative',
        overflow: 'hidden',
        willChange: 'transform, opacity',
        contain: 'layout paint size',
        transform: 'translateZ(0)',
      }}
      layout={false}
      {...props}
    >
      {children}
      
      {/* Optimized ripple effects */}
      <AnimatePresence>
        {ripples.map(ripple => (
          <motion.div
            key={ripple.id}
            style={{
              position: 'absolute',
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(30, 144, 255, 0.6) 0%, rgba(70, 163, 255, 0.3) 40%, transparent 70%)',
              pointerEvents: 'none',
              transform: 'translateZ(0)',
            }}
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ 
              scale: 2.5, 
              opacity: 0,
              transition: { duration: 0.18, ease: [0.23, 1, 0.32, 1] }
            }}
            exit={{ opacity: 0 }}
          />
        ))}
      </AnimatePresence>
    </Component>
  );
};

// === PERFORMANCE-OPTIMIZED SCROLL REVEAL ===
export const SectionReveal = ({ 
  children, 
  className = '', 
  delay = 0,
  threshold = 0.1,
  once = true 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '-50px 0px', // Trigger before element is fully visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, once]);

  // Clean up will-change after animation
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        if (ref.current) {
          ref.current.style.willChange = 'auto';
        }
      }, 200 + delay);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  const revealVariants = {
    hidden: {
      opacity: 0,
      y: 12,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.16,
        delay: delay / 1000,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={revealVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      style={{
        willChange: isVisible ? 'auto' : 'transform, opacity',
        contain: 'layout paint size',
        transform: 'translateZ(0)',
      }}
      layout={false}
    >
      {children}
    </motion.div>
  );
};

// === NEON GLOW OVERLAY ===
export const NeonGlowOverlay = ({ isActive, intensity = 'medium' }) => {
  if (!isActive) return null;

  const intensityMap = {
    low: 'rgba(30, 144, 255, 0.1)',
    medium: 'rgba(30, 144, 255, 0.15)',
    high: 'rgba(30, 144, 255, 0.2)',
  };

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `radial-gradient(circle at center, ${intensityMap[intensity]} 0%, rgba(70, 163, 255, 0.05) 50%, transparent 100%)`,
        pointerEvents: 'none',
        zIndex: 9998,
        transform: 'translateZ(0)',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
    />
  );
};

// === CYBER BUTTON COMPONENT ===
export const CyberButton = ({ 
  children, 
  variant = 'primary',
  size = 'medium',
  onClick,
  className = '',
  ...props 
}) => {
  const [scanActive, setScanActive] = useState(false);

  const handleClick = useCallback((e) => {
    setScanActive(true);
    setTimeout(() => setScanActive(false), 200);
    if (onClick) onClick(e);
  }, [onClick]);

  const variants = {
    primary: 'fx-glow fx-neon-border bg-gradient-to-r from-blue-600 to-blue-500',
    secondary: 'fx-glow fx-neon-border bg-transparent',
    ghost: 'fx-glow border border-blue-500/30 bg-transparent',
  };

  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      className={`
        relative overflow-hidden rounded-lg font-medium text-white
        transition-all duration-150 ease-out
        ${variants[variant]} ${sizes[size]} ${className}
        ${scanActive ? 'fx-scan-line fx-active' : ''}
      `}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      style={{
        willChange: 'transform',
        contain: 'layout paint size',
        transform: 'translateZ(0)',
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

// === GLITCH TEXT EFFECT ===
export const GlitchText = ({ children, trigger = false, className = '' }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    if (trigger) {
      setIsGlitching(true);
      const timer = setTimeout(() => setIsGlitching(false), 300);
      return () => clearTimeout(timer);
    }
  }, [trigger]);

  return (
    <motion.span
      className={`${isGlitching ? 'fx-glitch fx-active' : ''} ${className}`}
      style={{
        willChange: isGlitching ? 'transform' : 'auto',
        contain: 'layout paint size',
        transform: 'translateZ(0)',
      }}
    >
      {children}
    </motion.span>
  );
};

// === MAIN TRANSITION WRAPPER ===
export const CyberTransitionWrapper = ({ children, location }) => {
  return (
    <div 
      style={{
        minHeight: '100vh',
        contain: 'layout paint size',
        transform: 'translateZ(0)',
      }}
    >
      <PageTransition location={location}>
        {children}
      </PageTransition>
    </div>
  );
};

// Export all components
export default {
  PageTransition,
  MenuItem,
  SectionReveal,
  NeonGlowOverlay,
  CyberButton,
  GlitchText,
  CyberTransitionWrapper,
};
