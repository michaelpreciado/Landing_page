import React from 'react';
import { Link } from 'react-router-dom';
import MatrixRainBackground from './MatrixRainBackground';
import { FaCamera, FaGlobeAmericas, FaCode } from 'react-icons/fa';
import { blogPosts } from '../data/blogData.js';
import ReturnButton from './ReturnButton.jsx';
import PageTransition from './PageTransition.jsx';
import useTypewriter from '../hooks/useTypewriter';

// Reuse the card styling from projects by applying the same classes
const BlogCard = ({ iconPlaceholder, imageSrc, title, excerpt, date, to }) => {
  const typedTitle = useTypewriter(title, 20);
  const typedExcerpt = useTypewriter(excerpt, 7);
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });
  };

  return (
    <div className="project-card"> {/* Reuse project-card styles */}
      {imageSrc ? (
        <div className="project-image-container">
          <img src={imageSrc} alt={title} className="project-image" />
        </div>
      ) : (
        <div className="project-icon-placeholder"> {/* Reuse icon placeholder styles */}
          {iconPlaceholder}
        </div>
      )}
      <div className="project-card-content">
        <h3>{typedTitle}</h3>
        <p className="blog-date">{formatDate(date)}</p>
        <p>{typedExcerpt}</p>
        <div className="project-links"> {/* Reuse project-links styles */}
          <Link to={to}>
            <button className="project-button project-button-primary">Read Article</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

function Blog() {
  const iconMap = {
    camera: <FaCamera size={48} />,
    globe: <FaGlobeAmericas size={48} />,
    code: <FaCode size={48} />,
  };

  const typedTitle = useTypewriter('Blogs', 75);
  const isSingleBlog = blogPosts.length === 1; // Determine if there's only one blog post

  return (
    <PageTransition>
      <MatrixRainBackground />
      <ReturnButton />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <section id="blogs">
          <h2>{typedTitle}</h2>
          <p>Insights, tutorials, and stories &mdash; fresh out of the oven.</p>

          <div className={`projects-container ${isSingleBlog ? 'single-blog-layout' : ''}`}> {/* Reuse grid layout */}
            {blogPosts.map(post => (
              <BlogCard
                key={post.slug}
                iconPlaceholder={iconMap[post.icon] || <FaCode size={48} />}
                imageSrc={post.heroImage}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                to={`/blog/${post.slug}`}
              />
            ))}
          </div>
        </section>
      </main>
    </PageTransition>
  );
}

export default Blog;