import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Read the request body to get parameters from the frontend
    const {requestData,Category} = await request.json();
    console.log('Received test generation request with data:', requestData,Category);

    // TODO: Implement actual test generation logic here
    // Use requestData (e.g., requestData.subject, requestData.selectedTopics) to generate the test.
    // For now, returning the hardcoded sample data.

    const sampleData = [
        {
          id:6,
          type:"Single Correct",
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
          id:8,
          type:"Long Answer",
          question: "Another question?",
          topic: "Science",
        },
        {
          id:9,
          type:"Fill in blanks",
          question: "Fill in the ______ question?",
          topic: "History",}
      ];

    // Return the generated test data in the expected format
    return NextResponse.json({sampleData});
  } catch (error) {
    console.error('Error in test generation API route:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to generate test', error: error.message },
      { status: 500 }
    );
  }
}
