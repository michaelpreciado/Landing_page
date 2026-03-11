import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MatrixRainBackground from './MatrixRainBackground';
import PageTransition from './PageTransition.jsx';
import ReturnButton from './ReturnButton.jsx';
import useTypewriter from '../utils/hooks/useTypewriter';
import { autoApplyLiquidGlass } from '../utils/liquidGlass.js';

function BlogArticle() {
  const { id } = useParams();
  const typedTitle = useTypewriter('BUILDING FRIDAY', { speed: 40, scrambleOnMount: true });

  useEffect(() => {
    autoApplyLiquidGlass();

    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500&display=swap');
      
      .article-editorial {
        min-height: 100vh;
        position: relative;
        color: #E8E4DC;
        font-family: 'Inter', sans-serif;
        font-weight: 300;
        line-height: 1.7;
      }

      .article-container {
        max-width: 900px;
        margin: 0 auto;
        padding: 3rem 1.25rem;
        position: relative;
        z-index: 1;
      }

      .article-header {
        text-align: center;
        margin-bottom: 2rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid rgba(30, 144, 255, 0.3);
      }

      .article-meta {
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

      .article-title {
        font-family: 'Playfair Display', serif;
        font-size: clamp(1.8rem, 7vw, 3.5rem);
        font-weight: 500;
        letter-spacing: -0.01em;
        margin: 0;
        color: #FFFFFF;
        line-height: 1.1;
        text-shadow: 0 0 30px rgba(30, 144, 255, 0.3);
      }

      .article-date {
        text-align: center;
        font-size: 0.7rem;
        color: #8B8680;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin-bottom: 2rem;
      }

      .article-hero {
        width: 100%;
        aspect-ratio: 21/9;
        background: rgba(5, 12, 28, 0.6);
        border: 1px solid rgba(30, 144, 255, 0.2);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
        color: #5A8FC0;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        margin-bottom: 2rem;
      }

      .article-two-col {
        column-count: 2;
        column-gap: 1.5rem;
        text-align: left;
        color: #B8B0A0;
        font-size: 0.8rem;
        line-height: 1.6;
        margin: 2rem 0;
      }

      .article-two-col p {
        margin: 0 0 1rem 0;
        break-inside: avoid;
      }

      .article-section {
        margin: 2.5rem 0;
      }

      .article-section-header {
        font-family: 'Playfair Display', serif;
        font-size: clamp(1.3rem, 4vw, 2.2rem);
        font-weight: 500;
        letter-spacing: -0.01em;
        margin: 0 0 1rem 0;
        line-height: 1.2;
        color: #FFFFFF;
        text-shadow: 0 0 20px rgba(30, 144, 255, 0.2);
      }

      .article-image {
        width: 100%;
        aspect-ratio: 16/9;
        background: rgba(10, 25, 47, 0.6);
        border: 1px solid rgba(30, 144, 255, 0.2);
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.7rem;
        color: #5A8FC0;
        text-transform: uppercase;
        margin: 1.5rem 0;
      }

      .article-handle {
        text-align: center;
        margin: 2rem 0;
        font-family: 'Playfair Display', serif;
        font-size: 0.95rem;
        color: #8B8680;
        font-style: italic;
      }

      .article-footer {
        text-align: center;
        margin-top: 2.5rem;
        padding-top: 1.25rem;
        border-top: 1px solid rgba(30, 144, 255, 0.15);
        font-size: 0.7rem;
        color: #8B8680;
      }

      @media (min-width: 640px) {
        .article-container {
          padding: 3rem 2rem;
        }
        
        .article-two-col {
          font-size: 0.9rem;
          column-gap: 2rem;
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
      <ReturnButton to="/blog" />
      
      <div className="article-editorial">
        <article className="article-container">
          <header className="article-header">
            <div className="article-meta">
              <span>ARTICLE</span>
              <span>AI</span>
            </div>
            <h1 className="article-title">{typedTitle}</h1>
          </header>

          <div className="article-date">March 10, 2026 · 5 min read</div>

          <div className="article-hero">[Hero Image]</div>

          <section className="article-two-col">
            <p>
              Building a personal AI operating system starts with a clear architecture. 
              FRIDAY began as an experiment in local inference, evolved into a full 
              orchestration layer, and continues to grow with each new capability.
            </p>
            <p>
              The core principle: privacy-first design with cloud fallback. Local models 
              handle routine tasks, while complex reasoning routes to specialized providers. 
              All memory persists in an Obsidian vault, creating a searchable knowledge graph.
            </p>
          </section>

          <section className="article-section">
            <h2 className="article-section-header">THE FOUNDATION</h2>
            <div className="article-two-col">
              <p>
                OpenClaw provides the backbone — message routing, session management, 
                and tool integration. Telegram serves as the primary interface, with 
                voice integration planned for the next iteration.
              </p>
              <p>
                The FRIDAY persona unifies the experience. Rather than switching between 
                chatbots, you interact with one consistent intelligence that delegates 
                to specialized sub-agents as needed.
              </p>
            </div>
            <div className="article-image">[Architecture Diagram]</div>
          </section>

          <section className="article-section">
            <h2 className="article-section-header">LESSONS LEARNED</h2>
            <div className="article-two-col">
              <p>
                Thermal management proved critical. The RTX 4090 throttles without 
                aggressive cooling, so custom curves and liquid cooling became essential. 
                Model selection depends as much on temperature as capability.
              </p>
              <p>
                Memory architecture matters more than expected. Without persistent storage, 
                each session starts fresh. Obsidian integration transformed FRIDAY from 
                a stateless tool into a true assistant with continuity.
              </p>
            </div>
          </section>

          <div className="article-handle">@preciado.tech</div>

          <footer className="article-footer">
            <p>More articles on AI, hardware, and automation</p>
          </footer>
        </article>
      </div>
    </PageTransition>
  );
}

export default BlogArticle;
