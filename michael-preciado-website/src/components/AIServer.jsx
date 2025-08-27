import React, { useEffect } from 'react';
import MatrixRainBackground from './MatrixRainBackground';
import PageTransition from './PageTransition.jsx';
import ReturnButton from './ReturnButton.jsx';
import LazyImage from './LazyImage';
import useTypewriter from '../hooks/useTypewriter';
import { autoApplyLiquidGlass } from '../utils/liquidGlass.js';

function AIServer() {
  const typedTitle = useTypewriter("My Journey: Building a Local AI + Storage Server", { speed: 35, scrambleOnMount: true });

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

            {/* Hero Image */}
            <figure className="blog-hero-image" style={{ marginBottom: '2rem', width: '100%' }}>
              <LazyImage
                src="/images/projects/server-rack-full.webp"
                alt="Local AI Server infrastructure setup"
                priority={true}
                quality="medium"
                maxWidth="100%"
                objectFit="cover"
                placeholder={<div style={{ width: '100%', height: '400px', background: 'var(--medium-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>🤖</div>}
              />
              <figcaption className="blog-hero-caption" style={{ textAlign: 'center', marginTop: '0.5rem' }}>
                Complete server infrastructure powering the local AI system
              </figcaption>
            </figure>

            <p style={{ fontStyle: 'italic', color: 'var(--medium-text)', marginBottom: '2rem' }}>
              This is a write‑up of how I personally set up my local server for AI models and storage, the issues I ran into along the way, and the hardware I used.
            </p>

            {/* Computer Specs */}
            <h2 style={{ fontFamily: 'var(--font-pixel)', fontSize: '1.8rem', margin: '2rem 0 1rem' }}>💻 My Computer Specs</h2>
            <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)', marginBottom: '2rem' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>OS:</strong> Ubuntu Linux</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>GPU:</strong> NVIDIA RTX 3060 Ti</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>CPU:</strong> Intel i9-10850K</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>RAM:</strong> 32GB DDR4</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Storage:</strong> 1TB NVMe (OS) + 2TB HDD (Storage)</li>
                <li><strong>Networking:</strong> Gigabit Ethernet</li>
              </ul>
            </div>

            {/* Step 1: Prepping the Machine */}
            <h2 style={{ fontFamily: 'var(--font-pixel)', fontSize: '1.8rem', margin: '2rem 0 1rem' }}>🔧 Step 1: Prepping the Machine</h2>
            <p>I started with a clean Ubuntu install. First thing I did was update the system and install basics:</p>
            
            <div style={{ background: 'var(--code-bg)', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem' }}>
              <pre style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '0.85rem', overflow: 'auto' }}>{`sudo apt update && sudo apt -y upgrade
sudo apt -y install build-essential curl wget git ufw python3-venv pipx jq
pipx ensurepath`}</pre>
            </div>

            <div style={{ background: 'var(--accent-bg)', padding: '1rem', borderRadius: '6px', border: '1px solid var(--accent-color)', marginBottom: '1rem' }}>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>
                <strong>Issue I ran into:</strong> I forgot to enable <code>pipx</code> in my PATH, so at first <code>open-webui</code> wouldn't install. Fixed it with: <code>pipx ensurepath</code>
              </p>
            </div>

            <p>I also set up a firewall with UFW. At first, I forgot to open port 8080, which caused WebUI to be unreachable on my LAN.</p>

            <div style={{ background: 'var(--code-bg)', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
              <pre style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '0.85rem', overflow: 'auto' }}>{`sudo ufw allow OpenSSH
sudo ufw allow 8080/tcp
sudo ufw --force enable`}</pre>
            </div>

            {/* Hardware Setup Image */}
            <figure className="blog-hero-image" style={{ margin: '2rem 0', width: '100%' }}>
              <LazyImage
                src="/images/projects/server-hardware-setup.webp"
                alt="Server hardware configuration and setup"
                quality="medium"
                maxWidth="100%"
                objectFit="cover"
                placeholder={<div style={{ width: '100%', height: '300px', background: 'var(--medium-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>🖥️</div>}
              />
              <figcaption className="blog-hero-caption" style={{ textAlign: 'center', marginTop: '0.5rem' }}>
                Physical server configuration and networking setup
              </figcaption>
            </figure>

            {/* Step 2: NVIDIA GPU Drivers */}
            <h2 style={{ fontFamily: 'var(--font-pixel)', fontSize: '1.8rem', margin: '2rem 0 1rem' }}>🎮 Step 2: NVIDIA GPU Drivers</h2>
            <p>I needed GPU acceleration for inference, so I ran:</p>
            
            <div style={{ background: 'var(--code-bg)', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem' }}>
              <pre style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '0.85rem', overflow: 'auto' }}>{`sudo ubuntu-drivers install
sudo reboot`}</pre>
            </div>

            <div style={{ background: 'var(--accent-bg)', padding: '1rem', borderRadius: '6px', border: '1px solid var(--accent-color)', marginBottom: '2rem' }}>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>
                <strong>Issue:</strong> After reboot, <code>nvidia-smi</code> failed because I had old drivers still installed. Re‑installing with the <code>ubuntu-drivers</code> tool fixed it. Once <code>nvidia-smi</code> showed the table, I was good.
              </p>
            </div>

            {/* Step 3: Choosing an AI Runtime */}
            <h2 style={{ fontFamily: 'var(--font-pixel)', fontSize: '1.8rem', margin: '2rem 0 1rem' }}>🤖 Step 3: Choosing an AI Runtime</h2>
            <p>I experimented with both options:</p>

            <h3 style={{ marginTop: '1.5rem' }}>Option A: Ollama</h3>
            <div style={{ background: 'var(--code-bg)', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem' }}>
              <pre style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '0.85rem', overflow: 'auto' }}>{`curl -fsSL https://ollama.com/install.sh | sh
ollama pull llama3.1`}</pre>
            </div>
            <p>This worked smoothly, but I found Ollama limited when I wanted a GUI.</p>

            <h3 style={{ marginTop: '1.5rem' }}>Option B: LM Studio</h3>
            <p>This gave me a nice GUI, but I had to remember to enable <strong>Local Server</strong> in settings and set port <code>1234</code>. At first, I got an HTML 404 error because I pointed Open WebUI to the wrong port. Correcting the API base URL fixed it.</p>

            {/* Step 4: Open WebUI Setup */}
            <h2 style={{ fontFamily: 'var(--font-pixel)', fontSize: '1.8rem', margin: '2rem 0 1rem' }}>🌐 Step 4: Open WebUI Setup</h2>
            <p>I installed WebUI with:</p>
            
            <div style={{ background: 'var(--code-bg)', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem' }}>
              <pre style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '0.85rem', overflow: 'auto' }}>{`pipx install open-webui`}</pre>
            </div>

            <p>Then I made a systemd user service so it runs at boot. My first attempt failed because I didn't enable lingering, so the service shut down when I logged out. Fix:</p>

            <div style={{ background: 'var(--code-bg)', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem' }}>
              <pre style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '0.85rem', overflow: 'auto' }}>{`loginctl enable-linger "$USER"`}</pre>
            </div>

            <p>After that, I could access it at <code>http://SERVER_IP:8080</code>.</p>

            {/* Step 5: Cloudflare Tunnel */}
            <h2 style={{ fontFamily: 'var(--font-pixel)', fontSize: '1.8rem', margin: '2rem 0 1rem' }}>☁️ Step 5: Cloudflare Tunnel</h2>
            <p>I wanted external access without opening ports. I installed <code>cloudflared</code> and created a config:</p>

            <div style={{ background: 'var(--code-bg)', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem' }}>
              <pre style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '0.85rem', overflow: 'auto' }}>{`ingress:
  - hostname: mydomain.com
    service: http://localhost:8080
  - service: http_status:404`}</pre>
            </div>

            <div style={{ background: 'var(--accent-bg)', padding: '1rem', borderRadius: '6px', border: '1px solid var(--accent-color)', marginBottom: '2rem' }}>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>
                <strong>Issue:</strong> At first the tunnel wasn't working because I edited the wrong config file. I fixed it by checking <code>systemctl status cloudflared</code> to confirm which config path was in use.
              </p>
            </div>

            {/* Step 6: Storage Setup */}
            <h2 style={{ fontFamily: 'var(--font-pixel)', fontSize: '1.8rem', margin: '2rem 0 1rem' }}>💾 Step 6: Storage Setup</h2>
            <p>I had a spare 2TB HDD for storage. I formatted and mounted it:</p>

            <div style={{ background: 'var(--code-bg)', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
              <pre style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '0.85rem', overflow: 'auto' }}>{`sudo parted /dev/sdb --script mklabel gpt mkpart primary ext4 0% 100%
sudo mkfs.ext4 -F /dev/sdb1
sudo mkdir -p /srv/storage
echo "/dev/sdb1  /srv/storage  ext4  defaults  0  2" | sudo tee -a /etc/fstab
sudo mount -a`}</pre>
            </div>

            {/* Step 7: Samba File Sharing */}
            <h2 style={{ fontFamily: 'var(--font-pixel)', fontSize: '1.8rem', margin: '2rem 0 1rem' }}>📂 Step 7: Samba File Sharing</h2>
            <p>I installed Samba and added a share so I could access files from my laptop.</p>

            <div style={{ background: 'var(--code-bg)', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem' }}>
              <pre style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '0.85rem', overflow: 'auto' }}>{`sudo apt -y install samba`}</pre>
            </div>

            <p>Config:</p>
            <div style={{ background: 'var(--code-bg)', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem' }}>
              <pre style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '0.85rem', overflow: 'auto' }}>{`[storage]
   path = /srv/storage
   browseable = yes
   read only = no
   guest ok = no
   create mask = 0644
   directory mask = 0755`}</pre>
            </div>

            <div style={{ background: 'var(--accent-bg)', padding: '1rem', borderRadius: '6px', border: '1px solid var(--accent-color)', marginBottom: '2rem' }}>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>
                <strong>Issue:</strong> At first, the share wasn't showing up. Turned out my firewall was blocking SMB. Fixed with:
              </p>
              <div style={{ background: 'var(--code-bg)', padding: '1rem', borderRadius: '4px', marginTop: '0.5rem' }}>
                <pre style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>{`sudo ufw allow 139,445/tcp
sudo ufw allow 137,138/udp`}</pre>
              </div>
            </div>

            {/* Step 8: Read/Write Tools */}
            <h2 style={{ fontFamily: 'var(--font-pixel)', fontSize: '1.8rem', margin: '2rem 0 1rem' }}>📖 Step 8: Read/Write Tools</h2>
            <p>I wanted my AI to save outputs directly to disk. I added simple read/write Python tools:</p>

            <div style={{ background: 'var(--code-bg)', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
              <pre style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '0.85rem', overflow: 'auto' }}>{`def read_file(path):
    with open(path, 'r') as f:
        return f.read()

def write_file(path, content):
    with open(path, 'w') as f:
        f.write(content)`}</pre>
            </div>

            <p>This let me generate responses and log them to my storage.</p>

            {/* Step 9: Notion Integration */}
            <h2 style={{ fontFamily: 'var(--font-pixel)', fontSize: '1.8rem', margin: '2rem 0 1rem' }}>🗂️ Step 9: Notion Integration</h2>
            <p>I connected my setup to Notion so chats/logs could be saved to a database. I created an integration, grabbed the <strong>secret token</strong> and <strong>database ID</strong>, then exported them as environment variables:</p>

            <div style={{ background: 'var(--code-bg)', padding: '1.5rem', borderRadius: '8px', marginBottom: '1rem' }}>
              <pre style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '0.85rem', overflow: 'auto' }}>{`export NOTION_API_KEY=secret_xxx
export NOTION_DATABASE_ID=xxx`}</pre>
            </div>

            <p>I used a small Python script (<code>notion_bridge.py</code>) to send prompts and responses directly to Notion. At first, I had JSON errors because I mis‑typed the Notion API version. Fixed by setting:</p>

            <div style={{ background: 'var(--code-bg)', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
              <pre style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '0.85rem', overflow: 'auto' }}>{`"Notion-Version": "2022-06-28"`}</pre>
            </div>

            {/* Step 10: Monitoring */}
            <h2 style={{ fontFamily: 'var(--font-pixel)', fontSize: '1.8rem', margin: '2rem 0 1rem' }}>🔍 Step 10: Monitoring</h2>
            <p>I used these commands to check everything:</p>

            <div style={{ background: 'var(--code-bg)', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
              <pre style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '0.85rem', overflow: 'auto' }}>{`watch -n 2 nvidia-smi
journalctl -u open-webui --user -f
sudo journalctl -u cloudflared -f`}</pre>
            </div>

            {/* Final Result */}
            <h2 style={{ fontFamily: 'var(--font-pixel)', fontSize: '1.8rem', margin: '2rem 0 1rem' }}>✅ Final Result</h2>
            <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)', marginBottom: '2rem' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>Local AI access:</strong> <code>http://SERVER_IP:8080</code></li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Public access (Cloudflare):</strong> <code>https://mydomain.com</code></li>
                <li style={{ marginBottom: '0.5rem' }}><strong>File storage:</strong> accessible via SMB</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>AI tools:</strong> can read/write directly to my server</li>
                <li><strong>Logs:</strong> automatically saved to Notion</li>
              </ul>
            </div>

            {/* Reflection */}
            <h2 style={{ fontFamily: 'var(--font-pixel)', fontSize: '1.8rem', margin: '2rem 0 1rem' }}>💭 Reflection</h2>
            <p>The biggest issues I hit were:</p>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.2rem' }}>
              <li>Forgetting firewall rules (blocked WebUI & Samba)</li>
              <li>Wrong ports for LM Studio → WebUI integration</li>
              <li>Wrong Cloudflare config path</li>
              <li>Not enabling lingering for the systemd service</li>
            </ul>

            <p style={{ marginBottom: '2rem' }}>
              After working through those, the server now runs smoothly and has become my <strong>personal AI + storage hub</strong>. 🚀
            </p>

            {/* Server Setup Video */}
            <h2 style={{ fontFamily: 'var(--font-pixel)', margin: '2rem 0 1rem' }}>Server Infrastructure Walkthrough</h2>
            <div style={{ 
              width: '100%', 
              marginBottom: '2rem',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0, 212, 255, 0.2)'
            }}>
              <video 
                width="100%" 
                height="auto" 
                autoPlay 
                loop 
                muted 
                playsInline
                style={{ 
                  display: 'block',
                  background: 'var(--card-bg)'
                }}
              >
                <source src="/videos/ai-server-slideshow.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div style={{ 
                padding: '1rem', 
                background: 'var(--card-bg)',
                borderTop: '1px solid var(--border-color)'
              }}>
                <p style={{ 
                  margin: 0, 
                  textAlign: 'center', 
                  fontSize: '0.9rem',
                  color: 'var(--medium-text)'
                }}>
                  Interactive slideshow showcasing server hardware, monitoring dashboards, and AI inference interfaces
                </p>
              </div>
            </div>

            {/* Server Setup Gallery */}
            <h2 style={{ fontFamily: 'var(--font-pixel)', margin: '2rem 0 1rem' }}>Detailed Views</h2>
            <div className="blogs-grid" style={{ marginBottom: '2rem', gap: '1rem' }}>
              {[
                { 
                  src: '/images/projects/server-hardware-setup.webp', 
                  title: 'Hardware Setup', 
                  caption: 'Physical server configuration and networking setup'
                },
                { 
                  src: '/images/projects/ai-server-dashboard.webp', 
                  title: 'AI Dashboard', 
                  caption: 'Main control panel for model management and monitoring'
                },
                { 
                  src: '/images/projects/ai-server-monitoring.webp', 
                  title: 'System Monitoring', 
                  caption: 'Real-time performance metrics and resource utilization'
                },
                { 
                  src: '/images/projects/model-inference-screen.webp', 
                  title: 'Model Inference', 
                  caption: 'Live model inference interface and response generation'
                }
              ].map(({ src, title, caption }) => (
                <figure key={title} className="blog-hero-image" style={{ margin: 0 }}>
                  <LazyImage
                    src={src}
                    alt={title}
                    quality="medium"
                    maxWidth="100%"
                    objectFit="cover"
                    placeholder={<div style={{ width: '100%', height: '300px', background: 'var(--medium-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>🖥️</div>}
                  />
                  <figcaption className="blog-hero-caption" style={{ textAlign: 'center', marginTop: '0.5rem', fontSize: '0.9rem' }}>
                    <strong>{title}</strong><br/>
                    <span style={{ color: 'var(--medium-text)' }}>{caption}</span>
                  </figcaption>
                </figure>
              ))}
            </div>


          </article>
        </section>
      </main>
    </PageTransition>
  );
}

export default AIServer;
