import React from 'react'
import { DocumentTextIcon } from '@heroicons/react/24/outline'

const Subjects = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <DocumentTextIcon className="mx-auto h-20 w-20 text-blue-600" />
          <h1 className="mt-6 text-4xl font-bold text-gray-900">Question Bank</h1>
          <p className="mt-4 text-xl text-gray-600">Coming Soon!</p>
          <p className="mt-2 text-gray-500">
            We're working hard to bring you a comprehensive collection of subject-wise questions.
          </p>
          
          <div className="mt-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Subject-wise Questions</h3>
                <p className="text-gray-600">
                  Carefully curated questions organized by subject and topic for effective practice.
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Detailed Solutions</h3>
                <p className="text-gray-600">
                  Step-by-step explanations to help you understand concepts better.
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Topic Coverage</h3>
                <p className="text-gray-600">
                  Comprehensive coverage of all important topics in your curriculum.
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Regular Updates</h3>
                <p className="text-gray-600">
                  New questions and materials added regularly to keep you prepared.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subjects 