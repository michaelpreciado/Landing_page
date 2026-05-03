import React from 'react';

const Icon = ({ type, size = 16 }) => {
  const icons = {
    business: <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18M12 12v2" />,
    zap: <polyline points="13 2 3 14 12 14 2 22" />,
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1E90FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }}
    >
      {icons[type]}
    </svg>
  );
};

const NOW_ITEMS = [
  {
    label: 'Preciado Tech',
    icon: 'business',
    text: 'Building a practical AI/software practice around automation sprints, custom assistants, and digital tools for real work.',
  },
  {
    label: 'Team of Agents',
    icon: 'zap',
    text: 'Developing practical AI agents and agentic workflows for real-world automation challenges.',
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
                <span><Icon type={item.icon} />&gt; {item.label}</span>
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
