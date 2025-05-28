import React from "react";

const steps = [
  {
    title: "Create Account",
    description: "Sign up with your Email or Login to join",
    step: "Step 1",
  },
  {
    title: "Select your Grade",
    description: "Choose your Current grade level to get access to Relevant content",
    step: "Step 2",
  },
  {
    title: "Generate Tests",
    description: "Create Custom tests based on Subjects and Topics you need",
    step: "Step 3",
  },
  {
    title: "Track and Improve",
    description: "Review your results and focus on improving weak areas",
    step: "Step 4",
  },
];

const Steps = () => {
  return (
    <>
      {/* Large Screen Layout */}
      <div className="hidden min-[1186px]:block w-full">
        <div className="relative w-full max-w-[1438px] mx-auto" style={{ height: 'calc(100vw * 0.63)' }}>
          <div className="absolute w-[1186px] h-[714px] top-[61px] left-1/2 -translate-x-1/2">
            {/* Step 1 */}
            <div className="absolute w-[259px] h-[162px] top-[552px] left-0 bg-[#f0ddff91] rounded-[20px]">
              <p className="absolute w-[232px] top-[70px] left-3.5 font-medium text-[#2f2f68] text-base text-center font-['Inter'] leading-[normal]">
                Sign up with your Email or Login to join
              </p>
              <div className="absolute w-[163px] top-[27px] left-12 font-semibold text-[#001e32] text-xl font-['Inter'] leading-[normal]">
                Create Account
              </div>
            </div>

            {/* Steps 3 & 4 container */}
            <div className="absolute w-[1056px] h-[566px] top-0 left-[130px]">
              <div className="absolute w-[747px] h-[266px] top-0 left-[309px]">
                {/* Step 4 */}
                <div className="absolute w-[259px] h-[162px] top-[104px] left-[488px] bg-[#f0ddff91] rounded-[20px]" />
                <p className="absolute w-[232px] top-[175px] left-[502px] font-medium text-[#2f2f68] text-base text-center font-['Inter'] leading-[normal]">
                  Review your results and focus on improving weak areas
                </p>
                <div className="absolute w-[183px] top-[129px] left-[526px] font-semibold text-[#001e32] text-xl font-['Inter'] leading-[normal]">
                  Track and Improve
                </div>

                {/* Step badges for Step 3 & 4 */}
                <div className="absolute w-[365px] h-[171px] top-[83px] left-[282px]">
                  <div className="w-[54px] h-[21px] top-[150px] bg-[#5e2f7b] rounded-[5px_5px_0px_0px] absolute left-0">
                    <div className="absolute w-[39px] top-[5px] left-2.5 font-semibold text-white text-[11px] font-['Inter'] leading-[normal] whitespace-nowrap">
                      Step 3
                    </div>
                  </div>
                  <div className="absolute w-14 h-[21px] top-0 left-[309px]">
                    <div className="relative w-[54px] h-[21px] bg-[#5e2f7b] rounded-[5px_5px_0px_0px]">
                      <div className="absolute w-[39px] top-[5px] left-2.5 font-semibold text-white text-[11px] font-['Inter'] leading-[normal] whitespace-nowrap">
                        Step 4
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lines */}
                <img
                  className="w-[309px] h-px top-[159px] left-[1px] absolute object-cover"
                  alt="Line"
                  src="https://c.animaapp.com/mb0st1hlJTP0DU/img/line-4.svg"
                />
                <img
                  className="w-px h-[233px] top-0 left-[309px] absolute object-cover"
                  alt="Line"
                  src="https://c.animaapp.com/mb0st1hlJTP0DU/img/line-7.svg"
                />
              </div>

              {/* Step 2 */}
              <div className="absolute w-[310px] h-[372px] top-[159px] left-0">
                <img
                  className="w-[309px] h-0.5 top-[168px] left-0 absolute object-cover"
                  alt="Line"
                  src="https://c.animaapp.com/mb0st1hlJTP0DU/img/line-1.svg"
                />
                <img
                  className="w-[309px] h-px top-[168px] left-0 absolute object-cover"
                  alt="Line"
                  src="https://c.animaapp.com/mb0st1hlJTP0DU/img/line-4.svg"
                />
                <img
                  className="w-px h-[204px] top-[168px] left-0 absolute object-cover"
                  alt="Line"
                  src="https://c.animaapp.com/mb0st1hlJTP0DU/img/line-5.svg"
                />
                <img
                  className="w-px h-56 top-0 left-[309px] absolute object-cover"
                  alt="Line"
                  src="https://c.animaapp.com/mb0st1hlJTP0DU/img/line-6.svg"
                />
              </div>

              {/* Step 2 card */}
              <div className="absolute w-[259px] h-[162px] top-[404px] left-[180px] bg-[#f0ddff91] rounded-[20px]">
                <p className="absolute w-[232px] top-[66px] left-3.5 font-medium text-[#2f2f68] text-base text-center font-['Inter'] leading-[normal]">
                  Choose your Current grade level to get access to Relevant content
                </p>
                <div className="absolute w-[182px] top-[25px] left-[39px] font-semibold text-[#001e32] text-xl font-['Inter'] leading-[normal]">
                  Select your Grade
                </div>
              </div>

              {/* Step 3 card */}
              <div className="absolute w-[259px] h-[162px] top-[254px] left-[488px] bg-[#f0ddff91] rounded-[20px]">
                <p className="absolute w-[232px] top-[66px] left-3.5 font-medium text-[#2f2f68] text-base text-center font-['Inter'] leading-[normal]">
                  Create Custom tests based on Subjects and Topics you need
                </p>
                <div className="absolute w-[163px] top-[23px] left-12 font-semibold text-[#001e32] text-xl font-['Inter'] leading-[normal]">
                  Generate Tests
                </div>
              </div>

              {/* Step 2 badge */}
              <div className="absolute w-14 h-[21px] top-[383px] left-[282px]">
                <div className="relative w-[54px] h-[21px] bg-[#5e2f7b] rounded-[5px_5px_0px_0px]">
                  <div className="absolute w-[39px] top-[5px] left-2.5 font-semibold text-white text-[11px] font-['Inter'] leading-[normal] whitespace-nowrap">
                    Step 2
                  </div>
                </div>
              </div>

              {/* Vertical line */}
              <img
                className="w-px h-[83px] top-0 left-[927px] absolute object-cover"
                alt="Line"
                src="https://c.animaapp.com/mb0st1hlJTP0DU/img/line-8.svg"
              />
            </div>

            {/* Step 1 badge */}
            <div className="absolute w-14 h-[21px] top-[531px] left-[103px]">
              <div className="relative w-[54px] h-[21px] bg-[#5e2f7b] rounded-[5px_5px_0px_0px]">
                <div className="absolute w-[39px] top-[5px] left-2.5 font-semibold text-white text-[11px] font-['Inter'] leading-[normal] whitespace-nowrap">
                    Step 1
                </div>
              </div>
            </div>
          </div>

          {/* Large screen heading */}
          <div className="absolute w-[529px] top-10 left-[27px] font-bold text-[#2f2f68] text-[64px] font-['Inter'] leading-[normal] whitespace-nowrap">
            Simple Steps&nbsp;&nbsp;to <br />get Started
          </div>

          <img
            className="w-[309px] h-px top-[60px] left-1/2 translate-x-1/2 absolute object-cover"
            alt="Line"
            src="https://c.animaapp.com/mb0st1hlJTP0DU/img/line-4.svg"
          />
        </div>
      </div>

      {/* Small & Medium Screen Layout */}
      <section className="block min-[1186px]:hidden w-full px-4 py-16 md:px-16 bg-white relative">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f2f68] leading-tight">
            Simple Steps to <br className="hidden sm:block" /> get Started
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {steps.map((stepItem, index) => (
            <div
              key={index}
              className="relative bg-[#f0ddff91] rounded-2xl p-6 flex flex-col justify-between min-h-[200px] shadow-md"
            >
              {/* Step badge */}
              <div className="absolute -top-5 left-4 bg-[#5e2f7b] text-white text-xs px-3 py-1 rounded-t-md font-semibold">
                {stepItem.step}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#001e32] mt-6 mb-2">
                {stepItem.title}
              </h3>

              {/* Description */}
              <p className="text-[#2f2f68] text-sm">{stepItem.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Steps;