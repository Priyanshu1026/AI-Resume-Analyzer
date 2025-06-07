'use client';
function Insight({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="insight-item flex items-start space-x-2">
      <span className="insight-icon text-xl">{icon}</span>
      <div className="insight-content">
        <h4 className="font-semibold">{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
}
const SampleResults = () => (
  <section className="sample-results py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-4">See What You'll Get</h2>
            <p className="subtitle mb-10">Our AI provides detailed analysis and actionable insights to transform your resume into a job-winning document.</p>
            <div className="results-container grid md:grid-cols-2 gap-6">
              {/* Analysis Panel */}
              <div className="results-panel p-6 bg-white shadow rounded-lg">
                <div className="panel-header flex items-center mb-4">
                  <span className="panel-icon text-2xl">📊</span>
                  <h3 className="panel-title text-xl font-semibold ml-2">Overall Score & Analysis</h3>
                </div>
                <div className="score-display flex items-center justify-center my-6">
                  <div className="score-circle w-20 h-20 flex items-center justify-center rounded-full bg-indigo-100">
                    <span className="score-text text-2xl font-bold">78</span>
                  </div>
                </div>
                <div className="score-label text-center mb-4">Resume Score</div>
                <div className="space-y-4">
                  <Insight icon="✅" title="Strong Technical Skills Section" desc="Your technical skills are well-organized and relevant to your target role." />
                  <Insight icon="⚡" title="Good Use of Action Verbs" desc="You effectively use strong action verbs like \“ implemented,\“ \“optimized,\“ and \“led.\“" />
                  <Insight icon="📈" title="Quantified Achievements" desc="Several bullet points include metrics, showing measurable impact of your work." />
                </div>
              </div>

              {/* Improvement Panel */}
              <div className="results-panel p-6 bg-white shadow rounded-lg">
                <div className="panel-header flex items-center mb-4">
                  <span className="panel-icon text-2xl">🚀</span>
                  <h3 className="panel-title text-xl font-semibold ml-2">Improvement Suggestions</h3>
                </div>
                <div className="space-y-4">
                  <Insight icon="⚠️" title="Add More Quantified Results" desc="Include specific numbers for 3 more achievements to demonstrate impact more clearly." />
                  <Insight icon="📝" title="Strengthen Your Summary" desc="Your professional summary could better highlight your unique value proposition and career goals." />
                  <div className="improvement-item">
                    <span className="insight-icon">🎯</span>
                    <div className="improvement-content">
                      <h4 className="font-semibold">Optimize for Keywords</h4>
                      <p>Add these missing industry keywords to improve ATS compatibility:</p>
                      <div className="keyword-tags mt-2 flex flex-wrap gap-2">
                        <span className="keyword-tag">React</span>
                        <span className="keyword-tag">Node.js</span>
                        <span className="keyword-tag missing-tag">Docker</span>
                        <span className="keyword-tag missing-tag">AWS</span>
                        <span className="keyword-tag missing-tag">CI/CD</span>
                      </div>
                    </div>
                  </div>
                  <Insight icon="🎨" title="Format Improvements" desc="Consider using consistent bullet points and improving white space for better readability." />
                </div>
              </div>
            </div>
          </div>
        </section>
);

export default SampleResults;
