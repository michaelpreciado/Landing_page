import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import MatrixRainBackground from './MatrixRainBackground';
import PageTransition from './PageTransition.jsx';
import ReturnButton from './ReturnButton.jsx';
import LazyImage from './LazyImage';
import { blogPosts } from '../data/blogData.js';
import { autoApplyLiquidGlass } from '../utils/liquidGlass.js';

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    timeZone: 'UTC',
  });
};

const BlogPostCard = React.memo(({ post, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.08,
      },
    },
  };

  return (
    <Motion.div variants={cardVariants} initial="hidden" animate="visible">
      <Link to={`/blog/${post.slug}`} className="blog-card-editorial">
        <div className="blog-card-image-wrap">
          {post.heroImage ? (
            <LazyImage
              src={post.heroImage}
              alt={`${post.title} cover`}
              style={{ width: '100%', height: '100%', objectFit: post.fullImage ? 'contain' : 'cover' }}
            />
          ) : post.heroEmoji ? (
            <span className="blog-card-emoji">{post.heroEmoji}</span>
          ) : (
            <span className="blog-card-emoji">📝</span>
          )}
        </div>
        <div className="blog-card-content">
          <div className="blog-card-meta-row">
            <span className="blog-card-category">{post.categories[0]}</span>
            <span className="blog-card-date">{formatDate(post.date)}</span>
          </div>
          <h3 className="blog-card-title">{post.title}</h3>
          <p className="blog-card-excerpt">{post.excerpt}</p>
        </div>
      </Link>
    </Motion.div>
  );
});

function Blog() {
  useEffect(() => {
    autoApplyLiquidGlass();
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&display=swap');
      
      .blog-editorial {
        min-height: 100vh;
        position: relative;
        color: var(--light-text);
        font-family: var(--font-sans);
        font-weight: 300;
        line-height: 1.6;
      }
      .blog-container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 5rem 1.25rem 3rem 1.25rem;
        position: relative;
        z-index: 1;
      }
      .blog-header {
        text-align: left;
        margin-bottom: 1.5rem;
        padding: 1rem;
        border: 1px solid var(--border-color);
        border-radius: 12px;
        background: rgba(10, 25, 47, 0.68);
        box-shadow: 0 0 24px rgba(30, 144, 255, 0.12), inset 0 0 24px rgba(30, 144, 255, 0.04);
        backdrop-filter: blur(10px);
      }
      .blog-header::before {
        content: '● ● ●   michael@articles:~';
        display: block;
        font-size: 0.65rem;
        letter-spacing: 0.12em;
        color: var(--primary-accent);
        margin-bottom: 0.85rem;
        opacity: 0.9;
      }
      .blog-meta {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1rem;
        font-size: 0.65rem;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: var(--medium-text);
        margin-bottom: 0.75rem;
      }
      .blog-meta span {
        position: relative;
      }
      .blog-meta span:not(:last-child)::after {
        content: '·';
        position: absolute;
        right: -0.75rem;
        color: rgba(30, 144, 255, 0.08);
      }
      .blog-title {
        font-family: var(--font-mono);
        font-size: clamp(1.65rem, 5vw, 2.75rem);
        font-weight: 700;
        letter-spacing: -0.03em;
        margin: 0;
        color: var(--light-text);
        text-shadow: 0 0 20px rgba(30, 144, 255, 0.08);
      }
      .blog-intro {
        max-width: 720px;
        margin: 0 0 2rem;
        text-align: left;
        color: var(--medium-text);
        font-size: 0.85rem;
        line-height: 1.7;
      }
      .blog-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.75rem;
      }
      .blog-card-editorial {
        background: rgba(10, 25, 47, 0.52);
        border: 1px solid rgba(30, 144, 255, 0.08);
        border-radius: 12px;
        overflow: hidden;
        transition: all 0.2s ease;
        text-decoration: none;
        color: inherit;
        display: block;
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
      }
      .blog-card-editorial:hover {
        border-color: var(--primary-accent);
        background: rgba(10, 25, 47, 0.82);
        transform: translateY(-2px);
        box-shadow: 
          0 0 20px rgba(30, 144, 255, 0.08),
          inset 0 0 20px rgba(30, 144, 255, 0.08);
      }
      .blog-card-image-wrap {
        aspect-ratio: 16/9;
        background: rgba(2, 12, 27, 0.72);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border-bottom: 1px solid rgba(30, 144, 255, 0.08);
      }
      .blog-card-emoji {
        font-size: 2.5rem;
        filter: drop-shadow(0 0 10px rgba(30, 144, 255, 0.08));
      }
      .blog-card-content {
        padding: 0.875rem;
      }
      .blog-card-meta-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.4rem;
      }
      .blog-card-category {
        font-size: 0.6rem;
        color: var(--primary-accent);
        text-transform: uppercase;
        letter-spacing: 0.08em;
        text-shadow: 0 0 10px rgba(30, 144, 255, 0.08);
      }
      .blog-card-date {
        font-size: 0.6rem;
        color: var(--medium-text);
      }
      .blog-card-title {
        font-family: var(--font-mono);
        font-size: 0.9rem;
        color: var(--light-text);
        margin-bottom: 0.3rem;
        line-height: 1.3;
        text-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
      }
      .blog-card-excerpt {
        font-size: 0.75rem;
        color: var(--medium-text);
        line-height: 1.5;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .blog-footer {
        text-align: center;
        margin-top: 2rem;
        padding-top: 1rem;
        border-top: 1px solid rgba(30, 144, 255, 0.08);
        font-size: 0.7rem;
        color: var(--medium-text);
      }
      @media (min-width: 640px) {
        .blog-container { padding: 2.5rem 2rem 3rem; }
        .blog-intro { font-size: 0.9rem; margin-bottom: 2.5rem; }
        .blog-grid { grid-template-columns: repeat(3, 1fr); gap: 1rem; }
        .blog-card-title { font-size: 1rem; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      if (style.parentNode) document.head.removeChild(style);
    };
  }, []);

  // Sort by date (most recent first)
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <PageTransition>
      <MatrixRainBackground />
      <ReturnButton to="/" />
      
      <div className="blog-editorial">
        <div className="blog-container">
          <header className="blog-header">
            <div className="blog-meta">
              <span>Journal</span>
              <span>Thoughts</span>
            </div>
            <h1 className="blog-title">Articles</h1>
          </header>

          <p className="blog-intro">
            A collection of thoughts on technology, ethics, productivity, and the intersection 
            of hardware and software. From cybersecurity research to daily habits that keep me 
            grounded, these writings document my journey as an engineer and creator.
          </p>

          <div className="blog-grid">
            {sortedPosts.map((post, index) => (
              <BlogPostCard key={post.slug} post={post} index={index} />
            ))}
          </div>

          <footer className="blog-footer">
            <p>Thoughts on AI, hardware, and automation</p>
          </footer>
        </div>
      </div>
    </PageTransition>
  );
}

export default Blog;
