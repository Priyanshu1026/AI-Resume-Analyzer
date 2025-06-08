'use client';
import { useEffect, useState } from 'react';

interface AnimatedLinkTextProps {
  text: string;
  delay?: number;
}

const getRandomChar = (start: string, end: string, progress: number) => {
  const startCode = start.charCodeAt(0);
  const endCode = end.charCodeAt(0);
  const code = Math.round(startCode + (endCode - startCode) * progress);
  return String.fromCharCode(code);
};

const AnimatedLinkText = ({ text, delay = 0 }: AnimatedLinkTextProps) => {
  const [displayedText, setDisplayedText] = useState<string[]>(Array(text.length).fill('A'));

  useEffect(() => {
    let animationFrame: number;
    const startTime = performance.now();

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime - delay;
      const newDisplayed = [...displayedText];

      for (let i = 0; i < text.length; i++) {
        const targetChar = text[i];
        const progress = Math.min(1, Math.max(0, (elapsed - i * 50) / 400)); // per-letter delay
        if (progress >= 1) {
          newDisplayed[i] = targetChar;
        } else {
          newDisplayed[i] = getRandomChar('A', targetChar.toUpperCase(), progress);
        }
      }

      setDisplayedText(newDisplayed);

      if (newDisplayed.join('') !== text) {
        animationFrame = requestAnimationFrame(update);
      }
    };

    animationFrame = requestAnimationFrame(update);

    return () => cancelAnimationFrame(animationFrame);
  }, [text, delay]);

  return (
    <span className="inline-block text-white tracking-wide">
      {displayedText.map((char, i) => (
        <span key={i}>{char}</span>
      ))}
    </span>
  );
};

export default AnimatedLinkText;
