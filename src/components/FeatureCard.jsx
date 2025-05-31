import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const FeatureCard = ({ icon: Icon, title, description, link, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.05, rotate: 2 }}
    className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 backdrop-blur-lg bg-opacity-80"
  >
    <div className="p-8">
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl mb-6"
      >
        <Icon className="h-8 w-8 text-blue-600" />
      </motion.div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link
        to={link}
        className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group"
      >
        Explore Now
        <motion.svg
          whileHover={{ x: 5 }}
          className="w-5 h-5 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </motion.svg>
      </Link>
    </div>
  </motion.div>
)

export default FeatureCard 