import React from 'react'

const TopPerformers = () => {
  const performers = [
    { name: 'ByeWind', date: 'Jun 24, 2025', marks: '942.00', grade: 'A+' },
    { name: 'Natali Craig', date: 'Mar 10, 2025', marks: '881.00', grade: 'A' },
    { name: 'Drew Cano', date: 'Nov 10, 2025', marks: '409.00', grade: 'B+' },
    { name: 'Orlando Diggs', date: 'Dec 20, 2025', marks: '953.00', grade: 'A+' },
    { name: 'Andi Lane', date: 'Jul 25, 2025', marks: '907.00', grade: 'A' }
  ]

  return (
    <section className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Top Performers</h3>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-medium text-gray-600">Student Name</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Date of Test</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Total Marks Obtained</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Grade</th>
            </tr>
          </thead>
          <tbody>
            {performers.map((performer, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 font-medium text-sm">
                        {performer.name.charAt(0)}
                      </span>
                    </div>
                    <span className="font-medium text-gray-800">{performer.name}</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-gray-600">{performer.date}</td>
                <td className="py-3 px-4 text-gray-800 font-medium">{performer.marks}</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                    {performer.grade}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default TopPerformers