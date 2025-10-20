import React, { useRef, useState, useEffect } from 'react';

const ScrollRevealTerminal = React.memo(({ children, threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      {
        threshold: threshold, // Trigger when 10% of the element is visible
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    // Cleanup observer on component unmount
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]); // Re-run effect if threshold changes

  return (
    <div
      ref={elementRef}
      className={`animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  );
});

ScrollRevealTerminal.displayName = 'ScrollRevealTerminal';

export default ScrollRevealTerminal; 