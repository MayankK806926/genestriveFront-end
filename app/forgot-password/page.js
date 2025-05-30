"use client"
import React from 'react';
import ForgotPassword from '../pages/authentication/ForgotPassword';
import { auth } from '../pages/authentication/firebase-config';
import { sendPasswordResetEmail } from 'firebase/auth'; 

export default function SignUpPage() {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handleMessageChange = (e) => {
    e.preventDefault()
    setMessage(e.target.value);
  };
  

  const handleReset = async () => {
    try {
      console.log("Sending password reset email to:", email);
      await sendPasswordResetEmail(auth, email);
      setMessage("✅ Password reset email sent!");
    } catch (err) {
      setMessage("❌ Error: " + err.message);
    }
  };
  return (
    <main>
      {/* <ForgotPassword />   not needed for now */}
      <h1>Forgot Password</h1>
      {/* create a input field and button with only email */}
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleEmailChange}
        className="border p-2 rounded mb-2"
      />
      <button
        onClick={handleReset}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Reset
      </button>
      
      <p className='text-amber-50'>hello {message}</p>
      go to login page <a href="/login" className='text-blue-500'>Login</a>
    </main>
  );
}