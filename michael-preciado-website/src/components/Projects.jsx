import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MatrixRainBackground from './MatrixRainBackground';
import PageTransition from './PageTransition.jsx';
import ReturnButton from './ReturnButton.jsx';
import LazyImage from './LazyImage';
import { autoApplyLiquidGlass } from '../utils/liquidGlass.js';

const ProjectCard = React.memo(({ imageSrc, emoji, title, description, tech, codeLink, demoLink, index, fullImage = false }) => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .project-card-editorial {
        background: rgba(10, 25, 47, 0.6);
        border: 1px solid rgba(30, 144, 255, 0.2);
        border-radius: 10px;
        overflow: hidden;
        transition: all 0.2s ease;
        text-decoration: none;
        color: inherit;
        display: block;
      }
      .project-card-editorial:hover {
        border-color: rgba(30, 144, 255, 0.4);
        background: rgba(10, 25, 47, 0.8);
        transform: translateY(-3px);
      }
      .project-card-header {
        padding: 0.6rem;
        border-bottom: 1px solid rgba(30, 144, 255, 0.15);
        background: rgba(5, 12, 28, 0.4);
        display: flex;
        gap: 0.4rem;
      }
      .project-card-btn {
        width: 10px;
        height: 10px;
        border-radius: 50%;
      }
      .project-card-btn.red { background: #ff5f57; }
      .project-card-btn.yellow { background: #ffbd2e; }
      .project-card-btn.green { background: #28c840; }
      .project-card-image-wrap {
        aspect-ratio: 16/10;
        background: rgba(5, 12, 28, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }
      .project-card-emoji {
        font-size: 3rem;
      }
      .project-card-content {
        padding: 1rem;
      }
      .project-card-title {
        font-family: 'Playfair Display', serif;
        font-size: 1rem;
        color: #FFFFFF;
        margin-bottom: 0.5rem;
      }
      .project-card-desc {
        font-size: 0.75rem;
        color: #B8B0A0;
        line-height: 1.5;
        margin-bottom: 0.75rem;
      }
      .project-card-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.3rem;
        margin-bottom: 1rem;
      }
      .project-card-tag {
        font-size: 0.6rem;
        padding: 0.2rem 0.5rem;
        background: rgba(30, 144, 255, 0.1);
        border: 1px solid rgba(30, 144, 255, 0.25);
        color: #5A8FC0;
        border-radius: 2px;
      }
      .project-card-links {
        display: flex;
        gap: 0.5rem;
      }
      .project-card-btn-link {
        flex: 1;
        padding: 0.5rem;
        font-size: 0.7rem;
        border: 1px solid rgba(30, 144, 255, 0.4);
        background: rgba(30, 144, 255, 0.1);
        color: #FFFFFF;
        border-radius: 4px;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        display: inline-block;
      }
      .project-card-btn-link:hover {
        background: rgba(30, 144, 255, 0.2);
      }
    `;
    document.head.appendChild(style);
    return () => {
      if (style.parentNode) document.head.removeChild(style);
    };
  }, []);

  const isInternalLink = demoLink && demoLink.startsWith('/');
  const CardWrapper = isInternalLink ? Link : 'a';
  const linkProps = isInternalLink ? { to: demoLink } : { href: demoLink, target: "_blank", rel: "noopener noreferrer" };

  return (
    <CardWrapper {...linkProps} className="project-card-editorial">
      <div className="project-card-header">
        <span className="project-card-btn red"></span>
        <span className="project-card-btn yellow"></span>
        <span className="project-card-btn green"></span>
      </div>
      <div className="project-card-image-wrap">
        {emoji ? (
          <span className="project-card-emoji">{emoji}</span>
        ) : (
          <LazyImage 
            src={imageSrc} 
            alt={`${title} screenshot`}
            style={{ width: '100%', height: '100%', objectFit: fullImage ? 'contain' : 'cover' }}
          />
        )}
      </div>
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-desc">{description}</p>
        <div className="project-card-tags">
          {tech && tech.map((t, i) => (
            <span key={i} className="project-card-tag">{t}</span>
          ))}
        </div>
        <div className="project-card-links">
          {demoLink && (
            <span className="project-card-btn-link">View Project</span>
          )}
          {codeLink && (
            <a href={codeLink} target="_blank" rel="noopener noreferrer" className="project-card-btn-link" onClick={(e) => e.stopPropagation()}>
              View Code
            </a>
          )}
        </div>
      </div>
    </CardWrapper>
  );
});

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
        max-width: 1000px;
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
      .projects-intro {
        column-count: 2;
        column-gap: 1.5rem;
        text-align: left;
        color: #B8B0A0;
        font-size: 0.8rem;
        line-height: 1.6;
        margin: 2rem 0;
      }
      .projects-intro p {
        margin: 0 0 1rem 0;
        break-inside: avoid;
      }
      .projects-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        margin: 2rem 0;
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
        .projects-container { padding: 3rem 2rem; }
        .projects-intro { font-size: 0.9rem; column-gap: 2rem; }
        .projects-grid { grid-template-columns: repeat(3, 1fr); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      if (style.parentNode) document.head.removeChild(style);
    };
  }, []);

  const projectsData = [
    {
      imageSrc: "/images/projects/photography.png",
      title: "Photography Portfolio",
      description: "A minimalist photography showcase featuring responsive image galleries, smooth transitions, and optimized loading.",
      tech: ['React', 'JavaScript', 'CSS3'],
      codeLink: "https://github.com/michaelpreciado/mario.preciado.photography",
      demoLink: "https://mariopreciado-photography.netlify.app"
    },
    {
      imageSrc: "/images/projects/Solar.png",
      title: "Interactive Solar System",
      description: "An immersive 3D solar system simulation with realistic planetary orbits and interactive controls.",
      tech: ['JavaScript', 'WebGL', 'HTML5 Canvas'],
      codeLink: "https://github.com/michaelpreciado/Interactive_Solar_System",
      demoLink: "https://interactive-solar-system-bay.vercel.app/"
    },
    {
      imageSrc: "/images/projects/flattenhund.png",
      title: "Flappy Dog Game",
      description: "A charming Flappy Bird-inspired game featuring my dogs Taz & Chloe with online leaderboard.",
      tech: ['JavaScript', 'Supabase', 'Canvas'],
      codeLink: "https://github.com/michaelpreciado/Flattenhund",
      demoLink: "https://theflappydoggame.netlify.app/"
    },
    {
      imageSrc: "/images/projects/planttracker.png",
      title: "Plant Tracker PWA",
      description: "A Progressive Web App for plant care management with smart watering reminders.",
      tech: ['Next.js', 'TypeScript', 'Supabase'],
      codeLink: "https://github.com/michaelpreciado/Planter",
      demoLink: "https://planttracker.netlify.app/"
    },
    {
      emoji: "📷",
      title: "CRT Interactive Album",
      description: "A nostalgic 3D experience showcasing a 90s-era CRT computer with dynamic slideshow.",
      tech: ['React', 'Three.js', 'Tailwind'],
      codeLink: "https://github.com/michaelpreciado/CRTinteractiveAlbum",
      demoLink: "https://cr-tinteractive-album.vercel.app"
    },
    {
      imageSrc: "/images/projects/ai-server-placeholder.svg",
      title: "My OpenClaw Workflow",
      description: "A structured OpenClaw project workflow with architecture, implementation, and outcomes.",
      tech: ['OpenClaw', 'Automation', 'AI'],
      demoLink: "/projects/openclaw-workflow",
      fullImage: true
    },
    {
      imageSrc: "/images/corne-keyboard/cornebuild.jpeg",
      title: "Corne Keyboard Build",
      description: "Custom split ergonomic mechanical keyboard with ZMK firmware and 3D printed case.",
      tech: ['Hardware', 'ZMK', '3D Printing'],
      demoLink: "/projects/corne-keyboard",
      fullImage: true
    }
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

          <section className="projects-intro">
            <p>
              Welcome to my workshop. Here you'll find a collection of my favorite projects, 
              from web apps to hardware experiments. Each one is a story of a problem solved 
              and something new learned.
            </p>
            <p>
              Dive in and see what I've been building. From AI automation to 3D keyboards, 
              each project represents a unique challenge and learning experience.
            </p>
          </section>

          <div className="projects-grid">
            {projectsData.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
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
