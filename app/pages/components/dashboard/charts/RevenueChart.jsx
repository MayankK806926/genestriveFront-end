import React from 'react'

const RevenueChart = ({ period }) => {
  const testData = [120, 150, 180, 140, 200, 170, 190, 160, 210, 180, 220, 200]
  const revenueData = [15000, 18000, 22000, 17000, 25000, 21000, 24000, 20000, 26000, 23000, 28000, 25000]
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const maxTest = Math.max(...testData)
  const maxRevenue = Math.max(...revenueData)

  return (
    <div className="h-80">
      <div className="flex items-center justify-center mb-4 space-x-6">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-sm text-gray-600">Tests Taken</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm text-gray-600">Total Revenue</span>
        </div>
      </div>
      
      <div className="relative h-64">
        <svg className="w-full h-full" viewBox="0 0 800 200">
          {/* Test line */}
          <polyline
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
            points={testData.map((value, index) => 
              `${(index * 800) / (testData.length - 1)},${200 - (value / maxTest) * 180}`
            ).join(' ')}
          />
          
          {/* Revenue line */}
          <polyline
            fill="none"
            stroke="#10b981"
            strokeWidth="3"
            points={revenueData.map((value, index) => 
              `${(index * 800) / (revenueData.length - 1)},${200 - (value / maxRevenue) * 180}`
            ).join(' ')}
          />
          
          {/* Data points for tests */}
          {testData.map((value, index) => (
            <circle
              key={`test-${index}`}
              cx={(index * 800) / (testData.length - 1)}
              cy={200 - (value / maxTest) * 180}
              r="4"
              fill="#3b82f6"
            />
          ))}
          
          {/* Data points for revenue */}
          {revenueData.map((value, index) => (
            <circle
              key={`revenue-${index}`}
              cx={(index * 800) / (revenueData.length - 1)}
              cy={200 - (value / maxRevenue) * 180}
              r="4"
              fill="#10b981"
            />
          ))}
        </svg>
        
        {/* X-axis labels */}
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          {labels.map((label, index) => (
            <span key={index}>{label}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RevenueChart