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
    
    // Reading progress indicator (throttled for 120Hz scroll smoothness)
    const article = document.querySelector('.server-journey-container');
    const progressBar = document.querySelector('.reading-progress');
    let progressFrame = null;

    const computeReadingProgress = () => {
      if (!article || !progressBar) return;

      const articleHeight = article.offsetHeight;
      const articleTop = article.offsetTop;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const progress = Math.min(
        Math.max((scrollPosition - articleTop + windowHeight) / articleHeight, 0),
        1
      );

      progressBar.style.transform = `scaleX(${progress})`;
    };

    const scheduleReadingProgress = () => {
      if (progressFrame !== null) return;
      progressFrame = requestAnimationFrame(() => {
        computeReadingProgress();
        progressFrame = null;
      });
    };

    window.addEventListener('scroll', scheduleReadingProgress, { passive: true });
    computeReadingProgress(); // Initial call
    
    const style = document.createElement('style');
    style.textContent = `
      /* === ENHANCED BLOG ARTICLE STYLES === */
      .server-journey-container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 6rem 2rem 2rem;
        line-height: 1.8;
        font-family: 'Inter', var(--font-sans);
      }

      /* Magazine-style article header */
      .article-header {
        text-align: center;
        margin-bottom: 4rem;
        padding: 3rem 0;
        border-bottom: 2px solid var(--border-color);
        position: relative;
      }

      .article-header::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 4px;
        background: linear-gradient(90deg, var(--primary-accent), var(--secondary-accent));
        border-radius: 2px;
      }

      .journey-title {
        font-size: clamp(2rem, 5vw, 3.5rem);
        font-weight: 800;
        text-align: center;
        margin-bottom: 1.5rem;
        background: linear-gradient(135deg, var(--light-text), var(--secondary-accent));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        line-height: 1.2;
      }

      .article-meta {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.5rem;
        margin-bottom: 2rem;
        font-size: 0.9rem;
        color: var(--medium-text);
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .meta-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .journey-intro {
        font-size: 1.2rem;
        line-height: 1.6;
        color: var(--light-text);
        font-weight: 400;
        max-width: 700px;
        margin: 0 auto;
        font-style: italic;
      }

      /* Enhanced hero image */
      .hero-image-container {
        margin: 3rem 0 4rem;
        text-align: center;
      }

      .hero-image-frame {
        display: inline-block;
        position: relative;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 
          0 20px 40px rgba(0, 0, 0, 0.3),
          0 0 0 1px rgba(30, 144, 255, 0.2);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        max-width: 100%;
      }

      .hero-image-frame:hover {
        transform: translateY(-8px);
        box-shadow: 
          0 30px 60px rgba(0, 0, 0, 0.4),
          0 0 0 1px rgba(30, 144, 255, 0.4);
      }

      /* Premium section styling */
      .journey-section {
        margin-bottom: 4rem;
        padding: 3rem 0;
        position: relative;
      }

      .journey-section:not(:last-child) {
        border-bottom: 1px solid rgba(30, 144, 255, 0.1);
      }

      .journey-section:not(:last-child)::after {
        content: '';
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 100px;
        height: 2px;
        background: linear-gradient(90deg, var(--primary-accent), transparent);
        border-radius: 1px;
      }

      /* Typography hierarchy */
      .journey-section h2 {
        font-size: clamp(1.5rem, 4vw, 2.2rem);
        font-weight: 700;
        margin-bottom: 1.5rem;
        color: var(--light-text);
        position: relative;
        padding-left: 1rem;
      }

      .journey-section h2::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0.2em;
        width: 4px;
        height: 1.2em;
        background: linear-gradient(180deg, var(--primary-accent), var(--secondary-accent));
        border-radius: 2px;
      }

      .journey-section h3 {
        font-size: 1.3rem;
        font-weight: 600;
        margin: 2rem 0 1rem;
        color: var(--secondary-accent);
      }

      .journey-section p {
        font-size: 1.05rem;
        line-height: 1.8;
        margin-bottom: 1.5rem;
        color: var(--medium-text);
        max-width: 70ch;
      }

      .journey-section ul {
        margin: 1.5rem 0;
        padding-left: 0;
        list-style: none;
      }

      .journey-section li {
        position: relative;
        padding-left: 2rem;
        margin-bottom: 0.8rem;
        font-size: 1.05rem;
        line-height: 1.6;
        color: var(--medium-text);
      }

      .journey-section li::before {
        content: '▶';
        position: absolute;
        left: 0;
        color: var(--primary-accent);
        font-size: 0.8rem;
        top: 0.1em;
      }

      /* Enhanced code blocks */
      .code-block {
        background: rgba(10, 25, 47, 0.8);
        border: 1px solid rgba(30, 144, 255, 0.3);
        padding: 1.5rem;
        border-radius: 12px;
        margin: 2rem 0;
        overflow-x: auto;
        position: relative;
        backdrop-filter: blur(5px);
      }

      .code-block::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--primary-accent), var(--secondary-accent));
        border-radius: 12px 12px 0 0;
      }

      .code-block pre {
        font-family: 'JetBrains Mono', var(--font-mono);
        font-size: 0.9rem;
        margin: 0;
        color: var(--light-text);
        line-height: 1.6;
        white-space: pre-wrap;
        word-break: break-word;
      }

      /* Premium callout boxes */
      .issue-box {
        background: linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(255, 159, 67, 0.05));
        border: 1px solid rgba(255, 107, 107, 0.3);
        border-left: 4px solid rgba(255, 107, 107, 0.8);
        padding: 1.5rem;
        border-radius: 8px;
        margin: 2rem 0;
        font-size: 0.95rem;
        position: relative;
        backdrop-filter: blur(5px);
      }

      .issue-box::before {
        content: '⚠️';
        position: absolute;
        top: -8px;
        left: 16px;
        background: var(--dark-bg);
        padding: 0 8px;
        font-size: 1.1rem;
      }

      .issue-box strong {
        color: #ff6b6b;
        font-weight: 600;
      }

      /* Achievement/goal boxes */
      .achievement-box {
        background: linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(139, 195, 74, 0.05));
        border: 1px solid rgba(76, 175, 80, 0.3);
        border-left: 4px solid rgba(76, 175, 80, 0.8);
        padding: 1.5rem;
        border-radius: 8px;
        margin: 2rem 0;
        font-size: 0.95rem;
        position: relative;
        backdrop-filter: blur(5px);
      }

      .achievement-box::before {
        content: '🎯';
        position: absolute;
        top: -8px;
        left: 16px;
        background: var(--dark-bg);
        padding: 0 8px;
        font-size: 1.1rem;
      }

      .achievement-box strong {
        color: #4caf50;
        font-weight: 600;
      }

      /* Enhanced grid layout */
      .journey-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        align-items: start;
        margin: 2rem 0;
      }

      .grid-content {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      /* Enhanced hologram containers */
      .hologram-container {
        background: linear-gradient(135deg, rgba(0, 212, 255, 0.08), rgba(0, 255, 255, 0.04));
        border: 1px solid rgba(0, 212, 255, 0.25);
        box-shadow: 
          0 8px 32px rgba(0, 212, 255, 0.15),
          inset 0 1px 0 rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(8px);
        border-radius: 16px;
        padding: 1rem;
        position: relative;
        transition: all 0.3s ease;
      }

      .hologram-container:hover {
        transform: translateY(-4px);
        box-shadow: 
          0 16px 48px rgba(0, 212, 255, 0.2),
          inset 0 1px 0 rgba(255, 255, 255, 0.15);
        border-color: rgba(0, 212, 255, 0.4);
      }

      .hologram-container img, 
      .hologram-container .lazy-image,
      .hologram-container video {
        border-radius: 12px;
        width: 100%;
        height: auto;
        display: block;
      }

      /* Video showcase styling */
      .video-showcase {
        margin: 3rem 0;
        text-align: center;
      }

      .video-showcase h2 {
        margin-bottom: 1rem;
      }

      .video-showcase p {
        margin-bottom: 2rem;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
      }

      /* Reading progress indicator */
      .reading-progress {
        position: fixed;
        top: 60px; /* Position below the navigation button */
        left: 0;
        width: 100%;
        height: 3px;
        background: linear-gradient(90deg, var(--primary-accent), var(--secondary-accent));
        transform-origin: left;
        transform: scaleX(0);
        z-index: 9998; /* Lower than navigation header */
        transition: transform 0.1s ease;
      }

      /* Mobile optimizations */
      @media (max-width: 768px) {
        .server-journey-container {
          padding: 5rem 1rem 2rem;
        }

        .journey-grid {
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .journey-title {
          font-size: clamp(1.5rem, 8vw, 2.5rem);
        }

        .article-meta {
          flex-direction: column;
          gap: 0.5rem;
        }

        .journey-section h2 {
          font-size: clamp(1.2rem, 6vw, 1.8rem);
        }

        .journey-section p,
        .journey-section li {
          font-size: 1rem;
        }

        .code-block {
          padding: 1rem;
          margin: 1.5rem 0;
        }

        .hologram-container {
          padding: 0.75rem;
        }
      }

      /* Print styles */
      @media print {
        .server-journey-container {
          max-width: none;
          padding: 0;
        }

        .hologram-container {
          border: 1px solid #ccc;
          box-shadow: none;
          background: none;
        }

        .code-block {
          border: 1px solid #ccc;
          background: #f5f5f5;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      window.removeEventListener('scroll', scheduleReadingProgress);
      if (progressFrame !== null) {
        cancelAnimationFrame(progressFrame);
      }
      document.head.removeChild(style);
    };
  }, []);

  return (
    <PageTransition>
      <MatrixRainBackground />
      <ReturnButton to="/projects" />
      <main>
        <div className="reading-progress"></div>
        <article className="server-journey-container">
          <header className="article-header">
            <div className="article-meta">
              <div className="meta-item">
                <span>📅</span>
                <span>Aug 27, 2025</span>
              </div>
              <div className="meta-item">
                <span>🏷️</span>
                <span>AI • DevOps • Tutorial</span>
              </div>
            </div>
            <h1 className="journey-title">{typedTitle}</h1>
            <p className="journey-intro">
              This is a write-up of how I personally set up my local server for AI models and storage, the issues I ran into, and the hardware I used.
            </p>
          </header>

          <div className="hero-image-container">
            <div className="hero-image-frame">
              <LazyImage
                src="/images/Server/IMG_1039.jpeg"
                alt="Local AI Server infrastructure setup"
                priority={true}
                fetchPriority="high"
                intrinsic={true}
                ratio={'16 / 9'}
              />
            </div>
          </div>

          <section className="journey-section">
            <h2>💻 My Computer Specs</h2>
            <div className="journey-grid">
              <div className="grid-content">
                <p>Here's what I'm working with. Nothing too crazy, but it gets the job done for running AI models locally.</p>
                <ul>
                  <li><strong>OS:</strong> Ubuntu Linux</li>
                  <li><strong>GPU:</strong> NVIDIA RTX 3060 Ti</li>
                  <li><strong>CPU:</strong> Intel i9-10850K</li>
                  <li><strong>RAM:</strong> 32GB DDR4</li>
                  <li><strong>Storage:</strong> 1TB NVMe (OS) + 2TB HDD (Storage)</li>
                  <li><strong>Networking:</strong> Gigabit Ethernet</li>
                </ul>
                <p>The 8GB VRAM on the 3060 Ti is actually pretty solid for most models I want to run.</p>
              </div>
              <div className="hologram-container">
                <LazyImage src="/images/Server/IMG_1081.jpeg" alt="Server hardware setup" intrinsic={true} priority={true} fetchPriority="low" ratio={'4 / 3'} />
              </div>
            </div>
          </section>

          <section className="journey-section">
            <h2>🔧 Step 1: Prepping the Machine</h2>
            <p>I started with a clean Ubuntu install. First, I updated the system and installed the basics.</p>
            
            <h3>Installing the essentials</h3>
            <div className="code-block">
              <pre>{`# Update system packages
