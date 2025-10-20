import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useTypewriter from '../hooks/useTypewriter'; // Import the hook
import LazyImage from './LazyImage';
// Import icons to use as placeholders
import { FaCode, FaProjectDiagram, FaCamera, FaGlobeAmericas, FaTv } from 'react-icons/fa'; 

// --- Reusable IntroCard Component ---
const IntroCard = React.memo(() => (
  <motion.div
    className="blog-intro-card" // Reusing the same style from the blog page
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <div className="blog-intro-text">
      <p>
        Welcome to my workshop. Here you'll find a collection of my favorite projects, from web apps to hardware experiments. Each one is a story of a problem solved and something new learned.
      </p>
      <p>
        Dive in and see what I've been building.
      </p>
    </div>
    <div className="blog-image-placeholder">
      🛠️
    </div>
  </motion.div>
));

// --- Updated ProjectCard Component ---
const ProjectCard = React.memo(({ imageSrc, title, description, tech, codeLink, demoLink, index, fullImage = false }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.08, // Reduced stagger for faster appearance
        ease: "easeOut"
      },
    },
  };

  return (
    <motion.div
      className="blog-post-card" // Using the new, more generic card style
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      style={{ willChange: 'transform, opacity' }}
    >
      {imageSrc && (
        <div className="project-image-container" style={{ overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <LazyImage 
            src={imageSrc} 
            alt={`${title} project screenshot`} 
            className="thumbnail"
            quality="medium"
            priority={index < 2}
            fetchPriority={index < 2 ? 'high' : 'auto'}
            fill={true}
            objectFit={fullImage ? 'contain' : 'cover'}
            style={{ 
              width: '100%', 
              height: '100%'
            }}
            placeholder={<div style={{ width: '100%', height: '200px', background: 'var(--medium-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>🚀</div>}
          />
        </div>
      )}
      <div className="blog-post-card-content">
        <h3>{title}</h3>
        <p className="teaser">{description}</p>
        
        <div className="project-tech-tags" style={{ marginBottom: '1.5rem', flexGrow: 0 }}>
          {tech && tech.map((t, i) => (
            <span key={i} className="tech-tag">{t}</span>
          ))}
        </div>

        <div className="project-links">
          {demoLink && (
            <a href={demoLink}>
              <button className="project-button project-button-primary">View Project</button>
            </a>
          )}
          {codeLink && (
            <a href={codeLink}>
              <button className="project-button project-button-secondary">View Code</button>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
});

// --- Main Projects Component ---
function Projects() {
  const typedTitle = useTypewriter("My Projects", { speed: 30, scrambleOnMount: true, scrambleDuration: 800 });
  const typedSubtitle = useTypewriter("A collection of my recent work", { speed: 20, scrambleOnMount: true, scrambleDuration: 1000 });

  const projectsData = [
    {
      imageSrc: "/images/Server/IMG_1039.jpeg",
      title: "Local AI & Storage Server (FRIDAY)",
      description: "A complete self-hosted AI infrastructure built from the ground up. Features Ubuntu server setup, GPU acceleration, Ollama/LM Studio integration, Open WebUI interface, Cloudflare tunneling, and Samba file sharing. Includes detailed troubleshooting documentation and performance monitoring.",
      tech: ['Ubuntu', 'Ollama', 'Open WebUI', 'Cloudflare Tunnel', 'Samba', 'Python', 'GPU Acceleration', 'Systemd'],
      demoLink: "/projects/ai-server"
    },
    {
      imageSrc: "/images/corne-keyboard/cornebuild.jpeg",
      title: "Corne Keyboard Build",
      description: "Custom split ergonomic mechanical keyboard featuring the Corne layout with ZMK firmware. Built from scratch with 3D printed case, hand-wired switches, and fully programmable layers. Designed for ergonomic typing and complete customization.",
      tech: ["Hardware", "ZMK", "3D Printing", "Soldering", "Ergonomics", "QMK"],
      demoLink: "/projects/corne-keyboard",
      fullImage: true
    },
    {
      imageSrc: "/images/projects/photography.png",
      title: "Photography Portfolio",
      description: "A minimalist photography showcase featuring responsive image galleries, smooth transitions, and optimized loading. Built with modern web technologies for fast, beautiful presentation of visual work.",
      tech: ['React', 'JavaScript', 'CSS3', 'Responsive Design', 'Image Optimization'],
      codeLink: "https://github.com/michaelpreciado/mario.preciado.photography",
      demoLink: "https://mariopreciado-photography.netlify.app"
    },
    {
      imageSrc: "/images/projects/Solar.png",
      title: "Interactive Solar System",
      description: "An immersive 3D solar system simulation with realistic planetary orbits, interactive controls, and educational content. Built with vanilla JavaScript and WebGL for smooth performance across devices.",
      tech: ['JavaScript', 'WebGL', 'HTML5 Canvas', 'CSS3', '3D Graphics'],
      codeLink: "https://github.com/michaelpreciado/Interactive_Solar_System",
      demoLink: "https://interactive-solar-system-bay.vercel.app/"
    },
    {
      imageSrc: "/images/projects/flattenhund.png",
      title: "Flappy Dog Game",
      description: "A charming Flappy Bird-inspired game featuring my dogs Taz & Chloe as the main characters. Includes online leaderboard powered by Supabase, progressive difficulty, and adorable pixel art animations.",
      tech: ['JavaScript', 'Supabase', 'HTML5 Canvas', 'CSS3', 'Game Development'],
      codeLink: "https://github.com/michaelpreciado/Flattenhund",
      demoLink: "https://theflappydoggame.netlify.app/"
    },
    {
      imageSrc: "/images/projects/friday.png",
      title: "Friday AI Assistant",
      description: "A personal AI assistant web application leveraging OpenAI's GPT models. Features conversational interface, context awareness, and seamless integration with modern web technologies for natural AI interactions.",
      tech: ['Python', 'Flask', 'TypeScript', 'OpenAI API', 'REST API'],
      codeLink: "https://github.com/michaelpreciado/F.R.I.D.A.Y",
      demoLink: "https://michaelpreciado.github.io/F.R.I.D.A.Y/"
    },
    {
      imageSrc: "/images/projects/planttracker.png",
      title: "Plant Tracker PWA",
      description: "An offline-first Progressive Web App for plant care management. Features smart watering reminders, photo storage, growth tracking, and seamless sync via Supabase. Works completely offline with background sync.",
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PWA', 'Offline-First'],
      codeLink: "https://github.com/michaelpreciado/Planter",
      demoLink: "https://planttracker.netlify.app/"
    },
    {
      imageSrc: "/images/projects/pcbuild.jpeg",
      title: "CRT Interactive Album",
      description: "A nostalgic 3D experience showcasing a 90s-era CRT computer with dynamic slideshow capabilities. Features atmospheric lighting, glass-morphism effects, and smooth animations built with React Three Fiber for immersive retro computing vibes.",
      tech: ['React', 'TypeScript', 'Three.js', 'React Three Fiber', 'Tailwind CSS', 'Framer Motion'],
      codeLink: "https://github.com/michaelpreciado/CRTinteractiveAlbum",
      demoLink: "https://crtarchve.netlify.app"
    },
    {
      imageSrc: "/images/projects/pupcam.png",
      title: "PupCam Mood Reader",
      description: "An AI-powered Progressive Web App that analyzes your dog's mood in real-time using computer vision. Combines TensorFlow.js for dog detection with GPT-4o vision analysis to provide insights into your pet's emotional state.",
      tech: ['JavaScript', 'TensorFlow.js', 'OpenAI GPT-4o', 'PWA', 'Computer Vision', 'Machine Learning'],
      codeLink: "https://github.com/michaelpreciado/PupCam",
      demoLink: "https://pup-cam.vercel.app"
    }
  ];

  return (
    <section id="projects" style={{ paddingTop: '8rem' }}>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ fontFamily: 'var(--font-pixel)', fontSize: '2rem', textAlign: 'center', marginBottom: '0.5rem' }}
      >
        {typedTitle}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{ textAlign: 'center', color: 'var(--medium-text)', marginBottom: '3rem' }}
      >
        {typedSubtitle}
      </motion.p>

      <IntroCard />

      <div 
        className="blogs-grid" 
        style={{ contentVisibility: 'auto', containIntrinsicSize: '1200px 800px' }}
      > {/* Reusing the responsive grid from the blog page */}
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Projects; 