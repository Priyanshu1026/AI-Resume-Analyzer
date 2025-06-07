'use client';
function Feature({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="feature-card p-4 bg-white rounded-lg shadow">
      <span className="feature-icon text-2xl">{icon}</span>
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{desc}</p>
    </div>
  );
}
const Features = () => (
  <section className="features py-16" id="features">
          <div className="container">
            <h2 className="text-3xl font-bold mb-10">Powerful AI-Driven Analysis</h2>
            <div className="features-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Feature icon="🎯" title="Smart Content Analysis" desc="Our AI examines your resume content, identifying strengths and areas for improvement in your work experience, skills, and achievements." />
              <Feature icon="✨" title="Instant Recommendations" desc="Get personalized suggestions on how to improve your resume formatting, language, and structure to make a stronger impression." />
              <Feature icon="📊" title="ATS Optimization" desc="Coming soon: Advanced ATS score calculation to ensure your resume passes through applicant tracking systems successfully." />
              <Feature icon="🚀" title="Career Boost" desc="Transform your resume into a powerful tool that showcases your potential and helps you stand out in today's competitive job market." />
            </div>
          </div>
        </section>
);

export default Features;
