"use client";
import React, { useRef, useState } from "react";
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
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<MessageType>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const uploadAreaRef = useRef<HTMLDivElement>(null);

  const triggerFileSelect = () => {
    if (!file) {
      fileInputRef.current?.click();
    }
  };

  const handleFileUpload = (selectedFile: File) => {
    setFile(selectedFile);
    setParsedData(null); // Clear old parsed data
    setMessage(`Selected: ${selectedFile.name}`);
    setMessageType("info");
  };

  const analyzeResume = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      setMessage("Analyzing your resume...");
      setMessageType("info");

      const res = await fetch("http://localhost:5000/api/resume/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.analysis) {
        const match = data.analysis.match(/```json\s*([\s\S]*?)\s*```/);
        if (!match || !match[1]) throw new Error("Invalid analysis format");

        const parsed = JSON.parse(match[1].trim());
        setParsedData(parsed);
        setMessage("Resume analyzed successfully!");
        setMessageType("success");
      } else {
        setParsedData(null);
        setMessage(`Error: ${data.message || "Failed to analyze resume"}`);
        setMessageType("error");
      }
    } catch (err) {
      console.error(err);
      setParsedData(null);
      setMessage("Something went wrong while uploading.");
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileUpload(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      handleFileUpload(droppedFile);
    }
    uploadAreaRef.current?.classList.remove("ring-2", "ring-indigo-400");
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    uploadAreaRef.current?.classList.add("ring-2", "ring-indigo-400");
  };

  const handleDragLeave = () => {
    uploadAreaRef.current?.classList.remove("ring-2", "ring-indigo-400");
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

  const resetUpload = () => {
    setFile(null);
    setParsedData(null);
    setMessage(null);
    setMessageType(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // <-- THIS clears the input value
  }
  };

  return (
    <>
      {/* Hidden File Input */}
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Upload Area */}
      <div
        ref={uploadAreaRef}
        className="upload-area cursor-pointer p-6 border rounded-lg"
        onClick={triggerFileSelect}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <div className="upload-content text-center">
          <span className="upload-icon text-3xl">📄</span>
          {!file ? (
            <>
              <div className="upload-text font-medium">Drop your resume here</div>
              <div className="upload-subtext text-sm text-gray-400">
                or click to browse • PDF, DOC, DOCX supported
              </div>
            </>
          ) : (
            <>
              <div className="upload-text font-medium">Selected: {file.name}</div>
              <div className="upload-subtext text-sm text-gray-400">
                File is ready to analyze
              </div>
            </>
          )}
        </div>
      </div>

      {/* Show analyze + replace options if file is selected */}
      {file && (
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button
            onClick={analyzeResume}
            disabled={loading}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
          >
            {loading ? "Analyzing..." : "Analyze Resume"}
          </button>

          <button
            onClick={resetUpload}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            Upload Another
          </button>
        </div>
      )}

      {/* Message */}
      {message && (
        <div className={`mt-4 p-3 rounded ${getMessageColor(messageType)} border`}>
          {message}
        </div>
      )}
    </>
  );
};

export default ResumeUploader;
