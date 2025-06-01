import React, { useState } from 'react'
import { 
  ComputerDesktopIcon, 
  CodeBracketIcon,
  CommandLineIcon,
  DocumentTextIcon,
  TableCellsIcon,
  SwatchIcon
} from '@heroicons/react/24/outline'

const Tips = () => {
  const [activeCategory, setActiveCategory] = useState('shortcuts')

  const categories = {
    shortcuts: {
      title: "Essential Shortcuts",
      icon: <ComputerDesktopIcon className="h-6 w-6" />,
      description: "Keyboard shortcuts for various applications",
      items: [
        {
          title: "Computer Shortcuts",
          path: "/STED-tips & tricks/Computer Shortcuts.jpg",
          description: "Essential Windows keyboard shortcuts"
        },
        {
          title: "Function Keys Guide",
          path: "/STED-tips & tricks/Function Key (KeyBoard).jpg",
          description: "Understanding keyboard function keys (F1-F12)"
        },
        {
          title: "VS Code Shortcuts",
          path: "/STED-tips & tricks/Vs Code Shortcuts.pdf",
          description: "Productivity shortcuts for VS Code"
        },
        {
          title: "PowerPoint Shortcuts",
          path: "/STED-tips & tricks/Power Point Shortcuts.jpg",
          description: "Microsoft PowerPoint keyboard shortcuts"
        },
        {
          title: "WhatsApp Web Shortcuts",
          path: "/STED-tips & tricks/Whatsapp Web ShortCut.jpg",
          description: "Keyboard shortcuts for WhatsApp Web"
        }
      ]
    },
    webdev: {
      title: "Web Development",
      icon: <CodeBracketIcon className="h-6 w-6" />,
      description: "Web development resources and guides",
      items: [
        {
          title: "Master React in 20 Days",
          path: "/STED-tips & tricks/Master React In 20 Days.pdf",
          description: "Complete guide to learning React"
        },
        {
          title: "JavaScript Web API",
          path: "/STED-tips & tricks/JavaScript Web Api.pdf",
          description: "Comprehensive JavaScript Web API guide"
        },
        {
          title: "CSS Cheat Sheets",
          path: "/STED-tips & tricks/Css CheatSheets.pdf",
          description: "Essential CSS properties and techniques"
        },
        {
          title: "Full Stack Developer Skills",
          path: "/STED-tips & tricks/Full Stack Devloper Skills.jpg",
          description: "Required skills for full stack development"
        }
      ]
    },
    data: {
      title: "Data & Analytics",
      icon: <TableCellsIcon className="h-6 w-6" />,
      description: "Data analysis and database resources",
      items: [
        {
          title: "SQL Notes",
          path: "/STED-tips & tricks/Sql Notes.pdf",
          description: "Comprehensive SQL reference guide"
        },
        {
          title: "Excel vs SQL vs Pandas",
          path: "/STED-tips & tricks/Excel vs Sql vs Pandas.jpg",
          description: "Comparison of data analysis tools"
        },
        {
          title: "Machine Learning Cheatsheet",
          path: "/STED-tips & tricks/Machine Learning Cheatsheet.pdf",
          description: "Essential machine learning concepts"
        }
      ]
    },
    python: {
      title: "Python Resources",
      icon: <CommandLineIcon className="h-6 w-6" />,
      description: "Python programming resources",
      items: [
        {
          title: "Python Cheat Sheet",
          path: "/STED-tips & tricks/Python Cheet Sheet .jpg",
          description: "Quick reference for Python programming"
        },
        {
          title: "Python Libraries Overview",
          path: "/STED-tips & tricks/Pyhton And libraries.jpg",
          description: "Overview of popular Python libraries"
        }
      ]
    },
    design: {
      title: "Design Resources",
      icon: <SwatchIcon className="h-6 w-6" />,
      description: "Design tips and guidelines",
      items: [
        {
          title: "Junior vs Senior Designers",
          path: "/STED-tips & tricks/Junior Designers vs. Senior Designers.pdf",
          description: "Understanding design career progression"
        }
      ]
    }
  }

  const displayResources = categories[activeCategory]?.items || []

  const getBackgroundColor = (category) => {
    const colors = {
      shortcuts: "from-blue-500 to-indigo-600",
      webdev: "from-purple-500 to-violet-600",
      data: "from-emerald-500 to-green-600",
      python: "from-cyan-500 to-blue-600",
      design: "from-rose-500 to-pink-600"
    }
    return colors[category] || "from-gray-500 to-gray-600"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced header with gradient background */}
      <div className="bg-white shadow-md border-b sticky top-0 z-10 backdrop-blur-lg bg-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">Learning Resources</h1>
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-medium">Category: </span>
              <span className="text-blue-600">{categories[activeCategory]?.title}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Section */}
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-16 h-16 rounded-2xl mx-auto mb-6 shadow-lg flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
              <DocumentTextIcon className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Tips & Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Access our collection of cheat sheets, shortcuts, and learning resources to enhance your skills.
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(categories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 transform hover:scale-105 ${
                  activeCategory === key
                    ? `bg-gradient-to-r ${getBackgroundColor(key)} text-white shadow-lg`
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category.icon}
                {category.title}
              </button>
            ))}
          </div>

          {/* Resources Grid with Enhanced Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayResources.map((resource, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
              >
                <div className={`h-2 rounded-t-xl bg-gradient-to-r ${getBackgroundColor(activeCategory)}`} />
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <DocumentTextIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-gray-500 text-sm mt-1">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                  <a
                    href={resource.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-white border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 text-sm font-medium group-hover:shadow-md"
                  >
                    View Resource
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                value: Object.keys(categories).length,
                label: "Categories",
                color: "text-blue-600",
                bgColor: "bg-blue-50"
              },
              {
                value: Object.values(categories).reduce((total, category) => total + category.items.length, 0),
                label: "Total Resources",
                color: "text-purple-600",
                bgColor: "bg-purple-50"
              },
              {
                value: "24/7",
                label: "Access",
                color: "text-emerald-600",
                bgColor: "bg-emerald-50"
              }
            ].map((stat, index) => (
              <div key={index} className={`${stat.bgColor} rounded-2xl p-8 shadow-sm border border-black/5 hover:shadow-md transition-shadow duration-300`}>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tips 