import React, { useEffect } from 'react';
import MatrixRainBackground from './MatrixRainBackground';
import PageTransition from './PageTransition.jsx';
import ReturnButton from './ReturnButton.jsx';
import useTypewriter from '../utils/hooks/useTypewriter';
import { autoApplyLiquidGlass } from '../utils/liquidGlass.js';

function Resume() {
  const typedTitle = useTypewriter('EXPERIENCE', { speed: 40, scrambleOnMount: true });

  useEffect(() => {
    autoApplyLiquidGlass();
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500&display=swap');
      
      .resume-editorial {
        min-height: 100vh;
        position: relative;
        color: #E8E4DC;
        font-family: 'Inter', sans-serif;
        font-weight: 300;
        line-height: 1.6;
      }
      .resume-container {
        max-width: 900px;
        margin: 0 auto;
        padding: 2rem 1.25rem 3rem;
        position: relative;
        z-index: 1;
      }
      .resume-header {
        text-align: center;
        margin-bottom: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid rgba(30, 144, 255, 0.2);
        box-shadow: 0 1px 0 rgba(30, 144, 255, 0.1);
      }
      .resume-meta {
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
      .resume-meta span {
        position: relative;
      }
      .resume-meta span:not(:last-child)::after {
        content: '·';
        position: absolute;
        right: -0.75rem;
        color: rgba(30, 144, 255, 0.4);
      }
      .resume-title {
        font-family: 'Playfair Display', serif;
        font-size: clamp(2rem, 6vw, 3rem);
        font-weight: 500;
        letter-spacing: 0.02em;
        margin: 0;
        color: #FFFFFF;
        text-shadow: 0 0 20px rgba(30, 144, 255, 0.3);
      }
      .resume-intro {
        max-width: 600px;
        margin: 0 auto 2rem;
        text-align: center;
        color: #B8B0A0;
        font-size: 0.85rem;
        line-height: 1.7;
      }
      .resume-section {
        margin-bottom: 2.5rem;
      }
      .resume-section-title {
        font-family: 'Playfair Display', serif;
        font-size: 1.1rem;
        color: #FFFFFF;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid rgba(30, 144, 255, 0.2);
        text-shadow: 0 0 15px rgba(30, 144, 255, 0.2);
      }
      .experience-card {
        background: rgba(10, 25, 47, 0.4);
        border: 1px solid rgba(30, 144, 255, 0.15);
        border-radius: 8px;
        padding: 1.25rem;
        margin-bottom: 1rem;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        transition: all 0.2s ease;
      }
      .experience-card:hover {
        border-color: rgba(30, 144, 255, 0.35);
        background: rgba(10, 25, 47, 0.6);
        box-shadow: 
          0 0 20px rgba(30, 144, 255, 0.15),
          inset 0 0 20px rgba(30, 144, 255, 0.05);
      }
      .experience-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 0.5rem;
        flex-wrap: wrap;
        gap: 0.5rem;
      }
      .experience-role {
        font-family: 'Playfair Display', serif;
        font-size: 1rem;
        color: #FFFFFF;
        margin: 0;
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
      }
      .experience-date {
        font-size: 0.7rem;
        color: #1E90FF;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        text-shadow: 0 0 10px rgba(30, 144, 255, 0.3);
      }
      .experience-company {
        font-size: 0.85rem;
        color: #B8B0A0;
        margin-bottom: 0.75rem;
      }
      .experience-desc {
        font-size: 0.8rem;
        color: #B8B0A0;
        line-height: 1.6;
        margin-bottom: 0.75rem;
      }
      .experience-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.3rem;
      }
      .experience-tag {
        font-size: 0.6rem;
        padding: 0.2rem 0.5rem;
        background: rgba(30, 144, 255, 0.1);
        border: 1px solid rgba(30, 144, 255, 0.2);
        color: #5A8FC0;
        border-radius: 2px;
        backdrop-filter: blur(5px);
      }
      .skills-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.75rem;
      }
      .skill-category {
        background: rgba(10, 25, 47, 0.4);
        border: 1px solid rgba(30, 144, 255, 0.15);
        border-radius: 8px;
        padding: 1rem;
        backdrop-filter: blur(10px);
      }
      .skill-category-title {
        font-family: 'Playfair Display', serif;
        font-size: 0.85rem;
        color: #FFFFFF;
        margin-bottom: 0.5rem;
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
      }
      .skill-list {
        font-size: 0.75rem;
        color: #B8B0A0;
        line-height: 1.6;
      }
      .education-card {
        background: rgba(10, 25, 47, 0.4);
        border: 1px solid rgba(30, 144, 255, 0.15);
        border-radius: 8px;
        padding: 1.25rem;
        backdrop-filter: blur(10px);
      }
      .education-degree {
        font-family: 'Playfair Display', serif;
        font-size: 1rem;
        color: #FFFFFF;
        margin: 0 0 0.25rem;
      }
      .education-school {
        font-size: 0.85rem;
        color: #B8B0A0;
        margin-bottom: 0.25rem;
      }
      .education-date {
        font-size: 0.7rem;
        color: #1E90FF;
        text-shadow: 0 0 10px rgba(30, 144, 255, 0.3);
      }
      .resume-footer {
        text-align: center;
        margin-top: 2rem;
        padding-top: 1rem;
        border-top: 1px solid rgba(30, 144, 255, 0.1);
        font-size: 0.7rem;
        color: #8B8680;
      }
      .resume-download {
        display: inline-block;
        margin-top: 1rem;
        padding: 0.6rem 1.2rem;
        background: rgba(30, 144, 255, 0.1);
        border: 1px solid rgba(30, 144, 255, 0.3);
        color: #FFFFFF;
        text-decoration: none;
        border-radius: 4px;
        font-size: 0.8rem;
        transition: all 0.2s ease;
        backdrop-filter: blur(5px);
      }
      .resume-download:hover {
        background: rgba(30, 144, 255, 0.2);
        border-color: rgba(30, 144, 255, 0.5);
        box-shadow: 0 0 15px rgba(30, 144, 255, 0.2);
      }
      @media (min-width: 640px) {
        .resume-container { padding: 2.5rem 2rem 3rem; }
        .resume-intro { font-size: 0.9rem; }
        .skills-grid { grid-template-columns: repeat(3, 1fr); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      if (style.parentNode) document.head.removeChild(style);
    };
  }, []);

  const experiences = [
    {
      role: "AI Systems Engineer",
      company: "Preciado Tech",
      date: "2024 - Present",
      description: "Building FRIDAY, a unified AI operating system with local inference, sub-agent orchestration, and persistent memory. Architecting multi-model routing systems and autonomous research workflows.",
      tags: ['OpenClaw', 'LLMs', 'System Design', 'Automation']
    },
    {
      role: "Software Engineer",
      company: "Robotics & Vehicle Tech Company",
      date: "2022 - 2024",
      description: "Developed embedded systems and automation tools for vehicle technology. Implemented real-time data processing pipelines and contributed to safety-critical software architecture.",
      tags: ['Embedded', 'C++', 'Python', 'RTOS']
    },
    {
      role: "Full Stack Developer",
      company: "Freelance & Contract",
      date: "2020 - 2022",
      description: "Built responsive web applications and interactive experiences for clients. Specialized in React, Three.js, and modern JavaScript frameworks.",
      tags: ['React', 'Node.js', 'Three.js', 'TypeScript']
    }
  ];

  const skills = [
    { category: "Languages", items: "Python, JavaScript, TypeScript, C++, SQL" },
    { category: "Frontend", items: "React, Next.js, Three.js, Tailwind CSS" },
    { category: "Backend", items: "Node.js, Express, PostgreSQL, Supabase" },
    { category: "AI/ML", items: "OpenClaw, Ollama, LLM Routing, Prompt Engineering" },
    { category: "DevOps", items: "Docker, Linux, Git, CI/CD" },
    { category: "Hardware", items: "3D Printing, Embedded Systems, ZMK Firmware" }
  ];

  return (
    <PageTransition>
      <MatrixRainBackground />
      <ReturnButton to="/" />
      
      <div className="resume-editorial">
        <div className="resume-container">
          <header className="resume-header">
            <div className="resume-meta">
              <span>Resume</span>
              <span>CV</span>
            </div>
            <h1 className="resume-title">{typedTitle}</h1>
          </header>

          <p className="resume-intro">
            Software engineer specializing in AI systems, automation, and human-computer interaction. 
            Currently building the future of personal AI at Preciado Tech.
          </p>

          <section className="resume-section">
            <h2 className="resume-section-title">Work Experience</h2>
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="experience-header">
                  <h3 className="experience-role">{exp.role}</h3>
                  <span className="experience-date">{exp.date}</span>
                </div>
                <div className="experience-company">{exp.company}</div>
                <p className="experience-desc">{exp.description}</p>
                <div className="experience-tags">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="experience-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className="resume-section">
            <h2 className="resume-section-title">Skills</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-category">
                  <h3 className="skill-category-title">{skill.category}</h3>
                  <p className="skill-list">{skill.items}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="resume-section">
            <h2 className="resume-section-title">Education</h2>
            <div className="education-card">
              <h3 className="education-degree">BS Computer Science</h3>
              <div className="education-school">Wilmington University</div>
              <div className="education-date">2020 - 2024</div>
            </div>
          </section>

          <footer className="resume-footer">
            <p>Available for consulting and collaboration</p>
            <a href="/resume.pdf" className="resume-download" target="_blank">Download PDF</a>
          </footer>
        </div>
      </div>
    </PageTransition>
  );
}

export default Resume;
