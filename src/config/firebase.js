import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIzvFQ-FJWwZK7kZdlNXfj2kBiFoJjrYo",
  authDomain: "sted-fy.firebaseapp.com",
  projectId: "sted-fy",
  storageBucket: "sted-fy.appspot.com",
  messagingSenderId: "814197213268",
  appId: "1:814197213268:web:30a69ed0510259848585c1",
  measurementId: "G-1HH6KGM3Y3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Configure Google Auth Provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, githubProvider, analytics }; 