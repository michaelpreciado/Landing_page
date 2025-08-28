// Debug utility to help troubleshoot background coverage issues
export const debugBackgroundCoverage = () => {
  if (process.env.NODE_ENV !== 'development') return;

  const canvas = document.querySelector('canvas[data-matrix-background]');
  const body = document.body;
  const documentElement = document.documentElement;
  
  const measurements = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight
    },
    document: {
      bodyScrollHeight: body.scrollHeight,
      bodyOffsetHeight: body.offsetHeight,
      documentClientHeight: documentElement.clientHeight,
      documentScrollHeight: documentElement.scrollHeight,
      documentOffsetHeight: documentElement.offsetHeight
    },
    canvas: {
      width: canvas?.width || 'not found',
      height: canvas?.height || 'not found',
      style: canvas?.style.height || 'no style'
    },
    calculated: {
      maxHeight: Math.max(
        body.scrollHeight,
        body.offsetHeight,
        documentElement.clientHeight,
        documentElement.scrollHeight,
        documentElement.offsetHeight,
        window.innerHeight
      )
    }
  };

  console.group('🎯 Background Coverage Debug');
  console.table(measurements.viewport);
  console.table(measurements.document);
  console.table(measurements.canvas);
  console.table(measurements.calculated);
  
  // Check if canvas height matches document height
  const expectedHeight = measurements.calculated.maxHeight + 200;
  const actualHeight = canvas?.height || 0;
  
  if (actualHeight >= expectedHeight) {
    console.log('✅ Canvas height looks good:', actualHeight, 'vs expected:', expectedHeight);
  } else {
    console.warn('⚠️ Canvas height might be too small:', actualHeight, 'vs expected:', expectedHeight);
  }
  
  console.groupEnd();
  
  return measurements;
};

// Auto-run debug on page load in development
if (process.env.NODE_ENV === 'development') {
  window.addEventListener('load', () => {
    setTimeout(debugBackgroundCoverage, 1000);
  });
}

export default debugBackgroundCoverage;
