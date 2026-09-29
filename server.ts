import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Initialize Gemini client if API key is present
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;

if (apiKey) {
  aiClient = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Endpoint: Generate custom roadmap using Gemini
app.post('/api/generate-roadmap', async (req: Request, res: Response) => {
  const { skill, currentLevel, goal, dailyTime, timeline } = req.body;

  if (!skill) {
    return res.status(400).json({ error: 'Skill name is required' });
  }

  // If Gemini is available, generate dynamically
  if (aiClient) {
    try {
      const prompt = `Create a comprehensive, beginner-friendly learning roadmap for the skill "${skill}".
User Profile:
- Current level: ${currentLevel || 'Complete Beginner'}
- Goal: ${goal || 'Job / Career readiness'}
- Daily study time: ${dailyTime || '1-2 hours/day'}
- Target timeline: ${timeline || '3-6 months'}

Generate a structured roadmap with:
1. Title and motivating subtitle
2. Estimated duration, difficulty, and 3-4 target career paths
3. 5-7 progressive levels starting from Level 0 (Prerequisites/Foundations) up to Advanced & Projects
4. In each level, provide 4-8 granular topics. For each topic include:
   - beginner-friendly explanation (what is it in plain English without unexplained jargon)
   - why learn it
   - a simple code example or concrete practical example with short explanation
   - 2-3 practical practice exercises
   - 1 mini-challenge with tips
5. 4-6 real-world portfolio projects with difficulty, what you will build, and steps.
6. A career progression roadmap from learning to job.`;

      const response = await aiClient.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          systemInstruction: 'You are an elite developer and learning curriculum architect. You specialize in breaking down intimidating skills into crystal-clear, step-by-step beginner friendly roadmaps with no jargon unexplained, practical code examples, and motivating projects.',
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              subtitle: { type: Type.STRING },
              category: { type: Type.STRING },
              difficulty: { type: Type.STRING },
              estimatedDuration: { type: Type.STRING },
              projectsCount: { type: Type.INTEGER },
              careerPaths: { type: Type.ARRAY, items: { type: Type.STRING } },
              careerStages: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    title: { type: Type.STRING },
                    desc: { type: Type.STRING },
                  },
                  required: ['title', 'desc'],
                },
              },
              levels: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    levelNumber: { type: Type.INTEGER },
                    levelTag: { type: Type.STRING },
                    title: { type: Type.STRING },
                    description: { type: Type.STRING },
                    color: { type: Type.STRING },
                    practiceGoal: { type: Type.STRING },
                    topics: {
                      type: Type.ARRAY,
                      items: {
                        type: Type.OBJECT,
                        properties: {
                          id: { type: Type.STRING },
                          title: { type: Type.STRING },
                          subtitle: { type: Type.STRING },
                          difficulty: { type: Type.STRING },
                          estimatedHours: { type: Type.STRING },
                          whatIsIt: { type: Type.STRING },
                          whyLearnIt: { type: Type.STRING },
                          codeExample: {
                            type: Type.OBJECT,
                            properties: {
                              language: { type: Type.STRING },
                              code: { type: Type.STRING },
                              explanation: { type: Type.STRING },
                            },
                          },
                          practiceExercises: {
                            type: Type.ARRAY,
                            items: {
                              type: Type.OBJECT,
                              properties: {
                                id: { type: Type.STRING },
                                task: { type: Type.STRING },
                                hint: { type: Type.STRING },
                              },
                              required: ['id', 'task'],
                            },
                          },
                          miniChallenge: {
                            type: Type.OBJECT,
                            properties: {
                              title: { type: Type.STRING },
                              description: { type: Type.STRING },
                              tips: { type: Type.STRING },
                            },
                            required: ['title', 'description'],
                          },
                        },
                        required: ['id', 'title', 'difficulty', 'whatIsIt', 'whyLearnIt'],
                      },
                    },
                    project: {
                      type: Type.OBJECT,
                      properties: {
                        id: { type: Type.STRING },
                        title: { type: Type.STRING },
                        difficulty: { type: Type.STRING },
                        description: { type: Type.STRING },
                        whatYouWillBuild: { type: Type.STRING },
                        skillsRequired: { type: Type.ARRAY, items: { type: Type.STRING } },
                        estimatedHours: { type: Type.STRING },
                      },
                    },
                  },
                  required: ['levelNumber', 'levelTag', 'title', 'description', 'color', 'topics'],
                },
              },
              projects: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING },
                    title: { type: Type.STRING },
                    difficulty: { type: Type.STRING },
                    description: { type: Type.STRING },
                    whatYouWillBuild: { type: Type.STRING },
                    skillsRequired: { type: Type.ARRAY, items: { type: Type.STRING } },
                    estimatedHours: { type: Type.STRING },
                    starterSteps: { type: Type.ARRAY, items: { type: Type.STRING } },
                  },
                  required: ['id', 'title', 'difficulty', 'description', 'whatYouWillBuild'],
                },
              },
            },
            required: ['title', 'subtitle', 'difficulty', 'estimatedDuration', 'levels', 'careerPaths'],
          },
        },
      });

      const responseText = response.text;
      if (responseText) {
        const parsed = JSON.parse(responseText);
        return res.json({ success: true, data: parsed, source: 'gemini' });
      }
    } catch (err: any) {
      console.warn('Gemini generation error, falling back to local generator:', err?.message || err);
    }
  }

  // Fallback response signaling client to use local robust generator
  res.json({ success: false, fallback: true, message: 'Falling back to local high-fidelity generator' });
});

