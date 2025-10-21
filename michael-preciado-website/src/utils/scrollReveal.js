/**
 * Scroll reveal utility for terminal typing effect
 * Adds fade-in animations to elements as they scroll into view
 */

export const initScrollReveal = () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px', // Trigger slightly before element enters viewport
    threshold: 0.1
  };

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add staggered delay for terminal typing effect
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 50); // 50ms delay between each element
        
        // Optionally unobserve after animation
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersection, observerOptions);

  // Observe all scroll-reveal elements
  const scrollElements = document.querySelectorAll('.scroll-reveal, .terminal-scroll-reveal');
  scrollElements.forEach(el => observer.observe(el));

  return () => {
    scrollElements.forEach(el => observer.unobserve(el));
  };
};

// Auto-apply scroll reveal to common elements
export const autoApplyScrollReveal = () => {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyToElements);
  } else {
    applyToElements();
  }
};

function applyToElements() {
  // Add scroll-reveal to sections
  const sections = document.querySelectorAll('section:not(#hero)');
  sections.forEach(section => {
    if (!section.classList.contains('scroll-reveal')) {
      section.classList.add('scroll-reveal');
    }
  });

  // Add terminal-scroll-reveal to terminal elements
  const terminalElements = document.querySelectorAll(
    '.terminal-container, .blog-post-card, .terminal-block, .resume-block, .job-entry'
  );
  terminalElements.forEach((el, index) => {
    if (!el.classList.contains('terminal-scroll-reveal') && !el.classList.contains('scroll-reveal')) {
      el.classList.add('terminal-scroll-reveal');
      el.style.transitionDelay = `${index * 0.05}s`; // Stagger animations
    }
  });

  // Initialize observer
  initScrollReveal();
}

