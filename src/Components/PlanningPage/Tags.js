import React, { useState } from 'react';

export const Tags = ({ tags, onChange }) => {
  const [currentTag, setCurrentTag] = useState('');

  const handleAddTag = () => {
    if (currentTag && !tags.includes(currentTag)) {
      onChange([...tags, currentTag]);
      setCurrentTag('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    onChange(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="mb-4">
      <label className="block mb-2 text-gray-700">Interests / Tags</label>
      <div className="flex items-center p-2 border rounded-lg focus-within:ring-2 focus-within:ring-blue-500">
        {/* Display each tag inside the input box */}
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full mr-2 flex items-center"
          >
            {tag}
            <button
              type="button"
              onClick={() => handleRemoveTag(tag)}
              className="ml-1 text-red-500 hover:text-red-700"
            >
              ×
            </button>
          </span>
        ))}
        
        {/* Input field for adding new tags */}
        <input
          type="text"
          value={currentTag}
          onChange={(e) => setCurrentTag(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAddTag()}
          className="flex-grow p-1 focus:outline-none"
          placeholder="Add an interest or tag"
        />
      </div>
    </div>
  );
};
