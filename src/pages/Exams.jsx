import React from 'react'
import { AcademicCapIcon } from '@heroicons/react/24/outline'

const Exams = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <AcademicCapIcon className="mx-auto h-20 w-20 text-blue-600" />
          <h1 className="mt-6 text-4xl font-bold text-gray-900">Previous Year Papers</h1>
          <p className="mt-4 text-xl text-gray-600">Coming Soon!</p>
          <p className="mt-2 text-gray-500">
            We're preparing a comprehensive collection of previous year question papers for you.
          </p>
          
          <div className="mt-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Past Papers Archive</h3>
                <p className="text-gray-600">
                  Access to previous year question papers from multiple years and semesters.
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Subject Categories</h3>
                <p className="text-gray-600">
                  Well-organized papers categorized by subjects and examination patterns.
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Downloadable Format</h3>
                <p className="text-gray-600">
                  Easy to download and print format for offline preparation.
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Regular Updates</h3>
                <p className="text-gray-600">
                  Latest question papers added after each examination cycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Exams 