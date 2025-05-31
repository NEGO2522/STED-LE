import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="mb-6">
              <span className="text-xl font-semibold text-gray-900">
                STED-FY Study Hub
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Empowering 1st-year students with comprehensive academic resources, 
              study materials, and a supportive learning community.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { path: '/subjects', label: 'Question Bank' },
                { path: '/exams', label: 'PYQ\'s' },
                { path: '/articles', label: 'Notes' },
                { path: '/calculator', label: 'Calculator' },
                { path: '/flashcard', label: 'Flashcards' },
              ].map((link, index) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="group flex items-center text-gray-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-2 transition-colors duration-200 group-hover:bg-primary-600" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              {[
                { path: '/about', label: 'About Us' },
                { path: '/contact', label: 'Contact' },
                { path: '/terms-conditions', label: 'Terms & Conditions' },
              ].map((link, index) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="group flex items-center text-gray-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-2 transition-colors duration-200 group-hover:bg-primary-600" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="group flex items-start space-x-3 text-gray-600">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-200">
                  <span className="text-primary-600 text-sm">📍</span>
                </span>
                <span>Dhawas, Near Manas Hospital, Jaipur</span>
              </li>
              <li className="group flex items-start space-x-3">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-200">
                  <span className="text-primary-600 text-sm">📧</span>
                </span>
                <a 
                  href="mailto:support@sted-fy.com" 
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                >
                  support@sted-fy.com
                </a>
              </li>
              <li className="group flex items-start space-x-3 text-gray-600">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-200">
                  <span className="text-primary-600 text-sm">⏰</span>
                </span>
                <span>Mon - Fri, 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} STED-FY Study Hub. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {[
                {
                  name: 'Facebook',
                  icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
                },
                {
                  name: 'Twitter',
                  icon: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
                },
                {
                  name: 'LinkedIn',
                  icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="group text-gray-400 hover:text-primary-600 transition-colors duration-200"
                >
                  <span className="sr-only">{social.name}</span>
                  <svg 
                    className="h-6 w-6 transform transition-transform duration-300 group-hover:scale-110" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 