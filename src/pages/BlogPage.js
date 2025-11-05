import React, { useState, useEffect } from 'react';
import '../responsive-style.css';
import { Logo } from '../components/Logo';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import WORDPRESS_CONFIG from '../config/wordpress';
import { getWordPressUrl, getApiEndpoint, getAuthHeaders, formatPostData, truncateText } from '../config/wordpress';
import { doc, deleteDoc } from '../firebase';

export const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Animation styles for blog posts and hero
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
      @keyframes float1 {
        0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.3; }
        33% { transform: translate(30px, -50px) rotate(120deg); opacity: 0.6; }
        66% { transform: translate(-20px, -80px) rotate(240deg); opacity: 0.4; }
      }
      @keyframes float2 {
        0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.4; }
        50% { transform: translate(-40px, -60px) rotate(180deg); opacity: 0.2; }
      }
      @keyframes float3 {
        0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.2; }
        25% { transform: translate(50px, -30px) rotate(90deg); opacity: 0.5; }
        75% { transform: translate(-30px, -70px) rotate(270deg); opacity: 0.3; }
      }
      .hero-background-svg {
        animation: panLeft 30s linear infinite, pulse 4s ease-in-out infinite;
      }
      .tech-nodes circle {
        animation: glow 3s ease-in-out infinite alternate;
      }
      .glowing-orbs circle {
        animation: pulse 2s ease-in-out infinite alternate;
      }
      .floating-particle {
        position: absolute;
        pointer-events: none;
        z-index: 1;
      }
      .floating-particle:nth-child(1) { animation: float1 15s ease-in-out infinite; }
      .floating-particle:nth-child(2) { animation: float2 18s ease-in-out infinite; }
      .floating-particle:nth-child(3) { animation: float3 20s ease-in-out infinite; }
      .floating-particle:nth-child(4) { animation: float1 22s ease-in-out infinite reverse; }
      .floating-particle:nth-child(5) { animation: float2 16s ease-in-out infinite reverse; }
      .floating-particle:nth-child(6) { animation: float3 25s ease-in-out infinite reverse; }
      .blog-post {
        animation: fadeIn 0.6s ease-out;
        transition: all 0.3s ease;
      }
      .blog-post:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(29, 122, 175, 0.15);
      }
      .blog-post-excerpt {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
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
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${getApiEndpoint('POSTS')}&per_page=${WORDPRESS_CONFIG.DISPLAY.POSTS_PER_PAGE}&_embed`, {
          headers: getAuthHeaders()
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        const formattedPosts = data.map(formatPostData);
        setPosts(formattedPosts);
        setError(null);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

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
        {/* Hero Section with Animated Background */}
        <section className="hero-section blog-hero" style={{
          position: 'relative',
          minHeight: '20vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
          overflow: 'hidden'
        }}>
          {/* Circuit Board Background */}
          <svg
            className="circuit-background"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 1,
              opacity: 0.4
            }}
            viewBox="0 0 1200 800"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            <g transform="translate(0,0)">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; -500,0; -500,-350; 0,-350; 0,0"
                dur="150s"
                repeatCount="indefinite"
              />

              {[0, 1, 2, 3, 4, 5].map((layerX, layerY) => (
                <g key={`layer-${layerX}-${layerY}`} transform={`translate(${layerX * 400}, ${layerY * 250})`}>
                   
                  <g stroke="#1F7CFF" strokeWidth="1.5" fill="none">
                    <path d="M50 120 L350 120" strokeDasharray="20,12" opacity="0.5">
                      <animate attributeName="stroke-dashoffset" values="0;-32" dur="3s" repeatCount="indefinite"/>
                    </path>
                  </g>
                  
                  {(layerX + layerY) % 2 === 0 && (
                    <g stroke="#22c55e" strokeWidth="1.5" fill="none">
                      <path d="M200 30 L200 220" strokeDasharray="18,10" opacity="0.4">
                        <animate attributeName="stroke-dashoffset" values="0;-28" dur="2.8s" repeatCount="indefinite"/>
                      </path>
                    </g>
                  )}
                  
                  {(layerX + layerY) % 3 === 0 && (
                    <g stroke="#f59e0b" strokeWidth="1.5" fill="none">
                      <path d="M100 80 L100 160 L300 160" strokeDasharray="15,8" opacity="0.35">
                        <animate attributeName="stroke-dashoffset" values="0;-23" dur="3.5s" repeatCount="indefinite"/>
                      </path>
                    </g>
                  )}
                  
                  <g>
                    {[...Array(3)].map((_, dotIndex) => {
                      const x = 80 + (dotIndex * 120);
                      const y = 60 + (dotIndex * 40);
                      const delay = dotIndex * 1.5;
                      return (
                        <circle
                          key={`dot-${dotIndex}`}
                          cx={x}
                          cy={y}
                          r="1.5"
                          fill="#1F7CFF"
                          opacity="0.6"
                        >
                          <animateTransform
                            attributeName="transform"
                            type="translate"
                            values="0,0; 8,-12; -5,10; 0,0"
                            dur="6s"
                            repeatCount="indefinite"
                            begin={`${delay}s`}
                          />
                          <animate
                            attributeName="opacity"
                            values="0.3;0.6;0.3"
                            dur="4s"
                            repeatCount="indefinite"
                            begin={`${delay}s`}
                          />
                        </circle>
                      );
                    })}
                  </g>
                </g>
              ))}
            </g>
          </svg>

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ textAlign: 'center', color: 'white' }}>
              <h1 style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: '900',
                lineHeight: '0.9',
                marginBottom: '1rem',
                color: '#1F7CFF',
                textShadow: '0 0 5px rgba(31, 124, 255, 0.3), 0 0 10px rgba(31, 124, 255, 0.2)'
              }}>
                Latest Insights & Updates
              </h1>
              <p style={{
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                color: '#e2e8f0',
                marginBottom: '1rem',
                fontWeight: '300',
                maxWidth: '600px'
              }}>
                Stay updated with the latest technology trends, cybersecurity tips, and business insights from our team.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="section" style={{ backgroundColor: '#f5f8fc', padding: '80px 0' }}>
          <div className="container">
            <h2 className="section-title" style={{ 
              textAlign: 'center', 
              fontSize: '2.5rem', 
              fontWeight: '700',
              marginBottom: '60px',
              color: '#1a1a2e'
            }}>Recent Blog Posts</h2>

            {loading ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="blog-post" style={{
                    background: 'white',
                    borderRadius: '12px',
                    padding: '30px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(29, 122, 175, 0.1)'
                  }}>
                    <div className="loading-skeleton" style={{
                      height: '200px',
                      borderRadius: '8px',
                      marginBottom: '20px'
                    }}></div>
                    <div className="loading-skeleton" style={{
                      height: '24px',
                      borderRadius: '4px',
                      marginBottom: '15px',
                      width: '80%'
                    }}></div>
                    <div className="loading-skeleton" style={{
                      height: '16px',
                      borderRadius: '4px',
                      marginBottom: '10px',
                      width: '60%'
                    }}></div>
                  </div>
                ))}
              </div>
            ) : error ? (
              <div style={{
                textAlign: 'center',
                padding: '60px 20px',
                backgroundColor: '#fee',
                border: '1px solid #fcc',
                borderRadius: '8px',
                color: '#c53030'
              }}>
                <h3 style={{ marginBottom: '10px' }}>Error Loading Posts</h3>
                <p>{error}</p>
              </div>
            ) : posts.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: '60px 20px',
                color: '#6b7280'
              }}>
                <h3 style={{ marginBottom: '10px' }}>No Posts Available</h3>
                <p>Check back soon for new content.</p>
              </div>
            ) : (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '30px'
              }}>
                {posts.map((post) => (
                  <article key={post.id} className="blog-post" style={{
                    background: 'white',
                    borderRadius: '12px',
                    padding: '30px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(29, 122, 175, 0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}>
                    {post.featuredMedia && (
                      <div style={{
                        height: '200px',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        marginBottom: '20px'
                      }}>
                        <img
                          src={post.featuredMedia}
                          alt={post.title}
                          loading="lazy"
                          decoding="async"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                          onError={(e) => {
                            e.target.parentElement.style.display = 'none';
                            console.warn(`Failed to load blog post image: ${post.featuredMedia}`);
                          }}
                        />
                      </div>
                    )}
                    
                    <div style={{ marginBottom: '15px' }}>
                      <h3 style={{
                        fontSize: '1.4rem',
                        fontWeight: '700',
                        color: '#1a1a2e',
                        marginBottom: '10px',
                        lineHeight: '1.3'
                      }}>
                        <a
                          href={`/blog/${post.slug}`}
                          style={{
                            color: '#1a1a2e',
                            textDecoration: 'none'
                          }}
                        >
                          {post.title}
                        </a>
                      </h3>
                       
                      <div style={{
                        fontSize: '0.9rem',
                        color: '#6b7280',
                        marginBottom: '15px'
                      }}>
                        {formatDate(post.date)}
                      </div>
                    </div>
                    
                    <div 
                      className="blog-post-excerpt"
                      style={{
                        fontSize: '1rem',
                        lineHeight: '1.6',
                        color: '#2c3e50',
                        marginBottom: '20px'
                      }}
                      dangerouslySetInnerHTML={{ __html: truncateText(post.excerpt) }}
                    />
                    

                    <a
                      href={`/blog/${post.slug}`}
                      style={{
                        display: 'inline-block',
                        background: 'linear-gradient(135deg, #1F7CFF 0%, #1e40af 100%)',
                        color: 'white',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      Read More →
                    </a>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
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
              }}>Need Expert Technology Solutions?</h2>
              <p style={{ 
                color: 'rgba(255, 255, 255, 0.9)', 
                fontSize: '1.2rem',
                marginBottom: '35px',
                lineHeight: '1.6'
              }}>
                Subscribe to our newsletter or get in touch for personalized technology consulting.
              </p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
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