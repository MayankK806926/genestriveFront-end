import React from 'react'

const StudentParticipationChart = ({ period }) => {
  const data = {
    daily: [65, 45, 70, 55, 80, 60, 75],
    weekly: [450, 320, 490, 385, 560, 420, 525],
    monthly: [1800, 1280, 1960, 1540, 2240, 1680, 2100]
  }

  const labels = {
    daily: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    weekly: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
    monthly: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
  }

  const currentData = data[period]
  const currentLabels = labels[period]
  const maxValue = Math.max(...currentData)

  // Generate y-axis values
  const yAxisValues = Array.from({ length: 6 }, (_, i) => Math.round((maxValue / 5) * i))

  return (
    <div className="h-80 relative bg-gray-50 p-4 rounded-lg">
      {/* Y-axis grid lines and labels */}
      <div className="absolute left-0 top-0 h-64 w-full flex flex-col justify-between">
        {yAxisValues.reverse().map((value, index) => (
          <div key={index} className="w-full flex items-center">
            <span className="text-xs text-gray-500 w-12 text-right pr-2">{value}</span>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>
        ))}
      </div>

      {/* Bars */}
      <div className="absolute left-16 top-0 right-4 h-64 flex items-end justify-between">
        {currentData.map((value, index) => (
          <div key={index} className="flex flex-col items-center" style={{ width: '10%' }}>
            <div className="relative w-full group">
              <div 
                className="w-full bg-purple-600 rounded-t-lg transition-all duration-300 hover:bg-purple-700 hover:shadow-lg"
                style={{ 
                  height: `${(value / maxValue) * 100}%`,
                  minHeight: '4px'
                }}
              >
                {/* Tooltip */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 whitespace-nowrap">
                  {value} students
                </div>
              </div>
            </div>
            <span className="text-xs font-medium text-gray-600 mt-2">{currentLabels[index]}</span>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="absolute bottom-0 left-16 right-4 flex items-center">
        <div className="flex items-center bg-white px-3 py-1 rounded-full shadow-sm">
          <div className="w-3 h-3 bg-purple-600 rounded-full mr-2"></div>
          <span className="text-sm text-gray-600">Student Participation</span>
        </div>
      </div>
    </div>
  )
}

export default StudentParticipationChart