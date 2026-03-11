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
        line-height: 1.6;
      }
      .blog-container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 2rem 1.25rem 3rem;
        position: relative;
        z-index: 1;
      }
      .blog-header {
        text-align: center;
        margin-bottom: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid rgba(30, 144, 255, 0.2);
      }
      .blog-meta {
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
      .blog-meta span {
        position: relative;
      }
      .blog-meta span:not(:last-child)::after {
        content: '·';
        position: absolute;
        right: -0.75rem;
        color: rgba(30, 144, 255, 0.4);
      }
      .blog-title {
        font-family: 'Playfair Display', serif;
        font-size: clamp(2rem, 6vw, 3rem);
        font-weight: 500;
        letter-spacing: 0.02em;
        margin: 0;
        color: #FFFFFF;
      }
      .blog-intro {
        max-width: 600px;
        margin: 0 auto 2rem;
        text-align: center;
        color: #B8B0A0;
        font-size: 0.85rem;
        line-height: 1.7;
      }
      .blog-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.75rem;
      }
      .blog-card-editorial {
        background: rgba(10, 25, 47, 0.5);
        border: 1px solid rgba(30, 144, 255, 0.15);
        border-radius: 8px;
        overflow: hidden;
        transition: all 0.2s ease;
        text-decoration: none;
        color: inherit;
        display: block;
      }
      .blog-card-editorial:hover {
        border-color: rgba(30, 144, 255, 0.35);
        background: rgba(10, 25, 47, 0.7);
        transform: translateY(-2px);
      }
      .blog-card-image-wrap {
        aspect-ratio: 16/9;
        background: rgba(5, 12, 28, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }
      .blog-card-emoji {
        font-size: 2.5rem;
      }
      .blog-card-content {
        padding: 0.875rem;
      }
      .blog-card-category {
        font-size: 0.6rem;
        color: #1E90FF;
        text-transform: uppercase;
        letter-spacing: 0.08em;
      }
      .blog-card-title {
        font-family: 'Playfair Display', serif;
        font-size: 0.9rem;
        color: #FFFFFF;
        margin: 0.25rem 0 0.15rem;
        line-height: 1.3;
      }
      .blog-card-date {
        font-size: 0.65rem;
        color: #8B8680;
        margin-bottom: 0.4rem;
      }
      .blog-card-excerpt {
        font-size: 0.75rem;
        color: #B8B0A0;
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
        border-top: 1px solid rgba(30, 144, 255, 0.1);
        font-size: 0.7rem;
        color: #8B8680;
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
            <h1 className="blog-title">Blog</h1>
          </header>

          <p className="blog-intro">
            A collection of thoughts on technology, ethics, productivity, and the intersection 
            of hardware and software. From cybersecurity research to daily habits that keep me 
            grounded, these writings document my journey as an engineer and creator.
          </p>

          <div className="blog-grid">
            {blogPosts.map((post, index) => (
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
