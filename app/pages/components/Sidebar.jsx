import React from 'react';
import { ChevronBottomNormal } from "../icons/ChevronBottomNormal";
import { FaQuestionCircle } from 'react-icons/fa';
import { IoLogOutOutline } from 'react-icons/io5';
import { auth } from '../authentication/firebase-config';
import { destroyCookie } from "nookies";

const Sidebar = ({  grade,  examtype,  handleGradeChange,  handleExamTypeChange  }) => {
  return (
    <aside className="w-full md:w-[350px] bg-[#001e32] text-white flex flex-col">
      {/* Content with padding */}
      <div className="p-2 md:p-3 flex-grow">
        <h2 className="text-base mt-10 pt-4 md:text-lg font-bold mb-2 md:mb-3 text-center">GRADE</h2>
        <div className="w-[300px] flex justify-center ml-[10px] mb-2 md:mb-3 relative">
          <select
            className="w-full h-9 bg-gray-100 p-1 text-[#2f2f68] rounded appearance-none text-xs md:text-sm"
            value={grade}
            onChange={handleGradeChange}
          >
            <option value="">Select grade</option>
            <option value="6th">6th</option>
            <option value="7th">7th</option>
            <option value="8th">8th</option>
            <option value="9th">9th</option>
            <option value="10th">10th</option>
            <option value="11th">11th</option>
            <option value="12th">12th</option>
          </select>
          <ChevronBottomNormal className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 md:w-3 md:h-3" />
        </div>
        <h3 className="text-sm mt-10 md:text-base font-bold mb-2 text-center">Competitive exams</h3>
        <div className="relative w-[300px] flex justify-center ml-[10px] mb-2 md:mb-3">
          <select
            className="w-full h-9 p-1 bg-gray-100 md:p-1.5 text-[#2f2f68] rounded mb-2 text-xs md:text-sm appearance-none"
            value={examtype}
            onChange={handleExamTypeChange}
          >
            <option value="">Exams</option>
            <option value="JEE mains">JEE mains</option>
            <option value="JEE advance">JEE advance</option>
            <option value="NEET">NEET</option>
            <option value="BITSAT">BITSAT</option>
            <option value="CUET">CUET</option>
            <option value="KCET">KCET</option>
          </select>
          <ChevronBottomNormal className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 md:w-3 md:h-3" />
        </div>
      </div>

      {/* HR element for the visual line, spans full width */}
      <hr className="border-white border-t w-full" />

      {/* Bottom content with padding */}
      <div className='p-2 md:p-3 text-center space-y-2 pb-3 pt-2'>
        <div>
          <button className="flex items-center justify-center gap-1 hover:text-gray-300 transition-colors w-full py-1">
            <FaQuestionCircle className="text-sm md:text-base flex items-center" />
            <span className="flex items-center text-xs md:text-sm">Help Center</span>
          </button>
        </div>
        <div>
          <button className="flex items-center justify-center gap-1 hover:text-gray-300 transition-colors w-full py-1"
            onClick={async () => {
              try {
                await auth.signOut(); // Firebase logout
                
                window.location.href = "/login"; // Or router.push("/login")
              } catch (err) {
                console.error("Logout error:", err);
              }
            }}
          >
            <IoLogOutOutline className="text-sm md:text-base flex items-center" />
            <span className="flex items-center text-xs md:text-sm">Log Out</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
