import React from 'react'
import { FiChevronDown } from 'react-icons/fi'
import StudentParticipationChart from './charts/StudentParticipationChart'
import DifficultyLevelChart from './charts/DifficultyLevelChart'
import { useDashboard } from '../../../context/DashboardContext'

const ChartsSection = () => {
  const { 
    chartPeriod, 
    setChartPeriod, 
    viewType,
    selectedGrade,
    selectedExam
  } = useDashboard()

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Students Participation</h3>
          <div className="flex items-center gap-2">
            <select 
              value={chartPeriod}
              onChange={(e) => setChartPeriod(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded-lg text-sm"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
            {viewType === 'grades' && (
              <select 
                value={selectedGrade} 
                disabled 
                className="px-3 py-1 border border-gray-300 rounded-lg text-sm bg-gray-50"
              >
                <option>{selectedGrade}</option>
              </select>
            )}
          </div>
        </div>
        <StudentParticipationChart period={chartPeriod} />
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Difficulty Level Chart</h3>
          <div className="flex items-center gap-2">
            <select 
              value={chartPeriod}
              onChange={(e) => setChartPeriod(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded-lg text-sm"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
            {viewType === 'grades' && (
              <select 
                value={selectedGrade} 
                disabled 
                className="px-3 py-1 border border-gray-300 rounded-lg text-sm bg-gray-50"
              >
                <option>{selectedGrade}</option>
              </select>
            )}
          </div>
        </div>
        <DifficultyLevelChart period={chartPeriod} />
      </div>
    </section>
  )
}

export default ChartsSection
