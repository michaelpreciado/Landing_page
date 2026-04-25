import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import AppRoutes from './AppRoutes.jsx';
import { initLiquidGlass } from './utils/liquidGlass.js';

// Initialize only the core liquid glass system (pointer tracking, etc.)
initLiquidGlass();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
);
