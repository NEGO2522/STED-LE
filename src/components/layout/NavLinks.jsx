import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ProfileDropdown } from '../common/ProfileDropdown';
import { ThemeToggle } from '../common/ThemeToggle';

const navItems = [
  { path: '/subjects', label: 'Syllabus' },
  { path: '/exams', label: "PYQ's" },
  { path: '/articles', label: 'Notes' },
  { path: '/tips', label: 'Tips & Tricks' },
  { path: '/community', label: 'Community' },
];

export const NavLinks = ({ user }) => {
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
    <div className="hidden md:flex items-center space-x-4">
      <ul className="flex items-center space-x-8 mr-4">
        {items.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`relative py-2 px-4 transition-all duration-200 ${
                item.isSpecial
                  ? 'bg-primary-600 text-white rounded-lg hover:bg-primary-700 hover:shadow-glow'
                  : `${
                      isActive(item.path)
                        ? 'text-primary-600 dark:text-primary-400'
                        : 'text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400'
                    }`
              }`}
            >
              {item.label}
              {!item.isSpecial && (
                <span 
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 dark:bg-primary-400 transform origin-left transition-transform duration-300 ${
                    isActive(item.path) ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
      
      <div className="flex items-center">
        {user && <ProfileDropdown user={user} />}
        <ThemeToggle />
      </div>
    </div>
  );
}; 