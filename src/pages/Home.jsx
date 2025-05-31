import React from 'react'
import { Link } from 'react-router-dom'
import { 
  BookOpenIcon,
  DocumentTextIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Welcome to Gyanit
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              Your go-to platform for first-year engineering resources, 
              study materials, and helpful tips for your academic journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/subjects"
                className="px-8 py-3 text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
              >
                Access Resources
              </Link>
              <Link
                to="/about"
                className="px-8 py-3 text-lg font-medium rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200 transition duration-300"
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
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
                  <DocumentTextIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Question Bank</h3>
                <p className="text-gray-600 mb-6">
                  Access subject-wise questions and practice materials for better preparation.
                </p>
                <Link
                  to="/subjects"
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                >
                  View Resources
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Previous Year Papers */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
                  <AcademicCapIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Previous Year Papers</h3>
                <p className="text-gray-600 mb-6">
                  Get access to past exam papers to understand the exam pattern better.
                </p>
                <Link
                  to="/exams"
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                >
                  Browse Papers
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Study Notes */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
                  <BookOpenIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Study Notes</h3>
                <p className="text-gray-600 mb-6">
                  Find helpful study materials and notes for all your subjects.
                </p>
                <Link
                  to="/articles"
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                >
                  View Notes
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to get started?
                </h2>
                <p className="mt-4 text-lg text-blue-100">
                  Access all our resources by creating a free account today.
                </p>
              </div>
              <div className="mt-8 lg:mt-0 lg:ml-8">
                <Link
                  to="/login"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-blue-600 bg-white hover:bg-blue-50 transition duration-300"
                >
                  Create Free Account
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 