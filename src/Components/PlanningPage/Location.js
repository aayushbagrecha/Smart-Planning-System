import React from 'react';

export const Location = ({ currentLocation, desiredDestination, onCurrentLocationChange, onDesiredDestinationChange }) => {
  return (
    <div className="mb-4 flex space-x-4">
      {/* Current Location */}
      <div className="flex-1">
        <label className="block mb-2 text-gray-700 font-semibold">Current Location</label>
        <input
          type="text"
          value={currentLocation}
          onChange={(e) => onCurrentLocationChange(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your current location"
        />
      </div>

      {/* Desired Destination */}
      <div className="flex-1">
        <label className="block mb-2 text-gray-700 font-semibold">Desired Destination</label>
        <input
          type="text"
          value={desiredDestination}
          onChange={(e) => onDesiredDestinationChange(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your desired destination"
        />
      </div>
    </div>
  );
};
