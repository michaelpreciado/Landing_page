import React from 'react';
// Import icons to use as placeholders
import { FaCode, FaProjectDiagram, FaCamera, FaGlobeAmericas, FaTv } from 'react-icons/fa'; 

// Use CSS classes instead of inline styles
const ProjectCard = ({ iconPlaceholder, imageSrc, title, description, tech, codeLink, demoLink }) => (
  <div className="project-card">
    {/* Render image if provided, otherwise use icon placeholder */}
    {imageSrc ? (
      <div className="project-image-container">
        <img src={imageSrc} alt={title} className="project-image" />
      </div>
    ) : (
      <div className="project-icon-placeholder">
        {iconPlaceholder} 
      </div>
    )}
    <div className="project-card-content">
      <h3>{title}</h3>
      <p>{description}</p>
      {tech && tech.length > 0 && ( // Conditionally render tech tags section
        <div className="project-tech-tags">
          {tech.map((t, i) => (
            <span key={i} className="tech-tag">{t}</span>
          ))}
        </div>
      )}
      <div className="project-links">
        {/* Primary Button: Live Demo (if available) */}
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <button className="project-button project-button-primary">Live Demo</button>
          </a>
        )}
        {/* Secondary Button: View Code */}
        {codeLink && (
          <a href={codeLink} target="_blank" rel="noopener noreferrer">
            <button className="project-button project-button-secondary">View Code</button>
          </a>
        )}
      </div>
    </div>
  </div>
);

function Projects() {
  return (
    <section id="projects">
      {/* Group header elements */}
      <div className="projects-header"> 
        <h2>My Projects</h2>
        {/* Removed inline style from <p> - style in CSS if needed */}
        <p>A collection of my recent work</p> 
      </div>

      {/* Wrap cards in the container */}
      <div className="projects-container">
        <ProjectCard 
          imageSrc="/images/photography.png" // Use the actual photography image
          title="Photography Portfolio"
          description="Minimalist photography showcase with responsive image gallery and smooth transitions."
          codeLink="https://github.com/michaelpreciado/mario.preciado.photography" // Updated code link
          demoLink="https://mariopreciado-photography.netlify.app" // Updated demo link
        />

        <ProjectCard 
          imageSrc="/images/Solar.png" // Use the actual Solar System image
          title="Interactive Solar System"
          description="An interactive 3D model of the solar system built with JavaScript."
          tech={['JavaScript', 'HTML', 'CSS']}
          codeLink="https://github.com/michaelpreciado/Interactive_Solar_System" // Updated code link
          demoLink="https://michaelpreciado.github.io/Interactive_Solar_System/" // Updated demo link
        />

        <ProjectCard 
          imageSrc="/images/flattenhund.png" // Use the actual Flappy Dog Game image
          title="Flappy Dog Game"
          description="A playful Flappy-Bird-style game starring my dogs Taz & Chloe, featuring an online leaderboard powered by Supabase."
          tech={['JavaScript', 'HTML', 'CSS']} // Based on GitHub repo
          codeLink="https://github.com/michaelpreciado/Flattenhund" 
          demoLink="https://flatterhund.netlify.app/" 
        />

        <ProjectCard 
          imageSrc="/images/friday.png" // Use the actual Friday AI Assistant image
          title="Friday"
          description="A personal AI assistant application leveraging OpenAI."
          tech={['Python', 'Flask', 'TypeScript']} // Updated tech stack
          codeLink="https://github.com/michaelpreciado/F.R.I.D.A.Y"
          demoLink="https://michaelpreciado.github.io/F.R.I.D.A.Y/"
        />

        <ProjectCard 
          imageSrc="/images/planttracker.png" // Use the actual Plant Tracker image
          title="Plant Tracker"
          description="Offline-first Next.js PWA that tracks plant care, sends smart watering reminders, stores photos, and syncs via Supabase."
          tech={['Next.js', 'TypeScript', 'Tailwind', 'Supabase']}
          codeLink="https://github.com/michaelpreciado/Planter"
          demoLink="https://planttracker.netlify.app/"
        />

        <ProjectCard 
          iconPlaceholder={<FaTv size={48} />}
          title="CRT Archive"
          description="A digital preservation project featuring authentic CRT monitor effects, retro computing aesthetics, and nostalgic interface elements."
          tech={['React', 'CSS', 'JavaScript', 'WebGL']}
          codeLink="https://github.com/michaelpreciado/CRT-Archive"
          demoLink="https://crt-archive.netlify.app/"
        />
      </div>
    </section>
  );
}

export default Projects; 