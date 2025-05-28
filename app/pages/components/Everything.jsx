import React from "react";

const features = [
  {
    icon: "https://c.animaapp.com/mb0st1hlJTP0DU/img/siicon-1.png",
    title: "AI Test Generator",
    description:
      "AI-powered exam generator tailored for students from Grade 1 to 12. Practice tests customized to your learning needs and track your progress.",
  },
  {
    icon: "https://c.animaapp.com/mb0st1hlJTP0DU/img/progress-icon-1.png",
    title: "Track Progress",
    description:
      "Monitor your learning journey with real-time progress tracking and personalized insights to improve your performance.",
  },
  {
    icon: "https://c.animaapp.com/mb0st1hlJTP0DU/img/bookicon-1.png",
    title: "Study Material",
    description:
      "Access curated study material and AI-recommended resources to strengthen your understanding and preparation.",
  },
];

const Everything = () => {
  return (
    <section className="w-full bg-[#f0ddff91] py-16 px-4 sm:px-6 lg:px-16 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2f2f68] mb-4">
        Everything you need to Excel
      </h2>
      <p className="text-lg md:text-xl text-[#2f2f68] max-w-3xl mx-auto mb-12 leading-relaxed">
        Our AI-powered tools adapt to your learning style and help you master any subject.
      </p>

      <div className="flex flex-col md:flex-row gap-12 justify-center items-start max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-left max-w-sm mx-auto">
            <img src={feature.icon} alt={`${feature.title} Icon`} className="w-20 h-20 mb-4" />
            <h3 className="text-xl font-semibold text-[#001e32] mb-2">{feature.title}</h3>
            <p className="text-base font-medium text-[#2f2f68] text-center md:text-left">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Everything; 