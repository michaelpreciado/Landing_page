import React from 'react';

const NOW_ITEMS = [
  {
    label: 'Preciado Tech',
    text: 'Building a practical AI/software practice around automation sprints, custom assistants, and digital tools for real work.',
  },
  {
    label: 'Planter',
    text: 'Polishing a local-first AI botanical journal as a portfolio-grade product case study.',
  },
  {
    label: 'F.R.I.D.A.Y.',
    text: 'Documenting an agentic second brain stack with OpenClaw, Obsidian, local AI, and persistent memory.',
  },
];

function NowSection() {
  return (
    <section className="now-section" aria-labelledby="now-heading">
      <div className="now-terminal">
        <div className="now-terminal-bar">● ● ● &nbsp; michael@now:~</div>
        <div className="now-grid">
          <div>
            <p className="now-kicker">status</p>
            <h2 id="now-heading">Currently building toward AI/software roles.</h2>
            <p className="now-copy">
              I’m focused on shipping visible proof: practical AI workflows, polished web apps,
              local-first products, and documented systems that show how I think and build.
            </p>
            <div className="now-actions">
              <a href="mailto:michael@preciadotech.com?subject=AI%20or%20software%20opportunity" className="now-btn primary">Hire / contact me</a>
              <a href="https://preciado-tech.com" className="now-btn">Preciado Tech</a>
              <a href="/projects" className="now-btn">View projects</a>
            </div>
          </div>
          <div className="now-list">
            {NOW_ITEMS.map((item) => (
              <article className="now-item" key={item.label}>
                <span>&gt; {item.label}</span>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NowSection;
