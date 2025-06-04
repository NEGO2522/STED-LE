import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { DarkModeProvider } from './context/DarkModeContext';
import { Toaster } from 'react-hot-toast';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import About from './pages/About'
import Contact from './pages/Contact'
import TermsConditions from './pages/TermsConditions'
import Calculator from './pages/Calculator'
import Flashcard from './pages/Flashcard'
import Tips from './pages/Tips'
import Subjects from './pages/Subjects'
import Exams from './pages/Exams'
import Articles from './pages/Articles'
import Community from './pages/Community'
import Syllabus from './pages/Syllabus'
import { FileUpload } from './components/common/FileUpload';

// Wrapper component to handle conditional footer rendering
const AppContent = () => {
  const location = useLocation();
  const isAuthPage = ['/login', '/signup'].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Navbar />
      <main className="flex-grow pt-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/tips" element={<Tips />} />

          {/* Auth Routes - These won't be directly accessible from navigation */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes - Require Authentication */}
          <Route
            path="/calculator"
            element={
              <ProtectedRoute>
                <Calculator />
              </ProtectedRoute>
            }
          />
          <Route
            path="/flashcards"
            element={
              <ProtectedRoute>
                <Flashcard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/subjects"
            element={
              <ProtectedRoute>
                <Syllabus />
              </ProtectedRoute>
            }
          />
          <Route
            path="/exams"
            element={
              <ProtectedRoute>
                <Exams />
              </ProtectedRoute>
            }
          />
          <Route
            path="/community"
            element={
              <ProtectedRoute>
                <Community />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      {!isAuthPage && <Footer />}
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#333',
            color: '#fff',
          },
          success: {
            duration: 3000,
            theme: {
              primary: '#4aed88',
            },
          },
        }}
      />
    </div>
  );
};

function App() {
  return (
    <Router>
      <DarkModeProvider>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </DarkModeProvider>
    </Router>
  );
}

export default App; 