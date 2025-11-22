import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable gzip compression
    reportCompressedSize: true,
    // Chunk size optimization
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        // Optimized code splitting strategy
        manualChunks: (id) => {
          // Core React libraries
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('react-router-dom')) {
              return 'router-vendor';
            }
            if (id.includes('framer-motion')) {
              return 'animation-vendor';
            }
            if (id.includes('react-icons')) {
              return 'icons-vendor';
            }
            // Other node_modules go into vendor chunk
            return 'vendor';
          }
        },
        // Optimize chunk names
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const extension = assetInfo.name.split('.').pop();
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(extension)) {
            return 'images/[name]-[hash].[ext]';
          }
          if (/css/i.test(extension)) {
            return 'css/[name]-[hash].[ext]';
          }
          return 'assets/[name]-[hash].[ext]';
        }
      }
    },
    // Source map configuration for production debugging
    sourcemap: false, // Disable sourcemaps for production for smaller bundle
    // Minification settings
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug']
      }
    },
    // Additional optimizations
    cssCodeSplit: true,
    assetsInlineLimit: 4096 // Inline assets smaller than 4kb
  },
  // Development optimizations
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'react-icons']
  },
  // Preload critical dependencies
  server: {
    // Enable HTTP/2 for development
    force: true,
    port: 3000
  }
})
