"use client";
import React, { createContext, useContext, useState } from 'react';

const DashboardContext = createContext();

export function DashboardProvider({ children }) {
  const [viewType, setViewType] = useState('questions');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedExam, setSelectedExam] = useState('');
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
    setViewType,
    selectedGrade,
    setSelectedGrade,
    selectedExam,
    setSelectedExam,
    chartPeriod,
    setChartPeriod,
    handleGradeSelect,
    handleExamSelect
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
} 