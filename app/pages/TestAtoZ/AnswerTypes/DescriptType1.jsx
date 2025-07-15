import React, { useEffect, useState } from "react";

function DescriptType({ Input }) {
  const { currentQuestion, currentQuestionIndex, selectedAnswers } = Input;

  const yourAnswer = selectedAnswers?.[currentQuestionIndex] || "";
  const correctAnswer = currentQuestion.correctAnswer || "Not Provided";

  const [solution, setSolution] = useState("Loading solution...");

  useEffect(() => {
    async function fetchSolution() {
      try {
        const res = await fetch("/api/solution", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question: currentQuestion.question }),
        });
        const data = await res.json();
        if (!res.ok) {
          console.error("API error:", data.error); // This will show in the browser console
          setSolution("Failed to load solution.");
          return;
        }
        if (data?.solution) {
          setSolution(data.solution);
        } else {
          setSolution("No explanation provided.");
        }
      } catch (error) {
        console.error("Error fetching solution:", error);
        setSolution("Failed to load solution.");
      }
    }

    if (currentQuestion?.question) {
      fetchSolution();
    } else {
      setSolution("No explanation provided.");
    }
  }, [currentQuestion?.question]);

  return (
    <div className="space-y-6">
      <div>
        <p className="text-lg font-semibold text-[#2f2f68] mb-2">Your Answer</p>
        <textarea
          className="w-full border border-[#d9d9d9] p-4 rounded-md text-[18px] text-[#2f2f68] bg-gray-100"
          rows={4}
          value={yourAnswer}
          readOnly
        />
      </div>

      <div>
        <p className="text-lg font-semibold text-[#2f2f68] mb-2">
          Correct Answer
        </p>
        <div className="w-full border border-green-400 bg-green-50 p-4 rounded-md text-[18px] text-[#2f2f68]">
          {correctAnswer}
        </div>
      </div>

      <div>
        <p className="text-lg font-semibold text-[#2f2f68] mb-2">Solution</p>
        <div className="w-full border border-blue-400 bg-blue-50 p-4 rounded-md text-[18px] text-[#2f2f68]">
          {solution}
        </div>
      </div>
    </div>
  );
}

export default DescriptType;
