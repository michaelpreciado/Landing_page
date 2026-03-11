import React, { useEffect } from 'react';
import MatrixRainBackground from './MatrixRainBackground';
import PageTransition from './PageTransition.jsx';
import ReturnButton from './ReturnButton.jsx';
import useTypewriter from '../utils/hooks/useTypewriter';
import { autoApplyLiquidGlass } from '../utils/liquidGlass.js';

function OpenClawWorkflow() {
  const typedTitle = useTypewriter('OPENCLAW WORKFLOW', { speed: 40, scrambleOnMount: true });

  useEffect(() => {
    autoApplyLiquidGlass();

    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500&display=swap');
      
      .openclaw-editorial {
        min-height: 100vh;
        position: relative;
        color: #E8E4DC;
        font-family: 'Inter', sans-serif;
        font-weight: 300;
        line-height: 1.8;
      }

      .openclaw-container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 4rem 2rem;
        position: relative;
        z-index: 1;
      }

      .openclaw-header {
        text-align: center;
        margin-bottom: 3rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid rgba(30, 144, 255, 0.3);
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

      .openclaw-meta a {
        color: #1E90FF;
        text-decoration: none;
        border: 1px solid rgba(30, 144, 255, 0.4);
        padding: 0.3rem 0.8rem;
        border-radius: 4px;
        transition: all 0.2s ease;
      }

      .openclaw-meta a:hover {
        background: rgba(30, 144, 255, 0.1);
        border-color: #1E90FF;
      }

      .openclaw-title {
        font-family: 'Playfair Display', serif;
        font-size: clamp(2.5rem, 8vw, 5rem);
        font-weight: 500;
        letter-spacing: -0.02em;
        margin: 0;
        color: #FFFFFF;
        line-height: 1.1;
        text-shadow: 0 0 40px rgba(30, 144, 255, 0.3);
      }

      .openclaw-intro-section {
        margin: 3rem 0;
      }

      .openclaw-two-col-text {
        column-count: 2;
        column-gap: 3rem;
        text-align: justify;
        hyphens: auto;
        color: #B8B0A0;
        font-size: 0.95rem;
        line-height: 1.9;
      }

      .openclaw-two-col-text p {
        margin: 0 0 1.5rem 0;
        break-inside: avoid;
      }

      .openclaw-image-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.5rem;
        margin: 2rem 0;
      }

      .grid-image-placeholder {
        aspect-ratio: 1;
        background: rgba(5, 12, 28, 0.8);
        border: 1px solid rgba(30, 144, 255, 0.2);
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.6rem;
        color: #5A8FC0;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        overflow: hidden;
        position: relative;
      }

      .grid-image-placeholder::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, rgba(30, 144, 255, 0.05) 0%, transparent 50%);
      }

      .grid-image-placeholder span {
        position: relative;
        z-index: 1;
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
        color: #FFFFFF;
        text-shadow: 0 0 30px rgba(30, 144, 255, 0.2);
      }

      .openclaw-content-block {
        margin: 2rem 0;
      }

      .openclaw-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .openclaw-list li {
        padding: 0.75rem 0;
        border-bottom: 1px solid rgba(30, 144, 255, 0.15);
        font-size: 0.9rem;
        color: #B8B0A0;
      }

      .openclaw-list li:last-child {
        border-bottom: none;
      }

      .openclaw-list strong {
        color: #FFFFFF;
        font-weight: 500;
      }

      .openclaw-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin: 1.5rem 0;
        justify-content: center;
      }

      .openclaw-tag {
        font-size: 0.7rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        padding: 0.4rem 0.8rem;
        background: rgba(30, 144, 255, 0.1);
        border: 1px solid rgba(30, 144, 255, 0.3);
        color: #5A8FC0;
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

      .hero-image-placeholder {
        width: 100%;
        aspect-ratio: 21/9;
        background: linear-gradient(135deg, rgba(5, 12, 28, 0.9) 0%, rgba(10, 25, 47, 0.95) 100%);
        border: 1px solid rgba(30, 144, 255, 0.2);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #5A8FC0;
        font-size: 0.85rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        position: relative;
        overflow: hidden;
      }

      .hero-image-placeholder::before {
        content: '';
        position: absolute;
        inset: 0;
        background: 
          linear-gradient(90deg, rgba(30, 144, 255, 0.03) 1px, transparent 1px),
          linear-gradient(rgba(30, 144, 255, 0.03) 1px, transparent 1px);
        background-size: 40px 40px;
      }

      .hero-image-placeholder span {
        position: relative;
        z-index: 1;
      }

      .openclaw-footer {
        text-align: center;
        margin-top: 4rem;
        padding-top: 2rem;
        border-top: 1px solid rgba(30, 144, 255, 0.2);
        font-size: 0.8rem;
        color: #8B8680;
      }

      @media (max-width: 768px) {
        .openclaw-two-col-text {
          column-count: 1;
        }
        
        .openclaw-container {
          padding: 2rem 1.5rem;
        }
      }
    `;

    document.head.appendChild(style);
    return () => {
      if (style.parentNode) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <PageTransition>
      <MatrixRainBackground />
      <ReturnButton to="/projects" />
      
      <div className="openclaw-editorial">
        <article className="openclaw-container">
          <header className="openclaw-header">
            <div className="openclaw-meta">
              <a href="/">#001 Home</a>
              <span>NEW POST</span>
              <span>V1.0</span>
            </div>
            <h1 className="openclaw-title">{typedTitle}</h1>
          </header>

          <section className="openclaw-intro-section">
            <div className="openclaw-two-col-text">
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
          </section>

          <div className="openclaw-image-grid">
            <div className="grid-image-placeholder"><span>[IMG: Architecture]</span></div>
            <div className="grid-image-placeholder"><span>[IMG: Data Flow]</span></div>
            <div className="grid-image-placeholder"><span>[IMG: Tech Stack]</span></div>
            <div className="grid-image-placeholder"><span>[IMG: Agent Tree]</span></div>
            <div className="grid-image-placeholder"><span>[IMG: Model Router]</span></div>
            <div className="grid-image-placeholder"><span>[IMG: Memory Graph]</span></div>
            <div className="grid-image-placeholder"><span>[IMG: Telegram UI]</span></div>
            <div className="grid-image-placeholder"><span>[IMG: Obsidian Vault]</span></div>
            <div className="grid-image-placeholder"><span>[IMG: Swarm Viz]</span></div>
          </div>

          <div className="openclaw-handle">@preciado.tech</div>

          <section className="openclaw-section">
            <h2 className="openclaw-section-header">THE ARCHITECTURE</h2>
            <div className="openclaw-two-col-text">
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
          </section>

          <section className="openclaw-section">
            <h2 className="openclaw-section-header">MODEL ROUTING</h2>
            <div className="openclaw-two-col-text">
              <p>
                The routing layer automatically selects the optimal model based on task 
                complexity, thermal constraints, and latency requirements. Local models 
                handle 90% of routine interactions, ensuring sub-5-second response times 
                and complete data privacy.
              </p>
              <p>
                <strong>Default:</strong> Qwen3.5-9B runs locally for most tasks, balancing 
                performance with thermal management. When temperatures rise or tasks are 
                lighter, the system falls back to Qwen3.5-4B, 2B, or 0.8B variants.
              </p>
              <p>
                <strong>Complex Tasks:</strong> Claude Opus handles high-stakes reasoning 
                and major architectural decisions. For coding tasks, Claude Code integrates 
                via the ACP harness for direct repository manipulation.
              </p>
              <p>
                <strong>Vision:</strong> Gemini Nano Banana Pro handles image generation 
                and analysis when visual capabilities are required.
              </p>
            </div>
          </section>

          <section className="openclaw-section">
            <h2 className="openclaw-section-header">DAILY WORKFLOW</h2>
            <div className="openclaw-two-col-text">
              <p>
                Every interaction flows through the same pipeline: Telegram message received 
                by OpenClaw gateway, classified by FRIDAY for intent and priority, routed to 
                the appropriate model or sub-agent, executed with safety tiering, and delivered 
                back via Telegram with a copy archived to Obsidian.
              </p>
              <p>
                Heartbeat automation handles periodic checks: system health, stock watchlists, 
                calendar reviews, and memory maintenance. The system proactively surfaces 
                relevant information without requiring explicit queries.
              </p>
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
            <div className="openclaw-two-col-text">
              <p>
                <strong>Current capabilities:</strong> Single interface for 10+ AI models, 
                sub-agent spawning for parallel execution, 100% local inference for routine 
                tasks, persistent memory across sessions, and sub-5-second average response 
                times.
              </p>
              <p>
                <strong>Next iterations:</strong> Voice integration with wake word detection, 
                Friday Command Center UI built in React with Three.js visualization, 
                AutoResearch overnight training swarms, calendar integration via khal/gcalcli, 
                and email automation with security tiering.
              </p>
            </div>
          </section>

          <div className="openclaw-hero">
            <div className="hero-image-placeholder">
              <span>[System Architecture Visualization]</span>
            </div>
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
