import React from "react";

export const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto my-16 relative">
      <div className="text-center">
        <h1 className="font-bold text-[#2f2f68] text-4xl md:text-7xl leading-tight">
          Learn Smarter with
        </h1>

        <h2 className="font-extrabold text-[#15609e] text-3xl md:text-6xl mb-6">
          TESTWALE.AI
        </h2>

        <p className="font-medium text-[#2f2f68] text-xl max-w-[822px] mx-auto mb-10 leading-[30px]">
          AI - powered exam generator tailored for students from Grade 1 to 12.
          Practice tests customized to your learning needs and track your
          progress.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="bg-[#5e2f7c] text-white rounded-[50px] px-8 py-3 text-2xl font-semibold hover:bg-[#4a2563] transition-colors">
            Start Learning today
          </button>

          <button className="text-[#001e32] border border-[#2f2f68] rounded-[50px] px-8 py-3 text-2xl font-semibold bg-white hover:bg-[#f5f5f5] transition-colors shadow-[0px_0px_4px_rgba(0,0,0,0.25)]">
            Explore Programs
          </button>
        </div>

        <div className="flex justify-center items-center gap-8 flex-wrap md:flex-nowrap mt-8">
          <img
            src="https://c.animaapp.com/mayyh5h2tfkjUe/img/image-5.png"
            alt="Student studying"
            className="max-w-full md:max-w-[740px] h-auto object-cover order-1 md:order-1"
          />

          <img
            src="https://c.animaapp.com/mayyh5h2tfkjUe/img/image-6.png"
            alt="Educational illustration"
            className="max-w-full md:max-w-[300px] h-auto object-cover order-2 md:order-2 -rotate-[25deg] -translate-x-[120px] -translate-y-[30px] hover:-rotate-[20deg] transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};
