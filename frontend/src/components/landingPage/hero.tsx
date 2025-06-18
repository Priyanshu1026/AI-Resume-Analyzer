'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

function triggerUpload() {
  const uploadArea = document.querySelector('.upload-area') as HTMLElement;
  uploadArea.style.background = 'rgba(15, 15, 35, 0.95)';
  uploadArea.style.borderColor = 'rgba(99, 102, 241, 0.8)';
  uploadArea.style.boxShadow = '0 25px 50px rgba(99, 102, 241, 0.3)';

  setTimeout(() => {
    uploadArea.style.background = 'rgba(15, 15, 35, 0.8)';
    uploadArea.style.borderColor = 'rgba(99, 102, 241, 0.4)';
    uploadArea.style.boxShadow = 'none';
  }, 200);

  alert('File upload functionality would be implemented here!');
}

const Hero = () => {
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const subtitle = subtitleRef.current;
    if (subtitle) {
      const words = subtitle.textContent?.split(' ') ?? [];
      subtitle.innerHTML = words
        .map((word) => `<span class="inline-block mr-1 word">${word}</span>`)
        .join(' ');
    }

    const handleClick = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      for (let i = 0; i < 8; i++) {
        setTimeout(() => {
          createSparkle(x + (Math.random() - 0.5) * 100, y + (Math.random() - 0.5) * 100);
        }, i * 100);
      }
    };

    const heading = headingRef.current;
    if (heading) {
      heading.addEventListener('click', handleClick);
    }

    return () => {
      if (heading) {
        heading.removeEventListener('click', handleClick);
      }
    };
  }, []);

  const createSparkle = (x: number, y: number) => {
    const sparkle = document.createElement('div');
    const size = Math.random() * 8 + 4;

    sparkle.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      width: ${size}px;
      height: ${size}px;
      background: linear-gradient(45deg, #00d4ff, #5a67d8, #f093fb);
      border-radius: 50%;
      pointer-events: none;
      z-index: 1000;
      box-shadow: 0 0 ${size * 2}px rgba(0, 212, 255, 0.6);
      animation: sparkleOut 1.2s ease-out forwards;
    `;

    document.body.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 1200);
  };

  return (
    <>
      <section className="hero relative overflow-hidden">
        <div className="floating-elements absolute inset-0">
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="hero-content text-center py-16">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <h1 ref={headingRef} className="hero-heading font-bold mb-4 cursor-pointer">
              <span>Transform Your Resume with AI</span>
            </h1>

            <p
              ref={subtitleRef}
              id="subtitle"
              className="hero-subtitle mb-8 text-gray-300"
            >
              <span>Get instant, personalized feedback on your resume. Our advanced AI analyzes every detail and provides actionable suggestions to help you land your dream job.</span>
            </p>

            {/* <div className="upload-area cursor-pointer p-6 border rounded-lg" onClick={triggerUpload}>
              <div className="upload-content text-center">
                <span className="upload-icon text-3xl">📄</span>
                <div className="upload-text font-medium">Drop your resume here</div>
                <div className="upload-subtext text-sm text-gray-400">or click to browse • PDF, DOC, DOCX supported</div>
              </div>
            </div> */}

            <Link href="/analyze" className="cta-button inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition">
              <span>Analyze Your Resume</span>
              <span className="cta-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
