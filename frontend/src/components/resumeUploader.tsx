"use client";
import React, { useState } from "react";
import type { ResumeData } from "../components/resumeAnalysisResult";

type MessageType = "success" | "error" | "warning" | "info" | null;

const ResumeUploader = ({
  setParsedData,
  setLoading,
  loading,
}: {
  setParsedData: (data: ResumeData | null) => void;
  setLoading: (loading: boolean) => void;
  loading: boolean;
}) => {
  const [file, setFile] = useState<File | null>(null);
  // const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<MessageType>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setMessage(null);
      setMessageType(null);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      setMessage("Uploading and analyzing your resume...");
      setMessageType("info");

      const res = await fetch("http://localhost:5000/api/resume/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log("API Response Data:", data);

      if (res.ok && data.analysis) {
        try {
          const match = data.analysis.match(/```json\s*([\s\S]*?)\s*```/);
          if (!match || !match[1]) {
            throw new Error("Invalid analysis format");
          }
          const parsed = JSON.parse(match[1].trim());

          console.log("Parsed Analysis JSON:", parsed);
          setParsedData(parsed);
          setMessage("Resume analyzed successfully!");
          setMessageType("success");
        } catch (err) {
          console.error("Failed to parse analysis JSON:", err);
          setParsedData(null);
          setMessage("Failed to parse analysis data.");
          setMessageType("error");
        }
      } else {
        console.error("API Error, not setting parsed data:", data);
        setParsedData(null);
        setMessage(`Error: ${data.message || "Failed to analyze resume"}`);
        setMessageType("error");
      }
    } catch (error) {
      console.error("Upload error:", error);
      setParsedData(null);
      setMessage("Something went wrong while uploading.");
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  const getMessageColor = (type: MessageType) => {
    switch (type) {
      case "success":
        return "text-green-600 bg-green-100";
      case "error":
        return "text-red-600 bg-red-100";
      case "warning":
        return "text-yellow-700 bg-yellow-100";
      case "info":
        return "text-blue-600 bg-blue-100";
      default:
        return "";
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 border rounded-lg shadow space-y-4 bg-white">
      <h2 className="text-xl font-semibold">Upload Your Resume</h2>

      <input type="file" accept=".pdf" onChange={handleFileChange} />

      <button
        onClick={handleUpload}
        disabled={!file || loading}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Analyzing..." : "Upload & Analyze"}
      </button>

      {message && (
        <div
          className={`mt-4 p-3 rounded ${getMessageColor(messageType)} border`}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default ResumeUploader;
