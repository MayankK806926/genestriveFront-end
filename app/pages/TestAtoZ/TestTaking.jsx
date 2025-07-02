import React, { useState, useEffect } from "react";
import { ChevronLeftNormal } from "../icons/ChevronLeftNormal";
import Navbar2 from "../components/Navbar2";
import IntegerType from "./AnswerTypes/IntegerType";
import DescriptType from "./AnswerTypes/DescriptType";
import MCQs from "./AnswerTypes/MCQs";
import MSelectQs from "./AnswerTypes/MSelectQs";
import NumericalType from "./AnswerTypes/NumericalType";

export default function TestTaking({
  setStatus,
  selectedAnswers,
  setSelectedAnswers,
  selectedAnswersbyid,
  setSelectedAnswersbyid,
  testData,
  totalTime,
  processTestResults
}) {
  const [timeLeft, setTimeLeft] = useState(totalTime ? totalTime * 60 : 0);
  const maxTimerString = totalTime ? `${String(Math.floor(totalTime)).padStart(2, '0')}:00` : '00:00';
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    if (!totalTime) return;
    setTimeLeft(totalTime * 60);
  }, [totalTime]);

  useEffect(() => {
    if (!timeLeft || timeLeft <= 0) {
      if (timeLeft === 0) {
        console.log("Time Left == 0, auto-submitting test");
        if (typeof processTestResults === "function") {
          processTestResults(selectedAnswersbyid);
        }
        setStatus("result");
      }
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  if (!testData || !Array.isArray(testData) || testData.length === 0) return null;
  const currentQuestion = testData[currentQuestionIndex];
  if (!currentQuestion) return null;

  useEffect(() => {
    if (selectedAnswers.every((answer) => answer === null)) {
      setCurrentQuestionIndex(0);
    }
  }, [selectedAnswers]);

  const handleOptionSelect = (optionIndex, id) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = optionIndex;
    setSelectedAnswers(newSelectedAnswers);
    const newSelectedAnswersbyid = [...selectedAnswersbyid];
    newSelectedAnswersbyid[id] = optionIndex;
    setSelectedAnswersbyid(newSelectedAnswersbyid);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < testData.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleSubmitTest = () => {
    console.log("Submit Test button clicked");
    if (typeof processTestResults === "function") {
      processTestResults(selectedAnswersbyid);
    }
    setStatus("result");
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const progressPercentage = ((currentQuestionIndex + 1) / testData.length) * 100;

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
      case "short answer":
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
                <div
                  className="flex items-center justify-center text-white px-6 py-2 rounded-xl shadow-lg text-xl font-bold border-2 border-[#e0cfff] transition-all duration-300"
                  style={{
                    minWidth: `calc(1.4em * ${maxTimerString.length} + 48px)`,
                    boxShadow: '0 4px 16px 0 #e0cfff55',
                    background: (() => {
                      const percent = totalTime && timeLeft >= 0 ? timeLeft / (totalTime * 60) : 1;
                      const leftColor = '#5F307D';
                      const doneColor = '#D9D9D9';
                      return `linear-gradient(90deg, ${doneColor} 0%, ${doneColor} ${(1 - percent) * 100}%, ${leftColor} ${(1 - percent) * 100}%, ${leftColor} 100%)`;
                    })()
                  }}
                >
                  <svg className="w-6 h-6 mr-3 drop-shadow" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="#f7ecff" strokeWidth="2.5" fill="none"/>
                    <path d="M12 7v5l3 2" stroke="#f7ecff" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                  <span style={{ display: 'inline-block', minWidth: `${maxTimerString.length}ch`, textAlign: 'center', width: '100%', letterSpacing: '0.05em', textShadow: '0 1px 8px #2f2f6840' }}>{formatTime(timeLeft)}</span>
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

          <div className="bg-white border border-solid border-[#d9d9d9] rounded-[20px] p-8">
            <p className="font-medium text-[#2f2f68] text-[32px] mb-4">
              {currentQuestion.question}
            </p>
            <div className="w-fit bg-[#f7ecff] px-3 py-1 rounded-md flex items-center justify-center mb-6 text-[#3e4954] text-xl">
              {currentQuestion.topic}
            </div>
            {renderAnswerType()}
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 mt-8 mb-8 flex justify-between items-center">
        <button
          className={`flex items-center font-normal text-[#2f2f68] text-xl cursor-pointer ${currentQuestionIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={handlePreviousQuestion}
          disabled={currentQuestionIndex === 0}
        >
          <ChevronLeftNormal className="w-5 h-5 mr-1" />
          Previous
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
  );
}
