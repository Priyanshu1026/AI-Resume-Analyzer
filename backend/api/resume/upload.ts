import type { VercelRequest, VercelResponse } from "@vercel/node";
import formidable from "formidable";
import fs from "fs";
import pdfParse from "pdf-parse";
import { analyzeResume } from "../../src/utils/analyzeResume";

export const config = {
    api: {
        bodyParser: false, // Required for file uploads
    },
};

export default function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader("Access-Control-Allow-Origin", "https://resumetrics.vercel.app");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const form = formidable({ uploadDir: "/tmp", keepExtensions: true });

    form.parse(req, async (err, fields, files) => {
        try {
            if (err || !files.file) {
                return res.status(400).json({ message: "No file uploaded" });
            }

            const uploadedFile = Array.isArray(files.file) ? files.file[0] : files.file;
            const buffer = fs.readFileSync(uploadedFile.filepath);
            const pdfData = await pdfParse(buffer);
            const extractedText = pdfData.text;

            const analysis = await analyzeResume(extractedText);

            // Delete file (optional, since /tmp is ephemeral on Vercel)
            fs.unlinkSync(uploadedFile.filepath);

            return res.status(200).json({
                message: "Resume uploaded and analyzed successfully",
                file: {
                    originalname: uploadedFile.originalFilename,
                    size: uploadedFile.size,
                },
                analysis,
            });
        } catch (e: any) {
            console.error("Upload error:", e);
            return res.status(500).json({ message: "Failed to process resume" });
        }
    });
}
