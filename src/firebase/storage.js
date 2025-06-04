import { ref, uploadBytesResumable, getDownloadURL, listAll } from 'firebase/storage';
import { storage } from './config';

/**
 * List all files in a Firebase Storage directory
 * @param {string} path - The storage path to list files from
 * @returns {Promise<Array>} Array of file metadata
 */
export const listFiles = async (path) => {
  try {
    const storageRef = ref(storage, path);
    const result = await listAll(storageRef);
    
    // Get download URLs and metadata for all items
    const items = await Promise.all(
      result.items.map(async (item) => {
        const url = await getDownloadURL(item);
        return {
          name: item.name,
          fullPath: item.fullPath,
          url: url
        };
      })
    );

    // Get subdirectories
    const folders = result.prefixes.map(prefix => ({
      name: prefix.name,
      fullPath: prefix.fullPath,
      isDirectory: true
    }));

    return [...folders, ...items];
  } catch (error) {
    console.error('Error listing files:', error);
    throw error;
  }
};

/**
 * Upload a file to Firebase Storage with progress tracking
 * @param {File} file - The file to upload
 * @param {string} path - The storage path where the file should be saved
 * @param {function} onProgress - Callback function for upload progress
 * @param {function} onError - Callback function for upload errors
 * @param {function} onComplete - Callback function for upload completion
 */
export const uploadFile = (file, path, onProgress, onError, onComplete) => {
  // Create storage reference
  const storageRef = ref(storage, path);
  
  // Create upload task
  const uploadTask = uploadBytesResumable(storageRef, file);

  // Monitor upload progress
  uploadTask.on(
    'state_changed',
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      onProgress && onProgress(progress);
    },
    (error) => {
      console.error('Upload error:', error);
      onError && onError(error);
    },
    async () => {
      try {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        onComplete && onComplete(downloadURL);
      } catch (error) {
        console.error('Error getting download URL:', error);
        onError && onError(error);
      }
    }
  );

  return uploadTask;
};

/**
 * Get the download URL for a file in Firebase Storage
 * @param {string} path - The storage path of the file
 * @returns {Promise<string>} The download URL
 */
export const getFileURL = async (path) => {
  try {
    const fileRef = ref(storage, path);
    return await getDownloadURL(fileRef);
  } catch (error) {
    console.error('Error getting file URL:', error);
    throw error;
  }
}; 