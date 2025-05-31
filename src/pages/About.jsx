import React from 'react'

const About = () => {
  return (
    <div className="pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">About STED-FY</h1>
          <p className="text-xl text-gray-600">Empowering students with knowledge and resources</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              At STED-FY, we are committed to making quality education accessible to all students. 
              Our platform provides comprehensive study materials, previous year questions, and 
              interactive learning tools to help students excel in their academic journey.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We believe in the power of collaborative learning and strive to create a community 
              where students can share knowledge, discuss concepts, and grow together.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              We envision a future where every student has access to quality educational resources 
              and support. Our goal is to become the leading platform for academic excellence and 
              student success.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Through innovative tools and a supportive community, we aim to transform the way 
              students learn and prepare for their academic challenges.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6 text-center">Why Choose STED-FY?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Comprehensive Resources</h3>
              <p className="text-gray-700">
                Access a wide range of study materials, question banks, and practice papers all in one place.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Interactive Learning</h3>
              <p className="text-gray-700">
                Engage with interactive tools like flashcards and calculators to enhance your learning experience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Supportive Community</h3>
              <p className="text-gray-700">
                Join a community of learners and educators who are committed to academic excellence.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Kshitij Jain</h3>
              <p className="text-gray-600 mt-2">Co-Founder</p>
              <p className="text-gray-700 mt-4">
                With a passion for education and technology, Kshitij co-founded STED-FY to help students 
                access quality educational resources and achieve their academic goals.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Harsh Agarwal</h3>
              <p className="text-gray-600 mt-2">Co-Founder</p>
              <p className="text-gray-700 mt-4">
                Bringing technical expertise and innovation to education, Harsh co-founded STED-FY 
                with a vision to create an accessible and comprehensive learning platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About 