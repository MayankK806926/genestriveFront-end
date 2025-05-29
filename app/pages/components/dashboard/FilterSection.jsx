import React, { useState } from 'react'
import { FiCalendar, FiChevronDown } from 'react-icons/fi'

const FilterSection = () => {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  return (
    <section className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex flex-wrap items-center gap-4">
        <h2 className="text-lg font-semibold text-gray-800">Filter Tests</h2>
        
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
        </div>
      </div>
    </section>
  )
}

export default FilterSection