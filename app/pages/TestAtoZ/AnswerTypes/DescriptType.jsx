import React from "react";

function DescriptType({ Input }) {
  const {
    currentQuestion,
    currentQuestionIndex,
    selectedAnswers,
    setSelectedAnswers,
    selectedAnswersbyid,
    setSelectedAnswersbyid,
  } = Input;
  const handleTextChange = (e) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = e.target.value;
    setSelectedAnswers(newSelectedAnswers);
    const newSelectedAnswersbyid = [...selectedAnswersbyid];
    newSelectedAnswersbyid[currentQuestion.id] = e.target.value;
    setSelectedAnswersbyid(newSelectedAnswersbyid);
  };

  return (
    <div className="space-y-4">
      <textarea
        className="w-full border border-[#d9d9d9] p-4 rounded-md text-[20px] text-[#2f2f68] focus:border-[#5e2f7c] focus:outline-none"
        rows={5}
        placeholder="Type your answer here..."
        value={selectedAnswers[currentQuestionIndex] || ""}
        onChange={handleTextChange}
      />
    </div>
  );
}

export default DescriptType;
