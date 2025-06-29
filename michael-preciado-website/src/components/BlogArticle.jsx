import React from 'react';
import { useParams, Link } from 'react-router-dom';
import MatrixRainBackground from './MatrixRainBackground';
import { blogPosts } from '../data/blogData.js';
import ReturnButton from './ReturnButton.jsx';
import PageTransition from './PageTransition.jsx';
import useTypewriter from '../hooks/useTypewriter';

// Reusable paragraph component with fast typewriter effect
const BlogTextBlock = ({ text }) => {
  const typed = useTypewriter(text, 10);
  return <p dangerouslySetInnerHTML={{ __html: typed }} />;
};

function BlogArticle() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  const typedTitle = useTypewriter(post ? post.title : '', 70);

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
      return <BlogTextBlock key={idx} text={sanitized} />;
    });
  };

  return (
    <PageTransition>
      <MatrixRainBackground />
      <ReturnButton to="/blog" />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <section style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>{typedTitle}</h2>
          <p className="blog-date" style={{ textAlign: 'center', marginBottom: '2rem' }}>{formatDate(post.date)}</p>
          <div className="blog-article-image">
            <img 
              src={`https://via.placeholder.com/800x400/1a2e4f/ccd6f6?text=${encodeURIComponent(post.title)}`}
              alt={post.title}
              style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
          <article className="blog-article-content">
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