import React from 'react';
// Import icons to use as placeholders
import { FaCode, FaProjectDiagram, FaCamera, FaGlobeAmericas } from 'react-icons/fa'; 

// Use CSS classes instead of inline styles
const ProjectCard = ({ iconPlaceholder, title, description, tech, codeLink, demoLink }) => (
  <div className="project-card">
    {/* Render icon placeholder div instead of img */}
    <div className="project-icon-placeholder">
      {iconPlaceholder} 
    </div>
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
      <div> 
        <h2>My Projects</h2>
        {/* Removed inline style from <p> - style in CSS if needed */}
        <p>A collection of my recent work</p> 
      </div>

      {/* Wrap cards in the container */}
      <div className="projects-container">
        <ProjectCard 
          // imageSrc="/placeholder-photography.png" // Replaced with icon placeholder
          iconPlaceholder={<FaCamera />} // Use FaCamera icon
          title="Photography Portfolio"
          description="Minimalist photography showcase with responsive image gallery and smooth transitions."
          codeLink="https://github.com/michaelpreciado/mario.preciado.photography" // Updated code link
          demoLink="https://mariopreciado-photography.netlify.app" // Updated demo link
        />

        <ProjectCard 
          // imageSrc="/placeholder-ar.png" // Replaced with icon placeholder
          iconPlaceholder={<FaGlobeAmericas />} // Use FaGlobeAmericas icon
          title="Interactive Solar System"
          description="An interactive 3D model of the solar system built with JavaScript."
          tech={['JavaScript', 'HTML', 'CSS']}
          codeLink="https://github.com/michaelpreciado/Interactive_Solar_System" // Updated code link
          demoLink="https://michaelpreciado.github.io/Interactive_Solar_System/" // Updated demo link
        />
      </div>
    </section>
  );
}

export default Projects; 