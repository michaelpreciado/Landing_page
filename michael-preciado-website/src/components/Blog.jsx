import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MatrixRainBackground from './MatrixRainBackground';
import { blogPosts } from '../data/blogData.js';
import ReturnButton from './ReturnButton.jsx';
import PageTransition from './PageTransition.jsx';

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
      <img src={post.heroImage} alt={post.title} className="thumbnail" />
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
  return (
    <PageTransition>
      <MatrixRainBackground />
      <ReturnButton />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <section id="blogs">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            🗒️ Blogs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Insights, tutorials, and stories &mdash; fresh out of the oven.
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