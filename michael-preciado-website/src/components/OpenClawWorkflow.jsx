import React, { useEffect } from 'react';
import PageTransition from './PageTransition.jsx';
import ReturnButton from './ReturnButton.jsx';
import useTypewriter from '../utils/hooks/useTypewriter';

function OpenClawWorkflow() {
  const typedTitle = useTypewriter('OPENCLAW WORKFLOW', { speed: 40, scrambleOnMount: true });

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500&display=swap');
      
      .openclaw-editorial {
        min-height: 100vh;
        background: #F5F3EF;
        color: #1A1A1A;
        font-family: 'Inter', sans-serif;
        font-weight: 300;
        line-height: 1.8;
      }

      .openclaw-container {
        max-width: 900px;
        margin: 0 auto;
        padding: 4rem 2rem;
      }

      .openclaw-header {
        text-align: center;
        margin-bottom: 3rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid #D4D0C8;
      }

      .openclaw-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.75rem;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: #8B8680;
        margin-bottom: 2rem;
      }

      .openclaw-title {
        font-family: 'Playfair Display', serif;
        font-size: clamp(2.5rem, 8vw, 5rem);
        font-weight: 500;
        letter-spacing: -0.02em;
        margin: 0;
        color: #1A1A1A;
        line-height: 1.1;
      }

      .openclaw-intro {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        margin: 3rem 0;
        align-items: start;
      }

      .openclaw-intro-text {
        font-size: 0.95rem;
        text-align: justify;
        hyphens: auto;
        color: #4A4A4A;
      }

      .openclaw-intro-text p {
        margin: 0 0 1.5rem 0;
      }

      .openclaw-image-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.5rem;
      }

      .grid-placeholder {
        aspect-ratio: 1;
        background: #E8E4DC;
        border-radius: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.65rem;
        color: #A8A49C;
        text-transform: uppercase;
        letter-spacing: 0.1em;
      }

      .openclaw-section {
        margin: 4rem 0;
      }

      .openclaw-section-header {
        font-family: 'Playfair Display', serif;
        font-size: clamp(1.8rem, 4vw, 2.8rem);
        font-weight: 500;
        letter-spacing: -0.01em;
        margin: 0 0 1.5rem 0;
        line-height: 1.2;
        color: #1A1A1A;
      }

      .openclaw-two-col {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
      }

      .openclaw-text {
        font-size: 0.95rem;
        text-align: justify;
        hyphens: auto;
        color: #4A4A4A;
      }

      .openclaw-text p {
        margin: 0 0 1.5rem 0;
      }

      .openclaw-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .openclaw-list li {
        padding: 0.75rem 0;
        border-bottom: 1px solid #E8E4DC;
        font-size: 0.9rem;
        color: #4A4A4A;
      }

      .openclaw-list li:last-child {
        border-bottom: none;
      }

      .openclaw-list strong {
        color: #1A1A1A;
        font-weight: 500;
      }

      .openclaw-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin: 1.5rem 0;
      }

      .openclaw-tag {
        font-size: 0.7rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        padding: 0.4rem 0.8rem;
        background: #E8E4DC;
        color: #6A6660;
        border-radius: 2px;
      }

      .openclaw-handle {
        text-align: center;
        margin: 3rem 0;
        font-family: 'Playfair Display', serif;
        font-size: 1.1rem;
        color: #8B8680;
        font-style: italic;
      }

      .openclaw-hero {
        width: 100%;
        margin-top: 3rem;
      }

      .hero-placeholder {
        width: 100%;
        aspect-ratio: 16/9;
        background: linear-gradient(135deg, #D4CFC5 0%, #B8B0A0 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #8B8680;
        font-size: 0.85rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }

      .openclaw-footer {
        text-align: center;
        margin-top: 4rem;
        padding-top: 2rem;
        border-top: 1px solid #D4D0C8;
        font-size: 0.8rem;
        color: #8B8680;
      }

      @media (max-width: 768px) {
        .openclaw-intro,
        .openclaw-two-col {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        
        .openclaw-container {
          padding: 2rem 1.5rem;
        }
      }
    `;

    document.head.appendChild(style);
    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return (
    <PageTransition>
      <div className="openclaw-editorial">
        <ReturnButton to="/projects" />
        
        <article className="openclaw-container">
          <header className="openclaw-header">
            <div className="openclaw-meta">
              <span>#001</span>
              <span>NEW POST</span>
              <span>v1.0</span>
            </div>
            <h1 className="openclaw-title">{typedTitle}</h1>
          </header>

          <section className="openclaw-intro">
            <div className="openclaw-intro-text">
              <p>
                A unified AI operating system built on the OpenClaw framework, featuring a custom 
                orchestration layer that manages multiple AI models, specialized sub-agents, and 
                persistent memory through seamless integrations.
              </p>
              <p>
                The architecture prioritizes local inference for privacy and speed, while maintaining 
                the flexibility to route complex tasks to cloud providers when necessary.
              </p>
            </div>
            <div className="openclaw-image-grid">
              <div className="grid-placeholder">Arch</div>
              <div className="grid-placeholder">Flow</div>
              <div className="grid-placeholder">Stack</div>
              <div className="grid-placeholder">Agent</div>
              <div className="grid-placeholder">Model</div>
              <div className="grid-placeholder">Memory</div>
              <div className="grid-placeholder">Telegram</div>
              <div className="grid-placeholder">Obsidian</div>
              <div className="grid-placeholder">Swarm</div>
            </div>
          </section>

          <div className="openclaw-handle">@preciado.tech</div>

          <section className="openclaw-section">
            <h2 className="openclaw-section-header">THE ARCHITECTURE</h2>
            <div className="openclaw-two-col">
              <div className="openclaw-text">
                <p>
                  At the center of the system is FRIDAY — a unified AI persona that serves as the 
                  command interface. Unlike traditional chatbots, FRIDAY operates as a full 
                  operating system layer, orchestrating specialized sub-agents and managing 
                  context across sessions.
                </p>
                <p>
                  Four core sub-agents handle specialized domains: CREATOR for business strategy 
                  and content, RESEARCH for technical deep-dives, STOCKS for market analysis, 
                  and ENGINEERING for software development tasks.
                </p>
              </div>
              <div className="openclaw-text">
                <p>
                  Agent swarms provide parallel execution capabilities, spinning up temporary 
                  micro-agents that work simultaneously on different aspects of a task before 
                  merging results. This enables complex workflows to complete in minutes rather 
                  than hours.
                </p>
                <p>
                  All activity is logged to an Obsidian vault, creating a searchable knowledge 
                  graph that persists across sessions and enables long-term memory for the 
                  entire system.
                </p>
              </div>
            </div>
          </section>

          <section className="openclaw-section">
            <h2 className="openclaw-section-header">MODEL ROUTING</h2>
            <div className="openclaw-two-col">
              <ul className="openclaw-list">
                <li><strong>Default:</strong> Qwen3.5-9B (local, thermal-managed)</li>
                <li><strong>Fallback:</strong> Qwen3.5-4B/2B/0.8B (lighter loads)</li>
                <li><strong>Complex Tasks:</strong> Claude Opus (high-stakes reasoning)</li>
                <li><strong>Coding:</strong> Claude Code via ACP harness</li>
                <li><strong>Vision:</strong> Gemini Nano Banana Pro</li>
              </ul>
              <div className="openclaw-text">
                <p>
                  The routing layer automatically selects the optimal model based on task 
                  complexity, thermal constraints, and latency requirements. Local models 
                  handle 90% of routine interactions, ensuring sub-5-second response times 
                  and complete data privacy.
                </p>
              </div>
            </div>
          </section>

          <section className="openclaw-section">
            <h2 className="openclaw-section-header">DAILY WORKFLOW</h2>
            <div className="openclaw-two-col">
              <div className="openclaw-text">
                <p>
                  Every interaction flows through the same pipeline: Telegram message received 
                  by OpenClaw gateway, classified by FRIDAY for intent and priority, routed to 
                  the appropriate model or sub-agent, executed with safety tiering, and delivered 
                  back via Telegram with a copy archived to Obsidian.
                </p>
              </div>
              <div className="openclaw-text">
                <p>
                  Heartbeat automation handles periodic checks: system health, stock watchlists, 
                  calendar reviews, and memory maintenance. The system proactively surfaces 
                  relevant information without requiring explicit queries.
                </p>
              </div>
            </div>
            <div className="openclaw-tags">
              <span className="openclaw-tag">OpenClaw</span>
              <span className="openclaw-tag">Telegram</span>
              <span className="openclaw-tag">Obsidian</span>
              <span className="openclaw-tag">Ollama</span>
              <span className="openclaw-tag">LM Studio</span>
              <span className="openclaw-tag">Node.js</span>
              <span className="openclaw-tag">Arch Linux</span>
            </div>
          </section>

          <section className="openclaw-section">
            <h2 className="openclaw-section-header">RESULTS & ROADMAP</h2>
            <div className="openclaw-two-col">
              <ul className="openclaw-list">
                <li>Single interface for 10+ AI models</li>
                <li>Sub-agent spawning for parallel execution</li>
                <li>100% local inference for routine tasks</li>
                <li>Persistent memory across sessions</li>
                <li>Sub-5-second average response time</li>
              </ul>
              <ul className="openclaw-list">
                <li><strong>Next:</strong> Voice integration with wake word</li>
                <li><strong>Next:</strong> Friday Command Center UI</li>
                <li><strong>Next:</strong> AutoResearch training swarms</li>
                <li><strong>Next:</strong> Calendar integration</li>
                <li><strong>Next:</strong> Email automation</li>
              </ul>
            </div>
          </section>

          <div className="openclaw-hero">
            <div className="hero-placeholder">[System Architecture Visualization]</div>
          </div>

          <footer className="openclaw-footer">
            <p>Built with OpenClaw — openclaw.ai</p>
          </footer>
        </article>
      </div>
    </PageTransition>
  );
}

export default OpenClawWorkflow;
