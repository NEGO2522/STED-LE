import { useState } from 'react'
import { motion } from 'framer-motion'
import { AcademicCapIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

const Flashcard = () => {
  const [currentCard, setCurrentCard] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [selectedSubject, setSelectedSubject] = useState('math')

  const flashcards = {
    math: [
      {
        question: "What is the formula for the area of a circle?",
        answer: "A = πr²"
      },
      {
        question: "What is the Pythagorean theorem?",
        answer: "a² + b² = c²"
      },
      {
        question: "What is the formula for the quadratic equation?",
        answer: "x = (-b ± √(b² - 4ac)) / 2a"
      }
    ],
    physics: [
      {
        question: "What is Newton's First Law?",
        answer: "An object at rest stays at rest, and an object in motion stays in motion unless acted upon by an external force."
      },
      {
        question: "What is the formula for force?",
        answer: "F = ma (Force equals mass times acceleration)"
      },
      {
        question: "What is the formula for kinetic energy?",
        answer: "KE = ½mv² (Kinetic energy equals one-half mass times velocity squared)"
      }
    ],
    chemistry: [
      {
        question: "What is the atomic number?",
        answer: "The number of protons in an atom's nucleus"
      },
      {
        question: "What is the pH scale range?",
        answer: "0 to 14, with 7 being neutral"
      },
      {
        question: "What is an isotope?",
        answer: "Atoms of the same element with different numbers of neutrons"
      }
    ]
  }

  const handleNext = () => {
    setCurrentCard((prev) => 
      prev === flashcards[selectedSubject].length - 1 ? 0 : prev + 1
    )
    setIsFlipped(false)
  }

  const handlePrevious = () => {
    setCurrentCard((prev) => 
      prev === 0 ? flashcards[selectedSubject].length - 1 : prev - 1
    )
    setIsFlipped(false)
  }

  const handleSubjectChange = (subject) => {
    setSelectedSubject(subject)
    setCurrentCard(0)
    setIsFlipped(false)
  }

  return (
    <div className="pt-16 md:pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <AcademicCapIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900">Interactive Flashcards</h1>
          <p className="mt-2 text-gray-600">Test your knowledge and improve your understanding</p>
        </div>

        {/* Subject Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'math', label: 'Mathematics' },
            { id: 'physics', label: 'Physics' },
            { id: 'chemistry', label: 'Chemistry' }
          ].map((subject) => (
            <button
              key={subject.id}
              onClick={() => handleSubjectChange(subject.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedSubject === subject.id
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 hover:scale-105'
              }`}
            >
              {subject.label}
            </button>
          ))}
        </div>

        {/* Card Container */}
        <div className="relative max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="absolute -top-6 left-0 w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 transition-all duration-300"
              style={{ width: `${((currentCard + 1) / flashcards[selectedSubject].length) * 100}%` }}
            />
          </div>

          {/* Flashcard */}
          <motion.div 
            className={`bg-white rounded-2xl shadow-2xl p-8 cursor-pointer min-h-[300px] transform-gpu transition-all duration-500 ${
              isFlipped ? 'bg-gradient-to-br from-blue-50 to-white' : ''
            }`}
            onClick={() => setIsFlipped(!isFlipped)}
            initial={{ rotateX: 0 }}
            animate={{ rotateX: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className={`transform-gpu transition-all duration-500 ${isFlipped ? 'rotate-180' : ''}`}>
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-6">
                  Click card to {isFlipped ? 'see question' : 'reveal answer'}
                </p>
                <p className="text-2xl font-semibold text-gray-900 leading-relaxed">
                  {isFlipped 
                    ? flashcards[selectedSubject][currentCard].answer
                    : flashcards[selectedSubject][currentCard].question
                  }
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={handlePrevious}
              className="flex items-center gap-2 px-6 py-3 bg-white rounded-full text-gray-700 hover:bg-gray-50 transition-all duration-300 hover:scale-105"
            >
              <ArrowLeftIcon className="h-5 w-5" />
              Previous
            </button>
            <span className="text-gray-600 font-medium">
              {currentCard + 1} of {flashcards[selectedSubject].length}
            </span>
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 bg-white rounded-full text-gray-700 hover:bg-gray-50 transition-all duration-300 hover:scale-105"
            >
              Next
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">How to Use Flashcards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">1</span>
                <p className="text-gray-700">Select a subject from the options above</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">2</span>
                <p className="text-gray-700">Read the question on the front of the card</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">3</span>
                <p className="text-gray-700">Click the card to reveal the answer</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">4</span>
                <p className="text-gray-700">Use navigation buttons to move between cards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Flashcard 