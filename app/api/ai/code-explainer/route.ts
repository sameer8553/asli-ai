import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

export async function POST(request: Request) {
  try {
    const { code } = await request.json();

    if (!code) {
      return NextResponse.json(
        { error: 'Code is required' },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({ 
      model: "gemini-3.1-flash-lite-preview",
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 4000,
      }
    });

    // ✅ Hinglish mein explanation, code English mein rahega
    const prompt = `You are a programming tutor. Explain this code in HINGLISH (Hindi + English mix).

Code to explain:
${code}

Write explanation in HINGLISH only:
- Hindi words with English mix
- NOT pure Hindi
- NOT pure English
- Example: "Yeh function do numbers ko add karta hai" (सही)

Format:

## 📝 Code Overview
[Hinglish mein likho - ye code overall kya karta hai]

## 🔍 Line-by-Line Explanation
[Har important line ko Hinglish mein samjhao]

## 💡 Key Concepts
[Important concepts Hinglish mein explain karo]

## 🎯 Expected Output
[Kya output aayega - Hinglish mein]

## ⚡ Common Mistakes
[Beginners ki common galtiyaan - Hinglish mein]

## 🚀 Tips
[Useful tips Hinglish mein]`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const explanation = response.text();

    return NextResponse.json({ explanation });
  } catch (error) {
    console.error('Gemini API Error:', error);
    return NextResponse.json(
      { error: 'Failed to explain code' },
      { status: 500 }
    );
  }
}