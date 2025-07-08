import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './index.css'
import './styles/liquidGlass.css'
import App from './App.jsx'
import Blog from './components/Blog.jsx'
import BlogArticle from './components/BlogArticle.jsx'
import ProjectsPage from './components/ProjectsPage.jsx'
import { initLiquidGlass, autoApplyLiquidGlass } from './utils/liquidGlass.js'

// Initialize only the core liquid glass system (pointer tracking, etc.)
initLiquidGlass();

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogArticle />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
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
