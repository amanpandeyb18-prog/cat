import { useEffect } from 'react';
import confetti from 'canvas-confetti';

const Confetti = ({ trigger }) => {
  useEffect(() => {
    if (trigger) {
      const duration = 3000;
      const end = Date.now() + duration;

      const colors = ['#FFB6D9', '#E6E6FA', '#89CFF0', '#FFE5EC', '#FFC0CB'];

      (function frame() {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }());
    }
  }, [trigger]);

  return null;
};

export default Confetti;