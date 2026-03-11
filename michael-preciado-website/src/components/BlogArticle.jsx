import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MatrixRainBackground from './MatrixRainBackground';
import PageTransition from './PageTransition.jsx';
import ReturnButton from './ReturnButton.jsx';
import LazyImage from './LazyImage';
import { blogPosts } from '../data/blogData.js';
import { autoApplyLiquidGlass } from '../utils/liquidGlass.js';

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
};

function BlogArticle() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);
  
  useEffect(() => {
    autoApplyLiquidGlass();
    window.scrollTo(0, 0);
    
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500&display=swap');
      
      .article-editorial {
        min-height: 100vh;
        position: relative;
        color: #E8E4DC;
        font-family: 'Inter', sans-serif;
        font-weight: 300;
        line-height: 1.7;
      }
      .article-container {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem 1.25rem 3rem;
        position: relative;
        z-index: 1;
      }
      .article-header {
        text-align: center;
        margin-bottom: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid rgba(30, 144, 255, 0.2);
      }
      .article-meta {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        font-size: 0.65rem;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: #8B8680;
        margin-bottom: 0.75rem;
      }
      .article-meta span {
        position: relative;
      }
      .article-meta span:not(:last-child)::after {
        content: '·';
        position: absolute;
        right: -0.75rem;
        color: rgba(30, 144, 255, 0.4);
      }
      .article-title {
        font-family: 'Playfair Display', serif;
        font-size: clamp(1.5rem, 5vw, 2.5rem);
        font-weight: 500;
        letter-spacing: 0.01em;
        margin: 0;
        color: #FFFFFF;
        line-height: 1.2;
      }
      .article-date {
        text-align: center;
        font-size: 0.75rem;
        color: #8B8680;
        margin-bottom: 1.5rem;
      }
      .article-hero {
        width: 100%;
        aspect-ratio: 21/9;
        background: rgba(5, 12, 28, 0.6);
        border: 1px solid rgba(30, 144, 255, 0.15);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;
        overflow: hidden;
      }
      .article-hero-emoji {
        font-size: 4rem;
      }
      .article-content {
        color: #B8B0A0;
        font-size: 0.9rem;
        line-height: 1.8;
      }
      .article-content h2 {
        font-family: 'Playfair Display', serif;
        font-size: 1.3rem;
        color: #FFFFFF;
        margin: 2rem 0 1rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid rgba(30, 144, 255, 0.2);
      }
      .article-content h3 {
        font-family: 'Playfair Display', serif;
        font-size: 1.1rem;
        color: #FFFFFF;
        margin: 1.5rem 0 0.75rem;
      }
      .article-content p {
        margin-bottom: 1rem;
      }
      .article-content strong {
        color: #FFFFFF;
        font-weight: 500;
      }
      .article-content em {
        color: #D0D0D0;
      }
      .article-content ul, .article-content ol {
        margin: 1rem 0;
        padding-left: 1.5rem;
      }
      .article-content li {
        margin-bottom: 0.5rem;
      }
      .article-content blockquote {
        border-left: 3px solid rgba(30, 144, 255, 0.4);
        padding-left: 1rem;
        margin: 1.5rem 0;
        color: #D0D0D0;
        font-style: italic;
      }
      .article-content code {
        background: rgba(30, 144, 255, 0.1);
        padding: 0.2rem 0.4rem;
        border-radius: 3px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85em;
        color: #1E90FF;
      }
      .article-content pre {
        background: rgba(5, 12, 28, 0.8);
        padding: 1rem;
        border-radius: 6px;
        overflow-x: auto;
        margin: 1rem 0;
      }
      .article-content pre code {
        background: none;
        padding: 0;
      }
      .article-footer {
        margin-top: 3rem;
        padding-top: 1.5rem;
        border-top: 1px solid rgba(30, 144, 255, 0.15);
      }
      .article-nav {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
      }
      .article-nav-link {
        flex: 1;
        padding: 0.75rem;
        background: rgba(10, 25, 47, 0.6);
        border: 1px solid rgba(30, 144, 255, 0.2);
        border-radius: 6px;
        color: #B8B0A0;
        text-decoration: none;
        font-size: 0.8rem;
        transition: all 0.2s ease;
      }
      .article-nav-link:hover {
        border-color: rgba(30, 144, 255, 0.4);
        background: rgba(10, 25, 47, 0.8);
      }
      .article-nav-link.next {
        text-align: right;
      }
      .article-nav-label {
        font-size: 0.65rem;
        color: #8B8680;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        display: block;
        margin-bottom: 0.25rem;
      }
      .article-nav-title {
        color: #FFFFFF;
      }
      .article-not-found {
        text-align: center;
        padding: 4rem 2rem;
      }
      .article-not-found h2 {
        font-family: 'Playfair Display', serif;
        font-size: 1.5rem;
        color: #FFFFFF;
        margin-bottom: 1rem;
      }
      .article-not-found p {
        color: #B8B0A0;
        margin-bottom: 1.5rem;
      }
      .article-not-found a {
        color: #1E90FF;
        text-decoration: none;
      }
      @media (min-width: 640px) {
        .article-container { padding: 2.5rem 2rem 3rem; }
        .article-content { font-size: 1rem; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      if (style.parentNode) document.head.removeChild(style);
    };
  }, [slug]);

  if (!post) {
    return (
      <PageTransition>
        <MatrixRainBackground />
        <ReturnButton to="/blog" />
        <div className="article-editorial">
          <div className="article-not-found">
            <h2>Article Not Found</h2>
            <p>The article you're looking for doesn't exist.</p>
            <Link to="/blog">← Back to Blog</Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  const currentIndex = blogPosts.findIndex(p => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  // Convert markdown-like content to HTML
  const renderContent = (content) => {
    if (!content) return null;
    
    // Split by lines and process
    const lines = content.split('\n');
    const elements = [];
    let inList = false;
    let listItems = [];
    let listType = 'ul';
    
    const flushList = () => {
      if (inList && listItems.length > 0) {
        const ListTag = listType;
        elements.push(<ListTag key={`list-${elements.length}`}>{listItems}</ListTag>);
        listItems = [];
        inList = false;
      }
    };
    
    lines.forEach((line, idx) => {
      const trimmed = line.trim();
      
      // Headers
      if (trimmed.startsWith('### ')) {
        flushList();
        elements.push(<h3 key={idx}>{trimmed.replace('### ', '')}</h3>);
      } else if (trimmed.startsWith('## ')) {
        flushList();
        elements.push(<h2 key={idx}>{trimmed.replace('## ', '')}</h2>);
      } else if (trimmed.startsWith('# ')) {
        flushList();
        elements.push(<h2 key={idx}>{trimmed.replace('# ', '')}</h2>);
      } else if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
        // Bold paragraph
        flushList();
        elements.push(<p key={idx}><strong>{trimmed.slice(2, -2)}</strong></p>);
      } else if (/^\d+\./.test(trimmed)) {
        // Numbered list
        if (!inList || listType !== 'ol') {
          flushList();
          inList = true;
          listType = 'ol';
        }
        listItems.push(<li key={idx}>{trimmed.replace(/^\d+\.\s*/, '')}</li>);
      } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        // Bullet list
        if (!inList || listType !== 'ul') {
          flushList();
          inList = true;
          listType = 'ul';
        }
        listItems.push(<li key={idx}>{trimmed.slice(2)}</li>);
      } else if (trimmed === '') {
        flushList();
      } else if (trimmed) {
        flushList();
        // Regular paragraph with bold/italic support
        let processed = trimmed
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/\*(.*?)\*/g, '<em>$1</em>');
        elements.push(<p key={idx} dangerouslySetInnerHTML={{ __html: processed }} />);
      }
    });
    
    flushList();
    return elements;
  };

  return (
    <PageTransition>
      <MatrixRainBackground />
      <ReturnButton to="/blog" />
      
      <div className="article-editorial">
        <article className="article-container">
          <header className="article-header">
            <div className="article-meta">
              <span>{post.categories[0]}</span>
              <span>Article</span>
            </div>
            <h1 className="article-title">{post.title}</h1>
          </header>

          <div className="article-date">{formatDate(post.date)}</div>

          <div className="article-hero">
            {post.heroImage ? (
              <LazyImage
                src={post.heroImage}
                alt={`${post.title} hero`}
                style={{ width: '100%', height: '100%', objectFit: post.fullImage ? 'contain' : 'cover' }}
              />
            ) : post.heroEmoji ? (
              <span className="article-hero-emoji">{post.heroEmoji}</span>
            ) : (
              <span className="article-hero-emoji">📝</span>
            )}
          </div>

          <div className="article-content">
            {renderContent(post.content)}
          </div>

          <footer className="article-footer">
            <div className="article-nav">
              {prevPost ? (
                <Link to={`/blog/${prevPost.slug}`} className="article-nav-link">
                  <span className="article-nav-label">← Previous</span>
                  <span className="article-nav-title">{prevPost.title}</span>
                </Link>
              ) : <div />}
              {nextPost ? (
                <Link to={`/blog/${nextPost.slug}`} className="article-nav-link next">
                  <span className="article-nav-label">Next →</span>
                  <span className="article-nav-title">{nextPost.title}</span>
                </Link>
              ) : <div />}
            </div>
          </footer>
        </article>
      </div>
    </PageTransition>
  );
}

export default BlogArticle;
