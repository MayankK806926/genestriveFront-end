import { NextResponse } from 'next/server';

export async function GET(request) {
  try {

    const sampleData = [
        {
          question: "What is the value of pi ?",
          topic: "Mathematics",
          options: [
            { text: "3.14", isCorrect: true },
            { text: "3.14", isCorrect: false },
            { text: "3.14", isCorrect: false },
            { text: "3.14", isCorrect: false },
          ],
        },
        {
          question: "Another question?",
          topic: "Science",
          options: [
            { text: "Option 1", isCorrect: false },
            { text: "Option 2", isCorrect: true },
            { text: "Option 3", isCorrect: false },
            { text: "Option 4", isCorrect: false },
          ],
        },
      ];

    return NextResponse.json({sampleData});
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Registration failed', error: error.message },
      { status: 500 }
    );
  }
}