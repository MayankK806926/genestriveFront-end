import React from 'react'
import Navbar2 from './Navbar2'
import ppt from './assets/pptask.png'
import { FaUpload } from "react-icons/fa"; // Optional icon
import Footer from './Footer';
function Uploadppt() {
  return (
    <>
    <Navbar2/>
    <div className="flex flex-col bg-[#F4F8FB] min-h-screen items-center px-4 py-6">
        {/* Top Section */}
        <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center mb-8 m-20">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#001E32] mb-2">
              Talking PPT
            </h1>
            <p className="text-[#333] text-sm md:text-base max-w-xl">
              This is the official page of Testwale.ai, where you can share all your queries, feedback, complaints, or any concern you may have about our  courses, and programs
            </p>
            <p className="mt-4 text-[#001E32] font-semibold text-2xl mt-25">Hello Sam</p>
          </div>
          <img src={ppt} alt="Doubt" className="w-[200px] mt-6 md:mt-0" />
        </div>
        <hr className="w-full max-w-5xl border-t-[2px] border-[#000000] my-6" />
       

        <div className="flex flex-col items-center mt-6">
  

  <label htmlFor="file-upload" className="cursor-pointer bg-[#001E32] border border-white rounded-lg w-[200px] h-[180px] flex flex-col items-center justify-center transition hover:scale-105">
    <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-10 w-10 text-white mb-2"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth={2}
>
  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12V4m0 0l-4 4m4-4l4 4" />
</svg>

    <p className="text-white text-sm text-center px-2">Upload your PPT Here</p>
    <input
      id="file-upload"
      type="file"
      className="hidden"
      onChange={(e) => {
        const file = e.target.files[0];
        if (file) {
          console.log("Selected file:", file.name); // You can handle upload logic here
        }
      }}
    />
  </label>
</div>

    </div>
    <Footer/>
    </>
  )
}

export default Uploadppt
