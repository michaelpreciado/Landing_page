import React, { useEffect } from 'react';
import MatrixRainBackground from './MatrixRainBackground';
import PageTransition from './PageTransition.jsx';
import ReturnButton from './ReturnButton.jsx';
import LazyImage from './LazyImage';
import useTypewriter from '../hooks/useTypewriter';
import { autoApplyLiquidGlass } from '../utils/liquidGlass.js';

function CorneKeyboard() {
  const typedTitle = useTypewriter("Corne Keyboard Build", { speed: 35, scrambleOnMount: true });

  // Apply liquid glass effects when component mounts
  useEffect(() => {
    autoApplyLiquidGlass();
  }, []);

  return (
    <PageTransition>
      <MatrixRainBackground />
      <ReturnButton to="/projects" />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <section style={{ maxWidth: '800px', margin: '0 auto' }}>
          <article className="blog-article-content">
            <h1 className="blog-article-title" style={{ marginBottom: '1.5rem' }}>{typedTitle}</h1>

            {/* Hero Image Placeholder */}
            <figure className="blog-hero-image" style={{ marginBottom: '2rem', width: '100%' }}>
              <LazyImage
                src="/images/cornebuild.jpeg"
                alt="Corne keyboard build hero"
                priority={true}
                quality="medium"
                maxWidth="100%"
                objectFit="contain"
                placeholder={<div style={{ width: '100%', height: '400px', background: 'var(--medium-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>⌨️</div>}
              />
            </figure>

            {/* --- Article Content --- */}

            <h2 style={{ fontFamily: 'var(--font-pixel)', fontSize: '1.8rem', margin: '2rem 0 1rem' }}>Building My Custom Corne Split Keyboard</h2>

            {/* Why I Wanted a Split */}
            <h3 style={{ marginTop: '1.5rem' }}>Why I Wanted a Split</h3>
            <p>
              One night during a manic cleaning session I hurt my hand badly enough that I couldn’t use my right pinky for a while. Typing became painful, limiting both work and hobbies, so I started looking for an alternative that could help during recovery.
            </p>
            <p>
              After much research, the <strong>Corne</strong> promised a more natural angle, <em>column-stagger</em> ergonomics, and the freedom to map every key exactly where I want it. Plus, it looked like a perfect weekend challenge so I got to work.
            </p>

            {/* Parts & Materials */}
            <h3 style={{ marginTop: '2rem' }}>Parts &amp; Materials</h3>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr>
                    <th style={{ borderBottom: '1px solid var(--border-color)', padding: '0.5rem', textAlign: 'left' }}>Component</th>
                    <th style={{ borderBottom: '1px solid var(--border-color)', padding: '0.5rem', textAlign: 'left' }}>Choice</th>
                    <th style={{ borderBottom: '1px solid var(--border-color)', padding: '0.5rem', textAlign: 'left' }}>Why I Picked It</th>
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
                      <td style={{ borderBottom: '1px solid var(--border-color)', padding: '0.5rem' }}><strong>{component}</strong></td>
                      <td style={{ borderBottom: '1px solid var(--border-color)', padding: '0.5rem' }}>{choice}</td>
                      <td style={{ borderBottom: '1px solid var(--border-color)', padding: '0.5rem' }}>{why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Layer Logic */}
            <h3 style={{ marginTop: '2rem' }}>Layer Logic</h3>
            <ul style={{ marginBottom: '2rem', paddingLeft: '1.2rem' }}>
              <li><strong>Base</strong> – Standard letters, space on the big left thumb, enter on the right.</li>
              <li><strong>Nav</strong> (tap the left thumb) – HJKL arrows, page-up/down, media keys.</li>
              <li><strong>Numbers/Symbols</strong> (tap the right thumb) – Custom pseudo-numpad plus my favorite curly braces for React.</li>
            </ul>

            {/* Layer Images (full width) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
              {[
                { src: '/images/layer1.png', caption: 'Base Layer' },
                { src: '/images/layer2.png', caption: 'Nav Layer' },
                { src: '/images/layer3.png', caption: 'Numbers/Symbols Layer' },
              ].map(({ src, caption }, idx) => (
                <figure key={idx} style={{ margin: 0, width: '100%' }}>
                  <LazyImage
                    src={src}
                    alt={caption}
                    quality="medium"
                    maxWidth="100%"
                    objectFit="contain"
                    placeholder={<div style={{ width: '100%', height: '300px', background: 'var(--medium-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>⌨️</div>}
                  />
                  <figcaption className="blog-hero-caption" style={{ textAlign: 'center', marginTop: '0.5rem' }}>{caption}</figcaption>
                </figure>
              ))}
            </div>

            {/* Final Thoughts */}
            <h3 style={{ marginTop: '2rem' }}>Final Thoughts</h3>
            <p>
              This build blended everything I love: hardware hacking, 3D printing, and a dash of embedded firmware. The Corne now lives front-and-center on my desk.
            </p>

            {/* --- Build Progress Gallery --- */}
            <h2 style={{ fontFamily: 'var(--font-pixel)', margin: '2rem 0 1rem' }}>Build Progress</h2>
            <div className="blogs-grid" style={{ marginBottom: '2rem', gap: '1rem' }}>
              {['corne1', 'corne2', 'corne3', 'corne4'].map((name) => (
                <figure key={name} className="blog-hero-image" style={{ margin: 0 }}>
                  <LazyImage
                    src={`/images/${name}.jpeg`}
                    alt="Corne keyboard build step"
                    quality="medium"
                    maxWidth="100%"
                    objectFit="contain"
                    placeholder={<div style={{ width: '100%', height: '300px', background: 'var(--medium-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>🔧</div>}
                  />
                </figure>
              ))}
            </div>

            {/* --- Timelapse GIF --- */}
            <h2 style={{ fontFamily: 'var(--font-pixel)', margin: '2rem 0 1rem' }}>Build Timelapse</h2>
            {/* Responsive 16:9 GIF wrapper */}
            <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', marginBottom: '2rem', borderRadius: '8px', overflow: 'hidden' }}>
              <LazyImage
                src="/videos/cornelapse.gif"
                alt="Corne keyboard build timelapse"
                quality="medium"
                maxWidth="800px"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                placeholder={<div style={{ width: '100%', height: '100%', background: 'var(--medium-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>🎞️</div>}
              />
            </div>
          </article>
        </section>
      </main>
    </PageTransition>
  );
}

export default CorneKeyboard; 