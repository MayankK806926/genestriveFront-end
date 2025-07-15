import { NextResponse } from 'next/server';

// Import your Gemini API client or HTTP request library
// Example using fetch (replace with your actual Gemini API integration)
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY; // Store your API key in environment variables

export async function POST(request) {
  try {
    // Read the request body to get parameters from the frontend
    const { question } = await request.json();

    // Call Gemini API to generate a solution for the question
    const geminiResponse = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `Solve the following question and explain the solution step by step:\n\n${question}`,
              },
            ],
          },
        ],
      }),
    });

    if (!geminiResponse.ok) {
      const errorText = await geminiResponse.text();
      console.error('Gemini API error:', errorText);
      throw new Error('Failed to get solution from Gemini API');
    }

    const geminiData = await geminiResponse.json();
    // Extract the generated solution text from the Gemini API response
    const solution =
      geminiData?.candidates?.[0]?.content?.parts?.[0]?.text ||
      'Encountered an error while generating the solution.';

    // Return the generated solution in the expected format
    return NextResponse.json({ solution });
  } catch (error) {
    console.error('Error in solution generation API route:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to generate solution', error: error.message },
      { status: 500 }
    );
  }
}
