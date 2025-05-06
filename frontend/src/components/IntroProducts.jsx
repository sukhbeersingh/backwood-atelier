import React from 'react';

const IntroProducts = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center p-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 h-full">
        <div className="bg-[#C4CDD3] p-4 flex items-center justify-center drop-shadow-lg">
          <img src="/up-in-air.png" alt="Image 1" />
        </div>
        <div className="bg-[#C4CDD3] p-4 flex items-center justify-center drop-shadow-lg">
          <img src="/rattan-rocking-armchair-3.png" alt="Image 2" />
        </div>
      </div>
    </div>
  );
};

export default IntroProducts;