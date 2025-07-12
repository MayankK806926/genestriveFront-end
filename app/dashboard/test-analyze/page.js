"use client"
import React, { Suspense } from 'react';
import TestAnalyze from '@/app/pages/TestAtoZ/TestAnalyze';

export default function testanalyze() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
      <TestAnalyze />
      </Suspense>
    </main>
  );
} 