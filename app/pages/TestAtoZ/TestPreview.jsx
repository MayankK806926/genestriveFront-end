"use client"
import React, { useState, useEffect } from "react";
import TestTaking from "./TestTaking";
import TestResult from "./TestResult";
import axios from 'axios';

export default function TestPreview() {
  // Initialize testData as null initially
          // Optional: Fallback to sample data on error

    const [testData, setTestData] = useState(null);
    const [loading, setLoading] = useState(true); // Add loading state
    const [error, setError] = useState(null); // Add error state 
    const [submitted, setSubmitted] = useState(false);
    const [testResults, setTestResults] = useState(null);
    const [startTime, setStartTime] = useState(null);
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
    // setSelectedAnswers(Array(sampleData.length).fill(0));

  //uncomment during API integration
  useEffect(() => {
    // Fetch test data when the component mounts
    const fetchTestData = async () => {
      try {
        console.log('Fetching test data...');
        const response = await axios.get('/api/generate-test'); // Replace with your actual API endpoint
        console.log('API Response:', response);
        
        if (response.data && Array.isArray(response.data)) {
          console.log('Valid test data received:', response.data);
          setTestData(response.data);
          setSelectedAnswers(Array(response.data.length).fill(0));
        } else {
          console.error('Invalid test data format:', response.data);
          setError(new Error('Invalid test data received'));
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching test data:", err);
        console.error("Error details:", {
          message: err.message,
          status: err.response?.status,
          data: err.response?.data
        });
        setError(err);
        setLoading(false);
      }
    };

    fetchTestData();
  }, []); // Empty dependency array means this runs once on mount
  
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  useEffect(() => {
    if (!submitted && testData) { // Also check if testData is available
      setSelectedAnswers(Array(testData.length).fill(0));
      setTestResults(null);
      setStartTime(Date.now());
    } else {
      setStartTime(null);
    }
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


  //uncomment during API integration
  const processTestResults = async() => {
    try{
    const res = await fetch('/api/result', {
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
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#f6effe]">
        <div className="text-xl text-[#2f2f68]">Loading test data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#f6effe]">
        <div className="text-xl text-[#2f2f68]">Error loading test data. Please try again.</div>
      </div>
    );
  }

  if (!testData || !Array.isArray(testData) || testData.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#f6effe]">
        <div className="text-xl text-[#2f2f68]">No test data available.</div>
      </div>
    );
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