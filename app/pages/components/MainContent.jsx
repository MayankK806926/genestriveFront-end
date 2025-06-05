import Link from 'next/link';
import React from 'react';

const MainContent = ({
  name,
  totalTestsTaken,
  AverageAccuracy,
  WeakTopics,
  Progress,
  recentActivities,
  topicsToFocus,
  resources
}) => {
  return (
    <section className="mt-4 flex-grow p-2 md:p-4 overflow-y-auto">
      <div className="bg-[#f7ecff] rounded-[10px] px-3 py-4 md:px-4 md:py-6 mb-3 md:mb-4 flex justify-between items-center">
        {/* Left Side: Greeting */}
        <div>
          <h1 className="text-lg md:text-2xl font-bold text-[#2f2f68] mb-1 md:mb-2">Hi, {name}</h1>
          <p className="text-xs md:text-base text-[#2f2f68]">
            Generate personalized tests and improve your weak points
          </p>
        </div>

        {/* Right Side: Profile Picture Placeholder */}
        <div className="hidden md:block w-24 aspect-square bg-[#D9D9D9] rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mb-3 md:mb-4">
        {[
          { title: "Total Tests Taken", value: totalTestsTaken || 0 },
          { title: "Average Accuracy", value: AverageAccuracy || "0%" },
          { title: "Weak Topics", value: WeakTopics || 0 },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#5e2f7c] text-white p-3 md:p-4 rounded-[10px] flex flex-col items-center justify-center space-y-1 md:space-y-2 text-center"
          >
            <h3 className="text-xs sm:text-sm md:text-base font-semibold">
              {item.title}
            </h3>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-between bg-[#f7ecff] rounded-[10px] p-3 md:p-4 mb-3 md:mb-4">
        <h2 className="text-lg md:text-2xl font-bold text-[#2f2f68] mb-1 md:mb-2">AI Test Generator</h2>
        <Link
          href="/dashboard/generate-test"
          className="bg-[#001e32] text-white text-base md:text-xl px-3 md:px-4 py-1.5 md:py-2 rounded-[10px]"
        >
          Generate Test
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 mb-3 md:mb-4">
        <div className="bg-[#f7ecff] rounded-[10px] p-3 md:p-4">
          <h2 className="text-lg md:text-2xl font-bold text-[#2f2f68] mb-1 md:mb-2 text-center">
            Recent Activities
          </h2>
          {recentActivities &&
            recentActivities.map((activity, index) => (
              <div key={index} className="bg-white p-2 md:p-3 rounded-lg mb-2">
                <h3 className="font-semibold text-[#2f2f68] text-sm">
                  {activity.title}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="bg-[#05ff6f82] text-[#2f2f68] text-xs px-2 py-0.5 rounded">
                    Score - {activity.score}
                  </span>
                  <span className="text-[#2f2f68] text-xs">{activity.date}</span>
                </div>
              </div>
            ))}
        </div>

        <div className="bg-[#f7ecff] rounded-[10px] p-3 md:p-4">
          <h2 className="text-lg md:text-2xl font-bold text-[#2f2f68] mb-1 md:mb-2 text-center">
            Your Progress
          </h2>
          {Progress &&
            typeof Progress === 'object' &&
            Object.keys(Progress).map((topic, index) => (
              <div key={index} className="mb-2">
                <h3 className="font-semibold text-[#2f2f68] text-sm mb-1">
                  {topic}
                </h3>
                <div className="w-full bg-[#d9d9d9] rounded-full h-2">
                  <div
                    className="bg-[#5e2f7c] h-2 rounded-full"
                    style={{ width: `${Progress[topic]}%` }}
                  ></div>
                </div>
                <div className="text-right text-xs text-[#2f2f68]">
                  {Progress[topic]}% Accuracy
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="bg-[#f7ecff] rounded-[10px] p-3 md:p-4 mb-3 md:mb-4">
        <h2 className="text-lg md:text-2xl font-bold text-[#2f2f68] mb-1 md:mb-2 text-center">
          Topics to Focus on
        </h2>
        {topicsToFocus.map((topic, index) => (
          <div key={index} className="bg-white p-2 md:p-3 rounded-lg mb-2">
            <h3 className="font-semibold text-[#2f2f68] text-sm">
              {topic.title}
            </h3>
            <div className="w-full bg-[#d9d9d9] rounded-full h-2 mt-1">
              <div
                className="bg-[#5e2f7c] h-2 rounded-full"
                style={{ width: `${topic.progress}%` }}
              ></div>
            </div>
            <div className="text-right text-xs text-[#2f2f68]">
              {topic.accuracy} Accuracy
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#f7ecff] rounded-[10px] p-3 md:p-4">
        <h2 className="text-lg md:text-2xl font-bold text-[#2f2f68] mb-1 md:mb-2 text-center">
          Resources
        </h2>
        {resources.map((resource) => (
          <div
            key={resource.id}
            className="bg-white p-2 md:p-3 border border-solid text-gray-600 text-sm md:text-base border-[#2f2f68] mb-2"
          >
            {resource.description}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainContent;