sudo apt update && sudo apt -y upgrade

# Install development tools and utilities
sudo apt -y install build-essential curl wget git ufw python3-venv pipx jq

# Enable pipx PATH integration
pipx ensurepath`}</pre>
            </div>
            
            <div className="issue-box">
              <strong>Issue I ran into:</strong> I forgot to enable <code>pipx</code> in my PATH, so <code>open-webui</code> wouldn't install. Fixed it with: <code>pipx ensurepath</code>
            </div>

            <h3>Setting up the firewall</h3>
            <p>I also set up a firewall. At first, I forgot to open port 8080, which caused the WebUI to be unreachable on my LAN.</p>
            <div className="code-block">
              <pre>{`# Configure firewall rules
sudo ufw allow OpenSSH
sudo ufw allow 8080/tcp  # For Open WebUI
sudo ufw allow 1234/tcp  # For LM Studio (if using)
sudo ufw --force enable

# Verify configuration
sudo ufw status`}</pre>
            </div>
            
            <div className="issue-box">
              <strong>Issue:</strong> Forgot to open port 8080, so the WebUI wasn't reachable from other devices on my network. Double-check your firewall rules.
            </div>
          </section>

          <section className="journey-section">
            <h2>🎮 Step 2: NVIDIA GPU Drivers</h2>
            <p>GPU acceleration is crucial for inference. The `ubuntu-drivers` tool simplifies this process.</p>
            
            <div className="code-block">
              <pre>{`# Automatic driver installation (recommended)
