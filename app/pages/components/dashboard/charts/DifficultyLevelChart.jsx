import React from 'react'

const DifficultyLevelChart = ({ period }) => {
  // Sample data for different periods
  const data = {
    daily: {
      easy: 75,
      medium: 60,
      hard: 45
    },
    weekly: {
      easy: 70,
      medium: 65,
      hard: 40
    },
    monthly: {
      easy: 80,
      medium: 55,
      hard: 35
    }
  }

  const currentData = data[period]

  // Single color for all charts
  const chartColor = '#5E2F7C'

  const CircularProgress = ({ value, label }) => {
    const circumference = 2 * Math.PI * 40 // r = 40
    const strokeDashoffset = circumference - (value / 100) * circumference

    return (
      <div className="flex flex-col items-center">
        <div className="relative w-36 h-36">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#e5e7eb"
              strokeWidth="8"
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke={chartColor}
              strokeWidth="8"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-2xl font-bold text-gray-800">{value}%</span>
            <span className="text-sm text-gray-600 mt-1">{label}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center px-4 mb-4">
        <CircularProgress 
          value={currentData.easy} 
          label="Easy"
        />
        <CircularProgress 
          value={currentData.medium} 
          label="Medium"
        />
        <CircularProgress 
          value={currentData.hard} 
          label="Hard"
        />
      </div>

      {/* Legend */}
      <div className="flex justify-center items-center space-x-6">
        {['Easy', 'Medium', 'Hard'].map((level) => (
          <div key={level} className="flex items-center">
            <div 
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: chartColor }}
            ></div>
            <span className="text-xs text-gray-600">{level} Level</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DifficultyLevelChart