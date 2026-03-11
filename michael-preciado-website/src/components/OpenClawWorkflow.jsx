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
        justify-content: center;
        align-items: center;
        gap: 2rem;
        font-size: 0.75rem;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: #8B8680;
        margin-bottom: 2rem;
      }

      .openclaw-title {
        font-family: 'Playfair Display', serif;
        font-size: clamp(2rem, 8vw, 5rem);
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
        column-gap: 2.5rem;
        text-align: justify;
        hyphens: auto;
        color: #B8B0A0;
        font-size: 0.9rem;
        line-height: 1.8;
      }

      .openclaw-two-col-text p {
        margin: 0 0 1.2rem 0;
        break-inside: avoid;
      }

      .openclaw-visual {
        margin: 2.5rem 0;
        padding: 1.5rem;
        background: rgba(5, 12, 28, 0.6);
        border: 1px solid rgba(30, 144, 255, 0.2);
        border-radius: 12px;
      }

      .openclaw-visual-title {
        font-family: 'Playfair Display', serif;
        font-size: 1.1rem;
        color: #FFFFFF;
        text-align: center;
        margin-bottom: 1.2rem;
        letter-spacing: 0.05em;
      }

      .routing-diagram {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.8rem;
      }

      .router-box {
        background: linear-gradient(135deg, rgba(30, 144, 255, 0.2), rgba(30, 144, 255, 0.1));
        border: 2px solid rgba(30, 144, 255, 0.5);
        border-radius: 8px;
        padding: 0.8rem 1.5rem;
        text-align: center;
        font-weight: 500;
        color: #FFFFFF;
        font-size: 0.9rem;
      }

      .model-tier {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.8rem;
        width: 100%;
      }

      .model-box {
        background: rgba(10, 25, 47, 0.8);
        border: 1px solid rgba(30, 144, 255, 0.3);
        border-radius: 6px;
        padding: 0.7rem;
        text-align: center;
      }

      .model-box.primary {
        border-color: rgba(30, 144, 255, 0.6);
        background: rgba(30, 144, 255, 0.15);
      }

      .model-box.secondary {
        border-color: rgba(100, 200, 255, 0.4);
      }

      .model-box.cloud {
        border-color: rgba(255, 200, 100, 0.4);
        background: rgba(255, 200, 100, 0.1);
      }

      .model-name {
        font-size: 0.8rem;
        font-weight: 500;
        color: #FFFFFF;
        margin-bottom: 0.2rem;
      }

      .model-desc {
        font-size: 0.6rem;
        color: #8B8680;
        line-height: 1.3;
      }

      .arrow-down {
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 10px solid rgba(30, 144, 255, 0.5);
      }

      .flow-chart {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 0.3rem;
        align-items: center;
      }

      .flow-step {
        background: rgba(10, 25, 47, 0.8);
        border: 1px solid rgba(30, 144, 255, 0.3);
        border-radius: 4px;
        padding: 0.4rem 0.3rem;
        font-size: 0.65rem;
        color: #B8B0A0;
        text-align: center;
      }

      .flow-arrow {
        color: rgba(30, 144, 255, 0.6);
        font-size: 0.8rem;
        text-align: center;
      }

      .agent-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.8rem;
      }

      .agent-card {
        background: rgba(10, 25, 47, 0.8);
        border: 1px solid rgba(30, 144, 255, 0.3);
        border-radius: 8px;
        padding: 0.8rem;
        text-align: center;
      }

      .agent-icon {
        font-size: 1.3rem;
        margin-bottom: 0.3rem;
      }

      .agent-name {
        font-size: 0.75rem;
        font-weight: 500;
        color: #FFFFFF;
        margin-bottom: 0.2rem;
      }

      .agent-role {
        font-size: 0.6rem;
        color: #8B8680;
        line-height: 1.3;
      }

      .stats-row {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.5rem;
      }

      .stat-box {
        text-align: center;
        padding: 0.8rem;
      }

      .stat-number {
        font-family: 'Playfair Display', serif;
        font-size: 2rem;
        color: #1E90FF;
        font-weight: 600;
      }

      .stat-label {
        font-size: 0.65rem;
        color: #8B8680;
        text-transform: uppercase;
        letter-spacing: 0.08em;
      }

      .openclaw-section {
        margin: 3rem 0;
      }

      .openclaw-section-header {
        font-family: 'Playfair Display', serif;
        font-size: clamp(1.5rem, 5vw, 2.5rem);
        font-weight: 500;
        letter-spacing: -0.01em;
        margin: 0 0 1.2rem 0;
        line-height: 1.2;
        color: #FFFFFF;
        text-shadow: 0 0 30px rgba(30, 144, 255, 0.2);
      }

      .openclaw-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
        margin: 1.2rem 0;
        justify-content: center;
      }

      .openclaw-tag {
        font-size: 0.65rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        padding: 0.3rem 0.6rem;
        background: rgba(30, 144, 255, 0.1);
        border: 1px solid rgba(30, 144, 255, 0.3);
        color: #5A8FC0;
        border-radius: 2px;
      }

      .openclaw-handle {
        text-align: center;
        margin: 2.5rem 0;
        font-family: 'Playfair Display', serif;
        font-size: 1rem;
        color: #8B8680;
        font-style: italic;
      }

      .openclaw-hero {
        width: 100%;
        margin-top: 2.5rem;
      }

      .hero-image-placeholder {
        width: 100%;
        aspect-ratio: 16/9;
        background: linear-gradient(135deg, rgba(5, 12, 28, 0.9) 0%, rgba(10, 25, 47, 0.95) 100%);
        border: 1px solid rgba(30, 144, 255, 0.2);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #5A8FC0;
        font-size: 0.75rem;
        letter-spacing: 0.08em;
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
        background-size: 30px 30px;
      }

      .hero-image-placeholder span {
        position: relative;
        z-index: 1;
      }

      .openclaw-footer {
        text-align: center;
        margin-top: 3rem;
        padding-top: 1.5rem;
        border-top: 1px solid rgba(30, 144, 255, 0.2);
        font-size: 0.75rem;
        color: #8B8680;
      }

      /* Tablet and up - slightly larger */
      @media (min-width: 640px) {
        .openclaw-two-col-text {
          font-size: 0.95rem;
          column-gap: 3rem;
        }
        
        .agent-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        
        .stats-row {
          grid-template-columns: repeat(4, 1fr);
        }
        
        .flow-chart {
          display: flex;
          justify-content: center;
          gap: 0.3rem;
        }
        
        .model-tier {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .model-box {
          min-width: 140px;
        }
      }

      /* Desktop */
      @media (min-width: 1024px) {
        .openclaw-container {
          padding: 4rem 2rem;
        }
        
        .openclaw-visual {
          padding: 2rem;
        }
        
        .openclaw-two-col-text {
          font-size: 1rem;
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
                  <div className="model-box secondary">
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
                The routing layer automatically selects the optimal model based on task 
                complexity, thermal constraints, and latency requirements. Local models 
                handle 90% of routine interactions, ensuring sub-5-second response times 
                and complete data privacy.
              </p>
              <p>
                When temperatures rise or tasks are lighter, the system falls back to smaller 
                Qwen variants. High-stakes reasoning routes to Claude, while vision tasks use Gemini.
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

          {/* Results Stats Visual */}
          <section className="openclaw-section">
            <h2 className="openclaw-section-header">RESULTS & ROADMAP</h2>
            
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
                <strong>Current:</strong> Single interface for 10+ AI models, sub-agent spawning 
                for parallel execution, 100% local inference for routine tasks, persistent memory 
                across sessions, and sub-5-second response times.
              </p>
              <p>
                <strong>Roadmap:</strong> Voice integration, Friday Command Center UI, AutoResearch 
                training swarms, calendar integration, and email automation with security tiering.
              </p>
            </div>
          </section>

          <div className="openclaw-hero">
            <div className="hero-image-placeholder">
              <span>[Architecture Viz]</span>
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