sudo ubuntu-drivers install

# Manual verification after reboot
nvidia-smi

# Optional: Install CUDA toolkit for development
sudo apt install nvidia-cuda-toolkit`}</pre>
            </div>
            
            <div className="issue-box">
              <strong>Issue:</strong> After reboot, <code>nvidia-smi</code> failed due to old conflicting drivers. Re-installing with the tool fixed it.
            </div>
          </section>
          
          <section className="journey-section">
            <h2>🤖 Step 3: AI Runtime</h2>
            <p>I experimented with two popular options for running local AI models.</p>
            
            <div className="journey-grid">
              <div className="grid-content">
                <h3>Option A: Ollama</h3>
                <p>Ollama is a smooth, command-line focused option that's easy to set up.</p>
                
                <div className="code-block">
                  <pre>{`# Install Ollama
curl -fsSL https://ollama.com/install.sh | sh

# Download and run models
ollama pull llama2:7b
ollama run llama2:7b

# List installed models
ollama list`}</pre>
                </div>
                
                <p><strong>Pros:</strong> Simple, fast, great for CLI lovers</p>
                <p><strong>Cons:</strong> No GUI, terminal-only</p>
              </div>
              
              <div className="grid-content">
                <h3>Option B: LM Studio</h3>
                <p>LM Studio provides a nice GUI but requires enabling the Local Server on port 1234 for WebUI integration.</p>
                
                <div className="code-block">
                  <pre>{`# Download from lmstudio.ai
