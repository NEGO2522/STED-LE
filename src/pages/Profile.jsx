import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import {
  UserCircleIcon,
  CameraIcon,
  AcademicCapIcon,
  BookOpenIcon,
  ClockIcon,
  StarIcon,
  ChartBarIcon,
  CogIcon,
  BellIcon
} from '@heroicons/react/24/solid';

const GRADIENT_PRESETS = [
  { id: 'default', name: 'Default Blue', class: 'from-blue-600 to-indigo-600' },
  { id: 'sunset', name: 'Sunset', class: 'from-orange-500 to-pink-500' },
  { id: 'ocean', name: 'Ocean', class: 'from-cyan-500 to-blue-500' },
  { id: 'forest', name: 'Forest', class: 'from-green-500 to-emerald-500' },
  { id: 'purple', name: 'Purple', class: 'from-purple-500 to-indigo-500' },
  { id: 'midnight', name: 'Midnight', class: 'from-blue-900 to-indigo-900' },
];

const Profile = () => {
  const { user, updateProfile, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [selectedGradient, setSelectedGradient] = useState(user?.headerStyle?.gradient || 'default');
  const [isEditingHeader, setIsEditingHeader] = useState(false);
  const fileInputRef = useRef(null);
  const coverPhotoRef = useRef(null);
  const [imageError, setImageError] = useState(false);

  // User profile data states
  const [profileData, setProfileData] = useState({
    displayName: user?.displayName || '',
    email: user?.email || '',
    college: user?.college || '',
    branch: user?.branch || '',
    year: user?.year || '',
    rollNumber: user?.rollNumber || '',
    bio: user?.bio || '',
    skills: user?.skills || [],
    achievements: user?.achievements || [],
    studyGoals: user?.studyGoals || [],
    preferences: user?.preferences || {
      emailNotifications: true,
      studyReminders: true,
      showProgress: true
    }
  });

  // --- Study Goals Edit State ---
  const [isEditingGoals, setIsEditingGoals] = useState(false);
  const [goalsInput, setGoalsInput] = useState(profileData.studyGoals.join('\n'));

  const [studyStats] = useState({
    hoursStudied: 120,
    flashcardsReviewed: 450,
    quizzesTaken: 28,
    averageScore: 85
  });

  const [recentActivity] = useState([
    { type: 'quiz', title: 'Physics Mechanics Quiz', score: 90, date: '2024-03-15' },
    { type: 'flashcard', title: 'Chemistry Formulas', cards: 30, date: '2024-03-14' },
    { type: 'study', title: 'Mathematics Chapter 4', duration: 2, date: '2024-03-13' }
  ]);

  // Form state for editing
  const [editForm, setEditForm] = useState({
    displayName: user?.displayName || '',
    email: user?.email || '',
    college: user?.college || '',
    branch: user?.branch || '',
    year: user?.year || '',
    rollNumber: user?.rollNumber || '',
    bio: user?.bio || '',
    skills: user?.skills || []
  });

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageError(false);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const imageUrl = URL.createObjectURL(file);
        setImageError(false);
        await updateProfile({ 
          ...profileData,
          photoURL: imageUrl 
        });
      } catch (error) {
        console.error('Error uploading image:', error);
        setImageError(true);
      }
    }
  };

  const handleCoverPhotoUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        // In a real app, you would upload this to a storage service
        const coverPhotoUrl = URL.createObjectURL(file);
        await updateProfile({
          headerStyle: {
            ...user?.headerStyle,
            coverPhoto: coverPhotoUrl,
            gradient: null // Remove gradient when using cover photo
          }
        });
        setIsEditingHeader(false);
      } catch (error) {
        console.error('Error uploading cover photo:', error);
      }
    }
  };

  const handleGradientSelect = async (gradientId) => {
    try {
      await updateProfile({
        headerStyle: {
          gradient: gradientId,
          coverPhoto: null // Remove cover photo when using gradient
        }
      });
      setSelectedGradient(gradientId);
      setIsEditingHeader(false);
    } catch (error) {
      console.error('Error updating header style:', error);
    }
  };

  const handleEditClick = () => {
    setEditForm({
      displayName: profileData.displayName || '',
      email: profileData.email || '',
      college: profileData.college || '',
      branch: profileData.branch || '',
      year: profileData.year || '',
      rollNumber: profileData.rollNumber || '',
      bio: profileData.bio || '',
      skills: profileData.skills || []
    });
    setIsEditing(true);
  };

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    try {
      await updateProfile({
        ...profileData,
        ...editForm
      });
      setProfileData(prev => ({
        ...prev,
        ...editForm
      }));
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  // --- Study Goals Save Handler ---
  const handleSaveGoals = async () => {
    const newGoals = goalsInput
      .split('\n')
      .map(g => g.trim())
      .filter(g => g.length > 0);
    try {
      await updateProfile({
        ...profileData,
        studyGoals: newGoals,
      });
      setProfileData(prev => ({
        ...prev,
        studyGoals: newGoals,
      }));
      setIsEditingGoals(false);
    } catch (error) {
      console.error('Error updating study goals:', error);
    }
  };

  const renderOverviewTab = () => (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Hours Studied</p>
              <p className="text-2xl font-semibold">{studyStats.hoursStudied}</p>
            </div>
            <ClockIcon className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Flashcards</p>
              <p className="text-2xl font-semibold">{studyStats.flashcardsReviewed}</p>
            </div>
            <BookOpenIcon className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Quizzes Taken</p>
              <p className="text-2xl font-semibold">{studyStats.quizzesTaken}</p>
            </div>
            <AcademicCapIcon className="h-8 w-8 text-purple-500" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Avg. Score</p>
              <p className="text-2xl font-semibold">{studyStats.averageScore}%</p>
            </div>
            <ChartBarIcon className="h-8 w-8 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center justify-between border-b pb-4 last:border-0">
              <div className="flex items-center space-x-3">
                {activity.type === 'quiz' && <AcademicCapIcon className="h-6 w-6 text-purple-500" />}
                {activity.type === 'flashcard' && <BookOpenIcon className="h-6 w-6 text-green-500" />}
                {activity.type === 'study' && <ClockIcon className="h-6 w-6 text-blue-500" />}
                <div>
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-sm text-gray-500">
                    {activity.score ? `Score: ${activity.score}%` : 
                     activity.cards ? `${activity.cards} cards reviewed` :
                     `${activity.duration} hours studied`}
                  </p>
                </div>
              </div>
              <span className="text-sm text-gray-500">{new Date(activity.date).toLocaleDateString()}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Study Goals */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Study Goals</h3>
          {!isEditingGoals && (
            <button
              onClick={() => {
                setGoalsInput(profileData.studyGoals.join('\n'));
                setIsEditingGoals(true);
              }}
              className="text-sm text-blue-600 hover:text-blue-700"
            >
              Edit Goals
            </button>
          )}
        </div>
        <div className="space-y-3">
          {isEditingGoals ? (
            <div>
              <textarea
                className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                value={goalsInput}
                onChange={e => setGoalsInput(e.target.value)}
                placeholder="Enter each goal on a new line"
              />
              <div className="flex space-x-2">
                <button
                  onClick={handleSaveGoals}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditingGoals(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              {profileData.studyGoals.map((goal, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <StarIcon className="h-5 w-5 text-yellow-500" />
                  <span>{goal}</span>
                </div>
              ))}
              {profileData.studyGoals.length === 0 && (
                <p className="text-gray-500">No study goals set. Click edit to add your goals.</p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );

  const renderProfileContent = () => {
    if (isEditing) {
      return (
        <form onSubmit={handleSaveProfile} className="space-y-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
            <div className="flex space-x-3">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={editForm.displayName}
                onChange={(e) => setEditForm({ ...editForm, displayName: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={editForm.email}
                disabled
                className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-50 text-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                College/University
              </label>
              <input
                type="text"
                value={editForm.college}
                onChange={(e) => setEditForm({ ...editForm, college: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your college name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Branch
              </label>
              <input
                type="text"
                value={editForm.branch}
                onChange={(e) => setEditForm({ ...editForm, branch: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your branch"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Year
              </label>
              <select
                value={editForm.year}
                onChange={(e) => setEditForm({ ...editForm, year: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Year</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Roll Number
              </label>
              <input
                type="text"
                value={editForm.rollNumber}
                onChange={(e) => setEditForm({ ...editForm, rollNumber: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your roll number"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bio
            </label>
            <textarea
              value={editForm.bio}
              onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tell us about yourself..."
            />
          </div>
        </form>
      );
    }

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
          <button
            onClick={handleEditClick}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Edit Profile
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="font-medium">{profileData.displayName || 'Not set'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium">{profileData.email}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">College/University</p>
            <p className="font-medium">{profileData.college || 'Not set'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Branch</p>
            <p className="font-medium">{profileData.branch || 'Not set'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Year</p>
            <p className="font-medium">{profileData.year ? `${profileData.year}${getYearSuffix(profileData.year)} Year` : 'Not set'}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Roll Number</p>
            <p className="font-medium">{profileData.rollNumber || 'Not set'}</p>
          </div>
        </div>

        <div className="border-t pt-6">
          <h4 className="font-medium mb-2">Bio</h4>
          <p className="text-gray-600">{profileData.bio || 'No bio added yet.'}</p>
        </div>
      </div>
    );
  };

  // Helper function for year suffix
  const getYearSuffix = (year) => {
    const yearNum = parseInt(year);
    if (yearNum === 1) return 'st';
    if (yearNum === 2) return 'nd';
    if (yearNum === 3) return 'rd';
    return 'th';
  };

  const renderSettingsTab = () => (
    <div className="space-y-6 bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Settings</h3>
        <button
          onClick={() => handleProfileUpdate(profileData)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Save Changes
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium">Email Notifications</h4>
            <p className="text-sm text-gray-500">Receive updates about your progress</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={profileData.preferences.emailNotifications}
              onChange={(e) => setProfileData({
                ...profileData,
                preferences: {
                  ...profileData.preferences,
                  emailNotifications: e.target.checked
                }
              })}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium">Study Reminders</h4>
            <p className="text-sm text-gray-500">Get reminded about your study schedule</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={profileData.preferences.studyReminders}
              onChange={(e) => setProfileData({
                ...profileData,
                preferences: {
                  ...profileData.preferences,
                  studyReminders: e.target.checked
                }
              })}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium">Show Progress</h4>
            <p className="text-sm text-gray-500">Display your progress on your profile</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={profileData.preferences.showProgress}
              onChange={(e) => setProfileData({
                ...profileData,
                preferences: {
                  ...profileData.preferences,
                  showProgress: e.target.checked
                }
              })}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>

      <div className="border-t pt-6">
        <h4 className="font-medium mb-4">Account Actions</h4>
        <div className="space-y-3">
          <button
            onClick={logout}
            className="w-full px-4 py-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-50"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Profile Header */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="relative h-32 bg-white border-b">
            <div className="absolute -bottom-12 left-8 flex items-end space-x-4">
              <div className="relative group">
                {/* Profile Picture Container */}
                <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                  {user?.photoURL && !imageError ? (
                    <img
                      src={user.photoURL}
                      alt="Profile"
                      className="w-full h-full object-cover"
                      onError={handleImageError}
                      onLoad={handleImageLoad}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-center p-2">
                      <div className="w-full aspect-square bg-gray-200 flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-600">Profile</span>
                      </div>
                    </div>
                  )}
                  {/* Hover Overlay */}
                  <div 
                    className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <span className="text-sm font-medium text-white">Click to</span>
                    <span className="text-sm font-medium text-white">update profile</span>
                    <span className="text-sm font-medium text-white">picture</span>
                  </div>
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />
              </div>
              <div className="mb-3">
                <h1 className="text-2xl font-bold text-gray-900">
                  {profileData.displayName || 'Your Name'}
                </h1>
                <p className="text-gray-600">{profileData.college || 'Your College'}</p>
              </div>
            </div>
          </div>
          
          <div className="pt-16 px-8 pb-4">
            <nav className="flex space-x-6">
              <button
                onClick={() => setActiveTab('overview')}
                className={`pb-4 ${activeTab === 'overview' 
                  ? 'text-blue-600 border-b-2 border-blue-600 font-medium' 
                  : 'text-gray-500 hover:text-gray-700'}`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`pb-4 ${activeTab === 'profile' 
                  ? 'text-blue-600 border-b-2 border-blue-600 font-medium' 
                  : 'text-gray-500 hover:text-gray-700'}`}
              >
                Profile
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`pb-4 ${activeTab === 'settings' 
                  ? 'text-blue-600 border-b-2 border-blue-600 font-medium' 
                  : 'text-gray-500 hover:text-gray-700'}`}
              >
                Settings
              </button>
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-8">
          {activeTab === 'overview' && renderOverviewTab()}
          {activeTab === 'profile' && renderProfileContent()}
          {activeTab === 'settings' && renderSettingsTab()}
        </div>
      </div>
    </div>
  );
};

export default Profile;