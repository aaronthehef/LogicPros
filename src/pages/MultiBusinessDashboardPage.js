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
  // Add CSS animations for the dashboard
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes slideIn {
        from { opacity: 0; transform: translateX(-20px); }
        to { opacity: 1; transform: translateX(0); }
      }
      
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
      }
      
      .dashboard-card {
        animation: fadeIn 0.6s ease-out;
        transition: all 0.3s ease;
      }
      
      .dashboard-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(29, 122, 175, 0.15);
      }
      
      .dashboard-button {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        overflow: hidden;
      }
      
      .dashboard-button::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        transition: left 0.6s;
      }
      
      .dashboard-button:hover::before {
        left: 100%;
      }
      
      .dashboard-form-input {
        transition: all 0.3s ease;
      }
      
      .dashboard-form-input:focus {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(31, 124, 255, 0.15);
      }
      
      .platform-gradient-instagram {
        background: linear-gradient(45deg, #E4405F, #C13584);
      }
      
      .platform-gradient-facebook {
        background: linear-gradient(45deg, #1877F2, #166FE5);
      }
      
      .platform-gradient-twitter {
        background: linear-gradient(45deg, #000000, #333333);
      }
      
      .platform-gradient-linkedin {
        background: linear-gradient(45deg, #0A66C2, #004182);
      }
      
      .platform-gradient-blog {
        background: linear-gradient(45deg, #6366F1, #8B5CF6);
      }
      
      /* Responsive design improvements */
      @media (max-width: 768px) {
        .dashboard-grid {
          grid-template-columns: 1fr !important;
          gap: 20px !important;
        }
        
        .dashboard-hero-title {
          font-size: 2rem !important;
        }
        
        .dashboard-card {
          padding: 20px !important;
        }
        
        .dashboard-button {
          padding: 12px 20px !important;
          font-size: 0.9rem !important;
        }
      }
      
      @media (max-width: 480px) {
        .dashboard-hero-title {
          font-size: 1.5rem !important;
        }
        
        .dashboard-card {
          padding: 15px !important;
        }
        
        .dashboard-form-input {
          padding: 10px 12px !important;
          font-size: 16px !important; /* Prevents zoom on iOS */
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
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

  // Helper functions for platform styling
  const getPlatformColor = useCallback((platform) => {
    const colors = {
      'Instagram': '#E4405F',
      'Facebook': '#1877F2',
      'Twitter/X': '#000000',
      'LinkedIn': '#0A66C2',
      'Blog': '#6366F1'
    };
    return colors[platform] || '#1F7CFF';
  }, []);

  const getPlatformGradient = useCallback((platform) => {
    const gradients = {
      'Instagram': 'linear-gradient(45deg, #E4405F, #C13584)',
      'Facebook': 'linear-gradient(45deg, #1877F2, #166FE5)',
      'Twitter/X': 'linear-gradient(45deg, #000000, #333333)',
      'LinkedIn': 'linear-gradient(45deg, #0A66C2, #004182)',
      'Blog': 'linear-gradient(45deg, #6366F1, #8B5CF6)'
    };
    return gradients[platform] || 'linear-gradient(45deg, #1F7CFF, #1e40af)';
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
              Content Creation Dashboard
            </h1>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: '#e2e8f0',
              marginBottom: '1rem',
              fontWeight: '300',
              maxWidth: '600px'
            }}>
              Create and manage content for your blog and social media platforms with AI-powered assistance
              <span className="ai-indicator" style={{
                background: 'linear-gradient(45deg, #1F7CFF, #22c55e)',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                marginLeft: '10px',
                fontWeight: '500',
                display: 'inline-block'
              }}>AI Powered</span>
            </p>
          </div>
        </div>
      </section>

      <main className="main-content">
          {/* Business Info Header */}
          {authState.currentBusiness && (
            <div className="business-header" style={{
              background: 'white',
              padding: '25px',
              borderRadius: '12px',
              marginBottom: '40px',
              border: '1px solid rgba(29, 122, 175, 0.1)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '20px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  {authState.currentBusiness.business.branding?.logo && (
                    <img
                      src={authState.currentBusiness.business.branding.logo}
                      alt="Business Logo"
                      style={{ height: '50px', width: 'auto', borderRadius: '8px' }}
                    />
                  )}
                  <div>
                    <h2 style={{ margin: '0', color: '#1a1a2e', fontSize: '1.6rem', fontWeight: '700' }}>
                      {authState.currentBusiness.business.name}
                    </h2>
                    <p style={{ margin: '5px 0 0 0', color: '#6b7280', fontSize: '0.95rem' }}>
                      {authState.user.email} • {authState.userRole} role
                    </p>
                  </div>
                </div>
                
                {authState.currentBusiness.business.wordpressConfig?.siteUrl && (
                  <div style={{
                    background: 'linear-gradient(45deg, #22c55e, #16a34a)',
                    padding: '10px 20px',
                    borderRadius: '25px',
                    fontSize: '0.9rem',
                    color: 'white',
                    fontWeight: '500',
                    boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)'
                  }}>
                    📝 Connected to WordPress
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Loading Overlay */}
          {loading && (
            <div style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              backdropFilter: 'blur(5px)'
            }}>
              <div style={{
                background: 'white',
                padding: '40px',
                borderRadius: '16px',
                textAlign: 'center',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                maxWidth: '400px'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  border: '4px solid rgba(31, 124, 255, 0.1)',
                  borderTop: '4px solid #1F7CFF',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite',
                  margin: '0 auto 20px'
                }}></div>
                <p style={{
                  fontSize: '1.1rem',
                  color: '#1a1a2e',
                  fontWeight: '500',
                  marginBottom: '10px'
                }}>{loadingMessage}</p>
                <p style={{
                  fontSize: '0.9rem',
                  color: '#6b7280'
                }}>Please wait while we work our magic...</p>
              </div>
            </div>
          )}

          {/* Posts Section */}
          <section className="section" style={{ backgroundColor: '#f5f8fc', padding: '60px 0' }}>
            <div className="container">
              {/* Generate All Posts with AI Button */}
              {hasPermission('manage_wordpress') && (
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                  <button
                    style={{
                      background: 'linear-gradient(135deg, #1F7CFF 0%, #1e40af 100%)',
                      color: 'white',
                      padding: '18px 40px',
                      borderRadius: '50px',
                      border: 'none',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      boxShadow: '0 8px 25px rgba(31, 124, 255, 0.4)',
                      transition: 'all 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '12px',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onClick={handleGeneratePosts}
                    disabled={loading}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-3px)';
                      e.target.style.boxShadow = '0 12px 35px rgba(31, 124, 255, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 8px 25px rgba(31, 124, 255, 0.4)';
                    }}
                  >
                    {loading ? (
                      <>
                        <div style={{
                          width: '20px',
                          height: '20px',
                          border: '2px solid rgba(255, 255, 255, 0.3)',
                          borderTop: '2px solid white',
                          borderRadius: '50%',
                          animation: 'spin 1s linear infinite'
                        }}></div>
                        Generating...
                      </>
                    ) : (
                      <>
                        🤖 Generate All Posts with AI
                      </>
                    )}
                  </button>
                </div>
              )}

              <h2 style={{
                textAlign: 'center',
                fontSize: '2.5rem',
                fontWeight: '700',
                marginBottom: '50px',
                color: '#1a1a2e'
              }}>
                Create Content
              </h2>

              {message && (
                <div style={{
                  textAlign: 'center',
                  marginBottom: '30px',
                  padding: '15px 25px',
                  borderRadius: '8px',
                  background: message.includes('success') ? 'linear-gradient(45deg, #d4edda, #c3e6cb)' : 'linear-gradient(45deg, #f8d7da, #f5c6cb)',
                  border: `1px solid ${message.includes('success') ? '#c3e6cb' : '#f5c6cb'}`,
                  color: message.includes('success') ? '#155724' : '#721c24',
                  fontWeight: '500',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}>
                  {message}
                </div>
              )}

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '30px'
              }}>
                {/* Blog Post Card */}
                {hasPermission('manage_wordpress') && (
                  <div style={{
                    background: 'white',
                    borderRadius: '16px',
                    padding: '30px',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(29, 122, 175, 0.1)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      right: '0',
                      height: '4px',
                      background: 'linear-gradient(90deg, #6366F1, #8B5CF6, #EC4899)',
                    }}></div>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '25px'
                    }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'linear-gradient(45deg, #6366F1, #8B5CF6)',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M14 2V8H20M16 13H8M16 17H8M10 9H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <h3 style={{
                          margin: '0',
                          fontSize: '1.3rem',
                          fontWeight: '700',
                          color: '#1a1a2e'
                        }}>Blog Post</h3>
                        <p style={{
                          margin: '2px 0 0 0',
                          fontSize: '0.9rem',
                          color: '#6b7280'
                        }}>Create engaging blog content</p>
                      </div>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                      <label style={{
                        display: 'block',
                        fontWeight: '600',
                        marginBottom: '8px',
                        color: '#1a1a2e',
                        fontSize: '0.95rem'
                      }}>
                        Title *
                      </label>
                      <input
                        type="text"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '2px solid #e0e0e0',
                          borderRadius: '8px',
                          fontSize: '1rem',
                          transition: 'all 0.3s ease',
                          background: 'white'
                        }}
                        value={blogPost.title}
                        onChange={(e) => handleBlogChange('title', e.target.value)}
                        placeholder="Enter blog post title..."
                        onFocus={(e) => {
                          e.target.style.borderColor = '#6366F1';
                          e.target.style.boxShadow = '0 0 0 3px rgba(99, 102, 241, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#e0e0e0';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                      <label style={{
                        display: 'block',
                        fontWeight: '600',
                        marginBottom: '8px',
                        color: '#1a1a2e',
                        fontSize: '0.95rem'
                      }}>
                        Content *
                      </label>
                      <textarea
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '2px solid #e0e0e0',
                          borderRadius: '8px',
                          fontSize: '1rem',
                          transition: 'all 0.3s ease',
                          background: 'white',
                          minHeight: '250px',
                          resize: 'vertical',
                          fontFamily: 'inherit'
                        }}
                        value={blogPost.content}
                        onChange={(e) => handleBlogChange('content', e.target.value)}
                        placeholder="Enter your blog post content here..."
                        onFocus={(e) => {
                          e.target.style.borderColor = '#6366F1';
                          e.target.style.boxShadow = '0 0 0 3px rgba(99, 102, 241, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#e0e0e0';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: '25px' }}>
                      <label style={{
                        display: 'block',
                        fontWeight: '600',
                        marginBottom: '8px',
                        color: '#1a1a2e',
                        fontSize: '0.95rem'
                      }}>
                        Featured Image URL (optional)
                      </label>
                      <input
                        type="url"
                        className="dashboard-form-input"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '2px solid #e0e0e0',
                          borderRadius: '8px',
                          fontSize: '1rem',
                          background: 'white'
                        }}
                        value={blogPost.featuredImageUrl}
                        onChange={(e) => handleBlogChange('featuredImageUrl', e.target.value)}
                        placeholder="https://example.com/featured-image.jpg"
                        onFocus={(e) => {
                          e.target.style.borderColor = '#6366F1';
                          e.target.style.boxShadow = '0 0 0 3px rgba(99, 102, 241, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#e0e0e0';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    <button
                      style={{
                        width: '100%',
                        background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                        color: 'white',
                        padding: '14px 24px',
                        borderRadius: '8px',
                        border: 'none',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)'
                      }}
                      onClick={handleSaveBlogPost}
                      disabled={loading}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 6px 20px rgba(99, 102, 241, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 15px rgba(99, 102, 241, 0.3)';
                      }}
                    >
                      {loading ? 'Publishing...' : 'Publish to Blog'}
                    </button>
                  </div>
                )}

                {/* Social Media Posts */}
                {posts.map(post => (
                  hasPermission('manage_wordpress') && (
                    <div key={post.id} style={{
                      background: 'white',
                      borderRadius: '16px',
                      padding: '30px',
                      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                      border: '1px solid rgba(29, 122, 175, 0.1)',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        right: '0',
                        height: '4px',
                        background: getPlatformGradient(post.platform)
                      }}></div>
                      
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '25px'
                      }}>
                        <div style={{
                          width: '40px',
                          height: '40px',
                          background: getPlatformGradient(post.platform),
                          borderRadius: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          {getPlatformIcon(post.platform)}
                        </div>
                        <div>
                          <h3 style={{
                            margin: '0',
                            fontSize: '1.3rem',
                            fontWeight: '700',
                            color: '#1a1a2e'
                          }}>{post.platform}</h3>
                          <p style={{
                            margin: '2px 0 0 0',
                            fontSize: '0.9rem',
                            color: '#6b7280'
                          }}>Create engaging social content</p>
                        </div>
                      </div>

                      <div style={{ marginBottom: '20px' }}>
                        <label style={{
                          display: 'block',
                          fontWeight: '600',
                          marginBottom: '8px',
                          color: '#1a1a2e',
                          fontSize: '0.95rem'
                        }}>
                          Content
                        </label>
                        <textarea
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            border: '2px solid #e0e0e0',
                            borderRadius: '8px',
                            fontSize: '1rem',
                            transition: 'all 0.3s ease',
                            background: 'white',
                            minHeight: '120px',
                            resize: 'vertical',
                            fontFamily: 'inherit'
                          }}
                          value={post.content}
                          onChange={(e) => handleContentChange(post.id, e.target.value)}
                          placeholder={`Enter your ${post.platform} post content here...`}
                          onFocus={(e) => {
                            e.target.style.borderColor = getPlatformColor(post.platform);
                            e.target.style.boxShadow = `0 0 0 3px ${getPlatformColor(post.platform)}20`;
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = '#e0e0e0';
                            e.target.style.boxShadow = 'none';
                          }}
                        />
                      </div>

                      <div style={{ marginBottom: '20px' }}>
                        <label style={{
                          display: 'block',
                          fontWeight: '600',
                          marginBottom: '8px',
                          color: '#1a1a2e',
                          fontSize: '0.95rem'
                        }}>
                          Image URL (optional)
                        </label>
                        <input
                          type="url"
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            border: '2px solid #e0e0e0',
                            borderRadius: '8px',
                            fontSize: '1rem',
                            transition: 'all 0.3s ease',
                            background: 'white'
                          }}
                          value={post.imageUrls[0] || ''}
                          onChange={(e) => handleImageChange(post.id, e.target.value)}
                          placeholder="https://example.com/image.jpg"
                          onFocus={(e) => {
                            e.target.style.borderColor = getPlatformColor(post.platform);
                            e.target.style.boxShadow = `0 0 0 3px ${getPlatformColor(post.platform)}20`;
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = '#e0e0e0';
                            e.target.style.boxShadow = 'none';
                          }}
                        />
                      </div>

                      <div style={{ marginBottom: '25px' }}>
                        <label style={{
                          display: 'block',
                          fontWeight: '600',
                          marginBottom: '8px',
                          color: '#1a1a2e',
                          fontSize: '0.95rem'
                        }}>
                          Notes (optional)
                        </label>
                        <textarea
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            border: '2px solid #e0e0e0',
                            borderRadius: '8px',
                            fontSize: '1rem',
                            transition: 'all 0.3s ease',
                            background: 'white',
                            minHeight: '80px',
                            resize: 'vertical',
                            fontFamily: 'inherit'
                          }}
                          value={post.notes}
                          onChange={(e) => handleNotesChange(post.id, e.target.value)}
                          placeholder="Add any notes or reminders about this post..."
                          onFocus={(e) => {
                            e.target.style.borderColor = getPlatformColor(post.platform);
                            e.target.style.boxShadow = `0 0 0 3px ${getPlatformColor(post.platform)}20`;
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = '#e0e0e0';
                            e.target.style.boxShadow = 'none';
                          }}
                        />
                      </div>

                      <button
                        style={{
                          width: '100%',
                          background: getPlatformGradient(post.platform),
                          color: 'white',
                          padding: '14px 24px',
                          borderRadius: '8px',
                          border: 'none',
                          fontSize: '1rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          boxShadow: `0 4px 15px ${getPlatformColor(post.platform)}40`
                        }}
                        onClick={() => handleSavePost(post)}
                        disabled={loading}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'translateY(-2px)';
                          e.target.style.boxShadow = `0 6px 20px ${getPlatformColor(post.platform)}50`;
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = `0 4px 15px ${getPlatformColor(post.platform)}40`;
                        }}
                      >
                        {loading ? 'Saving...' : `Save ${post.platform} Post`}
                      </button>
                    </div>
                  )
                ))}
              </div>
            </div>
          </section>

          {/* WordPress Posts Management */}
          {hasPermission('view_analytics') && (
            <section className="section" style={{ backgroundColor: '#ffffff', padding: '60px 0' }}>
              <div className="container">
                <h2 style={{
                  textAlign: 'center',
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '50px',
                  color: '#1a1a2e'
                }}>
                  Published Blog Posts
                </h2>
                <p style={{
                  textAlign: 'center',
                  fontSize: '1.1rem',
                  color: '#6b7280',
                  marginBottom: '50px',
                  maxWidth: '600px',
                  margin: '0 auto 50px'
                }}>
                  View and manage your published WordPress blog posts
                  <span style={{
                    background: 'linear-gradient(45deg, #22c55e, #16a34a)',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    marginLeft: '10px',
                    fontWeight: '500',
                    display: 'inline-block',
                    color: 'white'
                  }}>Live from WordPress</span>
                </p>

                {wordpressLoading ? (
                  <div style={{ textAlign: 'center', padding: '60px' }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      border: '4px solid rgba(31, 124, 255, 0.1)',
                      borderTop: '4px solid #1F7CFF',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite',
                      margin: '0 auto 20px'
                    }}></div>
                    <p style={{ color: '#6b7280' }}>Loading WordPress posts...</p>
                  </div>
                ) : wordpressPosts.length === 0 ? (
                  <div style={{
                    textAlign: 'center',
                    padding: '60px 20px',
                    background: '#f8f9fa',
                    borderRadius: '12px',
                    border: '1px solid #e0e0e0'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(45deg, #6366F1, #8B5CF6)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                      fontSize: '24px'
                    }}>📝</div>
                    <h3 style={{ color: '#1a1a2e', marginBottom: '10px' }}>No Blog Posts Yet</h3>
                    <p style={{ color: '#6b7280' }}>Create your first blog post above to get started!</p>
                  </div>
                ) : (
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '30px'
                  }}>
                    {wordpressPosts.map(post => (
                      <div key={post.id} style={{
                        background: 'white',
                        borderRadius: '16px',
                        padding: '30px',
                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                        border: '1px solid rgba(29, 122, 175, 0.1)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}>
                        <div style={{
                          position: 'absolute',
                          top: '0',
                          left: '0',
                          right: '0',
                          height: '4px',
                          background: 'linear-gradient(90deg, #6366F1, #8B5CF6, #EC4899)',
                        }}></div>
                        
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          marginBottom: '20px'
                        }}>
                          <div style={{
                            width: '40px',
                            height: '40px',
                            background: 'linear-gradient(45deg, #6366F1, #8B5CF6)',
                            borderRadius: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M14 2V8H20M16 13H8M16 17H8M10 9H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div style={{ flex: 1 }}>
                            <h3 style={{
                              margin: '0',
                              fontSize: '1.1rem',
                              fontWeight: '700',
                              color: '#1a1a2e',
                              lineHeight: '1.3'
                            }}>{post.title || 'Untitled Blog Post'}</h3>
                          </div>
                        </div>

                        <div style={{
                          fontSize: '0.9rem',
                          lineHeight: '1.6',
                          color: '#2c3e50',
                          marginBottom: '20px',
                          maxHeight: '100px',
                          overflow: 'hidden'
                        }}>
                          <div dangerouslySetInnerHTML={{ __html: post.excerpt || post.content.substring(0, 150) + '...' }} />
                        </div>

                        {post.featuredImageUrl && (
                          <img
                            src={post.featuredImageUrl}
                            alt="Post"
                            style={{
                              width: '100%',
                              height: '150px',
                              objectFit: 'cover',
                              borderRadius: '8px',
                              marginBottom: '15px'
                            }}
                          />
                        )}

                        <div style={{
                          fontSize: '0.85rem',
                          color: '#6b7280',
                          marginBottom: '15px'
                        }}>
                          {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : 'Just now'}
                          <div style={{ marginTop: '5px' }}>
                            Author: {post.author}
                          </div>
                        </div>
                        
                        {post.link && (
                          <a
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: 'inline-block',
                              background: 'linear-gradient(135deg, #1F7CFF 0%, #1e40af 100%)',
                              color: 'white',
                              padding: '10px 20px',
                              borderRadius: '8px',
                              textDecoration: 'none',
                              fontWeight: '600',
                              fontSize: '0.9rem',
                              transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.transform = 'translateY(-2px)';
                              e.target.style.boxShadow = '0 4px 12px rgba(31, 124, 255, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.transform = 'translateY(0)';
                              e.target.style.boxShadow = 'none';
                            }}
                          >
                            View on WordPress →
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Post History Section */}
          {hasPermission('view_analytics') && postHistory.length > 0 && (
            <section className="section" style={{ backgroundColor: '#f5f8fc', padding: '60px 0' }}>
              <div className="container">
                <h2 style={{
                  textAlign: 'center',
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '50px',
                  color: '#1a1a2e'
                }}>
                  Post History
                </h2>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                  gap: '30px'
                }}>
                  {postHistory.map(post => (
                    <div key={post.id} style={{
                      background: 'white',
                      borderRadius: '16px',
                      padding: '30px',
                      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                      border: '1px solid rgba(29, 122, 175, 0.1)',
                      transition: 'all 0.3s ease'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '20px'
                      }}>
                        <div style={{
                          width: '40px',
                          height: '40px',
                          background: getPlatformGradient(post.platform || 'Blog'),
                          borderRadius: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          {getPlatformIcon(post.platform || 'Blog')}
                        </div>
                        <div>
                          <h3 style={{
                            margin: '0',
                            fontSize: '1.1rem',
                            fontWeight: '700',
                            color: '#1a1a2e'
                          }}>{post.platform || 'Blog'}</h3>
                        </div>
                      </div>

                      <div style={{
                        fontSize: '0.9rem',
                        lineHeight: '1.6',
                        color: '#2c3e50',
                        marginBottom: '15px',
                        maxHeight: '120px',
                        overflow: 'hidden'
                      }}>
                        {post.content}
                      </div>

                      {post.featuredImageUrl && (
                        <img
                          src={post.featuredImageUrl}
                          alt="Post"
                          style={{
                            width: '100%',
                            height: '120px',
                            objectFit: 'cover',
                            borderRadius: '8px',
                            marginBottom: '15px'
                          }}
                        />
                      )}

                      <div style={{
                        fontSize: '0.85rem',
                        color: '#6b7280',
                        marginBottom: '15px'
                      }}>
                        {post.createdAt ? new Date(post.createdAt.toDate ? post.createdAt.toDate() : post.createdAt).toLocaleString() : 'Just now'}
                      </div>
                      
                      {post.publishedUrl && (
                        <a
                          href={post.publishedUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-block',
                            background: 'linear-gradient(135deg, #1F7CFF 0%, #1e40af 100%)',
                            color: 'white',
                            padding: '10px 20px',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            fontWeight: '600',
                            fontSize: '0.9rem',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 4px 12px rgba(31, 124, 255, 0.4)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = 'none';
                          }}
                        >
                          View Published Post →
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>

        <Footer />
      </>
  );
};

export default MultiBusinessDashboardPage;