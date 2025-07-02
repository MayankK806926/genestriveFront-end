import { FiCheckCircle } from "react-icons/fi";

export const CircularProgress = ({ value, label, subLabel, percentage = 75 }) => {
    const radius = 60;
    const strokeWidth = 12;
    const circumference = 2 * Math.PI * radius;
    // Ensure percentage is a valid number between 0 and 100
    const validPercentage = Math.min(Math.max(Number(percentage) || 0, 0), 100);
    const strokeDashoffset = circumference - (validPercentage / 100) * circumference;
  
    return (
      <div className="flex flex-col items-center justify-center p-4">
        <div className="relative w-[160px] h-[160px]">
          <svg className="transform -rotate-90 w-full h-full">
            <circle
              cx="80"
              cy="80"
              r={radius}
              stroke="#F3E8FF"
              strokeWidth={strokeWidth}
              fill="none"
            />
            <circle
              cx="80"
              cy="80"
              r={radius}
              stroke="#5E2F7C"
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={String(strokeDashoffset)}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 flex flex-col items-center justify-center text-center">
            <span className="text-2xl text-gray-700 font-bold block">{value}</span>
            {subLabel && <span className="text-sm text-gray-800 block">{subLabel}</span>}
          </div>
        </div>
        <span className="mt-2 text-gray-600 font-medium">{label}</span>
      </div>
    );
  };
  
  export const PerformanceCard = ({ overallAccuracy, attemptedQuestionsRatio, timeRatio }) => {
    // Calculate average of all metrics
    const average = (overallAccuracy + attemptedQuestionsRatio + timeRatio) / 3;
    
    // Determine rating based on average
    let rating;
    if (average > 60) {
      rating = 'Excellent';
    } else if (average > 40) {
      rating = 'Really Good';
    } else {
      rating = 'Good';
    }

    return (
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Performance Rating</h2>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="mb-4">
              <span className="text-[32px] font-bold text-[#1F2937]">{rating}</span>
            </div>
            <div className="relative w-full h-2 bg-[#F3E8FF] rounded-full overflow-hidden">
              <div 
                className="absolute left-0 top-0 h-full bg-[#5E2F7C] rounded-full"
                style={{ width: `${average}%` }}
              />
            </div>
            <div className="mt-2 text-right text-sm text-gray-500">
              {average.toFixed(1)}% completed
            </div>
          </div>
          <div className="ml-8">
            <div className="w-24 h-24 rounded-full bg-[#F3E8FF] flex items-center justify-center">
              <FiCheckCircle className="w-12 h-12 text-[#5E2F7C]" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export const BarChart = ({ data }) => {
    const maxValue = 100; // Maximum value for the y-axis
    
    return (
      <div className="w-full">
        <div className="flex h-64 items-end space-x-4 mb-4">
          {data.map((item, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div 
                className="w-full bg-[#5E2F7C]" 
                style={{ 
                  height: `${(item.accuracy / maxValue) * 100}%`,
                  minHeight: '20px'
                }}
              ></div>
              <span className="text-sm text-gray-500 mt-2">{item.topic}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export const TopicProgressBar = ({ topic, completed }) => (
    <div className="mb-6">
      <div className="flex justify-between text-sm text-gray-600 mb-1">
        <span>{topic}</span>
        <span>{completed}% completed</span>
      </div>
      <div className="h-2 w-full bg-[#F3E8FF] rounded-full">
        <div 
          className="h-full bg-[#5E2F7C] rounded-full" 
          style={{ width: `${completed}%` }}
        ></div>
      </div>
    </div>
  );

  export const OverallStats = ({ attempted, correct, unattempted, incorrect, acquiredMarks, totalMarks }) => {
    const attemptedTotal = (Number(attempted) || 0) + (Number(unattempted) || 0);
    const attemptedPercent = attemptedTotal > 0 ? (Number(attempted) / attemptedTotal) * 100 : 0;
    const unattemptedPercent = attemptedTotal > 0 ? (Number(unattempted) / attemptedTotal) * 100 : 0;
  
    const correctTotal = (Number(correct) || 0) + (Number(incorrect) || 0);
    const correctPercent = correctTotal > 0 ? (Number(correct) / correctTotal) * 100 : 0;
    const incorrectPercent = correctTotal > 0 ? (Number(incorrect) / correctTotal) * 100 : 0;
  
    return (
      <div className="flex bg-white rounded-lg shadow-sm p-8 mt-4 gap-6">
        <div className="flex flex-col gap-4 flex-grow w-full md:w-3/4">
          {/* Attempted vs Unattempted */}
          <div>
            <div className="flex h-6 w-full rounded-full overflow-hidden">
              <div className="bg-purple-200 flex items-center justify-center text-xs text-black font-medium px-2" style={{ width: `${attemptedPercent}%` }}>
                {attempted}
              </div>
              <div className="bg-gray-200 flex items-center justify-center text-xs text-black font-medium px-2" style={{ width: `${unattemptedPercent}%` }}>
                {unattempted}
              </div>
            </div>
            <div className="flex justify-between text-xs mt-1 text-gray-400 font-semibold px-1">
              <span>Attempted Questions</span>
              <span>Unattempted</span>
            </div>
          </div>
  
          {/* Incorrect vs Correct */}
          <div>
            <div className="flex h-6 w-full rounded-full overflow-hidden">
              <div className="bg-red-500 flex items-center justify-center text-xs text-white font-semibold px-2" style={{ width: `${incorrectPercent}%` }}>
                {incorrect}
              </div>
              <div className="bg-green-500 flex items-center justify-center text-xs text-white font-semibold px-2" style={{ width: `${correctPercent}%` }}>
                {correct}
              </div>
            </div>
            <div className="flex justify-between text-xs mt-1 text-gray-400 font-semibold px-1">
              <span>Incorrect</span>
              <span>Correct</span>
            </div>
          </div>
        </div>
  
        {/* Acquired Marks Pill */}
        <div className="flex flex-col items-center justify-center w-full md:w-auto">
          <div className="flex items-center justify-center w-20 h-20 rounded-full border-4 border-purple-700">
            <div className="text-center text-purple-700 font-bold">
              <p className="text-[10px] font-medium">Acquired Marks</p>
              <p className="text-md">{acquiredMarks}/{totalMarks}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  
  