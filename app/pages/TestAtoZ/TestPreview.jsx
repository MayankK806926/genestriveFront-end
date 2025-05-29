"use client"
import React, { useState, useEffect } from "react";
import TestTaking from "./TestTaking";
import TestResult from "./TestResult";
import axios from 'axios';

export default function TestPreview() {
  // Initialize testData as null initially
          // Optional: Fallback to sample data on error
        // const sampleData = [
        //   {
        //     question: "What is the value of pi ?",
        //     topic: "Mathematics",
        //     options: [
        //       { text: "3.14", isCorrect: true },
        //       { text: "3.14", isCorrect: false },
        //       { text: "3.14", isCorrect: false },
        //       { text: "3.14", isCorrect: false },
        //     ],
        //   },
        //   {
        //     question: "Another question?",
        //     topic: "Science",
        //     options: [
        //       { text: "Option 1", isCorrect: false },
        //       { text: "Option 2", isCorrect: true },
        //       { text: "Option 3", isCorrect: false },
        //       { text: "Option 4", isCorrect: false },
        //     ],
        //   },
        // ];
        // setTestData(sampleData);
        // setSelectedAnswers(Array(sampleData.length).fill(null));
  const [testData, setTestData] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  const [submitted, setSubmitted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(testData.length).fill(null));
  const [testResults, setTestResults] = useState(null);
  const [startTime, setStartTime] = useState(null);


  useEffect(() => {
    // Fetch test data when the component mounts
    const fetchTestData = async () => {
      try {
        const response = await axios.get('https://api.example.com/generate-test'); // Replace with your actual API endpoint
        setTestData(response.data); // Assuming the response data is the test array
        setSelectedAnswers(Array(response.data.length).fill(null)); // Initialize selected answers based on fetched data length
        setLoading(false);
      } catch (err) {
        console.error("Error fetching test data:", err);
        setError(err); // Set error state
        setLoading(false);
      }
    };

    fetchTestData();
  }, []); // Empty dependency array means this runs once on mount

  useEffect(() => {
    if (!submitted && testData) { // Also check if testData is available
      setSelectedAnswers(Array(testData.length).fill(null))
      setTestResults(null)
      setStartTime(Date.now());
    } else {
      setStartTime(null);
    }
    // Reset currentQuestionIndex when test is retried
    // This part is handled in TestTaking.jsx via selectedAnswers change

    return () => {
      // Cleanup logic
    };
  }, [submitted, testData]); // Add testData to dependency array

  // const processTestResults = () => {
  //   const endTime = Date.now();
  //   const duration = startTime ? endTime - startTime : 0;

  //   const totalQuestions = testData.length;
  //   let attemptedQuestions = 0;
  //   let correctAnswers = 0;

  //   // Calculate overall stats
  //   selectedAnswers.forEach((selectedOptionIndex, questionIndex) => {
  //     if (selectedOptionIndex !== null) { // Check if question was attempted
  //       attemptedQuestions++;
  //       const question = testData[questionIndex];
  //       if (question.options[selectedOptionIndex]?.isCorrect) {
  //         correctAnswers++;
  //       }
  //     }
  //   });

  //   const overallAccuracy = attemptedQuestions > 0 ? (correctAnswers / attemptedQuestions) * 100 : 0;

  //   // Calculate topic-wise stats
  //   const topicResults = {};
  //   testData.forEach((question, questionIndex) => {
  //     const topic = question.topic;
  //     if (!topicResults[topic]) {
  //       topicResults[topic] = {
  //         totalQuestions: 0,
  //         attemptedQuestions: 0,
  //         correctAnswers: 0,
  //       };
  //     }
  //     topicResults[topic].totalQuestions++;

  //     const selectedOptionIndex = selectedAnswers[questionIndex];
  //     if (selectedOptionIndex !== null) { // Check if question was attempted
  //       topicResults[topic].attemptedQuestions++;
  //       if (question.options[selectedOptionIndex]?.isCorrect) {
  //         topicResults[topic].correctAnswers++;
  //       }
  //     }
  //   });

  //   const minutes = Math.floor(duration / 60000);
  //   const seconds = Math.floor((duration % 60000) / 1000);
  //   const timeTaken = `${minutes} min ${seconds} sec`;

  //   setTestResults({
  //     totalQuestions,
  //     attemptedQuestions,
  //     correctAnswers,
  //     overallAccuracy: overallAccuracy.toFixed(2),
  //     timeTaken: timeTaken,
  //     topicResults: topicResults, // Include topic-wise results
  //   });
  // };

  const processTestResults = async() => {
    try{
    const res = await fetch('https://api.example.com/result', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({selectedAnswers,testData}),
    })
    const resultsData = await res.json();
    console.log("Test submission successful, results:", resultsData);
    setTestResults(resultsData);
  }catch(err){
    console.log(err)
  }
    };
    


  // Show loading or error state while fetching data
  if (loading) {
    return <div>Loading test data...</div>;
  }

  if (error) {
    return <div>Error loading test data. Please try again.</div>;
  }

  // Render test components once data is loaded
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