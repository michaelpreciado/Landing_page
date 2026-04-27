import React, { useEffect } from 'react';
import MatrixRainBackground from './MatrixRainBackground';
import PageTransition from './PageTransition.jsx';
import ReturnButton from './ReturnButton.jsx';
import LazyImage from './LazyImage';
import { autoApplyLiquidGlass } from '../utils/liquidGlass.js';

const DETAILS = [
  ['Problem', 'Plant care gets scattered across memory, camera rolls, notes apps, and generic reminders. It is hard to see progress or understand what changed over time.'],
  ['Approach', 'Rebuild the app around a local-first journal: plant records, status, photos, notes, health scoring, backup/export, and AI-ready care feedback.'],
  ['Engineering signal', 'Next.js, TypeScript, Zustand, responsive UI, Vercel deployment, CI checks, and a simpler architecture after removing legacy sync/auth complexity.'],
  ['What I would improve next', 'Add richer timelines, keyboard/accessibility polish, real screenshots/GIFs, and a safe offline-model experiment for local plant-care suggestions.'],
];

function PlanterCaseStudy() {
  useEffect(() => {
    autoApplyLiquidGlass();
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <MatrixRainBackground />
      <ReturnButton to="/projects" />
      <main className="case-study-page">
        <section className="case-terminal">
          <div className="case-terminal-bar">● ● ● &nbsp; michael@case-study:~/planter</div>
          <div className="case-hero-grid">
            <div>
              <p className="case-kicker">Portfolio case study</p>
              <h1>Planter — local-first AI botanical journal.</h1>
              <p className="case-lede">
                A product-focused rebuild showing how I think about useful AI, mobile-first design,
                local data ownership, and maintainable frontend systems.
              </p>
              <div className="case-actions">
                <a href="https://planter-ekb2f1y8p-michael-preciados-projects.vercel.app" target="_blank" rel="noreferrer">Live demo</a>
                <a href="https://github.com/michaelpreciado/Planter" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
            <div className="case-image-panel">
              <LazyImage src="/images/projects/planttracker.png" alt="Planter app screenshot" />
            </div>
          </div>
        </section>

        <section className="case-detail-grid">
          {DETAILS.map(([label, text]) => (
            <article className="case-detail-card" key={label}>
              <h2>&gt; {label}</h2>
              <p>{text}</p>
            </article>
          ))}
        </section>
      </main>
    </PageTransition>
  );
}

export default PlanterCaseStudy;
