import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useAuth } from '../context/AuthContext'
import ProfileDropdown from './ProfileDropdown'
import { useDarkMode } from '../context/DarkModeContext'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  const navItems = [
    { path: '/subjects', label: 'Question Bank' },
    { path: '/exams', label: "PYQ's" },
    { path: '/articles', label: 'Notes' },
    { path: '/tips', label: 'Tips & Tricks' },
    { path: '/community', label: 'Community' },
  ]

  // Only add login/signup to nav items if user is not logged in
  if (!user) {
    navItems.push({ 
      path: '/login',
      label: 'Login / Signup',
      isSpecial: true
    })
  }

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/login')
    } catch (error) {
      console.error('Failed to log out:', error)
    }
  }

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md dark:bg-gray-900/80' : 'bg-white shadow dark:bg-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="group"
            >
              <span className="text-xl font-semibold text-gray-900 hover:text-primary-600 transition-colors duration-200 dark:text-white dark:hover:text-primary-400">
                STED-FY Study Hub
              </span>
            </Link>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-4">
            <ul className="flex items-center space-x-8 mr-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`relative py-2 px-4 transition-all duration-200 ${
                      item.isSpecial
                        ? 'bg-primary-600 text-white rounded-lg hover:bg-primary-700 hover:shadow-glow'
                        : `${
                            isActive(item.path)
                              ? 'text-primary-600 dark:text-primary-400'
                              : 'text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400'
                          }`
                    }`}
                  >
                    {item.label}
                    {!item.isSpecial && (
                      <span 
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 dark:bg-primary-400 transform origin-left transition-transform duration-300 ${
                          isActive(item.path) ? 'scale-x-100' : 'scale-x-0'
                        }`}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center">
              {user && (
                <ProfileDropdown onLogout={handleLogout} user={user} />
              )}
              <div className="pl-10 pr-12">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {isDarkMode ? (
                    <SunIcon className="h-5 w-5" />
                  ) : (
                    <MoonIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            {user && <ProfileDropdown onLogout={handleLogout} user={user} />}
            <div className="pl-8 pr-10">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
              </button>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-4 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-3 py-2 rounded-lg transition-all duration-200 ${
                item.isSpecial
                  ? 'bg-primary-600 text-white hover:bg-primary-700'
                  : isActive(item.path)
                    ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-primary-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-primary-400'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Navbar 