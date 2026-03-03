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
            A dedicated project container using an article-style layout. This is a polished placeholder template ready
            for your final OpenClaw case study content.
          </p>
        </header>

        <section className="openclaw-terminal-card" aria-label="OpenClaw workflow project template">
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
                <p>[Placeholder — Define the problem, target user, and expected business or technical outcome.]</p>
              </section>

              <section className="template-block">
                <h2>&gt; Workflow Steps</h2>
                <ul>
                  <li>[Placeholder — Step 1: Input capture and validation]</li>
                  <li>[Placeholder — Step 2: OpenClaw processing + automations]</li>
                  <li>[Placeholder — Step 3: Output delivery + quality checks]</li>
                </ul>
              </section>

              <section className="template-block">
                <h2>&gt; Stack & Integrations</h2>
                <p>[Placeholder — List OpenClaw components, APIs, orchestration tools, and storage integrations.]</p>
              </section>

              <section className="template-block">
                <h2>&gt; Results & Next Iteration</h2>
                <p>[Placeholder — Add baseline metrics, wins, lessons learned, and roadmap items.]</p>
              </section>
            </div>

            <div className="openclaw-actions">
              <button className="project-button project-button-primary">Template Preview (Placeholder)</button>
            </div>
          </div>
        </section>
      </article>
    </PageTransition>
  );
}

export default OpenClawWorkflow;
