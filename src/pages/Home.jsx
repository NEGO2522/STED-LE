import React from 'react'
import { Link } from 'react-router-dom'
import { 
  BookOpenIcon,
  DocumentTextIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="bg-gray-50 dark:bg-gray-900 pt-16 transition-colors duration-200">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-800 py-20 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-200 tracking-tight font-inter">
            For Those Who Think Beyond Marks
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 transition-colors duration-200 font-normal font-inter leading-relaxed">
            For every first-year heart feeling lost — we're here to guide, support, and walk with you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to={user ? "/subjects" : "/login"}
                className="px-8 py-3 text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-300 font-inter"
              >
                {user ? 'Access Resources' : 'Get Started'}
              </Link>
              <Link
                to="/about"
                className="px-8 py-3 text-base font-medium rounded-lg text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-300 font-inter"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Question Bank */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg mb-6">
                  <DocumentTextIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 font-inter">Question Bank</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 font-inter leading-relaxed">
                  Access subject-wise questions and practice materials for better preparation.
                </p>
                <Link
                  to={user ? "/subjects" : "/login"}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium inline-flex items-center font-inter"
                >
                  {user ? 'View Resources' : 'Login to Access'}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Previous Year Papers */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg mb-6">
                  <AcademicCapIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 font-inter">Previous Year Papers</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 font-inter leading-relaxed">
                  Get access to past exam papers to understand the exam pattern better.
                </p>
                <Link
                  to={user ? "/exams" : "/login"}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium inline-flex items-center font-inter"
                >
                  {user ? 'Browse Papers' : 'Login to Access'}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Study Notes */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg mb-6">
                  <BookOpenIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 font-inter">Study Notes</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 font-inter leading-relaxed">
                  Find helpful study materials and notes for all your subjects.
                </p>
                <Link
                  to={user ? "/articles" : "/login"}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium inline-flex items-center font-inter"
                >
                  {user ? 'View Notes' : 'Login to Access'}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Different content based on auth state */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {user ? (
            // Logged-in user CTA - Promote community and tips
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Community Feature */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-2xl shadow-xl overflow-hidden">
                <div className="px-6 py-12 sm:px-12">
                  <h2 className="text-2xl font-semibold tracking-tight text-white mb-4 font-inter">
                    Join Our Community
                  </h2>
                  <p className="text-lg text-blue-100 mb-6 font-inter leading-relaxed">
                    Connect with fellow students, share knowledge, and participate in discussions.
                  </p>
                  <Link
                    to="/community"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-blue-600 bg-white hover:bg-blue-50 dark:hover:bg-gray-100 transition duration-300 font-inter"
                  >
                    Explore Community
                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Tips & Tricks */}
              <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 dark:from-indigo-700 dark:to-indigo-800 rounded-2xl shadow-xl overflow-hidden">
                <div className="px-6 py-12 sm:px-12">
                  <h2 className="text-2xl font-semibold tracking-tight text-white mb-4 font-inter">
                    Tips & Tricks
                  </h2>
                  <p className="text-lg text-indigo-100 mb-6 font-inter leading-relaxed">
                    Discover helpful tips and tricks to enhance your learning experience.
                  </p>
                  <Link
                    to="/tips"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-indigo-600 bg-white hover:bg-indigo-50 dark:hover:bg-gray-100 transition duration-300 font-inter"
                  >
                    View Tips
                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            // Non-logged-in user CTA - Signup promotion
            <div className="bg-blue-600 dark:bg-blue-700 rounded-2xl shadow-xl overflow-hidden">
              <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl font-inter">
                    Ready to get started?
                  </h2>
                  <p className="mt-4 text-lg text-blue-100 font-inter leading-relaxed">
                    Access all our resources by creating a free account today.
                  </p>
                </div>
                <div className="mt-8 lg:mt-0 lg:ml-8">
                  <Link
                    to="/login"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-blue-600 bg-white hover:bg-blue-50 dark:hover:bg-gray-100 transition duration-300 font-inter"
                  >
                    Create Free Account
                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Home 