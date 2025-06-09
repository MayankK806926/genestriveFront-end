"use client";
import React, { useState, useEffect } from "react";
import TestTaking from "./TestTaking";
import TestResult from "./TestResult";
// import axios from 'axios'; // axios is no longer used for initial fetch
// import { useRouter } from 'next/navigation'; // useRouter is no longer needed for query params
import { useSearchParams } from "next/navigation"; // Import useSearchParams

export default function TestPreview() {
  // const router = useRouter(); // useRouter is no longer needed for query params
  const searchParams = useSearchParams(); // Initialize useSearchParams
  // Initialize testData as null initially
  // Optional: Fallback to sample data on error

  const [testData, setTestData] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state
  const [submitted, setSubmitted] = useState(false);
  const [category, setCategory] = useState("");
  const [testResults, setTestResults] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [totalTime, setTotalTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  // const sampleData = [
  //   {
  //     type:"Multiple Chioce Question",
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
  //     type:"Multiple Chioce Question",
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

  //uncomment during API integration
  useEffect(() => {
    // Read test data from URL search parameters
    const testDataString = searchParams.get("testData");
    const itme = searchParams.get("time");
    setTotalTime(itme);

    if (testDataString) {
      try {
        const dataFromQuery = JSON.parse(testDataString);
        if (dataFromQuery && Array.isArray(dataFromQuery)) {
          console.log(
            "Valid test data received from URL search params:",
            dataFromQuery
          );
          setTestData(dataFromQuery);
          setSelectedAnswers(Array(dataFromQuery.length).fill(null));
          console.log("Setting loading to false after receiving valid data.");
          setLoading(false);
        } else {
          console.error(
            "Invalid test data format from URL search params:",
            dataFromQuery
          );
          console.log("Setting loading to false after invalid data format.");
          setError(new Error("Invalid test data received from generator."));
          setLoading(false);
        }
      } catch (err) {
        console.error("Error parsing test data from URL search params:", err);
        console.log("Setting loading to false after parsing error.");
        setError(new Error("Failed to load test data."));
        setLoading(false);
      }
    } else {
      // Handle case where no testData is in query (e.g., direct access or generation failed)
      console.warn("No test data found in URL search params.");
      console.log("Setting loading to false - no test data in query.");
      setError(new Error("No test data provided or generation failed."));
      setLoading(false);
      // Optionally, redirect to generate page (requires useRouter)
      // const router = useRouter();
      // router.push('/dashboard/generate-test');
    }
    // useSearchParams is a static hook, no dependencies needed for initial read
  }, []);

  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [selectedAnswersbyid, setSelectedAnswersbyid] = useState([]);

  useEffect(() => {
    if (!submitted && testData) {
      // Also check if testData is available
      setSelectedAnswers(Array(testData.length).fill(null)); // Initialize with null
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
  const processTestResults = async () => {
    const endTime = Date.now();
    setEndTime(endTime);
    try {
      console.log("Submitting test results...");
      const res = await fetch("/api/result", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selectedAnswersbyid, endTime }),
      });

      console.log("API Result Response object:", res);

      if (!res.ok) {
        console.error("API Error Response:", res);
        const errorText = await res.text(); // Read as text in case it's not JSON
        console.error("API Error Response Body:", errorText);
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const resultsData = await res.json();
      console.log("Test submission successful, results data:", resultsData);

      // Check if the expected data structure is present
      if (resultsData?.testResults) {
        setTestResults(resultsData.testResults); // Set the state with the nested results
      } else {
        console.error("API response did not contain testResults", resultsData);
        // Handle this case, maybe set an error state or display a message
        setError(new Error("Invalid results data from API"));
      }
    } catch (err) {
      console.error("Error processing test results:", err);
      // Optionally, set an error state for the user
      // setError(err);
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
        <div className="text-xl text-[#2f2f68]">
          Error loading test data. Please try again.
        </div>
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
          selectedAnswersbyid={selectedAnswersbyid}
          setSelectedAnswersbyid={setSelectedAnswersbyid}
          testData={testData}
          processTestResults={processTestResults}
        />
      ) : (
        <TestResult
          results={testResults}
          setSubmitted={setSubmitted}
          totaltTime={totalTime}
          startTime={startTime}
          endTime={endTime}
        />
      )}
    </>
  );
}
