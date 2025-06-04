import React, { createContext, useContext, useState } from 'react';

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  // View type (grades or competitive)
  const [viewType, setViewType] = useState('grades');
  
  // Selected grade or exam
  const [selectedGrade, setSelectedGrade] = useState('All Grades');
  const [selectedExam, setSelectedExam] = useState('');
  
  // Date filter
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  
  // Period for charts
  const [chartPeriod, setChartPeriod] = useState('weekly');

  const handleGradeSelect = (grade) => {
    setViewType('grades');
    setSelectedGrade(grade);
    setSelectedExam('');
  };

  const handleExamSelect = (exam) => {
    setViewType('competitive');
    setSelectedExam(exam);
    setSelectedGrade('');
  };

  const value = {
    viewType,
    selectedGrade,
    selectedExam,
    startDate,
    endDate,
    chartPeriod,
    setStartDate,
    setEndDate,
    setChartPeriod,
    handleGradeSelect,
    handleExamSelect
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
}; 