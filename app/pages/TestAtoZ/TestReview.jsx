import React, { useState } from "react";
import Navbar2 from "../components/Navbar2";

export default function TestReview({
  testData,
  selectedAnswers,
  reviewedQuestions,
  visitedQuestions,
  onConfirmSubmit,
  onGoBack
}) {
  const [feedback, setFeedback] = useState("");
  const [feedbackRating, setFeedbackRating] = useState(0);

  // Calculate statistics
  const totalQuestions = testData.length;
  const notVisitedQuestions = totalQuestions - visitedQuestions.size;
  const answeredQuestions = selectedAnswers.filter(answer => answer !== null).length;
  const notAnsweredQuestions = totalQuestions - answeredQuestions;
  const markedForReview = reviewedQuestions.size;
  const answeredAndMarkedForReview = Array.from(reviewedQuestions).filter(index => selectedAnswers[index] !== null).length;
  const onlyMarkedForReview = markedForReview - answeredAndMarkedForReview;

  const handleSubmit = () => {
    onConfirmSubmit({
      feedback,
      feedbackRating,
      statistics: {
        totalQuestions,
        notVisitedQuestions,
        answeredQuestions,
        notAnsweredQuestions,
        markedForReview: onlyMarkedForReview,
        answeredAndMarkedForReview
      }
    });
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#f6effe]">
      <div className="w-full mt-[-20px] h-[40px] mb-[100px] bg-white shadow-sm">
        <Navbar2 />
      </div>

      <div className="flex-grow w-full bg-[#f0ddff91] border-t border-solid border-[#d9d9d9] py-8">
        <div className="max-w-[1440px] mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="font-medium text-[#2f2f68] text-[32px] mb-2">
              Test Review & Feedback
            </h1>
            <p className="text-[#2f2f68] text-xl">
              Please review your test summary and provide feedback before final submission
            </p>
          </div>

          {/* Statistics Section */}
          <div className="bg-white border border-solid border-[#d9d9d9] rounded-[20px] p-8 mb-8">
            <h2 className="font-medium text-[#2f2f68] text-[28px] mb-6">
              Question Summary
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {/* Total Questions */}
              <div className="bg-[#f7ecff] rounded-lg p-4 text-center border-2 border-[#5e2f7c]">
                <div className="text-[#5e2f7c] text-3xl font-bold mb-2">
                  {totalQuestions}
                </div>
                <div className="text-[#2f2f68] text-lg font-medium">
                  Total Questions
                </div>
              </div>

              {/* Not Visited Questions */}
              <div className="bg-[#f5f5f5] rounded-lg p-4 text-center border-2 border-gray-300">
                <div className="text-[#2f2f68] text-3xl font-bold mb-2">
                  {notVisitedQuestions}
                </div>
                <div className="text-[#2f2f68] text-lg font-medium">
                  Not Visited
                </div>
              </div>

              {/* Answered Questions */}
              <div className="bg-[#f0fff0] rounded-lg p-4 text-center border-2 border-[#90EE90]">
                <div className="text-[#2f2f68] text-3xl font-bold mb-2">
                  {answeredQuestions}
                </div>
                <div className="text-[#2f2f68] text-lg font-medium">
                  Answered
                </div>
              </div>

              {/* Not Answered Questions */}
              <div className="bg-[#fff0f0] rounded-lg p-4 text-center border-2 border-red-400">
                <div className="text-[#2f2f68] text-3xl font-bold mb-2">
                  {notAnsweredQuestions}
                </div>
                <div className="text-[#2f2f68] text-lg font-medium">
                  Not Answered
                </div>
              </div>

              {/* Marked For Review */}
              <div className="bg-[#fff8e1] rounded-lg p-4 text-center border-2 border-[#ffb347]">
                <div className="text-[#2f2f68] text-3xl font-bold mb-2">
                  {onlyMarkedForReview}
                </div>
                <div className="text-[#2f2f68] text-lg font-medium">
                  Marked For Review
                </div>
              </div>

              {/* Answered & Marked For Review */}
              <div className="bg-[#fffde7] rounded-lg p-4 text-center border-2 border-[#ffd700]">
                <div className="text-[#2f2f68] text-3xl font-bold mb-2">
                  {answeredAndMarkedForReview}
                </div>
                <div className="text-[#2f2f68] text-lg font-medium">
                  Answered & Marked For Review
                </div>
              </div>
            </div>
          </div>

          {/* Feedback Section */}
          <div className="bg-white border border-solid border-[#d9d9d9] rounded-[20px] p-8 mb-8">
            <h2 className="font-medium text-[#2f2f68] text-[28px] mb-6">
              Feedback
            </h2>
            
            {/* Rating */}
            <div className="mb-6">
              <label className="block text-[#2f2f68] text-xl font-medium mb-3">
                How would you rate this test experience?
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setFeedbackRating(star)}
                    className={`text-3xl transition-colors duration-200 ${
                      star <= feedbackRating 
                        ? 'text-[#ffd700]' 
                        : 'text-gray-300 hover:text-[#ffd700]'
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
              <div className="text-[#2f2f68] text-lg mt-2">
                {feedbackRating === 0 && "Please select a rating"}
                {feedbackRating === 1 && "Poor"}
                {feedbackRating === 2 && "Fair"}
                {feedbackRating === 3 && "Good"}
                {feedbackRating === 4 && "Very Good"}
                {feedbackRating === 5 && "Excellent"}
              </div>
            </div>

            {/* Text Feedback */}
            <div className="mb-6">
              <label className="block text-[#2f2f68] text-xl font-medium mb-3">
                Any additional comments or suggestions?
              </label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Share your thoughts about the test, questions, or overall experience..."
                className="w-full h-32 p-4 border border-[#d9d9d9] rounded-lg text-[#2f2f68] text-lg resize-none focus:outline-none focus:border-[#5e2f7c]"
              />
            </div>
          </div>

          {/* Warning for unanswered questions */}
          {notAnsweredQuestions > 0 && (
            <div className="bg-[#fff3cd] border border-[#ffeaa7] rounded-lg p-4 mb-8">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-[#856404]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="text-[#856404] font-medium text-lg">
                    You have {notAnsweredQuestions} unanswered question{notAnsweredQuestions > 1 ? 's' : ''}
                  </h3>
                  <p className="text-[#856404] text-base">
                    You can go back to answer them or submit the test as is.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="w-full max-w-[1440px] mx-auto px-4 mt-8 mb-8 flex justify-between items-center">
        <button
          onClick={onGoBack}
          className="flex items-center font-normal text-[#2f2f68] text-xl cursor-pointer hover:text-[#5e2f7c] transition-colors"
        >
          ← Go Back to Test
        </button>
        
        <div className="flex gap-4">
          <button
            onClick={handleSubmit}
            className="bg-[#001e32] text-white font-semibold text-xl py-2 px-6 rounded-md cursor-pointer hover:bg-[#002a45] transition-colors"
          >
            Submit Test
          </button>
        </div>
      </div>
    </div>
  );
} 
