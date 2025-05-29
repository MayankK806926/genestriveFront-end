import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import StudentParticipationChart from './charts/StudentParticipationChart'
import DifficultyLevelChart from './charts/DifficultyLevelChart'
import RevenueChart from './charts/RevenueChart'

const ChartsSection = () => {
  const [participationPeriod, setParticipationPeriod] = useState('weekly')
  const [difficultyPeriod, setDifficultyPeriod] = useState('weekly')
  const [revenuePeriod, setRevenuePeriod] = useState('weekly')

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Students Participation</h3>
          <div className="flex items-center gap-2">
            <select 
              value={participationPeriod}
              onChange={(e) => setParticipationPeriod(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded-lg text-sm"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
            <select className="px-3 py-1 border border-gray-300 rounded-lg text-sm">
              <option>All Grades</option>
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
        </div>
        <StudentParticipationChart period={participationPeriod} />
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Difficulty Level Chart</h3>
          <div className="flex items-center gap-2">
            <select 
              value={difficultyPeriod}
              onChange={(e) => setDifficultyPeriod(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded-lg text-sm"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
            <select className="px-3 py-1 border border-gray-300 rounded-lg text-sm">
              <option>All Grades</option>
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
        </div>
        <DifficultyLevelChart period={difficultyPeriod} />
      </div>

      <div className="lg:col-span-2 bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Test Taken & Revenue Analysis</h3>
          <select 
            value={revenuePeriod}
            onChange={(e) => setRevenuePeriod(e.target.value)}
            className="px-3 py-1 border border-gray-300 rounded-lg text-sm"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <RevenueChart period={revenuePeriod} />
      </div>
    </section>
  )
}

export default ChartsSection