import React from 'react';

interface CountdownDisplayProps {
  value: number;
  label: string;
  isDanger?: boolean; // Optional: to change color when time is low
}

const CountdownDisplay: React.FC<CountdownDisplayProps> = ({ value, label, isDanger }) => {
  return (
    <div className="flex flex-col items-center mx-2">
      <div 
        className={`
          text-3xl md:text-5xl font-bold p-3 md:p-4 rounded-lg shadow-lg w-16 h-16 md:w-24 md:h-24 flex items-center justify-center
          ${isDanger ? 'bg-red-500 text-white' : 'bg-blue-600 text-white'}
        `}
      >
        {String(value).padStart(2, '0')}
      </div>
      <div className={`mt-2 text-sm md:text-base font-medium ${isDanger ? 'text-red-600' : 'text-gray-700'}`}>
        {label}
      </div>
    </div>
  );
};

export default CountdownDisplay;