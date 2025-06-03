import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { ArrowDownTrayIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// Set up the worker for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Syllabus = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(15); // Start from page 15
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const MIN_PAGE = 15; // Define the minimum page number
  const MAX_PAGE = 22; // Define the maximum page number

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setIsLoading(false);
    setError(null);
  }

  function onDocumentLoadError(error) {
    console.error('PDF Load Error:', error);
    setError('Failed to load PDF. Please try again later.');
    setIsLoading(false);
  }

  const handleDownload = () => {
    try {
      const link = document.createElement('a');
      link.href = '/Syllabus.pdf';
      link.download = 'Syllabus.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download error:', error);
      setError('Failed to download PDF. Please try again later.');
    }
  };

  const goToPrevPage = () => {
    setPageNumber(page => Math.max(page - 1, MIN_PAGE));
  };

  const goToNextPage = () => {
    setPageNumber(page => Math.min(page + 1, MAX_PAGE));
  };

  return (
    <div className="pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">Course Syllabus</h1>
          <p className="text-xl text-gray-600">Comprehensive course structure and curriculum details</p>
        </div>

        {/* PDF Viewer Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          {isLoading && !error && (
            <div className="flex items-center justify-center h-96">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          )}

          {error && (
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <p className="text-red-500 mb-4">{error}</p>
                <button
                  onClick={() => {
                    setIsLoading(true);
                    setError(null);
                    window.location.reload();
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}
          
          <Document
            file="/Syllabus.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={
              <div className="flex items-center justify-center h-96">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            }
            options={{
              cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.4.120/cmaps/',
              cMapPacked: true,
              standardFontDataUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.4.120/standard_fonts/'
            }}
          >
            {!error && (
              <div className="flex justify-center mb-4">
                <Page
                  pageNumber={pageNumber}
                  className="mx-auto shadow-lg"
                  width={Math.min(window.innerWidth * 0.9, 800)}
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                  error={
                    <div className="text-red-500 text-center">
                      Error loading page. Please try again.
                    </div>
                  }
                />
              </div>
            )}
          </Document>

          {/* Navigation Controls */}
          {!isLoading && !error && numPages > 0 && (
            <div className="flex flex-col items-center gap-2 mt-4">
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={goToPrevPage}
                  disabled={pageNumber <= MIN_PAGE}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:bg-gray-400"
                >
                  <ChevronLeftIcon className="h-5 w-5" />
                  Previous
                </button>
                <span className="text-gray-600">
                  Page {pageNumber} of {MAX_PAGE}
                </span>
                <button
                  onClick={goToNextPage}
                  disabled={pageNumber >= MAX_PAGE}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:bg-gray-400"
                >
                  Next
                  <ChevronRightIcon className="h-5 w-5" />
                </button>
              </div>
              <p className="text-sm text-gray-500">Showing pages 15-22 of the syllabus</p>
            </div>
          )}
        </div>

        {/* Download Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleDownload}
            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
            Download Complete Syllabus
          </button>
        </div>
      </div>
    </div>
  );
};

export default Syllabus; 