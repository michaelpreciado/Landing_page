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
  quality = 'auto', // 'high', 'medium', 'low', 'auto'
  maxWidth = null, // Cap image width for performance
  objectFit = 'cover', // Control how the image should fit inside its container
  fetchPriority = 'auto', // 'high' | 'low' | 'auto'
  fill = false, // When true, image fills container height; otherwise natural height
  intrinsic = false, // When true, container sizes to image's intrinsic height (disables size containment)
  ratio = null, // e.g., '16 / 9' to reserve space before image loads
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(priority); // For priority images, show immediately
  const [isInView, setIsInView] = useState(priority); // Load immediately if priority
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);
  const imgElRef = useRef(null);
  const observerRef = useRef(null);

  // Determine optimal image quality based on device and connection
  const getOptimizedQuality = () => {
    const isMobile = window.innerWidth <= 768;
    const isSlowConnection = navigator.connection && 
      (navigator.connection.effectiveType === 'slow-2g' || 
       navigator.connection.effectiveType === '2g');
    
    if (quality === 'auto') {
      if (isSlowConnection || isMobile) return 'medium';
      return 'high';
    }
    return quality;
  };

  const optimizedQuality = getOptimizedQuality();

  useEffect(() => {
    if (priority) return; // Skip intersection observer for priority images

    // Fallback timer to ensure images load even if intersection observer fails
    const fallbackTimer = setTimeout(() => {
      if (!isInView) {
        setIsInView(true);
      }
    }, 2000); // 2 second fallback

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            clearTimeout(fallbackTimer); // Clear fallback if observer works
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '100px', // Increased margin for better detection
        threshold: 0.01 // Lower threshold for more reliable detection
      }
    );

    const currentImg = imgRef.current;
    if (currentImg && observerRef.current) {
      observerRef.current.observe(currentImg);
    }

    return () => {
      clearTimeout(fallbackTimer);
      if (currentImg && observerRef.current) {
        observerRef.current.unobserve(currentImg);
      }
    };
  }, [priority, isInView]);

  // If the image element has already finished loading from cache, mark it loaded
  useEffect(() => {
    if (!isInView && !priority) return;
    const el = imgElRef.current;
    if (el && el.complete && el.naturalWidth > 0) {
      if (!isLoaded) setIsLoaded(true);
    }
  }, [isInView, priority, isLoaded]);

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
        // Do not apply CSS contain when intrinsic is true so the container can size to the image
        // Applying layout/style/paint containment isolates layout and collapses height
        contain: intrinsic ? undefined : undefined,
        aspectRatio: ratio || undefined,
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
          ref={imgElRef}
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : fetchPriority}
          style={{
            opacity: (isLoaded || priority) ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
            width: '100%',
            height: fill ? '100%' : 'auto',
            objectFit: objectFit,
            aspectRatio: objectFit === 'contain' ? 'auto' : undefined,
            willChange: 'opacity',
            // Performance optimizations for 1080p
            imageRendering: optimizedQuality === 'low' ? 'optimizeSpeed' : 
                          optimizedQuality === 'medium' ? '-webkit-optimize-contrast' : 
                          'auto',
            maxWidth: maxWidth || '1920px', // Cap at 1080p width for performance
            // Hardware acceleration
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden'
          }}
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImage; 