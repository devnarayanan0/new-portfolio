import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// API route to generate tailored minimalist portfolio copy
app.post("/api/generate-copy", async (req, res) => {
  try {
    const { role, tone, skills = "", industry = "" } = req.body;
    
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ 
        error: "Gemini API Key is missing. Please add your GEMINI_API_KEY inside the Settings > Secrets menu." 
      });
    }

    const prompt = `You are a professional creative copywriter specializing in creating world-class minimalist portfolios for software engineers, designers, architects, and creative people.
Generate a portfolio profile with the following inputs:
- Role/Title: ${role}
- Target Tone/Vibe: ${tone} (e.g., minimal, brutalist/coder, editorial, conversational)
- Core Skills: ${skills}
- Industry: ${industry}

Please generate the following structured JSON response strictly matching this schema:
{
  "tagline": "A short, extremely creative, high-impact introductory statement (maximum 12 words) that captures their unique essence.",
  "bio": "A beautifully drafted, concise personal bio (2-3 sentences, max 60 words) written in the chosen tone.",
  "projects": [
    {
      "title": "A highly creative project name related to their role (e.g., 'Aether Engine', 'Prism UI', 'Grid.sys')",
      "category": "A short category name (e.g., 'Web Design', 'Open Source', '3D Graphics')",
      "tagline": "A single line summary explaining what it is.",
      "description": "An engaging, brief description (1-2 sentences) of the project, highlighting the creative aspect and technical challenge.",
      "tags": ["Tag1", "Tag2", "Tag3"]
    },
    {
      "title": "A second creative project name",
      "category": "Category",
      "tagline": "Summary",
      "description": "Engaging description",
      "tags": ["Tag1", "Tag2"]
    },
    {
      "title": "A third creative project name",
      "category": "Category",
      "tagline": "Summary",
      "description": "Engaging description",
      "tags": ["Tag1", "Tag2"]
    }
  ],
  "skills": ["List of 6 key polished technical/creative skill tags"],
  "vibeDescription": "A short, elegant phrase summarizing the creative aesthetic of this profile."
}

Ensure all texts are highly original, sophisticated, avoiding corporate cliché phrases. Deliver raw, elegant copy. Return ONLY the JSON object. Do not wrap in markdown code blocks.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            tagline: { type: Type.STRING },
            bio: { type: Type.STRING },
            projects: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  category: { type: Type.STRING },
                  tagline: { type: Type.STRING },
                  description: { type: Type.STRING },
                  tags: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING }
                  }
                },
                required: ["title", "category", "tagline", "description", "tags"]
              }
            },
            skills: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            vibeDescription: { type: Type.STRING }
          },
          required: ["tagline", "bio", "projects", "skills", "vibeDescription"]
        }
      }
    });

    const text = response.text?.trim() || "{}";
    const data = JSON.parse(text);
    res.json(data);
  } catch (error: any) {
    console.error("Error generating portfolio content:", error);
    res.status(500).json({ error: error.message || "Failed to generate portfolio details" });
  }
});

// Vite middleware and listener setup in async block to avoid top-level await in CJS formats
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
