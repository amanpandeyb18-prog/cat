import React from 'react';

const FloatingHearts = () => {
  const hearts = Array(8).fill('💖');
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart, index) => (
        <div
          key={index}
          className="absolute text-3xl floating-slow"
          style={{
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
            animationDelay: `${index * 0.7}s`,
            animationDuration: `${4 + Math.random() * 2}s`,
            opacity: 0.5
          }}
        >
          {heart}
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;