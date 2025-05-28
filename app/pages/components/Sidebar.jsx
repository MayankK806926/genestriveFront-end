import React from 'react';
import { ChevronBottomNormal } from "../icons/ChevronBottomNormal";
import { FaQuestionCircle } from 'react-icons/fa';
import { IoLogOutOutline } from 'react-icons/io5';

const Sidebar = ({grade,examtype,handleGradeChange,handleExamTypeChange}) => {
  return (
    <aside className="w-full md:w-[430px] bg-[#001e32] text-white flex flex-col">
      {/* Content with padding */}
      <div className="p-4 md:p-8 flex-grow">
        <h2 className="text-2xl pt-10 md:text-3xl font-bold mb-4 md:mb-8 text-center">GRADE</h2>
        <div className="mb-4 md:mb-8 relative">
          <select className="w-full p-2 md:p-3 text-[#2f2f68] rounded appearance-none" value={grade} onChange={handleGradeChange}>
            <option value="">Select grade</option>
            <option value="6th-10th">6th-10th</option>
            <option value="11th">11th</option>
            <option value="12th">12th</option>
          </select>
          <ChevronBottomNormal className="absolute right-3 top-1/2 transform -translate-y-1/2" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-center">Competitive exams</h3>
        <div className="relative">
          <select className="w-full p-2 md:p-3 text-[#2f2f68] rounded mb-4 appearance-none" value={examtype} onChange={handleExamTypeChange}>
            <option value="">Exams</option>
            <option value="JEE mains">JEE mains</option>
            <option value="JEE advance">JEE advance</option>
            <option value="NEET">NEET</option>
            <option value="BITSAT">BITSAT</option>
            <option value="CUET">CUET</option>
            <option value="KCET">KCET</option>
          </select>
          <ChevronBottomNormal className="absolute right-3 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>

      {/* HR element for the visual line, spans full width */}
      <hr className="border-white border-t-2 w-full" />

      {/* Bottom content with padding */}
      <div className='p-4 md:p-8 text-center space-y-4 pb-6 pt-4'>
          <div>
            <button className="flex items-center justify-center gap-2 hover:text-gray-300 transition-colors w-full py-2">
              <FaQuestionCircle className="text-xl flex items-center" />
              <span className="flex items-center">Help Center</span>
            </button>
          </div>
          <div>
            <button className="flex items-center justify-center gap-2 hover:text-gray-300 transition-colors w-full py-2">
              <IoLogOutOutline className="text-xl flex items-center" />
              <span className="flex items-center">Log Out</span>
            </button>
          </div>
      </div>
    </aside>
  );
};

export default Sidebar; 