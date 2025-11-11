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
                Self-taught software engineer specializing in full-stack development, AI/ML integration, and
                production systems automation. Proven track record building scalable tools that improve operational
                efficiency by 15-25% in manufacturing environments. Expert in modern web technologies (React, Node.js,
                Python), cloud infrastructure (Docker, Linux), and cutting-edge AI frameworks (Claude API, OpenAI,
                LangChain, RAG). Delivered production AI systems automating workflows across Notion, HubSpot, and
                internal APIs—reducing manual work by 40% and accelerating decision-making. Strong foundation in
                data engineering (Python data stack, Tableau, SQL) with focus on building developer tools,
                automation pipelines, and AI-powered applications that drive measurable business impact.
              </p>
            </div>

            {/* Technical Skills */}
            <div className="resume-block">
              <h2 className="resume-heading">
                <span className="terminal-prompt">&gt;</span> Technical Skills
              </h2>
              <div className="skills-grid">
                <div className="skill-item">
                  <span className="skill-label">Languages & Frameworks:</span>
                  <span className="skill-value">JavaScript/TypeScript, Python, SQL, React, Node.js, HTML5/CSS3, Bash</span>
                </div>
                <div className="skill-item">
                  <span className="skill-label">AI/ML & LLM Integration:</span>
                  <span className="skill-value">Claude API (Anthropic), OpenAI GPT-4, GitHub Copilot, Cursor IDE, LangChain, RAG (Retrieval Augmented Generation), prompt engineering, vector databases. Production experience deploying AI agents, building custom workflows, and integrating LLMs with internal systems (Notion, HubSpot, REST APIs)</span>
                </div>
                <div className="skill-item">
                  <span className="skill-label">Cloud & Infrastructure:</span>
                  <span className="skill-value">Docker, Linux (Ubuntu/Arch), systemd, Cloudflare, self-hosted services, CI/CD pipelines. Experience with container orchestration, infrastructure automation, and local AI model deployment (Ollama, LM Studio)</span>
                </div>
                <div className="skill-item">
                  <span className="skill-label">Data Engineering & Analytics:</span>
                  <span className="skill-value">Python data stack (Pandas, NumPy, Matplotlib), SQL databases, Tableau, Splunk. Built ETL pipelines, real-time dashboards, and data-driven automation tools</span>
                </div>
                <div className="skill-item">
                  <span className="skill-label">Developer Tools & Workflows:</span>
                  <span className="skill-value">Git/GitHub, VS Code, Vite, Figma, REST APIs, Notion API, HubSpot API. Strong focus on developer experience, automation, and building internal tools that accelerate team velocity</span>
                </div>
                <div className="skill-item">
                  <span className="skill-label">System Design & Architecture:</span>
                  <span className="skill-value">Microservices, API design, database modeling, system monitoring, production debugging. Experience optimizing performance, reducing downtime, and scaling systems in high-stakes manufacturing environments</span>
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
                  <h3 className="job-title">Software Engineer / IT Application Support</h3>
                  <span className="job-location">Tesla – Lathrop, CA</span>
                </div>
                <ul className="job-responsibilities">
                  <li>
                    <span className="bullet-point">▹</span>
                    <strong>Built AI-powered automation tools</strong> integrating Claude API, OpenAI, and LangChain with internal systems (Notion, HubSpot), reducing manual workflow overhead by 40% and accelerating cross-functional decision-making for engineering teams
                  </li>
                  <li>
                    <span className="bullet-point">▹</span>
                    <strong>Developed production monitoring dashboards</strong> using Python, SQL, and Tableau to track critical manufacturing KPIs in real-time, enabling predictive maintenance and reducing system downtime by 20%
                  </li>
                  <li>
                    <span className="bullet-point">▹</span>
                    <strong>Architected and deployed internal automation scripts</strong> (Python, Bash) for system provisioning, configuration management, and incident response, improving operational efficiency by 15% and standardizing deployment processes
                  </li>
                  <li>
                    <span className="bullet-point">▹</span>
                    <strong>Engineered full-stack web applications</strong> (React, Node.js, REST APIs) for internal tooling, streamlining workflows for Quality, Controls, and Process Engineering teams—cutting defect rates by 25% through better data visibility
                  </li>
                  <li>
                    <span className="bullet-point">▹</span>
                    <strong>Led incident response and root cause analysis</strong> for production systems, implementing automated alerting (Splunk, custom scripts) and documentation processes that reduced MTTR by 30%
                  </li>
                  <li>
                    <span className="bullet-point">▹</span>
                    <strong>Collaborated with engineering teams</strong> (Industrial, Controls, Quality, Process) to identify pain points and deliver custom software solutions, driving measurable improvements in production velocity and system reliability
                  </li>
                </ul>
              </div>

              {/* Tesla - Data Operations Support */}
              <div className="job-entry">
                <div className="job-header">
                  <span className="job-meta">August 2022 – May 2023</span>
                  <h3 className="job-title">Data Engineer / Operations Analyst</h3>
                  <span className="job-location">Tesla – Lathrop, CA</span>
                </div>
                <ul className="job-responsibilities">
                  <li>
                    <span className="bullet-point">▹</span>
                    <strong>Built ETL pipelines and data infrastructure</strong> using Python (Pandas, NumPy) and SQL to process and transform large-scale service data, enabling real-time analytics for leadership decision-making
                  </li>
                  <li>
                    <span className="bullet-point">▹</span>
                    <strong>Designed interactive Tableau dashboards</strong> tracking critical service KPIs (SLA adherence, parts inventory, technician efficiency), improving operational visibility and reducing response times by 18%
                  </li>
                  <li>
                    <span className="bullet-point">▹</span>
                    <strong>Automated reporting workflows</strong> by developing Python scripts that extracted, cleaned, and aggregated data from multiple sources, saving 10+ hours per week of manual work for cross-functional teams
                  </li>
                </ul>
              </div>

              {/* Tesla - Maintenance Support */}
              <div className="job-entry">
                <div className="job-header">
                  <span className="job-meta">May 2021 – August 2022</span>
                  <h3 className="job-title">Systems Automation Engineer</h3>
                  <span className="job-location">Tesla – Fremont, CA</span>
                </div>
                <ul className="job-responsibilities">
                  <li>
                    <span className="bullet-point">▹</span>
                    <strong>Automated preventive maintenance workflows</strong> using Python and Bash scripting, reducing manual reporting time by 25 hours/month and improving equipment uptime through proactive monitoring
                  </li>
                  <li>
                    <span className="bullet-point">▹</span>
                    <strong>Developed database solutions and monitoring tools</strong> to track system health metrics, enabling data-driven maintenance decisions and reducing unexpected failures by 12%
                  </li>
                </ul>
              </div>

              {/* Air Force */}
              <div className="job-entry">
                <div className="job-header">
                  <span className="job-meta">December 2017 – May 2021</span>
                  <h3 className="job-title">Logistics Systems Specialist</h3>
                  <span className="job-location">United States Air Force – Joint Base Pearl Harbor-Hickam / Joint Base Lewis-McChord</span>
                </div>
                <ul className="job-responsibilities">
                  <li>
                    <span className="bullet-point">▹</span>
                    <strong>Managed mission-critical logistics operations</strong> using military transportation and inventory management systems, ensuring 100% on-time mission execution in high-pressure environments
                  </li>
                  <li>
                    <span className="bullet-point">▹</span>
                    <strong>Trained and led teams</strong> of 5-10 personnel, developing SOPs and conducting technical training that improved operational efficiency and safety compliance
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