// Endpoint: AI tutor explanation for any topic
app.post('/api/ai-explain-topic', async (req: Request, res: Response) => {
  const { topicTitle, skill, userQuestion } = req.body;

  if (!aiClient) {
    return res.json({
      success: true,
      answer: `Here is a clear breakdown of **${topicTitle}** in ${skill}:\n\n` +
        `• **Core Concept**: It serves as a foundational building block for solving problems efficiently.\n` +
        `• **Real-World Analogy**: Think of it like a dedicated tool in a craftsman's workshop. You pick it when you need reliability and structure.\n` +
        `• **Next Steps**: Focus on writing 5-10 lines of code yourself rather than just reading about it. Try modifying the inputs to see what changes!`,
      source: 'offline-tutor',
    });
  }

  try {
    const prompt = `You are a supportive, friendly AI tutor explaining "${topicTitle}" in "${skill}" to a complete beginner.
User's Question / Request: "${userQuestion || 'Explain this simply with an analogy and a quick practical tip.'}"

Provide a concise, encouraging response (3 short paragraphs) with:
1. A clear analogy a 12-year-old would understand.
2. How professional developers use it in the real world.
3. One concrete tip to avoid common beginner mistakes.`;

    const response = await aiClient.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
    });

    res.json({
      success: true,
      answer: response.text || 'Keep practicing! Breaking down this topic into small daily exercises is key.',
      source: 'gemini',
    });
  } catch (err: any) {
    res.json({
      success: true,
      answer: `Here is a clear tip for **${topicTitle}**: Focus on practicing the basic syntax, experiment with small examples, and don't worry about memorizing everything!`,
      source: 'fallback',
    });
  }
});

// Endpoint: n8n AI Agent Proxy
app.post('/api/n8n-agent/chat', async (req: Request, res: Response) => {
  const {
    message,
    sessionId = `session-${Date.now()}`,
    webhookUrl = 'https://veeksha09.app.n8n.cloud/webhook/5c0b5dc9-97a6-493d-b0a3-1d508d6129b9/chat',
  } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const startTime = Date.now();

  try {
    const payload = {
      action: 'sendMessage',
      sessionId: String(sessionId),
      chatInput: String(message),
      message: String(message),
    };

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30000); // 30s timeout

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json, text/plain, */*',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeout);
    const durationMs = Date.now() - startTime;

    const responseText = await response.text();
    let data: any = null;

    try {
      data = JSON.parse(responseText);
    } catch {
      data = { output: responseText };
    }

    // Extract message from common n8n formats
    const output =
      data?.output ??
      data?.text ??
      data?.message ??
      data?.response ??
      (typeof data === 'string' ? data : JSON.stringify(data));

    return res.json({
      success: response.ok,
      status: response.status,
      output: output,
      raw: data,
      latencyMs: durationMs,
      sessionId,
      webhookUrl,
    });
  } catch (err: any) {
    const durationMs = Date.now() - startTime;
    console.error('n8n proxy error:', err);
    return res.status(500).json({
      success: false,
      error:
        err.name === 'AbortError'
          ? 'n8n workflow request timed out after 30 seconds'
          : err?.message || 'Failed to reach n8n webhook',
      latencyMs: durationMs,
      webhookUrl,
    });
  }
});

// Setup Vite middlewares for development or serve dist for production
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`SkillPath AI server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
