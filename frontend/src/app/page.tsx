"use client";
import { useState } from "react";
import ResumeUploader from "@/components/resumeUploader";
import ResumeAnalysisResult, { ResumeData } from "@/components/resumeAnalysisResult";

export default function Home() {
  const [parsedData, setParsedData] = useState<ResumeData | null>(null);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <ResumeUploader setParsedData={setParsedData} />
      {parsedData && <ResumeAnalysisResult data={parsedData} />}
    </main>
  );
}
