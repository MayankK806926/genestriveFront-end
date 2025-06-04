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