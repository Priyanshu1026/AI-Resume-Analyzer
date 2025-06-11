"use client";
import { useMemo, useState } from "react";
import ResumeUploader from "@/components/resumeUploader";
import ResumeAnalysisResult, { ResumeData } from "@/components/resumeAnalysisResult";
import quotes from "@/utils/quotes";
import TypingAnimation from '@/components/typingAnimation';
import Header from "@/components/landingPage/header";

export default function Home() {
  const [parsedData, setParsedData] = useState<ResumeData | null>(null);
  const [loading, setLoading] = useState(false);
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  // Pick random animation when loading starts
  const animationType = useMemo(() => {
    // const animations = ["wave"];
    const animations = ["morph", "wave", "dots", "pulse", "orbit"];
    return animations[Math.floor(Math.random() * animations.length)];
  }, [loading]);

  return (
    <main className="min-h-screen p-8">
      <Header />
      <ResumeUploader
        setParsedData={setParsedData}
        setLoading={setLoading}
        loading={loading}
      />

      {loading && (
        <div className="flex flex-col items-center justify-center mt-10 space-y-6">
          {animationType === "morph" && (
            <div className="w-12 h-12 bg-blue-500 morph"></div>
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
            <div className="bg-blue-500 pulse"></div>
          )}

          {animationType === "orbit" && (
            <div className="orbit-loader">
              <div className="orbit-ring"></div>
              <div className="orbit-ring"></div>
              <div className="orbit-ring"></div>
            </div>
          )}

          <p className="text-lg text-gray-600 italic text-center max-w-lg">
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
