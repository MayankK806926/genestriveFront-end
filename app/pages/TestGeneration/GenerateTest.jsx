import React, { useState } from "react";
import { ChevronLeftNormal } from "../icons/ChevronLeftNormal";
import Navbar2 from "../components/Navbar2";
import Link from "next/link";

//<div className="flex justify-between mx-[150px] mt-8 space-y-4">
export default function GenerateTest(){
  // State variables for form data
  const [subject, setSubject] = useState("");
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [difficulty, setDifficulty] = useState(""); // State is still here but not directly controlled by these divs
  const [numQuestions, setNumQuestions] = useState(20);
  const [time, setTime] = useState("20 minutes"); // Assuming time is a string input, could be number of minutes too
  const [selectedQuestionTypes, setSelectedQuestionTypes] = useState([]);

  // Handlers for input changes
  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleTopicChange = (topic) => {
    setSelectedTopics(prevSelectedTopics =>
      prevSelectedTopics.includes(topic)
        ? prevSelectedTopics.filter(t => t !== topic)
        : [...prevSelectedTopics, topic]
    );
  };

  const handleDifficultyChange = (value) => {
    setDifficulty(value);
  };

  const handleNumQuestionsChange = (amount) => {
    setNumQuestions(prevNum => Math.max(0, prevNum + amount));
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleQuestionTypeChange = (type) => {
    setSelectedQuestionTypes(prevSelectedTypes =>
      prevSelectedTypes.includes(type)
        ? prevSelectedTypes.filter(t => t !== type)
        : [...prevSelectedTypes, type]
    );
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Log or process the form data here
    console.log("Form Data:", {
      subject,
      selectedTopics,
      difficulty,
      numQuestions,
      time,
      selectedQuestionTypes,
    });
    // Example: Call an API to generate the test
    // generateTestApiCall({ subject, selectedTopics, difficulty, numQuestions, time, selectedQuestionTypes });
  };

  return (
    <>
      {/* CSS to hide the number input spinner */}
      <style jsx>{`
        input[type='number']::-webkit-outer-spin-button,
        input[type='number']::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type='number'] {
          -moz-appearance: textfield;
        }
      `}</style>
      <div className="bg-[#f6effe] flex flex-col items-center min-h-screen">
        <div className="w-full mt-[-20px] h-[40px] mb-[100px] bg-white shadow-sm">
          <Navbar2 />
        </div>

        <div className="flex-grow w-full bg-[#f0ddff91] border-t border-solid border-[#d9d9d9] py-8">
          <div className="max-w-[1440px] mx-auto px-4">
            <div className="flex items-center mb-8">
              <ChevronLeftNormal className="w-6 h-6 mr-4" />
              <span className="font-medium text-[#2f2f68] text-xl">Back to Dashboard</span>
            </div>

            <h1 className="font-semibold text-[#2f2f68] text-5xl mb-4">Generate Test</h1>
            <p className="font-normal text-[#2f2f68] text-xl mb-8">Customize your test your own way</p>

            {/* Form for test generation inputs */}
            <form onSubmit={handleSubmit}>
              <div className="bg-white border border-solid border-[#d9d9d9] p-8 rounded-md">
                <div className="grid gap-6">
                  <h3 className="font-medium text-[#000000c4] mb-1 text-xl">Subject</h3>
                  <div className="mb-4 md:mb-6 relative">
                    <select className="w-full p-2 md:p-3 text-[#2f2f68] rounded border border-gray-300 appearance-none bg-white" value={subject} onChange={handleSubjectChange}>
                      <option value="">Select Subject</option>
                      <option value="Mathematics">Mathematics</option>
                      <option value="Science">Science</option>
                      <option value="English">English</option>
                    </select>
                  </div>

                  <div className="font-medium text-[#2f2f68] text-2xl">Topics</div>
                  <div className="space-y-4">
                    {["balah", "balah", "balah", "balah", "balah"].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <input type="checkbox" id={`topic-${index}`} className="w-5 h-5 mr-4" checked={selectedTopics.includes(item)} onChange={() => handleTopicChange(item)} />
                        <label htmlFor={`topic-${index}`} className="font-normal text-[#2f2f68] text-xl">{item}</label>
                      </div>
                    ))}
                  </div>

                  <div className="font-medium text-[#2f2f68] text-2xl">Difficulty Level</div>
                  <div className="flex justify-between mx-[150px] mt-8 space-y-4">
                    <div className="flex items-center" onClick={() => handleDifficultyChange("easy")}>
                      <div className={`w-5 h-5 bg-[#94e9b8] rounded-full mr-4 ${difficulty === 'easy' ? 'border-2 border-[#2f2f68]' : ''}`}></div>
                      <span className="font-normal text-[#2f2f68] text-2xl">Easy</span>
                    </div>
                    <div className="flex items-center" onClick={() => handleDifficultyChange("medium")}>
                      <div className={`w-5 h-5 bg-[#ffdb56] rounded-full mr-4 ${difficulty === 'medium' ? 'border-2 border-[#2f2f68]' : ''}`}></div>
                      <span className="font-normal text-[#2f2f68] text-2xl">Medium</span>
                    </div>
                    <div className="flex items-center" onClick={() => handleDifficultyChange("difficult")}>
                      <div className={`w-5 h-5 bg-[#ec3030] rounded-full mr-4 ${difficulty === 'difficult' ? 'border-2 border-[#2f2f68]' : ''}`}></div>
                      <span className="font-normal text-[#2f2f68] text-2xl">Difficult</span>
                    </div>
                  </div>

                  <div className="font-medium text-[#2f2f68] text-2xl">Number of Questions</div>
                  <div className="mt-4 flex items-center">
                    <button type="button" className="font-medium text-black text-xl px-2 border border-gray-300 rounded mr-2" onClick={() => handleNumQuestionsChange(-1)}>-</button>
                    <input type="number" value={numQuestions} onChange={(e) => setNumQuestions(parseInt(e.target.value) || 0)} className="font-medium text-[#2f2f68] text-xl w-16 text-center border border-gray-300 rounded" min="0" />
                    <button type="button" className="font-medium text-black text-xl px-2 border border-gray-300 rounded ml-2" onClick={() => handleNumQuestionsChange(1)}>+</button>
                  </div>

                  <div className="font-medium text-[#2f2f68] text-2xl">Time</div>
                  <div className="mt-4">
                    <input type="text" value={time} onChange={handleTimeChange} className="bg-white border border-solid border-gray-300 p-2 rounded shadow-sm inline-block font-medium text-[#2f2f68] text-xl" />
                  </div>

                  <div className="font-medium text-[#2f2f68] text-2xl">Type of Questions</div>
                  <div className="mt-4 space-y-4">
                    {["Multiple Choice Questions", "Single word", "Long answer"].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <input type="checkbox" id={`type-${index}`} className="w-5 h-5 mr-4" checked={selectedQuestionTypes.includes(item)} onChange={() => handleQuestionTypeChange(item)} />
                        <label htmlFor={`type-${index}`} className="font-normal text-[#2f2f68] text-xl">{item}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <Link href='/dashboard/test-preview' type="submit" className="bg-[#001e32] text-white font-semibold text-xl py-3 px-6 rounded-md">
                    Generate Test
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};