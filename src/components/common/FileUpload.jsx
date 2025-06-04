import React, { useState } from 'react';
import { uploadFile } from '../../firebase/storage';

export const FileUpload = () => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setError(null);
      setProgress(0);
      
      // Create a unique file path
      const path = `uploads/${Date.now()}_${file.name}`;
      
      // Upload the file
      await uploadFile(
        file,
        path,
        (progress) => setProgress(progress),
        (error) => setError(error.message),
        (downloadUrl) => setUrl(downloadUrl)
      );
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <div className="mb-4">
        <input
          type="file"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-primary-50 file:text-primary-700
            hover:file:bg-primary-100
            dark:file:bg-primary-900 dark:file:text-primary-400"
        />
      </div>

      {progress > 0 && progress < 100 && (
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
          <div
            className="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {error && (
        <div className="text-red-500 text-sm mb-4">
          Error: {error}
        </div>
      )}

      {url && (
        <div className="text-sm text-gray-600 dark:text-gray-400">
          File uploaded successfully!
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-primary-600 hover:text-primary-700 dark:text-primary-400"
          >
            View file
          </a>
        </div>
      )}
    </div>
  );
}; 