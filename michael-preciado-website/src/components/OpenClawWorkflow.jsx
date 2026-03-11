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
        font-family: 'Fira Code', monospace;
        font-size: 0.85em;
        color: #1e90ff;
      }

      .openclaw-actions {
        display: flex;
        justify-content: center;
        margin-top: 1.5rem;
      }

      .openclaw-actions a {
        text-decoration: none;
      }

      .openclaw-actions button {
        cursor: default;
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

      .architecture-placeholder {
        color: var(--medium-text);
        font-style: italic;
        padding: 2rem;
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
            A unified AI operating system built on OpenClaw. One intelligent persona (FRIDAY) 
            orchestrates sub-agents, swarms, and local/cloud models to automate research, 
            engineering, and daily workflows.
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
                <h2>&gt; System Architecture</h2>
                <p>
                  <strong>FRIDAY</strong> serves as the unified intelligence layer — one voice 
                  that orchestrates specialized sub-agents and temporary swarms. All execution 
                  flows through a safety tier system (0-3) with explicit confirmations for 
                  high-risk operations.
                </p>
              </section>

              <section className="template-block">
                <h2>&gt; Sub-Agent Ecosystem</h2>
                <ul>
                  <li><strong>FRIDAY.CREATOR</strong> — Strategy & monetization</li>
                  <li><strong>FRIDAY.RESEARCH</strong> — Technical deep-dives</li>
                  <li><strong>FRIDAY.STOCKS</strong> — Market analysis</li>
                  <li><strong>FRIDAY.ENGINEERING</strong> — Code & robotics</li>
                </ul>
              </section>

              <section className="template-block">
                <h2>&gt; Model Routing Strategy</h2>
                <p>
                  <strong>Local-first policy:</strong> Qwen 3.5 models (0.8B–9B) for routine tasks. 
                  Cloud models (Kimi K2.5, Claude) for complex reasoning. Local Ollama swarm 
                  with <code>deepseek-r1:14b</code> and <code>qwen2.5-coder:14b</code> for 
                  parallel execution.
                </p>
              </section>

              <section className="template-block">
                <h2>&gt; Communication Layer</h2>
                <ul>
                  <li><strong>Primary:</strong> Telegram (text + voice)</li>
                  <li><strong>Desktop:</strong> Wake word "Friday" + Whisper STT</li>
                  <li><strong>Memory:</strong> Obsidian vault with daily logs</li>
                  <li><strong>UI:</strong> Friday Command Center (React + Vite)</li>
                </ul>
              </section>

              <section className="template-block">
                <h2>&gt; Daily Workflow Flow</h2>
                <ul>
                  <li><strong>Heartbeat checks</strong> — Calendar, stocks, news (2-4× daily)</li>
                  <li><strong>Task ingestion</strong> — Telegram → FRIDAY classification</li>
                  <li><strong>Agent dispatch</strong> — Spawn swarms or sub-agents</li>
                  <li><strong>Execution & log</strong> — Output + Obsidian archive</li>
                </ul>
              </section>

              <section className="template-block">
                <h2>&gt; Safety & Permissions</h2>
                <p>
                  <strong>Tier 0:</strong> Read-only (default)<br/>
                  <strong>Tier 1:</strong> File creation, safe commands<br/>
                  <strong>Tier 2:</strong> Installs, config changes (confirm)<br/>
                  <strong>Tier 3:</strong> Sudo, deletes, financial (explicit typed confirm)
                </p>
              </section>

              <section className="architecture-diagram">
                <div className="architecture-placeholder">
                  [Architecture Diagram Placeholder]<br/>
                  <small>FRIDAY → Sub-Agents → Swarms → Model Router → Execution → Obsidian Log</small>
                </div>
              </section>
            </div>

            <div className="openclaw-actions">
              <button className="project-button project-button-primary">System Documentation</button>
            </div>
          </div>
        </section>
      </article>
    </PageTransition>
  );
}

export default OpenClawWorkflow;
