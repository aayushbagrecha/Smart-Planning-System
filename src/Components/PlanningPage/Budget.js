import React from 'react';

export const Budget = ({ budget, onChange }) => {
  const handleMinChange = (e) => {
    const newMin = Math.min(Number(e.target.value), budget[1] - 10);
    onChange([newMin, budget[1]]);
  };

  const handleMaxChange = (e) => {
    const newMax = Math.max(Number(e.target.value), budget[0] + 10);
    onChange([budget[0], newMax]);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Minimum Budget: ${budget[0].toLocaleString()}
          </label>
          <input
            type="range"
            min={0}
            max={25000}
            value={budget[0]}
            onChange={handleMinChange}
            step={100}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-auto cursor-pointer accent-blue-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Maximum Budget: ${budget[1].toLocaleString()}
          </label>
          <input
            type="range"
            min={0}
            max={25000}
            value={budget[1]}
            onChange={handleMaxChange}
            step={50}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-auto cursor-pointer accent-blue-600"
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-md">
          ${budget[0].toLocaleString()}
        </div>
        <div className="text-xs text-gray-500">Budget Range</div>
        <div className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-md">
          ${budget[1].toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default Budget;