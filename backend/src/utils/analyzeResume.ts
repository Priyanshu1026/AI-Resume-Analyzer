import { GoogleGenAI, Type } from "@google/genai";

// 1. FIX: Pass the API key inside an options object { apiKey: '...' }
const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Define the required output structure (Interface)
interface ResumeAnalysis {
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
  // 🛑 NOTE: Your frontend interface has 'certifications: { name: string; issuer: string; date: string; }[]'
  // but your backend schema only requested 'string[]'. I'll keep the simple string array 
  // to match the backend prompt style, but adjust your interface if needed.
  certifications: string[];
  suggestedImprovements: string[];
}

export async function analyzeResume(text: string): Promise<ResumeAnalysis> {

  // ⭐️ COMPLETE FIX: Define the full schema object
  const resumeAnalysisSchema = {
    type: Type.OBJECT,
    properties: {
      summary: {
        type: Type.STRING,
        description: "A concise, professional summary of the candidate."
      },
      technicalSkills: {
        type: Type.ARRAY,
        items: { type: Type.STRING },
        description: "List of hard/technical skills."
      },
      softSkills: {
        type: Type.ARRAY,
        items: { type: Type.STRING },
        description: "List of interpersonal/soft skills."
      },
      workExperience: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            role: { type: Type.STRING },
            company: { type: Type.STRING },
            duration: { type: Type.STRING },
            achievement: { type: Type.STRING, description: "One key quantifiable achievement from the role." }
          },
          // Keeping nested 'required' commented out for simplicity, but it's often needed here
        }
      },
      education: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            degree: { type: Type.STRING },
            institution: { type: Type.STRING },
            year: { type: Type.STRING }
          },
          // Keeping nested 'required' commented out
        }
      },
      certifications: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT, // <-- Change this from Type.STRING
          properties: {
            name: { type: Type.STRING },
            issuer: { type: Type.STRING },
            date: { type: Type.STRING }
          }
        },
        description: "List of Certifications/Courses with Name, Issuer, and Date. If any field is missing, return an empty string, NOT null."
      },
      suggestedImprovements: {
        type: Type.ARRAY,
        items: { type: Type.STRING },
        description: "3-5 constructive suggestions to improve the resume."
      },
    },
    // 🛑 Final Fix: Removing the top-level 'required' array to prevent INVALID_ARGUMENT error
    // required: ["summary", "technicalSkills", "workExperience", "education"] 
  };

  // 2. FIX: Access generateContent via genAI.models.generateContent
  const prompt = `Analyze the following resume text and strictly extract all information into the structured JSON format. 
For the 'certifications' section, if the Issuer, Date, or Name is not explicitly visible or readily inferable from the resume text, 
return that specific field as an **empty string ("")** instead of omitting the object or returning null. 
Do not hallucinate any missing details.
    
    ${text}`;

  const response = await genAI.models.generateContent({
    model: "gemini-2.5-flash", // Using the recommended modern model
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: resumeAnalysisSchema,
    },
  });

  const rawText = response.text;

  if (!rawText) {
    console.error("Gemini API returned no text in the response:", response);
    // Throw an error that Vercel will catch and log as a 500
    throw new Error("Analysis failed: Gemini model returned no text or was blocked.");
  }

  const jsonText = rawText.trim();

  try {
    // We expect valid JSON, so cast the result
    return JSON.parse(jsonText) as ResumeAnalysis;
  } catch (parseError) {
    console.error("Failed to parse JSON from model response:", jsonText, parseError);
    // Throw an error if the model returned malformed JSON
    throw new Error("Analysis failed: Model returned invalid JSON.");
  }
}

//   const prompt = `Here is a resume:

// ${text}

// Please do the following:
// 1. Summarize the candidate’s profile in 2-3 lines.
// 2. Extract a list of key technical skills.
// 3. List soft skills.
// 4. Summarize work experience (include role, company, duration, and one achievement).
// 5. Summarize education (degree, institution, year).
// 6. Highlight any notable achievements or certifications.
// 7. Suggest 3 improvements for this resume.`;


// You are an AI Resume Analyzer. Analyze the following resume text and extract:
// - Key skills
// - Summary of experience
// - Relevant technologies
// - Career domain

// Resume:
// ${text}
// `;

//   const result = await model.generateContent(prompt);
//   const response = await result.response;
//   return response.text();
// }
