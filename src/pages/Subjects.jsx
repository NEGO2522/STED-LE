import React from 'react';
import { NextData } from '../components/features/NextData';

const Subjects = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Subject Materials
      </h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <NextData />
      </div>
    </div>
  );
};

export default Subjects; 