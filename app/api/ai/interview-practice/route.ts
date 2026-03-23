import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

export async function POST(request: Request) {
  try {
    const { topic } = await request.json();

    if (!topic) {
      return NextResponse.json(
        { error: 'Topic is required' },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({ 
      model: "gemini-3.1-flash-lite-preview",
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 8000,
      }
    });

    // ✅ Hinglish mein interview questions
    const prompt = `Generate 50 interview questions about "${topic}" in HINGLISH (Hindi + English mix).

Rules for HINGLISH:
- Hindi words with English mix
- NOT pure Hindi
- NOT pure English
- Example: "React mein state aur props mein kya difference hai?" (सही)

Format:
Q1: [Question in Hinglish]
Answer: [Detailed answer in Hinglish with examples]

Q2: [Question in Hinglish]
Answer: [Detailed answer in Hinglish with examples]

... and so on for 50 questions.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const questions = response.text();

    return NextResponse.json({ questions });
  } catch (error) {
    console.error('Gemini API Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate questions' },
      { status: 500 }
    );
  }
}