import React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useDarkMode } from '../../context/DarkModeContext';

export const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="pl-10 pr-12">
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? (
          <SunIcon className="h-5 w-5" />
        ) : (
          <MoonIcon className="h-5 w-5" />
        )}
      </button>
    </div>
  );
}; 