import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MatrixRainBackground from './MatrixRainBackground';
import PageTransition from './PageTransition.jsx';
import ReturnButton from './ReturnButton.jsx';
import { autoApplyLiquidGlass } from '../utils/liquidGlass.js';

function Projects() {
  useEffect(() => {
    autoApplyLiquidGlass();

    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500&display=swap');
      
      .projects-editorial {
        min-height: 100vh;
        position: relative;
        color: #E8E4DC;
        font-family: 'Inter', sans-serif;
        font-weight: 300;
        line-height: 1.7;
      }

      .projects-container {
        max-width: 900px;
        margin: 0 auto;
        padding: 3rem 1.25rem;
        position: relative;
        z-index: 1;
      }

      .projects-header {
        text-align: center;
        margin-bottom: 2rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid rgba(30, 144, 255, 0.3);
      }

      .projects-meta {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        font-size: 0.7rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: #8B8680;
        margin-bottom: 1.5rem;
      }

      .projects-title {
        font-family: 'Playfair Display', serif;
        font-size: clamp(1.8rem, 7vw, 3.5rem);
        font-weight: 500;
        letter-spacing: -0.01em;
        margin: 0;
        color: #FFFFFF;
        line-height: 1.1;
        text-shadow: 0 0 30px rgba(30, 144, 255, 0.3);
      }

      .projects-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        margin: 2rem 0;
      }

      .project-card {
        background: rgba(10, 25, 47, 0.6);
        border: 1px solid rgba(30, 144, 255, 0.2);
        border-radius: 8px;
        padding: 1rem;
        text-decoration: none;
        color: inherit;
        transition: all 0.2s ease;
      }

      .project-card:hover {
        border-color: rgba(30, 144, 255, 0.4);
        background: rgba(10, 25, 47, 0.8);
      }

      .project-card-image {
        aspect-ratio: 16/10;
        background: rgba(5, 12, 28, 0.8);
        border: 1px solid rgba(30, 144, 255, 0.15);
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.6rem;
        color: #5A8FC0;
        text-transform: uppercase;
        margin-bottom: 0.8rem;
      }

      .project-card-title {
        font-family: 'Playfair Display', serif;
        font-size: 0.9rem;
        color: #FFFFFF;
        margin-bottom: 0.3rem;
      }

      .project-card-meta {
        font-size: 0.6rem;
        color: #8B8680;
        text-transform: uppercase;
        letter-spacing: 0.06em;
      }

      .projects-handle {
        text-align: center;
        margin: 2rem 0;
        font-family: 'Playfair Display', serif;
        font-size: 0.95rem;
        color: #8B8680;
        font-style: italic;
      }

      .projects-footer {
        text-align: center;
        margin-top: 2.5rem;
        padding-top: 1.25rem;
        border-top: 1px solid rgba(30, 144, 255, 0.15);
        font-size: 0.7rem;
        color: #8B8680;
      }

      @media (min-width: 640px) {
        .projects-container {
          padding: 3rem 2rem;
        }
        
        .projects-grid {
          grid-template-columns: repeat(3, 1fr);
        }
      }
    `;

    document.head.appendChild(style);
    return () => {
      if (style.parentNode) {
        document.head.removeChild(style);
      }
    };
  }, []);

  const projects = [
    { id: 'openclaw', title: 'OpenClaw Workflow', category: 'AUTOMATION', image: '[IMG]' },
    { id: 'server', title: 'AI Server', category: 'HARDWARE', image: '[IMG]' },
    { id: 'keyboard', title: 'Corne Keyboard', category: 'HARDWARE', image: '[IMG]' },
  ];

  return (
    <PageTransition>
      <MatrixRainBackground />
      <ReturnButton to="/" />
      
      <div className="projects-editorial">
        <div className="projects-container">
          <header className="projects-header">
            <div className="projects-meta">
              <span>WORK</span>
              <span>SELECTED</span>
            </div>
            <h1 className="projects-title">PROJECTS</h1>
          </header>

          <div className="projects-grid">
            {projects.map(project => (
              <Link key={project.id} to={`/projects/${project.id}`} className="project-card">
                <div className="project-card-image">{project.image}</div>
                <div className="project-card-title">{project.title}</div>
                <div className="project-card-meta">{project.category}</div>
              </Link>
            ))}
          </div>

          <div className="projects-handle">@preciado.tech</div>

          <footer className="projects-footer">
            <p>AI systems, hardware, and automation</p>
          </footer>
        </div>
      </div>
    </PageTransition>
  );
}

export default Projects;
