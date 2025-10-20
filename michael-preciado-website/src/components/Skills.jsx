import React from 'react';
import { FaCog, FaLaptopCode, FaChartBar, FaRobot } from 'react-icons/fa';

const SkillButton = React.memo(({ icon, text }) => (
  <button className="skill-button">
    {icon && <span aria-hidden="true">{icon}</span>}
    {text}
  </button>
));

SkillButton.displayName = 'SkillButton';

const Skills = React.memo(() => {
  return (
    <section id="skills">
      <div className="skills-container">
        <SkillButton icon={<FaCog />} text="Tech Enthusiast" />
        <SkillButton icon={<FaLaptopCode />} text="Software Developer" />
        <SkillButton icon={<FaChartBar />} text="Data Analyst" />
        <SkillButton icon={<FaRobot />} text="AI Tools" />
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';

export default Skills;
