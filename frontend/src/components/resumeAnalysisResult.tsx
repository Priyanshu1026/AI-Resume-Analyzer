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
  certifications: {
    name: string;
    issuer: string;
    date: string;
  }[];

  suggestedImprovements: string[];
}
const gradientColors = [
  'bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 border-emerald-300',
  'bg-gradient-to-r from-lime-100 to-lime-200 text-lime-800 border-lime-300',
  'bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 border-orange-300',
  'bg-gradient-to-r from-green-100 to-green-200 text-green-800 border-green-300',
  'bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-800 border-indigo-300',
  'bg-gradient-to-r from-teal-100 to-teal-200 text-teal-800 border-teal-300',
  'bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800 border-pink-300',
  'bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 border-yellow-300',
  'bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 border-purple-300',
  'bg-gradient-to-r from-sky-100 to-sky-200 text-sky-800 border-sky-300',
  // 'bg-gradient-to-r from-brown-100 to-brown-200 text-brown-800 border-brown-300',
  'bg-gradient-to-r from-neutral-100 to-neutral-200 text-neutral-800 border-neutral-300',
  'bg-gradient-to-r from-red-100 to-red-200 text-red-800 border-red-300',
  'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border-blue-300',
  'bg-gradient-to-r from-stone-100 to-stone-200 text-stone-800 border-stone-300',
  'bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-800 border-cyan-300',
  'bg-gradient-to-r from-slate-100 to-slate-200 text-slate-800 border-slate-300',
  'bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 border-amber-300',
];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * gradientColors.length);
  return gradientColors[randomIndex];
};

const ResumeAnalysisResult = ({ data }: { data: ResumeData }) => {
  if (!data) return null;

  const isValidArray = (arr?: any[]) => Array.isArray(arr) && arr.length > 0;
  const isNonEmpty = (str?: string) => str && str.trim() !== "";

  return (
    <div className="mx-auto my-8 p-6 space-y-6">
      <div className="page-heading">
        <h2 className="page-heading-text">
          Resume Analysis Results
        </h2>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Summary</h3>
        <p>{isNonEmpty(data.summary) ? data.summary : "N/A"}</p>
      </div>

      <div className="p-6 gradient-shift rounded-xl border border-gray-200">
        <h3 className="text-2xl font-bold mb-6 text-gray-800 relative">
          Technical Skills
          <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </h3>

        {isValidArray(data.technicalSkills) ? (
          <div className="flex flex-wrap gap-4">
            {data.technicalSkills.map((skill, index) => {
              const colorClass = getRandomColor();

              return (
                <div
                  key={index}
                  className={`px-5 py-3 rounded-full text-sm font-semibold 
              shadow-md hover:shadow-lg transform transition-all duration-300 
              hover:scale-110 hover:-translate-y-1 cursor-pointer
              border backdrop-blur-sm relative overflow-hidden
              group ${colorClass}`}
                >
                  <span className="relative z-10">{skill}</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-gray-500">N/A</p>
        )}
      </div>


      <div className="p-6 gradient-shift-counter rounded-xl border border-gray-200">
        <h3 className="text-2xl font-bold mb-6 text-gray-800 relative">
          Soft Skills
          <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </h3>

        {isValidArray(data.softSkills) ? (
          <div className="flex flex-wrap gap-4">
            {data.softSkills.map((skill, index) => {
              const colorClass = getRandomColor();

              return (
                <div
                  key={index}
                  className={`px-5 py-3 rounded-full text-sm font-semibold 
              shadow-md hover:shadow-lg transform transition-all duration-300 
              hover:scale-110 hover:-translate-y-1 cursor-pointer
              border backdrop-blur-sm relative overflow-hidden
              group ${colorClass}`}
                >
                  <span className="relative z-10">{skill}</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-gray-500">N/A</p>
        )}
      </div>

      <div className="work-experience-container">
        <h3 className="work-experience-title">Work Experience</h3>
        {isValidArray(data.workExperience) ? (
          <div className="space-y-4">
            {data.workExperience.map((exp, index) => (
              <div key={index} className="work-experience-card">
                <p className="work-experience-field">
                  <span className="work-experience-label">Role:</span>
                  <span className="work-experience-value">{exp.role}</span>
                </p>
                <p className="work-experience-field">
                  <span className="work-experience-label">Company:</span>
                  <span className="work-experience-value">{exp.company}</span>
                </p>
                <p className="work-experience-field">
                  <span className="work-experience-label">Duration:</span>
                  <span className="work-experience-value">{exp.duration}</span>
                </p>
                <p className="work-experience-field">
                  <span className="work-experience-label">Achievement:</span>
                  <span className="work-experience-value">{exp.achievement}</span>
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="work-experience-no-data">No work experience available.</p>
        )}
      </div>
      <div className="education-container">
        <h3 className="education-title">Education</h3>
        {isValidArray(data.education) ? (
          <div className="space-y-4">
            {data.education.map((edu, index) => (
              <div key={index} className="education-card">
                <p className="education-field">
                  <span className="education-value">{edu.degree}</span>
                  <span className="education-label">:Degree</span>
                </p>
                <p className="education-field">
                  <span className="education-value">{edu.institution}</span>
                  <span className="education-label">:Institution</span>
                </p>
                <p className="education-field">
                  <span className="education-value">{edu.year}</span>
                  <span className="education-label">:Year</span>
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="education-no-data">No education data available.</p>
        )}
      </div>

      <div className="certifications-container">
        <h3 className="certifications-title">Certifications</h3>
        <ul className="certifications-list">
          {isValidArray(data.certifications)
            ? data.certifications.map((cert, index) => (
              <li key={index} className="certifications-item">
                <p><strong>Name:</strong> {cert.name}</p>
                <p><strong>Issuer:</strong> {cert.issuer}</p>
                <p><strong>Date:</strong> {cert.date}</p>
              </li>
            ))
            : <li className="certifications-na">N/A</li>}
        </ul>
      </div>


      <div className="improvements-container">
        <h3 className="improvements-title">Suggested Improvements</h3>
        <ul className="improvements-list">
          {isValidArray(data.suggestedImprovements)
            ? data.suggestedImprovements.map((imp, index) => (
              <li key={index} className="improvements-item">{imp}</li>
            ))
            : <li className="improvements-na">N/A</li>}
        </ul>
      </div>
    </div>
  );
};

export default ResumeAnalysisResult;
