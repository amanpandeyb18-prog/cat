import React from 'react';

const FloatingCats = () => {
  const cats = ['🐱', '😺', '😸', '😻', '🐈'];
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {cats.map((cat, index) => (
        <div
          key={index}
          className="absolute text-4xl floating"
          style={{
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
            opacity: 0.6
          }}
        >
          {cat}
        </div>
      ))}
    </div>
  );
};

export default FloatingCats;