import React from "react";
import { ChevronLeftNormal } from "../../icons/ChevronLeftNormal";
import Navbar2 from "../../components/Navbar2";

export default function GenerateTest(){
  return (
    <>
    <div className="bg-[#f6effe] flex flex-col items-center min-h-screen">
      <div className="w-full mt-[-20px] h-[40px] mb-[100px] bg-white shadow-sm">
      <Navbar2 />
      </div>

      <div className="flex-grow w-full bg-[#f0ddff91] border-t border-solid border-[#d9d9d9] py-8">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="flex items-center mb-8">
            <ChevronLeftNormal className="w-6 h-6 mr-4" />
            <span className="font-medium text-[#2f2f68] text-xl">Back to Dashboard</span>
          </div>

          <h1 className="font-semibold text-[#2f2f68] text-5xl mb-4">Generate Test</h1>
          <p className="font-normal text-[#2f2f68] text-xl mb-8">Customize your test your own way</p>

          <div className="bg-white border border-solid border-[#d9d9d9] p-8 rounded-md">
            <div className="grid gap-6">
            <h3 className="font-medium text-[#000000c4] mb-1 text-xl">Subject</h3>
        <div className="mb-4 md:mb-6 relative">
          <select className="w-full p-2 md:p-3 text-[#2f2f68] rounded border border-gray-300 appearance-none bg-white">
            <option>Select Subject</option>
            <option>6th-10th</option>
            <option>11th</option>
            <option>12th</option>
          </select>
        </div>
              <div className="font-medium text-[#2f2f68] text-2xl">Topics</div>
              <div className="space-y-4">
        {["balah", "balah", "balah", "balah", "balah"].map((item, index) => (
          <div key={index} className="flex items-center">
            <input type="checkbox" className="w-5 h-5 mr-4" />
            <span className="font-normal text-[#2f2f68] text-xl">{item}</span>
          </div>
        ))}
      </div>
              <div className="font-medium text-[#2f2f68] text-2xl">Difficulty Level</div>
              <div className="mx-[150px] flex justify-between mt-8 space-y-4">
        <div className="flex items-center">
          <div className="w-5 h-5 bg-[#94e9b8] rounded-full mr-4"></div>
          <span className="font-normal text-[#2f2f68] text-2xl">Easy</span>
        </div>
        <div className="flex items-center">
          <div className="w-5 h-5 bg-[#ffdb56] rounded-full mr-4"></div>
          <span className="font-normal text-[#2f2f68] text-2xl">Medium</span>
        </div>
        <div className="flex items-center">
          <div className="w-5 h-5 bg-[#ec3030] rounded-full mr-4"></div>
          <span className="font-normal text-[#2f2f68] text-2xl">Difficult</span>
        </div>
      </div>
              <div className="font-medium text-[#2f2f68] text-2xl">Number of Questions</div>
              <div className="mt-4 flex items-center">
                {/* Using input type number with buttons */}
                <button className="font-medium text-black text-xl px-2 border border-gray-300 rounded mr-2">-</button>
                <input type="number" value="20" className="font-medium text-[#2f2f68] text-xl w-16 text-center border border-gray-300 rounded" readOnly />
                <button className="font-medium text-black text-xl px-2 border border-gray-300 rounded ml-2">+</button>
              </div>
              <div className="font-medium text-[#2f2f68] text-2xl">Time</div>
              <div className="mt-4">
                {/* Using input type text for time */}
                <input type="text" value="20 minutes" className="bg-white border border-solid border-gray-300 p-2 rounded shadow-sm inline-block font-medium text-[#2f2f68] text-xl" readOnly />
              </div>
              <div className="font-medium text-[#2f2f68] text-2xl">Type of Questions</div>
              <div className="mt-4 space-y-4">
        {["Multiple Choice Questions", "Single word", "Long answer"].map((item, index) => (
          <div key={index} className="flex items-center">
            <input type="checkbox" className="w-5 h-5 mr-4" />
            <span className="font-normal text-[#2f2f68] text-xl">{item}</span>
          </div>
        ))}
      </div>
            </div>


            <div className="mt-8 flex justify-center">
              <button className="bg-[#001e32] text-white font-semibold text-xl py-3 px-6 rounded-md">
                Generate Test
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};