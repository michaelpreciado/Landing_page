import React, { useEffect } from 'react';
import MatrixRainBackground from './MatrixRainBackground';
import PageTransition from './PageTransition.jsx';
import ReturnButton from './ReturnButton.jsx';
import useTypewriter from '../utils/hooks/useTypewriter';
import { autoApplyLiquidGlass } from '../utils/liquidGlass.js';

function OpenClawWorkflow() {
  const typedTitle = useTypewriter('My OpenClaw Workflow 🦞', { speed: 35, scrambleOnMount: true });

  useEffect(() => {
    autoApplyLiquidGlass();

    const style = document.createElement('style');
    style.textContent = `
      .openclaw-container {
        max-width: 980px;
        margin: 0 auto;
        padding: 6rem 1.25rem 2.5rem;
      }

      .openclaw-header {
        text-align: center;
        margin-bottom: 2rem;
      }

      .openclaw-title {
        margin: 0;
        font-size: clamp(2rem, 5vw, 3.2rem);
        font-weight: 800;
        color: var(--light-text);
      }

      .openclaw-subtitle {
        margin: 0.9rem auto 0;
        max-width: 62ch;
        color: var(--medium-text);
        line-height: 1.7;
      }

      .openclaw-terminal-card {
        border: 1px solid var(--border-color);
        border-radius: 18px;
        overflow: hidden;
        background: linear-gradient(180deg, rgba(8, 18, 38, 0.9), rgba(2, 8, 19, 0.92));
        box-shadow: 0 20px 38px rgba(0, 0, 0, 0.45);
      }

      .terminal-window-header {
        padding: 1rem;
        border-bottom: 1px solid rgba(30, 144, 255, 0.35);
        background: rgba(10, 25, 47, 0.82);
      }

      .terminal-window-buttons {
        display: flex;
        gap: 0.55rem;
      }

      .terminal-window-buttons span {
        width: 13px;
        height: 13px;
        border-radius: 999px;
        display: inline-block;
      }

      .terminal-window-buttons .red { background: #ff5f57; }
      .terminal-window-buttons .yellow { background: #ffbd2e; }
      .terminal-window-buttons .green { background: #28c840; }

      .openclaw-content {
        padding: 1.6rem 1.4rem 2rem;
      }

      .openclaw-template-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1rem;
      }

      .template-block {
        border: 1px solid rgba(30, 144, 255, 0.24);
        border-radius: 14px;
        background: rgba(5, 12, 28, 0.72);
        padding: 1rem 1rem 1.1rem;
      }

      .template-block h2 {
        margin: 0 0 0.7rem;
        color: var(--light-text);
        font-size: 1rem;
        letter-spacing: 0.01em;
      }

      .template-block p,
      .template-block li {
        color: var(--medium-text);
        line-height: 1.65;
        margin: 0;
      }

      .template-block ul {
        margin: 0;
        padding-left: 1.1rem;
      }

      .template-block code {
        background: rgba(30, 144, 255, 0.15);
        padding: 0.15rem 0.4rem;
        border-radius: 4px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85em;
        color: #1E90FF;
      }

      .openclaw-actions {
        display: flex;
        justify-content: center;
        margin-top: 1.5rem;
        gap: 1rem;
        flex-wrap: wrap;
      }

      .openclaw-actions a {
        text-decoration: none;
      }

      .openclaw-actions button {
        cursor: pointer;
      }

      .architecture-diagram {
        grid-column: 1 / -1;
        text-align: center;
        padding: 1.5rem;
        background: rgba(5, 12, 28, 0.5);
        border-radius: 14px;
        border: 1px dashed rgba(30, 144, 255, 0.3);
      }

      .architecture-diagram img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        opacity: 0.8;
      }

      .placeholder-text {
        color: var(--medium-text);
        font-style: italic;
        font-size: 0.9rem;
      }

      @media (max-width: 760px) {
        .openclaw-template-grid {
          grid-template-columns: 1fr;
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
      <MatrixRainBackground />
      <ReturnButton to="/projects" />

      <article className="openclaw-container">
        <header className="openclaw-header">
          <h1 className="openclaw-title">{typedTitle}</h1>
          <p className="openclaw-subtitle">
            A unified AI operating system built on OpenClaw, featuring a custom persona (FRIDAY), 
            sub-agent orchestration, local/cloud model routing, and seamless Telegram integration 
            for autonomous task execution.
          </p>
        </header>

        <section className="openclaw-terminal-card" aria-label="OpenClaw workflow architecture">
          <div className="terminal-window-header">
            <div className="terminal-window-buttons">
              <span className="red"></span>
              <span className="yellow"></span>
              <span className="green"></span>
            </div>
          </div>

          <div className="openclaw-content">
            <div className="openclaw-template-grid">
              <section className="template-block">
                <h2>&gt; Project Goal</h2>
                <p>
                  Build a personal AI operating system that orchestrates multiple AI models, 
                  manages sub-agents for specialized tasks, maintains long-term memory via Obsidian, 
                  and provides a unified interface through Telegram for seamless human-AI collaboration.
                </p>
              </section>

              <section className="template-block">
                <h2>&gt; Core Architecture</h2>
                <ul>
                  <li><strong>FRIDAY</strong> — Unified AI persona and command center</li>
                  <li><strong>Sub-Agents</strong> — CREATOR, RESEARCH, STOCKS, ENGINEERING</li>
                  <li><strong>Agent Swarms</strong> — Parallel task execution workers</li>
                  <li><strong>Model Router</strong> — Local (Ollama) + Cloud selection</li>
                  <li><strong>Memory System</strong> — Obsidian vault integration</li>
                </ul>
              </section>

              <section className="template-block">
                <h2>&gt; Workflow Flow</h2>
                <ul>
                  <li><strong>Input:</strong> Telegram message → OpenClaw gateway</li>
                  <li><strong>Classify:</strong> FRIDAY detects task type and priority</li>
                  <li><strong>Route:</strong> Select model (local Qwen3.5 or cloud)</li>
                  <li><strong>Execute:</strong> Spawn sub-agents or swarms as needed</li>
                  <li><strong>Deliver:</strong> Response via Telegram + log to Obsidian</li>
                </ul>
              </section>

              <section className="template-block">
                <h2>&gt; Stack & Integrations</h2>
                <p>
                  <code>OpenClaw</code> <code>Telegram</code> <code>Obsidian</code> <code>Ollama</code>{' '}
                  <code>LM Studio</code> <code>Node.js</code> <code>Arch Linux</code>
                </p>
                <p style={{ marginTop: '0.5rem' }}>
                  Local models: Qwen3.5 series (0.8B–9B). Cloud: Claude, Gemini, Kimi. 
                  Skills: weather, GitHub, 1Password, web search, coding agents.
                </p>
              </section>

              <section className="template-block">
                <h2>&gt; Model Routing Policy</h2>
                <ul>
                  <li><strong>Default:</strong> Local Qwen3.5-9B (cool temps + performance)</li>
                  <li><strong>Fallback:</strong> Qwen3.5-4B, 2B, 0.8B (thermal management)</li>
                  <li><strong>High-stakes:</strong> Claude Opus (major tasks)</li>
                  <li><strong>Coding:</strong> Claude Code via ACP harness</li>
                  <li><strong>Images:</strong> Gemini Nano Banana Pro</li>
                </ul>
              </section>

              <section className="template-block">
                <h2>&gt; Daily Automation</h2>
                <ul>
                  <li><strong>Heartbeat:</strong> Periodic system health checks</li>
                  <li><strong>Memory:</strong> Auto-archive to Obsidian vault</li>
                  <li><strong>Stocks:</strong> Watchlist monitoring (TSLA, NVDA, etc.)</li>
                  <li><strong>Research:</strong> AutoResearch integration for LLM experiments</li>
                </ul>
              </section>

              <section className="template-block">
                <h2>&gt; Results & Metrics</h2>
                <ul>
                  <li>Single interface for 10+ AI models</li>
                  <li>Sub-agent spawning for parallel execution</li>
                  <li>100% local inference for routine tasks</li>
                  <li>Persistent memory across sessions</li>
                  <li>Sub-5-second response time (local)</li>
                </ul>
              </section>

              <section className="template-block">
                <h2>&gt; Roadmap</h2>
                <ul>
                  <li>Voice integration with wake word detection</li>
                  <li>Friday Command Center UI (React + Three.js)</li>
                  <li>AutoResearch overnight training swarms</li>
                  <li>Calendar integration (khal/gcalcli)</li>
                  <li>Email automation with security tiering</li>
                </ul>
              </section>

              <section className="architecture-diagram">
                <p className="placeholder-text">
                  [Architecture Diagram Placeholder — System flowchart showing FRIDAY → Sub-Agents → Model Router → Local/Cloud Models → Telegram/Obsidian]
                </p>
              </section>
            </div>

            <div className="openclaw-actions">
              <a href="https://openclaw.ai" target="_blank" rel="noopener noreferrer">
                <button className="project-button project-button-primary">OpenClaw Docs</button>
              </a>
              <a href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener noreferrer">
                <button className="project-button project-button-primary">GitHub</button>
              </a>
            </div>
          </div>
        </section>
      </article>
    </PageTransition>
  );
}

export default OpenClawWorkflow;
