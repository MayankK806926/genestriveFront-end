"use client"
import React, { useState, useEffect } from "react";
import TestTaking from "./TestTaking";
import TestResult from "./TestResult";

export default function TestPreview() {
  const testData = [
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
    // Add more questions here
  ];

  const [submitted, setSubmitted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(testData.length).fill(null));
  const [testResults, setTestResults] = useState(null);
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    if (!submitted) {
      setSelectedAnswers(Array(testData.length).fill(null))
      setTestResults(null)
      setStartTime(Date.now());
    } else {
      setStartTime(null);
    }
    return () => {
      // Cleanup logic
    };
  }, [submitted]);

  const processTestResults = () => {
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

  return (
    <>
      {!submitted ? (
        <TestTaking
          setSubmitted={setSubmitted}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          testData={testData}
          processTestResults={processTestResults}
        />
      ) : (
        <TestResult results={testResults} setSubmitted={setSubmitted} />
      )}
    </>
  );
} 