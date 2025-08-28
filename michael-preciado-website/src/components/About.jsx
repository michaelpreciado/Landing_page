import React from 'react';
import LazyImage from './LazyImage';

function About() {
  return (
    <section id="about">
      <div className="about-image-wrapper">
        <LazyImage 
          src="/images/personal/mirror.jpeg"
          alt="Michael Preciado - Space Needle reflection"
          className="about-image"
          quality="medium"
          maxWidth="800px"
          placeholder={<div style={{ width: '100%', height: '300px', background: 'var(--medium-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📸 Loading image...</div>}
        />
      </div>
      <h2>About Me</h2>
      <p>
        I'm a self-taught developer with extensive knowledge in both backend and frontend technologies, specializing in modern web development and AI integration. Through years of hands-on experience, I've mastered full-stack development, building everything from responsive user interfaces to robust server architectures. I leverage cutting-edge tools to streamline the development process while creating scalable solutions that drive real business value.
      </p>
      <p>
        My expertise spans the entire development lifecycle, including responsive design, API development, database optimization, and implementing AI-powered features that enhance user experiences. With a background in automation systems and productivity enhancement, I offer comprehensive tech consulting services to help businesses transform their digital presence through modern applications that combine proven software engineering principles with innovative capabilities.
      </p>
      {/* Add more paragraphs or details as needed */}
    </section>
  );
}

export default About; 