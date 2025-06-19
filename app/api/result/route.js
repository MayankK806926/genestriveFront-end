"use client"
import { NextResponse } from 'next/server';

// Change to POST handler
export async function POST(request) {
  try {
    // Get data from request body
    const { selectedAnswersbyid, endTime } = await request.json();

    // Check if data is valid
    if (!selectedAnswersbyid || !Array.isArray(selectedAnswersbyid)) {
        return NextResponse.json(
            { success: false, message: 'Invalid input data' },
            { status: 400 }
        );
    }

    const timeTaken = `6 min 8 sec`;

    const totalQuestions=10
    const attemptedQuestions=10
    const overallAccuracy=70
    const correctAnswers=7
    const topicResults={Mathematics:{
        totalQuestions: 3,
        attemptedQuestions: 3,
        correctAnswers: 1,
    },Science:{
      totalQuestions: 7,
      attemptedQuestions: 7,
      correctAnswers: 6,
  }}

    // Prepare the results object to send back
    const calculatedResults = {
      totalQuestions:totalQuestions,
      attemptedQuestions:attemptedQuestions,
      correctAnswers:correctAnswers,
      overallAccuracy: overallAccuracy.toFixed(2),
      timeTaken: timeTaken,
      topicResults: topicResults,
    };

    return NextResponse.json({ testResults: calculatedResults });

  } catch (error) {
    console.error('Error processing test results in API route:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process test results', error: error.message },
      { status: 500 }
    );
  }
}