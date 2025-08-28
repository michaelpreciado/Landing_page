import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Enhanced page transition with cyberpunk effects
const CyberpunkPageTransition = ({ children, location }) => {
  const [showGlow, setShowGlow] = useState(false);

  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.98,
      filter: 'blur(2px) brightness(0.8)',
    },
    enter: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px) brightness(1)',
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 1.02,
      filter: 'blur(3px) brightness(1.2)',
      transition: {
        duration: 0.4,
        ease: [0.55, 0.055, 0.675, 0.19],
      },
    },
  };

  // Neon glow overlay variants
  const glowVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
  };

  useEffect(() => {
    // Trigger glow effect on route change
    setShowGlow(true);
    const timer = setTimeout(() => setShowGlow(false), 300);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {/* Neon glow overlay */}
      <AnimatePresence>
        {showGlow && (
          <motion.div
            className="fixed inset-0 pointer-events-none z-[9998]"
            style={{
              background: `radial-gradient(circle at center, 
                rgba(30, 144, 255, 0.1) 0%, 
                rgba(70, 163, 255, 0.05) 50%, 
                transparent 100%)`,
            }}
            variants={glowVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          />
        )}
      </AnimatePresence>

      {/* Page content with transitions */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location?.pathname || 'page'}
          variants={pageVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          className="relative z-[1]"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

// Enhanced menu item component
export const CyberpunkMenuItem = ({ 
  children, 
  onClick, 
  href, 
  className = '',
  glitchOnClick = true,
  rippleEffect = true,
  ...props 
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    if (rippleEffect) {
      createRippleEffect(e);
    }
    
    if (glitchOnClick) {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 300);
    }
    
    if (onClick) {
      onClick(e);
    }
  };

  // Create ripple effect
  const createRippleEffect = (event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('div');
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: radial-gradient(circle, 
        rgba(30, 144, 255, 0.6) 0%, 
        rgba(70, 163, 255, 0.4) 30%, 
        transparent 70%);
      transform: scale(0);
      animation: ripple-effect 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      pointer-events: none;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
    `;
    
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  const menuItemVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.02,
      y: -2,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.98 }
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      className={`
        relative overflow-hidden inline-block px-6 py-3 
        bg-transparent border border-blue-500/30 rounded-lg
        text-white font-medium transition-all duration-300
        hover:border-blue-500/80 hover:shadow-[0_0_20px_rgba(30,144,255,0.4)]
        ${isClicked ? 'animate-pulse' : ''}
        ${className}
      `}
      variants={menuItemVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      onClick={handleClick}
      style={{
        background: isClicked ? 'linear-gradient(45deg, transparent, rgba(30, 144, 255, 0.1), transparent)' : 'transparent',
        animation: isClicked ? 'glitch-click-effect 0.3s ease-out' : 'none',
      }}
      {...props}
    >
      {children}
      
      {/* Neon glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </Component>
  );
};

// Scroll reveal component
export const CyberpunkReveal = ({ 
  children, 
  className = '', 
  delay = 0, 
  variant = 'fade' 
}) => {
  const variants = {
    fade: {
      hidden: { 
        opacity: 0, 
        y: 40,
        filter: 'blur(2px)'
      },
      visible: { 
        opacity: 1, 
        y: 0,
        filter: 'blur(0px)',
        transition: {
          duration: 0.8,
          delay: delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    },
    glow: {
      hidden: { 
        opacity: 0, 
        y: 50,
        scale: 0.9,
        filter: 'blur(3px) brightness(0.5)'
      },
      visible: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        filter: 'blur(0px) brightness(1)',
        transition: {
          duration: 1,
          delay: delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    },
    slide: {
      hidden: { 
        opacity: 0, 
        x: -60,
        filter: 'blur(1px)'
      },
      visible: { 
        opacity: 1, 
        x: 0,
        filter: 'blur(0px)',
        transition: {
          duration: 0.6,
          delay: delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={variants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {children}
    </motion.div>
  );
};

// Data stream loading component
export const DataStreamLoader = ({ isLoading, children }) => {
  return (
    <div className="relative">
      {isLoading && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
            repeat: Infinity,
            repeatDelay: 0.5
          }}
          style={{ zIndex: 1 }}
        />
      )}
      <div className={isLoading ? 'opacity-50' : 'opacity-100'}>
        {children}
      </div>
    </div>
  );
};

// Binary rain background
export const BinaryRain = ({ density = 50, className = '' }) => {
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    const newDrops = Array.from({ length: density }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 2,
      character: Math.random() > 0.5 ? '1' : '0'
    }));
    setDrops(newDrops);
  }, [density]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {drops.map(drop => (
        <motion.div
          key={drop.id}
          className="absolute text-blue-500/60 font-mono text-sm"
          style={{ 
            left: `${drop.left}%`,
            fontFamily: 'Courier New, monospace'
          }}
          initial={{ y: '-100vh', opacity: 0 }}
          animate={{ 
            y: '100vh', 
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: drop.duration,
            delay: drop.delay,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          {drop.character}
        </motion.div>
      ))}
    </div>
  );
};

// Main transition wrapper that includes all effects
export const CyberpunkTransitionWrapper = ({ children, location }) => {
  return (
    <div className="relative min-h-screen">
      {/* Binary rain background */}
      <BinaryRain density={30} className="fixed inset-0 z-0" />
      
      {/* Page transitions */}
      <CyberpunkPageTransition location={location}>
        {children}
      </CyberpunkPageTransition>
    </div>
  );
};

export default CyberpunkPageTransition;
