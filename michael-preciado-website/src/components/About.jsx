import React from 'react';

function About() {
  return (
    <section id="about">
      {/* Update image source and add class */}
      <img 
        src="/images/jump.jpeg"
        alt="Michael Preciado jumping"
        className="about-image"
        style={{
          // Remove inline styles, they are now in index.css via .about-image
          // width: '100%', 
          // maxWidth: '500px', 
          // height: 'auto',
          // display: 'block',
          // margin: '0 auto 40px auto', 
          // borderRadius: '8px'
        }}
      />
      <h2>About Me</h2>
      <p>
        I'm an IT expert with extensive knowledge in software engineering and modern AI technologies specializing in web development. I leverage cutting-edge tools to streamline the development process while building robust, scalable solutions. My expertise includes full-stack development, responsive design, and implementing AI-powered features that enhance user experiences. With a background in automation systems and productivity enhancement, I help clients transform their digital presence through modern web applications that combine traditional software engineering principles with innovative capabilities.
      </p>
      {/* Add more paragraphs or details as needed */}
    </section>
  );
}

export default About; 