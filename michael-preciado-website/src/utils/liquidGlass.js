/**
 * Liquid Glass Interactive Effects
 * Adds pointer tracking for WWDC24-style glass surfaces
 */

let rafId = null;

/**
 * Initialize liquid glass interactive effects
 */
export function initLiquidGlass() {
  // Feature detection & fallback setup
  if (!CSS.supports('backdrop-filter', 'blur(10px)')) {
    document.documentElement.classList.add('lg-no-transparency');
    return; // Skip advanced effects if no backdrop-filter support
  }

  // Set up pointer tracking for reactive glass surfaces
  setupPointerTracking();
}

/**
 * Set up pointer tracking for .liquid-glass[data-reactive] elements
 */
function setupPointerTracking() {
  // Use event delegation for performance
  document.addEventListener('pointermove', handlePointerMove, { passive: true });
  document.addEventListener('pointerleave', handlePointerLeave, { passive: true });
}

/**
 * Handle pointer movement - update CSS custom properties for reactive glow
 */
function handlePointerMove(event) {
  // Throttle with RAF for smooth 60fps updates
  if (rafId) return;

  // Optimization: Don't schedule RAF if target isn't relevant
  // Quick check before scheduling frame
  const target = event.target.closest ? event.target.closest('.liquid-glass[data-reactive]') : null;
  if (!target) return;

  rafId = requestAnimationFrame(() => {
    // Re-verify target existence (though closure captures it, good practice)
    if (target) {
      // Optimization: Use cached rect if possible or throttle rect reads
      // For now, we read rect but ensure we're in a RAF
      const rect = target.getBoundingClientRect();

      // Only calculate if within bounds (though pointermove implies it usually)
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Convert to percentages
      const xPercent = (x / rect.width) * 100;
      const yPercent = (y / rect.height) * 100;

      // Update CSS custom properties for glow position
      // Optimization: Use style.setProperty directly is fast enough
      target.style.setProperty('--lg-glow-x', `${Math.max(0, Math.min(100, xPercent))}%`);
      target.style.setProperty('--lg-glow-y', `${Math.max(0, Math.min(100, yPercent))}%`);

      // Dynamic edge hue based on position (subtle color shift)
      const dynamicHue = 210 + (xPercent * 0.5); // Slight hue shift based on X position
      target.style.setProperty('--lg-edge-h', dynamicHue);
    }

    rafId = null;
  });
}

/**
 * Reset glow position when pointer leaves reactive area
 */
function handlePointerLeave(event) {
  // Check if event.target is an Element before calling closest
  if (event.target && typeof event.target.closest === 'function') {
    const target = event.target.closest('.liquid-glass[data-reactive]');
    if (target) {
      // Smooth transition back to center
      target.style.setProperty('--lg-glow-x', '50%');
      target.style.setProperty('--lg-glow-y', '50%');
      target.style.removeProperty('--lg-edge-h'); // Return to animated default
    }
  }
}

/**
 * Apply liquid glass to existing elements by class name
 * Utility function for easy integration
 */
export function applyLiquidGlass(selector, variant = '') {
  const elements = document.querySelectorAll(selector);

  elements.forEach(element => {
    element.classList.add('liquid-glass');
    if (variant) element.classList.add(`liquid-glass--${variant}`);

    // Add reactive tracking to interactive elements
    if (element.matches('button, a, [role="button"]')) {
      element.setAttribute('data-reactive', '');
    }
  });
}

/**
 * Enhanced integration helper - automatically apply to common UI patterns
 * Cached selectors to avoid repeated DOM queries
 */
export function autoApplyLiquidGlass() {
  // Connect buttons
  applyLiquidGlass('.connect-button', 'button');

  // Project cards  
  applyLiquidGlass('.project-card', 'card');

  // Form inputs
  applyLiquidGlass('.form-input, .form-textarea', 'input');

  // Submit buttons
  applyLiquidGlass('.submit-button', 'button');

  // Skill buttons
  applyLiquidGlass('.skill-button', 'pill');

  // Return button
  applyLiquidGlass('.return-button', 'button');

  // Page navigation button
  applyLiquidGlass('.page-nav-button', 'button');

  // Blog elements
  applyLiquidGlass('.blog-intro-card', 'card');
  applyLiquidGlass('.blog-post-card', 'card');
  applyLiquidGlass('.blog-link', 'button');
  applyLiquidGlass('.blog-article-content', 'card');
  applyLiquidGlass('.category-pill', 'pill');

  // Tech tags
  applyLiquidGlass('.tech-tag', 'pill');

  // Project buttons
  applyLiquidGlass('.project-button', 'button');

  // Any existing .card, .btn, .panel classes
  applyLiquidGlass('.card', 'card');
  applyLiquidGlass('.btn', 'button');
  applyLiquidGlass('.panel', 'card');
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLiquidGlass);
} else {
  initLiquidGlass();
} 