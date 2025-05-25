// src/controllers/resumeController.ts
import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import pdfParse from "pdf-parse";
import { analyzeResume } from "../utils/analyzeResume";

export const handleResumeUpload = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({ message: "No file uploaded" });
      return;
    }

    const filePath = path.join(__dirname, "../../uploads", req.file.filename);
    const fileBuffer = fs.readFileSync(filePath);

    // Step 1: Extract text
    const pdfData = await pdfParse(fileBuffer);
    const extractedText = pdfData.text;

    // Step 2: Analyze using Gemini
    const analysis = await analyzeResume(extractedText);

    // Optional: Clean up file after processing
    fs.unlinkSync(filePath);

    // Step 3: Send result
    res.status(200).json({
      message: "Resume uploaded and analyzed successfully",
      file: {
        originalname: req.file.originalname,
        filename: req.file.filename,
        size: req.file.size,
      },
      analysis,
    });
  } catch (error: any) {
    console.error("Error in handleResumeUpload:", error?.message || error);
    res.status(500).json({ message: "Failed to process resume" });
  }
};
