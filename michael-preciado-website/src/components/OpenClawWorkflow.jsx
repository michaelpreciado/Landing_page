import React, { useEffect } from 'react';
import MatrixRainBackground from './MatrixRainBackground';
import PageTransition from './PageTransition.jsx';
import ReturnButton from './ReturnButton.jsx';
import useTypewriter from '../utils/hooks/useTypewriter';
import { autoApplyLiquidGlass } from '../utils/liquidGlass.js';

function OpenClawWorkflow() {
  const typedTitle = useTypewriter('F.R.I.D.A.Y.', { speed: 40, scrambleOnMount: true });

  useEffect(() => {
    autoApplyLiquidGlass();

    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500&display=swap');

      .friday-editorial {
        min-height: 100vh;
        position: relative;
        color: #E8E4DC;
        font-family: 'Inter', sans-serif;
        font-weight: 300;
        line-height: 1.7;
      }

      .friday-container {
        max-width: 900px;
        margin: 0 auto;
        padding: 3rem 1.25rem;
        position: relative;
        z-index: 1;
      }

      .friday-header {
        text-align: center;
        margin-bottom: 2.5rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid rgba(30, 144, 255, 0.3);
      }

      .friday-meta {
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

      .friday-title {
        font-family: 'Playfair Display', serif;
        font-size: clamp(2rem, 8vw, 3.5rem);
        font-weight: 700;
        letter-spacing: 0.08em;
        margin: 0;
        color: #FFFFFF;
        line-height: 1.1;
        text-shadow: 0 0 30px rgba(30, 144, 255, 0.25);
      }

      .friday-subtitle {
        font-size: 0.65rem;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: #5A8FC0;
        margin-top: 0.75rem;
      }

      /* ── Section Labels ── */
      .friday-section-label {
        font-size: 0.6rem;
        color: #5A8FC0;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        margin-bottom: 0.75rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }

      .friday-section-label::after {
        content: '';
        flex: 1;
        height: 1px;
        background: linear-gradient(90deg, rgba(30, 144, 255, 0.2), transparent);
      }

      /* ── Layer Stack ── */
      .friday-layers {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        margin-bottom: 2rem;
      }

      .friday-layer {
        display: grid;
        grid-template-columns: 55px 1fr;
        gap: 0;
        border-radius: 8px;
        overflow: hidden;
        border: 1px solid;
      }

      .friday-layer-id {
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Playfair Display', serif;
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        padding: 0 0.75rem;
      }

      .friday-layer-body {
        padding: 0.75rem 1rem;
      }

      .friday-layer-title {
        font-family: 'Playfair Display', serif;
        font-size: 0.7rem;
        font-weight: 600;
        letter-spacing: 0.12em;
        margin-bottom: 0.25rem;
      }

      .friday-layer-desc {
        font-size: 0.72rem;
        color: #8B8680;
        line-height: 1.6;
      }

      .friday-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 0.3rem;
        margin-top: 0.5rem;
      }

      .friday-chip {
        font-size: 0.55rem;
        padding: 0.15rem 0.5rem;
        border-radius: 3px;
        letter-spacing: 0.06em;
      }

      /* Layer color variants */
      .fl-blue { border-color: rgba(30, 144, 255, 0.25); background: rgba(30, 144, 255, 0.04); }
      .fl-blue .friday-layer-id { background: rgba(30, 144, 255, 0.1); color: #1E90FF; }
      .fl-blue .friday-layer-title { color: #1E90FF; }
      .fl-blue .friday-chip { background: rgba(30, 144, 255, 0.1); border: 1px solid rgba(30, 144, 255, 0.25); color: #1E90FF; }

      .fl-lightblue { border-color: rgba(99, 184, 255, 0.25); background: rgba(99, 184, 255, 0.03); }
      .fl-lightblue .friday-layer-id { background: rgba(99, 184, 255, 0.08); color: #63B8FF; }
      .fl-lightblue .friday-layer-title { color: #63B8FF; }
      .fl-lightblue .friday-chip { background: rgba(99, 184, 255, 0.08); border: 1px solid rgba(99, 184, 255, 0.2); color: #63B8FF; }

      .fl-white { border-color: rgba(255, 255, 255, 0.12); background: rgba(255, 255, 255, 0.02); }
      .fl-white .friday-layer-id { background: rgba(255, 255, 255, 0.05); color: #E8F4FF; }
      .fl-white .friday-layer-title { color: #E8F4FF; }
      .fl-white .friday-chip { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.12); color: #E8F4FF; }

      .fl-purple { border-color: rgba(155, 122, 204, 0.25); background: rgba(155, 122, 204, 0.03); }
      .fl-purple .friday-layer-id { background: rgba(155, 122, 204, 0.08); color: #9B7ACC; }
      .fl-purple .friday-layer-title { color: #9B7ACC; }
      .fl-purple .friday-chip { background: rgba(155, 122, 204, 0.08); border: 1px solid rgba(155, 122, 204, 0.2); color: #9B7ACC; }

      /* ── Connector ── */
      .friday-connector {
        display: flex;
        justify-content: center;
        height: 8px;
        position: relative;
      }

      .friday-connector::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        width: 1px;
        background: linear-gradient(180deg, rgba(30, 144, 255, 0.25), rgba(30, 144, 255, 0.08));
      }

      .friday-connector-dot {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: rgba(30, 144, 255, 0.3);
        align-self: center;
        z-index: 1;
      }

      /* ── Request Flow ── */
      .friday-flow-wrap {
        background: rgba(5, 12, 28, 0.5);
        border: 1px solid rgba(30, 144, 255, 0.15);
        border-radius: 10px;
        padding: 1.25rem;
        margin-bottom: 2rem;
      }

      .friday-flow-grid {
        display: grid;
        grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
        align-items: center;
        gap: 0;
      }

      .friday-flow-node {
        background: rgba(0, 8, 22, 0.8);
        border-radius: 8px;
        padding: 0.75rem 0.6rem;
        text-align: center;
        border: 1px solid rgba(30, 144, 255, 0.1);
      }

      .friday-flow-icon {
        font-size: 1.4rem;
        margin-bottom: 0.4rem;
      }

      .friday-flow-name {
        font-family: 'Playfair Display', serif;
        font-size: 0.55rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        margin-bottom: 0.2rem;
      }

      .friday-flow-sub {
        font-size: 0.55rem;
        color: #8B8680;
        line-height: 1.5;
      }

      .friday-flow-arrow {
        font-size: 1rem;
        color: rgba(30, 144, 255, 0.3);
        padding: 0 0.25rem;
        text-align: center;
      }

      /* ── Agent Cards ── */
      .friday-agents-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.6rem;
        margin-bottom: 2rem;
      }

      .friday-agent-card {
        background: rgba(5, 12, 28, 0.5);
        border-radius: 8px;
        overflow: hidden;
        border: 1px solid rgba(30, 144, 255, 0.1);
      }

      .friday-agent-top {
        padding: 0.75rem;
        border-bottom: 1px solid rgba(30, 144, 255, 0.08);
      }

      .friday-agent-icon {
        font-size: 1.2rem;
        margin-bottom: 0.3rem;
      }

      .friday-agent-name {
        font-family: 'Playfair Display', serif;
        font-size: 0.6rem;
        font-weight: 700;
        letter-spacing: 0.15em;
        margin-bottom: 0.15rem;
      }

      .friday-agent-tool {
        font-size: 0.55rem;
        color: #8B8680;
      }

      .friday-agent-bot {
        padding: 0.6rem 0.75rem;
      }

      .friday-agent-vault {
        font-size: 0.55rem;
        color: #8B8680;
        line-height: 1.7;
      }

      .friday-agent-vault span {
        display: block;
      }

      .friday-agent-vault b {
        color: #E8E4DC;
      }

      /* ── Vault Grid ── */
      .friday-vault-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.6rem;
        margin-bottom: 2rem;
      }

      .friday-vault-tree {
        background: rgba(5, 12, 28, 0.5);
        border: 1px solid rgba(30, 144, 255, 0.15);
        border-radius: 10px;
        padding: 1rem;
      }

      .friday-vault-root {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.75rem;
        padding-bottom: 0.75rem;
        border-bottom: 1px solid rgba(30, 144, 255, 0.1);
      }

      .friday-vault-root-name {
        font-family: 'Playfair Display', serif;
        font-size: 0.7rem;
        color: #E8E4DC;
        letter-spacing: 0.05em;
      }

      .friday-vault-root-sub {
        font-size: 0.55rem;
        color: #8B8680;
        margin-top: 0.1rem;
      }

      .friday-folder-list {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
      }

      .friday-folder-row {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.3rem 0.4rem;
        border-radius: 4px;
        background: rgba(0, 4, 14, 0.5);
        border: 1px solid rgba(30, 144, 255, 0.06);
      }

      .friday-folder-stripe {
        width: 3px;
        height: 20px;
        border-radius: 2px;
        flex-shrink: 0;
      }

      .friday-folder-name {
        font-size: 0.6rem;
        color: #E8E4DC;
      }

      .friday-folder-agent {
        font-size: 0.5rem;
        color: #8B8680;
        margin-top: 0.1rem;
      }

      /* ── Symlinks ── */
      .friday-symlinks {
        background: rgba(5, 12, 28, 0.5);
        border: 1px solid rgba(30, 144, 255, 0.15);
        border-radius: 10px;
        padding: 1rem;
      }

      .friday-sym-label {
        font-size: 0.55rem;
        color: #5A8FC0;
        letter-spacing: 0.12em;
        margin-bottom: 0.75rem;
      }

      .friday-sym-row {
        display: flex;
        align-items: center;
        gap: 0;
        margin-bottom: 0.5rem;
        font-size: 0.6rem;
      }

      .friday-sym-src {
        color: #9B7ACC;
        background: rgba(155, 122, 204, 0.08);
        border: 1px solid rgba(155, 122, 204, 0.2);
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        white-space: nowrap;
        font-size: 0.55rem;
      }

      .friday-sym-arrow {
        color: #5A8FC0;
        padding: 0 0.5rem;
        font-size: 0.85rem;
        flex-shrink: 0;
      }

      .friday-sym-dst {
        color: #4EC9B0;
        background: rgba(78, 201, 176, 0.06);
        border: 1px solid rgba(78, 201, 176, 0.15);
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        white-space: nowrap;
        font-size: 0.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .friday-sync-section {
        margin-top: 0.75rem;
        padding-top: 0.75rem;
        border-top: 1px solid rgba(30, 144, 255, 0.1);
      }

      .friday-sync-row {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.4rem;
        font-size: 0.55rem;
      }

      .friday-sync-badge {
        padding: 0.2rem 0.5rem;
        border-radius: 4px;
        white-space: nowrap;
        flex-shrink: 0;
      }

      .friday-sync-target {
        color: #8B8680;
      }

      .friday-sync-arrow {
        color: #5A8FC0;
        flex-shrink: 0;
      }

      /* ── Footer ── */
      .friday-footer {
        text-align: center;
        margin-top: 2.5rem;
        padding-top: 1.25rem;
        border-top: 1px solid rgba(30, 144, 255, 0.15);
      }

      .friday-footer-title {
        font-family: 'Playfair Display', serif;
        font-size: 0.7rem;
        color: #1E90FF;
        letter-spacing: 0.2em;
        margin-bottom: 0.4rem;
      }

      .friday-footer-status {
        font-size: 0.55rem;
        color: #5A8FC0;
        letter-spacing: 0.12em;
      }

      .friday-footer-link {
        font-size: 0.55rem;
        color: #8B8680;
        margin-top: 0.3rem;
      }

      /* ── Responsive ── */
      @media (min-width: 640px) {
        .friday-container {
          padding: 3rem 2rem;
        }

        .friday-agents-grid {
          grid-template-columns: repeat(4, 1fr);
        }
      }

      @media (max-width: 639px) {
        .friday-flow-grid {
          grid-template-columns: 1fr;
          gap: 0.4rem;
        }

        .friday-flow-arrow {
          transform: rotate(90deg);
        }

        .friday-vault-grid {
          grid-template-columns: 1fr;
        }

        .friday-layer {
          grid-template-columns: 45px 1fr;
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

      <div className="friday-editorial">
        <article className="friday-container">
          {/* Header */}
          <header className="friday-header">
            <div className="friday-meta">
              <span>Second Brain OS</span>
              <span>V1.0</span>
            </div>
            <h1 className="friday-title">{typedTitle}</h1>
            <div className="friday-subtitle">Karpathy Architecture · Preciado Tech Stack · Omarchy Linux</div>
          </header>

          {/* Layer Stack */}
          <div className="friday-section-label">Karpathy Stack — 4 Layers</div>
          <div className="friday-layers">

            {/* L4 - Memory */}
            <div className="friday-layer fl-purple">
              <div className="friday-layer-id">L4</div>
              <div className="friday-layer-body">
                <div className="friday-layer-title">MEMORY</div>
                <div className="friday-layer-desc">Obsidian Sync — Preciado Tech vault — Friday/ folder — persistent cross-session context</div>
                <div className="friday-chips">
                  <span className="friday-chip">Obsidian Sync</span>
                  <span className="friday-chip">MEMORY.md</span>
                  <span className="friday-chip">USER.md</span>
                  <span className="friday-chip">CONTEXT.md</span>
                  <span className="friday-chip">GitHub backup</span>
                </div>
              </div>
            </div>

            <div className="friday-connector"><div className="friday-connector-dot"></div></div>

            {/* L3 - IDE + Agent */}
            <div className="friday-layer fl-white">
              <div className="friday-layer-id">L3</div>
              <div className="friday-layer-body">
                <div className="friday-layer-title">IDE + AGENT</div>
                <div className="friday-layer-desc">OpenClaw gateway (Telegram) + OpenCode terminal agent — 3 active agents: Code, Study, Stocks</div>
                <div className="friday-chips">
                  <span className="friday-chip">OpenClaw</span>
                  <span className="friday-chip">OpenCode</span>
                  <span className="friday-chip">Telegram</span>
                  <span className="friday-chip">yfinance 7AM cron</span>
                  <span className="friday-chip">systemd service</span>
                </div>
              </div>
            </div>

            <div className="friday-connector"><div className="friday-connector-dot"></div></div>

            {/* L2 - Protocol */}
            <div className="friday-layer fl-lightblue">
              <div className="friday-layer-id">L2</div>
              <div className="friday-layer-body">
                <div className="friday-layer-title">PROTOCOL</div>
                <div className="friday-layer-desc">MCP servers connect agents to filesystem, GitHub, and vault — LSP provides code intelligence</div>
                <div className="friday-chips">
                  <span className="friday-chip">MCP filesystem</span>
                  <span className="friday-chip">MCP github</span>
                  <span className="friday-chip">LSP</span>
                  <span className="friday-chip">Docker backend</span>
                  <span className="friday-chip">UFW firewall</span>
                </div>
              </div>
            </div>

            <div className="friday-connector"><div className="friday-connector-dot"></div></div>

            {/* L1 - Local Compute */}
            <div className="friday-layer fl-blue">
              <div className="friday-layer-id">L1</div>
              <div className="friday-layer-body">
                <div className="friday-layer-title">LOCAL COMPUTE</div>
                <div className="friday-layer-desc">All inference runs locally — private, no API cost, RTX 5070 Ti accelerated via CUDA</div>
                <div className="friday-chips">
                  <span className="friday-chip">Gemma 4 e4b</span>
                  <span className="friday-chip">Gemma 4 27b</span>
                  <span className="friday-chip">Ollama v0.20.1</span>
                  <span className="friday-chip">RTX 5070 Ti</span>
                  <span className="friday-chip">Omarchy Linux</span>
                </div>
              </div>
            </div>

          </div>

          {/* Request Flow */}
          <div className="friday-section-label">Request Flow — Phone to Machine</div>
          <div className="friday-flow-wrap">
            <div className="friday-flow-grid">
              <div className="friday-flow-node" style={{ borderColor: 'rgba(30, 144, 255, 0.2)' }}>
                <div className="friday-flow-icon">📱</div>
                <div className="friday-flow-name" style={{ color: '#1E90FF' }}>YOU</div>
                <div className="friday-flow-sub">Telegram<br />voice memo<br />or text</div>
              </div>
              <div className="friday-flow-arrow">›</div>
              <div className="friday-flow-node" style={{ borderColor: 'rgba(78, 201, 176, 0.2)' }}>
                <div className="friday-flow-icon">⚡</div>
                <div className="friday-flow-name" style={{ color: '#4EC9B0' }}>OPENCLAW</div>
                <div className="friday-flow-sub">Gateway<br />routes intent<br />+ memory</div>
              </div>
              <div className="friday-flow-arrow">›</div>
              <div className="friday-flow-node" style={{ borderColor: 'rgba(212, 168, 67, 0.2)' }}>
                <div className="friday-flow-icon">🧠</div>
                <div className="friday-flow-name" style={{ color: '#D4A843' }}>GEMMA 4</div>
                <div className="friday-flow-sub">Local inference<br />Ollama<br />:11434</div>
              </div>
              <div className="friday-flow-arrow">›</div>
              <div className="friday-flow-node" style={{ borderColor: 'rgba(155, 122, 204, 0.2)' }}>
                <div className="friday-flow-icon">📓</div>
                <div className="friday-flow-name" style={{ color: '#9B7ACC' }}>OBSIDIAN</div>
                <div className="friday-flow-sub">Result saved<br />to Friday/<br />vault</div>
              </div>
            </div>
          </div>

          {/* Agent Crew */}
          <div className="friday-section-label">Agent Crew — 3 Active + 1 Always-On</div>
          <div className="friday-agents-grid">
            <div className="friday-agent-card" style={{ borderTop: '2px solid #1E90FF' }}>
              <div className="friday-agent-top" style={{ background: 'rgba(30, 144, 255, 0.04)' }}>
                <div className="friday-agent-icon">🤖</div>
                <div className="friday-agent-name" style={{ color: '#1E90FF' }}>CODE</div>
                <div className="friday-agent-tool">OpenCode + MCP</div>
              </div>
              <div className="friday-agent-bot">
                <div className="friday-agent-vault">
                  <span><b>Tool:</b> OpenCode terminal</span>
                  <span><b>Focus:</b> Arduino, React, OpenHome</span>
                  <span><b>Vault:</b> 200 Context Clusters/</span>
                  <span><b>300</b> Action Logs/code/</span>
                </div>
              </div>
            </div>

            <div className="friday-agent-card" style={{ borderTop: '2px solid #4EC9B0' }}>
              <div className="friday-agent-top" style={{ background: 'rgba(78, 201, 176, 0.03)' }}>
                <div className="friday-agent-icon">📚</div>
                <div className="friday-agent-name" style={{ color: '#4EC9B0' }}>STUDY</div>
                <div className="friday-agent-tool">Gemma 4 · CTA 326</div>
              </div>
              <div className="friday-agent-bot">
                <div className="friday-agent-vault">
                  <span><b>Tool:</b> OpenClaw + local model</span>
                  <span><b>Focus:</b> Wilmington Univ.</span>
                  <span><b>Vault:</b> 0600 University/</span>
                  <span><b>400</b> Knowledge Graph/</span>
                </div>
              </div>
            </div>

            <div className="friday-agent-card" style={{ borderTop: '2px solid #D4A843' }}>
              <div className="friday-agent-top" style={{ background: 'rgba(212, 168, 67, 0.03)' }}>
                <div className="friday-agent-icon">📈</div>
                <div className="friday-agent-name" style={{ color: '#D4A843' }}>STOCKS</div>
                <div className="friday-agent-tool">yfinance · 7AM cron</div>
              </div>
              <div className="friday-agent-bot">
                <div className="friday-agent-vault">
                  <span><b>Tickers:</b> NVDA IONQ QUBT</span>
                  <span><b>+ </b>ASTI SERV</span>
                  <span><b>Vault:</b> 300 Action Logs/</span>
                  <span><b>Sends:</b> Telegram 7:00 AM</span>
                </div>
              </div>
            </div>

            <div className="friday-agent-card" style={{ borderTop: '2px solid #9B7ACC' }}>
              <div className="friday-agent-top" style={{ background: 'rgba(155, 122, 204, 0.03)' }}>
                <div className="friday-agent-icon">📓</div>
                <div className="friday-agent-name" style={{ color: '#9B7ACC' }}>MEMORY</div>
                <div className="friday-agent-tool">OpenClaw</div>
              </div>
              <div className="friday-agent-bot">
                <div className="friday-agent-vault">
                  <span><b>Always on</b> background</span>
                  <span><b>Vault:</b> 100 Memory System/</span>
                  <span><b>000</b> Session Archives/</span>
                  <span><b>500</b> Friday Hub/</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vault Structure + Symlinks */}
          <div className="friday-section-label">Vault Structure + Symlinks</div>
          <div className="friday-vault-grid">

            {/* Vault Tree */}
            <div className="friday-vault-tree">
              <div className="friday-vault-root">
                <div>
                  <div className="friday-vault-root-name">📁 Preciado Tech</div>
                  <div className="friday-vault-root-sub">~/Documents/AIBrain · Friday/</div>
                </div>
              </div>
              <div className="friday-folder-list">
                <div className="friday-folder-row">
                  <div className="friday-folder-stripe" style={{ background: '#63B8FF' }}></div>
                  <div>
                    <div className="friday-folder-name">000 Session Archives</div>
                    <div className="friday-folder-agent">auto-archived after sessions</div>
                  </div>
                </div>
                <div className="friday-folder-row">
                  <div className="friday-folder-stripe" style={{ background: '#9B7ACC' }}></div>
                  <div>
                    <div className="friday-folder-name">100 Memory System</div>
                    <div className="friday-folder-agent">← MEMORY.md · USER.md symlinks</div>
                  </div>
                </div>
                <div className="friday-folder-row">
                  <div className="friday-folder-stripe" style={{ background: '#1E90FF' }}></div>
                  <div>
                    <div className="friday-folder-name">200 Context Clusters</div>
                    <div className="friday-folder-agent">← CONTEXT.md + agent contexts</div>
                  </div>
                </div>
                <div className="friday-folder-row">
                  <div className="friday-folder-stripe" style={{ background: '#D4A843' }}></div>
                  <div>
                    <div className="friday-folder-name">300 Action Logs</div>
                    <div className="friday-folder-agent">stock briefings · task logs</div>
                  </div>
                </div>
                <div className="friday-folder-row">
                  <div className="friday-folder-stripe" style={{ background: '#4EC9B0' }}></div>
                  <div>
                    <div className="friday-folder-name">400 Knowledge Graph</div>
                    <div className="friday-folder-agent">course notes · research</div>
                  </div>
                </div>
                <div className="friday-folder-row">
                  <div className="friday-folder-stripe" style={{ background: '#1E90FF' }}></div>
                  <div>
                    <div className="friday-folder-name">500 Friday Hub</div>
                    <div className="friday-folder-agent">daily status · priorities</div>
                  </div>
                </div>
                <div className="friday-folder-row">
                  <div className="friday-folder-stripe" style={{ background: '#5A8FC0' }}></div>
                  <div>
                    <div className="friday-folder-name">510 Templates</div>
                    <div className="friday-folder-agent">skill + prompt templates</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Symlinks */}
            <div className="friday-symlinks">
              <div className="friday-sym-label">SYMLINKS — ~/.openclaw/ → vault</div>

              <div className="friday-sym-row">
                <span className="friday-sym-src">MEMORY.md</span>
                <span className="friday-sym-arrow">→</span>
                <span className="friday-sym-dst">Friday/100 Memory System/openclaw-memory.md</span>
              </div>
              <div className="friday-sym-row">
                <span className="friday-sym-src">USER.md</span>
                <span className="friday-sym-arrow">→</span>
                <span className="friday-sym-dst">Friday/100 Memory System/openclaw-user.md</span>
              </div>
              <div className="friday-sym-row">
                <span className="friday-sym-src">CONTEXT.md</span>
                <span className="friday-sym-arrow">→</span>
                <span className="friday-sym-dst">Friday/200 Context Clusters/friday-context.md</span>
              </div>

              <div className="friday-sync-section">
                <div className="friday-sym-label">OBSIDIAN SYNC FLOW</div>
                <div className="friday-sync-row">
                  <span className="friday-sync-badge" style={{ color: '#9B7ACC', background: 'rgba(155, 122, 204, 0.08)', border: '1px solid rgba(155, 122, 204, 0.2)' }}>OpenClaw writes</span>
                  <span className="friday-sync-arrow">→</span>
                  <span className="friday-sync-target">~/.openclaw/MEMORY.md</span>
                </div>
                <div className="friday-sync-row">
                  <span className="friday-sync-badge" style={{ color: '#1E90FF', background: 'rgba(30, 144, 255, 0.08)', border: '1px solid rgba(30, 144, 255, 0.2)' }}>Symlink reads</span>
                  <span className="friday-sync-arrow">→</span>
                  <span className="friday-sync-target">Friday/100 Memory System/</span>
                </div>
                <div className="friday-sync-row">
                  <span className="friday-sync-badge" style={{ color: '#4EC9B0', background: 'rgba(78, 201, 176, 0.06)', border: '1px solid rgba(78, 201, 176, 0.15)' }}>Sync pushes</span>
                  <span className="friday-sync-arrow">→</span>
                  <span className="friday-sync-target">Mac + Phone (E2E encrypted)</span>
                </div>
                <div className="friday-sync-row">
                  <span className="friday-sync-badge" style={{ color: '#D4A843', background: 'rgba(212, 168, 67, 0.08)', border: '1px solid rgba(212, 168, 67, 0.2)' }}>Git snapshots</span>
                  <span className="friday-sync-arrow">→</span>
                  <span className="friday-sync-target">GitHub private backup (weekly)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Footer */}
          <footer className="friday-footer">
            <div className="friday-footer-title">F.R.I.D.A.Y. ONLINE</div>
            <div className="friday-footer-status">PHASE 1 ACTIVE · PHASE 2 IN PROGRESS</div>
            <div className="friday-footer-link">github.com/michaelpreciado/FRIDAY</div>
          </footer>
        </article>
      </div>
    </PageTransition>
  );
}

export default OpenClawWorkflow;
