import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MatrixRainBackground from './MatrixRainBackground';
import PageTransition from './PageTransition.jsx';
import ReturnButton from './ReturnButton.jsx';
import LazyImage from './LazyImage';
import { autoApplyLiquidGlass } from '../utils/liquidGlass.js';

const ProjectCard = React.memo(({ imageSrc, emoji, title, description, tech, codeLink, demoLink, index, fullImage = false, date }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.08,
      },
    },
  };

  const isInternalLink = demoLink && demoLink.startsWith('/');
  const CardWrapper = isInternalLink ? Link : motion.a;
  const linkProps = isInternalLink 
    ? { to: demoLink } 
    : { href: demoLink, target: "_blank", rel: "noopener noreferrer" };

  return (
    <CardWrapper 
      {...linkProps}
      className="project-card-editorial"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
    >
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
        <div className="project-card-date">{date}</div>
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-desc">{description}</p>
        <div className="project-card-tags">
          {tech && tech.slice(0, 4).map((t, i) => (
            <span key={i} className="project-card-tag">{t}</span>
          ))}
        </div>
        <div className="project-card-links">
          {demoLink && (
            <span className="project-card-btn-link">View</span>
          )}
          {codeLink && (
            <a href={codeLink} target="_blank" rel="noopener noreferrer" className="project-card-btn-link secondary" onClick={(e) => e.stopPropagation()}>
              Code
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
        line-height: 1.6;
      }
      .projects-container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 5rem 1.25rem 3rem;
        position: relative;
        z-index: 1;
      }
      .projects-header {
        text-align: center;
        margin-bottom: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid rgba(30, 144, 255, 0.15);
      }
      .projects-meta {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        font-size: 0.65rem;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: #8B8680;
        margin-bottom: 0.75rem;
      }
      .projects-meta span {
        position: relative;
      }
      .projects-meta span:not(:last-child)::after {
        content: '·';
        position: absolute;
        right: -0.75rem;
        color: rgba(30, 144, 255, 0.3);
      }
      .projects-title {
        font-family: 'Playfair Display', serif;
        font-size: clamp(2rem, 6vw, 3rem);
        font-weight: 500;
        letter-spacing: 0.02em;
        margin: 0;
        color: #FFFFFF;
      }
      .projects-intro {
        max-width: 600px;
        margin: 0 auto 2rem;
        text-align: center;
        color: #B8B0A0;
        font-size: 0.85rem;
        line-height: 1.7;
      }
      .projects-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.75rem;
      }
      .project-card-editorial {
        background: rgba(10, 25, 47, 0.3);
        border: 1px solid rgba(30, 144, 255, 0.12);
        border-radius: 8px;
        overflow: hidden;
        transition: all 0.2s ease;
        text-decoration: none;
        color: inherit;
        display: block;
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
      }
      .project-card-editorial:hover {
        border-color: rgba(30, 144, 255, 0.25);
        background: rgba(10, 25, 47, 0.45);
      }
      .project-card-image-wrap {
        aspect-ratio: 16/9;
        background: rgba(5, 12, 28, 0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border-bottom: 1px solid rgba(30, 144, 255, 0.08);
      }
      .project-card-emoji {
        font-size: 2.5rem;
      }
      .project-card-content {
        padding: 0.875rem;
      }
      .project-card-date {
        font-size: 0.6rem;
        color: rgba(30, 144, 255, 0.8);
        text-transform: uppercase;
        letter-spacing: 0.08em;
        margin-bottom: 0.25rem;
      }
      .project-card-title {
        font-family: 'Playfair Display', serif;
        font-size: 0.9rem;
        color: #FFFFFF;
        margin-bottom: 0.25rem;
        line-height: 1.3;
      }
      .project-card-desc {
        font-size: 0.75rem;
        color: #B8B0A0;
        line-height: 1.5;
        margin-bottom: 0.5rem;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .project-card-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.25rem;
        margin-bottom: 0.75rem;
      }
      .project-card-tag {
        font-size: 0.6rem;
        padding: 0.15rem 0.4rem;
        background: rgba(30, 144, 255, 0.08);
        border: 1px solid rgba(30, 144, 255, 0.15);
        color: rgba(90, 143, 192, 0.9);
        border-radius: 2px;
      }
      .project-card-links {
        display: flex;
        gap: 0.4rem;
      }
      .project-card-btn-link {
        flex: 1;
        padding: 0.4rem;
        font-size: 0.7rem;
        border: 1px solid rgba(30, 144, 255, 0.2);
        background: rgba(30, 144, 255, 0.05);
        color: #FFFFFF;
        border-radius: 4px;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        transition: all 0.2s ease;
      }
      .project-card-btn-link:hover {
        background: rgba(30, 144, 255, 0.12);
        border-color: rgba(30, 144, 255, 0.35);
      }
      .project-card-btn-link.secondary {
        border-color: rgba(100, 100, 100, 0.2);
        background: rgba(100, 100, 100, 0.05);
      }
      .projects-footer {
        text-align: center;
        margin-top: 2rem;
        padding-top: 1rem;
        border-top: 1px solid rgba(30, 144, 255, 0.08);
        font-size: 0.7rem;
        color: #8B8680;
      }
      @media (min-width: 640px) {
        .projects-container { padding: 5.5rem 2rem 3rem; }
        .projects-intro { font-size: 0.9rem; margin-bottom: 2.5rem; }
        .projects-grid { grid-template-columns: repeat(3, 1fr); gap: 1rem; }
        .project-card-title { font-size: 1rem; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      if (style.parentNode) document.head.removeChild(style);
    };
  }, []);

  const projectsData = [
    {
      imageSrc: "/images/projects/friday.png",
      title: "F.R.I.D.A.Y.",
      description: "My agentic second brain OS — local AI, persistent memory, and multi-agent orchestration.",
      tech: ['AI', 'Ollama', 'Obsidian', 'OpenClaw'],
      demoLink: "/projects/friday",
      fullImage: true,
      date: "Apr 2026"
    },
    {
      imageSrc: "/images/corne-keyboard/cornebuild.jpeg",
      title: "Corne Keyboard",
      description: "Custom split ergonomic mechanical keyboard with ZMK firmware and 3D printed case.",
      tech: ['Hardware', 'ZMK', '3D Printing'],
      demoLink: "/projects/corne-keyboard",
      fullImage: true,
      date: "Feb 2026"
    },
    {
      emoji: "📷",
      title: "CRT Interactive Album",
      description: "A nostalgic 3D experience showcasing a 90s-era CRT computer with dynamic slideshow.",
      tech: ['React', 'Three.js', 'Tailwind'],
      codeLink: "https://github.com/michaelpreciado/CRTinteractiveAlbum",
      demoLink: "https://cr-tinteractive-album.vercel.app",
      date: "Jan 2026"
    },
    {
      imageSrc: "/images/projects/planttracker.png",
      title: "Plant Tracker PWA",
      description: "A Progressive Web App for plant care management with smart watering reminders.",
      tech: ['Next.js', 'TypeScript', 'Supabase'],
      codeLink: "https://github.com/michaelpreciado/Planter",
      demoLink: "https://planttracker.netlify.app/",
      date: "Dec 2025"
    },
    {
      imageSrc: "/images/projects/flattenhund.png",
      title: "Flappy Dog Game",
      description: "A charming Flappy Bird-inspired game featuring my dogs with online leaderboard.",
      tech: ['JavaScript', 'Supabase', 'Canvas'],
      codeLink: "https://github.com/michaelpreciado/Flattenhund",
      demoLink: "https://theflappydoggame.netlify.app/",
      date: "Nov 2025"
    },
    {
      imageSrc: "/images/projects/Solar.png",
      title: "Interactive Solar System",
      description: "An immersive 3D solar system simulation with realistic planetary orbits and interactive controls.",
      tech: ['JavaScript', 'WebGL', 'Canvas'],
      codeLink: "https://github.com/michaelpreciado/Interactive_Solar_System",
      demoLink: "https://interactive-solar-system-bay.vercel.app/",
      date: "Oct 2025"
    },
    {
      imageSrc: "/images/projects/photography.png",
      title: "Photography Portfolio",
      description: "A minimalist photography showcase featuring responsive image galleries and optimized loading.",
      tech: ['React', 'JavaScript', 'CSS3'],
      codeLink: "https://github.com/michaelpreciado/mario.preciado.photography",
      demoLink: "https://mariopreciado-photography.netlify.app",
      date: "Sep 2025"
    },
  ];

  const sortedProjects = [...projectsData].sort((a, b) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const [aMonth, aYear] = a.date.split(' ');
    const [bMonth, bYear] = b.date.split(' ');
    const aDate = new Date(parseInt(aYear), months.indexOf(aMonth));
    const bDate = new Date(parseInt(bYear), months.indexOf(bMonth));
    return bDate - aDate;
  });

  return (
    <PageTransition>
      <MatrixRainBackground />
      <ReturnButton to="/" />
      
      <div className="projects-editorial">
        <div className="projects-container">
          <header className="projects-header">
            <div className="projects-meta">
              <span>Work</span>
              <span>Selected</span>
            </div>
            <h1 className="projects-title">Projects</h1>
          </header>

          <p className="projects-intro">
            Welcome to my workshop. Here you'll find a collection of my favorite projects, 
            from web apps to hardware experiments. Each one is a story of a problem solved 
            and something new learned.
          </p>

          <div className="projects-grid">
            {sortedProjects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>

          <footer className="projects-footer">
            <p>AI systems, hardware, and automation</p>
          </footer>
        </div>
      </div>
    </PageTransition>
  );
}

export default Projects;
