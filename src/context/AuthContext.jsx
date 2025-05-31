import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword, 
  signOut,
  onAuthStateChanged,
  updateProfile as firebaseUpdateProfile 
} from 'firebase/auth';
import { auth, googleProvider, githubProvider } from '../config/firebase';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    // Cleanup subscription
    return unsubscribe;
  }, []);

  const handleAuthError = (error) => {
    console.error('Auth error:', error);
    let errorMessage = 'An error occurred during authentication.';

    switch (error.code) {
      case 'auth/operation-not-allowed':
        errorMessage = 'This authentication method is not enabled. Please contact support.';
        break;
      case 'auth/popup-closed-by-user':
        errorMessage = 'Authentication cancelled. Please try again.';
        break;
      case 'auth/popup-blocked':
        errorMessage = 'Authentication popup was blocked. Please allow popups for this site.';
        break;
      case 'auth/cancelled-popup-request':
        errorMessage = 'Authentication cancelled. Please try again.';
        break;
      case 'auth/account-exists-with-different-credential':
        errorMessage = 'An account already exists with the same email address but different sign-in credentials.';
        break;
      default:
        errorMessage = error.message || 'Authentication failed. Please try again.';
    }

    throw new Error(errorMessage);
  };

  const login = async ({ email, password }) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
      return result.user;
    } catch (error) {
      handleAuthError(error);
    }
  };

  const signup = async ({ email, password, displayName }) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      if (displayName) {
        await firebaseUpdateProfile(result.user, { displayName });
      }
      navigate('/');
      return result.user;
    } catch (error) {
      handleAuthError(error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      handleAuthError(error);
    }
  };

  const updateProfile = async (updates) => {
    try {
      if (auth.currentUser) {
        await firebaseUpdateProfile(auth.currentUser, updates);
        const updatedUser = { ...user, ...updates };
        setUser(updatedUser);
        return updatedUser;
      }
    } catch (error) {
      handleAuthError(error);
    }
  };

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      navigate('/');
      return result.user;
    } catch (error) {
      handleAuthError(error);
    }
  };

  const loginWithGithub = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      navigate('/');
      return result.user;
    } catch (error) {
      handleAuthError(error);
    }
  };

  const value = {
    user,
    login,
    signup,
    logout,
    loginWithGoogle,
    loginWithGithub,
    updateProfile,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}; 