# Install via AppImage or .deb package

# Enable Local Server (Important!)
# Settings → Local Server → Enable
# Port: 1234 (default)
# API Compatible: OpenAI`}</pre>
                </div>
                
                <p><strong>Pros:</strong> Easy to use, good for beginners</p>
                <p><strong>Cons:</strong> Uses more resources</p>
              </div>
            </div>
            
            <div className="issue-box">
              <strong>Tip:</strong> If using LM Studio with Open WebUI, make sure to enable the Local Server on port 1234.
            </div>
          </section>

          <section className="journey-section">
            <h2>🌐 Step 4: Open WebUI</h2>
            <p>I installed WebUI via pipx and created a systemd service to run it on boot.</p>
            
            <h3>Installation</h3>
            <div className="code-block">
              <pre>{`# Install Open WebUI using pipx
pipx install open-webui

# Alternative: Docker installation
# docker run -d -p 3000:8080 -v open-webui:/app/backend/data --name open-webui ghcr.io/open-webui/open-webui:main

# Run Open WebUI
open-webui serve --host 0.0.0.0 --port 8080`}</pre>
            </div>

            <h3>Systemd Service (Auto-start on Boot)</h3>
            <div className="code-block">
              <pre>{`# Create systemd service file
sudo tee /etc/systemd/system/open-webui.service << EOF
[Unit]
Description=Open WebUI
After=network.target

[Service]
Type=exec
User=$USER
ExecStart=/home/$USER/.local/bin/open-webui serve --host 0.0.0.0 --port 8080
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF

# Enable and start service
sudo systemctl daemon-reload
sudo systemctl enable open-webui
sudo systemctl start open-webui

# Enable user lingering (important!)
sudo loginctl enable-linger $USER`}</pre>
            </div>
            
            <div className="issue-box">
              <strong>Issue:</strong> The service stopped on logout because I forgot to enable lingering for the user session.
            </div>

            <div className="hologram-container" style={{ maxWidth: '450px', margin: '2rem auto 0' }}>
              <LazyImage src="/images/Server/video-127_singular_display.gif" alt="Open WebUI Dashboard Interface" intrinsic={true} priority={true} fetchPriority="high" />
            </div>
          </section>

          <section className="journey-section">
            <h2>☁️ Step 5: Cloudflare Tunnel</h2>
            <p>I wanted external access without opening ports, so I installed <code>cloudflared</code> and created a simple config.</p>
            
            <h3>Setting up the tunnel</h3>
            <div className="code-block">
              <pre>{`# Install cloudflared
wget -q https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb
sudo dpkg -i cloudflared-linux-amd64.deb

# Authenticate with Cloudflare
cloudflared tunnel login

# Create tunnel
cloudflared tunnel create ai-server

# Configure tunnel
cat > ~/.cloudflared/config.yml << EOF
tunnel: ai-server
credentials-file: /home/$USER/.cloudflared/[TUNNEL-UUID].json

ingress:
  - hostname: ai.yourdomain.com
    service: http://localhost:8080
  - service: http_status:404
EOF

# Install as service
sudo cloudflared service install
sudo systemctl enable cloudflared
sudo systemctl start cloudflared`}</pre>
            </div>
            
            <div className="issue-box">
              <strong>Issue:</strong> The tunnel failed because I edited the wrong config file. Checking <code>systemctl status cloudflared</code> revealed the correct path.
            </div>
          </section>
          
          <section className="journey-section">
            <h2>💾 Step 6: Storage Setup</h2>
            <p>I formatted and mounted a spare 2TB HDD for general storage using <code>parted</code> and <code>mkfs</code>.</p>
            
            <h3>Setting up the drive</h3>
            <div className="code-block">
              <pre>{`# Identify the target drive
lsblk
sudo fdisk -l

# Create GPT partition table and primary partition
sudo parted /dev/sdb --script mklabel gpt
sudo parted /dev/sdb --script mkpart primary ext4 0% 100%

# Format with ext4 filesystem
sudo mkfs.ext4 -F /dev/sdb1

# Create mount point
sudo mkdir -p /srv/ai-storage

# Add to fstab for persistent mounting
echo "/dev/sdb1 /srv/ai-storage ext4 defaults 0 2" | sudo tee -a /etc/fstab

# Mount the filesystem
sudo mount -a

# Set proper permissions
sudo chown -R $USER:$USER /srv/ai-storage
chmod 755 /srv/ai-storage`}</pre>
            </div>

            <h3>Directory Structure</h3>
            <div className="code-block">
              <pre>{`# Create organized directory structure
mkdir -p /srv/ai-storage/{models,datasets,outputs,backups}
mkdir -p /srv/ai-storage/models/{ollama,lm-studio,custom}
mkdir -p /srv/ai-storage/outputs/{conversations,generated-files}

# Verify structure
tree /srv/ai-storage -L 2`}</pre>
            </div>
          </section>

          <section className="journey-section">
            <h2>📂 Step 7: Samba File Sharing</h2>
            <p>I set up Samba to access the storage from my laptop. A firewall rule was needed to allow SMB traffic.</p>
            
            <div className="code-block">
              <pre>{`# Install Samba
sudo apt install samba samba-common-bin

# Create Samba user
sudo smbpasswd -a $USER

# Configure Samba share
sudo tee -a /etc/samba/smb.conf << EOF

[ai-storage]
    comment = AI Server Storage
    path = /srv/ai-storage
    browseable = yes
    writeable = yes
    only guest = no
    create mask = 0777
    directory mask = 0777
    public = no
    valid users = $USER
EOF

# Restart Samba services
sudo systemctl restart smbd
sudo systemctl restart nmbd
sudo systemctl enable smbd
sudo systemctl enable nmbd`}</pre>
            </div>
            
            <div className="issue-box">
              <strong>Issue:</strong> The share wasn't showing up. The firewall was blocking SMB. Fixed with: <code>sudo ufw allow 139,445/tcp</code>
            </div>
          </section>
          
          <section className="journey-section">
            <h2>📖 Step 8: Read/Write Tools</h2>
            <p>I added simple Python tools to allow the AI to read and write files directly to the server's storage.</p>
            
            <div className="journey-grid">
              <div className="grid-content">
                <h3>Basic file functions</h3>
                <div className="code-block">
                  <pre>{`import os
import json
from pathlib import Path

def write_file(path, content, mode='w'):
    """Write content to file with error handling"""
    try:
        Path(path).parent.mkdir(parents=True, exist_ok=True)
        with open(path, mode, encoding='utf-8') as f:
            f.write(content)
        return f"Successfully wrote to {path}"
    except Exception as e:
        return f"Error writing file: {str(e)}"

def read_file(path):
    """Read file content with error handling"""
    try:
        with open(path, 'r', encoding='utf-8') as f:
            return f.read()
    except Exception as e:
        return f"Error reading file: {str(e)}"

def list_directory(path):
    """List directory contents"""
    try:
        items = []
        for item in Path(path).iterdir():
            items.append({
                'name': item.name,
                'type': 'directory' if item.is_dir() else 'file',
                'size': item.stat().st_size if item.is_file() else None
            })
        return json.dumps(items, indent=2)
    except Exception as e:
        return f"Error listing directory: {str(e)}"`}</pre>
                </div>
              </div>
              
              <div className="hologram-container">
                <LazyImage src="/images/Server/video-89_singular_display.gif" alt="AI performing file operations through natural language commands" intrinsic={true} priority={true} fetchPriority="low" />
              </div>
            </div>
            
            <h3>How it works</h3>
            <p>These functions get exposed to the AI so I can just ask it to "read my config file" or "create a new folder" and it handles it.</p>
          </section>

          <section className="journey-section">
            <h2>🗂️ Step 9: Notion Integration</h2>
            <p>To automatically log chats, I connected the server to a Notion database using their API.</p>
            <div className="code-block">
                <pre>{`export NOTION_API_KEY=secret_xxx
export NOTION_DATABASE_ID=xxx`}</pre>
            </div>
            <div className="issue-box">
                <strong>Issue:</strong> JSON errors occurred due to a mismatched Notion API version. Setting <code>"Notion-Version": "2022-06-28"</code> fixed it.
            </div>
          </section>

          <section className="journey-section">
            <h2>🔍 Step 10: Monitoring</h2>
            <p>I use a few key commands to keep an eye on the system's performance.</p>
            <div className="code-block">
                <pre>{`watch -n 2 nvidia-smi
journalctl -u open-webui --user -f`}</pre>
            </div>
            <div className="hologram-container" style={{ maxWidth: '350px', margin: '2rem auto 0' }}>
                <LazyImage src="/images/Server/video-93_singular_display.gif" alt="Server Monitoring" intrinsic={true} priority={true} fetchPriority="low" />
            </div>
          </section>

          <section className="journey-section">
              <h2>🎯 End Goals Achieved</h2>
              <p>Here's what I can do now that everything is set up:</p>
              
              <ul>
                <li><strong>Natural Language Read/Write:</strong> I can talk to my AI and have it read or write directly to my file system.</li>
                <li><strong>Media Storage:</strong> All 141GB of my Google Photos are backed up locally, accessible via my shared storage.</li>
                <li><strong>Personalized AI:</strong> I run a local AI with memory of my life, allowing it to provide a more personal experience.</li>
                <li><strong>Remote Access:</strong> The chat interface is locally hosted but available anywhere via my VPN tunnel.</li>
                <li><strong>File Management:</strong> I can retrieve directory info, create folders, and save new files straight from the AI.</li>
                <li><strong>Scalable Learning:</strong> The model can keep learning over time, and I can swap in any open-source model free of charge.</li>
              </ul>
              <div className="issue-box">
                <strong>⚡ What's Next:</strong> I'm already planning upgrades — more storage, stronger GPUs, and new tools — to push this setup even further.
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

          <section className="video-showcase">
            <h2>🎬 Final Product Showcase</h2>
            <p>Here's a video of the final server setup in action, demonstrating the interface and capabilities.</p>
            <div className="hologram-container">
              <video width="100%" controls autoPlay loop muted playsInline style={{ borderRadius: '12px', display: 'block' }}>
                <source src="/images/Server/IMG_1285.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </section>

        </article>
      </main>
    </PageTransition>
  );
}

export default AIServer;
