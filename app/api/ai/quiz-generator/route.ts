import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

export async function POST(request: Request) {
  try {
    const { topic, count = 10 } = await request.json();

    // Validate count
    let questionCount = Number(count);
    if (isNaN(questionCount) || questionCount < 1) questionCount = 10;
    if (questionCount > 100) questionCount = 100;

    console.log(`Generating ${questionCount} questions for: ${topic}`);

    const model = genAI.getGenerativeModel({ 
      model: "gemini-3.1-flash-lite-preview",
      generationConfig: {
        temperature: 0.8,
        maxOutputTokens: questionCount * 150, // हर question के लिए 150 tokens
      }
    });

    // **क्रिटिकल प्रॉम्प्ट** - एकदम सटीक निर्देश
    const prompt = `Generate EXACTLY ${questionCount} multiple choice questions about "${topic}" in Hinglish (Hindi+English).

**IMPORTANT: You MUST generate EXACTLY ${questionCount} questions. NOT 10, NOT 5, EXACTLY ${questionCount}.**

Rules:
1. Each question must have 4 options (A, B, C, D)
2. Mark correct answer clearly
3. ALL questions must be DIFFERENT

Format (start from Question 1 and go to Question ${questionCount}):

Question 1: [Question]
A) [Option]
B) [Option]
C) [Option]
D) [Option]
Correct Answer: [A/B/C/D]

Question 2: [Question]
A) [Option]
B) [Option]
C) [Option]
D) [Option]
Correct Answer: [A/B/C/D]

... continue until Question ${questionCount}

Now generate EXACTLY ${questionCount} questions about "${topic}".`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const quiz = response.text();

    // Count questions in response
    const questionCountInResponse = (quiz.match(/Question \d+:/g) || []).length;
    console.log(`Got ${questionCountInResponse} questions`);

    return NextResponse.json({ 
      quiz,
      requested: questionCount,
      generated: questionCountInResponse
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate quiz' },
      { status: 500 }
    );
  }
}