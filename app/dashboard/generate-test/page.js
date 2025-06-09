"use client"
import React, { Suspense } from 'react';
import GeneratingTest from '@/app/pages/TestAtoZ/GenerateTest';

export default function LoginPage() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
      <GeneratingTest />
      </Suspense>
    </main>
  );
} 