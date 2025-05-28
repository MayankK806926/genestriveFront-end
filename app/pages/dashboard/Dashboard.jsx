import React, { useState } from "react";

// Custom Badge Component
export function Badge({ className = "", children }) {
  return (
    <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${className}`}>
      {children}
    </span>
  );
}

// Custom Card Components
export function Card({ className = "", children }) {
  return (
    <div className={`bg-white rounded shadow ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ className = "", children }) {
  return (
    <div className={`border-b px-4 py-2 ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ className = "", children }) {
  return (
    <h3 className={`font-bold text-lg ${className}`}>{children}</h3>
  );
}

export function CardContent({ className = "", children }) {
  return (
    <div className={`p-4 ${className}`}>{children}</div>
  );
}

// Custom Button Component
export function Button({ className = "", children, ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded font-semibold transition-colors bg-blue-700 text-white hover:bg-blue-800 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

// Custom Avatar Component
export function Avatar({ className = "" }) {
  return (
    <div className={`rounded-full bg-gray-300 ${className}`}></div>
  );
}

// Custom Progress Component
export function Progress({ value, className = "" }) {
  return (
    <div className={`w-full bg-gray-200 rounded h-2 ${className}`}>
      <div className="bg-purple-700 h-2 rounded" style={{ width: `${value}%` }}></div>
    </div>
  );
}

// Custom Select Component
export function Select({ children, value, onChange, className = "" }) {
  return (
    <select
      className={`px-2 py-1 rounded bg-white text-[#2f2f68] [font-family:'Inter',Helvetica] font-medium text-xl ${className}`}
      value={value}
      onChange={onChange}
    >
      {children}
    </select>
  );
}

// Custom SelectTrigger and SelectValue are not needed for a basic select, the select element handles this.
// The placeholder can be an initial <option value="">...</option>

function Dashboard(){
  // Data for recent activities
  const recentActivities = [
    {
      id: 1,
      title: "Complete Mathematics",
      score: "20/20",
      date: "12 May, 12:00",
    },
    {
      id: 2,
      title: "Complete Mathematics",
      score: "20/20",
      date: "12 May, 12:00",
    },
    {
      id: 3,
      title: "Complete Mathematics",
      score: "20/20",
      date: "12 May, 12:00",
    },
    {
      id: 4,
      title: "Complete Mathematics",
      score: "20/20",
      date: "12 May, 12:00",
    },
  ];

  // Data for topics to focus on
  const topicsToFocus = [
    {
      id: 1,
      title: "Quadratic Equation",
      accuracy: "50%",
      progress: 50,
      subject: "Mathematics",
    },
    {
      id: 2,
      title: "Quadratic Equation",
      accuracy: "50%",
      progress: 50,
      subject: "Mathematics",
    },
    {
      id: 3,
      title: "Quadratic Equation",
      accuracy: "50%",
      progress: 50,
      subject: "Mathematics",
    },
  ];

  // Data for resources
  const resources = [1, 2, 3, 4, 5, 6];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1440px] relative">
        {/* Header */}
        <header className="flex justify-between items-center px-[60px] py-[55px]">
          <div className="[font-family:'Inter',Helvetica] font-bold text-[#15609e] text-[40px]">
            TESTWALE.AI
          </div>
          <nav className="bg-[#f0ddff] rounded-[50px] h-[52px] flex items-center px-8">
            <ul className="flex space-x-10">
              <li className="[font-family:'Inter',Helvetica] font-semibold text-[#2f2f68] text-lg">
                Home
              </li>
              <li className="[font-family:'Inter',Helvetica] font-semibold text-[#2f2f68] text-lg">
                DashBoard
              </li>
              <li className="[font-family:'Inter',Helvetica] font-semibold text-[#2f2f68] text-lg">
                About Us
              </li>
            </ul>
          </nav>
        </header>

        <div className="flex h-[2406px]">
          {/* Sidebar */}
          <aside className="w-[300px] bg-[#001e32] text-white flex flex-col">
            <div className="px-6 py-16">
              <h2 className="[font-family:'Inter',Helvetica] font-bold text-white text-[18px] mb-4">
                GRADE
              </h2>
              <select className="w-[150px] h-[35px] bg-white text-[#2f2f68] [font-family:'Inter',Helvetica] font-medium text-xl">
                <option value="">select grade</option>
                {/* Add other grade options here */}
              </select>

              <h2 className="[font-family:'Inter',Helvetica] font-bold text-white text-[18px] mt-16 mb-4">
                Competetive exams
              </h2>
              <select className="w-[150px] h-[35px] bg-white text-[#2f2f68] [font-family:'Inter',Helvetica] font-medium text-xl">
                <option value="">Exams</option>
                {/* Add other exam options here */}
              </select>
            </div>

            <div className="mt-auto border-t border-white p-4 flex justify-center">
              <img
                className="w-[259px] h-[174px] object-cover"
                alt="Image"
                src="https://c.animaapp.com/mb5dlfq96PJ4GF/img/image-52.png"
              />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 bg-white border border-solid border-[#d9d9d9]">
            {/* Welcome Section */}
            <section className="mx-[35px] mt-[20px]">
              <div className="bg-[#f7ecff] rounded-[15px] p-6 flex">
                <div className="flex-1">
                  <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#2f2f68] text-[28px] mb-2">
                    Hi, {"{name}"}
                  </h2>
                  <p className="[font-family:'Inter',Helvetica] font-medium text-[#2f2f68] text-xl leading-[30px]">
                    Generate personalized tests and improve your weak points
                  </p>
                </div>
                <Avatar className="w-[170px] h-[170px] rounded-[85px]" />
              </div>

              {/* Stats Cards */}
              <div className="flex justify-between mt-[20px]">
                {[
                  { title: "Total Tests Taken", value: "25" },
                  { title: "Average Accuracy", value: "25" },
                  { title: "Weak Topics", value: "25" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="w-[200px] h-[120px] bg-[#5e2f7c] rounded-[15px] text-white flex flex-col items-center justify-center p-4"
                  >
                    <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-xl mb-2">
                      {stat.title}
                    </h3>
                    <p className="[font-family:'Inter',Helvetica] font-semibold text-white text-[40px]">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* AI Test Generator */}
              <div className="bg-[#f7ecff] rounded-[15px] mt-[30px] p-6 flex justify-between items-center">
                <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#2f2f68] text-[28px]">
                  AI Test Generator
                </h2>
                <button className="bg-[#001e32] h-[72px] w-[302px] rounded-none [font-family:'Inter',Helvetica] font-semibold text-white text-[32px]">
                  Generate Test
                </button>
              </div>

              {/* Recent Activities and Progress */}
              <div className="flex gap-[40px] mt-[20px]">
                {/* Recent Activities */}
                <div className="flex-1 bg-[#f7ecff] rounded-[15px]">
                  <div className="border-b px-4 py-2">
                    <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#2f2f68] text-[32px]">
                      Recent Activities
                    </h3>
                  </div>
                  <div className="p-3 space-y-3">
                    {recentActivities.map((activity) => (
                      <div
                        key={activity.id}
                        className="bg-white border-[0.75px] border-solid border-[#5e2f7c] h-[60px] p-2 flex justify-between items-center"
                      >
                        <div>
                          <p className="[font-family:'Inter',Helvetica] font-normal text-[#2f2f68] text-sm">
                            {activity.title}
                          </p>
                          <span className="inline-block px-2 py-1 text-xs font-semibold bg-[#05ff6f82] text-[#2f2f68] text-[10px] rounded-none">
                            Score - {activity.score}
                          </span>
                        </div>
                        <div className="flex flex-col items-end">
                          <img
                            className="w-[57px] h-[45px] object-cover"
                            alt="Image"
                            src="https://c.animaapp.com/mb5dlfq96PJ4GF/img/image-55.png"
                          />
                          <p className="[font-family:'Inter',Helvetica] font-normal text-[#2f2f68] text-[10px]">
                            {activity.date}
                          </p>
                        </div>
                      </div>
                    ))}
                    <div className="flex justify-center">
                      <button
                        className="px-4 py-2 rounded font-semibold transition-colors bg-[#001e32] text-white text-sm h-[29px] w-[68px] hover:bg-blue-800"
                      >
                        More
                      </button>
                    </div>
                  </div>
                </div>

                {/* Your Progress */}
                <div className="flex-1 bg-[#f7ecff] rounded-[15px]">
                  <div className="border-b px-4 py-2">
                    <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#2f2f68] text-[32px]">
                      Your Progress
                    </h3>
                  </div>
                  <div className="p-4">
                    <div className="bg-white border-[0.75px] border-solid border-[#5e2f7c] h-[336px]">
                      {/* Progress chart would go here */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Topics to Focus on */}
              <div className="bg-[#f7ecff] rounded-[15px] mt-[20px]">
                <div className="border-b px-4 py-2 flex justify-center">
                  <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#2f2f68] text-[32px]">
                    Topics to Focus on
                  </h3>
                </div>
                <div className="p-5 space-y-3">
                  {topicsToFocus.map((topic, index) => (
                    <div
                      key={index}
                      className="bg-white border-[0.75px] border-solid border-[#5e2f7c] h-[70px] p-4"
                    >
                      <div className="flex justify-between items-start">
                        <p className="[font-family:'Inter',Helvetica] font-normal text-[#2f2f68] text-sm">
                          {topic.title}
                        </p>
                        <span className="inline-block px-2 py-1 text-xs font-normal bg-[#5e2f7c] text-white rounded-none">
                          {topic.subject}
                        </span>
                      </div>
                      <div className="flex items-center mt-4">
                        <div className="flex-1 mr-4">
                          <div className="w-full h-[7px] bg-[#d9d9d9] rounded-[15px]">
                            <div className="bg-purple-700 h-2 rounded" style={{ width: `${topic.progress}%` }}></div>
                          </div>
                        </div>
                        <span className="[font-family:'Inter',Helvetica] font-normal text-[#2f2f68] text-xs">
                          {topic.accuracy} Accuracy
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resources */}
              <div className="bg-[#f7ecff] rounded-[15px] mt-[20px]">
                <div className="border-b px-4 py-2 flex justify-center">
                  <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#2f2f68] text-[32px]">
                    Resources
                  </h3>
                </div>
                <div className="p-5 space-y-3">
                  {resources.map((resource) => (
                    <div
                      key={resource}
                      className="bg-white border-[0.75px] border-solid border-[#5e2f7c] h-[35px]"
                    ></div>
                  ))}
                </div>
              </div>
            </section>
          </main>
        </div>

        {/* Footer */}
        <footer className="mt-8">
          <img
            className="w-full h-[758px] object-cover"
            alt="Footer"
            src="https://c.animaapp.com/mb5dlfq96PJ4GF/img/footer.png"
          />
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
