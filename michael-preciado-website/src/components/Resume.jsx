import React from 'react';
import PageHeader from './PageHeader';

/**
 * Resume page with terminal-style theme
 */
function Resume() {
  return (
    <div className="page-container">
      <PageHeader 
        title="Work Experience" 
        subtitle="Professional Background & Technical Skills"
      />
      
      <section className="resume-section">
        <div className="terminal-container resume-terminal">
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span className="terminal-button red"></span>
              <span className="terminal-button yellow"></span>
              <span className="terminal-button green"></span>
            </div>
            <span className="terminal-title">resume@michael:~</span>
          </div>
          
          <div className="terminal-content resume-content">
            {/* Professional Summary */}
            <div className="resume-block">
              <h2 className="resume-heading">
                <span className="terminal-prompt">&gt;</span> Professional Summary
              </h2>
              <p className="resume-text">
                Self-taught software developer and IT specialist who keeps critical systems reliable and builds 
                practical tools that remove friction. Experienced triaging application and device issues, 
                stabilizing label-printer fleets (Zebra), and standardizing fixes to cut downtime. Comfortable 
                across Python, JavaScript, Linux (Ubuntu/Arch), Docker, Git, Tableau/Splunk, and modern web 
                fundamentals. Recently focused on integrating AI into everyday workflows (Ollama/OpenAI with 
                Notion/HubSpot) to automate follow-ups, generate clear documentation, and surface actionable 
                insights. Known for fast root-cause analysis, clear communication, and shipping small, 
                dependable solutions that make teams measurably more effective.
              </p>
            </div>

            {/* Technical Skills */}
            <div className="resume-block">
              <h2 className="resume-heading">
                <span className="terminal-prompt">&gt;</span> Technical Skills
              </h2>
              <div className="skills-grid">
                <div className="skill-item">
                  <span className="skill-label">Programming & Scripting:</span>
                  <span className="skill-value">Python, JavaScript, SQL, HTML, CSS, Bash</span>
                </div>
                <div className="skill-item">
                  <span className="skill-label">Data Analysis & Visualization:</span>
                  <span className="skill-value">Python data libraries (Pandas, NumPy, Matplotlib); Tableau for data tracking and visualization</span>
                </div>
                <div className="skill-item">
                  <span className="skill-label">Web Development & Design:</span>
                  <span className="skill-value">Responsive design using HTML/CSS/JavaScript; familiar with React, Vite, Figma, and Adobe XD</span>
                </div>
                <div className="skill-item">
                  <span className="skill-label">Artificial Intelligence:</span>
                  <span className="skill-value">Working knowledge of AI tools and frameworks. Hands-on experience running local models with Ollama, LM Studio, and OpenWebUI. Skilled in prompt engineering and connecting AI workflows with Notion, HubSpot, and APIs for automation</span>
                </div>
                <div className="skill-item">
                  <span className="skill-label">Automation & Systems:</span>
                  <span className="skill-value">Experienced with Linux environments (Ubuntu, Arch), Docker containers, Cloudflare tunnels, and system automation using shell scripts and systemd. Familiar with NAS setups and local server management</span>
                </div>
                <div className="skill-item">
                  <span className="skill-label">Software & Tools:</span>
                  <span className="skill-value">VS Code, Git, Notion, HubSpot, Tableau, Figma, Blender, Ultimaker Cura, Splunk dashboards. Experience with in-house factory systems and Zebra printer troubleshooting</span>
                </div>
                <div className="skill-item">
                  <span className="skill-label">Hardware & IT Systems:</span>
                  <span className="skill-value">Technical support background with experience in database management, system monitoring, and preventive maintenance software. Skilled in process improvement and troubleshooting across production environments</span>
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="resume-block">
              <h2 className="resume-heading">
                <span className="terminal-prompt">&gt;</span> Professional Experience
              </h2>

              {/* Tesla - IT Application Support */}
              <div className="job-entry">
                <div className="job-header">
                  <span className="job-meta">May 2023 – Present</span>
                  <h3 className="job-title">IT Application Support Technician</h3>
                  <span className="job-location">Tesla – Lathrop, CA</span>
                </div>
                <ul className="job-responsibilities">
                  <li>
                    <span className="bullet-point">▹</span>
                    <strong>Industrial Engineering Support:</strong> Assisted in streamlining operations and 
                    optimizing systems, leading to a 15% increase in production efficiency.
                  </li>
                  <li>
                    <span className="bullet-point">▹</span>
                    <strong>Controls Engineering Support:</strong> Troubleshot and maintained automated systems, 
                    reducing downtime by 20%.
                  </li>
                  <li>
                    <span className="bullet-point">▹</span>
                    <strong>Quality Engineering Support:</strong> Ensured software and hardware solutions met 
                    high-quality standards, contributing to a 25% decrease in defect rates.
                  </li>
                  <li>
                    <span className="bullet-point">▹</span>
                    <strong>Process Engineering Support:</strong> Facilitated seamless integration and effective 
                    workflow management, enhancing cross-departmental collaboration.
                  </li>
                  <li>
                    <span className="bullet-point">▹</span>
                    <strong>IT Manufacturing Support:</strong> Provided dedicated IT support to manufacturing 
                    operations, ensuring system reliability and efficiency.
                  </li>
                </ul>
              </div>

              {/* Tesla - Data Operations Support */}
              <div className="job-entry">
                <div className="job-header">
                  <span className="job-meta">August 2022 – May 2023</span>
                  <h3 className="job-title">Data Operations Support (Tesla Service)</h3>
                  <span className="job-location">Tesla – Lathrop, CA</span>
                </div>
                <ul className="job-responsibilities">
                  <li>
                    <span className="bullet-point">▹</span>
                    Created data visualizations in Tableau to track key performance metrics.
                  </li>
                
                  <li>
                    <span className="bullet-point">▹</span>
                    Streamlined data operations to support critical decision-making processes across teams.
                  </li>
                </ul>
              </div>

              {/* Tesla - Maintenance Support */}
              <div className="job-entry">
                <div className="job-header">
                  <span className="job-meta">May 2021 – August 2022</span>
                  <h3 className="job-title">Maintenance Support Technician</h3>
                  <span className="job-location">Tesla – Fremont, CA</span>
                </div>
                <ul className="job-responsibilities">
                  <li>
                    <span className="bullet-point">▹</span>
                    Supported continuous improvement initiatives by automating reporting processes and 
                    enhancing system reliability.
                  </li>
                </ul>
              </div>

              {/* Air Force */}
              <div className="job-entry">
                <div className="job-header">
                  <span className="job-meta">December 2017 – May 2021</span>
                  <h3 className="job-title">Active Duty Air Force (Air Transportation Specialist)</h3>
                  <span className="job-location">United States Air Force – Joint Base Pearl-Harbor Hickam / Joint Base Lewis-McChord</span>
                </div>
                <ul className="job-responsibilities">
                  <li>
                    <span className="bullet-point">▹</span>
                    Managed and coordinated the safe and efficient transportation of personnel and cargo, 
                    ensuring compliance with strict military regulations and safety standards.
                  </li>
                  <li>
                    <span className="bullet-point">▹</span>
                    Operated and maintained specialized equipment, demonstrating proficiency in logistics and 
                    supply chain operations.
                  </li>
                  <li>
                    <span className="bullet-point">▹</span>
                    Trained and supervised junior personnel, fostering teamwork and enhancing operational readiness.
                  </li>
                </ul>
              </div>
            </div>

            {/* Terminal prompt line */}
            <div className="terminal-cursor-line" style={{ marginTop: '2rem' }}>
              <span className="terminal-prompt">$</span>
              <span className="terminal-cursor visible">_</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;

