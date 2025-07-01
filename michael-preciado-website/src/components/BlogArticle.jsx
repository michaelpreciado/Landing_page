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
  const [shouldUseTypewriter, setShouldUseTypewriter] = useState(true);

  useEffect(() => {
    if (delay === 0) return;
    const timer = setTimeout(() => setStartTyping(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  // Check if text contains complex HTML that might cause issues
  useEffect(() => {
    const hasComplexHTML = /<[^>]+>/g.test(text) && text.includes('<');
    const isMobile = window.innerWidth <= 768;
    
    // Disable typewriter on mobile or for complex HTML to prevent rendering issues
    if (isMobile || hasComplexHTML) {
      setShouldUseTypewriter(false);
    }
  }, [text]);

  const typed = useTypewriter(startTyping && shouldUseTypewriter ? text : '', 1);
  
  // If typewriter is disabled, show full text immediately
  const displayText = shouldUseTypewriter ? typed : text;
  
  return <p dangerouslySetInnerHTML={{ __html: displayText }} />;
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
      // Detect markdown-style bullet list (lines starting with '- ')
      if (/^- /.test(block.trim())) {
        const items = block.split(/\n+/).map(l => l.replace(/^-\s*/, ''));
        return (
          <ul key={idx} style={{ marginBottom: '1.2rem', paddingLeft: '1.5rem' }}>
            {items.map((item, liIdx) => (
              <li key={liIdx}>
                <BlogTextBlock text={item} delay={idx * 300} />
              </li>
            ))}
          </ul>
        );
      }
      if (/^\d+\. /.test(block.trim())) {
        const items = block.split(/\n+/).map(l => l.replace(/^\d+\.\s*/, ''));
        return (
          <ol key={idx} style={{ marginBottom: '1.2rem', paddingLeft: '1.5rem' }}>
            {items.map((item, liIdx) => (
              <li key={liIdx}>
                <BlogTextBlock text={item} delay={idx * 100} />
              </li>
            ))}
          </ol>
        );
      }
      
      // More robust HTML processing with error handling
      let sanitized;
      try {
        sanitized = block.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        // Additional cleanup for any malformed tags
        sanitized = sanitized.replace(/<([^>]*?)(?=>|$)/g, '&lt;$1');
        sanitized = sanitized.replace(/(<\/?)([^>]*?)(>)/g, '$1$2$3');
      } catch (error) {
        console.warn('Error processing HTML in blog content:', error);
        sanitized = block; // Fallback to original text
      }
      
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