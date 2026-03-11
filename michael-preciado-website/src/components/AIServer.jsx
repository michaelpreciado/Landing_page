import React, { useEffect } from 'react';
import MatrixRainBackground from './MatrixRainBackground';
import PageTransition from './PageTransition.jsx';
import ReturnButton from './ReturnButton.jsx';
import useTypewriter from '../utils/hooks/useTypewriter';
import { autoApplyLiquidGlass } from '../utils/liquidGlass.js';

function AIServer() {
  const typedTitle = useTypewriter('LOCAL AI SERVER', { speed: 40, scrambleOnMount: true });

  useEffect(() => {
    autoApplyLiquidGlass();

    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500&display=swap');
      
      .project-editorial {
        min-height: 100vh;
        position: relative;
        color: #E8E4DC;
        font-family: 'Inter', sans-serif;
        font-weight: 300;
        line-height: 1.7;
      }

      .project-container {
        max-width: 900px;
        margin: 0 auto;
        padding: 3rem 1.25rem;
        position: relative;
        z-index: 1;
      }

      .project-header {
        text-align: center;
        margin-bottom: 2rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid rgba(30, 144, 255, 0.3);
      }

      .project-meta {
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

      .project-title {
        font-family: 'Playfair Display', serif;
        font-size: clamp(1.8rem, 7vw, 3.5rem);
        font-weight: 500;
        letter-spacing: -0.01em;
        margin: 0;
        color: #FFFFFF;
        line-height: 1.1;
        text-shadow: 0 0 30px rgba(30, 144, 255, 0.3);
      }

      .project-two-col {
        column-count: 2;
        column-gap: 1.5rem;
        text-align: left;
        color: #B8B0A0;
        font-size: 0.8rem;
        line-height: 1.6;
        margin: 2rem 0;
      }

      .project-two-col p {
        margin: 0 0 1rem 0;
        break-inside: avoid;
      }

      .project-visual {
        margin: 2rem 0;
        padding: 1.25rem;
        background: rgba(5, 12, 28, 0.5);
        border: 1px solid rgba(30, 144, 255, 0.15);
        border-radius: 10px;
      }

      .project-visual-title {
        font-family: 'Playfair Display', serif;
        font-size: 1rem;
        color: #FFFFFF;
        text-align: center;
        margin-bottom: 1rem;
        letter-spacing: 0.03em;
      }

      .project-section {
        margin: 2.5rem 0;
      }

      .project-section-header {
        font-family: 'Playfair Display', serif;
        font-size: clamp(1.3rem, 4vw, 2.2rem);
        font-weight: 500;
        letter-spacing: -0.01em;
        margin: 0 0 1rem 0;
        line-height: 1.2;
        color: #FFFFFF;
        text-shadow: 0 0 20px rgba(30, 144, 255, 0.2);
      }

      .project-specs {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.6rem;
      }

      .spec-card {
        background: rgba(10, 25, 47, 0.6);
        border: 1px solid rgba(30, 144, 255, 0.25);
        border-radius: 6px;
        padding: 0.7rem;
        text-align: center;
      }

      .spec-label {
        font-size: 0.6rem;
        color: #8B8680;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        margin-bottom: 0.2rem;
      }

      .spec-value {
        font-size: 0.8rem;
        font-weight: 500;
        color: #FFFFFF;
      }

      .project-handle {
        text-align: center;
        margin: 2rem 0;
        font-family: 'Playfair Display', serif;
        font-size: 0.95rem;
        color: #8B8680;
        font-style: italic;
      }

      .project-footer {
        text-align: center;
        margin-top: 2.5rem;
        padding-top: 1.25rem;
        border-top: 1px solid rgba(30, 144, 255, 0.15);
        font-size: 0.7rem;
        color: #8B8680;
      }

      @media (min-width: 640px) {
        .project-container {
          padding: 3rem 2rem;
        }
        
        .project-two-col {
          font-size: 0.9rem;
          column-gap: 2rem;
        }
        
        .project-specs {
          grid-template-columns: repeat(4, 1fr);
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
      
      <div className="project-editorial">
        <article className="project-container">
          <header className="project-header">
            <div className="project-meta">
              <span>PROJECT</span>
              <span>HARDWARE</span>
            </div>
            <h1 className="project-title">{typedTitle}</h1>
          </header>

          <section className="project-two-col">
            <p>
              A dedicated local AI server powering the FRIDAY operating system. Built for 
              high-performance inference with thermal management and 24/7 reliability.
            </p>
            <p>
              The system runs entirely on local hardware, ensuring complete data privacy 
              while delivering sub-5-second response times for all AI operations.
            </p>
          </section>

          <div className="project-visual">
            <div className="project-visual-title">Server Specifications</div>
            <div className="project-specs">
              <div className="spec-card">
                <div className="spec-label">GPU</div>
                <div className="spec-value">NVIDIA RTX 4090</div>
              </div>
              <div className="spec-card">
                <div className="spec-label">CPU</div>
                <div className="spec-value">AMD Ryzen 9 7950X</div>
              </div>
              <div className="spec-card">
                <div className="spec-label">RAM</div>
                <div className="spec-value">64GB DDR5</div>
              </div>
              <div className="spec-card">
                <div className="spec-label">Storage</div>
                <div className="spec-value">2TB NVMe SSD</div>
              </div>
            </div>
          </div>

          <div className="project-handle">@preciado.tech</div>

          <section className="project-section">
            <h2 className="project-section-header">ARCHITECTURE</h2>
            <div className="project-two-col">
              <p>
                The server runs Arch Linux with a custom-optimized kernel for AI workloads. 
                Ollama serves local models while LM Studio provides a management interface. 
                Docker containers isolate services for security and reproducibility.
              </p>
              <p>
                Thermal management is critical — custom fan curves and liquid cooling keep 
                the RTX 4090 under 75°C during sustained inference. Power draw peaks at 450W 
                during heavy loads, averaging 200W during normal operation.
              </p>
            </div>
          </section>

          <section className="project-section">
            <h2 className="project-section-header">SOFTWARE STACK</h2>
            <div className="project-two-col">
              <p>
                OpenClaw orchestrates the entire system, routing requests between Telegram 
                and local models. The FRIDAY persona runs as the primary interface, with 
                sub-agents spawning as needed for specialized tasks.
              </p>
              <p>
                Obsidian vaults store conversation history and system logs. Automated backups 
                sync to encrypted cloud storage nightly. The entire stack is reproducible 
                via Infrastructure as Code configurations.
              </p>
            </div>
          </section>

          <section className="project-section">
            <h2 className="project-section-header">PERFORMANCE</h2>
            <div className="project-two-col">
              <p>
                Qwen3.5-9B generates tokens at 45 tok/sec. Smaller models hit 120+ tok/sec. 
                Concurrent requests are batched for efficiency, supporting up to 4 simultaneous 
                users without latency degradation.
              </p>
              <p>
                Power consumption averages 200W with peaks at 450W. Monthly operating cost 
                is approximately $25 in electricity. The system has maintained 99.9% uptime 
                since deployment.
              </p>
            </div>
          </section>

          <footer className="project-footer">
            <p>Built with OpenClaw — openclaw.ai</p>
          </footer>
        </article>
      </div>
    </PageTransition>
  );
}

export default AIServer;
