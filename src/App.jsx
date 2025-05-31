import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
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
import Profile from './pages/Profile'

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              {/* Public Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              {/* Protected Routes */}
              <Route 
                path="/" 
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/profile" 
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/about" 
                element={
                  <ProtectedRoute>
                    <About />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/contact" 
                element={
                  <ProtectedRoute>
                    <Contact />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/terms-conditions" 
                element={
                  <ProtectedRoute>
                    <TermsConditions />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/calculator" 
                element={
                  <ProtectedRoute>
                    <Calculator />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/flashcard" 
                element={
                  <ProtectedRoute>
                    <Flashcard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/tips" 
                element={
                  <ProtectedRoute>
                    <Tips />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/subjects" 
                element={
                  <ProtectedRoute>
                    <Subjects />
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
                path="/articles" 
                element={
                  <ProtectedRoute>
                    <Articles />
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

              {/* Redirect any unknown routes to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App; 