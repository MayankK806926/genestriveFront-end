import React from "react";

const Testimonials = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-[1139px] mx-auto">
        {/* Testimonials Section */}
        <div className="w-full">
          <div className="text-center font-bold text-[#2f2f68] text-3xl sm:text-4xl lg:text-5xl mb-12">
            Words from our Students
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {/* Card 1 */}
            <div className="w-full max-w-[259px] min-h-[343px] bg-white rounded-[20px] border border-solid border-[#5e2f7c] relative">
              <div className="absolute w-[90px] h-[90px] top-[34px] left-1/2 -translate-x-1/2 bg-[#d9d9d9] rounded-[45px]" />
            </div>

            {/* Card 2 */}
            <div className="w-full max-w-[259px] min-h-[343px] bg-white rounded-[20px] border border-solid border-[#5e2f7c] relative">
              <div className="absolute w-[90px] h-[90px] top-[34px] left-1/2 -translate-x-1/2 bg-[#d9d9d9] rounded-[45px]" />
            </div>

            {/* Card 3 */}
            <div className="w-full max-w-[259px] min-h-[343px] bg-white rounded-[20px] border border-solid border-[#5e2f7c] relative md:col-span-2 lg:col-span-1 md:max-w-[259px] md:mx-auto">
              <div className="absolute w-[90px] h-[90px] top-[34px] left-1/2 -translate-x-1/2 bg-[#d9d9d9] rounded-[45px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 