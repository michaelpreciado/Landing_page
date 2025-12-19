import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MatrixRainBackground from './MatrixRainBackground';
import LazyImage from './LazyImage';
import { blogPosts } from '../data/blogData.js';
import PageHeader from './PageHeader.jsx';
import PageTransition from './PageTransition.jsx';
import { autoApplyLiquidGlass } from '../utils/liquidGlass.js';

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
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
        delay: 0.4 + index * 0.1,
      },
    },
  };

  return (
    <motion.div
      className="blog-post-card terminal-card"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      style={{ willChange: 'transform, opacity' }}
    >
      <div className="terminal-card-header">
        <div className="terminal-card-buttons">
          <span className="terminal-card-button red"></span>
          <span className="terminal-card-button yellow"></span>
          <span className="terminal-card-button green"></span>
        </div>
      </div>
      <div className="project-image-container">
        <LazyImage
          src={post.heroImage}
          alt={`${post.title} blog post cover`}
          className="thumbnail"
          quality="medium"
          maxWidth="800px"
          objectFit={post.fullImage ? "contain" : "cover"}
          placeholder={<div style={{ width: '100%', height: '200px', background: 'var(--medium-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>📝</div>}
        />
        {post.slug === 'tech-spirituality' && (
          <div className="image-watermark">
            <a
              href="https://www.instagram.com/mariopreciado.art"
              className="image-watermark-link"
              aria-label="Visit Mario Preciado's art on Instagram"
            >
              Mario Preciado
            </a>
          </div>
        )}
      </div>
      <div className="blog-post-card-content">
        <span className="category-pill">{post.categories[0]}</span>
        <h3>{post.title}</h3>
        <p className="blog-date">{formatDate(post.date)}</p>
        <p className="teaser">{post.excerpt}</p>
        <Link to={`/blog/${post.slug}`} className="read-more-link">
          Read →
        </Link>
      </div>
    </motion.div>
  );
});

function Blog() {
  // Apply liquid glass effects after DOM is ready
  useEffect(() => {
    autoApplyLiquidGlass();
  }, []);

  return (
    <PageTransition>
      <MatrixRainBackground />
      <PageHeader
        navTo="/projects"
        navText="Projects"
        title="My Articles"
        subtitle="Thoughts, tutorials, and insights"
      />
      <main style={{ position: 'relative', zIndex: 1, paddingTop: '1rem' }}>
        <section id="blogs">
          <div className="blogs-grid">
            {blogPosts.map((post, index) => (
              <BlogPostCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        </section>
      </main>
    </PageTransition>
  );
}

export default Blog;