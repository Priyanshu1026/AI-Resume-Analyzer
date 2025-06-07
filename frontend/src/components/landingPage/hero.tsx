'use client';
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
  return (
    <section className="hero relative">
      <div className="floating-elements absolute inset-0">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>

      <div className="container">
        <div className="hero-content text-center py-16">
          <h1 className="text-4xl font-bold mb-4">Transform Your Resume with AI</h1>
          <p className="text-lg mb-8">Get instant, personalized feedback on your resume. Our advanced AI analyzes every detail and provides actionable suggestions to help you land your dream job.</p>
          <div className="upload-area cursor-pointer p-6 border rounded-lg" onClick={triggerUpload}>
            <div className="upload-content text-center">
              <span className="upload-icon text-3xl">📄</span>
              <div className="upload-text font-medium">Drop your resume here</div>
              <div className="upload-subtext text-sm text-gray-400">or click to browse • PDF, DOC, DOCX supported</div>
            </div>
          </div>
          <button className="cta-button mt-6 px-6 py-3 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition">Analyze My Resume</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
