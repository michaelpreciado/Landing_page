import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useTypewriter from '../hooks/useTypewriter'; // Import the hook
import LazyImage from './LazyImage';
// Import icons to use as placeholders
import { FaCode, FaProjectDiagram, FaCamera, FaGlobeAmericas, FaTv } from 'react-icons/fa'; 

// --- Reusable IntroCard Component ---
const IntroCard = () => (
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
);

// --- Updated ProjectCard Component ---
const ProjectCard = ({ imageSrc, title, description, tech, codeLink, demoLink, index, fullImage = false }) => {
  const [isMounted, setIsMounted] = useState(false);

  // Fallback animation trigger to ensure cards always show
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100 + (index * 100)); // Staggered delay

    return () => clearTimeout(timer);
  }, [index]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1, // Stagger animation
      },
    },
    fallback: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      },
    },
  };

  return (
    <motion.div
      className="blog-post-card" // Using the new, more generic card style
      variants={cardVariants}
      initial="hidden"
      animate={isMounted ? "fallback" : "hidden"} // Fallback animation
      whileInView="visible"
      viewport={{ once: false, amount: 0.1, margin: "0px 0px -50px 0px" }} // Allow re-triggering and better detection
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      {imageSrc && (
        <div className="project-image-container">
          <LazyImage 
            src={imageSrc} 
            alt={`${title} project screenshot`} 
            className="thumbnail"
            quality="medium"
            maxWidth={fullImage ? "100%" : "600px"}
            objectFit={fullImage ? "contain" : "cover"}
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
};

// --- Main Projects Component ---
function Projects() {
  const [isComponentReady, setIsComponentReady] = useState(false);
  const typedTitle = useTypewriter("My Projects", { speed: 30, scrambleOnMount: true, scrambleDuration: 1500 });
  const typedSubtitle = useTypewriter("A collection of my recent work", { speed: 20, scrambleOnMount: true, scrambleDuration: 2000 });

  // Ensure component is ready to render
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComponentReady(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  const projectsData = [
    {
      imageSrc: "/images/corne-keyboard/cornebuild.jpeg",
      title: "Corne Keyboard Build",
      description: "Custom split ergonomic mechanical keyboard build featuring the Corne layout and ZMK firmware.",
      tech: ["Hardware", "ZMK", "3D Printing"],
      demoLink: "/projects/corne-keyboard",
      fullImage: true
    },
    {
      imageSrc: "/images/projects/photography.png",
      title: "Photography Portfolio",
      description: "Minimalist photography showcase with responsive image gallery and smooth transitions.",
      codeLink: "https://github.com/michaelpreciado/mario.preciado.photography",
      demoLink: "https://mariopreciado-photography.netlify.app"
    },
    {
      imageSrc: "/images/projects/Solar.png",
      title: "Interactive Solar System",
      description: "An interactive 3D model of the solar system built with JavaScript.",
      tech: ['JavaScript', 'HTML', 'CSS'],
      codeLink: "https://github.com/michaelpreciado/Interactive_Solar_System",
      demoLink: "https://interactive-solar-system-bay.vercel.app/"
    },
    {
      imageSrc: "/images/projects/flattenhund.png",
      title: "Flappy Dog Game",
      description: "A playful Flappy-Bird-style game starring my dogs Taz & Chloe, featuring an online leaderboard powered by Supabase.",
      tech: ['JavaScript', 'HTML', 'CSS'],
      codeLink: "https://github.com/michaelpreciado/Flattenhund",
      demoLink: "https://flatterhund.netlify.app/"
    },
    {
      imageSrc: "/images/projects/friday.png",
      title: "Friday",
      description: "A personal AI assistant application leveraging OpenAI.",
      tech: ['Python', 'Flask', 'TypeScript'],
      codeLink: "https://github.com/michaelpreciado/F.R.I.D.A.Y",
      demoLink: "https://michaelpreciado.github.io/F.R.I.D.A.Y/"
    },
    {
      imageSrc: "/images/projects/planttracker.png",
      title: "Plant Tracker",
      description: "Offline-first Next.js PWA that tracks plant care, sends smart watering reminders, stores photos, and syncs via Supabase.",
      tech: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase'],
      codeLink: "https://github.com/michaelpreciado/Planter",
      demoLink: "https://planttracker.netlify.app/"
    },
    {
      imageSrc: "/images/projects/pcbuild.jpeg",
      title: "CRT Interactive Album",
      description: "A visually stunning 3D scene showcasing a 90s era CRT computer with dynamic slideshow, atmospheric effects, and glass-morphism cards. Built with React Three Fiber.",
      tech: ['React', 'TypeScript', 'Three.js', 'Tailwind CSS', 'Framer Motion'],
      codeLink: "https://github.com/michaelpreciado/CRTinteractiveAlbum",
      demoLink: "https://crtarchve.netlify.app"
    },
    {
      imageSrc: "/images/projects/pupcam.png",
      title: "PupCam Mood Reader",
      description: "AI-powered PWA that analyzes your dog's mood in real-time using TensorFlow.js dog detection and GPT-4o vision analysis.",
      tech: ['JavaScript', 'TailwindCSS', 'TensorFlow.js', 'OpenAI', 'PWA'],
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

      {isComponentReady && (
        <div className="blogs-grid"> {/* Reusing the responsive grid from the blog page */}
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects; 