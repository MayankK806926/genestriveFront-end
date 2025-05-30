import TestResult from '@/app/pages/TestAtoZ/TestResult';
import { NextResponse } from 'next/server';

export async function GET({selectedAnswers,testData}) {
  try {

    // Here you would typically:
    // 1. Validate the input
    // 2. Check if user already exists
    // 3. Hash the password
    // 4. Store in database
    // For now, we'll just return a success response

    const processTestResults = ({selectedAnswers,testData}) => {
        const endTime = Date.now();
        const duration = startTime ? endTime - startTime : 0;
    
        const totalQuestions = testData.length;
        let attemptedQuestions = 0;
        let correctAnswers = 0;
    
        // Calculate overall stats
        selectedAnswers.forEach((selectedOptionIndex, questionIndex) => {
          if (selectedOptionIndex !== null) { // Check if question was attempted
            attemptedQuestions++;
            const question = testData[questionIndex];
            if (question.options[selectedOptionIndex]?.isCorrect) {
              correctAnswers++;
            }
          }
        });
    
        const overallAccuracy = attemptedQuestions > 0 ? (correctAnswers / attemptedQuestions) * 100 : 0;
    
        // Calculate topic-wise stats
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
          if (selectedOptionIndex !== null) { // Check if question was attempted
            topicResults[topic].attemptedQuestions++;
            if (question.options[selectedOptionIndex]?.isCorrect) {
              topicResults[topic].correctAnswers++;
            }
          }
        });
    
        const minutes = Math.floor(duration / 60000);
        const seconds = Math.floor((duration % 60000) / 1000);
        const timeTaken = `${minutes} min ${seconds} sec`;
    
        setTestResults({
          totalQuestions,
          attemptedQuestions,
          correctAnswers,
          overallAccuracy: overallAccuracy.toFixed(2),
          timeTaken: timeTaken,
          topicResults: topicResults, // Include topic-wise results
        });
      };
    const testResults=processTestResults({selectedAnswers,testData})

    return NextResponse.json({testResults});
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Registration failed', error: error.message },
      { status: 500 }
    );
  }
}