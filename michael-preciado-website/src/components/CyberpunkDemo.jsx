import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CyberpunkMenuItem, 
  CyberpunkReveal, 
  DataStreamLoader,
  BinaryRain 
} from './CyberpunkPageTransition';
import { useCyberpunkEffects, usePageTransition } from '../hooks/useCyberpunkEffects';

/**
 * Demo component showing how to use cyberpunk animations
 */
const CyberpunkDemo = () => {
  const { 
    elementRef, 
    isVisible, 
    createRipple, 
    addGlitch, 
    triggerDataStream, 
    addNeonGlow 
  } = useCyberpunkEffects();
  
  const { startTransition } = usePageTransition();

  // Example navigation with transition
  const handleNavigation = () => {
    startTransition(() => {
      console.log('Navigate to new page');
      // Your navigation logic here
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 relative overflow-hidden">
      {/* Binary rain background */}
      <BinaryRain density={40} className="fixed inset-0 z-0" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Page title with reveal animation */}
        <CyberpunkReveal variant="glow" delay={0.2}>
          <h1 className="text-4xl font-bold text-center mb-8 cyber-terminal-text">
            Cyberpunk UI Demo
          </h1>
        </CyberpunkReveal>

        {/* Menu items with staggered reveals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {['Projects', 'Blog', 'Contact'].map((item, index) => (
            <CyberpunkReveal key={item} variant="slide" delay={0.3 + index * 0.1}>
              <CyberpunkMenuItem
                onClick={handleNavigation}
                className="w-full text-center"
                glitchOnClick={true}
                rippleEffect={true}
              >
                {item}
              </CyberpunkMenuItem>
            </CyberpunkReveal>
          ))}
        </div>

        {/* Interactive examples */}
        <div className="space-y-8">
          {/* Glitch effect example */}
          <CyberpunkReveal variant="fade" delay={0.6}>
            <div className="cyber-glass p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 neon-text">Interactive Effects</h2>
              <div className="flex flex-wrap gap-4">
                <button
                  className="cyber-menu-item"
                  onClick={(e) => {
                    createRipple(e);
                    addGlitch(e.target);
                  }}
                >
                  Ripple + Glitch
                </button>
                
                <button
                  className="cyber-menu-item"
                  onClick={(e) => triggerDataStream(e.target)}
                >
                  Data Stream
                </button>
                
                <button
                  className="cyber-menu-item"
                  onClick={(e) => addNeonGlow(e.target, 'high')}
                >
                  Neon Glow
                </button>
              </div>
            </div>
          </CyberpunkReveal>

          {/* Loading demo */}
          <CyberpunkReveal variant="fade" delay={0.8}>
            <div className="cyber-glass p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 neon-text">Loading States</h2>
              <DataStreamLoader isLoading={true}>
                <div className="cyber-data-transfer p-4 border border-blue-500/30 rounded">
                  <p>Content with loading overlay</p>
                </div>
              </DataStreamLoader>
            </div>
          </CyberpunkReveal>

          {/* Utility classes demo */}
          <CyberpunkReveal variant="glow" delay={1.0}>
            <div className="cyber-glass p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 neon-text">Utility Classes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="cyber-hologram p-4 border border-blue-500/30 rounded">
                  <p>.cyber-hologram</p>
                </div>
                
                <div className="cyber-circuit p-4 rounded">
                  <p>.cyber-circuit</p>
                </div>
                
                <div className="cyber-neon-border p-4">
                  <p>.cyber-neon-border</p>
                </div>
                
                <div className="cyber-scanlines p-4 border border-blue-500/30 rounded">
                  <p>.cyber-scanlines</p>
                </div>
              </div>
            </div>
          </CyberpunkReveal>

          {/* Terminal text demo */}
          <CyberpunkReveal variant="fade" delay={1.2}>
            <div className="cyber-matrix-bg p-6 rounded-lg border border-blue-500/30">
              <p className="cyber-terminal-text text-lg">
                Terminal text with cursor
              </p>
              <p className="text-sm text-blue-400 mt-2 opacity-60">
                Background shows binary pattern
              </p>
            </div>
          </CyberpunkReveal>
        </div>

        {/* Usage instructions */}
        <CyberpunkReveal variant="fade" delay={1.4}>
          <div className="mt-12 cyber-glass p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 neon-text">Usage Instructions</h2>
            <div className="space-y-2 text-sm text-blue-300">
              <p>• Import components from './components/CyberpunkPageTransition'</p>
              <p>• Use hooks from './hooks/useCyberpunkEffects'</p>
              <p>• Apply utility classes like .cyber-menu-item, .cyber-glass, etc.</p>
              <p>• All animations are GPU-accelerated and mobile-optimized</p>
              <p>• Respects prefers-reduced-motion settings</p>
            </div>
          </div>
        </CyberpunkReveal>
      </div>
    </div>
  );
};

export default CyberpunkDemo;
