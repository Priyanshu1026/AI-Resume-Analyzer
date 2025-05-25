import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function analyzeResume(text: string): Promise<string> {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt=`Analyze the following resume:

${text}

Return the output as a JSON object with the following fields:
{
  "summary": "",
  "technicalSkills": [],
  "softSkills": [],
  "workExperience": [
    {
      "role": "",
      "company": "",
      "duration": "",
      "achievement": ""
    }
  ],
  "education": [
    {
      "degree": "",
      "institution": "",
      "year": ""
    }
  ],
  "certifications": [],
  "suggestedImprovements": []
}`;

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

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}
