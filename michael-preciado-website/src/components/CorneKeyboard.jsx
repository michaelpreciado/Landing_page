import React, { useEffect } from 'react';
import MatrixRainBackground from './MatrixRainBackground';
import PageTransition from './PageTransition.jsx';
import ReturnButton from './ReturnButton.jsx';
import LazyImage from './LazyImage';
import useTypewriter from '../hooks/useTypewriter';
import { autoApplyLiquidGlass } from '../utils/liquidGlass.js';

function CorneKeyboard() {
  const typedTitle = useTypewriter("Corne Keyboard Build", { speed: 35, scrambleOnMount: true });

  useEffect(() => {
    autoApplyLiquidGlass();
    
    // Reading progress indicator
    const updateReadingProgress = () => {
      const article = document.querySelector('.corne-build-container');
      const progressBar = document.querySelector('.reading-progress');
      
      if (article && progressBar) {
        const articleHeight = article.offsetHeight;
        const articleTop = article.offsetTop;
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        
        const progress = Math.min(
          Math.max((scrollPosition - articleTop + windowHeight) / articleHeight, 0),
          1
        );
        
        progressBar.style.transform = `scaleX(${progress})`;
      }
    };

    window.addEventListener('scroll', updateReadingProgress);
    updateReadingProgress(); // Initial call
    
    const style = document.createElement('style');
    style.textContent = `
      /* === ENHANCED CORNE BUILD STYLES === */
      .corne-build-container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 6rem 2rem 2rem;
        line-height: 1.8;
        font-family: 'Inter', var(--font-sans);
      }

      /* Magazine-style article header */
      .corne-article-header {
        text-align: center;
        margin-bottom: 4rem;
        padding: 3rem 0;
        border-bottom: 2px solid var(--border-color);
        position: relative;
      }

      .corne-article-header::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 4px;
        background: linear-gradient(90deg, var(--primary-accent), var(--secondary-accent));
        border-radius: 2px;
      }

      .build-title {
        font-size: clamp(2rem, 5vw, 3.5rem);
        font-weight: 800;
        text-align: center;
        margin-bottom: 1.5rem;
        background: linear-gradient(135deg, var(--light-text), var(--secondary-accent));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        line-height: 1.2;
      }

      .corne-meta {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.5rem;
        margin-bottom: 2rem;
        font-size: 0.9rem;
        color: var(--medium-text);
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .meta-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      /* Enhanced hero image */
      .hero-image-container {
        margin: 3rem 0 4rem;
        text-align: center;
      }

      .hero-image-frame {
        display: inline-block;
        position: relative;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 
          0 20px 40px rgba(0, 0, 0, 0.3),
          0 0 0 1px rgba(30, 144, 255, 0.2);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        max-width: 100%;
        width: 100%;
      }

      .hero-image-frame img {
        width: 100% !important;
        height: auto !important;
        display: block;
      }

      .hero-image-frame:hover {
        transform: translateY(-8px);
        box-shadow: 
          0 30px 60px rgba(0, 0, 0, 0.4),
          0 0 0 1px rgba(30, 144, 255, 0.4);
      }

      /* Premium section styling */
      .build-section {
        margin-bottom: 4rem;
        padding: 3rem 0;
        position: relative;
      }

      .build-section:not(:last-child) {
        border-bottom: 1px solid rgba(30, 144, 255, 0.1);
      }

      .build-section:not(:last-child)::after {
        content: '';
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 100px;
        height: 2px;
        background: linear-gradient(90deg, var(--primary-accent), transparent);
        border-radius: 1px;
      }

      /* Typography hierarchy */
      .build-section h2 {
        font-size: clamp(1.5rem, 4vw, 2.2rem);
        font-weight: 700;
        margin-bottom: 1.5rem;
        color: var(--light-text);
        position: relative;
        padding-left: 1rem;
      }

      .build-section h2::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0.2em;
        width: 4px;
        height: 1.2em;
        background: linear-gradient(180deg, var(--primary-accent), var(--secondary-accent));
        border-radius: 2px;
      }

      .build-section h3 {
        font-size: 1.3rem;
        font-weight: 600;
        margin: 2rem 0 1rem;
        color: var(--secondary-accent);
      }

      .build-section p, .build-section li {
        font-size: 1.05rem;
        line-height: 1.8;
        margin-bottom: 1.5rem;
        color: var(--medium-text);
        max-width: 70ch;
      }

      .build-section ul {
        margin: 1.5rem 0;
        padding-left: 0;
        list-style: none;
      }

      .build-section li {
        position: relative;
        padding-left: 2rem;
        margin-bottom: 0.8rem;
      }

      .build-section li::before {
        content: '▶';
        position: absolute;
        left: 0;
        color: var(--primary-accent);
        font-size: 0.8rem;
        top: 0.1em;
      }

      /* Enhanced hologram containers */
      .hologram-container {
        background: linear-gradient(135deg, rgba(0, 212, 255, 0.08), rgba(0, 255, 255, 0.04));
        border: 1px solid rgba(0, 212, 255, 0.25);
        box-shadow: 
          0 8px 32px rgba(0, 212, 255, 0.15),
          inset 0 1px 0 rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(8px);
        border-radius: 16px;
        padding: 1rem;
        position: relative;
        transition: all 0.3s ease;
        margin-bottom: 2rem;
      }

      .hologram-container:hover {
        transform: translateY(-4px);
        box-shadow: 
          0 16px 48px rgba(0, 212, 255, 0.2),
          inset 0 1px 0 rgba(255, 255, 255, 0.15);
        border-color: rgba(0, 212, 255, 0.4);
      }

      .hologram-container img, 
      .hologram-container .lazy-image,
      .hologram-container video {
        border-radius: 12px;
        width: 100%;
        height: auto;
        display: block;
      }

      /* Enhanced parts table */
      .parts-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.95rem;
        margin: 2rem 0;
        background: rgba(10, 25, 47, 0.6);
        border-radius: 12px;
        overflow: hidden;
        border: 1px solid var(--border-color);
      }

      .parts-table th {
        background: linear-gradient(135deg, rgba(30, 144, 255, 0.2), rgba(70, 163, 255, 0.1));
        color: var(--light-text);
        font-weight: 600;
        padding: 1rem 0.75rem;
        text-align: left;
        border-bottom: 2px solid var(--primary-accent);
      }

      .parts-table td {
        padding: 0.75rem;
        border-bottom: 1px solid rgba(30, 144, 255, 0.1);
        vertical-align: top;
      }

      .parts-table tr:last-child td {
        border-bottom: none;
      }

      .parts-table td:first-child {
        font-weight: 600;
        color: var(--light-text);
      }

      /* Layer images styling */
      .layer-images {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin: 2rem 0;
      }

      .layer-images figcaption {
        text-align: center;
        margin-top: 1rem;
        font-style: italic;
        color: var(--medium-text);
        font-size: 0.9rem;
      }

      /* Build progress grid */
      .build-progress-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
        margin: 2rem 0;
      }

      /* Reading progress indicator */
      .reading-progress {
        position: fixed;
        top: 60px; /* Position below the navigation button */
        left: 0;
        width: 100%;
        height: 3px;
        background: linear-gradient(90deg, var(--primary-accent), var(--secondary-accent));
        transform-origin: left;
        transform: scaleX(0);
        z-index: 9998; /* Lower than navigation header */
        transition: transform 0.1s ease;
      }

      /* Mobile optimizations */
      @media (max-width: 768px) {
        .corne-build-container {
          padding: 5rem 1rem 2rem;
        }

        .build-title {
          font-size: clamp(1.5rem, 8vw, 2.5rem);
        }

        .corne-meta {
          flex-direction: column;
          gap: 0.5rem;
        }

        .build-section h2 {
          font-size: clamp(1.2rem, 6vw, 1.8rem);
        }

        .build-section p,
        .build-section li {
          font-size: 1rem;
        }

        .build-progress-grid {
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        .hologram-container {
          padding: 0.75rem;
        }

        .parts-table {
          font-size: 0.8rem;
        }

        .parts-table th,
        .parts-table td {
          padding: 0.5rem;
        }
      }

      /* Print styles */
      @media print {
        .corne-build-container {
          max-width: none;
          padding: 0;
        }

        .hologram-container {
          border: 1px solid #ccc;
          box-shadow: none;
          background: none;
        }

        .parts-table {
          border: 1px solid #ccc;
          background: white;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      window.removeEventListener('scroll', updateReadingProgress);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <PageTransition>
      <MatrixRainBackground />
      <ReturnButton to="/projects" />
      <main>
        <div className="reading-progress"></div>
        <article className="corne-build-container">
          <header className="corne-article-header">
            <div className="corne-meta">
              <div className="meta-item">
                <span>📅</span>
                <span>Jan 2024</span>
              </div>
              <div className="meta-item">
                <span>🏷️</span>
                <span>Hardware • DIY • Keyboards</span>
              </div>
            </div>
            <h1 className="build-title">{typedTitle}</h1>
          </header>

          <div className="hero-image-container">
            <div className="hero-image-frame">
              <LazyImage
                src="/images/corne-keyboard/cornebuild.jpeg"
                alt="Corne keyboard build hero"
                priority={true}
                fetchPriority="high"
                intrinsic={true}
              />
            </div>
          </div>

          <section className="build-section">
            <h2>Building My Custom Corne Split Keyboard</h2>
            <h3>Why I Wanted a Split</h3>
            <p>
              One night I hurt my hand badly enough that I couldn't use my right pinky for a while. Typing became painful, limiting both work and hobbies, so I started looking for an alternative that could help during recovery.
            </p>
            <p>
              After much research, the <strong>Corne</strong> promised a more natural angle, <em>column-stagger</em> ergonomics, and the freedom to map every key exactly where I want it. Plus, it looked like a perfect weekend challenge so I got to work.
            </p>
          </section>

          <section className="build-section">
            <h2>Parts &amp; Materials</h2>
            <div style={{ overflowX: 'auto' }}>
              <table className="parts-table">
                <thead>
                  <tr>
                    <th>Component</th>
                    <th>Choice</th>
                    <th>Why I Picked It</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['PCBs', 'Official Corne MX v3', 'Readily available & supports per-key RGB'],
                    ['Switches', 'Kailh Choc Red (low-profile)', 'Quiet travel, smooth actuation – ideal for late-night coding without waking Taz (my Shih Tzu)'],
                    ['Keycaps', 'MBK POM blanks in black', 'Uniform profile keeps finger travel consistent; the stealth look matches my site’s dark theme'],
                    ['Microcontrollers', 'Nice!Nano v2 (BLE + ZMK)', 'Wireless flexibility + on-board battery charging'],
                    ['Display', 'Typeractive Nice!View (128×64)', 'Larger, crisper screen for layers, logo & battery stats'],
                    ['Case', '3D-printed PETG (Midnight Blue)', 'Printed on my Flashforge 3; PETG survives travel better than PLA'],
                    ['Batteries', 'Typeractive “Corne Battery” (120 mAh Li-Po)', '~3 days of wireless use per charge'],
                  ].map(([component, choice, why]) => (
                    <tr key={component}>
                      <td><strong>{component}</strong></td>
                      <td>{choice}</td>
                      <td>{why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="build-section">
            <h2>Layer Logic</h2>
            <ul>
              <li><strong>Base</strong> – Standard letters, space on the big left thumb, enter on the right.</li>
              <li><strong>Nav</strong> (tap the left thumb) – HJKL arrows, page-up/down, media keys.</li>
              <li><strong>Numbers/Symbols</strong> (tap the right thumb) – Custom pseudo-numpad plus my favorite curly braces for React.</li>
            </ul>
            <div className="layer-images">
              {[
                { src: '/images/corne-keyboard/layer1.png', caption: 'Base Layer' },
                { src: '/images/corne-keyboard/layer2.png', caption: 'Nav Layer' },
                { src: '/images/corne-keyboard/layer3.png', caption: 'Numbers/Symbols Layer' },
              ].map(({ src, caption }) => (
                <figure key={caption} style={{ margin: 0 }}>
                  <div className="hologram-container">
                    <LazyImage src={src} alt={caption} priority={true} fetchPriority="high" intrinsic={true} />
                  </div>
                  <figcaption style={{ textAlign: 'center', marginTop: '-1rem' }}>{caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="build-section">
            <h2>Final Thoughts</h2>
            <p>
              This build blended everything I love: hardware hacking, 3D printing, and a dash of embedded firmware. The Corne now lives front-and-center on my desk.
            </p>
          </section>

          <section className="build-section">
            <h2>Build Progress</h2>
            <div className="build-progress-grid">
              {[
                '/images/corne-keyboard/corne1.jpeg', 
                '/images/corne-keyboard/corne2.jpeg', 
                '/images/corne-keyboard/corne3.jpeg', 
                '/images/corne-keyboard/corne4.jpeg'
              ].map((src) => (
                <div key={src} className="hologram-container">
                  <LazyImage src={src} alt="Corne keyboard build step" priority={true} fetchPriority="low" intrinsic={true} />
                </div>
              ))}
            </div>
          </section>

          <section className="build-section">
            <h2>Build Timelapse</h2>
            <div className="hologram-container">
               <LazyImage
                src="/images/corne-keyboard/cornelapse.gif"
                alt="Corne keyboard build timelapse"
                intrinsic={true}
              />
            </div>
          </section>
        </article>
      </main>
    </PageTransition>
  );
}

export default CorneKeyboard; 