"use client";
import React, { useEffect, useState } from "react";
import { ChevronLeftNormal } from "../icons/ChevronLeftNormal";
import Navbar2 from "../components/Navbar2";

//<div className="flex justify-between mx-[150px] mt-8 space-y-4">
export default function GenerateTest({handleSubmit}) {
  const subjects_list = {
    "6th":["Mathematics", "Physics","Chemistry","Biology", "English"],
    "7th": ["Mathematics", "Physics","Chemistry","Biology", "English"],
    "8th": ["Mathematics", "Physics","Chemistry","Biology", "English"],
    "9th": ["Mathematics", "Physics","Chemistry","Biology", "English"],
    "10th": ["Mathematics", "Physics","Chemistry","Biology", "English"],
    "11th": ["Mathematics", "Physics","Chemistry","Biology", "English"],
    "12th": ["Mathematics", "Physics","Chemistry","Biology", "English"],
    "JEE mains": ["Mathematics", "Physics", "Chemistry"],
    "JEE advance": ["Mathematics", "Physics", "Chemistry"],
    "BITSAT": ["Mathematics", "Physics", "Chemistry","English","Logical reasoning"],
    "CUET": ["Mathematics", "Physics", "Chemistry"],
    "KCET": ["Mathematics", "Physics", "Chemistry"],
    "NEET": ["Biology", "Physics", "Chemistry"],
  };
  // State variables for form data
  const [subjects, setSubjects] = useState([]); // Changed from subject to subjects array
  const [topics, setTopics] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [difficulties, setDifficulties] = useState([]);
  const [numQuestions, setNumQuestions] = useState(20);
  const [time, setTime] = useState(20);
  const [selectedQuestionTypes, setSelectedQuestionTypes] = useState([]);

  // State for grade and examtype from URL
  const [category, setCategory] = useState(null);

  // Add loading and error states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Read grade and examtype from URL on component mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("category");
    if (cat) setCategory(cat);
  }, []);

  // Handlers for input changes
  const handleSubjectChange = async (subject) => {
    // Compute the next subjects array
    const nextSubjects = subjects.includes(subject)
      ? subjects.filter((s) => s !== subject)
      : [...subjects, subject];

    setSubjects(nextSubjects);

    try {
      const auth = getAuth();
      const currentUser = auth.currentUser;

      if (!currentUser) throw new Error("User not authenticated");
      const token = await currentUser.getIdToken();
      const res = await fetch(`/api/proxy/api/generate-test/topics`, {
        method: "POST",
        body: JSON.stringify({ subjects: nextSubjects, category }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(
        "Fetching topics for subjects:",
        nextSubjects,
        "category:",
        category
      );
      if (!res.ok) {
        const errorBody = await res.text();
        throw new Error(
          `HTTP error! status: ${res.status}, body: ${errorBody}`
        );
      }
      const { TopicsList } = await res.json();
      setTopics(TopicsList);
    } catch (err) {
      console.error("Error generating test:", err);
      setError(err.message || "An error occurred during test generation.");
    } finally {
      setLoading(false);
    }
  };

  const handleTopicChange = (topic) => {
    setSelectedTopics((prevSelectedTopics) =>
      prevSelectedTopics.includes(topic)
        ? prevSelectedTopics.filter((t) => t !== topic)
        : [...prevSelectedTopics, topic]
    );
  };

  const handleDifficultyChange = (value) => {
    setDifficulties((prevDifficulties) =>
      prevDifficulties.includes(value)
        ? prevDifficulties.filter((d) => d !== value)
        : [...prevDifficulties, value]
    );
  };

  const handleNumQuestionsChange = (amount) => {
    setNumQuestions((prevNum) => Math.max(0, prevNum + amount));
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleQuestionTypeChange = (type) => {
    setSelectedQuestionTypes((prevSelectedTypes) =>
      prevSelectedTypes.includes(type)
        ? prevSelectedTypes.filter((t) => t !== type)
        : [...prevSelectedTypes, type]
    );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      subjects,
      selectedTopics,
      difficulties,
      numQuestions,
      time,
      selectedQuestionTypes
    }; // pass data directly
    handleSubmit(data)
  };

  return (
    <>
      {/* Show loading or error state */}
      {loading && (
        <div className="flex items-center justify-center min-h-screen bg-[#f6effe]">
          <div className="text-xl text-[#2f2f68]">Generating test...</div>
        </div>
      )}

      {error && (
        <div className="flex items-center justify-center min-h-screen bg-[#f6effe]">
          <div className="text-xl text-red-600">Error: {error}</div>
        </div>
      )}

      {/* Render the form only when not loading and no error */}
      {!loading && !error && (
        <>
          {/* CSS to hide the number input spinner */}
          <style jsx>{`
            input[type="number"]::-webkit-outer-spin-button,
            input[type="number"]::-webkit-inner-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }
            input[type="number"] {
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
                  <span className="font-medium text-[#2f2f68] text-xl">
                    Back to Dashboard
                  </span>
                </div>

                <h1 className="font-semibold text-[#2f2f68] text-5xl mb-4">
                  Generate Test
                </h1>
                <p className="font-normal text-[#2f2f68] text-xl mb-8">
                  Customize your test your own way
                </p>

                {/* Form for test generation inputs */}
                <form onSubmit={handleFormSubmit}>
                  <div className="bg-white border border-solid border-[#d9d9d9] p-8 rounded-md">
                    <div className="grid gap-6">
                      <h3 className="font-medium text-[#000000c4] mb-1 text-xl">
                        Subject
                      </h3>
                      <div className="space-y-4">
                        {console.log(
                          "Subjects list for category:",
                          subjects_list[category],
                          "category:",
                          category
                        )}
                        {category &&
                          subjects_list[category] &&
                          subjects_list[category].map((subject, index) => (
                            <div key={index} className="flex items-center">
                              <input
                                type="checkbox"
                                id={`subject-${index}`}
                                className="w-5 h-5 mr-4"
                                checked={subjects.includes(subject)}
                                onChange={() => handleSubjectChange(subject)}
                              />
                              <label
                                htmlFor={`subject-${index}`}
                                className="font-normal text-[#2f2f68] text-xl"
                              >
                                {subject}
                              </label>
                            </div>
                          ))}
                      </div>

                      <div className="font-medium text-[#2f2f68] text-2xl">
                        Topics
                      </div>
                      <div className="space-y-4">
                        {Array.isArray(topics) &&
                          topics.map((item, index) => (
                            <div key={index} className="flex items-center">
                              <input
                                type="checkbox"
                                id={`topic-${index}`}
                                className="w-5 h-5 mr-4"
                                checked={selectedTopics.includes(item)}
                                onChange={() => handleTopicChange(item)}
                              />
                              <label
                                htmlFor={`topic-${index}`}
                                className="font-normal text-[#2f2f68] text-xl"
                              >
                                {item}
                              </label>
                            </div>
                          ))}

                      </div>

                      <div className="font-medium text-[#2f2f68] text-2xl">
                        Difficulty Level
                      </div>
                      <div className="flex justify-between mx-[150px] mt-8">
                        <div
                          className="flex items-center cursor-pointer"
                          onClick={() => handleDifficultyChange("easy")}
                        >
                          <div
                            className={`w-5 h-5 bg-[#94e9b8] rounded-full mr-4 ${
                              difficulties.includes("easy")
                                ? "border-2 border-[#2f2f68]"
                                : ""
                            }`}
                          ></div>
                          <span className="font-normal text-[#2f2f68] text-2xl">
                            Easy
                          </span>
                        </div>
                        <div
                          className="flex items-center cursor-pointer"
                          onClick={() => handleDifficultyChange("medium")}
                        >
                          <div
                            className={`w-5 h-5 bg-[#ffdb56] rounded-full mr-4 ${
                              difficulties.includes("medium")
                                ? "border-2 border-[#2f2f68]"
                                : ""
                            }`}
                          ></div>
                          <span className="font-normal text-[#2f2f68] text-2xl">
                            Medium
                          </span>
                        </div>
                        <div
                          className="flex items-center cursor-pointer"
                          onClick={() => handleDifficultyChange("hard")}
                        >
                          <div
                            className={`w-5 h-5 bg-[#ec3030] rounded-full mr-4 ${
                              difficulties.includes("hard")
                                ? "border-2 border-[#2f2f68]"
                                : ""
                            }`}
                          ></div>
                          <span className="font-normal text-[#2f2f68] text-2xl">
                            Hard
                          </span>
                        </div>
                      </div>

                      <div className="font-medium text-[#2f2f68] text-2xl">
                        Number of Questions
                      </div>
                      <div className="mt-4 flex items-center">
                        <button
                          type="button"
                          className="font-medium text-black text-xl px-2 border border-gray-300 rounded mr-2"
                          onClick={() => handleNumQuestionsChange(-1)}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={numQuestions}
                          onChange={(e) =>
                            setNumQuestions(parseInt(e.target.value) || 0)
                          }
                          className="font-medium text-[#2f2f68] text-xl w-16 text-center border border-gray-300 rounded"
                          min="0"
                        />
                        <button
                          type="button"
                          className="font-medium text-black text-xl px-2 border border-gray-300 rounded ml-2"
                          onClick={() => handleNumQuestionsChange(1)}
                        >
                          +
                        </button>
                      </div>

                      <div className="font-medium text-[#2f2f68] text-2xl">
                        Time
                      </div>
                      <div className="flex items-center gap-4 mt-4">
                        <input
                          type="Number"
                          value={time}
                          onChange={handleTimeChange}
                          className="w-[45px] bg-white border border-solid border-gray-300 pl-2.5 p-1 rounded shadow-sm inline-block font-medium text-[#2f2f68] text-xl"
                        />
                        <p className="text-xl text-gray-600">minutes</p>
                      </div>

                      <div className="font-medium text-[#2f2f68] text-2xl">
                        Type of Questions
                      </div>
                      <div className="mt-4 space-y-4">
                        {[
                          "mcq",
                          "Single word",
                          "multiple correct",
                          "Integer Type",
                          "fill in the blanks",
                          "Numerical Type",
                          "short answer",
                          "long answer",
                        ].map((item, index) => (
                          <div key={index} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`type-${index}`}
                              className="w-5 h-5 mr-4"
                              checked={selectedQuestionTypes.includes(item)}
                              onChange={() => handleQuestionTypeChange(item)}
                            />
                            <label
                              htmlFor={`type-${index}`}
                              className="font-normal text-[#2f2f68] text-xl"
                            >
                              {item}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 flex justify-center">
                      <button
                        type="submit"
                        className={`bg-[#001e32] text-white font-semibold text-xl py-3 px-6 rounded-md ${
                          loading ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        disabled={loading}
                      >
                        {loading ? "Generating..." : "Generate Test"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}