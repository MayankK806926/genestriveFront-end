import React from "react";

const LaunchPage = () => {
  return (
    <section className="w-full px-6 py-16 bg-white mt-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl lg:text-[5.1rem] font-bold text-[#2f2f68] leading-tight">
          Learn Smarter with <br />
          <span className="text-[#15609e] text-5xl md:text-6xl lg:text-7xl font-extrabold block mt-4">
            TESTWALE.AI
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-8 max-w-4xl text-lg md:text-xl font-medium text-[#2f2f68] leading-relaxed">
          AI-powered exam generator tailored for students from Grade 1 to 12. 
          Practice tests customized to your learning needs and track your
          progress.
        </p>

        {/* Buttons */}
        <div className="mt-24 flex flex-col md:flex-row gap-14 justify-center items-center">
          <button className="bg-[#5e2f7c] text-white text-2xl font-semibold px-12 py-4 rounded-full">
            Start Learning Today
          </button>
          <button className="bg-white border border-[#2f2f68] text-[#001e32] text-2xl font-semibold px-12 py-4 rounded-full shadow-md">
            Competitive Exams
          </button>
        </div>

        {/* Images */}
        <div className="mt-30 md:mt-20 lg:mt-1 w-full flex flex-col md:flex-row items-center justify-around px-4 md:px-8 lg:px-16 gap-10">
          {/* Left Image */}
          <div className="w-full md:w-[60%]">
            <img
              src="/assets/image-5.png"
              alt="Left Illustration"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Image - Hidden on mobile */}
          <div className="hidden md:block w-[35%] lg:w-[30%]">
            <img
              src="/assets/image-6.png"
              alt="Right Illustration"
              className="w-full h-auto rotate-[28deg] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchPage; 