import React, { useState, useEffect } from 'react';
import { listFiles } from '../../firebase/storage';
import { FolderIcon, DocumentIcon, ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

export const NextData = ({ basePath = 'NEXT-DATA' }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedFolders, setExpandedFolders] = useState(new Set());

  useEffect(() => {
    loadData(basePath);
  }, [basePath]);

  const loadData = async (path) => {
    try {
      console.log('Loading data from path:', path);
      setLoading(true);
      setError(null);
      const files = await listFiles(path);
      console.log('Loaded files:', files);
      setData(files);
    } catch (err) {
      console.error('Error loading data from path:', path, err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleFolder = async (path) => {
    try {
      setExpandedFolders(prev => {
        const newSet = new Set(prev);
        if (newSet.has(path)) {
          newSet.delete(path);
        } else {
          newSet.add(path);
        }
        return newSet;
      });
      
      // Load subfolder content if not already loaded
      if (!expandedFolders.has(path)) {
        await loadData(path);
      }
    } catch (err) {
      console.error('Error toggling folder:', path, err);
      setError(err.message);
    }
  };

  const renderItem = (item) => {
    const isExpanded = expandedFolders.has(item.fullPath);
    const isFile = !item.isDirectory;

    return (
      <div key={item.fullPath} className="mb-2">
        <div 
          className={`flex items-center p-2 rounded-lg ${
            item.isDirectory 
              ? 'hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer'
              : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
          }`}
          onClick={() => item.isDirectory && toggleFolder(item.fullPath)}
        >
          {item.isDirectory ? (
            <>
              {isExpanded ? (
                <ChevronDownIcon className="w-5 h-5 text-gray-500 mr-2" />
              ) : (
                <ChevronRightIcon className="w-5 h-5 text-gray-500 mr-2" />
              )}
              <FolderIcon className="w-5 h-5 text-yellow-500 mr-2" />
              <span className="text-gray-700 dark:text-gray-300">{item.name}</span>
            </>
          ) : (
            <>
              <DocumentIcon className="w-5 h-5 text-blue-500 mr-2" />
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('Opening file:', item.name, item.url);
                }}
              >
                {item.name}
              </a>
            </>
          )}
        </div>
        
        {item.isDirectory && isExpanded && (
          <div className="ml-6 mt-2 border-l-2 border-gray-200 dark:border-gray-700 pl-4">
            <NextData basePath={item.fullPath} />
          </div>
        )}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 p-4 rounded-lg bg-red-50 dark:bg-red-900/20">
        <p className="font-semibold">Error loading data:</p>
        <p className="mt-1">{error}</p>
        <button 
          onClick={() => loadData(basePath)}
          className="mt-2 px-4 py-2 bg-red-100 dark:bg-red-900/40 rounded-md hover:bg-red-200 dark:hover:bg-red-900/60 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="p-4">
      {data.length === 0 ? (
        <div className="text-gray-500 dark:text-gray-400 text-center py-8">
          No files found in this directory
        </div>
      ) : (
        <div className="space-y-2">
          {data.map(renderItem)}
        </div>
      )}
    </div>
  );
}; 