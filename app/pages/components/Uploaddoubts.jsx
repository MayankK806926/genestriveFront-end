"use client";
import React, { useState } from "react";
import Navbar2 from "./Navbar2";
import doubt from "./assets/doubtask.png";
import { FaUpload } from "react-icons/fa";
import Footer from "./Footer";
import Image from "next/image";

function Uploaddoubts() {
  const [doubtText, setDoubtText] = useState("");
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [response, setResponse] = useState(null);
  const [subm, setSubm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setSubm(true);
    setLoading(true);
    setError(null);

    try {

      const res = await fetch("http://localhost:3000/api/upload-doubt", {
        method: "POST",
        body: JSON.stringify({ file, doubtText }),
      });

      if (!res.ok) throw new Error("Failed to upload doubt");

      const data = await res.json();
      setResponse(data.message || JSON.stringify(data));
    } catch (err) {
      console.error("Error uploading doubt:", err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFilePreview(URL.createObjectURL(selectedFile));
    }
  };

  return (
    <>
      <Navbar2 />
      <div className="flex flex-col bg-[#F4F8FB] min-h-screen items-center px-4 py-6">
        {/* Top Section */}
        <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center mb-8 m-20">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#001E32] mb-2">
              DOUBT SOLVER
            </h1>
            <p className="text-[#333] text-sm md:text-base max-w-xl">
              This is the official page of Testwale, where you can share all your queries,
              feedback, explanations, or any concerns you have about our lessons and progress.
            </p>
            <p className="text-[#001E32] font-semibold text-2xl mt-6">Hello Sam</p>
          </div>
          <Image src={doubt} alt="Doubt" className="w-[200px] mt-6 md:mt-0" />
        </div>

        <hr className="w-full max-w-5xl border-t-[2px] border-[#000000] my-6" />

        {/* Input Section */}
        <div className="w-full max-w-3xl mb-6">
          {!subm && (
            <>
              <label htmlFor="doubtText" className="block text-[#001E32] font-medium mb-5 text-2xl">
                Type your Question Here .....
              </label>
              <div className="relative">
                <textarea
                  id="doubtText"
                  rows="6"
                  className="w-full p-4 bg-[#001E32] text-white rounded-[10px] focus:outline-none resize-none"
                  placeholder="Type your Question Here..."
                  value={doubtText}
                  onChange={(e) => setDoubtText(e.target.value)}
                ></textarea>
                <button
                  className="absolute bottom-4 right-4 text-white bg-[#5e2f7c] p-2 rounded-full"
                  onClick={async(e)=>{handleSubmit(e)}}
                >
                  <FaUpload />
                </button>
              </div>
            </>
          )}
        </div>

        {/* Loading */}
        {loading && (
          <>
            <div className="w-full max-w-3xl mb-6 text-center text-gray-600">
              Loading...
            </div>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              onClick={() => {
                setFile(null);
                setFilePreview(null);
              }}
            >
              Try again
            </button>
          </>
        )}

        {/* Error */}
        {error && (
          <>
            <div className="w-full max-w-3xl mb-6 text-center text-red-500">
              {error}
            </div>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              onClick={() => {
                setFile(null);
                setFilePreview(null);
              }}
            >
              Try again
            </button>
          </>
        )}

        {/* Response Section */}
        {subm && !loading && !error && response && (
          <>
            {/* User Doubt */}
            <div className="w-full max-w-3xl mb-4">
              <div className="flex justify-between text-sm text-gray-600 px-2">
                <span className="text-red-600 font-medium">Your doubt</span>
                <span className="text-xs">22/5/21 &nbsp; 3:04 pm</span>
              </div>
              <div className="bg-[#001E32] text-white mt-2 rounded-xl shadow-md p-4">
              {file && <Image
                src={filePreview}
                alt="Uploaded Doubt"
                width={200}
                height={200}
                className="rounded-lg mt-4"
              />}
                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                  {doubtText || "Empty Doubt Field"}
                </p>
              </div>
            </div>

            {/* Solution */}
            <div className="w-full max-w-3xl mb-6">
              <div className="flex justify-between text-sm text-gray-600 px-2">
                <span className="text-green-600 font-medium">Solution</span>
                <span className="text-xs">22/5/21 &nbsp; 3:04 pm</span>
              </div>
              <div className="bg-[#0d274d] text-white mt-2 rounded-xl shadow-md p-4">
                <div className="flex justify-between mb-3 text-sm font-semibold border-b border-white/20 pb-2">
                  <span>Solution details</span>
                  <span className="text-red-400">Teacher name</span>
                </div>
                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                  {response}
                </p>
              </div>
            </div>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              onClick={() => {
                setFile(null);
                setFilePreview(null);
                setDoubtText("")
                setSubm(false)
              }}
            >
              Try again
            </button>
          </>
        )}

        {/* File Upload Alternative */}
        {!subm && !file && (
          <>
            <div className="flex flex-col items-center mt-6">
              <p className="text-lg font-semibold mb-5 text-black">Or</p>
              <label htmlFor="file-upload" className="cursor-pointer bg-[#001E32] border border-white rounded-lg w-[200px] h-[180px] flex flex-col items-center justify-center transition hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12V4m0 0l-4 4m4-4l4 4" />
                </svg>
                <p className="text-white text-sm text-center px-2">Upload your Doubt Here</p>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={async (e) => { handleFileChange(e), handleSubmit(e) }}
                />
              </label>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Uploaddoubts;
