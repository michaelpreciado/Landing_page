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
                Self-taught software developer and IT specialist who keeps systems fast, stable, and easy to use.
                Strong in troubleshooting, device support (Zebra printers), and cutting downtime with repeatable fixes.
                Comfortable across Python, JavaScript, Linux (Ubuntu/Arch), Docker, Git, and modern web tools.
                Actively building AI-powered workflows using Ollama, OpenAI, Notion, and HubSpot to automate tasks
                and surface insights. Known for quick problem-solving, clear communication, and delivering small,
                reliable solutions that make teams more productive.
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
                  <span className="skill-value">Python (Pandas, NumPy, Matplotlib), JavaScript, SQL, HTML, CSS, Bash</span>
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
                  <span className="skill-label">Software & Tools:</span>
                  <span className="skill-value">Linux (Ubuntu, Arch), Docker, Cloudflare tunnels, VS Code, Git, Notion, HubSpot, Tableau, Figma, Blender, 3D Printing Software (Orca Slicer, Ultimaker), Splunk queries and dashboards. Experience with in-house factory systems and Zebra printer troubleshooting</span>
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
                <p className="terminal-text">
                  <span className="job-meta">May 2021 – Present</span>
                </p>
                <p className="terminal-text terminal-indent">
                  <h3 className="job-title">IT Application Support Technician</h3>
                </p>
                <p className="terminal-text terminal-indent">
                  <span className="job-location">Tesla – Lathrop, CA</span>
                </p>
                <p className="terminal-text blank-line"></p>
                <p className="terminal-text terminal-indent-double">
                  <span className="bullet-point">▹</span> <strong>Industrial Engineering Support:</strong> Assisted in streamlining operations and optimizing systems, leading to a 15% increase in production efficiency.
                </p>
                <p className="terminal-text terminal-indent-double">
                  <span className="bullet-point">▹</span> <strong>Controls Engineering Support:</strong> Troubleshot and maintained automated systems, reducing downtime by 20%.
                </p>
                <p className="terminal-text terminal-indent-double">
                  <span className="bullet-point">▹</span> <strong>Quality Engineering Support:</strong> Ensured software and hardware solutions met high-quality standards, contributing to a 25% decrease in defect rates.
                </p>
                <p className="terminal-text terminal-indent-double">
                  <span className="bullet-point">▹</span> <strong>Process Engineering Support:</strong> Facilitated seamless integration and effective workflow management, enhancing cross-departmental collaboration.
                </p>
                <p className="terminal-text terminal-indent-double">
                  <span className="bullet-point">▹</span> <strong>IT Manufacturing Support:</strong> Provided dedicated IT support to manufacturing operations, ensuring system reliability and efficiency.
                </p>
                <p className="terminal-text blank-line"></p>

                {/* Air Force */}
                <p className="terminal-text">
                  <span className="job-meta">December 2017 – May 2021</span>
                </p>
                <p className="terminal-text terminal-indent">
                  <h3 className="job-title">Active Duty Air Force (Air Transportation Specialist)</h3>
                </p>
                <p className="terminal-text terminal-indent">
                  <span className="job-location">United States Air Force – Joint Base Pearl-Harbor Hickam / Joint Base Lewis-McChord</span>
                </p>
                <p className="terminal-text blank-line"></p>
                <p className="terminal-text terminal-indent-double">
                  <span className="bullet-point">▹</span> Managed and coordinated the safe and efficient transportation of personnel and cargo, ensuring compliance with strict military regulations and safety standards.
                </p>
                <p className="terminal-text terminal-indent-double">
                  <span className="bullet-point">▹</span> Operated and maintained specialized equipment, demonstrating proficiency in logistics and supply chain operations.
                </p>
                <p className="terminal-text terminal-indent-double">
                  <span className="bullet-point">▹</span> Trained and supervised junior personnel, fostering teamwork and enhancing operational readiness.
                </p>
              </div>
            </div>

            {/* Certificates & Courses */}
            <div className="resume-block">
              <h2 className="resume-heading">
                <span className="terminal-prompt">&gt;</span> Certificates & Courses
              </h2>

              {/* Certificate Entry 1 */}
              <div className="job-entry">
                <p className="terminal-text">
                </p>
                <p className="terminal-text terminal-indent">
                  <h3 className="job-title">[Certificate/Course Name]</h3>
                </p>
                <p className="terminal-text terminal-indent">
                  <span className="job-location">[Issuing Organization]</span>
                </p>
                <p className="terminal-text blank-line"></p>
              </div>

              {/* Certificate Entry 2 */}
              <div className="job-entry">
                <p className="terminal-text">
                </p>
                <p className="terminal-text terminal-indent">
                  <h3 className="job-title">[Certificate/Course Name]</h3>
                </p>
                <p className="terminal-text terminal-indent">
                  <span className="job-location">[Issuing Organization]</span>
                </p>
                <p className="terminal-text blank-line"></p>
              </div>

              {/* Certificate Entry 3 */}
              <div className="job-entry">
                <p className="terminal-text">
                </p>
                <p className="terminal-text terminal-indent">
                  <h3 className="job-title">[Certificate/Course Name]</h3>
                </p>
                <p className="terminal-text terminal-indent">
                  <span className="job-location">[Issuing Organization]</span>
                </p>
                <p className="terminal-text blank-line"></p>
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

