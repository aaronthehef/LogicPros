import React, { useEffect, useState, useCallback } from 'react';
import { colors } from '../styles/colors';
import '../responsive-style.css';
import { Logo } from '../components/Logo';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import {
  subscribeToAuth,
  initializeAuth,
  getCurrentBusiness,
  needsBusinessSetup,
  isAuthenticated,
  getUserRole,
  hasPermission
} from '../services/authService';
import { createBusinessWordPressService } from '../services/businessWordPressService';
import { collection, query, orderBy, limit, onSnapshot, db, addDoc } from '../firebase';
import BlankDashboardPage from './BlankDashboardPage';
import { LogicProsPage } from './LogicProsPage';

export const MultiBusinessDashboardPage = () => {
  const [authState, setAuthState] = useState({
    user: null,
    businessContext: null,
    isAuthenticated: false,
    needsSetup: false,
    currentBusiness: null,
    userRole: null,
    isAdmin: false,
    canEdit: false
  });
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([
    {
      id: 1,
      platform: 'Instagram',
      content: '',
      imageUrls: [],
      notes: '',
      aiMetadata: {}
    },
    {
      id: 2,
      platform: 'Facebook',
      content: '',
      imageUrls: [],
      notes: '',
      aiMetadata: {}
    },
    {
      id: 3,
      platform: 'Twitter/X',
      content: '',
      imageUrls: [],
      notes: '',
      aiMetadata: {}
    },
    {
      id: 4,
      platform: 'LinkedIn',
      content: '',
      imageUrls: [],
      notes: '',
      aiMetadata: {}
    }
  ]);
  const [blogPost, setBlogPost] = useState({
    title: '',
    content: '',
    featuredImageUrl: '',
    aiMetadata: {}
  });
  const [postHistory, setPostHistory] = useState([]);
  const [wordpressPosts, setWordpressPosts] = useState([]);
  const [message, setMessage] = useState('');
  const [loadingMessage, setLoadingMessage] = useState('');
  const [wordpressLoading, setWordpressLoading] = useState(false);

  const loadingMessages = [
    'Pondering...',
    'Thinking deeply...',
    'Pontificating...',
    'Consulting the AI...',
    'Crafting brilliance...',
    'Summoning creativity...',
    'Weaving words...',
    'Analyzing trends...',
    'Generating magic...',
    'Almost there...'
  ];

  // Initialize authentication and business context
  useEffect(() => {
    const initializeDashboard = async () => {
      try {
        setLoading(true);
        const businessData = await initializeAuth();
        setAuthState(businessData);
        
        // Load post history if user has business
        if (businessData.business && !businessData.needsSetup) {
          await loadPostHistory(businessData.business.businessId);
          await loadWordPressPosts(businessData.business.businessId);
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error initializing dashboard:', error);
        setLoading(false);
        setMessage('Error initializing dashboard: ' + error.message);
      }
    };

    initializeDashboard();

    // Subscribe to auth changes
    const unsubscribe = subscribeToAuth((newAuthState) => {
      setAuthState(newAuthState);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // Load post history for current business
  const loadPostHistory = useCallback(async (businessId) => {
    if (!businessId) return;

    try {
      const postsQuery = query(
        collection(db, 'businesses', businessId, 'posts'),
        orderBy('createdAt', 'desc'),
        limit(50)
      );

      const unsubscribeSnapshot = onSnapshot(postsQuery, (snapshot) => {
        const historyData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setPostHistory(historyData);
      }, (error) => {
        console.error('Error loading post history:', error);
        setMessage('Error loading post history: ' + error.message);
      });

      return unsubscribeSnapshot;
    } catch (error) {
      console.error('Error setting up post history listener:', error);
    }
  }, []);

  // Load WordPress posts for current business
  const loadWordPressPosts = useCallback(async (businessId) => {
    if (!businessId) return;

    setWordpressLoading(true);
    try {
      const wordpressService = createBusinessWordPressService(businessId);
      const result = await wordpressService.fetchPosts({
        perPage: 20,
        status: 'publish'
      });
      
      if (result.success) {
        const formattedPosts = result.posts.map(post => ({
          id: post.id.toString(),
          title: post.title.rendered,
          content: post.content.rendered,
          excerpt: post.excerpt.rendered,
          featuredImageUrl: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
          createdAt: post.date,
          modifiedAt: post.modified,
          slug: post.slug,
          link: post.link,
          status: post.status,
          author: post._embedded?.author?.[0]?.name || 'Unknown',
          wordpressPostId: post.id
        }));
        
        setWordpressPosts(formattedPosts);
      } else {
        console.error('Failed to load WordPress posts:', result.error);
        setMessage('Error loading WordPress posts: ' + result.error);
      }
    } catch (error) {
      console.error('Error loading WordPress posts:', error);
      setMessage('Error loading WordPress posts: ' + error.message);
    } finally {
      setWordpressLoading(false);
    }
  }, []);

  // Handle content changes
  const handleContentChange = useCallback((postId, content) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId ? { ...post, content } : post
      )
    );
  }, []);

  const handleImageChange = useCallback((postId, imageUrl) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId ? { ...post, imageUrls: imageUrl ? [imageUrl] : [] } : post
      )
    );
  }, []);

  const handleNotesChange = useCallback((postId, notes) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId ? { ...post, notes } : post
      )
    );
  }, []);

  const handleBlogChange = useCallback((field, value) => {
    setBlogPost(prev => ({ ...prev, [field]: value }));
  }, []);

  // Save social media post
  const handleSavePost = async (post) => {
    if (!authState.currentBusiness || !hasPermission('manage_wordpress')) {
      setMessage('Error: You do not have permission to save posts.');
      return;
    }

    if (!post.content.trim()) {
      setMessage('Error: Post content cannot be empty.');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      await addDoc(collection(db, 'businesses', authState.currentBusiness.businessId, 'posts'), {
        type: 'social',
        platform: post.platform,
        content: post.content,
        imageUrls: post.imageUrls || [],
        notes: post.notes || '',
        status: 'published',
        createdAt: new Date(),
        updatedAt: new Date(),
        publishedAt: new Date(),
        createdBy: authState.user.uid,
        aiMetadata: post.aiMetadata || {},
        scheduledDate: null,
        campaignTags: []
      });

      setMessage(`✅ Post saved to ${post.platform} successfully!`);

      // Clear the form for this platform
      setPosts(prevPosts =>
        prevPosts.map(p =>
          p.id === post.id ? { ...p, content: '', imageUrls: [], notes: '' } : p
        )
      );

      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error saving post:', error);
      setMessage(`❌ Failed to save post: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Save blog post
  const handleSaveBlogPost = async () => {
    if (!authState.currentBusiness || !hasPermission('manage_wordpress')) {
      setMessage('Error: You do not have permission to publish posts.');
      return;
    }

    if (!blogPost.title.trim() || !blogPost.content.trim()) {
      setMessage('Error: Blog title and content are required.');
      return;
    }

    setLoading(true);
    setMessage('Publishing to WordPress...');

    try {
      const wordpressService = createBusinessWordPressService(authState.currentBusiness.businessId);
      const result = await wordpressService.publishPost({
        title: blogPost.title,
        content: blogPost.content,
        featuredImageUrl: blogPost.featuredImageUrl,
        status: 'publish'
      });

      if (result.success) {
        // Save to Firestore with WordPress publication data
        await addDoc(collection(db, 'businesses', authState.currentBusiness.businessId, 'posts'), {
          type: 'blog',
          title: blogPost.title,
          content: blogPost.content,
          featuredImageUrl: blogPost.featuredImageUrl || '',
          status: 'published',
          createdAt: new Date(),
          updatedAt: new Date(),
          publishedAt: new Date(),
          wordpressPostId: result.post.id,
          publishedUrl: result.post.link,
          wordpressSlug: result.post.slug,
          createdBy: authState.user.uid,
          aiMetadata: blogPost.aiMetadata || {},
          scheduledDate: null
        });

        setMessage(`✅ Blog post published successfully! View it at: ${result.post.link}`);

        // Clear the blog form
        setBlogPost({
          title: '',
          content: '',
          featuredImageUrl: '',
          aiMetadata: {}
        });

        // Refresh WordPress posts list
        setTimeout(() => {
          loadWordPressPosts(authState.currentBusiness.businessId);
        }, 1000);

        setTimeout(() => setMessage(''), 5000);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error('Error publishing blog post:', error);
      setMessage(`❌ Failed to publish blog post: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Generate posts with AI
  const handleGeneratePosts = async () => {
    if (!authState.currentBusiness || !hasPermission('manage_wordpress')) {
      setMessage('❌ You do not have permission to generate posts.');
      return;
    }

    setLoading(true);
    setMessage('');

    let messageIndex = 0;
    setLoadingMessage(loadingMessages[0]);
    const messageInterval = setInterval(() => {
      messageIndex = (messageIndex + 1) % loadingMessages.length;
      setLoadingMessage(loadingMessages[messageIndex]);
    }, 2000);

    try {
      const response = await fetch('https://n8n.logicpros.ca/webhook/3f8e4aac-da20-42e1-ad5d-3aa49de2c98a', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          action: 'generate_posts',
          userId: authState.user?.uid,
          businessId: authState.currentBusiness?.businessId,
          timestamp: new Date().toISOString(),
          platforms: posts.map(p => p.platform)
        })
      });

      if (!response.ok) {
        throw new Error(`Workflow failed with status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.status === 'processing') {
        // Set up real-time listener for newly generated posts
        const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
        const recentPostsQuery = collection(db, 'businesses', authState.currentBusiness.businessId, 'generatedPosts');

        const unsubscribe = onSnapshot(recentPostsQuery, (snapshot) => {
          if (!snapshot.empty) {
            const sortedDocs = snapshot.docs
              .map(doc => ({ id: doc.id, ...doc.data() }))
              .sort((a, b) => {
                const aTime = a.createdAt?.toDate ? a.createdAt.toDate() : new Date(a.createdAt);
                const bTime = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(b.createdAt);
                return bTime - aTime;
              });

            const latestPost = sortedDocs[0];
            const postCreatedAt = latestPost.createdAt?.toDate ? latestPost.createdAt.toDate() : new Date(latestPost.createdAt);

            if (postCreatedAt > fiveMinutesAgo) {
              unsubscribe();
              clearInterval(messageInterval);
              setLoading(false);

              // Update forms with generated content
              setPosts(prevPosts =>
                prevPosts.map(post => {
                  let generatedContent = '';
                  let generatedImages = [];
                  let metadata = {};

                  switch (post.platform) {
                    case 'Instagram':
                      if (latestPost.instagram_caption) {
                        generatedContent = latestPost.instagram_caption;
                        if (latestPost.instagram_visual_suggestion) {
                          generatedImages = [latestPost.instagram_visual_suggestion];
                        }
                        metadata = {
                          hashtags: latestPost.instagram_hashtags || [],
                          charCount: latestPost.instagram_char_count || 0
                        };
                      }
                      break;
                    case 'Facebook':
                      if (latestPost.facebook_post) {
                        generatedContent = latestPost.facebook_post;
                        metadata = {
                          charCount: latestPost.facebook_char_count || 0,
                          hasLink: latestPost.facebook_has_link || false
                        };
                      }
                      break;
                    case 'Twitter/X':
                      if (latestPost.twitter_thread && Array.isArray(latestPost.twitter_thread)) {
                        generatedContent = latestPost.twitter_thread.join('\n\n---\n\n');
                        metadata = {
                          tweetCount: latestPost.twitter_tweet_count || latestPost.twitter_thread.length,
                          originalThread: latestPost.twitter_thread
                        };
                      }
                      break;
                    case 'LinkedIn':
                      if (latestPost.linkedin_post) {
                        generatedContent = latestPost.linkedin_post;
                        metadata = {
                          hashtags: latestPost.linkedin_hashtags || []
                        };
                      }
                      break;
                  }

                  if (generatedContent) {
                    return {
                      ...post,
                      content: generatedContent,
                      imageUrls: generatedImages,
                      aiMetadata: {
                        ...metadata,
                        generatedAt: new Date().toISOString(),
                        source: 'n8n'
                      }
                    };
                  }
                  return post;
                })
              );

              if (latestPost.polished_title && latestPost.polished_post) {
                setBlogPost(prev => ({
                  ...prev,
                  title: latestPost.polished_title || '',
                  content: latestPost.polished_post || '',
                  aiMetadata: {
                    generatedAt: new Date().toISOString(),
                    source: 'n8n',
                    wordCount: latestPost.polished_word_count || 0
                  }
                }));
              }

              setMessage('✅ Posts generated successfully! Review and edit below.');
            }
          }
        });

        setTimeout(() => {
          unsubscribe();
          clearInterval(messageInterval);
          setLoading(false);
          setMessage('⏱️ Generation is taking longer than expected. Please check back shortly.');
        }, 600000);

        return;
      }

      setMessage('✅ Posts generated successfully! Review and edit below.');
      clearInterval(messageInterval);
      setLoading(false);
      setTimeout(() => setMessage(''), 5000);

    } catch (error) {
      clearInterval(messageInterval);
      console.error('Error triggering n8n workflow:', error);
      setMessage(`❌ Failed to trigger workflow: ${error.message}`);
      setLoading(false);
    }
  };

  // Get platform icon
  const getPlatformIcon = useCallback((platform) => {
    const icons = {
      'Instagram': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#instagram-gradient)" strokeWidth="2" fill="none"/>
          <circle cx="12" cy="12" r="4" stroke="url(#instagram-gradient)" strokeWidth="2"/>
          <circle cx="17.5" cy="6.5" r="1.5" fill="url(#instagram-gradient)"/>
          <defs>
            <linearGradient id="instagram-gradient" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FD5949"/>
              <stop offset="0.5" stopColor="#D6249F"/>
              <stop offset="1" stopColor="#285AEB"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      'Facebook': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875V7.875H16.8306C19.6118 7.875 24 10.8001 24 12Z" fill="#1877F2"/>
        </svg>
      ),
      'Twitter/X': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="black"/>
        </svg>
      ),
      'LinkedIn': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0A66C2"/>
        </svg>
      )
    };
    return icons[platform] || (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    );
  }, []);

  // Show loading state
  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
      }}>
        <div style={{
          textAlign: 'center',
          color: 'white'
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            border: '4px solid rgba(255, 255, 255, 0.1)',
            borderTop: '4px solid #1F7CFF',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 20px'
          }}></div>
          <p>Loading dashboard...</p>
        </div>
      </div>
    );
  }

  // Show blank dashboard if user needs setup
  if (authState.needsSetup) {
    return BlankDashboardPage();
  }

  // Show login Page if not authenticated
  if (!authState.isAuthenticated) {
    return LogicProsPage();
  }

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
        {/* Business Info Header */}
        {authState.currentBusiness && (
          <div className="business-header" style={{
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '30px',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '15px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                {authState.currentBusiness.business.branding?.logo && (
                  <img 
                    src={authState.currentBusiness.business.branding.logo} 
                    alt="Business Logo" 
                    style={{ height: '40px', width: 'auto' }}
                  />
                )}
                <div>
                  <h2 style={{ margin: '0', color: 'white', fontSize: '1.5rem' }}>
                    {authState.currentBusiness.business.name}
                  </h2>
                  <p style={{ margin: '5px 0 0 0', color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>
                    {authState.user.email} • {authState.userRole} role
                  </p>
                </div>
              </div>
              
              {authState.currentBusiness.business.wordpressConfig?.siteUrl && (
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.9)'
                }}>
                  📝 Connected to WordPress
                </div>
              )}
            </div>
          </div>
        )}

        {/* Dashboard Title */}
        <div className="dashboard-title">
          <h1>Social Media Poster</h1>
          <p>
            Create and manage social media posts for Instagram, Facebook, Twitter/X, and LinkedIn
            <span className="ai-indicator">AI Powered</span>
          </p>
        </div>

        {/* Loading Overlay */}
        {loading && (
          <div className="loading-overlay">
            <div className="loading-content">
              <div className="spinner"></div>
              <p className="loading-text">{loadingMessage}</p>
            </div>
          </div>
        )}

        {/* Posts Section */}
        <div className="posts-container">
          {/* Generate All Posts with AI Button */}
          {hasPermission('manage_wordpress') && (
            <button
              className="generate-button full-width-button"
              onClick={handleGeneratePosts}
              disabled={loading}
            >
              {loading ? (
                <>
                  <div className="spinner small-spinner"></div>
                  Generating...
                </>
              ) : (
                <>
                  🤖 Generate All Posts with AI
                </>
              )}
            </button>
          )}

          <h2 className="section-title">
            Create Posts
          </h2>

          {message && (
            <div className={`message ${message.includes('success') ? 'success-message' : 'error-message'}`}>
              {message}
            </div>
          )}

          <div className="posts-grid">
            {/* Blog Post Card */}
            {hasPermission('manage_wordpress') && (
              <div className="post-card blog-post-card">
                <div className="platform-header">
                  <span className="platform-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 2V8H20M16 13H8M16 17H8M10 9H8" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="platform-name">Blog Post</span>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Title *
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    value={blogPost.title}
                    onChange={(e) => handleBlogChange('title', e.target.value)}
                    placeholder="Enter blog post title..."
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Content *
                  </label>
                  <textarea
                    className="form-textarea"
                    value={blogPost.content}
                    onChange={(e) => handleBlogChange('content', e.target.value)}
                    placeholder="Enter your blog post content here..."
                    style={{ minHeight: '300px' }}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Featured Image URL (optional)
                  </label>
                  <input
                    type="url"
                    className="form-input"
                    value={blogPost.featuredImageUrl}
                    onChange={(e) => handleBlogChange('featuredImageUrl', e.target.value)}
                    placeholder="https://example.com/featured-image.jpg"
                  />
                </div>

                <button
                  className="post-button"
                  onClick={handleSaveBlogPost}
                  disabled={loading}
                >
                  {loading ? 'Publishing...' : 'Publish to Blog'}
                </button>
              </div>
            )}

            {/* Social Media Posts */}
            {posts.map(post => (
              hasPermission('manage_wordpress') && (
                <div key={post.id} className="post-card">
                  <div className="platform-header">
                    <span className="platform-icon">{getPlatformIcon(post.platform)}</span>
                    <span className="platform-name">{post.platform}</span>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Content
                    </label>
                    <textarea
                      className="form-textarea"
                      value={post.content}
                      onChange={(e) => handleContentChange(post.id, e.target.value)}
                      placeholder={`Enter your ${post.platform} post content here...`}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Image URL (optional)
                    </label>
                    <input
                      type="url"
                      className="form-input"
                      value={post.imageUrls[0] || ''}
                      onChange={(e) => handleImageChange(post.id, e.target.value)}
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Notes (optional)
                    </label>
                    <textarea
                      className="form-textarea"
                      value={post.notes}
                      onChange={(e) => handleNotesChange(post.id, e.target.value)}
                      placeholder="Add any notes or reminders about this post..."
                      style={{ minHeight: '60px' }}
                    />
                  </div>

                  <button
                    className="post-button"
                    onClick={() => handleSavePost(post)}
                    disabled={loading}
                  >
                    {loading ? 'Saving...' : `Save ${post.platform} Post`}
                  </button>
                </div>
              )
            ))}
          </div>
        </div>

        {/* WordPress Posts Management */}
        {hasPermission('view_analytics') && (
          <div className="posts-container" style={{ marginTop: '30px' }}>
            <div className="dashboard-title">
              <h2>WordPress Blog Posts</h2>
              <p>
                View and manage your published WordPress blog posts
                <span className="ai-indicator">Live from WordPress</span>
              </p>
            </div>

            <div className="posts-grid">
              {wordpressLoading ? (
                <div style={{ textAlign: 'center', padding: '40px' }}>
                  <div className="spinner"></div>
                  <p>Loading WordPress posts...</p>
                </div>
              ) : wordpressPosts.length === 0 ? (
                <div className="empty-history">
                  <p>No blog posts found on WordPress. Create your first blog post above!</p>
                </div>
              ) : (
                wordpressPosts.map(post => (
                  <div key={post.id} className="post-card">
                    <div className="platform-header">
                      <span className="platform-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M14 2V8H20M16 13H8M16 17H8M10 9H8" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span className="platform-name">{post.title || 'Untitled Blog Post'}</span>
                    </div>

                    <div className="history-post-content">
                      <div
                        dangerouslySetInnerHTML={{ __html: post.excerpt || post.content.substring(0, 200) + '...' }}
                        style={{
                          fontSize: '0.9rem',
                          lineHeight: '1.6',
                          color: '#2c3e50',
                          marginBottom: '15px'
                        }}
                      />

                      {post.featuredImageUrl && (
                        <img
                          src={post.featuredImageUrl}
                          alt="Post"
                          className="history-post-image"
                        />
                      )}

                      <div className="history-post-meta">
                        <div>
                          {post.createdAt ? new Date(post.createdAt).toLocaleString() : 'Just now'}
                        </div>
                        <div style={{ marginTop: '5px', fontSize: '0.9rem', color: '#666' }}>
                          Author: {post.author}
                        </div>
                        {post.link && (
                          <div style={{ marginTop: '10px' }}>
                            <a href={post.link} target="_blank" rel="noopener noreferrer" style={{ color: '#1F7CFF', textDecoration: 'none' }}>
                              View on WordPress →
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Post History Section */}
        {hasPermission('view_analytics') && postHistory.length > 0 && (
          <div className="posts-container history-container">
            <div className="history-header">
              <h2>Post History</h2>
            </div>

            <div className="history-content">
              <div className="posts-grid">
                {postHistory.map(post => (
                  <div key={post.id} className="post-card">
                    <div className="platform-header">
                      <span className="platform-icon">{getPlatformIcon(post.platform || 'Blog')}</span>
                      <span className="platform-name">{post.platform || 'Blog'}</span>
                    </div>

                    <div className="history-post-content">
                      <p>{post.content}</p>

                      {post.featuredImageUrl && (
                        <img
                          src={post.featuredImageUrl}
                          alt="Post"
                          className="history-post-image"
                        />
                      )}

                      <div className="history-post-meta">
                        {post.createdAt ? new Date(post.createdAt.toDate ? post.createdAt.toDate() : post.createdAt).toLocaleString() : 'Just now'}
                        {post.publishedUrl && (
                          <div style={{ marginTop: '10px' }}>
                            <a href={post.publishedUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#1F7CFF', textDecoration: 'none' }}>
                              View Published Post →
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default MultiBusinessDashboardPage;