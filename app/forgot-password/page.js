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

      <div className="bg-white min-h-screen flex justify-center items-center w-full overflow-hidden relative">
      <div className="relative py-8 px-8 max-w-7xl w-full">

        <div className = "flex justify-start">
          <h1 className="font-bold text-[#15609e] text-2xl md:text-4xl mt-1 ml-4 md:ml-6 mb-6">
            TESTWALE.AI
          </h1>
        </div>
        

        <div className="relative top-[1px] flex justify-start items-center min-h-screen py-8 pl-0 md:pl-4">
          <div className="w-[90%] sm:w-[500px] md:w-[600px] bg-[#f0ddff91] rounded-[20px] p-4 md:p-6 z-10 relative ml-0">
            <div className="max-w-[90vw] md:w-[256px] h-[45px] md:h-[55px] bg-[#001e32] rounded-[50px] mt-2.5 ml-2.5 hover:bg-[#001e32] flex items-center justify-center">
              <h2 className="font-semibold text-white text-[18px] md:text-[22px]">
                Forgot Password
              </h2>
            </div>
            {/* <div className="w-[200px] md:w-[256px] h-[45px] md:h-[55px] bg-[#001e32] rounded-[50px] mt-2.5 ml-2.5 hover:bg-[#001e32] ">
              <h2 className="font-semibold text-white text-[18px] md:text-[22px] pt-2 pl-6">
              Forgot Password
              </h2>
            </div> */}

            <div className="mt-6 flex flex-col gap-4">
              <div className="w-full">
                <input
                  type="email"
                  className="w-full h-[42px] mt-[20px] bg-white border border-gray-300 rounded px-4 text-base text-gray-600 placeholder:text-gray-400"
                  placeholder="Enter your email"
                  value = {email}
                  onChange = {handleEmailChange}
                />
                <div className="flex justify-center items-center gap-2 mt-5">
                  <div className = "bg-[#f0ddff] mt-[-3px] rounded-[50px] px-6 py-2 inline-flex">
                    <button 
                      onClick = {handleReset}
                      className={`font-['Inter',_Helvetica] text-[#2f2f68] text-lg cursor-pointer hover:text-[#5e2f7c] transition-colors`}
                    >
                      Reset
                    </button>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  {message && (
                    <p className={`text-lg font-medium ${message.includes('✅') ? 'text-green-600' : 'text-red-600'}`}>
                      {message}
                    </p>
                  )}
                  <p className="mt-4 text-gray-600">
                    Remember your password?{' '}
                    <a href="/login" className="text-[#15609e] hover:text-[#2f2f68] font-medium transition-colors">
                      Login here
                    </a>
                  </p>
                </div>
                
              </div>
            </div>
          </div>

          <img
            src="https://c.animaapp.com/mayx5w53ABHDjN/img/smiling-young-woman-with-books-backpack-standing-white-backgroun.png"
            alt="Smiling young woman"
            className="hidden md:block absolute w-[1100px] h-[800px] -right-[230px] top-[62%] -translate-y-1/2 object-contain z-0 opacity-80"
          />
        </div>
      </div>
    </div>






      {/* <ForgotPassword />   not needed for now
      <h1>Forgot Password</h1>
      create a input field and button with only email
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
      go to login page <a href="/login" className='text-blue-500'>Login</a> */}
    </main> 
  );
}