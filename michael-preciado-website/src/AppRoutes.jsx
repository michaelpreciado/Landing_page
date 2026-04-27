import { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import App from './App.jsx';

// Lazy load route components for better performance
const Blog = lazy(() => import('./components/Blog.jsx'));
const BlogArticle = lazy(() => import('./components/BlogArticle.jsx'));
const ProjectsPage = lazy(() => import('./components/ProjectsPage.jsx'));
const CorneKeyboard = lazy(() => import('./components/CorneKeyboard.jsx'));
const AIServer = lazy(() => import('./components/AIServer.jsx'));
const OpenClawWorkflow = lazy(() => import('./components/OpenClawWorkflow.jsx'));
const PlanterCaseStudy = lazy(() => import('./components/PlanterCaseStudy.jsx'));
const Resume = lazy(() => import('./components/Resume.jsx'));

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

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Suspense fallback={<LoadingFallback />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<App />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/corne-keyboard" element={<CorneKeyboard />} />
          <Route path="/projects/ai-server" element={<AIServer />} />
          <Route path="/projects/friday" element={<OpenClawWorkflow />} />
          <Route path="/projects/planter" element={<PlanterCaseStudy />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default AppRoutes;
