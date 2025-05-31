import { useState } from 'react'
import { CalculatorIcon } from '@heroicons/react/24/outline'

const Calculator = () => {
  const [display, setDisplay] = useState('0')
  const [equation, setEquation] = useState('')
  const [isNewNumber, setIsNewNumber] = useState(true)

  const handleNumber = (number) => {
    if (isNewNumber) {
      setDisplay(number)
      setEquation(equation + number)
      setIsNewNumber(false)
    } else {
      setDisplay(display + number)
      setEquation(equation + number)
    }
  }

  const handleOperator = (operator) => {
    setEquation(equation + ' ' + operator + ' ')
    setIsNewNumber(true)
  }

  const handleEqual = () => {
    try {
      const result = eval(equation)
      setDisplay(result.toString())
      setEquation(result.toString())
      setIsNewNumber(true)
    } catch (error) {
      setDisplay('Error')
      setEquation('')
      setIsNewNumber(true)
    }
  }

  const handleClear = () => {
    setDisplay('0')
    setEquation('')
    setIsNewNumber(true)
  }

  const handleDecimal = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.')
      setEquation(equation + '.')
      setIsNewNumber(false)
    }
  }

  const handleScientific = (func) => {
    try {
      let result
      const number = parseFloat(display)
      
      switch(func) {
        case 'sin':
          result = Math.sin(number)
          break
        case 'cos':
          result = Math.cos(number)
          break
        case 'tan':
          result = Math.tan(number)
          break
        case 'sqrt':
          result = Math.sqrt(number)
          break
        case 'log':
          result = Math.log10(number)
          break
        case 'ln':
          result = Math.log(number)
          break
        case 'square':
          result = number * number
          break
        default:
          result = number
      }
      
      setDisplay(result.toString())
      setEquation(result.toString())
      setIsNewNumber(true)
    } catch (error) {
      setDisplay('Error')
      setEquation('')
      setIsNewNumber(true)
    }
  }

  return (
    <div className="pt-16 md:pt-20">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <CalculatorIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900">Scientific Calculator</h1>
          <p className="mt-2 text-gray-600">Perform complex calculations with ease</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Display */}
          <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-700">
            <div className="text-right">
              <div className="text-blue-100 text-sm h-6 overflow-x-auto whitespace-nowrap">{equation}</div>
              <div className="text-white text-4xl font-semibold tracking-wider overflow-x-auto">{display}</div>
            </div>
          </div>

          {/* Scientific Functions */}
          <div className="grid grid-cols-4 gap-1 p-2 bg-gray-50">
            {[
              { label: 'sin', action: () => handleScientific('sin') },
              { label: 'cos', action: () => handleScientific('cos') },
              { label: 'tan', action: () => handleScientific('tan') },
              { label: '√', action: () => handleScientific('sqrt') },
              { label: 'log', action: () => handleScientific('log') },
              { label: 'ln', action: () => handleScientific('ln') },
              { label: 'x²', action: () => handleScientific('square') },
              { label: 'xⁿ', action: () => handleOperator('**') }
            ].map((btn, index) => (
              <button
                key={index}
                onClick={btn.action}
                className="p-3 text-blue-600 font-medium hover:bg-blue-50 transition-colors duration-200 rounded-lg"
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Numbers and Basic Operators */}
          <div className="grid grid-cols-4 gap-1 p-2 bg-white">
            <button onClick={handleClear} className="p-4 text-red-600 font-medium hover:bg-red-50 transition-colors duration-200 rounded-lg">C</button>
            <button onClick={() => handleOperator('/')} className="p-4 text-blue-600 font-medium hover:bg-blue-50 transition-colors duration-200 rounded-lg">÷</button>
            <button onClick={() => handleOperator('*')} className="p-4 text-blue-600 font-medium hover:bg-blue-50 transition-colors duration-200 rounded-lg">×</button>
            <button onClick={() => handleOperator('-')} className="p-4 text-blue-600 font-medium hover:bg-blue-50 transition-colors duration-200 rounded-lg">−</button>
            
            {[7, 8, 9].map(num => (
              <button
                key={num}
                onClick={() => handleNumber(num.toString())}
                className="p-4 text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200 rounded-lg"
              >
                {num}
              </button>
            ))}
            <button onClick={() => handleOperator('+')} className="p-4 text-blue-600 font-medium hover:bg-blue-50 transition-colors duration-200 rounded-lg row-span-2">+</button>
            
            {[4, 5, 6].map(num => (
              <button
                key={num}
                onClick={() => handleNumber(num.toString())}
                className="p-4 text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200 rounded-lg"
              >
                {num}
              </button>
            ))}
            
            {[1, 2, 3].map(num => (
              <button
                key={num}
                onClick={() => handleNumber(num.toString())}
                className="p-4 text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200 rounded-lg"
              >
                {num}
              </button>
            ))}
            <button onClick={handleEqual} className="p-4 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-200 rounded-lg row-span-2">=</button>
            
            <button onClick={() => handleNumber('0')} className="p-4 text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200 rounded-lg col-span-2">0</button>
            <button onClick={handleDecimal} className="p-4 text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200 rounded-lg">.</button>
          </div>
        </div>

        {/* Calculator Instructions */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Guide</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              Basic operators: +, -, ×, ÷
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              Scientific functions use radians
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              'C' clears the current calculation
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              '=' shows the final result
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Calculator 