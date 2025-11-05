import React, { useEffect, useState } from 'react';
import { colors } from '../styles/colors';
import '../responsive-style.css';
import { Logo } from '../components/Logo';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { auth } from '../firebase';
import { db, collection, addDoc, query, orderBy, limit, onSnapshot } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

export const SocialMediaPosterPage = () => {
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
    excerpt: '',
    slug: '',
    tags: [],
    featuredImageUrl: '',
    notes: '',
    aiMetadata: {}
  });

  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [message, setMessage] = useState('');
  const [showHistory, setShowHistory] = useState(false);
  const [postHistory, setPostHistory] = useState([]);
  const [user, setUser] = useState(null);

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

  useEffect(() => {
    // Listen for auth state changes - this waits for Firebase to initialize
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      console.log('Auth state changed, current user:', currentUser);
      setUser(currentUser);

      if (currentUser) {
        console.log('Loading post history for user:', currentUser.uid);

        // Load post history from Firestore
        const postsQuery = query(
          collection(db, 'users', currentUser.uid, 'posts'),
          orderBy('createdAt', 'desc'),
          limit(50)
        );

        const unsubscribeSnapshot = onSnapshot(postsQuery, (snapshot) => {
          console.log('Firestore snapshot:', snapshot);
          console.log('Snapshot docs:', snapshot.docs);

          const historyData = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));

          console.log('History data loaded:', historyData);
          setPostHistory(historyData);
        }, (error) => {
          console.error('Firestore error:', error);
          setMessage('Error loading post history: ' + error.message);
        });

        // Store unsubscribe function for cleanup
        return () => unsubscribeSnapshot();
      } else {
        console.log('No current user found - redirecting to login');
        // Redirect to login if not authenticated
        window.location.href = '/logicpros';
      }
    });

    // Cleanup auth listener on unmount
    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    // Dashboard page styles
    const style = document.createElement('style');
    style.textContent = `
      .dashboard-container {
        min-height: 100vh;
        background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
        padding: 20px;
      }
      .dashboard-header {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        border-radius: 16px;
        padding: 30px;
        margin-bottom: 30px;
        text-align: center;
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
      .dashboard-title {
        color: #1a1a2e;
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 10px;
      }
      .dashboard-subtitle {
        color: '#6b7280';
        font-size: 1rem;
        margin-bottom: 20px;
      }
      .posts-container {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        border-radius: 16px;
        padding: 30px;
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
      .posts-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        margin-bottom: 30px;
      }
      .post-card {
        background: white;
        border-radius: 12px;
        padding: 20px;
        border: 1px solid #e1e5e9;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      .platform-header {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        padding-bottom: 15px;
        border-bottom: 2px solid #f0f0f0;
      }
      .platform-icon {
        width: 24px;
        height: 24px;
        margin-right: 10px;
      }
      .platform-name {
        font-size: 1.2rem;
        font-weight: 600;
        color: #1a1a2e;
      }
      .form-group {
        margin-bottom: 15px;
      }
      .form-label {
        display: block;
        color: #1a1a2e;
        font-weight: 600;
        margin-bottom: 8px;
        font-size: 0.9rem;
      }
      .form-textarea {
        width: 100%;
        padding: 12px 16px;
        border: 2px solid #e1e5e9;
        border-radius: 8px;
        font-size: 1rem;
        transition: all 0.3s ease;
        box-sizing: border-box;
        min-height: 100px;
        resize: vertical;
        font-family: inherit;
      }
      .form-textarea:focus {
        outline: none;
        border-color: #1F7CFF;
        box-shadow: 0 0 0 3px rgba(31, 124, 255, 0.1);
      }
      .form-input {
        width: 100%;
        padding: 12px 16px;
        border: 2px solid #e1e5e9;
        border-radius: 8px;
        font-size: 1rem;
        transition: all 0.3s ease;
        box-sizing: border-box;
      }
      .form-input:focus {
        outline: none;
        border-color: #1F7CFF;
        box-shadow: 0 0 0 3px rgba(31, 124, 255, 0.1);
      }
      .post-button {
        background: linear-gradient(135deg, #FFC600 0%, #FFB800 100%);
        color: #1a1a2e;
        border: none;
        border-radius: 8px;
        padding: 12px 24px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        width: 100%;
      }
      .post-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(255, 198, 0, 0.4);
      }
      .post-button:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
      }
      .generate-button {
        background: linear-gradient(135deg, #1F7CFF 0%, #1e40af 100%);
        color: white;
        border: none;
        border-radius: 8px;
        padding: 16px 32px;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        margin-top: 20px;
      }
      .generate-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(31, 124, 255, 0.4);
      }
      .message {
        padding: 15px;
        border-radius: 8px;
        margin-bottom: 20px;
        text-align: center;
        font-weight: 500;
      }
      .success-message {
        background: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
      }
      .error-message {
        background: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
      }
      .ai-indicator {
        display: inline-block;
        background: #e3f2fd;
        color: white;
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 0.8rem;
        font-weight: 600;
        margin-left: 10px;
      }

      .loading-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
      }

      .loading-content {
        background: rgba(255, 255, 255, 0.95);
        border-radius: 20px;
        padding: 50px 60px;
        text-align: center;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      }

      .spinner {
        width: 60px;
        height: 60px;
        border: 4px solid #e1e5e9;
        border-top: 4px solid #FFC600;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto 20px;
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      .loading-text {
        color: #1a1a2e;
        font-size: 1.5rem;
        font-weight: 600;
        margin: 0;
      }

      @media (max-width: 768px) {
        .posts-grid {
          grid-template-columns: 1fr;
        }

        .loading-content {
          padding: 40px 50px;
        }

        .loading-text {
          font-size: 1.2rem;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleContentChange = (postId, content) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId ? { ...post, content } : post
      )
    );
  };

  const handleImageChange = (postId, imageUrl) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId ? { ...post, imageUrls: imageUrl ? [imageUrl] : [] } : post
      )
    );
  };

  const handleNotesChange = (postId, notes) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId ? { ...post, notes } : post
      )
    );
  };

  // Blog post handlers
  const handleBlogChange = (field, value) => {
    setBlogPost(prev => ({ ...prev, [field]: value }));
  };

  const handleBlogTagsChange = (tagsString) => {
    // Convert comma-separated string to array
    const tagsArray = tagsString.split(',').map(tag => tag.trim()).filter(Boolean);
    setBlogPost(prev => ({ ...prev, tags: tagsArray }));
  };

  const handleSavePost = async (post) => {
    if (!user) {
      setMessage('Error: You must be logged in to save posts.');
      return;
    }

    if (!post.content.trim()) {
      setMessage('Error: Post content cannot be empty.');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      console.log(`Saving post to ${post.platform}:`, post);

      // Save to Firestore with enhanced data structure
      await addDoc(collection(db, 'users', user.uid, 'posts'), {
        type: 'social',
        platform: post.platform,
        content: post.content,
        imageUrls: post.imageUrls || [],
        notes: post.notes || '',

        // Status tracking
        status: 'published',

        // Timestamps
        createdAt: new Date(),
        updatedAt: new Date(),
        publishedAt: new Date(),

        // Platform tracking (null until API posting implemented)
        platformPostId: null,
        platformUrl: null,

        // User tracking
        createdBy: user.uid,

        // AI metadata
        aiMetadata: post.aiMetadata || {},

        // Scheduling (null for now)
        scheduledDate: null,

        // Optional fields
        campaignTags: []
      });

      setMessage(`✅ Post saved to ${post.platform} successfully!`);

      // Clear the form for this platform
      setPosts(prevPosts =>
        prevPosts.map(p =>
          p.id === post.id ? { ...p, content: '', imageUrls: [], notes: '' } : p
        )
      );

      // Auto-hide success message after 3 seconds
      setTimeout(() => setMessage(''), 3000);

    } catch (error) {
      console.error('Error saving post:', error);
      setMessage(`❌ Failed to save post: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveBlogPost = async () => {
    if (!user) {
      setMessage('Error: You must be logged in to save posts.');
      return;
    }

    if (!blogPost.title.trim() || !blogPost.content.trim()) {
      setMessage('Error: Blog title and content are required.');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      console.log('Saving blog post:', blogPost);

      // Save to Firestore with blog-specific structure
      await addDoc(collection(db, 'users', user.uid, 'posts'), {
        type: 'blog',
        title: blogPost.title,
        content: blogPost.content,
        excerpt: blogPost.excerpt || '',
        slug: blogPost.slug || '',
        tags: blogPost.tags || [],
        featuredImageUrl: blogPost.featuredImageUrl || '',
        notes: blogPost.notes || '',

        // Status tracking - saved as draft until published to blog platform
        status: 'draft',

        // Timestamps
        createdAt: new Date(),
        updatedAt: new Date(),
        publishedAt: null, // null until actually published to blog platform

        // Publishing info (null until published to CMS)
        publishedUrl: null,

        // User tracking
        createdBy: user.uid,

        // AI metadata
        aiMetadata: blogPost.aiMetadata || {},

        // Scheduling
        scheduledDate: null
      });

      setMessage('✅ Blog post saved as draft successfully!');

      // Clear the blog form
      setBlogPost({
        title: '',
        content: '',
        excerpt: '',
        slug: '',
        tags: [],
        featuredImageUrl: '',
        notes: '',
        aiMetadata: {}
      });

      // Auto-hide success message after 3 seconds
      setTimeout(() => setMessage(''), 3000);

    } catch (error) {
      console.error('Error saving blog post:', error);
      setMessage(`❌ Failed to save blog post: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleGeneratePosts = async () => {
    // Check if Firestore is available
    if (!db) {
      setMessage('❌ Firebase is not initialized. Please refresh the page.');
      return;
    }

    if (!user) {
      setMessage('❌ You must be logged in to generate posts.');
      return;
    }

    setLoading(true);
    setMessage('');

    // Start rotating through loading messages
    let messageIndex = 0;
    setLoadingMessage(loadingMessages[0]);

    const messageInterval = setInterval(() => {
      messageIndex = (messageIndex + 1) % loadingMessages.length;
      setLoadingMessage(loadingMessages[messageIndex]);
    }, 2000); // Change message every 2 seconds

    try {
      console.log('Triggering n8n workflow...');

      // Trigger the n8n workflow (will respond immediately)
      const response = await fetch('https://n8n.logicpros.ca/webhook/3f8e4aac-da20-42e1-ad5d-3aa49de2c98a', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          action: 'generate_posts',
          userId: user?.uid,
          timestamp: new Date().toISOString(),
          platforms: posts.map(p => p.platform)
        })
      });

      console.log('Sent userId to n8n:', user?.uid);

      if (!response.ok) {
        throw new Error(`Workflow failed with status: ${response.status}`);
      }

      const data = await response.json();
      console.log('n8n workflow response:', data);

      // Check if workflow is processing asynchronously
      if (data.status === 'processing') {
        console.log('Workflow is processing in background, setting up real-time listener...');

        // Set up real-time listener for newly generated posts
        // This is more efficient than polling - Firebase pushes updates instantly
        const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);

        // Temporarily remove orderBy to test if index is the issue
        // We'll get all docs and sort in memory
        const recentPostsQuery = collection(db, 'users', user.uid, 'generatedPosts');

        console.log('Setting up listener for collection path:', `users/${user.uid}/generatedPosts`);
        console.log('Current time:', new Date().toISOString());
        console.log('Five minutes ago:', fiveMinutesAgo.toISOString());

        // Test: Try to manually fetch documents to see if they exist
        import('firebase/firestore').then(({ getDocs }) => {
          getDocs(recentPostsQuery).then(testSnapshot => {
            console.log('TEST: Manual getDocs() query result:');
            console.log('TEST: Number of docs found:', testSnapshot.size);
            console.log('TEST: Docs:', testSnapshot.docs.map(d => ({ id: d.id, data: d.data() })));
          }).catch(err => {
            console.error('TEST: Error fetching docs:', err);
          });
        });

        // Set up real-time listener
        const unsubscribe = onSnapshot(
          recentPostsQuery,
          (snapshot) => {
            console.log('========== FIREBASE SNAPSHOT UPDATE ==========');
            console.log('Received real-time update from Firestore');
            console.log('Snapshot empty?', snapshot.empty);
            console.log('Number of docs:', snapshot.docs.length);
            console.log('Snapshot metadata:', {
              fromCache: snapshot.metadata.fromCache,
              hasPendingWrites: snapshot.metadata.hasPendingWrites
            });
            console.log('Snapshot size:', snapshot.size);
            console.log('Snapshot docChanges:', snapshot.docChanges().map(change => ({
              type: change.type,
              docId: change.doc.id
            })));

            if (!snapshot.empty) {
              // Sort documents by createdAt in memory to find the most recent
              const sortedDocs = snapshot.docs
                .map(doc => ({ id: doc.id, ...doc.data() }))
                .sort((a, b) => {
                  const aTime = a.createdAt?.toDate ? a.createdAt.toDate() : new Date(a.createdAt);
                  const bTime = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(b.createdAt);
                  return bTime - aTime; // Descending order (newest first)
                });

              console.log('All documents:', sortedDocs);
              const latestPost = sortedDocs[0];
              console.log('Latest post raw data:', latestPost);

              // Check if this post was created after we triggered the workflow
              // createdAt might be a Firestore Timestamp or ISO string from n8n
              const postCreatedAt = latestPost.createdAt?.toDate ? latestPost.createdAt.toDate() : new Date(latestPost.createdAt);
              console.log('Post created at:', postCreatedAt);
              console.log('Five minutes ago:', fiveMinutesAgo);
              console.log('Is post recent?', postCreatedAt > fiveMinutesAgo);

              if (postCreatedAt > fiveMinutesAgo) {
                console.log('Found newly generated posts!', latestPost);

                // Stop listening
                unsubscribe();
                clearInterval(messageInterval);

                // Parse the generated content from Firestore
                // Note: Fields are stored at top level, not nested under 'data'
                const generatedData = latestPost;

                // Update forms with generated content
                if (generatedData) {
                  // Parse social media posts from n8n structure
                  setPosts(prevPosts =>
                    prevPosts.map(post => {
                    let generatedContent = '';
                    let generatedImages = [];
                    let metadata = {};

                    switch (post.platform) {
                      case 'Instagram':
                        if (generatedData.instagram_caption) {
                          generatedContent = generatedData.instagram_caption;
                          if (generatedData.instagram_visual_suggestion) {
                            generatedImages = [generatedData.instagram_visual_suggestion];
                          }
                          metadata = {
                            hashtags: generatedData.instagram_hashtags || [],
                            charCount: generatedData.instagram_char_count || 0
                          };
                        }
                        break;
                      case 'Facebook':
                        if (generatedData.facebook_post) {
                          generatedContent = generatedData.facebook_post;
                          metadata = {
                            charCount: generatedData.facebook_char_count || 0,
                            hasLink: generatedData.facebook_has_link || false
                          };
                        }
                        break;
                      case 'Twitter/X':
                        if (generatedData.twitter_thread && Array.isArray(generatedData.twitter_thread)) {
                          generatedContent = generatedData.twitter_thread.join('\n\n---\n\n');
                          metadata = {
                            tweetCount: generatedData.twitter_tweet_count || generatedData.twitter_thread.length,
                            originalThread: generatedData.twitter_thread
                          };
                        }
                        break;
                      case 'LinkedIn':
                        if (generatedData.linkedin_post) {
                          generatedContent = generatedData.linkedin_post;
                          metadata = {
                            hashtags: generatedData.linkedin_hashtags || []
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

                  // Parse blog post from n8n structure
                  if (generatedData.polished_title && generatedData.polished_post) {
                    setBlogPost(prev => ({
                      ...prev,
                      title: generatedData.polished_title || '',
                      content: generatedData.polished_post || '',
                      excerpt: '', // Not provided by n8n
                      slug: '', // Not provided by n8n
                      aiMetadata: {
                        generatedAt: new Date().toISOString(),
                        source: 'n8n',
                        wordCount: generatedData.polished_word_count || 0
                      }
                    }));
                  }
                }

                setMessage('✅ Posts generated successfully! Review and edit below.');
                setLoading(false);
              }
            }
          },
          (error) => {
            // Error callback for onSnapshot
            console.error('Firebase listener error:', error);
            console.error('Error code:', error.code);
            console.error('Error message:', error.message);
            clearInterval(messageInterval);
            setLoading(false);
            setMessage(`❌ Firebase error: ${error.message}`);
          }
        );

        // Set a timeout to stop listening after 10 minutes
        setTimeout(() => {
          unsubscribe();
          clearInterval(messageInterval);
          setLoading(false);
          setMessage('⏱️ Generation is taking longer than expected. Please check back shortly.');
        }, 600000); // 10 minutes

        // IMPORTANT: Don't execute the finally block when using real-time listener
        // The listener handles loading state itself
        return; // Exit early since we're using real-time listener
      }

      // If workflow returned data immediately (old synchronous pattern)
      console.log('n8n workflow response:', data);

      // Check if n8n returned generated posts in the expected format
      if (data && data.length > 0) {
        const responseData = data[0];

        // Parse social media posts
        if (responseData.social) {
          const socialData = responseData.social;
          console.log('Parsed social data:', socialData);

          // Update the post forms with generated content
          setPosts(prevPosts =>
            prevPosts.map(post => {
              let generatedContent = '';
              let generatedImages = [];
              let metadata = {};

              // Map each platform to the correct data from n8n response
              switch (post.platform) {
                case 'Instagram':
                  if (socialData.instagram) {
                    generatedContent = socialData.instagram.caption || '';
                    if (socialData.instagram.visual) {
                      generatedImages = [socialData.instagram.visual];
                    }
                    metadata = {
                      hashtags: socialData.instagram.hashtags || [],
                      charCount: socialData.instagram.charCount || 0
                    };
                  }
                  break;
                case 'Facebook':
                  if (socialData.facebook) {
                    generatedContent = socialData.facebook.post || '';
                    metadata = {
                      charCount: socialData.facebook.charCount || 0,
                      hasLink: socialData.facebook.hasLink || false
                    };
                  }
                  break;
                case 'Twitter/X':
                  if (socialData.twitter && socialData.twitter.thread) {
                    // Join Twitter thread array into single string with separators
                    generatedContent = socialData.twitter.thread.join('\n\n---\n\n');
                    metadata = {
                      tweetCount: socialData.twitter.tweetCount || socialData.twitter.thread.length,
                      originalThread: socialData.twitter.thread
                    };
                  }
                  break;
                case 'LinkedIn':
                  if (socialData.linkedin) {
                    generatedContent = socialData.linkedin.post || '';
                    metadata = {
                      hashtags: socialData.linkedin.hashtags || []
                    };
                  }
                  break;
              }

              // Update post content and image if generated content exists
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
        }

        // Parse blog post
        if (responseData.polished) {
          console.log('Parsed blog post data:', responseData.polished);

          setBlogPost(prev => ({
            ...prev,
            title: responseData.polished.title || '',
            content: responseData.polished.content || responseData.polished,
            excerpt: responseData.polished.excerpt || '',
            slug: responseData.polished.slug || '',
            aiMetadata: {
              generatedAt: new Date().toISOString(),
              source: 'n8n'
            }
          }));
        }

        setMessage('✅ Posts generated successfully! Review and edit below.');
      } else {
        // If no posts data, just show success
        setMessage('✅ Workflow completed successfully!');
      }

      // Auto-hide success message after 5 seconds
      setTimeout(() => setMessage(''), 5000);

      // Only clear interval and loading for synchronous workflows
      clearInterval(messageInterval);
      setLoading(false);

    } catch (error) {
      // Clear the message interval on error
      clearInterval(messageInterval);
      console.error('Error triggering n8n workflow:', error);
      setMessage(`❌ Failed to trigger workflow: ${error.message}`);
      setLoading(false);
    }
  };

  const getPlatformIcon = (platform) => {
    const icons = {
      'Instagram': '📷',
      'Facebook': '📘',
      'Twitter/X': '🐦',
      'LinkedIn': '💼'
    };
    return icons[platform] || '📱';
  };

  return (
    <div className="dashboard-container">
      {/* Loading Overlay */}
      {loading && (
        <div className="loading-overlay">
          <div className="loading-content">
            <div className="spinner"></div>
            <p className="loading-text">{loadingMessage}</p>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="dashboard-header">
        <Logo />
        <h1 className="dashboard-title">Social Media Poster</h1>
        <p className="dashboard-subtitle">
          Create and manage social media posts for Instagram, Facebook, Twitter/X, and LinkedIn
          <span className="ai-indicator">AI Powered</span>
        </p>
      </header>

      {/* Posts Section */}
      <div className="posts-container">
        <h2 style={{ 
          color: '#1a1a2e', 
          marginBottom: '20px',
          fontSize: '1.5rem',
          fontWeight: '600'
        }}>
          Create Posts
        </h2>

        {message && (
          <div className={`message ${message.includes('success') ? 'success-message' : 'error-message'}`}>
            {message}
          </div>
        )}

        <div className="posts-grid">
          {posts.map(post => (
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
          ))}

          {/* Blog Post Card */}
          <div className="post-card" style={{ gridColumn: 'span 2' }}>
            <div className="platform-header">
              <span className="platform-icon">📝</span>
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
                Excerpt (optional)
              </label>
              <textarea
                className="form-textarea"
                value={blogPost.excerpt}
                onChange={(e) => handleBlogChange('excerpt', e.target.value)}
                placeholder="Short summary for SEO and previews..."
                style={{ minHeight: '80px' }}
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
                style={{ minHeight: '200px' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <div className="form-group">
                <label className="form-label">
                  Slug (optional)
                </label>
                <input
                  type="text"
                  className="form-input"
                  value={blogPost.slug}
                  onChange={(e) => handleBlogChange('slug', e.target.value)}
                  placeholder="url-friendly-slug"
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  className="form-input"
                  value={blogPost.tags.join(', ')}
                  onChange={(e) => handleBlogTagsChange(e.target.value)}
                  placeholder="web design, SEO, marketing"
                />
              </div>
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

            <div className="form-group">
              <label className="form-label">
                Notes (optional)
              </label>
              <textarea
                className="form-textarea"
                value={blogPost.notes}
                onChange={(e) => handleBlogChange('notes', e.target.value)}
                placeholder="Add any notes or reminders about this blog post..."
                style={{ minHeight: '60px' }}
              />
            </div>

            <button
              className="post-button"
              onClick={handleSaveBlogPost}
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Save Blog Post'}
            </button>
          </div>
        </div>

        <button
          className="generate-button"
          onClick={handleGeneratePosts}
          disabled={loading}
          style={{ width: '100%' }}
        >
          {loading ? 'Generating...' : 'Generate All Posts with AI'}
        </button>
      </div>

      {/* Post History Section */}
      {user && (
        <div className="posts-container" style={{ marginTop: '40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{
              color: '#1a1a2e',
              fontSize: '1.5rem',
              fontWeight: '600',
              margin: 0
            }}>
              Post History
            </h2>
            <button
              onClick={() => setShowHistory(!showHistory)}
              style={{
                background: 'linear-gradient(135deg, #1F7CFF 0%, #1e40af 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 20px',
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {showHistory ? 'Hide History' : 'Show History'}
            </button>
          </div>

          {showHistory && (
            <div style={{ marginTop: '20px' }}>
              {postHistory.length === 0 ? (
                <div style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '12px',
                  padding: '40px',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                  <p style={{ color: '#6b7280', fontSize: '1.1rem', margin: 0 }}>
                    No posts yet. Create your first post above!
                  </p>
                </div>
              ) : (
                <div className="posts-grid">
                  {postHistory.map(post => (
                    <div key={post.id} className="post-card">
                      <div className="platform-header">
                        <span className="platform-icon">{getPlatformIcon(post.platform)}</span>
                        <span className="platform-name">{post.platform}</span>
                      </div>

                      <div style={{ marginTop: '15px' }}>
                        <p style={{
                          color: '#1a1a2e',
                          fontSize: '0.95rem',
                          lineHeight: '1.6',
                          whiteSpace: 'pre-wrap',
                          marginBottom: '10px'
                        }}>
                          {post.content}
                        </p>

                        {post.imageUrl && (
                          <img
                            src={post.imageUrl}
                            alt="Post"
                            style={{
                              width: '100%',
                              borderRadius: '8px',
                              marginTop: '10px'
                            }}
                          />
                        )}

                        <div style={{
                          marginTop: '15px',
                          paddingTop: '15px',
                          borderTop: '1px solid #e1e5e9',
                          color: '#6b7280',
                          fontSize: '0.85rem'
                        }}>
                          {post.createdAt ? new Date(post.createdAt.toDate()).toLocaleString() : 'Just now'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      <Footer />
    </div>
  );
};