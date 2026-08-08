import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', app: 'PATHFINDER' });
  });

  // AI Analysis Proxy Endpoint
  app.post('/api/analyze', async (req, res) => {
    const { answers, lang, localResult } = req.body;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
      return res.json({ useFallback: true });
    }

    try {
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });

      const prompt = `You are PATHFINDER AI, an expert cognitive profiler and academic career counselor.
Analyze these user responses from a 12-question scenario-based discovery session.

User language: ${lang} (en = English, ru = Russian, tg = Tajik).
User Answers Tagged: ${JSON.stringify(answers?.map((a: any) => a.rationaleTag) || [])}
Calculated Top Direction: ${localResult?.topDirection?.title?.[lang as 'en' | 'ru' | 'tg'] || 'Tech & AI'}

Task:
Generate 4 highly personalized, non-generic sentences explaining "WHY THIS FITS YOU" based on how they think, solve problems, and handle uncertainty.
Write in the selected language (${lang}). Do not invent generic SaaS hype. Speak with elegance and precision.

Return ONLY a valid JSON object matching this structure:
{
  "whyThisFitsYou": ["sentence 1", "sentence 2", "sentence 3", "sentence 4"]
}`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          temperature: 0.7,
        },
      });

      const rawText = response.text || '';
      const parsed = JSON.parse(rawText.trim());

      return res.json({
        whyThisFitsYou: parsed.whyThisFitsYou || localResult.whyThisFitsYou,
        isAiGenerated: true,
      });
    } catch (err) {
      console.error('Error generating AI analysis with Gemini SDK:', err);
      return res.json({ useFallback: true });
    }
  });

  // Vite middleware in development vs static file serving in production
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`PATHFINDER server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
