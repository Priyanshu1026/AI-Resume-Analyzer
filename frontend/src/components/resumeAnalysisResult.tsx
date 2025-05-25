"use client";
import React from "react";

export interface ResumeData {
  summary: string;
  technicalSkills: string[];
  softSkills: string[];
  workExperience: {
    role: string;
    company: string;
    duration: string;
    achievement: string;
  }[];
  education: {
    degree: string;
    institution: string;
    year: string;
  }[];
  certifications: string[];
  suggestedImprovements: string[];
}

const ResumeAnalysisResult = ({ data }: { data: ResumeData }) => {
  if (!data) return null;

  const isValidArray = (arr?: any[]) => Array.isArray(arr) && arr.length > 0;
  const isNonEmpty = (str?: string) => str && str.trim() !== "";

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 border border-gray-300 rounded shadow bg-white space-y-6">
      <h2 className="text-2xl font-bold">Resume Analysis Results</h2>

      <div>
        <h3 className="text-xl font-semibold">Summary</h3>
        <p>{isNonEmpty(data.summary) ? data.summary : "N/A"}</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Technical Skills</h3>
        <ul className="list-disc list-inside">
          {isValidArray(data.technicalSkills)
            ? data.technicalSkills.map((skill, index) => <li key={index}>{skill}</li>)
            : <li>N/A</li>}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Soft Skills</h3>
        <ul className="list-disc list-inside">
          {isValidArray(data.softSkills)
            ? data.softSkills.map((skill, index) => <li key={index}>{skill}</li>)
            : <li>N/A</li>}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Work Experience</h3>
        {isValidArray(data.workExperience) ? (
          <ul className="space-y-2">
            {data.workExperience.map((exp, index) => (
              <li key={index} className="border p-3 rounded bg-gray-50">
                <p><strong>Role:</strong> {exp.role}</p>
                <p><strong>Company:</strong> {exp.company}</p>
                <p><strong>Duration:</strong> {exp.duration}</p>
                <p><strong>Achievement:</strong> {exp.achievement}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No work experience available.</p>
        )}
      </div>

      <div>
        <h3 className="text-xl font-semibold">Education</h3>
        {isValidArray(data.education) ? (
          <ul className="space-y-2">
            {data.education.map((edu, index) => (
              <li key={index} className="border p-3 rounded bg-gray-50">
                <p><strong>Degree:</strong> {edu.degree}</p>
                <p><strong>Institution:</strong> {edu.institution}</p>
                <p><strong>Year:</strong> {edu.year}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No education data available.</p>
        )}
      </div>

      <div>
        <h3 className="text-xl font-semibold">Certifications</h3>
        <ul className="list-disc list-inside">
          {isValidArray(data.certifications)
            ? data.certifications.map((cert, index) => <li key={index}>{cert}</li>)
            : <li>N/A</li>}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Suggested Improvements</h3>
        <ul className="list-disc list-inside">
          {isValidArray(data.suggestedImprovements)
            ? data.suggestedImprovements.map((imp, index) => <li key={index}>{imp}</li>)
            : <li>N/A</li>}
        </ul>
      </div>
    </div>
  );
};

export default ResumeAnalysisResult;
