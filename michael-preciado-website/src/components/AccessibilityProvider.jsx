import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

// === ACCESSIBILITY CONTEXT ===
const AccessibilityContext = createContext();

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider');
  }
  return context;
};

// === ACCESSIBILITY PROVIDER ===
export const AccessibilityProvider = ({ children }) => {
  const [preferences, setPreferences] = useState({
    reducedMotion: false,
    highContrast: false,
    largeText: false,
    respectFocusVisible: true,
  });

  const [capabilities, setCapabilities] = useState({
    hasHover: false,
    hasPointer: false,
    isMobile: false,
    isHighRefreshRate: false,
  });

  // Detect user preferences
  useEffect(() => {
    const detectPreferences = () => {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const highContrast = window.matchMedia('(prefers-contrast: high)').matches;
      const largeText = window.matchMedia('(prefers-reduced-data: reduce)').matches;

      setPreferences(prev => ({
        ...prev,
        reducedMotion,
        highContrast,
        largeText,
      }));

      // Apply accessibility classes to document
      document.documentElement.classList.toggle('reduced-motion', reducedMotion);
      document.documentElement.classList.toggle('high-contrast', highContrast);
      document.documentElement.classList.toggle('large-text', largeText);
    };

    const detectCapabilities = () => {
      const hasHover = window.matchMedia('(hover: hover)').matches;
      const hasPointer = window.matchMedia('(pointer: fine)').matches;
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      const isHighRefreshRate = window.screen?.refreshRate >= 120 || false;

      setCapabilities({
        hasHover,
        hasPointer,
        isMobile,
        isHighRefreshRate,
      });

      // Apply capability classes
      document.documentElement.classList.toggle('has-hover', hasHover);
      document.documentElement.classList.toggle('has-pointer', hasPointer);
      document.documentElement.classList.toggle('mobile', isMobile);
      document.documentElement.classList.toggle('high-refresh', isHighRefreshRate);
    };

    detectPreferences();
    detectCapabilities();

    // Listen for changes
    const mediaQueries = [
      window.matchMedia('(prefers-reduced-motion: reduce)'),
      window.matchMedia('(prefers-contrast: high)'),
      window.matchMedia('(prefers-reduced-data: reduce)'),
      window.matchMedia('(hover: hover)'),
      window.matchMedia('(pointer: fine)'),
      window.matchMedia('(max-width: 768px)'),
    ];

    const handleChange = () => {
      detectPreferences();
      detectCapabilities();
    };

    mediaQueries.forEach(mq => mq.addEventListener('change', handleChange));

    return () => {
      mediaQueries.forEach(mq => mq.removeEventListener('change', handleChange));
    };
  }, []);

  // Focus management
  const [focusVisible, setFocusVisible] = useState(false);
  const [lastInteractionType, setLastInteractionType] = useState('mouse');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Tab' || e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        setLastInteractionType('keyboard');
        setFocusVisible(true);
      }
    };

    const handleMouseDown = () => {
      setLastInteractionType('mouse');
      setFocusVisible(false);
    };

    const handlePointerDown = (e) => {
      if (e.pointerType === 'mouse') {
        setLastInteractionType('mouse');
        setFocusVisible(false);
      } else {
        setLastInteractionType('touch');
        setFocusVisible(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('pointerdown', handlePointerDown);

    // Apply focus-visible class
    document.documentElement.classList.toggle('focus-visible', focusVisible);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [focusVisible]);

  // Announce function for screen readers
  const announce = useCallback((message, priority = 'polite') => {
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', priority);
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    announcer.textContent = message;
    
    document.body.appendChild(announcer);
    
    setTimeout(() => {
      document.body.removeChild(announcer);
    }, 1000);
  }, []);

  // Skip to content function
  const skipToContent = useCallback(() => {
    const main = document.querySelector('main, [role="main"], #main-content');
    if (main) {
      main.focus();
      main.scrollIntoView({ behavior: preferences.reducedMotion ? 'auto' : 'smooth' });
    }
  }, [preferences.reducedMotion]);

  const value = {
    preferences,
    capabilities,
    focusVisible,
    lastInteractionType,
    announce,
    skipToContent,
    setPreferences,
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};

// === FOCUS TRAP COMPONENT ===
export const FocusTrap = ({ children, active = true, restoreFocus = true }) => {
  const containerRef = React.useRef(null);
  const previousActiveElement = React.useRef(null);

  useEffect(() => {
    if (!active) return;

    previousActiveElement.current = document.activeElement;

    const container = containerRef.current;
    if (!container) return;

    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
        if (restoreFocus && previousActiveElement.current) {
          previousActiveElement.current.focus();
        }
      }
    };

    container.addEventListener('keydown', handleTabKey);
    container.addEventListener('keydown', handleEscapeKey);

    // Focus first element
    firstElement?.focus();

    return () => {
      container.removeEventListener('keydown', handleTabKey);
      container.removeEventListener('keydown', handleEscapeKey);
      
      if (restoreFocus && previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    };
  }, [active, restoreFocus]);

  return (
    <div ref={containerRef} tabIndex={-1}>
      {children}
    </div>
  );
};

// === SCREEN READER ONLY COMPONENT ===
export const ScreenReaderOnly = ({ children, as: Component = 'span', ...props }) => {
  return (
    <Component 
      className="sr-only"
      style={{
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: '0',
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        border: '0',
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

// === SKIP LINK COMPONENT ===
export const SkipLink = ({ href = '#main-content', children = 'Skip to main content' }) => {
  const { preferences } = useAccessibility();

  return (
    <a
      href={href}
      className="skip-link"
      style={{
        position: 'absolute',
        top: '-40px',
        left: '6px',
        background: 'var(--primary-accent)',
        color: 'white',
        padding: '8px 12px',
        textDecoration: 'none',
        borderRadius: '4px',
        fontSize: '14px',
        fontWeight: '600',
        zIndex: '10000',
        transform: 'translateY(-100%)',
        transition: preferences.reducedMotion ? 'none' : 'transform 0.2s ease',
      }}
      onFocus={(e) => {
        e.target.style.transform = 'translateY(0)';
      }}
      onBlur={(e) => {
        e.target.style.transform = 'translateY(-100%)';
      }}
    >
      {children}
    </a>
  );
};

// === LIVE REGION COMPONENT ===
export const LiveRegion = ({ 
  children, 
  level = 'polite', 
  atomic = true,
  relevant = 'additions text',
  className = ''
}) => {
  return (
    <div
      aria-live={level}
      aria-atomic={atomic}
      aria-relevant={relevant}
      className={`live-region ${className}`}
      style={{
        position: 'absolute',
        left: '-10000px',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  );
};

// === REDUCED MOTION WRAPPER ===
export const MotionWrapper = ({ children, fallback = null, className = '' }) => {
  const { preferences } = useAccessibility();

  if (preferences.reducedMotion && fallback) {
    return <div className={className}>{fallback}</div>;
  }

  return <div className={className}>{children}</div>;
};

// === HIGH CONTRAST SUPPORT ===
export const withHighContrast = (Component) => {
  return React.forwardRef((props, ref) => {
    const { preferences } = useAccessibility();
    
    return (
      <Component
        {...props}
        ref={ref}
        data-high-contrast={preferences.highContrast}
        className={`${props.className || ''} ${preferences.highContrast ? 'high-contrast' : ''}`.trim()}
      />
    );
  });
};

// === ACCESSIBLE BUTTON COMPONENT ===
export const AccessibleButton = ({ 
  children, 
  onClick, 
  disabled = false,
  ariaLabel,
  ariaDescribedBy,
  className = '',
  variant = 'primary',
  ...props 
}) => {
  const { preferences, announce } = useAccessibility();

  const handleClick = useCallback((e) => {
    if (disabled) return;
    
    if (onClick) {
      onClick(e);
      
      // Announce action to screen readers if needed
      if (ariaLabel && !preferences.reducedMotion) {
        announce(`${ariaLabel} activated`, 'assertive');
      }
    }
  }, [onClick, disabled, ariaLabel, announce, preferences.reducedMotion]);

  return (
    <button
      className={`accessible-button ${variant} ${className}`}
      onClick={handleClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      style={{
        // Ensure minimum touch target size
        minHeight: '44px',
        minWidth: '44px',
        // High contrast border
        border: preferences.highContrast ? '2px solid currentColor' : undefined,
        // Focus styles that work with screen readers
        outline: 'none',
      }}
      onFocus={(e) => {
        if (preferences.respectFocusVisible) {
          e.target.setAttribute('data-focus-visible', 'true');
        }
      }}
      onBlur={(e) => {
        e.target.removeAttribute('data-focus-visible');
      }}
      {...props}
    >
      {children}
    </button>
  );
};

// === PERFORMANCE-AWARE ANIMATION ===
export const PerformanceAwareAnimation = ({ 
  children, 
  animation, 
  fallback,
  threshold = 60 // FPS threshold
}) => {
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const { preferences } = useAccessibility();

  useEffect(() => {
    if (preferences.reducedMotion) {
      setShouldAnimate(false);
      return;
    }

    // Simple FPS monitoring
    let frameCount = 0;
    let lastTime = performance.now();
    let animationId;

    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();

      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        
        if (fps < threshold) {
          setShouldAnimate(false);
          return;
        }

        frameCount = 0;
        lastTime = currentTime;
      }

      animationId = requestAnimationFrame(measureFPS);
    };

    animationId = requestAnimationFrame(measureFPS);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [threshold, preferences.reducedMotion]);

  if (!shouldAnimate && fallback) {
    return fallback;
  }

  return shouldAnimate ? animation : children;
};

export default AccessibilityProvider;
