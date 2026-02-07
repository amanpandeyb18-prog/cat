import React, { useState } from 'react';
import FloatingCats from '../components/FloatingCats';
import FloatingHearts from '../components/FloatingHearts';
import Confetti from '../components/Confetti';
import { memoryPhotos } from '../assets/memoryPhotos';

const Valentine = () => {
  const [noClickCount, setNoClickCount] = useState(0);
  const [yesClicked, setYesClicked] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  const yesButtonScale = 1 + (noClickCount * 0.15);

  const handleNoClick = (e) => {
    e.preventDefault();
    setNoClickCount(prev => prev + 1);
    
    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 100;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  const handleYesClick = () => {
    setYesClicked(true);
  };

  if (yesClicked) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-pink-400 flex items-center justify-center p-4 relative overflow-hidden">
        <Confetti trigger={true} />
        <FloatingHearts />
        <FloatingCats />
        
        <div className="relative z-10 max-w-2xl w-full text-center space-y-8">
          <div className="flex justify-center">
            <div className="gif-sticker wiggle">
              <img
                src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
                alt="Excited cat celebration"
                loading="lazy"
              />
            </div>
          </div>
          <div className="text-9xl bounce-in" data-testid="success-emoji">🎉</div>
          
          <h1 
            className="text-4xl md:text-6xl font-bold text-gray-900"
            style={{ fontFamily: 'Pacifico, cursive' }}
            data-testid="success-message"
          >
            You just made my day 💞
          </h1>
          
          <div className="flex justify-center gap-6 text-6xl">
            <span className="bounce-in" style={{ animationDelay: '0.2s' }}>💖</span>
            <span className="bounce-in" style={{ animationDelay: '0.4s' }}>😺</span>
            <span className="bounce-in" style={{ animationDelay: '0.6s' }}>💝</span>
          </div>
          
          <p 
            className="text-xl md:text-2xl text-gray-800 font-semibold mt-8"
            style={{ fontFamily: 'Nunito, sans-serif' }}
            data-testid="success-subtext"
          >
            Can't wait for our first Valentine's together! 🌸
          </p>
          <p
            className="text-lg md:text-xl text-gray-800"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            Officially queued: snacks, soft hugs, and a tiny happy dance. 💃🕺
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 flex items-center justify-center p-4 relative overflow-hidden">
      <FloatingCats />
      <FloatingHearts />
      
      <div className="relative z-10 max-w-2xl w-full text-center space-y-12">
        <div className="absolute -top-6 left-2 sm:left-6">
          <div className="polaroid-frame polaroid-tilt-left memory-float">
            <img
              src={memoryPhotos.polaroidTwo}
              alt="Beach memory polaroid"
              className="polaroid-image"
            />
          </div>
        </div>
        <div className="absolute -top-4 right-2 sm:right-6">
          <div className="polaroid-frame polaroid-tilt-right memory-float">
            <img
              src={memoryPhotos.polaroidOne}
              alt="Beach memory snapshot"
              className="polaroid-image"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="gif-sticker floaty-giggle">
            <img
              src="https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif"
              alt="Cute cat waving"
              loading="lazy"
            />
          </div>
        </div>
        {/* Cat GIF */}
        <div className="flex justify-center">
          <div className="text-9xl wiggle" data-testid="valentine-cat">
            😻
          </div>
        </div>

        {/* Main Question */}
        <h1 
          className="text-4xl md:text-6xl font-bold text-gray-900"
          style={{ fontFamily: 'Pacifico, cursive' }}
          data-testid="valentine-question"
        >
          Will you be my Valentine? 💖
        </h1>
        <p
          className="text-lg md:text-xl text-gray-800"
          style={{ fontFamily: 'Nunito, sans-serif' }}
        >
          I’ve got snacks, jokes, and a professional cat chaperone ready. 🐾
        </p>

        {/* Please message after 3 NO clicks */}
        {noClickCount >= 3 && (
          <div className="bounce-in" data-testid="please-message">
            <p 
              className="text-2xl md:text-3xl text-gray-800 font-semibold"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              Please? 🥺🐱
            </p>
            <div className="text-5xl mt-4">🪧</div>
          </div>
        )}

        {/* Nice try message */}
        {noClickCount > 0 && noClickCount < 3 && (
          <div className="bounce-in bg-white border-4 border-black px-6 py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] inline-block" data-testid="nice-try-message">
            <p className="text-xl font-bold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
              😼 Nice try.
            </p>
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 relative">
          {/* YES Button */}
          <button
            onClick={handleYesClick}
            className="bg-[#FFB6D9] border-4 border-black px-12 py-5 text-2xl font-bold text-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] transition-all duration-150 uppercase tracking-wide"
            style={{ 
              fontFamily: 'Poppins, sans-serif',
              transform: `scale(${yesButtonScale})`,
              transformOrigin: 'center'
            }}
            data-testid="yes-button"
          >
            YES 💕
          </button>

          {/* NO Button */}
          <button
            onClick={handleNoClick}
            className="bg-[#E6E6FA] border-4 border-black px-12 py-5 text-2xl font-bold text-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-150 uppercase tracking-wide"
            style={{ 
              fontFamily: 'Poppins, sans-serif',
              position: noClickCount > 0 ? 'fixed' : 'relative',
              left: noClickCount > 0 ? `${noButtonPosition.x}px` : 'auto',
              top: noClickCount > 0 ? `${noButtonPosition.y}px` : 'auto',
              transition: 'left 0.3s ease, top 0.3s ease'
            }}
            data-testid="no-button"
          >
            NO
          </button>
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center gap-6 text-4xl mt-8">
          <span className="floating" style={{ animationDelay: '0s' }}>💐</span>
          <span className="floating" style={{ animationDelay: '0.3s' }}>🌹</span>
          <span className="floating" style={{ animationDelay: '0.6s' }}>🌷</span>
        </div>
      </div>
    </div>
  );
};

export default Valentine;
