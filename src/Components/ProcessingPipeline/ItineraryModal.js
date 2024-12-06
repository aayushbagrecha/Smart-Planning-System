import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

export const ItineraryModal = ({ isOpen, onClose, itinerary }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-[13%] right-[2%] w-1/2 h-[80%] bg-white shadow-lg z-50 overflow-hidden rounded-xl">
      {/* Modal Header */}
      <div className="px-6 py-4 border-b border-gray-200 bg-white sticky top-0 z-10">
        <h2 className="text-2xl font-bold text-gray-800">Your Travel Itinerary</h2>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 focus:outline-none"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Modal Content */}
      <div className="h-[calc(100%-8rem)] overflow-y-auto px-6 py-4">
        {!itinerary ? (
          <div className="flex justify-center items-center h-full">
            <div className="flex flex-col items-center gap-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p className="text-gray-600">Generating your personalized itinerary...</p>
            </div>
          </div>
        ) : itinerary.includes('error') ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-red-600 py-4 text-center">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {itinerary}
            </div>
          </div>
        ) : (
          <div className="prose max-w-none 
            prose-headings:font-bold 
            prose-h1:text-3xl prose-h1:mt-8 prose-h1:mb-6 
            prose-h2:text-2xl prose-h2:mt-6 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-4 prose-h3:mb-3
            prose-p:my-4
            prose-ul:my-4 prose-ul:list-none
            prose-li:my-2
            prose-table:mt-6 prose-table:mb-8
            prose-hr:my-8
            prose-table:w-full
            prose-th:bg-gray-100 prose-th:p-3
            prose-td:p-3 prose-td:border
            prose-th:border
            [&>h1:first-child]:mt-0"
          >
            <ReactMarkdown>{itinerary}</ReactMarkdown>
          </div>
        )}
      </div>

      {/* Modal Footer */}
      <div className="px-6 py-4 border-t border-gray-200 bg-white sticky bottom-0 flex justify-between items-center">
        <div className="text-sm text-gray-500">
          {!itinerary?.includes('error') && 'Your itinerary is ready!'}
        </div>
        <div className="flex gap-4">
          {!itinerary?.includes('error') && (
            <button
              onClick={() => window.print()}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print
            </button>
          )}
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center gap-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

ItineraryModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  itinerary: PropTypes.string
};

export default ItineraryModal;