import React from 'react'
import { FiCalendar, FiFilter } from 'react-icons/fi'
import { useDashboard } from '../../../context/DashboardContext'

const FilterSection = () => {
  const { 
    startDate, 
    setStartDate, 
    endDate, 
    setEndDate,
    viewType,
    selectedGrade,
    selectedExam
  } = useDashboard()

  const handleFilter = () => {
    // Here you can add the filtering logic
    console.log('Filtering with dates:', { startDate, endDate });
  };

  return (
    <section className="bg-white rounded-lg p-6 shadow-sm h-[140px] flex items-center">
      <div className="w-full">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Filter Tests for {viewType === 'grades' ? selectedGrade : selectedExam}
        </h2>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Start Date"
            />
            <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
          
          <span className="text-gray-500">to</span>
          
          <div className="relative">
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="End Date"
            />
            <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>

          <button
            onClick={handleFilter}
            className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <FiFilter className="w-4 h-4 mr-2" />
            Filter
          </button>
        </div>
      </div>
    </section>
  )
}

export default FilterSection
