import React, { useState } from 'react'
import { 
  ComputerDesktopIcon, 
  CodeBracketIcon,
  UserGroupIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline'

const Tips = () => {
  const [expandedSection, setExpandedSection] = useState(null)

  const tips = {
    computer: [
      {
        title: "Windows Shortcuts",
        content: "• Win + D: Show/Hide desktop\n• Win + E: Open File Explorer\n• Win + L: Lock computer\n• Win + V: Clipboard history\n• Ctrl + Shift + Esc: Task Manager"
      },
      {
        title: "File Management",
        content: "• Use descriptive file names\n• Organize files in folders\n• Regular backups\n• Use cloud storage\n• Clean temporary files regularly"
      },
      {
        title: "System Maintenance",
        content: "• Update Windows regularly\n• Use antivirus software\n• Clean disk space\n• Check system performance\n• Monitor startup programs"
      }
    ],
    linkedin: [
      {
        title: "Profile Optimization",
        content: "• Professional profile photo\n• Compelling headline\n• Detailed work experience\n• Skills endorsements\n• Regular activity updates"
      },
      {
        title: "Networking Tips",
        content: "• Connect with industry professionals\n• Join relevant groups\n• Share valuable content\n• Engage with others' posts\n• Use personalized connection requests"
      },
      {
        title: "Content Strategy",
        content: "• Share industry insights\n• Write articles\n• Post achievements\n• Comment meaningfully\n• Use relevant hashtags"
      }
    ],
    coding: [
      {
        title: "Best Practices",
        content: "• Write clean, readable code\n• Use meaningful variable names\n• Comment your code\n• Follow DRY principle\n• Practice version control"
      },
      {
        title: "Learning Resources",
        content: "• Online platforms (freeCodeCamp, Codecademy)\n• Documentation reading\n• GitHub projects\n• Coding challenges\n• YouTube tutorials"
      },
      {
        title: "Career Development",
        content: "• Build portfolio projects\n• Contribute to open source\n• Practice problem solving\n• Learn new technologies\n• Join coding communities"
      }
    ]
  }

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const renderTipSection = (title, icon, tips, section) => (
    <div className="mb-8">
      <button
        onClick={() => toggleSection(section)}
        className="w-full flex items-center justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
      >
        <div className="flex items-center">
          {icon}
          <h2 className="text-xl font-semibold text-gray-900 ml-3">{title}</h2>
        </div>
        {expandedSection === section ? (
          <ChevronUpIcon className="h-6 w-6 text-gray-500" />
        ) : (
          <ChevronDownIcon className="h-6 w-6 text-gray-500" />
        )}
      </button>

      {expandedSection === section && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-lg font-semibold text-blue-600 mb-3">{tip.title}</h3>
              <pre className="text-gray-700 whitespace-pre-line text-sm">{tip.content}</pre>
            </div>
          ))}
        </div>
      )}
    </div>
  )

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tips & Tricks</h1>
          <p className="text-xl text-gray-600">
            Essential knowledge to boost your technical skills and professional presence
          </p>
        </div>

        {renderTipSection(
          "Computer Tips",
          <ComputerDesktopIcon className="h-8 w-8 text-blue-600" />,
          tips.computer,
          "computer"
        )}

        {renderTipSection(
          "LinkedIn Knowledge",
          <UserGroupIcon className="h-8 w-8 text-blue-600" />,
          tips.linkedin,
          "linkedin"
        )}

        {renderTipSection(
          "Coding Tips",
          <CodeBracketIcon className="h-8 w-8 text-blue-600" />,
          tips.coding,
          "coding"
        )}

        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Stay Updated!</h2>
          <p className="text-gray-700">
            We regularly update our tips and tricks to help you stay ahead in your technical journey. 
            Check back often for new content and insights!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Tips 