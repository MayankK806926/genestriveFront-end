import React from 'react'
import { FiUsers, FiFileText, FiClock } from 'react-icons/fi'

const StatsCards = () => {
  const stats = [
    {
      title: 'Daily Active Users',
      value: '75',
      icon: FiUsers,
      color: 'bg-blue-500'
    },
    {
      title: 'Test Created Per Day',
      value: '110',
      icon: FiFileText,
      color: 'bg-green-500'
    }
  ]

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg p-8 shadow-sm flex items-center justify-center">
          <div className="flex flex-col items-center text-center">
            <div className={`${stat.color} p-4 rounded-lg mb-4`}>
              <stat.icon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</h3>
            <p className="text-lg text-gray-600">{stat.title}</p>
          </div>
        </div>
      ))}
      
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Avg. Time Spent</h3>
          <select className="px-3 py-1 border border-gray-300 rounded-lg text-sm">
            <option>Select Grade</option>
            <option>Grade 5</option>
            <option>Grade 6</option>
            <option>Grade 7</option>
            <option>Grade 8</option>
            <option>Grade 9</option>
            <option>Grade 10</option>
            <option>Grade 11</option>
            <option>Grade 12</option>
          </select>
        </div>
        <div className="flex items-center justify-center flex-col">
          <div className="relative w-32 h-32">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#e5e7eb"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#5E2F7C"
                strokeWidth="8"
                fill="none"
                strokeDasharray="251.2"
                strokeDashoffset="50.24"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-800">80%</span>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <div className="w-3 h-3 rounded-full bg-[#5E2F7C] mr-2"></div>
            <span className="text-sm text-gray-600">Time Spent in Test</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsCards