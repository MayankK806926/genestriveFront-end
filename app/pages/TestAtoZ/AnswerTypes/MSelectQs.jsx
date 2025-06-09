import React from "react";

function MSelectQs({ Input }) {
  const {
    currentQuestion,
    currentQuestionIndex,
    selectedAnswers,
    setSelectedAnswers,
    selectedAnswersbyid,
    setSelectedAnswersbyid,
  } = Input;
  const handleOptionSelect = (optionIndex, id) => {
    const newSelectedAnswers = [...selectedAnswers];
    if (!newSelectedAnswers[currentQuestionIndex]) {
      newSelectedAnswers[currentQuestionIndex] = [optionIndex];
    } else {
      if (newSelectedAnswers[currentQuestionIndex].includes(optionIndex)) {
        newSelectedAnswers[currentQuestionIndex] = newSelectedAnswers[
          currentQuestionIndex
        ].filter((index) => index !== optionIndex);
      } else {
        newSelectedAnswers[currentQuestionIndex].push(optionIndex);
      }
    }
    setSelectedAnswers(newSelectedAnswers);
    const newSelectedAnswersbyid = [...selectedAnswersbyid];
    newSelectedAnswers[id] = newSelectedAnswers[currentQuestionIndex];
    setSelectedAnswersbyid(newSelectedAnswersbyid);
  };
  // Handler for option selection
  return (
    <div className="space-y-4">
      {currentQuestion.options.map((option, optionIndex) => {
        const isSelected =
          selectedAnswers[currentQuestionIndex] === optionIndex;
        let bgColor = "bg-white";
        let borderColor = "border-[#d9d9d9]";

        if (isSelected) {
          bgColor = "bg-[#f7ecff]";
          borderColor = "border-[#5e2f7c]";
        }

        return (
          <div
            key={optionIndex}
            className={`w-full ${bgColor} border ${borderColor} p-4 rounded-md cursor-pointer`}
            onClick={() => handleOptionSelect(optionIndex, currentQuestion.id)}
          >
            <span className="font-medium text-[#2f2f68] text-[32px]">
              {option.text}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default MSelectQs;
