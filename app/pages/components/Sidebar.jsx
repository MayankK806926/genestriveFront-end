import React from 'react';
import { ChevronBottomNormal } from "../icons/ChevronBottomNormal";
import { FaQuestionCircle } from 'react-icons/fa';
import { IoLogOutOutline } from 'react-icons/io5';

const Sidebar = () => {
  return (
    <aside className="w-full md:w-[430px] bg-[#001e32] text-white flex flex-col">
      {/* Content with padding */}
      <div className="p-4 md:p-8 flex-grow">
        <h2 className="text-2xl pt-10 md:text-3xl font-bold mb-4 md:mb-8 text-center">GRADE</h2>
        <div className="mb-4 md:mb-8 relative">
          <select className="w-full p-2 md:p-3 text-[#2f2f68] rounded appearance-none">
            <option>Select grade</option>
            <option>6th-10th</option>
            <option>11th</option>
            <option>12th</option>
          </select>
          <ChevronBottomNormal className="absolute right-3 top-1/2 transform -translate-y-1/2" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-center">Competitive exams</h3>
        <div className="relative">
          <select className="w-full p-2 md:p-3 text-[#2f2f68] rounded mb-4 appearance-none">
            <option>Exams</option>
            <option>JEE mains</option>
            <option>JEE advance</option>
            <option>NEET</option>
            <option>BITSAT</option>
            <option>CUET</option>
            <option>KCET</option>
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