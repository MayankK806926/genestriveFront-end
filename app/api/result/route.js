import { NextResponse } from 'next/server';

// Change to POST handler
export async function POST(request) {
  try {
    // Get data from request body
    const { selectedAnswers, testData, startTime } = await request.json();

    // Check if data is valid
    if (!selectedAnswers || !testData || !Array.isArray(selectedAnswers) || !Array.isArray(testData)) {
        return NextResponse.json(
            { success: false, message: 'Invalid input data' },
            { status: 400 }
        );
    }

    // Backend logic to process test results (adapted from your frontend code)
    const endTime = Date.now();
    const duration = startTime ? endTime - startTime : 0;

    const totalQuestions = testData.length;
    let attemptedQuestions = 0;
    let correctAnswers = 0;

    selectedAnswers.forEach((selectedOptionIndex, questionIndex) => {
      // Ensure questionIndex is valid within testData bounds
      if (questionIndex < testData.length) {
          const question = testData[questionIndex];
          // Check if question was attempted and the selected option index is valid
          if (selectedOptionIndex !== null && selectedOptionIndex >= 0 && selectedOptionIndex < question.options.length) {
              attemptedQuestions++;
              if (question.options[selectedOptionIndex]?.isCorrect) {
                  correctAnswers++;
              }
          }
      }
    });

    const overallAccuracy = attemptedQuestions > 0 ? (correctAnswers / attemptedQuestions) * 100 : 0;

    const topicResults = {};
    testData.forEach((question, questionIndex) => {
      const topic = question.topic;
      if (!topicResults[topic]) {
        topicResults[topic] = {
          totalQuestions: 0,
          attemptedQuestions: 0,
          correctAnswers: 0,
        };
      }
      topicResults[topic].totalQuestions++;

      const selectedOptionIndex = selectedAnswers[questionIndex];
       // Check if question was attempted and the selected option index is valid
       if (selectedOptionIndex !== null && selectedOptionIndex >= 0 && selectedOptionIndex < question.options.length) {
          topicResults[topic].attemptedQuestions++;
          if (question.options[selectedOptionIndex]?.isCorrect) {
            topicResults[topic].correctAnswers++;
          }
        }
    });

    const minutes = Math.floor(duration / 60000);
    const seconds = Math.floor((duration % 60000) / 1000);
    const timeTaken = `${minutes} min ${seconds} sec`;

    // Prepare the results object to send back
    const calculatedResults = {
      totalQuestions,
      attemptedQuestions,
      correctAnswers,
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