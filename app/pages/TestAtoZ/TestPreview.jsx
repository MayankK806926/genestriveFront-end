"use client";
import React, { useState, useEffect } from "react";
import TestTaking from "./TestTaking";
import TestResult from "./TestResult";
import { useSearchParams } from "next/navigation";
import GenerateTest from "./GenerateTest";

export default function TestPreview() {
  const [requestData, setRequestData] = useState(null);
  const [testData, setTestData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("generate");
  const [category, setCategory] = useState(null);
  const [testResults, setTestResults] = useState(null);
  const [startTime, setStartTime] = useState("");
  const [totalTime, setTotalTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const searchParams = useSearchParams();

  useEffect(() => {
    const CategoryFromUrl = searchParams.get("category");
    if (CategoryFromUrl) setCategory(CategoryFromUrl);
    setLoading(false);
  }, []);

  const handleSubmit = async (data) => {
    setError(null);
    setLoading(true);
    setRequestData(data);
    setStartTime(Date.now());
    setTotalTime(data.time);
    try {
      const res = await fetch("/api/generate-test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          requestData: data,
          category,
          startTime,
        }),
      });

      if (!res.ok) {
        const errorBody = await res.text();
        throw new Error(`HTTP error! status: ${res.status}, body: ${errorBody}`);
      }

      const responseData = await res.json();
      setTestData(responseData.sampleData);
      setStatus("taking"); // move status change after data fetch
    } catch (err) {
      console.error("Error generating test:", err);
      setError(err.message || "An error occurred during test generation.");
    } finally {
      setLoading(false);
    }
  };

  const processTestResults = async () => {
    setLoading(true);
    const endTimeValue = Date.now();
    setEndTime(endTimeValue);
    try {
      const res = await fetch("/api/result", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ selectedAnswersbyid: selectedAnswersbyid, endTime: endTimeValue }),
      });
      const data = await res.json();
      console.log("Received results data:", data);
  
      if (!res.ok) throw new Error(data?.message || "An error occurred.");
  
      setTestResults(data.testResults);
      setStatus("result");
    } catch (err) {
      console.error("Error processing test results:", err);
      setError(err.message || "Error fetching results.");
    } finally {
      setLoading(false);
    }
  };
  

  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [selectedAnswersbyid, setSelectedAnswersbyid] = useState([]);

  useEffect(() => {
    if (status === "taking" && testData) {
      setSelectedAnswers(Array(testData.length).fill(null));
      setTestResults(null);
    }
  }, [status, testData]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#f6effe]">
        <div className="text-xl text-[#2f2f68]">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#f6effe]">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <>
      {status === "generate" && (
        <GenerateTest handleSubmit={handleSubmit} />
      )}
      {status === "taking" && testData && (
        <TestTaking
          setStatus={setStatus}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          selectedAnswersbyid={selectedAnswersbyid}
          setSelectedAnswersbyid={setSelectedAnswersbyid}
          testData={testData}
          totalTime={totalTime}
          processTestResults={processTestResults}
        />
      )}
      {status === "result" && (
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

