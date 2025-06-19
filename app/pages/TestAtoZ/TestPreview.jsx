"use client";
import React, { useState, useEffect } from "react";
import TestTaking from "./TestTaking";
import TestResult from "./TestResult";
import { useSearchParams } from "next/navigation";
import GenerateTest from "./GenerateTest";
// import axios from 'axios'; // axios is no longer used for initial fetch
// import { useRouter } from 'next/navigation'; // useRouter is no longer needed for query params// Import useSearchParams

export default function TestPreview() {
  // const router = useRouter(); // useRouter is no longer needed for query params // Initialize useSearchParams
  // Initialize testData as null initially
  // Optional: Fallback to sample data on error
  const [requestData, setRequestData] = useState(null);
  const [testData, setTestData] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state
  const [status, setStatus] = useState("generate");
  const [category, setCategory] = useState(null);
  const [testResults, setTestResults] = useState(null);
  const [startTime, setStartTime] = useState("");
  const [totalTime, setTotalTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const searchParams = useSearchParams();
useEffect(() => {
  setLoading(true);
  const CategoryFromUrl = searchParams.get("category");
  console.log("Category from URL:", CategoryFromUrl);
  if (CategoryFromUrl) setCategory(CategoryFromUrl);
  setLoading(false); // Set loading state while fetching topics
  // useSearchParams is a static hook, no dependencies needed for initial read
}, []);

  const handleSubmit = async (data) => {
    setError(null); // Clear previous errors
    setLoading(true);
    console.log("data",data);
    setRequestData(data);
    setStartTime(new Date());
    setTotalTime(data.time);
    try {
      console.log("Generating test with data:", requestData);
      const res = await fetch("/api/generate-test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          requestData,
          category,
          startTime
        }),
      });

      if (!res.ok) {
        const errorBody = await res.text(); // Read error body
        throw new Error(
          `HTTP error! status: ${res.status}, body: ${errorBody}`
        );
      }

      const data = await res.json(); // Use await here
      setTestData(data.sampleData);
      console.log("Test generated successfully:", data); // Pass the URL string directly
    } catch (err) {
      console.error("Error generating test:", err);
      setError(err.message || "An error occurred during test generation."); // Set error state
    } finally {
      setLoading(false); // Clear loading state
    }
  };

  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [selectedAnswersbyid, setSelectedAnswersbyid] = useState([]);

  useEffect(() => {
    if (status==="taking" && testData) {
      // Also check if testData is available
      setSelectedAnswers(Array(testData.length).fill(null)); // Initialize with null
      setTestResults(null);
      setStartTime(Date.now());
    } else {
      setStartTime(null);
    }
  }, [status, testData]); // Add testData to dependency array

  //uncomment during API integration
  const processTestResults = async () => {
    setStatus("result");
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


  // Render test components once data is loaded
  return (
    <>
      {status==="generate" ?(
        <GenerateTest
          handleSubmit={handleSubmit}
          setStatus={setStatus}
        />
      ) : status==="taking" ?(
        <TestTaking
          setStatus={setStatus}
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
          setStatus={setStatus}
          totalTime={totalTime}
          startTime={startTime}
          endTime={endTime}
        />
      )}
    </>
  );
}
