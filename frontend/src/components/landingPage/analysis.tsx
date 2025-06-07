'use client';

const SampleResults = () => (
  <section className="sample-results py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-4">See What You'll Get</h2>
      <p className="subtitle text-gray-600 mb-8">
        Our AI provides detailed analysis and actionable insights to transform your resume into a job-winning document.
      </p>
      <div className="results-container grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Overall Score & Analysis Panel */}
        <div className="results-panel p-6 border rounded-lg shadow">
          <div className="panel-header flex items-center mb-4">
            <span className="panel-icon text-2xl mr-2">📊</span>
            <h3 className="panel-title text-xl font-semibold">Overall Score & Analysis</h3>
          </div>
          <div className="score-display flex items-center mb-4">
            <div className="score-circle w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
              <span className="score-text text-2xl font-bold text-indigo-600">78</span>
            </div>
            <div className="score-label text-gray-700">Resume Score</div>
          </div>
          {/* Insights */}
          <div className="insight-item flex items-start mb-4">
            <span className="insight-icon text-xl mr-2">✅</span>
            <div className="insight-content">
              <h4 className="font-semibold">Strong Technical Skills Section</h4>
              <p className="text-gray-600">Your technical skills are well-organized and relevant to your target role.</p>
            </div>
          </div>
          {/* Add more insight items as needed */}
        </div>
        {/* Improvement Suggestions Panel */}
        <div className="results-panel p-6 border rounded-lg shadow">
          <div className="panel-header flex items-center mb-4">
            <span className="panel-icon text-2xl mr-2">🚀</span>
            <h3 className="panel-title text-xl font-semibold">Improvement Suggestions</h3>
          </div>
          {/* Improvement Items */}
          <div className="improvement-item flex items-start mb-4">
            <span className="insight-icon text-xl mr-2">⚠️</span>
            <div className="improvement-content">
              <h4 className="font-semibold">Add More Quantified Results</h4>
              <p className="text-gray-600">Include specific numbers for 3 more achievements to demonstrate impact more clearly.</p>
            </div>
          </div>
          {/* Add more improvement items as needed */}
        </div>
      </div>
    </div>
  </section>
);

export default SampleResults;
