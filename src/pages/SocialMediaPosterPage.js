import React, { useEffect, useState, useCallback } from 'react';
import { colors } from '../styles/colors';
import '../responsive-style.css';
import './SocialMediaPosterPage.css';
import { Logo } from '../components/Logo';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { auth } from '../firebase';
import { db, collection, addDoc, query, orderBy, limit, onSnapshot, doc, deleteDoc, getDoc, setDoc } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { publishPostToWordPress, deleteWordPressPost, fetchWordPressPosts } from '../services/wordpressService';
import BlankDashboardPage from './BlankDashboardPage';

// Helper function to get platform-specific colors - Simple solid colors only
const getPlatformColors = (platform) => {
  const colors = {
    'Instagram': {
      color: '#E4405F'
    },
    'Facebook': {
      color: '#1877F2'
    },
    'Twitter/X': {
      color: '#000000'
    },
    'LinkedIn': {
      color: '#0A66C2'
    },
    'Blog': {
      color: '#6366F1'
    }
  };
  return colors[platform] || colors['Blog'];
};

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
    featuredImageUrl: '',
    aiMetadata: {}
  });

  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [message, setMessage] = useState('');
  const [showHistory, setShowHistory] = useState(false);
  const [postHistory, setPostHistory] = useState([]);
  const [user, setUser] = useState(null);
  const [userConfig, setUserConfig] = useState(null); // null = checking, object = config loaded
  const [isDashboardConfigured, setIsDashboardConfigured] = useState(null); // null = checking, true = configured, false = not configured
  const [wordpressPosts, setWordpressPosts] = useState([]);
  const [wordpressLoading, setWordpressLoading] = useState(false);
  const [linkedinConnected, setLinkedinConnected] = useState(false);
  const [linkedinUserInfo, setLinkedinUserInfo] = useState(null);

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
    const unsubscribeAuth = onAuthStateChanged(auth, async (currentUser) => {
      console.log('🔍 Auth state changed, current user:', currentUser);
      console.log('🔍 User UID:', currentUser?.uid);
      console.log('🔍 User email:', currentUser?.email);
      setUser(currentUser);

      if (currentUser) {
        try {
          console.log('🔍 Checking dashboard configuration for user:', currentUser.email);
          // Check if user has a dashboard configuration in Firestore
          const userDocRef = doc(db, 'users', currentUser.uid);
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            // User document exists - check if dashboard is configured
            const userData = userDocSnap.data();
            console.log('✅ User document found:', userData);
            console.log('🔍 Dashboard configured value:', userData.dashboardConfigured);

            // Handle both boolean true and string "true" for dashboardConfigured
            const isConfigured = userData.dashboardConfigured === true || userData.dashboardConfigured === 'true';
            console.log('📊 Is dashboard configured?', isConfigured);
            setIsDashboardConfigured(isConfigured);
            setUserConfig(userData);

            if (isConfigured) {
              console.log('Dashboard is configured - loading user data');

              // Load post history from Firestore
              const postsQuery = query(
                collection(db, 'users', currentUser.uid, 'posts'),
                orderBy('createdAt', 'desc'),
                limit(50)
              );

              const unsubscribeSnapshot = onSnapshot(postsQuery, (snapshot) => {
                console.log('Firestore snapshot:', snapshot);
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
              console.log('Dashboard not configured - showing blank dashboard');
              setIsDashboardConfigured(false);
            }
          } else {
            // User document doesn't exist - create it with default config
            console.log('User document not found - creating new user profile');

            const newUserData = {
              email: currentUser.email,
              displayName: currentUser.displayName || currentUser.email?.split('@')[0],
              photoURL: currentUser.photoURL || '',
              dashboardConfigured: false, // New users start with unconfigured dashboard
              createdAt: new Date(),
              lastLogin: new Date()
            };

            await setDoc(userDocRef, newUserData);
            console.log('New user profile created');

            setUserConfig(newUserData);
            setIsDashboardConfigured(false);
          }
        } catch (error) {
          console.error('❌ Error loading user configuration:', error);
          console.error('❌ Error code:', error.code);
          console.error('❌ Error message:', error.message);
          setMessage('Error loading dashboard configuration: ' + error.message);
          setIsDashboardConfigured(false);
        }
      } else {
        console.log('No current user found - redirecting to login');
        // Redirect to login if not authenticated
        window.location.href = '/logicpros';
      }
    });

    // Cleanup auth listener on unmount
    return () => unsubscribeAuth();
  }, []);

  // Fetch WordPress posts for Blog Posts Management
  const loadWordPressPosts = async () => {
    if (!user || !isDashboardConfigured) return; // Only load if user is authenticated and dashboard is configured
    
    setWordpressLoading(true);
    try {
      const result = await fetchWordPressPosts({
        perPage: 20,
        status: 'publish'
      });

      console.log('Fetch result:', result);
      console.log('Result success:', result.success);
      console.log('Result posts:', result.posts);

      if (result.success && Array.isArray(result.posts)) {
        // Format posts to match the expected structure
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
          wordpressPostId: post.id // Store WordPress post ID for deletion
        }));

        setWordpressPosts(formattedPosts);
      } else {
        console.error('Failed to load WordPress posts:', result.error || 'Invalid result format');
        console.error('Result structure:', result);
      }
    } catch (error) {
      console.error('Error loading WordPress posts:', error);
    } finally {
      setWordpressLoading(false);
    }
  };

  useEffect(() => {
    if (isDashboardConfigured) {
      loadWordPressPosts();
      loadLinkedInConnection();
    }
  }, [user, isDashboardConfigured]);

  // Load LinkedIn connection status from Firestore
  const loadLinkedInConnection = async () => {
    if (!user) return;

    try {
      const userDocRef = doc(db, 'users', user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        if (userData.linkedinAccessToken && userData.linkedinUserInfo) {
          setLinkedinConnected(true);
          setLinkedinUserInfo(userData.linkedinUserInfo);
        }
      }
    } catch (error) {
      console.error('Error loading LinkedIn connection:', error);
    }
  };

  // Handle LinkedIn connection
  const handleConnectLinkedIn = async () => {
    try {
      setLoading(true);
      setMessage('Connecting to LinkedIn...');

      // Set up message listener BEFORE opening the window
      const messageHandler = async (event) => {
        console.log('Message received:', event.data);
        console.log('Message origin:', event.origin);
        console.log('Expected origin:', window.location.origin);

        // Temporarily accept messages from any origin for debugging
        // TODO: Re-enable origin check after debugging
        // if (event.origin !== window.location.origin) {
        //   console.warn('Received message from unexpected origin:', event.origin);
        //   return;
        // }

        if (event.data.type === 'linkedin-oauth-success') {
          console.log('LinkedIn OAuth success message received');
          console.log('Has access token:', !!event.data.access_token);
          console.log('Has user info:', !!event.data.userInfo);

          // Remove the event listener
          window.removeEventListener('message', messageHandler);

          try {
            // Save tokens to Firestore (only include defined values)
            const userDocRef = doc(db, 'users', user.uid);
            const linkedinData = {
              linkedinAccessToken: event.data.access_token,
              linkedinExpiresAt: Date.now() + (event.data.expires_in * 1000),
              linkedinUserInfo: event.data.userInfo,
              linkedinOrganizations: event.data.organizations || []
            };

            // Only add refresh token if it exists
            if (event.data.refresh_token) {
              linkedinData.linkedinRefreshToken = event.data.refresh_token;
              linkedinData.linkedinRefreshTokenExpiresAt = Date.now() + (event.data.refresh_token_expires_in * 1000);
            }

            await setDoc(userDocRef, linkedinData, { merge: true });

            setLinkedinConnected(true);
            setLinkedinUserInfo(event.data.userInfo);

            // Show success message with organization info
            if (event.data.organizations && event.data.organizations.length > 0) {
              const orgNames = event.data.organizations.map(org => org.name).join(', ');
              setMessage(`LinkedIn connected successfully! Can post to: ${orgNames}`);
            } else {
              setMessage('LinkedIn connected successfully! Will post to personal profile.');
            }
          } catch (err) {
            console.error('Error saving LinkedIn tokens:', err);
            setMessage('Error saving LinkedIn connection: ' + err.message);
          } finally {
            setLoading(false);
          }
        }
      };

      window.addEventListener('message', messageHandler);

      // Call serverless function to get authorization URL
      const response = await fetch('/api/linkedin-auth?action=initiate');
      const data = await response.json();

      if (!response.ok || !data.authUrl) {
        window.removeEventListener('message', messageHandler);
        throw new Error(data.message || 'Failed to generate authorization URL');
      }

      // Open LinkedIn OAuth in new window
      const width = 600;
      const height = 700;
      const left = window.screen.width / 2 - width / 2;
      const top = window.screen.height / 2 - height / 2;

      const authWindow = window.open(
        data.authUrl,
        'LinkedIn Authorization',
        `width=${width},height=${height},left=${left},top=${top}`
      );

      // Set a timeout to clean up if the user closes the window without completing auth
      const timeout = setTimeout(() => {
        window.removeEventListener('message', messageHandler);
        if (authWindow && !authWindow.closed) {
          authWindow.close();
        }
        setLoading(false);
        setMessage('LinkedIn connection timed out or was cancelled.');
      }, 300000); // 5 minutes

      // Clear timeout if we get a message
      const originalHandler = messageHandler;
      const wrappedHandler = async (event) => {
        clearTimeout(timeout);
        await originalHandler(event);
      };
      window.removeEventListener('message', messageHandler);
      window.addEventListener('message', wrappedHandler);

    } catch (error) {
      console.error('Error connecting to LinkedIn:', error);
      setMessage('Error connecting to LinkedIn: ' + error.message);
      setLoading(false);
    }
  };

  // Handle LinkedIn disconnection
  const handleDisconnectLinkedIn = async () => {
    if (!window.confirm('Are you sure you want to disconnect LinkedIn?')) {
      return;
    }

    try {
      setLoading(true);
      setMessage('Disconnecting LinkedIn...');

      // Remove tokens from Firestore
      const userDocRef = doc(db, 'users', user.uid);
      await setDoc(userDocRef, {
        linkedinAccessToken: null,
        linkedinRefreshToken: null,
        linkedinExpiresAt: null,
        linkedinUserInfo: null
      }, { merge: true });

      setLinkedinConnected(false);
      setLinkedinUserInfo(null);
      setMessage('LinkedIn disconnected successfully.');
      setLoading(false);
    } catch (error) {
      console.error('Error disconnecting LinkedIn:', error);
      setMessage('Error disconnecting LinkedIn: ' + error.message);
      setLoading(false);
    }
  };

  // CSS is now imported from SocialMediaPosterPage.css

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

  // Blog post handlers
  const handleBlogChange = useCallback((field, value) => {
    setBlogPost(prev => ({ ...prev, [field]: value }));
  }, []);

  const handleDeleteBlogPost = async (postId) => {
    if (!user) {
      setMessage('Error: You must be logged in to delete posts.');
      return;
    }

    // Find the post to get WordPress post ID
    const postToDelete = postHistory.find(post => post.id === postId);
    
    if (!window.confirm('Are you sure you want to delete this blog post? This will delete it from both the dashboard and WordPress. This action cannot be undone.')) {
      return;
    }

    setLoading(true);
    setMessage('Deleting blog post...');

    try {
      let wordpressDeleteResult = null;
      
      // Delete from WordPress if it has a WordPress post ID
      if (postToDelete?.wordpressPostId) {
        setMessage('Deleting from WordPress...');
        wordpressDeleteResult = await deleteWordPressPost(postToDelete.wordpressPostId);
        
        if (!wordpressDeleteResult.success) {
          throw new Error(`WordPress deletion failed: ${wordpressDeleteResult.error}`);
        }
      }

      // Delete from Firestore
      setMessage('Deleting from dashboard...');
      await deleteDoc(doc(db, 'users', user.uid, 'posts', postId));

      // Update local state to remove the deleted post
      setPostHistory(prev => prev.filter(post => post.id !== postId));

      const successMessage = wordpressDeleteResult
        ? '✅ Blog post deleted successfully from both dashboard and WordPress!'
        : '✅ Blog post deleted successfully from dashboard!';
      
      setMessage(successMessage);
      setTimeout(() => setMessage(''), 3000);

    } catch (error) {
      console.error('Error deleting blog post:', error);
      setMessage(`❌ Failed to delete blog post: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteWordPressPost = async (postId) => {
    if (!user) {
      setMessage('Error: You must be logged in to delete posts.');
      return;
    }

    if (!window.confirm('Are you sure you want to delete this blog post from WordPress? This action cannot be undone.')) {
      return;
    }

    setLoading(true);
    setMessage('Deleting from WordPress...');

    try {
      // Delete from WordPress using the WordPress post ID
      const deleteResult = await deleteWordPressPost(parseInt(postId));
      
      if (!deleteResult.success) {
        throw new Error(deleteResult.error);
      }

      // Update local state to remove the deleted post
      setWordpressPosts(prev => prev.filter(post => post.id !== postId));

      setMessage('✅ Blog post deleted successfully from WordPress!');
      setTimeout(() => setMessage(''), 3000);

    } catch (error) {
      console.error('Error deleting WordPress post:', error);
      setMessage(`❌ Failed to delete post from WordPress: ${error.message}`);
    } finally {
      setLoading(false);
    }
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

      let platformPostId = null;
      let platformUrl = null;
      let postStatus = 'published';

      // If LinkedIn, attempt to post via API
      if (post.platform === 'LinkedIn' && linkedinConnected) {
        try {
          setMessage(`Publishing to LinkedIn...`);

          // Get LinkedIn credentials from Firestore
          const userDocRef = doc(db, 'users', user.uid);
          const userDocSnap = await getDoc(userDocRef);

          if (!userDocSnap.exists() || !userDocSnap.data().linkedinAccessToken) {
            throw new Error('LinkedIn not connected. Please connect your LinkedIn account.');
          }

          const userData = userDocSnap.data();

          // Determine author URN - prefer organization if available
          let authorUrn = `urn:li:person:${userData.linkedinUserInfo.sub}`; // Default to personal

          if (userData.linkedinOrganizations && userData.linkedinOrganizations.length > 0) {
            // Use the first organization (Logic Pros Solutions Inc.)
            const org = userData.linkedinOrganizations[0];
            authorUrn = org.urn;
            console.log(`Posting to organization: ${org.name} (${org.urn})`);
          } else {
            console.log(`Posting to personal profile: ${userData.linkedinUserInfo.name}`);
          }

          // Post to LinkedIn via serverless function as DRAFT
          const linkedinResponse = await fetch('/api/linkedin-post', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              access_token: userData.linkedinAccessToken,
              authorUrn: authorUrn,
              content: post.content,
              visibility: 'PUBLIC',
              isDraft: true  // Save as draft instead of publishing live
            })
          });

          const linkedinData = await linkedinResponse.json();

          if (!linkedinResponse.ok) {
            throw new Error(linkedinData.message || 'Failed to post to LinkedIn');
          }

          platformPostId = linkedinData.postId;
          console.log('LinkedIn post published successfully:', platformPostId);

        } catch (linkedinError) {
          console.error('LinkedIn posting error:', linkedinError);
          postStatus = 'failed';
          setMessage(`⚠️ Saved locally but LinkedIn posting failed: ${linkedinError.message}`);
        }
      }

      // Save to Firestore with enhanced data structure
      await addDoc(collection(db, 'users', user.uid, 'posts'), {
        type: 'social',
        platform: post.platform,
        content: post.content,
        imageUrls: post.imageUrls || [],
        notes: post.notes || '',

        // Status tracking
        status: postStatus,

        // Timestamps
        createdAt: new Date(),
        updatedAt: new Date(),
        publishedAt: new Date(),

        // Platform tracking
        platformPostId: platformPostId,
        platformUrl: platformUrl,

        // User tracking
        createdBy: user.uid,

        // AI metadata
        aiMetadata: post.aiMetadata || {},

        // Scheduling (null for now)
        scheduledDate: null,

        // Optional fields
        campaignTags: []
      });

      if (postStatus !== 'failed') {
        setMessage(`✅ Post ${post.platform === 'LinkedIn' && linkedinConnected ? 'saved as draft on' : 'saved to'} ${post.platform} successfully!`);
      }

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
      setMessage('Error: You must be logged in to publish posts.');
      return;
    }

    if (!blogPost.title.trim() || !blogPost.content.trim()) {
      setMessage('Error: Blog title and content are required.');
      return;
    }

    setLoading(true);
    setMessage('Publishing to WordPress...');

    try {
      console.log('Publishing blog post to WordPress:', blogPost);

      // First, publish to WordPress
      const wordpressResult = await publishPostToWordPress({
        title: blogPost.title,
        content: blogPost.content,
        featuredImageUrl: blogPost.featuredImageUrl,
        status: 'publish'
      });

      if (!wordpressResult.success) {
        throw new Error(wordpressResult.message);
      }

      // Save to Firestore with WordPress publication data
      await addDoc(collection(db, 'users', user.uid, 'posts'), {
        type: 'blog',
        title: blogPost.title,
        content: blogPost.content,
        featuredImageUrl: blogPost.featuredImageUrl || '',

        // Status tracking - published to WordPress
        status: 'published',

        // Timestamps
        createdAt: new Date(),
        updatedAt: new Date(),
        publishedAt: new Date(),

        // WordPress publishing info
        wordpressPostId: wordpressResult.post.id,
        publishedUrl: wordpressResult.post.link,
        wordpressSlug: wordpressResult.post.slug,

        // User tracking
        createdBy: user.uid,

        // AI metadata
        aiMetadata: blogPost.aiMetadata || {},

        // Scheduling
        scheduledDate: null
      });

      setMessage(`✅ Blog post published successfully! View it at: ${wordpressResult.post.link}`);

      // Clear the blog form
      setBlogPost({
        title: '',
        content: '',
        featuredImageUrl: '',
        aiMetadata: {}
      });

      // Refresh WordPress posts list to show the new post
      setTimeout(() => {
        loadWordPressPosts();
      }, 1000);

      // Auto-hide success message after 5 seconds (longer for WordPress posts)
      setTimeout(() => setMessage(''), 5000);

    } catch (error) {
      console.error('Error publishing blog post:', error);
      setMessage(`❌ Failed to publish blog post: ${error.message}`);
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

  const getPlatformIcon = useCallback((platform) => {
    const icons = {
      'Instagram': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="20" rx="5" stroke="#E4405F" strokeWidth="2" fill="none"/>
          <circle cx="12" cy="12" r="4" stroke="#E4405F" strokeWidth="2"/>
          <circle cx="17.5" cy="6.5" r="1.5" fill="#E4405F"/>
        </svg>
      ),
      'Facebook': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="#1877F2"/>
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

  // Show loading state while checking dashboard configuration
  if (isDashboardConfigured === null) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f8f9fa',
        position: 'relative'
      }}>
        <div className="loading-content">
          <div className="spinner"></div>
          <h2 className="loading-text">Loading Dashboard</h2>
          <p style={{
            fontSize: '0.9rem',
            color: '#6b7280',
            marginTop: '10px'
          }}>Checking authentication and configuration...</p>
        </div>
      </div>
    );
  }

  // Show blank dashboard for unconfigured users
  if (isDashboardConfigured === false) {
    return <BlankDashboardPage />;
  }

  // Show full dashboard for configured users
  return (
    <>
      {/* Standard Header - matching the rest of the site */}
      <header className="sticky-header">
        <div className="header-content">
          <div className="logo">
            <Logo />
          </div>
          <Navigation />
        </div>
      </header>

      <div className="dashboard-container">
        {/* Header Section */}
        <div className="dashboard-header">
          <div className="dashboard-title">
            <h1>Social Media Dashboard</h1>
            <p>Create and manage social media posts for Instagram, Facebook, Twitter/X, and LinkedIn <span className="ai-indicator">AI Powered</span></p>
          </div>
        </div>

        {/* LinkedIn Connection Status */}
        <div style={{
          background: linkedinConnected ? '#d1fae5' : '#fef3c7',
          border: `1px solid ${linkedinConnected ? '#10b981' : '#f59e0b'}`,
          borderRadius: '8px',
          padding: '16px',
          margin: '20px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
            </svg>
            <div>
              <div style={{ fontWeight: '600', color: '#1a1a2e' }}>
                {linkedinConnected ? 'LinkedIn Connected' : 'LinkedIn Not Connected'}
              </div>
              {linkedinConnected && linkedinUserInfo && (
                <div style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '4px' }}>
                  Connected as {linkedinUserInfo.name}
                </div>
              )}
              {!linkedinConnected && (
                <div style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '4px' }}>
                  Connect your LinkedIn account to publish posts automatically
                </div>
              )}
            </div>
          </div>
          <button
            onClick={linkedinConnected ? handleDisconnectLinkedIn : handleConnectLinkedIn}
            disabled={loading}
            style={{
              background: linkedinConnected ? '#ef4444' : '#0A66C2',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              padding: '10px 20px',
              fontWeight: '600',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1,
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
              }
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            {linkedinConnected ? 'Disconnect LinkedIn' : 'Connect LinkedIn'}
          </button>
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
        {/* Generate All Posts with AI Button - Moved to Top */}
        <button
          className="generate-button full-width-button"
          onClick={handleGeneratePosts}
          disabled={loading}
        >
          {loading ? (
            <>
              <div className="spinner small-spinner" style={{
                borderTop: '3px solid transparent',
                borderTopColor: 'white'
              }}></div>
              Generating...
            </>
          ) : (
            <>
              🚀 Generate All Posts with AI
            </>
          )}
        </button>

        <h2 className="section-title" style={{
          color: '#1a1a2e',
          fontSize: '2rem',
          fontWeight: '700',
          marginBottom: '30px',
          textAlign: 'center',
          position: 'relative'
        }}>
          Create Posts
        </h2>

        {message && (
          <div className={`message ${message.includes('success') ? 'success-message' : 'error-message'}`}>
            {message}
          </div>
        )}

        <div className="posts-grid">
          {/* Blog Post Create Card */}
          <div className="post-card">
            <div className="platform-header">
              <span className="platform-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20M16 13H8M16 17H8M10 9H8" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="platform-name">Create Blog Post</span>
            </div>

            <div className="form-group">
              <label className="form-label">Title *</label>
              <input
                type="text"
                className="form-input"
                value={blogPost.title}
                onChange={(e) => handleBlogChange('title', e.target.value)}
                placeholder="Enter blog post title..."
              />
            </div>

            <div className="form-group">
              <label className="form-label">Content *</label>
              <textarea
                className="form-textarea"
                value={blogPost.content}
                onChange={(e) => handleBlogChange('content', e.target.value)}
                placeholder="Enter your blog post content here..."
                style={{ minHeight: '300px' }}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Featured Image URL (optional)</label>
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

          {/* Blog Posts Management Card */}
          <div className="post-card">
            <div className="platform-header">
              <span className="platform-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20M16 13H8M16 17H8M10 9H8" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="platform-name">Blog Posts</span>
              <span className="ai-indicator" style={{ marginLeft: 'auto' }}>Live</span>
            </div>

            <button
              className="post-button"
              onClick={loadWordPressPosts}
              disabled={wordpressLoading}
              style={{ marginBottom: '16px' }}
            >
              {wordpressLoading ? 'Refreshing...' : '🔄 Refresh Posts'}
            </button>

            <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
              {wordpressLoading ? (
                <div style={{ textAlign: 'center', padding: '40px' }}>
                  <div className="spinner"></div>
                  <p>Loading blog posts...</p>
                </div>
              ) : wordpressPosts.length === 0 ? (
                <div className="empty-history">
                  <p>
                    No blog posts found. Create your first blog post!
                  </p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {wordpressPosts.map(post => {
                    // Construct the logicpros.ca blog URL using the slug
                    const blogUrl = `https://logicpros.ca/blog/${post.slug}`;

                    return (
                      <div key={post.id} style={{
                        border: '1px solid #e5e7eb',
                        borderRadius: '6px',
                        padding: '16px',
                        backgroundColor: '#f9fafb'
                      }}>
                        <div style={{
                          fontWeight: '600',
                          fontSize: '1rem',
                          color: '#1a1a1a',
                          marginBottom: '8px'
                        }}>
                          {post.title || 'Untitled Blog Post'}
                        </div>

                        <div
                          dangerouslySetInnerHTML={{ __html: post.excerpt || post.content.substring(0, 150) + '...' }}
                          style={{
                            fontSize: '0.875rem',
                            lineHeight: '1.5',
                            color: '#6b7280',
                            marginBottom: '12px'
                          }}
                        />

                        <div style={{
                          fontSize: '0.75rem',
                          color: '#9ca3af',
                          marginBottom: '12px'
                        }}>
                          {post.createdAt ? new Date(post.createdAt).toLocaleString() : 'Just now'}
                          {post.author && ` • ${post.author}`}
                        </div>

                        <div style={{ display: 'flex', gap: '8px' }}>
                          <a
                            href={blogUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              flex: 1,
                              textAlign: 'center',
                              padding: '8px 12px',
                              backgroundColor: '#3b82f6',
                              color: 'white',
                              borderRadius: '6px',
                              textDecoration: 'none',
                              fontSize: '0.875rem',
                              fontWeight: '500'
                            }}
                          >
                            View
                          </a>
                          <button
                            onClick={() => handleDeleteWordPressPost(post.id)}
                            disabled={loading}
                            style={{
                              flex: 1,
                              padding: '8px 12px',
                              backgroundColor: '#ef4444',
                              color: 'white',
                              border: 'none',
                              borderRadius: '6px',
                              cursor: 'pointer',
                              fontSize: '0.875rem',
                              fontWeight: '500'
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Social Media Posts */}
          {posts.map(post => {
            return (
              <div key={post.id} className="post-card">
                <div className="platform-header">
                  <span className="platform-icon">{getPlatformIcon(post.platform)}</span>
                  <span className="platform-name">{post.platform}</span>
                </div>

                <div className="form-group">
                  <label className="form-label">Content</label>
                  <textarea
                    className="form-textarea"
                    value={post.content}
                    onChange={(e) => handleContentChange(post.id, e.target.value)}
                    placeholder={`Enter your ${post.platform} post content here...`}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Image URL (optional)</label>
                  <input
                    type="url"
                    className="form-input"
                    value={post.imageUrls[0] || ''}
                    onChange={(e) => handleImageChange(post.id, e.target.value)}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Notes (optional)</label>
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
            );
          })}
        </div>

      </div>

      {/* Post History Section */}
      {user && (
        <div className="posts-container history-container">
          <div className="history-header">
            <h2 className="history-header">
              Post History
            </h2>
            <button
              className="history-toggle-button"
              onClick={() => setShowHistory(!showHistory)}
            >
              {showHistory ? 'Hide History' : 'Show History'}
            </button>
          </div>

          {showHistory && (
            <div className="history-content">
              {postHistory.length === 0 ? (
                <div className="empty-history">
                  <p>
                    No posts yet. Create your first post above!
                  </p>
                </div>
              ) : (
                <div className="posts-grid">
                  {postHistory.map(post => (
                    <div key={post.id} className="post-card">
                      <div className="platform-header">
                        <span className="platform-icon">{getPlatformIcon(post.platform || 'Blog')}</span>
                        <span className="platform-name">{post.platform || 'Blog'}</span>
                      </div>

                      <div className="history-post-content">
                        <p>
                          {post.content}
                        </p>

                        {/* Display featured image for blog posts */}
                        {post.featuredImageUrl && (
                          <img
                            src={post.featuredImageUrl}
                            alt="Post"
                            className="history-post-image"
                          />
                        )}

                        {/* Display images for social media posts */}
                        {post.imageUrls && post.imageUrls.length > 0 && (
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
                            {post.imageUrls.map((imageUrl, index) => (
                              <img
                                key={index}
                                src={imageUrl}
                                alt={`Post image ${index + 1}`}
                                className="history-post-image"
                                style={{ maxWidth: '100%' }}
                              />
                            ))}
                          </div>
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
              )}
            </div>
          )}
        </div>
      )}

      <Footer />
      </div>
    </>
  );
};