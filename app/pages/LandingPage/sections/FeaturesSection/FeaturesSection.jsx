import React from "react";

export const FeaturesSection = () => {
  // Feature data for mapping
  const features = [
    {
      id: 1,
      title: "AI Test Generator",
      description:
        "AI - powered exam generator tailored for students from Grade 1 to 12 . Practice tests customized to your learning needs and track your progress.",
      icon: "https://c.animaapp.com/mayyh5h2tfkjUe/img/siicon-1.png",
      iconAlt: "AI Test Generator Icon",
    },
    {
      id: 2,
      title: "Track Progress",
      description:
        "AI - powered exam generator tailored for students from Grade 1 to 12 . Practice tests customized to your learning needs and track your progress.",
      icon: "https://c.animaapp.com/mayyh5h2tfkjUe/img/progress-icon-1.png",
      iconAlt: "Progress Icon",
    },
    {
      id: 3,
      title: "Study Material",
      description:
        "AI - powered exam generator tailored for students from Grade 1 to 12 . Practice tests customized to your learning needs and track your progress.",
      icon: "https://c.animaapp.com/mayyh5h2tfkjUe/img/bookicon-1.png",
      iconAlt: "Book Icon",
    },
  ];

  return (
    <section className="w-full h-[502px] bg-[rgba(240,221,255,0.57)] relative py-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-bold text-4xl text-[#2f2f68] mb-4">
            Everything you need to Excel
          </h2>
          <p className="font-medium text-xl text-[#2f2f68] max-w-[745px] mx-auto leading-[30px]">
            Our AI-powered tools adapt to your Learning style and help you
            master any subject
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {features.map((feature) => (
            <div key={feature.id} className="relative h-[140px]">
              <div className="flex items-start">
                <div className="mr-2">
                  <img
                    src={feature.icon}
                    alt={feature.iconAlt}
                    className={`object-cover ${
                      feature.id === 1 ? "w-24 h-24" : "w-[86px] h-[86px]"
                    }`}
                  />
                </div>
                <div className="mt-6">
                  <h3 className="font-semibold text-xl text-[#001e32] mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-medium text-base text-[#2f2f68] max-w-[232px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
