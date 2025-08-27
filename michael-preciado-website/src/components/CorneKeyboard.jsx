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
    const style = document.createElement('style');
    style.textContent = `
      .corne-build-container {
        max-width: 900px;
        margin: 0 auto;
        padding: 6rem 1rem 2rem;
        color: var(--light-text);
      }
      .build-title {
        font-size: 2.5rem;
        text-align: center;
        margin-bottom: 2rem;
      }
      .build-section {
        margin-bottom: 3rem;
        border-bottom: 1px solid var(--border-color);
        padding-bottom: 2rem;
      }
      .build-section:last-child {
        border-bottom: none;
      }
      .build-section h2 {
        font-family: var(--font-pixel);
        font-size: 1.8rem;
        margin-bottom: 1rem;
      }
      .build-section h3 {
        font-size: 1.2rem;
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
      }
      .build-section p, .build-section li {
        line-height: 1.7;
        margin-bottom: 1rem;
      }
      .hologram-container {
        background: linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(0, 255, 255, 0.02));
        border: 1px solid rgba(0, 212, 255, 0.2);
        box-shadow: 0 0 15px rgba(0, 212, 255, 0.1), inset 0 0 10px rgba(0, 255, 255, 0.05);
        backdrop-filter: blur(5px);
        border-radius: 12px;
        padding: 0.75rem;
        margin-bottom: 2rem;
      }
      .hologram-container img, .hologram-container .lazy-image, .hologram-container video {
        border-radius: 8px;
        display: block;
        width: 100%;
      }
      .parts-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.9rem;
        margin-top: 1.5rem;
      }
      .parts-table th, .parts-table td {
        border-bottom: 1px solid var(--border-color);
        padding: 0.75rem;
        text-align: left;
      }
      .parts-table th {
        font-family: var(--font-pixel);
      }
      .layer-images {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }
      .build-progress-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
      }

      @media (max-width: 768px) {
        .corne-build-container {
          padding-top: 5rem;
        }
        .build-title {
          font-size: 1.8rem;
        }
        .build-section h2 {
          font-size: 1.5rem;
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <PageTransition>
      <MatrixRainBackground />
      <ReturnButton to="/projects" />
      <main>
        <div className="corne-build-container">
          <h1 className="build-title">{typedTitle}</h1>

          <div className="hologram-container">
            <LazyImage
              src="/images/corne-keyboard/cornebuild.jpeg"
              alt="Corne keyboard build hero"
              priority={true}
            />
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
                    <LazyImage src={src} alt={caption} />
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
                  <LazyImage src={src} alt="Corne keyboard build step" />
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
              />
            </div>
          </section>
        </div>
      </main>
    </PageTransition>
  );
}

export default CorneKeyboard; 