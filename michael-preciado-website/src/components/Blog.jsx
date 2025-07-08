import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useTypewriter from '../hooks/useTypewriter'; // Import the hook
import MatrixRainBackground from './MatrixRainBackground';
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

const BlogPostCard = ({ post, index }) => {
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
      className="blog-post-card"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="project-image-container">
        <img src={post.heroImage} alt={post.title} className="thumbnail" />
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
};

function Blog() {
  const typedTitle = useTypewriter("🗒️ Blogs", { speed: 30, scrambleOnMount: true, scrambleDuration: 1500 });
  const typedSubtitle = useTypewriter("Insights, tutorials, and stories — fresh out of the oven.", { speed: 20, scrambleOnMount: true, scrambleDuration: 2000 });

  // Apply liquid glass effects after DOM is ready
  useEffect(() => {
    autoApplyLiquidGlass();
  }, []);

  return (
    <PageTransition>
      <MatrixRainBackground />
      <PageHeader navTo="/projects" navText="Projects" />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <section id="blogs">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {typedTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {typedSubtitle}
          </motion.p>
          
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