import React from 'react';

const SkillButton = ({ icon, text }) => (
  <button className="skill-button">
    {icon && <span>{icon}</span>} 
    {text}
  </button>
);

function Skills() {
  return (
    <section id="skills">
      <div className="skills-container">
        <SkillButton icon="⚙️" text="Tech Enthusiast" />
        <SkillButton icon="</>" text="AI Software Engineer" />
        <SkillButton icon="📊" text="Data Analyst" />
        <SkillButton icon="🤖" text="AI Tools" />
      </div>
    </section>
  );
}

export default Skills; 