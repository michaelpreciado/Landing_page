import React, { useEffect } from 'react';
import MatrixRainBackground from './MatrixRainBackground';
import PageTransition from './PageTransition.jsx';
import ReturnButton from './ReturnButton.jsx';
import LazyImage from './LazyImage';
import useTypewriter from '../hooks/useTypewriter';
import { autoApplyLiquidGlass } from '../utils/liquidGlass.js';

function AIServer() {
  const typedTitle = useTypewriter("Local AI and Storage Server (FRIDAY)", { speed: 35, scrambleOnMount: true });

  useEffect(() => {
    autoApplyLiquidGlass();
    const style = document.createElement('style');
    style.textContent = `
      .server-journey-container {
        max-width: 900px;
        margin: 0 auto;
        padding: 6rem 1rem 2rem;
      }
      .journey-title {
        font-size: 2.5rem;
        text-align: center;
        margin-bottom: 1rem;
      }
      .journey-intro {
        text-align: center;
        font-style: italic;
        color: var(--medium-text);
        margin-bottom: 3rem;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
      }
      .journey-section {
        margin-bottom: 3rem;
        border-bottom: 1px solid var(--border-color);
        padding-bottom: 2rem;
      }
      .journey-section:last-child {
        border-bottom: none;
      }
      .journey-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        align-items: center;
      }
      .journey-section h2 {
        font-family: var(--font-pixel);
        font-size: 1.8rem;
        margin-bottom: 1rem;
      }
      .journey-section h3 {
        font-size: 1.2rem;
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
      }
      .journey-section p {
        line-height: 1.7;
        margin-bottom: 1rem;
      }
      .code-block {
        background: var(--code-bg);
        padding: 1rem;
        border-radius: 8px;
        margin: 1rem 0;
        overflow-x: auto;
      }
      .code-block pre {
        font-family: var(--font-mono);
        font-size: 0.85rem;
        margin: 0;
        white-space: pre-wrap;
        word-break: break-word;
      }
      .issue-box {
        background: var(--accent-bg);
        border: 1px solid var(--accent-color);
        padding: 1rem;
        border-radius: 8px;
        margin-top: 1rem;
        font-size: 0.9rem;
      }
      .hologram-container {
        background: linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(0, 255, 255, 0.02));
        border: 1px solid rgba(0, 212, 255, 0.2);
        box-shadow: 0 0 15px rgba(0, 212, 255, 0.1), inset 0 0 10px rgba(0, 255, 255, 0.05);
        backdrop-filter: blur(5px);
        border-radius: 12px;
        padding: 0.75rem;
        position: relative;
      }
      .hologram-container img, .hologram-container .lazy-image {
        border-radius: 8px;
      }

      @media (max-width: 768px) {
        .server-journey-container {
          padding-top: 5rem;
        }
        .journey-grid {
          grid-template-columns: 1fr;
        }
        .journey-title {
          font-size: 1.8rem;
        }
        .journey-section h2 {
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
        <div className="server-journey-container">
          <h1 className="journey-title">{typedTitle}</h1>
          <p className="journey-intro">
            This is a write-up of how I personally set up my local server for AI models and storage, the issues I ran into, and the hardware I used.
          </p>

          <div className="hologram-container" style={{ marginBottom: '3rem' }}>
            <LazyImage
              src="/images/Server/IMG_1039.jpeg"
              alt="Local AI Server infrastructure setup"
              priority={true}
            />
          </div>

          <section className="journey-section">
            <div className="journey-grid">
              <div>
                <h2>💻 My Computer Specs</h2>
                <ul>
                  <li><strong>OS:</strong> Ubuntu Linux</li>
                  <li><strong>GPU:</strong> NVIDIA RTX 3060 Ti</li>
                  <li><strong>CPU:</strong> Intel i9-10850K</li>
                  <li><strong>RAM:</strong> 32GB DDR4</li>
                  <li><strong>Storage:</strong> 1TB NVMe (OS) + 2TB HDD (Storage)</li>
                  <li><strong>Networking:</strong> Gigabit Ethernet</li>
                </ul>
              </div>
              <div className="hologram-container">
                <LazyImage src="/images/Server/IMG_1081.jpeg" alt="Server hardware setup" />
              </div>
            </div>
          </section>

          <section className="journey-section">
            <h2>🔧 Step 1: Prepping the Machine</h2>
            <p>I started with a clean Ubuntu install. First, I updated the system and installed the basics.</p>
            <div className="code-block">
              <pre>{`sudo apt update && sudo apt -y upgrade
sudo apt -y install build-essential curl wget git ufw python3-venv pipx jq
pipx ensurepath`}</pre>
            </div>
            <div className="issue-box">
              <strong>Issue I ran into:</strong> I forgot to enable <code>pipx</code> in my PATH, so <code>open-webui</code> wouldn’t install. Fixed it with: <code>pipx ensurepath</code>
            </div>
            <p>I also set up a firewall. At first, I forgot to open port 8080, which caused the WebUI to be unreachable on my LAN.</p>
            <div className="code-block">
              <pre>{`sudo ufw allow OpenSSH
sudo ufw allow 8080/tcp
sudo ufw --force enable`}</pre>
            </div>
          </section>

          <section className="journey-section">
            <h2>🎮 Step 2: NVIDIA GPU Drivers</h2>
            <p>GPU acceleration is crucial for inference. The `ubuntu-drivers` tool simplifies this process.</p>
            <div className="code-block">
              <pre>{`sudo ubuntu-drivers install
sudo reboot`}</pre>
            </div>
            <div className="issue-box">
              <strong>Issue:</strong> After reboot, <code>nvidia-smi</code> failed due to old conflicting drivers. Re-installing with the tool fixed it.
            </div>
          </section>
          
          <section className="journey-section">
             <h2>🤖 Step 3 & 4: AI Runtime & WebUI</h2>
            <div className="journey-grid">
              <div>
                <h3>Option A: Ollama</h3>
                <p>Ollama is a smooth, command-line focused option that's easy to set up.</p>
                <div className="code-block">
                  <pre>{`curl -fsSL https://ollama.com/install.sh | sh`}</pre>
                </div>
                <h3>Option B: LM Studio</h3>
                <p>LM Studio provides a nice GUI but requires enabling the Local Server on port 1234 for WebUI integration.</p>
                <h3>Open WebUI Setup</h3>
                <p>I installed WebUI via pipx and created a systemd service to run it on boot.</p>
                 <div className="issue-box">
                  <strong>Issue:</strong> The service stopped on logout because I forgot to enable lingering for the user session.
                </div>
              </div>
              <div className="hologram-container">
                <LazyImage src="/images/Server/video-127_singular_display.gif" alt="AI Dashboard" />
              </div>
            </div>
          </section>

          <section className="journey-section">
            <h2>☁️ Step 5 & 6: Cloudflare & Storage</h2>
            <div className="journey-grid">
                <div>
                    <h3>Cloudflare Tunnel</h3>
                    <p>I wanted external access without opening ports, so I installed <code>cloudflared</code> and created a simple config.</p>
                    <div className="code-block">
                        <pre>{`ingress:
- hostname: mydomain.com
  service: http://localhost:8080
- service: http_status:404`}</pre>
                    </div>
                    <div className="issue-box">
                        <strong>Issue:</strong> The tunnel failed because I edited the wrong config file. Checking <code>systemctl status cloudflared</code> revealed the correct path.
                    </div>
                </div>
                <div>
                    <h3>Storage Setup</h3>
                    <p>I formatted and mounted a spare 2TB HDD for general storage using <code>parted</code> and <code>mkfs</code>.</p>
                    <div className="code-block">
                        <pre>{`sudo parted /dev/sdb --script mklabel gpt mkpart ...
sudo mkfs.ext4 -F /dev/sdb1
sudo mkdir -p /srv/storage
echo "/dev/sdb1 ..." | sudo tee -a /etc/fstab
sudo mount -a`}</pre>
                    </div>
                </div>
            </div>
          </section>

          <section className="journey-section">
              <h2>📂 Step 7 & 8: File Sharing & AI Tools</h2>
              <div className="journey-grid">
                  <div className="hologram-container">
                    <LazyImage src="/images/Server/video-89_singular_display.gif" alt="AI Inference in action" />
                  </div>
                  <div>
                      <h3>Samba File Sharing</h3>
                      <p>I set up Samba to access the storage from my laptop. A firewall rule was needed to allow SMB traffic.</p>
                      <div className="issue-box">
                        <strong>Issue:</strong> The share wasn't showing up. The firewall was blocking SMB. Fixed with: <code>sudo ufw allow 139,445/tcp</code>
                      </div>
                      <h3>Read/Write Tools</h3>
                      <p>I added simple Python tools to allow the AI to read and write files directly to the server's storage.</p>
                      <div className="code-block">
                          <pre>{`def write_file(path, content):
    with open(path, 'w') as f:
        f.write(content)`}</pre>
                      </div>
                  </div>
              </div>
          </section>

          <section className="journey-section">
              <h2>🗂️ Step 9 & 10: Notion & Monitoring</h2>
              <div className="journey-grid">
                  <div>
                      <h3>Notion Integration</h3>
                      <p>To automatically log chats, I connected the server to a Notion database using their API.</p>
                      <div className="code-block">
                          <pre>{`export NOTION_API_KEY=secret_xxx
export NOTION_DATABASE_ID=xxx`}</pre>
                      </div>
                      <div className="issue-box">
                          <strong>Issue:</strong> JSON errors occurred due to a mismatched Notion API version. Setting <code>"Notion-Version": "2022-06-28"</code> fixed it.
                      </div>
                      <h3>Monitoring</h3>
                      <p>I use a few key commands to keep an eye on the system's performance.</p>
                      <div className="code-block">
                          <pre>{`watch -n 2 nvidia-smi
journalctl -u open-webui --user -f`}</pre>
                      </div>
                  </div>
                  <div className="hologram-container">
                      <LazyImage src="/images/Server/video-93_singular_display.gif" alt="Server Monitoring" />
                  </div>
              </div>
          </section>

          <section className="journey-section">
              <h2>🎯 End Goals Achieved</h2>
              <ul>
                <li><strong>Natural Language Read/Write:</strong> I can talk to my AI and have it read or write directly to my file system.</li>
                <li><strong>Media Storage:</strong> All 141GB of my Google Photos are backed up locally, accessible via my shared storage.</li>
                <li><strong>Personalized AI:</strong> I run a local AI with memory of my life, allowing it to provide a more personal experience.</li>
                <li><strong>Remote Access:</strong> The chat interface is locally hosted but available anywhere via my VPN tunnel.</li>
                <li><strong>File Management:</strong> I can retrieve directory info, create folders, and save new files straight from the AI.</li>
                <li><strong>Scalable Learning:</strong> The model can keep learning over time, and I can swap in any open-source model free of charge.</li>
              </ul>
              <div className="issue-box">
                <strong>⚡ What’s Next:</strong> I’m already planning upgrades — more storage, stronger GPUs, and new tools — to push this setup even further.
              </div>
          </section>

          <section className="journey-section">
              <h2>💭 Reflection</h2>
              <p>The biggest issues I hit were related to networking and permissions:</p>
              <ul>
                <li>Forgetting firewall rules (blocked WebUI & Samba)</li>
                <li>Wrong ports for LM Studio → WebUI integration</li>
                <li>Wrong Cloudflare config path</li>
                <li>Not enabling lingering for the systemd service</li>
              </ul>
              <p>After working through those, the server now runs smoothly and has become my personal AI + storage hub. 🚀</p>
          </section>

          <section>
            <h2>🎬 Final Product Showcase</h2>
            <p>Here's a video of the final server setup in action, demonstrating the interface and capabilities.</p>
            <div className="hologram-container">
              <video width="100%" controls autoPlay loop muted playsInline style={{ borderRadius: '8px', display: 'block' }}>
                <source src="/images/Server/IMG_1285.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </section>

        </div>
      </main>
    </PageTransition>
  );
}

export default AIServer;
