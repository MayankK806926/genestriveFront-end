"use client"
import React from 'react';
import AdminPanel from '../pages/AdminPanel/AdminPanel';
import { DashboardProvider } from '../context/DashboardContext';

export default function SignUpPage() {
  return (
    <main>
      <DashboardProvider>
        <AdminPanel />
      </DashboardProvider>
    </main>
  );
}