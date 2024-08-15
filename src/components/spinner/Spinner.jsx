import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[20px] h-[20px] border-[2px] border-t-[2px] border-gray-200 rounded-full animate-spin border-t-[var(--accent-color)]"></div>
    </div>
  );
};

export default Spinner;
