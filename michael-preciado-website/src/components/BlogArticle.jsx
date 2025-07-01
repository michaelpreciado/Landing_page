import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import MatrixRainBackground from './MatrixRainBackground';
import { blogPosts } from '../data/blogData.js';
import ReturnButton from './ReturnButton.jsx';
import PageTransition from './PageTransition.jsx';
import useTypewriter from '../hooks/useTypewriter';

// Reusable paragraph component with fast typewriter effect
const BlogTextBlock = ({ text, delay = 0 }) => {
  const [startTyping, setStartTyping] = useState(delay === 0);

  useEffect(() => {
    if (delay === 0) return;
    const timer = setTimeout(() => setStartTyping(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const typed = useTypewriter(startTyping ? text : '', 5);
  return <p dangerouslySetInnerHTML={{ __html: typed }} />;
};

function BlogArticle() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  const typedTitle = useTypewriter(post ? post.title : '', 35);

  if (!post) {
    return (
      <PageTransition>
        <MatrixRainBackground />
        <main style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <div>
            <h2>Article Not Found</h2>
            <p>Sorry, the article you are looking for does not exist.</p>
            <Link to="/blog" className="blog-link">← Back to Blogs</Link>
          </div>
        </main>
      </PageTransition>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderContent = (content) => {
    return content.split(/\n\n+/).map((block, idx) => {
      const boldHeaderMatch = block.match(/^\*\*(.+)\*\*$/);
      if (boldHeaderMatch) {
        return <h3 key={idx}>{boldHeaderMatch[1]}</h3>;
      }
      if (block.startsWith('# ')) {
        return <h2 key={idx}>{block.replace('# ', '')}</h2>;
      }
      if (block.startsWith('## ')) {
        return <h3 key={idx}>{block.replace('## ', '')}</h3>;
      }
      if (block.startsWith('### ')) {
        return <h4 key={idx}>{block.replace('### ', '')}</h4>;
      }
      const sanitized = block.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      return <BlogTextBlock key={idx} text={sanitized} delay={idx * 300} />;
    });
  };

  return (
    <PageTransition>
      <MatrixRainBackground />
      <ReturnButton to="/blog" />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <section style={{ maxWidth: '800px', margin: '0 auto' }}>
          <article className="blog-article-content">
            {/* --- Meta Row (Categories & Date) --- */}
            <div className="blog-meta-row">
              {post.categories && post.categories.length > 0 && (
                <span className="blog-categories">
                  {post.categories.join(' • ').toUpperCase()}
                </span>
              )}
              <span className="blog-date-inline">{formatDate(post.date)}</span>
            </div>

            {/* Title */}
            <h1 className="blog-article-title">{typedTitle}</h1>

            {/* Hero Image */}
            {post.heroImage && (
              <figure className="blog-hero-image matrix-overlay">
                <img src={post.heroImage} alt={post.title} />
                {post.excerpt && (
                  <figcaption className="blog-hero-caption">{post.excerpt}</figcaption>
                )}
              </figure>
            )}

            {/* Article Body */}
            {renderContent(post.content)}
          </article>
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link to="/blog" className="blog-link">← Back to Blogs</Link>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}

export default BlogArticle; 