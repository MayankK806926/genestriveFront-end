
import React from 'react';
import TestIcon from '../assets/exam.png';
import ResourcesIcon from '../assets/book.png';
import ExamsIcon from '../assets/res.png';
import '../index.css'; 

const Home = () => {
  return (
    <div>
      <main className="px-4 md:px-10 py-12 w-full overflow-hidden">
        <h1 className="text-[36px] md:text-[56px] font-bold text-[#2F2F68] text-center leading-tight mb-20">
          Start Learning with our
        </h1>

        <div className="flex flex-col gap-36 mb-20 w-full">
          
          <div className="relative flex flex-col lg:flex-row items-center gap-12 w-full z-0">
            <div className="w-full flex justify-start z-10 -ml-28">
              <div className="bg-[#F7ECFF] w-[600px] h-[600px] rounded-full flex items-center justify-center shadow-[2px_2px_4px_#5E2F7C] relative z-10 animate-float">
                <img src={TestIcon} alt="AI Test Generator" className="w-[2500px] h-[2500px] object-contain z-20 translate-x-20" />
              </div>
            </div>
            <div className="w-full text-left max-w-md mx-40 relative z-0">
              <h2 className="text-5xl font-semibold mb-4 text-center">AI Test Generator</h2>
              <p className="text-lg text-gray-600 text-left">
                Find the teachers that genuinely care for your kid's future. Take personalized doubt sessions, detailed report discussions, and live data tracking of your ward's academic journey. Mentor teacher will be the ideal supporting person for your ward.
              </p>
            </div>
          </div>

        
          <div className="relative flex flex-col-reverse lg:flex-row items-center gap-12 w-full z-0">
            <div className="w-full text-left max-w-md mx-40 relative z-0">
              <h2 className="text-5xl font-semibold mb-4 text-center">Our Extensive Resources</h2>
              <p className="text-lg text-gray-600 text-left">
                Access tailored resources to guide your child's academic journey with support from expert mentors and AI-driven tools.
              </p>
            </div>
            <div className="w-full flex justify-end z-10 -mr-28">
              <div className="bg-[#F7ECFF] w-[600px] h-[600px] rounded-full flex items-center justify-center shadow-[2px_2px_4px_#5E2F7C] relative z-10 animate-float">
                <img src={ResourcesIcon} alt="Our Extensive Resources" className="w-[500px] h-[500px] object-contain z-20 -translate-x-20" />
              </div>
            </div>
          </div>

          
          <div className="relative flex flex-col lg:flex-row items-center gap-12 w-full z-0">
            <div className="w-full flex justify-start z-10 -ml-28">
              <div className="bg-[#F7ECFF] w-[600px] h-[600px] rounded-full flex items-center justify-center shadow-[2px_2px_4px_#5E2F7C] relative z-10 animate-float">
                <img src={ExamsIcon} alt="Competitive Exams" className="w-[500px] h-[500px] object-contain z-20 translate-x-20" />
              </div>
            </div>
            <div className="w-full text-left max-w-md mx-40 relative z-50">
              <h2 className="text-5xl font-semibold mb-4 text-center">Competitive Exams</h2>
              <p className="text-lg text-gray-600 text-left">
                Prepare your child for competitive exams with mentorship, detailed feedback, and consistent support to build strong academic foundations.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-[#001E32] text-white px-10 py-4 rounded-lg text-base md:text-lg hover:bg-opacity-90 transition">
            GET STARTED
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
