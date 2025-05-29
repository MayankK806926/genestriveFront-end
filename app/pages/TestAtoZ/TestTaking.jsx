import React, { useState, useEffect } from "react";
import { ChevronLeftNormal } from "../icons/ChevronLeftNormal";
import Navbar2 from "../components/Navbar2";

export default function TestTaking({ setSubmitted, selectedAnswers, setSelectedAnswers, testData, processTestResults }) {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = testData[currentQuestionIndex];

  // Reset currentQuestionIndex when test is retried
  useEffect(() => {
    // Only reset if all answers are null (indicating a test retry)
    if (selectedAnswers.every(answer => answer === null)) {
      setCurrentQuestionIndex(0);
    }
  }, [selectedAnswers]);

  // Handler for option selection
  const handleOptionSelect = (optionIndex) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = optionIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  // Handler for navigating to the next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < testData.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  };

  // Handler for navigating to the previous question
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    }
  };

  // Handler for submitting the test
  const handleSubmitTest = () => {
    processTestResults();
    setSubmitted(true);
  };

  // Calculate progress percentage
  const progressPercentage = ((currentQuestionIndex + 1) / testData.length) * 100;

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#f6effe]">
      <div className="w-full mt-[-20px] h-[40px] mb-[100px] bg-white shadow-sm">
        <Navbar2 />
      </div>

      <div className="flex-grow w-full bg-[#f0ddff91] border-t border-solid border-[#d9d9d9] py-8">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="w-full mb-8">
            <div className="flex justify-between items-center mb-2">
              <p className="font-medium text-[#2f2f68] text-xl">Question {currentQuestionIndex + 1} out of {testData.length}</p>
              <p className="font-normal text-[#2f2f68] text-xl">{progressPercentage.toFixed(0)}% completed</p>
            </div>
            <div className="w-full bg-[#d9d9d9] rounded-[15px] h-3.5">
              <div className="bg-[#5e2f7c] rounded-[15px] h-3.5" style={{ width: `${progressPercentage}%` }}></div>
            </div>
          </div>

          <div className="bg-white border border-solid border-[#d9d9d9] rounded-[20px] p-8">
            <p className="font-medium text-[#2f2f68] text-[32px] mb-4">{currentQuestion.question}</p>
            <div className="w-fit bg-[#f7ecff] px-3 py-1 rounded-md flex items-center justify-center mb-6 text-[#3e4954] text-xl">{currentQuestion.topic}</div>

            <div className="space-y-4">
              {currentQuestion.options.map((option, optionIndex) => {
                const isSelected = selectedAnswers[currentQuestionIndex] === optionIndex;
                let bgColor = 'bg-white';
                let borderColor = 'border-[#d9d9d9]';

                if (isSelected) {
                  if (option.isCorrect) {
                    bgColor = 'bg-[#05ff6f82]';
                    borderColor = 'border-[#007e35]';
                  } else {
                    bgColor = 'bg-[#ec303094]';
                    borderColor = 'border-[#850000]';
                  }
                }

                return (
                  <div 
                    key={optionIndex} 
                    className={`w-full ${bgColor} border ${borderColor} p-4 rounded-md cursor-pointer`}
                    onClick={() => handleOptionSelect(optionIndex)}
                  >
                    <span className="font-medium text-[#2f2f68] text-[32px]">{option.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 mt-8 mb-8 flex justify-between items-center">
        <button 
          className={`flex items-center font-normal text-[#2f2f68] text-xl cursor-pointer ${currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
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