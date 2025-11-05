import React, { useState, useEffect } from 'react';
import '../responsive-style.css';
import { Logo } from '../components/Logo';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import WORDPRESS_CONFIG from '../config/wordpress';
import { getWordPressUrl, getApiEndpoint, getAuthHeaders, formatPostData } from '../config/wordpress';

export const BlogPostPage = () => {
  // Get slug from URL path
  const getSlugFromPath = () => {
    const path = window.location.pathname;
    if (path.startsWith('/blog/')) {
      return path.replace('/blog/', '').replace(/\/$/, '');
    }
    return null;
  };
  
  const slug = getSlugFromPath();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // SEO Meta Tags Management
  useEffect(() => {
    if (!post) return;

    // Update page title
    document.title = `${post.title} | LogicPros - Technology Solutions & IT Services`;

    // Update or create meta tags
    const updateMetaTag = (name, content, property = null) => {
      const tag = property
        ? document.querySelector(`meta[property="${property}"]`) || document.createElement('meta')
        : document.querySelector(`meta[name="${name}"]`) || document.createElement('meta');
      
      if (property) {
        tag.setAttribute('property', property);
      } else {
        tag.setAttribute('name', name);
      }
      tag.setAttribute('content', content);
      
      if (!document.querySelector(`meta[property="${property}"]`) && !document.querySelector(`meta[name="${name}"]`)) {
        document.head.appendChild(tag);
      }
    };

    // Basic SEO meta tags
    updateMetaTag('description', post.excerpt?.replace(/<[^>]*>/g, '').substring(0, 160) || `Read about ${post.title} on LogicPros blog.`);
    updateMetaTag('keywords', `${post.title}, technology, IT services, business solutions, LogicPros`);
    updateMetaTag('author', 'LogicPros Technology Solutions');

    // Open Graph meta tags for Facebook/LinkedIn
    updateMetaTag('og:title', post.title, 'og');
    updateMetaTag('og:description', post.excerpt?.replace(/<[^>]*>/g, '').substring(0, 160) || `Read about ${post.title} on LogicPros blog.`, 'og');
    updateMetaTag('og:type', 'article', 'og');
    updateMetaTag('og:url', `https://logicpros.ca/blog/${post.slug}`, 'og');
    updateMetaTag('og:image', post.featuredMedia || 'https://logicpros.ca/logo.png', 'og');
    updateMetaTag('og:site_name', 'LogicPros', 'og');

    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image', 'twitter');
    updateMetaTag('twitter:title', post.title, 'twitter');
    updateMetaTag('twitter:description', post.excerpt?.replace(/<[^>]*>/g, '').substring(0, 160) || `Read about ${post.title} on LogicPros blog.`, 'twitter');
    updateMetaTag('twitter:image', post.featuredMedia || 'https://logicpros.ca/logo.png', 'twitter');
    updateMetaTag('twitter:site', '@LogicProsCA', 'twitter');

    // Article specific meta tags
    updateMetaTag('article:published_time', new Date(post.date).toISOString(), 'article');
    updateMetaTag('article:modified_time', new Date(post.modified || post.date).toISOString(), 'article');
    updateMetaTag('article:section', 'Technology Blog', 'article');
    updateMetaTag('article:tag', 'Technology Solutions', 'article');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://logicpros.ca/blog/${post.slug}`);

    // Structured Data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt?.replace(/<[^>]*>/g, '').substring(0, 160) || `Read about ${post.title} on LogicPros blog.`,
      "image": post.featuredMedia || 'https://logicpros.ca/logo.png',
      "author": {
        "@type": "Organization",
        "name": "LogicPros Technology Solutions",
        "url": "https://logicpros.ca"
      },
      "publisher": {
        "@type": "Organization",
        "name": "LogicPros Technology Solutions",
        "logo": {
          "@type": "ImageObject",
          "url": "https://logicpros.ca/logo.png"
        }
      },
      "datePublished": new Date(post.date).toISOString(),
      "dateModified": new Date(post.modified || post.date).toISOString(),
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://logicpros.ca/blog/${post.slug}`
      }
    };

    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

  }, [post]);

  useEffect(() => {
    // Animation styles
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes pulse {
        0%, 100% { opacity: 0.7; }
        50% { opacity: 0.9; }
      }
      @keyframes glow {
        0%, 100% { filter: brightness(1); }
        50% { filter: brightness(1.4); }
      }
      .blog-post-content {
        animation: fadeIn 0.6s ease-out;
      }
      .blog-post-content img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        margin: 20px 0;
      }
      .blog-post-content h1, .blog-post-content h2, .blog-post-content h3 {
        color: #1a1a2e;
        margin: 30px 0 15px 0;
        line-height: 1.3;
      }
      .blog-post-content h1 { font-size: 2.2rem; }
      .blog-post-content h2 { font-size: 1.8rem; }
      .blog-post-content h3 { font-size: 1.4rem; }
      .blog-post-content p {
        color: #2c3e50;
        line-height: 1.8;
        margin: 20px 0;
        font-size: 1.1rem;
      }
      .blog-post-content ul, .blog-post-content ol {
        margin: 20px 0;
        padding-left: 30px;
      }
      .blog-post-content li {
        margin: 10px 0;
        color: #2c3e50;
        line-height: 1.6;
      }
      .blog-post-content blockquote {
        border-left: 4px solid #1F7CFF;
        padding: 20px;
        margin: 30px 0;
        background: #f8f9fa;
        font-style: italic;
        color: #495057;
      }
      .blog-post-content code {
        background: #f1f3f4;
        padding: 2px 6px;
        border-radius: 4px;
        font-family: 'Courier New', monospace;
      }
      .blog-post-content pre {
        background: #f1f3f4;
        padding: 20px;
        border-radius: 8px;
        overflow-x: auto;
        margin: 20px 0;
      }
      .loading-skeleton {
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
      }
      @keyframes loading {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      
      try {
        setLoading(true);
        const response = await fetch(`${getApiEndpoint('POSTS')}&slug=${slug}&_embed`, {
          headers: getAuthHeaders()
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        if (data.length === 0) {
          throw new Error('Post not found');
        }
        
        const formattedPost = formatPostData(data[0]);
        setPost(formattedPost);
        setError(null);
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError(err.message || 'Failed to load blog post. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <div className="landing-page">
        <header className="sticky-header">
          <div className="header-content">
            <div className="logo">
              <Logo />
            </div>
            <Navigation />
          </div>
        </header>

        <main className="main-content">
          <section className="section" style={{ padding: '80px 0' }}>
            <div className="container">
              <div className="loading-skeleton" style={{
                height: '60px',
                borderRadius: '8px',
                marginBottom: '30px',
                width: '80%'
              }}></div>
              <div className="loading-skeleton" style={{
                height: '20px',
                borderRadius: '4px',
                marginBottom: '20px',
                width: '60%'
              }}></div>
              <div className="loading-skeleton" style={{
                height: '400px',
                borderRadius: '8px',
                marginBottom: '30px'
              }}></div>
              {[...Array(5)].map((_, index) => (
                <div key={index} className="loading-skeleton" style={{
                  height: '20px',
                  borderRadius: '4px',
                  marginBottom: '15px',
                  width: index % 3 === 0 ? '90%' : '75%'
                }}></div>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="landing-page">
        <header className="sticky-header">
          <div className="header-content">
            <div className="logo">
              <Logo />
            </div>
            <Navigation />
          </div>
        </header>

        <main className="main-content">
          <section className="section" style={{ padding: '80px 0' }}>
            <div className="container">
              <div style={{
                textAlign: 'center',
                padding: '60px 20px',
                backgroundColor: '#fee',
                border: '1px solid #fcc',
                borderRadius: '8px',
                color: '#c53030'
              }}>
                <h2 style={{ marginBottom: '10px' }}>Error Loading Post</h2>
                <p>{error}</p>
                <a href="/blog" style={{
                  display: 'inline-block',
                  marginTop: '20px',
                  padding: '12px 24px',
                  background: '#1F7CFF',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '8px'
                }}>
                  ← Back to Blog
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="landing-page">
        <header className="sticky-header">
          <div className="header-content">
            <div className="logo">
              <Logo />
            </div>
            <Navigation />
          </div>
        </header>

        <main className="main-content">
          <section className="section" style={{ padding: '80px 0' }}>
            <div className="container">
              <div style={{
                textAlign: 'center',
                padding: '60px 20px',
                color: '#6b7280'
              }}>
                <h2>Post Not Found</h2>
                <p>The blog post you're looking for doesn't exist.</p>
                <a href="/blog" style={{
                  display: 'inline-block',
                  marginTop: '20px',
                  padding: '12px 24px',
                  background: '#1F7CFF',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '8px'
                }}>
                  ← Back to Blog
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="sticky-header">
        <div className="header-content">
          <div className="logo">
            <Logo />
          </div>
          <Navigation />
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section" style={{
          position: 'relative',
          minHeight: '20vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
          overflow: 'hidden'
        }}>
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <nav style={{ marginBottom: '20px' }}>
              <a href="/blog" style={{
                color: '#e2e8f0',
                textDecoration: 'none',
                fontSize: '1rem'
              }}>
                ← Back to Blog
              </a>
            </nav>
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '900',
              lineHeight: '1.2',
              marginBottom: '1rem',
              color: '#1F7CFF',
              textShadow: '0 0 5px rgba(31, 124, 255, 0.3), 0 0 10px rgba(31, 124, 255, 0.2)'
            }}>
              {post.title}
            </h1>
            <p style={{
              fontSize: '1.1rem',
              color: '#e2e8f0',
              marginBottom: '1rem',
              fontWeight: '300'
            }}>
              Published on {formatDate(post.date)}
            </p>
          </div>
        </section>

        {/* Blog Post Content */}
        <section className="section" style={{ backgroundColor: '#ffffff', padding: '60px 0' }}>
          <div className="container">
            <div className="blog-post-content" style={{
              maxWidth: '800px',
              margin: '0 auto',
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: '#2c3e50'
            }}>
              {post.featuredMedia && (
                <div style={{
                  marginBottom: '40px',
                  textAlign: 'center'
                }}>
                  <img
                    src={post.featuredMedia}
                    alt={post.title}
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: '100%',
                      maxWidth: '800px',
                      height: 'auto',
                      borderRadius: '12px',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      console.warn(`Failed to load featured image: ${post.featuredMedia}`);
                    }}
                  />
                </div>
              )}
              
              <div 
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </section>

        {/* Related Posts CTA */}
        <section className="section" style={{ 
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', 
          color: 'white',
          padding: '80px 0'
        }}>
          <div className="container">
            <div style={{
              textAlign: 'center',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              <h2 style={{ 
                color: 'white',
                fontSize: '2.2rem',
                fontWeight: '700',
                marginBottom: '20px',
                lineHeight: '1.2'
              }}>Enjoyed This Article?</h2>
              <p style={{ 
                color: 'rgba(255, 255, 255, 0.9)', 
                fontSize: '1.2rem',
                marginBottom: '35px',
                lineHeight: '1.6'
              }}>
                Explore more insights or get in touch with our team for personalized technology solutions.
              </p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="/blog" style={{
                  background: 'linear-gradient(135deg, #1F7CFF 0%, #1e40af 100%)',
                  color: 'white',
                  fontSize: '1.1rem',
                  padding: '18px 35px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  boxShadow: '0 6px 20px rgba(31, 124, 255, 0.4)',
                  transition: 'all 0.3s ease'
                }}>
                  Read More Posts
                </a>
                <a href="/contact" style={{
                  background: 'linear-gradient(135deg, #FFC600 0%, #FFB800 100%)',
                  color: '#1a1a2e',
                  fontSize: '1.1rem',
                  padding: '18px 35px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  boxShadow: '0 6px 20px rgba(255, 198, 0, 0.4)',
                  transition: 'all 0.3s ease'
                }}>
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};