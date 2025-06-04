import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/subjects', label: 'Syllabus' },
  { path: '/exams', label: "PYQ's" },
  { path: '/articles', label: 'Notes' },
  { path: '/tips', label: 'Tips & Tricks' },
  { path: '/community', label: 'Community' },
];

export const MobileMenu = ({ isOpen, onClose, user }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const items = [...navItems];
  if (!user) {
    items.push({ 
      path: '/login',
      label: 'Login / Signup',
      isSpecial: true
    });
  }

  return (
    <div
      className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
    >
      <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        {items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block px-3 py-2 rounded-lg transition-all duration-200 ${
              item.isSpecial
                ? 'bg-primary-600 text-white hover:bg-primary-700'
                : isActive(item.path)
                  ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-primary-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-primary-400'
            }`}
            onClick={onClose}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}; 