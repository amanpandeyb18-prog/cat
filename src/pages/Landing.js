import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FloatingCats from '../components/FloatingCats';
import FloatingHearts from '../components/FloatingHearts';
import { sendWebhookEvent } from '../utils/webhook';

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    sendWebhookEvent('page_visit', { page: 'landing', step: 1 });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 flex items-center justify-center p-4 relative overflow-hidden">
      <FloatingCats />
      <FloatingHearts />
      
      <div className="relative z-10 max-w-md w-full text-center space-y-8">
        {/* Cat GIF/Emoji */}
        <div className="flex justify-center mb-6">
          <div className="text-8xl wiggle" data-testid="cat-emoji">
            😺
          </div>
        </div>

        {/* Main Text */}
        <div className="space-y-4">
          <h1 
            className="text-6xl font-bold text-gray-900" 
            style={{ fontFamily: 'Pacifico, cursive' }}
            data-testid="main-greeting"
          >
            Hi 🌸
          </h1>
          
          <p 
            className="text-xl text-gray-900 font-semibold"
            style={{ fontFamily: 'Nunito, sans-serif' }}
            data-testid="subtitle"
          >
            Yes, you… <span className="font-bold text-2xl">chashmish bhondu</span> 😌
          </p>
        </div>

        {/* Button */}
        <button
          onClick={() => navigate('/letter')}
          className="bg-[#FFB6D9] border-4 border-black px-10 py-4 text-xl font-bold text-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] transition-all duration-150 uppercase tracking-wide"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          data-testid="click-here-button"
        >
          Click Here
        </button>

        {/* Decorative flowers */}
        <div className="flex justify-center gap-4 text-4xl mt-8">
          <span className="floating" style={{ animationDelay: '0s' }}>🌸</span>
          <span className="floating" style={{ animationDelay: '0.3s' }}>🌺</span>
          <span className="floating" style={{ animationDelay: '0.6s' }}>🌼</span>
        </div>
      </div>
    </div>
  );
};

export default Landing;
