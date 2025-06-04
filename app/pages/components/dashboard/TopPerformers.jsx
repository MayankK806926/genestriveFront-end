import React from 'react'
import { useDashboard } from '../../../context/DashboardContext'

const TopPerformers = () => {
  const { viewType, selectedGrade, selectedExam } = useDashboard()

  // Sample data - in a real app, this would come from an API based on selection
  const gradePerformers = {
    'All Grades': [
      { name: 'ByeWind', date: 'Jun 24, 2025', marks: '942.00', grade: '12th' },
      { name: 'Natali Craig', date: 'Mar 10, 2025', marks: '881.00', grade: '11th' },
      { name: 'Drew Cano', date: 'Nov 10, 2025', marks: '409.00', grade: '10th' },
      { name: 'Orlando Diggs', date: 'Dec 20, 2025', marks: '953.00', grade: '10th' },
      { name: 'Andi Lane', date: 'Jul 25, 2025', marks: '907.00', grade: '12th' }
    ],
    'Grade 5': [
      { name: 'John Smith', date: 'Jun 15, 2025', marks: '495.00', grade: '5th' },
      { name: 'Emma Wilson', date: 'Jun 16, 2025', marks: '482.00', grade: '5th' },
      { name: 'Lucas Brown', date: 'Jun 17, 2025', marks: '478.00', grade: '5th' },
      { name: 'Sophia Davis', date: 'Jun 18, 2025', marks: '475.00', grade: '5th' },
      { name: 'Oliver Martin', date: 'Jun 19, 2025', marks: '470.00', grade: '5th' }
    ],
    // Add more grade-specific data here
  }

  const examPerformers = {
    'JEE Mains': [
      { name: 'Rahul Kumar', date: 'Jun 24, 2025', marks: '298.00', grade: 'JEE' },
      { name: 'Priya Sharma', date: 'Jun 24, 2025', marks: '295.00', grade: 'JEE' },
      { name: 'Amit Patel', date: 'Jun 24, 2025', marks: '292.00', grade: 'JEE' },
      { name: 'Sneha Verma', date: 'Jun 24, 2025', marks: '290.00', grade: 'JEE' },
      { name: 'Raj Singh', date: 'Jun 24, 2025', marks: '288.00', grade: 'JEE' }
    ],
    'NEET UG': [
      { name: 'Aisha Khan', date: 'Jul 15, 2025', marks: '685.00', grade: 'NEET' },
      { name: 'Arjun Reddy', date: 'Jul 15, 2025', marks: '680.00', grade: 'NEET' },
      { name: 'Kavya Gupta', date: 'Jul 15, 2025', marks: '678.00', grade: 'NEET' },
      { name: 'Rohan Shah', date: 'Jul 15, 2025', marks: '675.00', grade: 'NEET' },
      { name: 'Ananya Desai', date: 'Jul 15, 2025', marks: '672.00', grade: 'NEET' }
    ],
    // Add more exam-specific data here
  }

  // Get the appropriate performers based on selection
  const performers = viewType === 'grades' 
    ? (gradePerformers[selectedGrade] || gradePerformers['All Grades'])
    : (examPerformers[selectedExam] || [])

  return (
    <section className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">
          Top Performers {viewType === 'grades' ? `- ${selectedGrade}` : `- ${selectedExam}`}
        </h3>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>

      <div className="overflow-x-auto">
        {performers.length > 0 ? (
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-600">Student Name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Date of Test</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Total Marks Obtained</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  {viewType === 'grades' ? 'Grade' : 'Exam'}
                </th>
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
        ) : (
          <div className="text-center py-8 text-gray-500">
            No data available for {selectedExam}
          </div>
        )}
      </div>
    </section>
  )
}

export default TopPerformers
