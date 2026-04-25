import React from 'react';
import { Link } from 'react-router-dom';
import { featuredProjects } from '../data/projectsData.js';
import LazyImage from './LazyImage.jsx';

const FeaturedProjects = React.memo(() => {
  return (
    <section id="featured-projects" className="featured-projects-section" aria-labelledby="featured-projects-title">
      <div className="featured-projects-shell">
        <p className="featured-projects-kicker">selected build work</p>
        <h2 id="featured-projects-title">Projects that show how I think and ship</h2>
        <p className="featured-projects-intro">
          A focused snapshot of my strongest public work: full-stack apps, 3D interfaces,
          AI workflow experiments, and polished product experiences.
        </p>

        <div className="featured-projects-grid">
          {featuredProjects.map((project) => (
            <article className="featured-project-card" key={project.title}>
              <div className="featured-project-media" aria-hidden="true">
                {project.emoji ? (
                  <span className="featured-project-emoji">{project.emoji}</span>
                ) : (
                  <LazyImage
                    src={project.imageSrc}
                    alt=""
                    style={{ width: '100%', height: '100%', objectFit: project.fullImage ? 'contain' : 'cover' }}
                  />
                )}
              </div>
              <div className="featured-project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="featured-project-impact">{project.impact}</p>
                <div className="featured-project-tags">
                  {project.tech.slice(0, 4).map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="featured-project-actions">
                  {project.demoLink?.startsWith('/') ? (
                    <Link to={project.demoLink}>Case study</Link>
                  ) : project.demoLink ? (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Live demo</a>
                  ) : null}
                  {project.codeLink && (
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Code</a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="featured-projects-footer">
          <Link to="/projects">View all projects</Link>
          <a href="https://github.com/michaelpreciado" target="_blank" rel="noopener noreferrer">GitHub profile</a>
        </div>
      </div>
    </section>
  );
});

FeaturedProjects.displayName = 'FeaturedProjects';

export default FeaturedProjects;
