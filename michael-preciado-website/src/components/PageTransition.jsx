import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = React.memo(({ children }) => {
  return (
    <motion.div
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
    </motion.div>
  );
});

PageTransition.displayName = 'PageTransition';

export default PageTransition; 