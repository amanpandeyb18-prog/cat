import React from 'react';
import { useNavigate } from 'react-router-dom';
import FloatingHearts from '../components/FloatingHearts';

const Letter = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-yellow-100 flex items-center justify-center p-4 relative overflow-hidden">
      <FloatingHearts />
      
      <div className="relative z-10 max-w-2xl w-full">
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
            <p className="text-2xl md:text-3xl font-semibold mb-6">Hey there! 💌</p>
            
            <p>
              We were classmates once, back in school… and then after 7th, you just vanished like a character written out of a series.
            </p>
            
            <p>
              After that we had zero contact. I even tried finding you on Instagram like a low-budget detective and failed miserably. Once after 10th I somehow got a number and texted, still not sure if it was yours or a confused parent's.
            </p>
            
            <p>
              Years later I finally found your profile and instantly hit follow like it was a limited-time offer.
              I kept thinking how to start a conversation after so long… and then I saw you liking F1 posts and thought, "This is it. This is my moment."
            </p>
            
            <p>
              Saw your stories, you looked really pretty, not gonna lie.
              And somehow… we actually started talking again.
            </p>
            
            <p>
              You're nonchalant, your humor is weirdly unique, and honestly, that's one of the best parts about you.
            </p>
            
            <p className="font-semibold italic">
              So yeah… it might be a little early to say this, but sometimes it's better not to delay.
            </p>
            
            <p className="text-xl md:text-2xl font-bold text-center mt-8">
              So… what do you say? 💖
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