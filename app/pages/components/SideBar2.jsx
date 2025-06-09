"use client";
import React, { useState } from "react";
import {
  FiChevronDown,
  FiChevronRight,
  FiHelpCircle,
  FiLogOut,
  FiAward,
} from "react-icons/fi";
import { PiGraduationCap } from "react-icons/pi";
import { useDashboard } from "../../context/DashboardContext";

const Sidebar2 = () => {
  const [gradeDropdown, setGradeDropdown] = useState(false);
  const [examDropdown, setExamDropdown] = useState(false);
  const { handleGradeSelect, handleExamSelect, selectedGrade, selectedExam } =
    useDashboard();

  const grades = [
    "All Grades",
    "Grade 5",
    "Grade 6",
    "Grade 7",
    "Grade 8",
    "Grade 9",
    "Grade 10",
    "Grade 11",
    "Grade 12",
  ];
  const exams = ["JEE Mains", "JEE Advanced", "NEET UG", "KCET", "BITSAT"];

  const toggleGradeDropdown = () => {
    setGradeDropdown(!gradeDropdown);
    if (!gradeDropdown) {
      setExamDropdown(false);
    }
  };

  const toggleExamDropdown = () => {
    setExamDropdown(!examDropdown);
    if (!examDropdown) {
      setGradeDropdown(false);
    }
  };

  return (
    <aside className="w-64 bg-slate-800 text-white min-h-screen flex flex-col">
      <div className="flex-1 p-6">
        <nav className="space-y-2">
          <div>
            <button
              onClick={toggleGradeDropdown}
              className={`flex items-center justify-between w-full px-4 py-3 text-left hover:bg-slate-700 rounded-lg transition-colors ${
                selectedGrade ? "bg-slate-700" : ""
              }`}
            >
              <div className="flex items-center">
                <PiGraduationCap className="w-5 h-5 mr-3" />
                <span>Grade</span>
              </div>
              {gradeDropdown ? (
                <FiChevronDown className="w-4 h-4" />
              ) : (
                <FiChevronRight className="w-4 h-4" />
              )}
            </button>

            {gradeDropdown && (
              <div className="ml-8 mt-2 space-y-1">
                {grades.map((grade) => (
                  <button
                    key={grade}
                    onClick={() => {
                      handleGradeSelect(grade);
                      setExamDropdown(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      selectedGrade === grade
                        ? "bg-purple-600 text-white"
                        : "text-gray-300 hover:text-white hover:bg-slate-700"
                    } rounded transition-colors`}
                  >
                    {grade}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <button
              onClick={toggleExamDropdown}
              className={`flex items-center justify-between w-full px-4 py-3 text-left hover:bg-slate-700 rounded-lg transition-colors ${
                selectedExam ? "bg-slate-700" : ""
              }`}
            >
              <div className="flex items-center">
                <FiAward className="w-5 h-5 mr-3" />
                <span>Competitive Exams</span>
              </div>
              {examDropdown ? (
                <FiChevronDown className="w-4 h-4" />
              ) : (
                <FiChevronRight className="w-4 h-4" />
              )}
            </button>

            {examDropdown && (
              <div className="ml-8 mt-2 space-y-1">
                {exams.map((exam) => (
                  <button
                    key={exam}
                    onClick={() => {
                      handleExamSelect(exam);
                      setGradeDropdown(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      selectedExam === exam
                        ? "bg-purple-600 text-white"
                        : "text-gray-300 hover:text-white hover:bg-slate-700"
                    } rounded transition-colors`}
                  >
                    {exam}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>

      <div className="mt-auto p-6 border-t border-slate-700">
        <nav className="space-y-2">
          <a
            href="#"
            className="flex items-center px-4 py-3 hover:bg-slate-700 rounded-lg transition-colors"
          >
            <FiHelpCircle className="w-5 h-5 mr-3" />
            <span>Help Center</span>
          </a>

          <a
            href="#"
            className="flex items-center px-4 py-3 hover:bg-red-600 rounded-lg transition-colors text-red-300 hover:text-white"
          >
            <FiLogOut className="w-5 h-5 mr-3" />
            <span>Logout</span>
          </a>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar2;
