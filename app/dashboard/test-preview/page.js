"use client"
import React, { Suspense } from 'react';
import TestPreview from '@/app/pages/TestAtoZ/TestPreview';

export default function LoginPage() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
    <TestPreview />
      </Suspense>
    </main>
  );
} 