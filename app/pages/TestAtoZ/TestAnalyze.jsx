import React, { useState } from "react";
import { ChevronLeftNormal } from "../icons/ChevronLeftNormal";
import Navbar2 from "../components/Navbar2";
import QuestionRenderer from "../components/QuestionRenderer";
import IntegerType from "./AnswerTypes/IntegerType";
import DescriptType from "./AnswerTypes/DescriptType";
import DescriptType1 from "./AnswerTypes/DescriptType1";
import MCQs from "./AnswerTypes/MCQs";
import MCQs1 from "./AnswerTypes/MCQs1";
import MSelectQs from "./AnswerTypes/MSelectQs";
import NumericalType from "./AnswerTypes/NumericalType";
import Link from "next/link";

export default function TestAnalyze({ testData }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  if (!testData || !Array.isArray(testData) || testData.length === 0) return null;

  const currentQuestion = testData[currentQuestionIndex];
  if (!currentQuestion) return null;

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

  const inputData = {
    currentQuestion,
    currentQuestionIndex,
  };

  const renderAnswerType = () => {
    switch (currentQuestion.type) {
      case "mcq":
        return <MCQs1 Input={inputData} />;
      case "long answer":
      case "short answer":
      case "fill in the blanks":
        return <DescriptType1 Input={inputData} />;
      case "multiple correct":
        return <MCQs1 Input={inputData} />;
      case "Integer Type":
        return <DescriptType1 Input={inputData} />;
      case "Numerical Type":
        return <DescriptType1 Input={inputData} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#f6effe]">
     
      <div className="w-full mt-[-20px] h-[40px] mb-[100px] bg-white shadow-sm">
        <Navbar2 />
      </div>

      
      <div className="flex-grow w-full bg-[#f0ddff91] border-t border-[#d9d9d9] py-8">
        <div className="max-w-[1440px] mx-auto px-4">
      
          <div className="w-full mb-8">
            <div className="flex justify-between items-center mb-2">
              <p className="font-medium text-[#2f2f68] text-xl">
                Question {currentQuestionIndex + 1} out of {testData.length}
              </p>
            </div>
          </div>

         
          <div className="bg-white border border-[#d9d9d9] rounded-[20px] p-8">
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

        {currentQuestionIndex < testData.length - 1 ? (
          <button
            className="bg-[#5e2f7c] text-white font-semibold text-xl py-2 px-6 rounded-md cursor-pointer"
            onClick={handleNextQuestion}
          >
            Next
          </button>
        ) : (
          <Link href="/dashboard/test-result">
            <button className="bg-[#001e32] text-white font-semibold text-xl py-2 px-6 rounded-md cursor-pointer">
              Result
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
