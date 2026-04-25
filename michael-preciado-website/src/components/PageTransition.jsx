import React from 'react';
import { motion as Motion } from 'framer-motion';

const PageTransition = React.memo(({ children }) => {
  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.2,
        ease: "easeInOut"
      }}
      style={{ width: '100%', minHeight: '100vh' }}
    >
      {children}
    </Motion.div>
  );
});

PageTransition.displayName = 'PageTransition';

export default PageTransition; 