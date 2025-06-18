"use client";
import { useMemo, useState } from "react";
import ResumeUploader from "@/components/resumeUploader";
import ResumeAnalysisResult, { ResumeData } from "@/components/resumeAnalysisResult";
import quotes from "@/utils/quotes";
import TypingAnimation from '@/components/typingAnimation';

export default function Home() {
  const [parsedData, setParsedData] = useState<ResumeData | null>(null);
  const [loading, setLoading] = useState(false);
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  // Pick random animation when loading starts
  const animationType = useMemo(() => {
    const animations = ["morph", "wave", "dots", "pulse", "orbit"];
    return animations[Math.floor(Math.random() * animations.length)];
  }, [loading]);

  return (
    <main className="min-h-screen p-8">
      <ResumeUploader
        setParsedData={setParsedData}
        setLoading={setLoading}
        loading={loading}
      />

      {loading && (
        <div className="flex flex-col items-center justify-center mt-10 space-y-6">
          {animationType === "morph" && (
            <div
              className="w-12 h-12 morph"
              style={{
                background: 'radial-gradient(circle, #00d4ff, #7c4dff)'
              }}
            ></div>
          )}

          {animationType === "wave" && (
            <div className="wave-container">
              <div className="wave-bar"></div>
              <div className="wave-bar"></div>
              <div className="wave-bar"></div>
              <div className="wave-bar"></div>
              <div className="wave-bar"></div>
            </div>
          )}

          {animationType === "dots" && (
            <div className="bounce-dots">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          )}

          {animationType === "pulse" && (
            <div
              className="w-12 h-12 pulse"
              style={{ background: 'radial-gradient(circle, #00ff41 0%, #39ff14 40%, transparent 80%)' }}
            ></div>
          )}

          {animationType === "orbit" && (
            <div className="orbit-loader">
              <div className="orbit-ring"></div>
              <div className="orbit-ring"></div>
              <div className="orbit-ring"></div>
            </div>
          )}

          <p className="text-lg text-[#f0f8ff] italic text-center max-w-lg">
            <TypingAnimation
              text={randomQuote}
              speed={50}
              loop={true}
              cursorClassName="animate-ping text-pink-500"
            />
          </p>
        </div>
      )}

      {!loading && parsedData && <ResumeAnalysisResult data={parsedData} />}
    </main>
  );
}