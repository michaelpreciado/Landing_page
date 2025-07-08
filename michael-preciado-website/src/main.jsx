import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './index.css'
import './styles/liquidGlass.css'
import App from './App.jsx'
import { initLiquidGlass, autoApplyLiquidGlass } from './utils/liquidGlass.js'

// Lazy load route components for better performance
const Blog = lazy(() => import('./components/Blog.jsx'))
const BlogArticle = lazy(() => import('./components/BlogArticle.jsx'))
const ProjectsPage = lazy(() => import('./components/ProjectsPage.jsx'))

// Initialize only the core liquid glass system (pointer tracking, etc.)
initLiquidGlass();

// Loading fallback component
const LoadingFallback = () => (
  <div style={{ 
    minHeight: '100vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    background: '#000',
    color: '#1E90FF',
    fontFamily: 'monospace'
  }}>
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚡</div>
      <div>Loading...</div>
    </div>
  </div>
);

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<LoadingFallback />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<App />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </StrictMode>,
)
