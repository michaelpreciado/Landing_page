import React from 'react';

const NOW_ITEMS = [
  {
    label: 'Preciado Tech',
    text: 'Building a practical AI/software practice around automation sprints, custom assistants, and digital tools for real work.',
  },
  {
    label: 'Team of Agents',
    text: 'Developing practical AI agents and agentic workflows for real-world automation challenges.',
  },
  {
    label: 'Planter',
    text: 'Polishing a local-first AI botanical journal as a portfolio-grade product case study.',
  },
];

function NowSection() {
  return (
    <section className="now-section" aria-labelledby="now-heading">
      <div className="now-terminal">
        <div className="now-terminal-bar">● ● ● &nbsp; michael@now:~</div>
        <div className="now-projects">
          <p className="now-kicker">active projects</p>
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
