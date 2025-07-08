import React, { useState, useRef, useEffect } from 'react';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  style = {}, 
  placeholder = null,
  onLoad = () => {},
  onError = () => {},
  priority = false, // For above-the-fold images
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority); // Load immediately if priority
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    if (priority) return; // Skip intersection observer for priority images

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before image enters viewport
        threshold: 0.1
      }
    );

    const currentImg = imgRef.current;
    if (currentImg && observerRef.current) {
      observerRef.current.observe(currentImg);
    }

    return () => {
      if (currentImg && observerRef.current) {
        observerRef.current.unobserve(currentImg);
      }
    };
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad();
  };

  const handleError = (error) => {
    setHasError(true);
    onError();
  };

  return (
    <div 
      ref={imgRef}
      className={`lazy-image-container ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: hasError ? 'var(--medium-bg)' : 'transparent',
        ...style
      }}
    >
      {/* Placeholder */}
      {!isLoaded && !hasError && placeholder && (
        <div className="lazy-image-placeholder">
          {placeholder}
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="lazy-image-error">
          <span>⚠️ Image not available</span>
        </div>
      )}

      {/* Actual image */}
      {isInView && !hasError && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            willChange: 'opacity'
          }}
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImage; 