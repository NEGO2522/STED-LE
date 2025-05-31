import React from 'react'
import { motion } from 'framer-motion'

const FloatingText = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
        Welcome to Gyanit
      </h1>
    </motion.div>
  )
}

export default FloatingText 