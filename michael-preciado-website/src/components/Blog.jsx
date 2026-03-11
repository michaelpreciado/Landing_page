import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    <motion.div variants={cardVariants} initial="hidden" animate="visible">
      <Link to={`/blog/${post.slug}`} className="blog-card-editorial">
        <div className="blog-card-header">
          <span className="blog-card-btn red"></span>
          <span className="blog-card-btn yellow"></span>
          <span className="blog-card-btn green"></span>
        </div>
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
          <span className="blog-card-category">{post.categories[0]}</span>
          <h3 className="blog-card-title">{post.title}</h3>
          <p className="blog-card-date">{formatDate(post.date)}</p>
          <p className="blog-card-excerpt">{post.excerpt}</p>
        </div>
      </Link>
    </motion.div>
  );
});

function Blog() {
  useEffect(() => {
    autoApplyLiquidGlass();
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500&display=swap');
      
      .blog-editorial {
        min-height: 100vh;
        position: relative;
        color: #E8E4DC;
        font-family: 'Inter', sans-serif;
        font-weight: 300;
        line-height: 1.7;
      }
      .blog-container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 3rem 1.25rem;
        position: relative;
        z-index: 1;
      }
      .blog-header {
        text-align: center;
        margin-bottom: 2rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid rgba(30, 144, 255, 0.3);
      }
      .blog-meta {
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
      .blog-title {
        font-family: 'Playfair Display', serif;
        font-size: clamp(1.8rem, 7vw, 3.5rem);
        font-weight: 500;
        letter-spacing: -0.01em;
        margin: 0;
        color: #FFFFFF;
        line-height: 1.1;
        text-shadow: 0 0 30px rgba(30, 144, 255, 0.3);
      }
      .blog-intro {
        column-count: 2;
        column-gap: 1.5rem;
        text-align: left;
        color: #B8B0A0;
        font-size: 0.8rem;
        line-height: 1.6;
        margin: 2rem 0;
      }
      .blog-intro p {
        margin: 0 0 1rem 0;
        break-inside: avoid;
      }
      .blog-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        margin: 2rem 0;
      }
      .blog-card-editorial {
        background: rgba(10, 25, 47, 0.6);
        border: 1px solid rgba(30, 144, 255, 0.2);
        border-radius: 10px;
        overflow: hidden;
        transition: all 0.2s ease;
        text-decoration: none;
        color: inherit;
        display: block;
      }
      .blog-card-editorial:hover {
        border-color: rgba(30, 144, 255, 0.4);
        background: rgba(10, 25, 47, 0.8);
        transform: translateY(-3px);
      }
      .blog-card-header {
        padding: 0.6rem;
        border-bottom: 1px solid rgba(30, 144, 255, 0.15);
        background: rgba(5, 12, 28, 0.4);
        display: flex;
        gap: 0.4rem;
      }
      .blog-card-btn {
        width: 10px;
        height: 10px;
        border-radius: 50%;
      }
      .blog-card-btn.red { background: #ff5f57; }
      .blog-card-btn.yellow { background: #ffbd2e; }
      .blog-card-btn.green { background: #28c840; }
      .blog-card-image-wrap {
        aspect-ratio: 16/10;
        background: rgba(5, 12, 28, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }
      .blog-card-emoji {
        font-size: 3rem;
      }
      .blog-card-content {
        padding: 1rem;
      }
      .blog-card-category {
        font-size: 0.6rem;
        color: #1E90FF;
        text-transform: uppercase;
        letter-spacing: 0.08em;
      }
      .blog-card-title {
        font-family: 'Playfair Display', serif;
        font-size: 0.95rem;
        color: #FFFFFF;
        margin: 0.3rem 0;
        line-height: 1.3;
      }
      .blog-card-date {
        font-size: 0.65rem;
        color: #8B8680;
        margin-bottom: 0.5rem;
      }
      .blog-card-excerpt {
        font-size: 0.75rem;
        color: #B8B0A0;
        line-height: 1.5;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .blog-handle {
        text-align: center;
        margin: 2rem 0;
        font-family: 'Playfair Display', serif;
        font-size: 0.95rem;
        color: #8B8680;
        font-style: italic;
      }
      .blog-footer {
        text-align: center;
        margin-top: 2.5rem;
        padding-top: 1.25rem;
        border-top: 1px solid rgba(30, 144, 255, 0.15);
        font-size: 0.7rem;
        color: #8B8680;
      }
      @media (min-width: 640px) {
        .blog-container { padding: 3rem 2rem; }
        .blog-intro { font-size: 0.9rem; column-gap: 2rem; }
        .blog-grid { grid-template-columns: repeat(3, 1fr); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      if (style.parentNode) document.head.removeChild(style);
    };
  }, []);

  return (
    <PageTransition>
      <MatrixRainBackground />
      <ReturnButton to="/" />
      
      <div className="blog-editorial">
        <div className="blog-container">
          <header className="blog-header">
            <div className="blog-meta">
              <span>JOURNAL</span>
              <span>THOUGHTS</span>
            </div>
            <h1 className="blog-title">BLOG</h1>
          </header>

          <section className="blog-intro">
            <p>
              A collection of thoughts on technology, ethics, productivity, and the 
              intersection of hardware and software. Each article explores ideas I've 
              encountered while building AI systems and working in tech.
            </p>
            <p>
              From cybersecurity research to daily habits that keep me grounded, 
              these writings document my journey as an engineer and creator.
            </p>
          </section>

          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <BlogPostCard key={post.slug} post={post} index={index} />
            ))}
          </div>

          <div className="blog-handle">@preciado.tech</div>

          <footer className="blog-footer">
            <p>Thoughts on AI, hardware, and automation</p>
          </footer>
        </div>
      </div>
    </PageTransition>
  );
}

export default Blog;
