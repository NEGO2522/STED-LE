import React, { useState, useEffect } from 'react';
import { db, auth } from '../config/firebase';
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  updateDoc,
  doc,
  arrayUnion,
  arrayRemove,
  deleteDoc,
  where
} from 'firebase/firestore';
import {
  ChatBubbleLeftIcon,
  HeartIcon,
  PaperAirplaneIcon,
  UserCircleIcon,
  CodeBracketIcon,
  CloudIcon,
  CommandLineIcon,
  CpuChipIcon,
  GlobeAltIcon,
  BeakerIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import moment from 'moment';

const CATEGORIES = {
  webdev: {
    name: 'Web Development',
    icon: <GlobeAltIcon className="h-6 w-6" />,
    description: 'Frontend, Backend, Full Stack Development',
    color: 'blue'
  },
  mobile: {
    name: 'Mobile Development',
    icon: <CommandLineIcon className="h-6 w-6" />,
    description: 'iOS, Android, Cross-platform',
    color: 'green'
  },
  ai: {
    name: 'AI & Machine Learning',
    icon: <CpuChipIcon className="h-6 w-6" />,
    description: 'AI, ML, Deep Learning',
    color: 'purple'
  },
  data: {
    name: 'Data Science',
    icon: <BeakerIcon className="h-6 w-6" />,
    description: 'Data Analysis, Visualization, Big Data',
    color: 'yellow'
  },
  cloud: {
    name: 'Cloud Computing',
    icon: <CloudIcon className="h-6 w-6" />,
    description: 'AWS, Azure, GCP, DevOps',
    color: 'indigo'
  },
  security: {
    name: 'Cybersecurity',
    icon: <ShieldCheckIcon className="h-6 w-6" />,
    description: 'Security, Ethical Hacking, Network Security',
    color: 'red'
  },
  programming: {
    name: 'Programming Languages',
    icon: <CodeBracketIcon className="h-6 w-6" />,
    description: 'Python, Java, JavaScript, C++',
    color: 'emerald'
  },
  blockchain: {
    name: 'Blockchain',
    icon: <RocketLaunchIcon className="h-6 w-6" />,
    description: 'Blockchain, Crypto, Web3',
    color: 'orange'
  }
};

const Community = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [comments, setComments] = useState({});
  const [newComments, setNewComments] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch posts in real-time with category filter
  useEffect(() => {
    let q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
    
    if (selectedCategory !== 'all') {
      q = query(
        collection(db, 'posts'),
        where('category', '==', selectedCategory),
        orderBy('timestamp', 'desc')
      );
    }

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPosts(postsData);
    });

    return () => unsubscribe();
  }, [selectedCategory]);

  // Fetch comments in real-time
  useEffect(() => {
    const unsubscribes = posts.map(post => {
      const q = query(collection(db, `posts/${post.id}/comments`), orderBy('timestamp', 'desc'));
      return onSnapshot(q, (snapshot) => {
        const commentsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setComments(prev => ({
          ...prev,
          [post.id]: commentsData
        }));
      });
    });

    return () => unsubscribes.forEach(unsubscribe => unsubscribe());
  }, [posts]);

  const handlePost = async (e) => {
    e.preventDefault();
    
    if (!newPost.trim()) {
      setError('Please write something to post');
      return;
    }
    
    if (!selectedCategory || selectedCategory === 'all') {
      setError('Please select a category for your post');
      return;
    }

    if (!auth.currentUser) {
      setError('You must be logged in to post');
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const postData = {
        text: newPost.trim(),
        category: selectedCategory,
        userId: auth.currentUser.uid,
        username: auth.currentUser.displayName || 'Anonymous',
        userPhoto: auth.currentUser.photoURL,
        timestamp: serverTimestamp(),
        likes: [],
      };

      const docRef = await addDoc(collection(db, 'posts'), postData);
      
      if (!docRef || !docRef.id) {
        throw new Error('Failed to create post');
      }

      // Reset form only after successful post
      setNewPost('');
      setSelectedCategory('all');
      setError(null);
    } catch (error) {
      console.error('Post error:', error);
      setError(error.message || 'Error creating post. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleComment = async (postId) => {
    if (!newComments[postId]?.trim()) return;

    try {
      await addDoc(collection(db, `posts/${postId}/comments`), {
        text: newComments[postId],
        userId: auth.currentUser.uid,
        username: auth.currentUser.displayName || 'Anonymous',
        userPhoto: auth.currentUser.photoURL,
        timestamp: serverTimestamp(),
      });

      setNewComments(prev => ({
        ...prev,
        [postId]: ''
      }));
    } catch (error) {
      console.error('Error commenting:', error);
    }
  };

  const toggleLike = async (postId, likes) => {
    const userId = auth.currentUser.uid;
    const postRef = doc(db, 'posts', postId);
    
    try {
      if (likes.includes(userId)) {
        await updateDoc(postRef, {
          likes: arrayRemove(userId)
        });
      } else {
        await updateDoc(postRef, {
          likes: arrayUnion(userId)
        });
      }
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  const deletePost = async (postId) => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;

    try {
      await deleteDoc(doc(db, 'posts', postId));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  // Filter posts based on search query
  const filteredPosts = posts.filter(post => 
    post.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getCategoryColor = (category) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-800',
      green: 'bg-green-100 text-green-800',
      purple: 'bg-purple-100 text-purple-800',
      yellow: 'bg-yellow-100 text-yellow-800',
      indigo: 'bg-indigo-100 text-indigo-800',
      red: 'bg-red-100 text-red-800',
      emerald: 'bg-emerald-100 text-emerald-800',
      orange: 'bg-orange-100 text-orange-800',
    };
    return colors[CATEGORIES[category]?.color] || 'bg-gray-100 text-gray-800';
  };

  const renderPostButton = () => {
    const isDisabled = !newPost.trim() || !selectedCategory || selectedCategory === 'all' || loading;
    
    return (
      <button
        type="submit"
        disabled={isDisabled}
        className={`w-full px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-all duration-200 ${
          isDisabled
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-primary-600 text-white hover:bg-primary-700'
        }`}
      >
        {loading ? (
          <>
            <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Posting...</span>
          </>
        ) : (
          <>
            <PaperAirplaneIcon className="h-5 w-5" />
            <span>Post</span>
          </>
        )}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Tech Communities</h1>
          <p className="mt-2 text-gray-600">Connect, Share, and Learn with Fellow Developers</p>
        </div>

        {/* Category Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              All Posts
            </button>
            {Object.entries(CATEGORIES).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === key
                    ? `bg-${category.color}-600 text-white`
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Create Post */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-8">
              <h2 className="text-xl font-semibold mb-4">Create a Post</h2>
              <form onSubmit={handlePost} className="space-y-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">Select Category</option>
                  {Object.entries(CATEGORIES).map(([key, category]) => (
                    <option key={key} value={key}>
                      {category.name}
                    </option>
                  ))}
                </select>

                <textarea
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  placeholder="Share your knowledge, ask questions, or start a discussion..."
                  className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  rows="4"
                />

                {renderPostButton()}
              </form>
              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="text-red-700">{error}</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Main Content - Posts Feed */}
          <div className="lg:col-span-2">
            {/* Search Bar */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Posts */}
            <div className="space-y-6">
              {filteredPosts.map(post => (
                <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                  {/* Post Header */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {post.userPhoto ? (
                          <img src={post.userPhoto} alt={post.username} className="h-10 w-10 rounded-full" />
                        ) : (
                          <UserCircleIcon className="h-10 w-10 text-gray-400" />
                        )}
                        <div>
                          <h3 className="font-medium text-gray-900">{post.username}</h3>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-500">
                              {post.timestamp ? moment(post.timestamp.toDate()).fromNow() : 'Just now'}
                            </span>
                            <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(post.category)}`}>
                              {CATEGORIES[post.category]?.name}
                            </span>
                          </div>
                        </div>
                      </div>
                      {post.userId === auth.currentUser?.uid && (
                        <button
                          onClick={() => deletePost(post.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <TrashIcon className="h-5 w-5" />
                        </button>
                      )}
                    </div>

                    {/* Post Content */}
                    <p className="text-gray-800 mb-4 whitespace-pre-wrap">{post.text}</p>

                    {/* Post Actions */}
                    <div className="flex items-center space-x-4 mt-4">
                      <button
                        onClick={() => toggleLike(post.id, post.likes)}
                        className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors"
                      >
                        {post.likes?.includes(auth.currentUser?.uid) ? (
                          <HeartIconSolid className="h-5 w-5 text-red-500" />
                        ) : (
                          <HeartIcon className="h-5 w-5" />
                        )}
                        <span>{post.likes?.length || 0}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500">
                        <ChatBubbleLeftIcon className="h-5 w-5" />
                        <span>{comments[post.id]?.length || 0}</span>
                      </button>
                    </div>
                  </div>

                  {/* Comments Section */}
                  <div className="bg-gray-50 p-6 border-t">
                    <div className="space-y-4 mb-4">
                      {comments[post.id]?.map(comment => (
                        <div key={comment.id} className="flex items-start space-x-3">
                          {comment.userPhoto ? (
                            <img src={comment.userPhoto} alt={comment.username} className="h-8 w-8 rounded-full" />
                          ) : (
                            <UserCircleIcon className="h-8 w-8 text-gray-400" />
                          )}
                          <div className="flex-1">
                            <div className="bg-white rounded-lg p-3 shadow-sm">
                              <h4 className="font-medium text-gray-900">{comment.username}</h4>
                              <p className="text-gray-800">{comment.text}</p>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                              {comment.timestamp ? moment(comment.timestamp.toDate()).fromNow() : 'Just now'}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Add Comment */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={newComments[post.id] || ''}
                        onChange={(e) => setNewComments(prev => ({
                          ...prev,
                          [post.id]: e.target.value
                        }))}
                        placeholder="Write a comment..."
                        className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <button
                        onClick={() => handleComment(post.id)}
                        disabled={!newComments[post.id]?.trim()}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <PaperAirplaneIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community; 