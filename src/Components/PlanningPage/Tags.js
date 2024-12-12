import React, { useState } from 'react';

export const Tags = ({ tags, onChange, maxTags = 10 }) => {
  const [currentTag, setCurrentTag] = useState('');

  const handleAddTag = () => {
    const trimmedTag = currentTag.trim();
    if (trimmedTag && !tags.includes(trimmedTag) && tags.length < maxTags) {
      onChange([...tags, trimmedTag]);
      setCurrentTag('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    onChange(tags.filter(tag => tag !== tagToRemove));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };

  return (
    <div className="mb-4">
      <label className="block mb-2 text-gray-700">Interests / Tags</label>
      <div className="flex flex-wrap items-center p-2 border rounded-lg focus-within:ring-2 focus-within:ring-blue-500">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full mr-2 mb-2 flex items-center"
          >
            {tag}
            <button
              type="button"
              onClick={() => handleRemoveTag(tag)}
              className="ml-1 text-red-500 hover:text-red-700"
              aria-label={`Remove ${tag}`}
            >
              ×
            </button>
          </span>
        ))}
        
        <div className="flex flex-grow">
          <input
            type="text"
            value={currentTag}
            onChange={(e) => setCurrentTag(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-grow p-1 focus:outline-none"
            placeholder="Add an interest or tag"
            aria-label="Add a new tag"
          />
          
        </div>
      </div>
      {tags.length >= maxTags && (
        <p className="text-sm text-red-500 mt-1">Maximum number of tags reached.</p>
      )}
    </div>
  );
};
