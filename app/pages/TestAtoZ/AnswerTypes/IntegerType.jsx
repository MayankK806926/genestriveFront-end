"use client";
import React, { useState } from "react";

function IntegerType({ Input }) {
  const {
    currentQuestion,
    currentQuestionIndex,
    selectedAnswers,
    setSelectedAnswers,
    selectedAnswersbyid,
    setSelectedAnswersbyid,
  } = Input;
  const [isinteger, setIsInteger] = useState(true);
  const handleNoChange = (e) => {
    if (!/^\d*$/.test(e.target.value)) {
      // If the input is not a valid integer, do nothing
      setIsInteger(false);
      const newSelectedAnswers = [...selectedAnswers];
      newSelectedAnswers[currentQuestionIndex] = 0;
      setSelectedAnswers(newSelectedAnswers);
      const newSelectedAnswersbyid = [...selectedAnswersbyid];
      newSelectedAnswersbyid[currentQuestion.id] = 0;
      setSelectedAnswersbyid(newSelectedAnswersbyid);
    } else {
      setIsInteger(true);
      const newSelectedAnswers = [...selectedAnswers];
      newSelectedAnswers[currentQuestionIndex] = e.target.value;
      setSelectedAnswers(newSelectedAnswers);
      const newSelectedAnswersbyid = [...selectedAnswersbyid];
      newSelectedAnswersbyid[currentQuestion.id] = e.target.value;
      setSelectedAnswersbyid(newSelectedAnswersbyid);
    }
  };

  return (
    <div className="space-y-4">
      <Input
        type={Number}
        className="w-full border border-[#d9d9d9] p-4 rounded-md text-[20px] text-[#2f2f68] focus:border-[#5e2f7c] focus:outline-none"
        placeholder="Type your answer here..."
        value={selectedAnswers[currentQuestionIndex] || 0}
        onChange={handleNoChange}
      />
      {!isinteger && (
        <p className="text-gray-500 text-sm">Please enter a valid integer.</p>
      )}
    </div>
  );
}

export default IntegerType;
