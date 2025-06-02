"use client";
import { useMemo, useState } from "react";

export default function Home() {
  const [loading] = useState(false);

  const quotes = [
    "“Success usually comes to those who are too busy to be looking for it.” – Henry David Thoreau",
    "“Choose a job you love, and you will never have to work a day in your life.” – Confucius",
    "“Opportunities don’t happen. You create them.” – Chris Grosser",
    "“Your resume is not just a list of jobs, it's a story of who you are.”",
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  // Pick random animation when loading starts
  const animationType = useMemo(() => {
    // const animations = ["morph", "wave", "dots", "pulse", "orbit"];
    const animations = ["dots"];
    return animations[Math.floor(Math.random() * animations.length)];
  }, [loading]);

  return (
        <div className="flex flex-col items-center justify-center mt-10 space-y-6">
          {animationType === "morph" && (
            <div className="w-12 h-12 bg-blue-500 morph"></div>
          )}

          {animationType === "dots" && (
            <div className="bounce-dots bg-red-500">
              <div className="dot scale-50"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          )}

          {animationType === "pulse" && (
            <div className="bg-blue-500 pulse"></div>
          )}

          <p className="text-lg text-gray-600 italic text-center max-w-lg">{randomQuote}</p>
        </div>
      )}
