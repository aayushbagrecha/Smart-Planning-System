import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export const DateRange = ({ startDate, endDate, onChange }) => {
  return (
    <div className="flex justify-between mb-4">
      <div className="w-1/2 mr-2">
        <label className="block mb-2 text-gray-700">Start Date</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => onChange(date, endDate)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="w-1/2 ml-2">
        <label className="block mb-2 text-gray-700">End Date</label>
        <DatePicker
          selected={endDate}
          onChange={(date) => onChange(startDate, date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};