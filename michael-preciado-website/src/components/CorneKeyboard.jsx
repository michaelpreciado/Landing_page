import React, { useEffect } from 'react';
import MatrixRainBackground from './MatrixRainBackground';
import PageTransition from './PageTransition.jsx';
import ReturnButton from './ReturnButton.jsx';
import useTypewriter from '../utils/hooks/useTypewriter';
import { autoApplyLiquidGlass } from '../utils/liquidGlass.js';

function CorneKeyboard() {
  const typedTitle = useTypewriter('CORNE KEYBOARD', { speed: 40, scrambleOnMount: true });

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
              A split ergonomic mechanical keyboard designed for reduced strain during 
              long coding sessions. The Corne layout minimizes finger travel while 
              maintaining full functionality.
            </p>
            <p>
              Built with hot-swappable switches, wireless connectivity, and a custom 
              firmware configuration optimized for development workflows and AI-assisted 
              coding.
            </p>
          </section>

          <div className="project-visual">
            <div className="project-visual-title">Build Specifications</div>
            <div className="project-specs">
              <div className="spec-card">
                <div className="spec-label">Layout</div>
                <div className="spec-value">Corne v3</div>
              </div>
              <div className="spec-card">
                <div className="spec-label">Switches</div>
                <div className="spec-value">Gateron Oil King</div>
              </div>
              <div className="spec-card">
                <div className="spec-label">Keycaps</div>
                <div className="spec-value">PBT XDA Profile</div>
              </div>
              <div className="spec-card">
                <div className="spec-label">Connection</div>
                <div className="spec-value">Wireless BLE</div>
              </div>
            </div>
          </div>

          <div className="project-handle">@preciado.tech</div>

          <section className="project-section">
            <h2 className="project-section-header">ERGONOMICS</h2>
            <div className="project-two-col">
              <p>
                The split design allows natural shoulder width positioning, reducing 
                strain on wrists and forearms. Columnar stagger matches finger lengths, 
                minimizing extension and flexion during typing.
              </p>
              <p>
                Three thumb keys per hand replace the traditional spacebar, putting 
                modifier keys within easy reach. Layer switching enables access to 
                symbols and functions without leaving the home row.
              </p>
            </div>
          </section>

          <section className="project-section">
            <h2 className="project-section-header">FIRMWARE</h2>
            <div className="project-two-col">
              <p>
                Running ZMK firmware for wireless functionality with excellent battery 
                life. Custom keymap includes dedicated layers for coding symbols, 
                navigation, and media controls.
              </p>
              <p>
                Tap-hold configurations enable dual-function keys — tap for letters, 
                hold for modifiers. Combos provide quick access to common shortcuts 
                like copy, paste, and terminal commands.
              </p>
            </div>
          </section>

          <section className="project-section">
            <h2 className="project-section-header">WORKFLOW</h2>
            <div className="project-two-col">
              <p>
                The keyboard integrates seamlessly with the FRIDAY workflow. Dedicated 
                keys trigger voice input, switch between AI models, and execute common 
                OpenClaw commands without typing.
              </p>
              <p>
                OLED displays on each half show current layer, connection status, and 
                battery level. The compact footprint leaves desk space for notes and 
                devices while maintaining full productivity.
              </p>
            </div>
          </section>

          <footer className="project-footer">
            <p>Built with ZMK — zmk.dev</p>
          </footer>
        </article>
      </div>
    </PageTransition>
  );
}

export default CorneKeyboard;
