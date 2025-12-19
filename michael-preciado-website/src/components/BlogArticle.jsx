import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import MatrixRainBackground from './MatrixRainBackground';
import LazyImage from './LazyImage';
import { blogPosts } from '../data/blogData.js';
import ReturnButton from './ReturnButton.jsx';
import PageTransition from './PageTransition.jsx';
import useTypewriter from '../utils/hooks/useTypewriter';
import { autoApplyLiquidGlass } from '../utils/liquidGlass.js';

// Reusable paragraph component with fast typewriter effect
const BlogTextBlock = ({ text, delay = 0 }) => {
  const [startTyping, setStartTyping] = useState(delay === 0);
  const [shouldUseTypewriter, setShouldUseTypewriter] = useState(true);
  const [isLoading, setIsLoading] = useState(true); // New loading state

  useEffect(() => {
    // Prevent flash of un-animated content
    const loadingTimer = setTimeout(() => setIsLoading(false), 10);

    if (delay === 0) return () => clearTimeout(loadingTimer);

    const typingTimer = setTimeout(() => setStartTyping(true), delay);
    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(typingTimer);
    };
  }, [delay]);

  // Disable typewriter on mobile to prevent rendering issues
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setShouldUseTypewriter(false);
    }
  }, []);

  const typed = useTypewriter(
    startTyping && shouldUseTypewriter ? text : '',
    {
      speed: 1,
      scrambleOnMount: true // Re-enable scramble for body text
    }
  );

  // If typewriter is disabled, show full text immediately
  const displayText = shouldUseTypewriter ? typed : text;

  // Apply a class to hide text while the typewriter is initializing
  const textStyle = {
    opacity: isLoading ? 0 : 1,
    transition: 'opacity 0.2s ease-in-out',
  };

  return <p style={textStyle} dangerouslySetInnerHTML={{ __html: displayText }} />;
};

function BlogArticle() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  const typedTitle = useTypewriter(post ? post.title : '', { speed: 35, scrambleOnMount: true });

  // Apply liquid glass effects after DOM is ready
  useEffect(() => {
    autoApplyLiquidGlass();
  }, []);

  if (!post) {
    return (
      <PageTransition>
        <MatrixRainBackground />
        <main style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <div>
            <h2>Article Not Found</h2>
            <p>Sorry, the article you are looking for does not exist.</p>
            <Link to="/blog" className="blog-link">← Back to Articles</Link>
          </div>
        </main>
      </PageTransition>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
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
      // Handle HTML div blocks (like images)
      if (block.trim().startsWith('<div') && block.includes('</div>')) {
        return <div key={idx} dangerouslySetInnerHTML={{ __html: block.trim() }} />;
      }
      // Handle standalone HTML elements
      if (block.trim().startsWith('<') && block.trim().endsWith('>')) {
        return <div key={idx} dangerouslySetInnerHTML={{ __html: block.trim() }} />;
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
      // Handle horizontal rules
      if (block.trim() === '---') {
        return <hr key={idx} style={{ margin: '2rem 0', border: '1px solid var(--border-color)' }} />;
      }

      // Handle blockquotes (lines starting with '> ')
      if (block.trim().startsWith('> ')) {
        const quoteText = block.replace(/^>\s*/, '').trim();
        return (
          <div key={idx} className="blog-quote-container">
            <div className="blog-quote-content">
              <BlogTextBlock text={quoteText} delay={idx * 300} />
            </div>
          </div>
        );
      }

      // Pass raw text to the block component; scrambling handles the visual effect
      return <BlogTextBlock key={idx} text={block} delay={idx * 300} />;
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
              <figure className="blog-hero-image">
                <LazyImage
                  src={post.heroImage}
                  alt={`${post.title} blog article hero image`}
                  priority={true}
                  quality="medium"
                  maxWidth="800px"
                  objectFit="contain"
                  placeholder={<div style={{ width: '100%', height: '300px', background: 'var(--medium-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>📖</div>}
                />
                {post.excerpt && (
                  <figcaption className="blog-hero-caption">{post.excerpt}</figcaption>
                )}
              </figure>
            )}

            {/* Article Body */}
            {renderContent(post.content)}
          </article>
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link to="/blog" className="blog-link">← Back to Articles</Link>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}

export default BlogArticle; 