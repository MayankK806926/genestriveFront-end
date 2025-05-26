"use client"
import React from 'react';
import { LandingPage } from './pages/LandingPage';
import { Login } from './pages/authentication/Login';
import { SignUp } from './pages/authentication/SignUp';

export default function Home() {
  return (
    <main>
      <LandingPage />
    </main>
  );
}
