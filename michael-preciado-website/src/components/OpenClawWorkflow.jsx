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

      .openclaw-visual {
        margin: 3rem 0;
        padding: 2rem;
        background: rgba(5, 12, 28, 0.6);
        border: 1px solid rgba(30, 144, 255, 0.2);
        border-radius: 12px;
      }

      .openclaw-visual-title {
        font-family: 'Playfair Display', serif;
        font-size: 1.2rem;
        color: #FFFFFF;
        text-align: center;
        margin-bottom: 1.5rem;
        letter-spacing: 0.05em;
      }

      .routing-diagram {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }

      .router-box {
        background: linear-gradient(135deg, rgba(30, 144, 255, 0.2), rgba(30, 144, 255, 0.1));
        border: 2px solid rgba(30, 144, 255, 0.5);
        border-radius: 8px;
        padding: 1rem 2rem;
        text-align: center;
        font-weight: 500;
        color: #FFFFFF;
        min-width: 200px;
      }

      .model-tier {
        display: flex;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
        width: 100%;
      }

      .model-box {
        background: rgba(10, 25, 47, 0.8);
        border: 1px solid rgba(30, 144, 255, 0.3);
        border-radius: 6px;
        padding: 0.8rem 1.2rem;
        text-align: center;
        min-width: 120px;
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
        font-size: 0.9rem;
        font-weight: 500;
        color: #FFFFFF;
        margin-bottom: 0.3rem;
      }

      .model-desc {
        font-size: 0.7rem;
        color: #8B8680;
      }

      .arrow-down {
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 12px solid rgba(30, 144, 255, 0.5);
      }

      .flow-chart {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        flex-wrap: wrap;
      }

      .flow-step {
        background: rgba(10, 25, 47, 0.8);
        border: 1px solid rgba(30, 144, 255, 0.3);
        border-radius: 6px;
        padding: 0.6rem 1rem;
        font-size: 0.8rem;
        color: #B8B0A0;
        text-align: center;
      }

      .flow-arrow {
        color: rgba(30, 144, 255, 0.6);
        font-size: 1.2rem;
      }

      .agent-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
      }

      .agent-card {
        background: rgba(10, 25, 47, 0.8);
        border: 1px solid rgba(30, 144, 255, 0.3);
        border-radius: 8px;
        padding: 1rem;
        text-align: center;
      }

      .agent-icon {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }

      .agent-name {
        font-size: 0.8rem;
        font-weight: 500;
        color: #FFFFFF;
        margin-bottom: 0.3rem;
      }

      .agent-role {
        font-size: 0.65rem;
        color: #8B8680;
        line-height: 1.4;
      }

      .stats-row {
        display: flex;
        justify-content: space-around;
        gap: 1rem;
        flex-wrap: wrap;
      }

      .stat-box {
        text-align: center;
        padding: 1rem;
      }

      .stat-number {
        font-family: 'Playfair Display', serif;
        font-size: 2.5rem;
        color: #1E90FF;
        font-weight: 600;
      }

      .stat-label {
        font-size: 0.75rem;
        color: #8B8680;
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
        color: #FFFFFF;
        text-shadow: 0 0 30px rgba(30, 144, 255, 0.2);
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
        
        .agent-grid {
          grid-template-columns: repeat(2, 1fr);
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
                <div className="agent-role">Unified AI Persona & Command Center</div>
              </div>
              <div className="agent-card">
                <div className="agent-icon">💡</div>
                <div className="agent-name">CREATOR</div>
                <div className="agent-role">Business Strategy & Content</div>
              </div>
              <div className="agent-card">
                <div className="agent-icon">🔬</div>
                <div className="agent-name">RESEARCH</div>
                <div className="agent-role">Technical Deep-Dives</div>
              </div>
              <div className="agent-card">
                <div className="agent-icon">📈</div>
                <div className="agent-name">STOCKS</div>
                <div className="agent-role">Market Analysis</div>
              </div>
            </div>
          </div>

          <div className="openclaw-handle">@preciado.tech</div>

          {/* Model Routing Visual */}
          <section className="openclaw-section">
            <h2 className="openclaw-section-header">MODEL ROUTING</h2>
            
            <div className="openclaw-visual">
              <div className="openclaw-visual-title">Intelligent Model Selection</div>
              <div className="routing-diagram">
                <div className="router-box">FRIDAY Router</div>
                <div className="arrow-down"></div>
                
                <div className="model-tier">
                  <div className="model-box primary">
                    <div className="model-name">Qwen3.5-9B</div>
                    <div className="model-desc">Default · Local · 90% of tasks</div>
                  </div>
                  <div className="model-box secondary">
                    <div className="model-name">Qwen3.5-4B/2B</div>
                    <div className="model-desc">Fallback · Thermal mgmt</div>
                  </div>
                </div>
                
                <div className="arrow-down"></div>
                
                <div className="model-tier">
                  <div className="model-box cloud">
                    <div className="model-name">Claude Opus</div>
                    <div className="model-desc">Complex reasoning</div>
                  </div>
                  <div className="model-box cloud">
                    <div className="model-name">Claude Code</div>
                    <div className="model-desc">Coding tasks</div>
                  </div>
                  <div className="model-box cloud">
                    <div className="model-name">Gemini</div>
                    <div className="model-desc">Vision & images</div>
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
                Qwen variants. High-stakes reasoning and coding tasks route to Claude, while 
                vision tasks use Gemini.
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
                <span className="flow-arrow">→</span>
                <div className="flow-step">OpenClaw</div>
                <span className="flow-arrow">→</span>
                <div className="flow-step">FRIDAY</div>
                <span className="flow-arrow">→</span>
                <div className="flow-step">Router</div>
                <span className="flow-arrow">→</span>
                <div className="flow-step">Model</div>
                <span className="flow-arrow">→</span>
                <div className="flow-step">Telegram</div>
                <span className="flow-arrow">→</span>
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
                  <div className="stat-label">Avg Response</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">90%</div>
                  <div className="stat-label">Local Inference</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">∞</div>
                  <div className="stat-label">Memory</div>
                </div>
              </div>
            </div>

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
