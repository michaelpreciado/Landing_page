import React, { useState, useEffect, useRef, useCallback } from 'react';

// === PERFORMANCE MONITORING COMPONENT ===
export const PerformanceMonitor = ({ 
  enabled = process.env.NODE_ENV === 'development',
  showOverlay = false,
  targetFPS = 120,
  warningThreshold = 60,
  onPerformanceWarning,
  children 
}) => {
  const [metrics, setMetrics] = useState({
    fps: 60,
    frameTime: 16.67,
    droppedFrames: 0,
    totalFrames: 0,
    longTasks: 0,
    averageFrameTime: 16.67,
    warnings: [],
  });

  const metricsRef = useRef(metrics);
  const animationIdRef = useRef(null);
  const lastTimeRef = useRef(performance.now());
  const frameCountRef = useRef(0);
  const frameTimesRef = useRef([]);
  const observerRef = useRef(null);

  // Update metrics ref when state changes
  useEffect(() => {
    metricsRef.current = metrics;
  }, [metrics]);

  // Performance measurement logic
  const measurePerformance = useCallback(() => {
    if (!enabled) return;

    const now = performance.now();
    const deltaTime = now - lastTimeRef.current;
    
    frameCountRef.current++;
    frameTimesRef.current.push(deltaTime);
    
    // Keep only last 60 frame times for rolling average
    if (frameTimesRef.current.length > 60) {
      frameTimesRef.current.shift();
    }

    // Calculate metrics every second
    if (deltaTime >= 1000 || frameCountRef.current >= targetFPS) {
      const fps = Math.round((frameCountRef.current * 1000) / deltaTime);
      const averageFrameTime = frameTimesRef.current.reduce((a, b) => a + b, 0) / frameTimesRef.current.length;
      const targetFrameTime = 1000 / targetFPS;
      const droppedFrames = frameTimesRef.current.filter(time => time > targetFrameTime * 1.5).length;

      const newMetrics = {
        fps,
        frameTime: deltaTime / frameCountRef.current,
        droppedFrames: metricsRef.current.droppedFrames + droppedFrames,
        totalFrames: metricsRef.current.totalFrames + frameCountRef.current,
        longTasks: metricsRef.current.longTasks,
        averageFrameTime,
        warnings: [...metricsRef.current.warnings],
      };

      // Check for performance warnings
      if (fps < warningThreshold) {
        const warning = {
          type: 'low-fps',
          message: `Low FPS detected: ${fps}fps (target: ${targetFPS}fps)`,
          timestamp: new Date().toISOString(),
          severity: fps < 30 ? 'critical' : 'warning',
        };
        
        newMetrics.warnings.push(warning);
        
        if (onPerformanceWarning) {
          onPerformanceWarning(warning);
        }
      }

      if (averageFrameTime > targetFrameTime * 2) {
        const warning = {
          type: 'long-frame',
          message: `Long frame detected: ${averageFrameTime.toFixed(2)}ms (target: ${targetFrameTime.toFixed(2)}ms)`,
          timestamp: new Date().toISOString(),
          severity: 'warning',
        };
        
        newMetrics.warnings.push(warning);
        
        if (onPerformanceWarning) {
          onPerformanceWarning(warning);
        }
      }

      // Limit warnings array to last 10
      if (newMetrics.warnings.length > 10) {
        newMetrics.warnings = newMetrics.warnings.slice(-10);
      }

      setMetrics(newMetrics);
      
      frameCountRef.current = 0;
      lastTimeRef.current = now;
    }

    animationIdRef.current = requestAnimationFrame(measurePerformance);
  }, [enabled, targetFPS, warningThreshold, onPerformanceWarning]);

  // Long task observer
  useEffect(() => {
    if (!enabled || !window.PerformanceObserver) return;

    try {
      observerRef.current = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const longTaskCount = entries.filter(entry => entry.duration > 50).length;
        
        if (longTaskCount > 0) {
          setMetrics(prev => ({
            ...prev,
            longTasks: prev.longTasks + longTaskCount,
            warnings: [
              ...prev.warnings,
              {
                type: 'long-task',
                message: `${longTaskCount} long task(s) detected (>50ms)`,
                timestamp: new Date().toISOString(),
                severity: 'warning',
              }
            ].slice(-10),
          }));
        }
      });

      observerRef.current.observe({ entryTypes: ['longtask'] });
    } catch (e) {
      console.warn('PerformanceObserver not supported for long tasks');
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [enabled]);

  // Start/stop monitoring
  useEffect(() => {
    if (enabled) {
      animationIdRef.current = requestAnimationFrame(measurePerformance);
    }

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [enabled, measurePerformance]);

  // Reset metrics function
  const resetMetrics = useCallback(() => {
    setMetrics({
      fps: 60,
      frameTime: 16.67,
      droppedFrames: 0,
      totalFrames: 0,
      longTasks: 0,
      averageFrameTime: 16.67,
      warnings: [],
    });
    frameCountRef.current = 0;
    lastTimeRef.current = performance.now();
    frameTimesRef.current = [];
  }, []);

  if (!enabled) {
    return children;
  }

  return (
    <>
      {children}
      {showOverlay && (
        <PerformanceOverlay 
          metrics={metrics} 
          targetFPS={targetFPS}
          onReset={resetMetrics}
        />
      )}
    </>
  );
};

// === PERFORMANCE OVERLAY COMPONENT ===
const PerformanceOverlay = ({ metrics, targetFPS, onReset }) => {
  const [isMinimized, setIsMinimized] = useState(false);

  const getStatusColor = (fps) => {
    if (fps >= targetFPS * 0.8) return '#00ff00';
    if (fps >= targetFPS * 0.5) return '#ffff00';
    return '#ff0000';
  };

  const criticalWarnings = metrics.warnings.filter(w => w.severity === 'critical');
  const hasIssues = metrics.fps < targetFPS * 0.8 || metrics.longTasks > 0 || criticalWarnings.length > 0;

  if (isMinimized) {
    return (
      <div
        style={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          zIndex: 10000,
          background: hasIssues ? 'rgba(255, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          padding: '8px 12px',
          borderRadius: '4px',
          fontSize: '12px',
          fontFamily: 'monospace',
          cursor: 'pointer',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}
        onClick={() => setIsMinimized(false)}
      >
        {metrics.fps}fps {hasIssues && '⚠️'}
      </div>
    );
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        zIndex: 10000,
        background: 'rgba(0, 0, 0, 0.9)',
        color: 'white',
        padding: '12px',
        borderRadius: '8px',
        fontSize: '11px',
        fontFamily: 'monospace',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        minWidth: '200px',
        backdropFilter: 'blur(4px)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <h3 style={{ margin: 0, fontSize: '12px', fontWeight: 'bold' }}>Performance</h3>
        <div>
          <button
            onClick={onReset}
            style={{
              background: 'none',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
              padding: '2px 6px',
              borderRadius: '3px',
              fontSize: '10px',
              marginRight: '4px',
              cursor: 'pointer',
            }}
          >
            Reset
          </button>
          <button
            onClick={() => setIsMinimized(true)}
            style={{
              background: 'none',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
              padding: '2px 6px',
              borderRadius: '3px',
              fontSize: '10px',
              cursor: 'pointer',
            }}
          >
            −
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '8px' }}>
        <div>
          <div style={{ color: getStatusColor(metrics.fps), fontWeight: 'bold' }}>
            FPS: {metrics.fps}
          </div>
          <div>Target: {targetFPS}</div>
        </div>
        <div>
          <div>Frame: {metrics.averageFrameTime.toFixed(2)}ms</div>
          <div>Dropped: {metrics.droppedFrames}</div>
        </div>
      </div>

      <div style={{ marginBottom: '8px' }}>
        <div>Total Frames: {metrics.totalFrames}</div>
        <div>Long Tasks: {metrics.longTasks}</div>
      </div>

      {metrics.warnings.length > 0 && (
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '8px' }}>
          <div style={{ fontSize: '10px', fontWeight: 'bold', marginBottom: '4px' }}>
            Recent Warnings ({metrics.warnings.length}):
          </div>
          <div style={{ maxHeight: '80px', overflowY: 'auto' }}>
            {metrics.warnings.slice(-3).map((warning, index) => (
              <div
                key={index}
                style={{
                  fontSize: '9px',
                  color: warning.severity === 'critical' ? '#ff6b6b' : '#ffd93d',
                  marginBottom: '2px',
                  lineHeight: '1.2',
                }}
              >
                {warning.message}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// === FRAME DROP DETECTOR ===
export const useFrameDropDetector = (onFrameDrop, threshold = 16.67 * 2) => {
  const lastFrameTimeRef = useRef(performance.now());
  const animationIdRef = useRef(null);

  const checkFrameTime = useCallback(() => {
    const now = performance.now();
    const deltaTime = now - lastFrameTimeRef.current;

    if (deltaTime > threshold) {
      onFrameDrop(deltaTime);
    }

    lastFrameTimeRef.current = now;
    animationIdRef.current = requestAnimationFrame(checkFrameTime);
  }, [onFrameDrop, threshold]);

  useEffect(() => {
    animationIdRef.current = requestAnimationFrame(checkFrameTime);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [checkFrameTime]);
};

// === PERFORMANCE MEASUREMENT HOOK ===
export const usePerformanceMeasurement = (measurementName) => {
  const startMeasurement = useCallback(() => {
    performance.mark(`${measurementName}-start`);
  }, [measurementName]);

  const endMeasurement = useCallback(() => {
    performance.mark(`${measurementName}-end`);
    performance.measure(measurementName, `${measurementName}-start`, `${measurementName}-end`);
    
    const measure = performance.getEntriesByName(measurementName)[0];
    return measure ? measure.duration : null;
  }, [measurementName]);

  const getMeasurements = useCallback(() => {
    return performance.getEntriesByName(measurementName);
  }, [measurementName]);

  const clearMeasurements = useCallback(() => {
    performance.clearMarks(`${measurementName}-start`);
    performance.clearMarks(`${measurementName}-end`);
    performance.clearMeasures(measurementName);
  }, [measurementName]);

  return {
    startMeasurement,
    endMeasurement,
    getMeasurements,
    clearMeasurements,
  };
};

// === BUDGET CHECKER COMPONENT ===
export const BudgetChecker = ({ 
  budgetMs = 3,
  componentName = 'Component',
  onBudgetExceeded,
  children 
}) => {
  const { startMeasurement, endMeasurement } = usePerformanceMeasurement(componentName);

  useEffect(() => {
    startMeasurement();
    
    return () => {
      const duration = endMeasurement();
      if (duration && duration > budgetMs) {
        if (onBudgetExceeded) {
          onBudgetExceeded({
            component: componentName,
            duration,
            budget: budgetMs,
            exceeded: duration - budgetMs,
          });
        }
        
        console.warn(
          `Performance budget exceeded: ${componentName} took ${duration.toFixed(2)}ms (budget: ${budgetMs}ms)`
        );
      }
    };
  }, [startMeasurement, endMeasurement, budgetMs, componentName, onBudgetExceeded]);

  return children;
};

// === PERFORMANCE TESTING UTILITIES ===
export const performanceTest = {
  // Test animation smoothness
  testAnimation: async (element, animationName, duration = 1000) => {
    return new Promise((resolve) => {
      const startTime = performance.now();
      let frameCount = 0;
      let droppedFrames = 0;
      const targetFrameTime = 1000 / 120; // 120fps target

      const measure = () => {
        frameCount++;
        const currentTime = performance.now();
        const frameTime = currentTime - (startTime + (frameCount - 1) * targetFrameTime);
        
        if (frameTime > targetFrameTime * 1.5) {
          droppedFrames++;
        }

        if (currentTime - startTime >= duration) {
          const totalTime = currentTime - startTime;
          const fps = Math.round((frameCount * 1000) / totalTime);
          
          resolve({
            fps,
            frameCount,
            droppedFrames,
            duration: totalTime,
            element: element.tagName || 'Unknown',
            animation: animationName,
            success: fps >= 60 && droppedFrames < frameCount * 0.1,
          });
        } else {
          requestAnimationFrame(measure);
        }
      };

      requestAnimationFrame(measure);
    });
  },

  // Measure component render time
  measureRenderTime: (componentName, renderFunction) => {
    const startTime = performance.now();
    const result = renderFunction();
    const endTime = performance.now();
    
    const renderTime = endTime - startTime;
    
    if (renderTime > 16.67) { // More than one frame at 60fps
      console.warn(`Slow render detected: ${componentName} took ${renderTime.toFixed(2)}ms`);
    }
    
    return {
      result,
      renderTime,
      component: componentName,
    };
  },

  // Check for layout thrashing
  detectLayoutThrashing: (callback) => {
    let layoutCount = 0;
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      layoutCount += entries.filter(entry => entry.name === 'layout').length;
    });

    try {
      observer.observe({ entryTypes: ['measure'] });
      callback();
      observer.disconnect();
      
      return {
        layoutCount,
        hasLayoutThrashing: layoutCount > 1,
        warning: layoutCount > 1 ? 'Multiple layouts detected - possible layout thrashing' : null,
      };
    } catch (e) {
      observer.disconnect();
      return { layoutCount: 0, hasLayoutThrashing: false, warning: 'Layout detection not supported' };
    }
  },
};

export default PerformanceMonitor;
