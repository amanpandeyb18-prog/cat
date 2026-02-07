import React from 'react';

const StickerPop = ({ emoji, show, message }) => {
  if (!show) return null;
  
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bounce-in">
      <div className="bg-white border-4 border-black px-6 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
        <div className="text-5xl mb-2">{emoji}</div>
        <div className="text-lg font-semibold text-gray-800">{message}</div>
      </div>
    </div>
  );
};

export default StickerPop;