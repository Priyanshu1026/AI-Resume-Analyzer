import { GoogleGenAI, Type } from "@google/genai";

// 1. FIX: Pass the API key inside an options object { apiKey: '...' }
const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Define the desired JSON structure (Interface is correct, keeping it here for context)
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
  certifications: string[];
  suggestedImprovements: string[];
}

export async function analyzeResume(text: string): Promise<ResumeAnalysis> {
  
  // Define the schema object (assuming this is correct from the previous step)
  const resumeAnalysisSchema = {
    // ... (Your schema definition here)
    type: Type.OBJECT,
    properties: {
      summary: { /* ... */ },
      // ... (rest of your properties)
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
          //required: ["role", "company", "achievement"]
        }
      },
      // ...
    },
    //required: ["summary", "technicalSkills", "workExperience", "education"]
  };
  
  // 2. FIX: Access generateContent via genAI.models.generateContent
  // The 'model' property moves into the generateContent options object.
  const prompt = `Analyze the following resume text and extract all information into the structured format:
    
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
