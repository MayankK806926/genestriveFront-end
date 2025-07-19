import React, { useState, useEffect } from "react";
import { ChevronLeftNormal } from "../icons/ChevronLeftNormal";
import Navbar2 from "../components/Navbar2";
import QuestionRenderer from "../components/QuestionRenderer";
import IntegerType from "./AnswerTypes/IntegerType";
import DescriptType from "./AnswerTypes/DescriptType";
import MCQs from "./AnswerTypes/MCQs";
import MSelectQs from "./AnswerTypes/MSelectQs";
import NumericalType from "./AnswerTypes/NumericalType";

export default function TestTaking({
  setStatus,
  handleSubmit,
  selectedAnswers,
  setSelectedAnswers,
  selectedAnswersbyid,
  setSelectedAnswersbyid,
  testData,
  totalTime, // in minutes or seconds
  reviewedQuestions,
  setReviewedQuestions,
  visitedQuestions,
  setVisitedQuestions,
}) {
  // Timer logic
  const [timeLeft, setTimeLeft] = useState(totalTime ? totalTime * 60 : 0); // seconds
  // Calculate the max timer string for box sizing (e.g., 99:59 for up to 99 min)
  const maxTimerString = totalTime
    ? `${String(Math.floor(totalTime)).padStart(2, "0")}:00`
    : "00:00";

  useEffect(() => {
    if (!totalTime) return;
    setTimeLeft(totalTime * 60);
  }, [totalTime]);

  useEffect(() => {
    if (!timeLeft || timeLeft <= 0) {
      if (timeLeft === 0) {
        // Auto-submit when timer runs out
        setStatus("result");
      }
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Format timer as mm:ss
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Only check if testData is valid, don't show loading state
  console.log("testData===", testData);
  if (!testData || !Array.isArray(testData) || testData.length === 0) {
    return null;
  }

  const currentQuestion = testData[currentQuestionIndex];

  // Only check if currentQuestion exists, don't show loading state
  if (!currentQuestion) {
    return null;
  }

  // Reset currentQuestionIndex when test is retried
  useEffect(() => {
    // Only reset if all answers are null (indicating a test retry)
    if (selectedAnswers.every((answer) => answer === null)) {
      setCurrentQuestionIndex(0);
    }
  }, [selectedAnswers]);

  // Handler for option selection
  const handleOptionSelect = (optionIndex, id) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = optionIndex;
    setSelectedAnswers(newSelectedAnswers);
    const newSelectedAnswersbyid = [...selectedAnswersbyid];
    newSelectedAnswersbyid[id] = optionIndex;
    setSelectedAnswersbyid(newSelectedAnswersbyid);
  };

  // Handler for toggling review status
  const toggleReview = () => {
    const newReviewedQuestions = new Set(reviewedQuestions);
    if (newReviewedQuestions.has(currentQuestionIndex)) {
      newReviewedQuestions.delete(currentQuestionIndex);
    } else {
      newReviewedQuestions.add(currentQuestionIndex);
    }
    setReviewedQuestions(newReviewedQuestions);
  };

  // Handler for navigating to the next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < testData.length - 1) {
      // Mark current question as visited
      setVisitedQuestions((prev) => new Set([...prev, currentQuestionIndex]));
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Handler for navigating to the previous question
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      // Mark current question as visited
      setVisitedQuestions((prev) => new Set([...prev, currentQuestionIndex]));
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Handler for submitting the test
  const handleSubmitTest = () => {
    setStatus("review");
  };

  // Calculate progress percentage
  const progressPercentage =
    ((currentQuestionIndex + 1) / testData.length) * 100;

  // Dynamic answer type rendering
  const input = {
    currentQuestion,
    currentQuestionIndex,
    selectedAnswers,
    setSelectedAnswers,
    selectedAnswersbyid,
    setSelectedAnswersbyid,
  };

  const renderAnswerType = () => {
    switch (currentQuestion.type) {
      case "mcq":
        return <MCQs Input={input} />;
      case "long answer":
        return <DescriptType Input={input} />;
      case "short answer":
        return <DescriptType Input={input} />;
      case "fill in the blanks":
        return <DescriptType Input={input} />;
      case "multiple correct":
        return <MSelectQs Input={input} />;
      case "Integer Type":
        return <IntegerType Input={input} />;
      case "Numerical Type":
        return <NumericalType Input={input} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    // Mark the current question as visited whenever it changes
    setVisitedQuestions(prev => new Set([...prev, currentQuestionIndex]));
  }, [currentQuestionIndex]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#f6effe]">
      <div className="w-full mt-[-20px] h-[40px] mb-[100px] bg-white shadow-sm">
        <Navbar2 />
      </div>

      <div className="flex-grow w-full bg-[#f0ddff91] border-t border-solid border-[#d9d9d9] py-8">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="w-full mb-8">
            <div className="flex justify-between items-center mb-2">
              <p className="font-medium text-[#2f2f68] text-xl">
                Question {currentQuestionIndex + 1} out of {testData.length}
              </p>
              <div className="flex items-center gap-4">
                <p className="font-normal text-[#2f2f68] text-xl">
                  {progressPercentage.toFixed(0)}% completed
                </p>
                {/* Timer */}
                <div
                  className="flex items-center justify-center text-white px-6 py-2 rounded-xl shadow-lg text-xl font-bold border-2 border-[#e0cfff] transition-all duration-300"
                  style={{
                    minWidth: `calc(1.4em * ${maxTimerString.length} + 48px)`,
                    boxShadow: "0 4px 16px 0 #e0cfff55",
                    background: (() => {
                      // Gradient: #F0DDFF (completed) to #5F307D (left)
                      const percent =
                        totalTime && timeLeft >= 0
                          ? timeLeft / (totalTime * 60)
                          : 1;
                      const leftColor = "#5F307D";
                      const doneColor = "#D9D9D9";
                      // The gradient starts with doneColor (completed) and ends with leftColor (remaining)
                      // percent*100% is the stop for completed, rest is left
                      return `linear-gradient(90deg, ${doneColor} 0%, ${doneColor} ${
                        (1 - percent) * 100
                      }%, ${leftColor} ${
                        (1 - percent) * 100
                      }%, ${leftColor} 100%)`;
                    })(),
                  }}
                >
                  <svg
                    className="w-6 h-6 mr-3 drop-shadow"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#f7ecff"
                      strokeWidth="2.5"
                      fill="none"
                    />
                    <path
                      d="M12 7v5l3 2"
                      stroke="#f7ecff"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span
                    style={{
                      display: "inline-block",
                      minWidth: `${maxTimerString.length}ch`,
                      textAlign: "center",
                      width: "100%",
                      letterSpacing: "0.05em",
                      textShadow: "0 1px 8px #2f2f6840",
                    }}
                  >
                    {formatTime(timeLeft)}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full bg-[#d9d9d9] rounded-[15px] h-3.5">
              <div
                className="bg-[#5e2f7c] rounded-[15px] h-3.5"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Question Navigation Panel */}
          <div className="mb-6 bg-white rounded-lg p-4 shadow-sm border border-[#e0e0e0]">
            <h3 className="text-lg font-semibold text-[#2f2f68] mb-3">
              Question Navigation
            </h3>
            <div className="grid grid-cols-10 gap-2">
              {testData.map((question, index) => {
                const isAnswered = selectedAnswers[index] !== null;
                const isReviewed = reviewedQuestions.has(index);
                const isCurrent = index === currentQuestionIndex;

                const isVisited = visitedQuestions.has(index);

                let bgColor = "bg-gray-200";
                let textColor = "text-gray-600";
                let borderColor = "border-gray-300";

                if (isCurrent) {
                  bgColor = "bg-[#5e2f7c]";
                  textColor = "text-white";
                  borderColor = "border-[#5e2f7c]";
                } else if (isReviewed && isAnswered) {
                  bgColor = "bg-[#ffd700]";
                  textColor = "text-[#2f2f68]";
                  borderColor = "border-[#ffd700]";
                } else if (isReviewed) {
                  bgColor = "bg-[#ffb347]";
                  textColor = "text-white";
                  borderColor = "border-[#ffb347]";
                } else if (isAnswered) {
                  bgColor = "bg-[#90EE90]";
                  textColor = "text-[#2f2f68]";
                  borderColor = "border-[#90EE90]";
                } else if (isVisited) {
                  bgColor = "bg-red-400";
                  textColor = "text-white";
                  borderColor = "border-red-400";
                }

                return (
                  <button
                    key={index}
                    onClick={() => setCurrentQuestionIndex(index)}
                    className={`w-10 h-10 rounded-lg border-2 ${bgColor} ${textColor} ${borderColor} font-medium text-sm flex items-center justify-center transition-all duration-200 hover:scale-105 ${
                      isCurrent ? "ring-2 ring-[#5e2f7c] ring-opacity-50" : ""
                    }`}
                    title={`Question ${index + 1}${
                      isReviewed ? " (Marked for Review)" : ""
                    }${isAnswered ? " (Answered)" : ""}`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
            <div className="flex items-center gap-4 mt-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#90EE90] rounded border-2 border-[#90EE90]"></div>
                <span className="text-[#2f2f68]">Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-400 rounded border-2 border-red-400"></div>
                <span className="text-[#2f2f68]">Not Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-200 rounded border-2 border-gray-300"></div>
                <span className="text-[#2f2f68]">Not Visited</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#ffb347] rounded border-2 border-[#ffb347]"></div>
                <span className="text-[#2f2f68]">Marked For Review</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#ffd700] rounded border-2 border-[#ffd700]"></div>
                <span className="text-[#2f2f68]">
                  Answered & Marked For Review
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-solid border-[#d9d9d9] rounded-[20px] p-8">
            <div className="font-medium text-[#2f2f68] text-[32px] mb-4">
              <QuestionRenderer content={currentQuestion.question} />
            </div>
            <div className="w-fit bg-[#f7ecff] px-3 py-1 rounded-md flex items-center justify-center mb-6 text-[#3e4954] text-xl">
              {currentQuestion.topic}
            </div>
            {renderAnswerType()}
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 mt-8 mb-8 flex justify-between items-center">
        <button
          className={`flex items-center font-normal text-[#2f2f68] text-xl cursor-pointer ${
            currentQuestionIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handlePreviousQuestion}
          disabled={currentQuestionIndex === 0}
        >
          <ChevronLeftNormal className="w-5 h-5 mr-1" />
          Previous
        </button>
        <div className="flex items-center gap-4">
          {/* Mark as Review Button */}
          <button
            onClick={toggleReview}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-xl transition-all duration-200 ${
              reviewedQuestions.has(currentQuestionIndex)
                ? "bg-[#5e2f7c] text-white shadow-md"
                : "bg-[#f7ecff] text-[#5e2f7c] border border-[#5e2f7c] hover:bg-[#5e2f7c] hover:text-white"
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {reviewedQuestions.has(currentQuestionIndex)
              ? "Marked for Review"
              : "Mark as Review"}
          </button>

          {currentQuestionIndex < testData.length - 1 ? (
            <button
              className="bg-[#5e2f7c] text-white font-semibold text-xl py-2 px-6 rounded-md cursor-pointer"
              onClick={handleNextQuestion}
            >
              Next
            </button>
          ) : (
            <button
              className="bg-[#001e32] text-white font-semibold text-xl py-2 px-6 rounded-md cursor-pointer"
              onClick={handleSubmitTest}
            >
              Submit Test
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
