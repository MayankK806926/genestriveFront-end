import Link from 'next/link';
import React from 'react';

const MainContent = ({name,totalTestsTaken,AverageAccuracy,WeakTopics, Progress, recentActivities, topicsToFocus, resources }) => {

  return (
    <section className="mt-8 flex-grow p-4 md:p-8 overflow-y-auto">
      <div className="bg-[#f7ecff] rounded-[15px] px-4 py-8 md:px-6 md:py-12 mb-4 md:mb-8 flex justify-between items-center">
      {/* Left Side: Greeting */}
        <div>
          <h1 className="text-2xl md:text-[32px] font-bold text-[#2f2f68] mb-2 md:mb-4">Hi, {name}</h1>
          <p className="text-base md:text-xl text-[#2f2f68]">
            Generate personalized tests and improve your weak points
          </p>
        </div>

        {/* Right Side: Profile Picture Placeholder */}
        <div className="hidden md:block w-44 aspect-square bg-[#D9D9D9] rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-4 md:mb-8">
        {[
          { title: "Total Tests Taken", value: totalTestsTaken || 0 },
          { title: "Average Accuracy", value: AverageAccuracy || "0%" },
          { title: "Weak Topics", value: WeakTopics || 0 },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#5e2f7c] text-white p-6 md:p-8 rounded-[15px] flex flex-col items-center justify-center space-y-2 md:space-y-3 text-center"
          >
            <h3 className="text-sm sm:text-base md:text-xl font-semibold">
              {item.title}
            </h3>
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-between bg-[#f7ecff] rounded-[15px] p-4 md:p-10 mb-4 md:mb-8">
        <h2 className="text-2xl md:text-[32px] font-bold text-[#2f2f68] mb-2 md:mb-4">AI Test Generator</h2>
        <Link href='/dashboard/generate-test' className="bg-[#001e32] text-white text-xl md:text-[32px] px-4 md:px-8 py-2 md:py-4 rounded-[15px]">Generate Test</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-4 md:mb-8">
        <div className="bg-[#f7ecff] rounded-[15px] p-4 md:p-6">
          <h2 className="text-2xl md:text-[32px] font-bold text-[#2f2f68] mb-2 md:mb-4 text-center">Recent Activities</h2>
          {recentActivities && recentActivities.map((activity, index) => (
            <div key={index} className="bg-white p-3 md:p-4 rounded-lg mb-2 md:mb-4">
              <h3 className="font-semibold text-[#2f2f68]">{activity.title}</h3>
              <div className="flex justify-between items-center">
                <span className="bg-[#05ff6f82] text-[#2f2f68] text-xs px-2 py-1 rounded">Score - {activity.score}</span>
                <span className="text-[#2f2f68] text-xs">{activity.date}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#f7ecff] rounded-[15px] p-4 md:p-6">
          <h2 className="text-2xl md:text-[32px] font-bold text-[#2f2f68] mb-2 md:mb-4 text-center">Your Progress</h2>
          {Progress && typeof Progress === 'object' && Object.keys(Progress).map((topic, index) => (
            <div key={index} className="mb-2 md:mb-4">
              <h3 className="font-semibold text-[#2f2f68] mb-1 md:mb-2">{topic}</h3>
              <div className="w-full bg-[#d9d9d9] rounded-full h-2.5">
                <div className="bg-[#5e2f7c] h-2.5 rounded-full" style={{width: `${Progress[topic]}%`}}></div>
              </div>
              <div className="text-right text-xs text-[#2f2f68]">{Progress[topic]}% Accuracy</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#f7ecff] rounded-[15px] p-4 md:p-6 mb-4 md:mb-8">
        <h2 className="text-2xl md:text-[32px] font-bold text-[#2f2f68] mb-2 md:mb-4 text-center">Topics to Focus on</h2>
        {topicsToFocus.map((topic, index) => (
          <div key={index} className="bg-white p-3 md:p-4 rounded-lg mb-2 md:mb-4">
            <h3 className="font-semibold text-[#2f2f68]">{topic.title}</h3>
            <div className="w-full bg-[#d9d9d9] rounded-full h-2.5 mt-1 md:mt-2">
              <div className="bg-[#5e2f7c] h-2.5 rounded-full" style={{width: `${topic.progress}%`}}></div>
            </div>
            <div className="text-right text-xs text-[#2f2f68]">{topic.accuracy} Accuracy</div>
          </div>
        ))}
      </div>

      <div className=" bg-[#f7ecff] rounded-[15px] p-4 md:p-6">
        <h2 className="text-2xl md:text-[32px] font-bold text-[#2f2f68] mb-2 md:mb-4 text-center">Resources</h2>
        {resources.map((resource) => (
          <div key={resource.id} className="bg-white p-3 md:p-4 border border-solid text-gray-600 text-lg border-[#2f2f68] mb-2 md:mb-4">
            {resource.description}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainContent; 