import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Read the request body to get parameters from the frontend
    const {requestData,Category,startTime} = await request.json();
    console.log('Received test generation request with data:', requestData,Category,startTime);

    // TODO: Implement actual test generation logic here
    // Use requestData (e.g., requestData.subject, requestData.selectedTopics) to generate the test.
    // For now, returning the hardcoded sample data.

    const sampleData = [
        {
          id:6,
          type:"mcq",
          question: "The quadratic formula is given by:\n\n$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$",
          topic: "Mathematics",
          options: [
            { text: "Option 1", isCorrect: false },
            { text: "Option 2", isCorrect: true },
            { text: "Option 3", isCorrect: false },
            { text: "Option 4", isCorrect: false },
          ],
        },
        {
          id:8,
          type:"long answer",
          question: "Another question?",
          topic: "Science",
        },
        {
          id:9,
          type:"fill in the blanks",
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
