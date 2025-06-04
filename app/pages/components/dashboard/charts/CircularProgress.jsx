import React from 'react'

const CircularProgress = ({ value, label }) => {
  const circumference = 2 * Math.PI * 40 // r = 40
  const strokeDashoffset = circumference - (value / 100) * circumference
  const chartColor = '#5E2F7C'

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

export default CircularProgress 