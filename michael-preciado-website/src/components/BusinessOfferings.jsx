import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { autoApplyLiquidGlass } from '../utils/liquidGlass.js';

const offerings = [
  {
    title: 'Business Automation Starter Pack',
    price: 'Starting at $497',
    description: 'One painful workflow turned into a simple automation that saves time immediately.',
    items: ['Workflow audit', 'One automation build', 'Simple docs or walkthrough video', '7 days of support'],
  },
  {
    title: 'Website + AI Chatbot Package',
    price: 'Starting at $750',
    description: 'A clean local-business landing page with booking, contact capture, reviews, and AI FAQ support.',
    items: ['Responsive landing page', 'Contact or booking flow', 'Google reviews CTA', 'AI-powered FAQ/chat widget'],
  },
  {
    title: 'Tech Cleanup Session',
    price: 'Starting at $250',
    description: 'A focused cleanup for messy business tools, accounts, files, emails, and basic security.',
    items: ['Email/domain review', 'File and tool organization', 'Password/security recommendations', 'Action plan for next steps'],
  },
  {
    title: 'Custom Dashboard Build',
    price: 'Starting at $500',
    description: 'Turn spreadsheets and scattered info into a simple dashboard for leads, jobs, sales, or inventory.',
    items: ['Google Sheets, Airtable, or lightweight web dashboard', 'Key metrics and status views', 'Basic automation hooks', 'Owner handoff notes'],
  },
  {
    title: 'Monthly AI Content Engine',
    price: 'Starting at $200/mo',
    description: 'Consistent content support for businesses that know they should post but do not have time.',
    items: ['Weekly post ideas', 'Captions and promo copy', 'Newsletter or blog drafts', 'Light brand voice guide'],
  },
  {
    title: 'Fractional Tech Support Retainer',
    price: 'Starting at $150/mo',
    description: 'Ongoing practical tech help for website updates, automations, tool fixes, and strategy.',
    items: ['Monthly support block', 'Small fixes and updates', 'Automation monitoring', 'Priority recommendations'],
  },
];

function BusinessOfferings() {
  useEffect(() => {
    autoApplyLiquidGlass();
  }, []);

  return (
    <section id="services" className="fade-in-section" style={{ padding: '2rem 1rem 4rem' }}>
      <style>{`
        .business-offerings {
          max-width: 1100px;
          margin: 0 auto;
          color: #E8E4DC;
          font-family: var(--font-mono, monospace);
        }
        .business-offerings-header {
          max-width: 760px;
          margin: 0 auto 2rem;
          text-align: center;
          padding: 1.5rem;
          border: 1px solid rgba(30, 144, 255, 0.14);
          border-radius: 12px;
          background: rgba(10, 25, 47, 0.22);
          backdrop-filter: blur(10px);
        }
        .business-offerings-eyebrow {
          color: #1E90FF;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-size: 0.72rem;
          margin-bottom: 0.75rem;
        }
        .business-offerings-title {
          color: #FFFFFF;
          font-size: clamp(1.75rem, 5vw, 3rem);
          margin: 0 0 0.75rem;
          line-height: 1.1;
        }
        .business-offerings-copy {
          color: #B8B0A0;
          font-size: 0.95rem;
          line-height: 1.7;
          margin: 0 auto;
        }
        .business-offerings-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        .business-offering-card {
          border: 1px solid rgba(30, 144, 255, 0.14);
          border-radius: 10px;
          background: rgba(10, 25, 47, 0.3);
          padding: 1.1rem;
          backdrop-filter: blur(8px);
          transition: border-color 0.2s ease, transform 0.2s ease, background 0.2s ease;
        }
        .business-offering-card:hover {
          border-color: rgba(30, 144, 255, 0.32);
          background: rgba(10, 25, 47, 0.45);
          transform: translateY(-2px);
        }
        .business-offering-card h3 {
          color: #FFFFFF;
          font-size: 1rem;
          margin: 0 0 0.35rem;
        }
        .business-offering-price {
          color: #1E90FF;
          font-size: 0.78rem;
          margin-bottom: 0.75rem;
        }
        .business-offering-card p {
          color: #B8B0A0;
          font-size: 0.82rem;
          line-height: 1.6;
          margin: 0 0 0.9rem;
        }
        .business-offering-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 0.35rem;
        }
        .business-offering-card li {
          color: #C9D4DF;
          font-size: 0.76rem;
          line-height: 1.45;
        }
        .business-offering-card li::before {
          content: '>'; 
          color: #1E90FF;
          margin-right: 0.45rem;
        }
        .business-offerings-cta {
          margin: 1.5rem auto 0;
          text-align: center;
          color: #B8B0A0;
          font-size: 0.86rem;
        }
        .business-offerings-cta a {
          color: #1E90FF;
          text-decoration: none;
          border-bottom: 1px solid rgba(30, 144, 255, 0.35);
        }
        @media (min-width: 700px) {
          .business-offerings-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .business-offerings-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>

      <div className="business-offerings">
        <div className="business-offerings-header">
          <div className="business-offerings-eyebrow">Preciado Tech Services</div>
          <h2 className="business-offerings-title">Small systems that save time, capture leads, and create momentum.</h2>
          <p className="business-offerings-copy">
            Practical websites, AI automations, dashboards, and tech cleanup for local businesses and solo operators — built lean so you can get value quickly without enterprise pricing.
          </p>
        </div>

        <div className="business-offerings-grid">
          {offerings.map((offering, index) => (
            <motion.article
              key={offering.title}
              className="business-offering-card"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
            >
              <h3>{offering.title}</h3>
              <div className="business-offering-price">{offering.price}</div>
              <p>{offering.description}</p>
              <ul>
                {offering.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <p className="business-offerings-cta">
          Want to start small? <a href="mailto:michael@preciadotech.com?subject=Preciado%20Tech%20Starter%20Pack">Email me</a> or <a href="https://meetings-na2.hubspot.com/michael-preciado">book a quick call</a> and we’ll pick one workflow to improve first.
        </p>
      </div>
    </section>
  );
}

export default BusinessOfferings;
