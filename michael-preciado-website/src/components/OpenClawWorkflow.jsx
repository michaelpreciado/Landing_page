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
        line-height: 1.7;
      }

      .openclaw-container {
        max-width: 900px;
        margin: 0 auto;
        padding: 3rem 1.25rem;
        position: relative;
        z-index: 1;
      }

      .openclaw-header {
        text-align: center;
        margin-bottom: 2rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid rgba(30, 144, 255, 0.3);
      }

      .openclaw-meta {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        font-size: 0.7rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: #8B8680;
        margin-bottom: 1.5rem;
      }

      .openclaw-title {
        font-family: 'Playfair Display', serif;
        font-size: clamp(1.8rem, 7vw, 3.5rem);
        font-weight: 500;
        letter-spacing: -0.01em;
        margin: 0;
        color: #FFFFFF;
        line-height: 1.1;
        text-shadow: 0 0 30px rgba(30, 144, 255, 0.3);
      }

      .openclaw-intro-section {
        margin: 2rem 0;
      }

      .openclaw-two-col-text {
        column-count: 2;
        column-gap: 1.5rem;
        text-align: left;
        color: #B8B0A0;
        font-size: 0.8rem;
        line-height: 1.6;
      }

      .openclaw-two-col-text p {
        margin: 0 0 1rem 0;
        break-inside: avoid;
      }

      .openclaw-visual {
        margin: 2rem 0;
        padding: 1.25rem;
        background: rgba(5, 12, 28, 0.5);
        border: 1px solid rgba(30, 144, 255, 0.15);
        border-radius: 10px;
      }

      .openclaw-visual-title {
        font-family: 'Playfair Display', serif;
        font-size: 1rem;
        color: #FFFFFF;
        text-align: center;
        margin-bottom: 1rem;
        letter-spacing: 0.03em;
      }

      .routing-diagram {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.6rem;
      }

      .router-box {
        background: linear-gradient(135deg, rgba(30, 144, 255, 0.15), rgba(30, 144, 255, 0.08));
        border: 1.5px solid rgba(30, 144, 255, 0.4);
        border-radius: 6px;
        padding: 0.6rem 1.2rem;
        text-align: center;
        font-weight: 500;
        color: #FFFFFF;
        font-size: 0.85rem;
      }

      .model-tier {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.6rem;
        width: 100%;
      }

      .model-box {
        background: rgba(10, 25, 47, 0.6);
        border: 1px solid rgba(30, 144, 255, 0.25);
        border-radius: 5px;
        padding: 0.6rem;
        text-align: center;
      }

      .model-box.primary {
        border-color: rgba(30, 144, 255, 0.5);
        background: rgba(30, 144, 255, 0.12);
      }

      .model-box.cloud {
        border-color: rgba(255, 200, 100, 0.35);
        background: rgba(255, 200, 100, 0.08);
      }

      .model-name {
        font-size: 0.75rem;
        font-weight: 500;
        color: #FFFFFF;
        margin-bottom: 0.15rem;
      }

      .model-desc {
        font-size: 0.6rem;
        color: #8B8680;
      }

      .arrow-down {
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 8px solid rgba(30, 144, 255, 0.4);
      }

      .flow-chart {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 0.25rem;
      }

      .flow-step {
        background: rgba(10, 25, 47, 0.6);
        border: 1px solid rgba(30, 144, 255, 0.25);
        border-radius: 4px;
        padding: 0.35rem 0.2rem;
        font-size: 0.6rem;
        color: #B8B0A0;
        text-align: center;
      }

      .agent-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.6rem;
      }

      .agent-card {
        background: rgba(10, 25, 47, 0.6);
        border: 1px solid rgba(30, 144, 255, 0.25);
        border-radius: 6px;
        padding: 0.7rem;
        text-align: center;
      }

      .agent-icon {
        font-size: 1.2rem;
        margin-bottom: 0.25rem;
      }

      .agent-name {
        font-size: 0.7rem;
        font-weight: 500;
        color: #FFFFFF;
        margin-bottom: 0.15rem;
      }

      .agent-role {
        font-size: 0.55rem;
        color: #8B8680;
      }

      .stats-row {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.4rem;
      }

      .stat-box {
        text-align: center;
        padding: 0.6rem;
      }

      .stat-number {
        font-family: 'Playfair Display', serif;
        font-size: 1.8rem;
        color: #1E90FF;
        font-weight: 600;
      }

      .stat-label {
        font-size: 0.6rem;
        color: #8B8680;
        text-transform: uppercase;
        letter-spacing: 0.06em;
      }

      .openclaw-section {
        margin: 2.5rem 0;
      }

      .openclaw-section-header {
        font-family: 'Playfair Display', serif;
        font-size: clamp(1.3rem, 4vw, 2.2rem);
        font-weight: 500;
        letter-spacing: -0.01em;
        margin: 0 0 1rem 0;
        line-height: 1.2;
        color: #FFFFFF;
        text-shadow: 0 0 20px rgba(30, 144, 255, 0.2);
      }

      .openclaw-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.35rem;
        margin: 1rem 0;
        justify-content: center;
      }

      .openclaw-tag {
        font-size: 0.6rem;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        padding: 0.25rem 0.5rem;
        background: rgba(30, 144, 255, 0.08);
        border: 1px solid rgba(30, 144, 255, 0.25);
        color: #5A8FC0;
        border-radius: 2px;
      }

      .openclaw-handle {
        text-align: center;
        margin: 2rem 0;
        font-family: 'Playfair Display', serif;
        font-size: 0.95rem;
        color: #8B8680;
        font-style: italic;
      }

      .openclaw-hero {
        width: 100%;
        margin-top: 2rem;
      }

      .hero-image-placeholder {
        width: 100%;
        aspect-ratio: 16/9;
        background: linear-gradient(135deg, rgba(5, 12, 28, 0.8) 0%, rgba(10, 25, 47, 0.9) 100%);
        border: 1px solid rgba(30, 144, 255, 0.15);
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #5A8FC0;
        font-size: 0.7rem;
        letter-spacing: 0.06em;
      }

      .openclaw-footer {
        text-align: center;
        margin-top: 2.5rem;
        padding-top: 1.25rem;
        border-top: 1px solid rgba(30, 144, 255, 0.15);
        font-size: 0.7rem;
        color: #8B8680;
      }

      @media (min-width: 640px) {
        .openclaw-container {
          padding: 3rem 2rem;
        }
        
        .openclaw-two-col-text {
          font-size: 0.9rem;
          column-gap: 2rem;
        }
        
        .agent-grid,
        .stats-row {
          grid-template-columns: repeat(4, 1fr);
        }
        
        .model-tier {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .model-box {
          min-width: 120px;
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
              <span>NEW POST</span>
              <span>V1.0</span>
            </div>
            <h1 className="openclaw-title">{typedTitle}</h1>
          </header>

          <section className="openclaw-intro-section">
            <div className="openclaw-two-col-text">
              <p>
                A unified AI operating system built on OpenClaw, orchestrating multiple models, 
                specialized sub-agents, and persistent memory through seamless integrations.
              </p>
              <p>
                The architecture prioritizes local inference for privacy and speed, with cloud 
                fallback for complex tasks requiring advanced reasoning.
              </p>
            </div>
          </section>

          {/* Architecture Visual */}
          <div className="openclaw-visual">
            <div className="openclaw-visual-title">System Architecture</div>
            <div className="agent-grid">
              <div className="agent-card">
                <div className="agent-icon">🎯</div>
                <div className="agent-name">FRIDAY</div>
                <div className="agent-role">Command Center</div>
              </div>
              <div className="agent-card">
                <div className="agent-icon">💡</div>
                <div className="agent-name">CREATOR</div>
                <div className="agent-role">Strategy & Content</div>
              </div>
              <div className="agent-card">
                <div className="agent-icon">🔬</div>
                <div className="agent-name">RESEARCH</div>
                <div className="agent-role">Technical Analysis</div>
              </div>
              <div className="agent-card">
                <div className="agent-icon">📈</div>
                <div className="agent-name">STOCKS</div>
                <div className="agent-role">Market Watch</div>
              </div>
            </div>
          </div>

          <div className="openclaw-handle">@preciado.tech</div>

          {/* Model Routing Visual */}
          <section className="openclaw-section">
            <h2 className="openclaw-section-header">MODEL ROUTING</h2>
            
            <div className="openclaw-visual">
              <div className="openclaw-visual-title">Intelligent Selection</div>
              <div className="routing-diagram">
                <div className="router-box">FRIDAY Router</div>
                <div className="arrow-down"></div>
                
                <div className="model-tier">
                  <div className="model-box primary">
                    <div className="model-name">Qwen3.5-9B</div>
                    <div className="model-desc">Default · 90% tasks</div>
                  </div>
                  <div className="model-box">
                    <div className="model-name">Qwen3.5-4B/2B</div>
                    <div className="model-desc">Fallback · Thermal</div>
                  </div>
                  <div className="model-box cloud">
                    <div className="model-name">Claude Opus</div>
                    <div className="model-desc">Complex tasks</div>
                  </div>
                  <div className="model-box cloud">
                    <div className="model-name">Gemini</div>
                    <div className="model-desc">Vision</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="openclaw-two-col-text">
              <p>
                The router selects optimal models based on task complexity and thermal constraints. 
                Local models handle 90% of interactions with sub-5-second response times.
              </p>
              <p>
                High-stakes reasoning routes to Claude, vision tasks to Gemini. Smaller Qwen 
                variants activate during thermal throttling or lighter workloads.
              </p>
            </div>
          </section>

          {/* Workflow Flow Visual */}
          <section className="openclaw-section">
            <h2 className="openclaw-section-header">DAILY WORKFLOW</h2>
            
            <div className="openclaw-visual">
              <div className="openclaw-visual-title">Request Pipeline</div>
              <div className="flow-chart">
                <div className="flow-step">Telegram</div>
                <div className="flow-step">OpenClaw</div>
                <div className="flow-step">FRIDAY</div>
                <div className="flow-step">Router</div>
                <div className="flow-step">Model</div>
                <div className="flow-step">Telegram</div>
                <div className="flow-step">Obsidian</div>
              </div>
            </div>

            <div className="openclaw-two-col-text">
              <p>
                Messages flow through Telegram → OpenClaw gateway → FRIDAY classification → 
                model routing → execution → Telegram response + Obsidian archive.
              </p>
              <p>
                Heartbeat automation monitors system health, stocks, and memory. Proactive 
                alerts surface without explicit queries.
              </p>
            </div>
            
            <div className="openclaw-tags">
              <span className="openclaw-tag">OpenClaw</span>
              <span className="openclaw-tag">Telegram</span>
              <span className="openclaw-tag">Obsidian</span>
              <span className="openclaw-tag">Ollama</span>
              <span className="openclaw-tag">LM Studio</span>
              <span className="openclaw-tag">Node.js</span>
              <span className="openclaw-tag">Arch</span>
            </div>
          </section>

          {/* Results Stats Visual */}
          <section className="openclaw-section">
            <h2 className="openclaw-section-header">RESULTS</h2>
            
            <div className="openclaw-visual">
              <div className="stats-row">
                <div className="stat-box">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">AI Models</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">&lt;5s</div>
                  <div className="stat-label">Response</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">90%</div>
                  <div className="stat-label">Local</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">∞</div>
                  <div className="stat-label">Memory</div>
                </div>
              </div>
            </div>

            <div className="openclaw-two-col-text">
              <p>
                Single interface for 10+ models with sub-agent spawning, 100% local inference 
                for routine tasks, and persistent memory across sessions.
              </p>
              <p>
                Roadmap: Voice integration, Command Center UI, AutoResearch swarms, calendar 
                sync, and email automation with security tiering.
              </p>
            </div>
          </section>

          <div className="openclaw-hero">
            <div className="hero-image-placeholder">
              <span>System Architecture</span>
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
