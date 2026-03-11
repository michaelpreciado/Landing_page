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
        max-width: 700px;
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
        margin-bottom: 0.25rem;
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
      .experience-achievements {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .experience-achievements li {
        font-size: 0.8rem;
        color: #B8B0A0;
        line-height: 1.6;
        margin-bottom: 0.5rem;
        padding-left: 1rem;
        position: relative;
      }
      .experience-achievements li::before {
        content: '▹';
        position: absolute;
        left: 0;
        color: #1E90FF;
      }
      .experience-achievements li strong {
        color: #FFFFFF;
        font-weight: 500;
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
      .cert-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.75rem;
      }
      .cert-card {
        background: rgba(10, 25, 47, 0.4);
        border: 1px solid rgba(30, 144, 255, 0.15);
        border-radius: 8px;
        padding: 1rem;
        backdrop-filter: blur(10px);
        transition: all 0.2s ease;
      }
      .cert-card:hover {
        border-color: rgba(30, 144, 255, 0.3);
      }
      .cert-date {
        font-size: 0.65rem;
        color: #1E90FF;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        margin-bottom: 0.25rem;
        text-shadow: 0 0 10px rgba(30, 144, 255, 0.3);
      }
      .cert-title {
        font-family: 'Playfair Display', serif;
        font-size: 0.9rem;
        color: #FFFFFF;
        margin-bottom: 0.25rem;
      }
      .cert-issuer {
        font-size: 0.75rem;
        color: #B8B0A0;
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
        .skills-grid { grid-template-columns: repeat(2, 1fr); }
        .cert-grid { grid-template-columns: repeat(2, 1fr); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      if (style.parentNode) document.head.removeChild(style);
    };
  }, []);

  const experiences = [
    {
      role: "IT Application Support Technician",
      company: "Tesla – Lathrop, CA",
      date: "May 2021 – Present",
      achievements: [
        "<strong>Industrial Engineering Support:</strong> Assisted in streamlining operations and optimizing systems, leading to a 15% increase in production efficiency.",
        "<strong>Controls Engineering Support:</strong> Troubleshot and maintained automated systems, reducing downtime by 20%.",
        "<strong>Quality Engineering Support:</strong> Ensured software and hardware solutions met high-quality standards, contributing to a 25% decrease in defect rates.",
        "<strong>Process Engineering Support:</strong> Facilitated seamless integration and effective workflow management, enhancing cross-departmental collaboration.",
        "<strong>IT Manufacturing Support:</strong> Provided dedicated IT support to manufacturing operations, ensuring system reliability and efficiency."
      ]
    },
    {
      role: "Active Duty Air Force (Air Transportation Specialist)",
      company: "United States Air Force – Joint Base Pearl-Harbor Hickam / Joint Base Lewis-McChord",
      date: "December 2017 – May 2021",
      achievements: [
        "Managed and coordinated the safe and efficient transportation of personnel and cargo, ensuring compliance with strict military regulations and safety standards.",
        "Operated and maintained specialized equipment, demonstrating proficiency in logistics and supply chain operations.",
        "Trained and supervised junior personnel, fostering teamwork and enhancing operational readiness."
      ]
    }
  ];

  const skills = [
    { category: "Programming & Scripting", items: "Python (Pandas, NumPy, Matplotlib), JavaScript, SQL, HTML, CSS, Bash" },
    { category: "Web Development", items: "React, Next.js, Vite, Tailwind CSS, Responsive Design, Figma, Adobe XD" },
    { category: "AI & Automation", items: "OpenClaw, Ollama, LM Studio, OpenWebUI, Prompt Engineering, Notion, HubSpot" },
    { category: "Systems & Tools", items: "Linux (Ubuntu, Arch), Docker, Git, Cloudflare, Splunk, Zebra Printers" },
    { category: "Hardware", items: "3D Printing (Orca Slicer), Embedded Systems, ZMK Firmware, IoT Devices" },
    { category: "Design", items: "Blender, Figma, Adobe Creative Suite, UI/UX Design" }
  ];

  const certificates = [
    { title: "Intro to AI Agents Course", issuer: "Codecademy", date: "Nov 2025" },
    { title: "Intro to Vibe Coding Course", issuer: "Codecademy", date: "Nov 2025" },
    { title: "AI Prompt Engineering", issuer: "Chegg Inc.", date: "Apr 2025" },
    { title: "Introduction to Artificial Intelligence (AI)", issuer: "IBM", date: "Mar 2025", credential: "WXJ5EWMDBQR" }
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
            Self-taught software developer and IT specialist who keeps systems fast, stable, and easy to use. 
            Strong in troubleshooting, device support, and cutting downtime with repeatable fixes. 
            Comfortable across Python, JavaScript, Linux, Docker, Git, and modern web tools. 
            Actively building AI-powered workflows to automate tasks and surface insights.
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
                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: achievement }} />
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="resume-section">
            <h2 className="resume-section-title">Technical Skills</h2>
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
            <h2 className="resume-section-title">Certificates & Courses</h2>
            <div className="cert-grid">
              {certificates.map((cert, index) => (
                <div key={index} className="cert-card">
                  <div className="cert-date">{cert.date}</div>
                  <h3 className="cert-title">{cert.title}</h3>
                  <div className="cert-issuer">{cert.issuer}</div>
                </div>
              ))}
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
