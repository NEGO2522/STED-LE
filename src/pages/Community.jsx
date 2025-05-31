import React from 'react'
import { UserGroupIcon } from '@heroicons/react/24/outline'

const Community = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <UserGroupIcon className="mx-auto h-20 w-20 text-blue-600" />
          <h1 className="mt-6 text-4xl font-bold text-gray-900">Community</h1>
          <p className="mt-4 text-xl text-gray-600">Coming Soon!</p>
          <p className="mt-2 text-gray-500">
            We're building a vibrant community platform for students to connect and share knowledge.
          </p>
          
          <div className="mt-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Discussion Forums</h3>
                <p className="text-gray-600">
                  Engage in subject-specific discussions and get help from peers.
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Resource Sharing</h3>
                <p className="text-gray-600">
                  Share and access helpful study materials and resources.
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Study Groups</h3>
                <p className="text-gray-600">
                  Form study groups with fellow students for collaborative learning.
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Expert Connect</h3>
                <p className="text-gray-600">
                  Connect with seniors and experts for guidance and mentorship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Community 