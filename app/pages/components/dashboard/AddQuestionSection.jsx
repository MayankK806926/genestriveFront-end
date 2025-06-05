"use client"
import React, { useState } from 'react';
import { useDashboard } from '../../../context/DashboardContext';

const AddQuestionSection = () => {
  const { viewType, selectedGrade, selectedExam } = useDashboard();
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [difficulty, setDifficulty] = useState('easy');
  const [subject, setSubject] = useState('');
  const [questionType, setQuestionType] = useState('multiple_choice');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctOption, setCorrectOption] = useState(0);
  const [trueOrFalse, setTrueOrFalse] = useState('true');
  const [uploadedFile, setUploadedFile] = useState(null);

  // Different subjects based on grade or exam type
  const subjectOptions = {
    grades: ['Mathematics', 'Science', 'English', 'Social Studies', 'General Knowledge'],
    'JEE Mains': ['Physics', 'Chemistry', 'Mathematics'],
    'NEET UG': ['Physics', 'Chemistry', 'Biology'],
    'KCET': ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
    'JEE Advanced': ['Physics', 'Chemistry', 'Mathematics'],
    'BITSAT': ['Physics', 'Chemistry', 'Mathematics', 'English Proficiency', 'Logical Reasoning']
  };

  const questionTypes = [
    { value: 'multiple_choice', label: 'Multiple Choice' },
    { value: 'true_false', label: 'True/False' },
    { value: 'short_answer', label: 'Short Answer' },
    { value: 'long_answer', label: 'Long Answer' },
    { value: 'fill_blank', label: 'Fill in the Blank' }
  ];

  const currentSubjects = viewType === 'grades' 
    ? subjectOptions.grades 
    : (subjectOptions[selectedExam] || []);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
      setQuestion(''); // Clear text if file is uploaded
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submissionData = {
      question,
      questionType,
      difficulty,
      subject,
      targetType: viewType,
      target: viewType === 'grades' ? selectedGrade : selectedExam
    };

    // Add answer data based on question type
    switch (questionType) {
      case 'multiple_choice':
        submissionData.options = options;
        submissionData.correctOption = correctOption;
        break;
      case 'true_false':
        submissionData.answer = trueOrFalse;
        break;
      default:
        submissionData.answer = answer;
    }

    if (uploadedFile) {
      submissionData.file = uploadedFile;
    } else {
      submissionData.question = question;
    }
    console.log(submissionData);

    // Clear the form
    setQuestion('');
    setAnswer('');
    setDifficulty('easy');
    setSubject('');
    setOptions(['', '', '', '']);
    setCorrectOption(0);
    setTrueOrFalse('true');
    setUploadedFile(null);
  };

  if ((viewType === 'grades' && selectedGrade === '') || 
      (viewType === 'competitive' && selectedExam === '')) {
    return null;
  }

  const renderAnswerSection = () => {
    switch (questionType) {
      case 'multiple_choice':
        return (
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">Options</label>
            {options.map((option, index) => (
              <div key={index} className="flex items-center gap-4">
                <input
                  type="radio"
                  name="correctOption"
                  checked={correctOption === index}
                  onChange={() => setCorrectOption(index)}
                  className="w-4 h-4 text-purple-600"
                />
                <input
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                  placeholder={`Option ${index + 1}`}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
            ))}
            <p className="text-sm text-gray-500">Select the radio button for the correct answer</p>
          </div>
        );

      case 'true_false':
        return (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Correct Answer
            </label>
            <select
              value={trueOrFalse}
              onChange={(e) => setTrueOrFalse(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
        );

      case 'fill_blank':
        return (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Answer (word or phrase that goes in the blank)
            </label>
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Enter the correct answer"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>
        );

      default:
        return (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Answer
            </label>
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Enter the answer"
              rows={questionType === 'long_answer' ? 6 : 4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              required
            />
          </div>
        );
    }
  };

  return (
    <section className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Add Question for {viewType === 'grades' ? selectedGrade : selectedExam}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            >
              <option value="">Select Subject</option>
              {currentSubjects.map((sub) => (
                <option key={sub} value={sub}>{sub}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Question Type
            </label>
            <select
              value={questionType}
              onChange={(e) => setQuestionType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {questionTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Difficulty Level
            </label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Question
          </label>
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={question}
              onChange={(e) => {
                setQuestion(e.target.value);
                setUploadedFile(null); // Clear file if typing
              }}
              placeholder={questionType === 'fill_blank' ? 'Use ___ for the blank space in your question' : 'Enter your question'}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              disabled={!!uploadedFile}
              required={!uploadedFile}
            />
            <span className="text-gray-500">or</span>
            <label>
              <input
                type="file"
                accept="image/*,.pdf"
                className="hidden"
                onChange={handleFileUpload}
              />
              <span className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors cursor-pointer">
                Upload
              </span>
            </label>
          </div>
          {uploadedFile && (
            <div className="mt-2 text-sm text-green-600">
              Uploaded: {uploadedFile.name}
              <button
                type="button"
                className="ml-2 text-red-500 underline"
                onClick={() => setUploadedFile(null)}
              >
                Remove
              </button>
            </div>
          )}
        </div>

        {renderAnswerSection()}

        <div>
          <button
            type="submit"
            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Add Question
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddQuestionSection;
