import React from 'react'
import { BookOpenIcon } from '@heroicons/react/24/outline'

const Articles = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <BookOpenIcon className="mx-auto h-20 w-20 text-blue-600" />
          <h1 className="mt-6 text-4xl font-bold text-gray-900">Study Notes</h1>
          <p className="mt-4 text-xl text-gray-600">Coming Soon!</p>
          <p className="mt-2 text-gray-500">
            We're curating high-quality study notes and materials for all subjects.
          </p>
          
          <div className="mt-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Comprehensive Notes</h3>
                <p className="text-gray-600">
                  Well-structured notes covering all important topics and concepts.
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Easy Navigation</h3>
                <p className="text-gray-600">
                  Subject and topic-wise organization for quick access to needed materials.
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Quality Content</h3>
                <p className="text-gray-600">
                  Verified and reviewed content to ensure accuracy and relevance.
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Regular Updates</h3>
                <p className="text-gray-600">
                  New notes and study materials added regularly to cover all topics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Articles 