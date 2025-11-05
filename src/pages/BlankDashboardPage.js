import React from 'react';
import { Logo } from '../components/Logo';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import '../responsive-style.css';
import './SocialMediaPosterPage.css';

const BlankDashboardPage = () => {
  return (
    <>
      {/* Standard Header */}
      <header className="sticky-header">
        <div className="header-content">
          <div className="logo">
            <Logo />
          </div>
          <Navigation />
        </div>
      </header>

      <div className="dashboard-container">
        <div className="posts-container" style={{
          maxWidth: '900px',
          margin: '50px auto',
          textAlign: 'center',
          padding: '60px 40px'
        }}>
          {/* Hero Icon */}
          <div style={{
            fontSize: '5rem',
            marginBottom: '30px',
            filter: 'drop-shadow(0 4px 8px rgba(31, 124, 255, 0.3))'
          }}>
            🎯
          </div>

          {/* Main Heading */}
          <h1 style={{
            color: '#1a1a2e',
            fontSize: '2.8rem',
            marginBottom: '20px',
            fontWeight: '700',
            lineHeight: '1.2'
          }}>
            Welcome to Your Content Dashboard
          </h1>

          {/* Subheading */}
          <p style={{
            color: '#4b5563',
            fontSize: '1.3rem',
            lineHeight: '1.8',
            marginBottom: '40px',
            maxWidth: '700px',
            margin: '0 auto 40px'
          }}>
            Your account is ready! Contact us to customize your dashboard and start creating specialized content for your business.
          </p>

          {/* Features Box */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(31, 124, 255, 0.08) 0%, rgba(99, 102, 241, 0.08) 100%)',
            border: '2px solid rgba(31, 124, 255, 0.2)',
            borderRadius: '16px',
            padding: '40px',
            marginBottom: '40px',
            textAlign: 'left',
            boxShadow: '0 4px 20px rgba(31, 124, 255, 0.1)'
          }}>
            <h2 style={{
              color: '#1a1a2e',
              fontSize: '1.5rem',
              marginBottom: '25px',
              fontWeight: '700',
              textAlign: 'center'
            }}>
              What We'll Set Up For You
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
              marginBottom: '20px'
            }}>
              {/* Blog Content */}
              <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>📝</div>
                <h3 style={{
                  color: '#1a1a2e',
                  fontSize: '1.1rem',
                  marginBottom: '8px',
                  fontWeight: '600'
                }}>
                  Blog Posts
                </h3>
                <p style={{
                  color: '#6b7280',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  AI-powered blog content tailored to your business
                </p>
              </div>

              {/* Facebook */}
              <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>📘</div>
                <h3 style={{
                  color: '#1a1a2e',
                  fontSize: '1.1rem',
                  marginBottom: '8px',
                  fontWeight: '600'
                }}>
                  Facebook
                </h3>
                <p style={{
                  color: '#6b7280',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  Engaging posts for your Facebook audience
                </p>
              </div>

              {/* Instagram */}
              <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>📸</div>
                <h3 style={{
                  color: '#1a1a2e',
                  fontSize: '1.1rem',
                  marginBottom: '8px',
                  fontWeight: '600'
                }}>
                  Instagram
                </h3>
                <p style={{
                  color: '#6b7280',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  Visual content optimized for Instagram
                </p>
              </div>

              {/* LinkedIn */}
              <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>💼</div>
                <h3 style={{
                  color: '#1a1a2e',
                  fontSize: '1.1rem',
                  marginBottom: '8px',
                  fontWeight: '600'
                }}>
                  LinkedIn
                </h3>
                <p style={{
                  color: '#6b7280',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  Professional content for LinkedIn networking
                </p>
              </div>

              {/* Twitter/X */}
              <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🐦</div>
                <h3 style={{
                  color: '#1a1a2e',
                  fontSize: '1.1rem',
                  marginBottom: '8px',
                  fontWeight: '600'
                }}>
                  Twitter/X
                </h3>
                <p style={{
                  color: '#6b7280',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  Concise, impactful posts for Twitter/X
                </p>
              </div>

              {/* And More */}
              <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>✨</div>
                <h3 style={{
                  color: '#1a1a2e',
                  fontSize: '1.1rem',
                  marginBottom: '8px',
                  fontWeight: '600'
                }}>
                  And More
                </h3>
                <p style={{
                  color: '#6b7280',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  Custom integrations for your specific needs
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            borderRadius: '16px',
            padding: '40px',
            marginBottom: '30px',
            color: 'white',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '15px',
              fontWeight: '700'
            }}>
              Ready to Get Started?
            </h3>
            <p style={{
              fontSize: '1.1rem',
              marginBottom: '25px',
              opacity: 0.9,
              lineHeight: '1.6'
            }}>
              Contact our team to customize your dashboard with AI-powered content generation for your blog and social media platforms.
            </p>
            <a
              href="/contact"
              style={{
                display: 'inline-block',
                background: 'white',
                color: '#1a1a2e',
                padding: '16px 48px',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: '700',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 16px rgba(255, 255, 255, 0.2)'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 6px 24px rgba(255, 255, 255, 0.3)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 16px rgba(255, 255, 255, 0.2)';
              }}
            >
              Contact LogicPros Team
            </a>
          </div>

          {/* Contact Info */}
          <p style={{
            color: '#6b7280',
            fontSize: '1rem',
            marginTop: '20px'
          }}>
            Have questions? Email us at{' '}
            <a href="mailto:aaron@logicpros.ca" style={{
              color: '#1F7CFF',
              textDecoration: 'none',
              fontWeight: '600'
            }}>
              aaron@logicpros.ca
            </a>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlankDashboardPage;
