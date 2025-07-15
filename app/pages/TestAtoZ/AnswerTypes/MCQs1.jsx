import React, { useEffect, useState } from "react";

function MCQs1({ Input }) {
  if (!Input) return null;

  const { currentQuestion } = Input;

  if (!currentQuestion || !Array.isArray(currentQuestion.options)) {
    return (
      <p className="text-red-600 text-lg">No question or options available</p>
    );
  }

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
    <div className="space-y-4 mt-4">
      {currentQuestion.options.map((option, index) => (
        <div
          key={index}
          className="w-full p-4 rounded-lg bg-white text-[#2f2f68] text-lg border border-gray-300 shadow-sm hover:shadow-md transition duration-200"
        >
          <span className="font-medium">{option.text}</span>
        </div>
      ))}

      <div>
        <p className="text-lg font-semibold text-[#2f2f68] mb-2">Solution</p>
        <div className="w-full border border-blue-400 bg-blue-50 p-4 rounded-md text-[18px] text-[#2f2f68]">
          {solution}
        </div>
      </div>
    </div>
  );
}

export default MCQs1;
