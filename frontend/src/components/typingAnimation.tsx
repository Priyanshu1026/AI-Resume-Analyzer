// components/TypingAnimation.tsx
"use client";
import { useState, useEffect, FC, useRef } from 'react';

// Define the props for the component
interface TypingAnimationProps {
  text: string;
  speed?: number;
  loop?: boolean;
  cursorClassName?: string;
  className?: string; // Allow passing additional class names for the main span
}

const TypingAnimation: FC<TypingAnimationProps> = ({
  text,
  speed = 150,
//Very small speed (e.g., 10): The animation will be very fast.
//Moderate speed (e.g., 150): This is a typical, readable typing speed.
//Large speed (e.g., 1000, 5000, or more): The animation will be very slow. For instance, speed={60000} would mean one character types or deletes per minute.
  loop = true,
  cursorClassName = 'animate-pulse',
  className = '',
}) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  // Ref to store the timeout ID for the pause before deleting
  const deletePauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear any pending pause-before-delete timeout when dependencies change (e.g., speed, text)
    // This is important to prevent an old timeout (with old speed) from firing.
    if (deletePauseTimeoutRef.current) {
      clearTimeout(deletePauseTimeoutRef.current);
      deletePauseTimeoutRef.current = null;
    }

    if (!text || text.length === 0) {
      setDisplayedText('');
      setCurrentIndex(0);
      setIsDeleting(false);
      return;
    }

    // This effect re-runs if `currentIndex`, `isDeleting`, `text`, `loop`, or `speed` change.
    // Because `currentIndex` and `displayedText.length` (implicitly through `displayedText` state updates)
    // change with each character, this interval is effectively a "setTimeout" for each step.
    // This means a change in `speed` will apply to the next character typed/deleted.

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (currentIndex < text.length) {
          setDisplayedText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        } else {
          // All text typed
          if (loop) {
            // Schedule deletion: Store timeout ID in ref
            deletePauseTimeoutRef.current = setTimeout(() => {
              setIsDeleting(true);
              // No need to change currentIndex here; deletion logic works on displayedText.length
            }, speed * 5); // Use the current speed from props for the pause
          }
          // If not looping, animation stops here as no more state changes are scheduled by handleTyping.
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          // currentIndex can remain at text.length or track displayedText.length while deleting
        } else {
          // All text deleted
          setIsDeleting(false);
          setCurrentIndex(0); // Reset for the next loop cycle
          // If not looping, it would have stopped earlier or will stop now.
        }
      }
    };

    // If not looping and text is fully typed and not deleting, don't start an interval.
    if (!loop && currentIndex >= text.length && !isDeleting) {
      // Ensure the full text is displayed if it somehow wasn't perfectly set.
      if (displayedText !== text) {
        setDisplayedText(text);
      }
      return;
    }
    
    // If we are currently in the "pause before delete" phase (timeout is set),
    // don't run the main typing interval. The timeout will trigger the next state change.
    if (deletePauseTimeoutRef.current && !isDeleting && currentIndex >= text.length) {
        return;
    }


    const typingInterval = setInterval(handleTyping, speed);

    // Cleanup function: clears the interval and any pending deletion timeout
    return () => {
      clearInterval(typingInterval);
      if (deletePauseTimeoutRef.current) {
        clearTimeout(deletePauseTimeoutRef.current);
        deletePauseTimeoutRef.current = null;
      }
    };
  }, [currentIndex, isDeleting, displayedText, text, loop, speed]); // `displayedText` is included because deletion logic depends on its length.
                                                                  // While this causes frequent effect re-runs, it's a common pattern for such animations.

  return (
    <span className={`relative ${className}`}>
      {displayedText}
      {/* Blinking cursor */}
      <span
        className={`absolute -right-0.5 bottom-0 text-inherit ${cursorClassName}`}
        style={{ lineHeight: 'inherit' }} // Ensure cursor aligns with text
      >
        |
      </span>
    </span>
  );
};

export default TypingAnimation;
