import React from 'react';
import { useNavigate } from 'react-router-dom';
import FloatingHearts from '../components/FloatingHearts';
import { memoryPhotos } from '../assets/memoryPhotos';

const Letter = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-yellow-100 flex items-center justify-center p-4 relative overflow-hidden">
      <FloatingHearts />
      
      <div className="relative z-10 max-w-2xl w-full">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[88%] sm:w-[85%] md:w-[80%] pointer-events-none">
              <div className="memory-frame memory-fade-in memory-float memory-blur">
            <img
              src={memoryPhotos.letter}
              alt="Soft beach memory"
              className="memory-image"
            />
          </div>
        </div>

        {/* Letter Card */}
        <div className="bg-[#FFF8DC] border-[5px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12 relative">
          {/* Cat paw decorations */}
          <div className="absolute top-4 left-4 text-3xl opacity-60">🐾</div>
          <div className="absolute top-4 right-4 text-3xl opacity-60">🐾</div>
          <div className="absolute bottom-4 left-4 text-3xl opacity-60">🐾</div>
          <div className="absolute bottom-4 right-4 text-3xl opacity-60">🐾</div>

          {/* Letter Content */}
          <div 
            className="space-y-6 text-gray-800 text-lg md:text-xl leading-relaxed"
            style={{ fontFamily: 'Dancing Script, cursive' }}
            data-testid="letter-content"
          >
            <p>
              We were classmates once, then after 7th you vanished like a discontinued TV character.
              Tried finding you for years, even texted a random number once… still not sure whose parent I accidentally greeted.
            </p>

            <p>
              Finally found your Instagram, hit follow instantly, and spent way too long figuring out how to start a convo.
              Then I saw you liking F1 posts and thought, “Nice. Conversation starter acquired.”
            </p>

            <p>
              We started talking again somehow, and I realized your nonchalant vibe and weirdly unique humor are actually… pretty great.
              Yeah, it might be early to say this, but sometimes it’s better not to delay.
            </p>
          </div>

          {/* Button */}
          <div className="flex justify-center mt-10">
            <button
              onClick={() => navigate('/valentine')}
              className="bg-[#E6E6FA] border-4 border-black px-8 py-3 text-lg font-bold text-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] transition-all duration-150"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              data-testid="continue-button"
            >
              Continue 💌
            </button>
          </div>
        </div>

        {/* Floating stickers around the letter */}
        <div className="absolute -top-8 -left-8 text-5xl bounce-in" style={{ animationDelay: '0.2s' }}>💝</div>
        <div className="absolute -top-8 -right-8 text-5xl bounce-in" style={{ animationDelay: '0.4s' }}>💕</div>
        <div className="absolute -bottom-8 -left-8 text-5xl bounce-in" style={{ animationDelay: '0.6s' }}>💗</div>
        <div className="absolute -bottom-8 -right-8 text-5xl bounce-in" style={{ animationDelay: '0.8s' }}>💓</div>
      </div>
    </div>
  );
};

export default Letter;
