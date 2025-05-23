import React from "react";

// Step data for mapping
const steps = [
  {
    id: 1,
    title: "Create Account",
    description: "Sign up with your Email or Login to join",
  },
  {
    id: 2,
    title: "Select your Grade",
    description:
      "Choose your Current grade level to get access to Relevant content",
  },
  {
    id: 3,
    title: "Generate Tests",
    description: "Create Custom tests based on Subjects and Topics you need",
  },
  {
    id: 4,
    title: "Track and Improve",
    description: "Review your results and focus on improving weak areas",
  },
];

export const SimpleStepsSection = () => {
  // Approximate card dimensions and spacing for layout calculations
  const cardWidth = 259; // Based on image proportions
  const cardHeight = 180; // Estimate based on content and padding
  const horizontalOffset = 280; // Horizontal distance between the vertical centerlines of adjacent cards
  const verticalOffset = 150; // Vertical distance between the bottom edges of adjacent cards
  const lineWidth = 1; // Thickness of the connecting lines

  // Calculate step box positions relative to the container's bottom-left for line positioning
  const stepPositions = steps.map((step, index) => ({
    left: index === 0 ? `calc(50% - ${horizontalOffset * 1.5}px - ${cardWidth/2}px)`
          : index === 1 ? `calc(50% - ${horizontalOffset * 0.5}px - ${cardWidth/2}px)`
          : index === 2 ? `calc(50% + ${horizontalOffset * 0.5}px - ${cardWidth/2}px)`
          : `calc(50% + ${horizontalOffset * 1.5}px - ${cardWidth/2}px)`,
    bottom: `${index * verticalOffset}px`,
    centerHorizontal: index === 0 ? `calc(50% - ${horizontalOffset * 1.5}px)`
                      : index === 1 ? `calc(50% - ${horizontalOffset * 0.5}px)`
                      : index === 2 ? `calc(50% + ${horizontalOffset * 0.5}px)`
                      : `calc(50% + ${horizontalOffset * 1.5}px)`,
    centerVertical: `calc(${index * verticalOffset}px + ${cardHeight/2}px)`,
    top: `calc(${index * verticalOffset}px + ${cardHeight}px)`,
    right: index === 0 ? `calc(50% - ${horizontalOffset * 1.5}px + ${cardWidth/2}px)`
           : index === 1 ? `calc(50% - ${horizontalOffset * 0.5}px + ${cardWidth/2}px)`
           : index === 2 ? `calc(50% + ${horizontalOffset * 0.5}px + ${cardWidth/2}px)`
           : `calc(50% + ${horizontalOffset * 1.5}px + ${cardWidth/2}px)`,
  }));

  return (
    <div className="w-full py-8 relative overflow-hidden">
      <h2 className="font-bold text-[#2f2f68] text-[36px] md:text-[64px] mb-6 text-center">
        Simple Steps&nbsp;&nbsp;to get Started
      </h2>

      <div className="flex justify-center w-full relative mt-4 h-[700px]">
        {/* Step cards with absolute positioning */}
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="absolute z-[1]"
            style={{
              width: `${cardWidth}px`,
              height: `${cardHeight}px`,
              left: stepPositions[index].left,
              bottom: stepPositions[index].bottom,
            }}
          >
            <div className="bg-[#f0ddff91] rounded-[20px] p-3 h-full flex flex-col items-center text-center justify-center relative">
              <div className="absolute -top-[10px] left-5 bg-[#5e2f7b] rounded-t-[5px] px-[6px] py-[2px]">
                <span className="text-white font-semibold text-[11px]">
                  Step {step.id}
                </span>
              </div>

              <h3 className="font-semibold text-[#001e32] mb-1 mt-3">
                {step.title}
              </h3>

              <p className="font-medium text-[#2f2f68] text-sm">
                {step.description}
              </p>
            </div>
          </div>
        ))}

        {/* Connector lines - aligned with the boxes */}
        {/* Line from Step 1 to Step 2 */}
        {/* Vertical segment from Step 1 */}
        <div
          className="absolute bg-[#5e2f7b] opacity-50 z-0"
          style={{
            left: stepPositions[0].centerHorizontal,
            bottom: stepPositions[0].top,
            width: `${lineWidth}px`,
            height: `calc(${stepPositions[1].centerVertical} - ${stepPositions[0].top})`,
          }}
        />
        {/* Horizontal segment to Step 2 */}
        <div
          className="absolute bg-[#5e2f7b] opacity-50 z-0"
          style={{
            left: stepPositions[0].centerHorizontal,
            bottom: `calc(${stepPositions[1].centerVertical} - ${lineWidth/2}px)`,
            width: `calc(${stepPositions[1].left} - ${stepPositions[0].centerHorizontal})`,
            height: `${lineWidth}px`,
          }}
        />

        {/* Line from Step 2 to Step 3 */}
        {/* Vertical segment from Step 2 */}
        <div
          className="absolute bg-[#5e2f7b] opacity-50 z-0"
          style={{
            left: stepPositions[1].centerHorizontal,
            bottom: stepPositions[1].top,
            width: `${lineWidth}px`,
            height: `calc(${stepPositions[2].centerVertical} - ${stepPositions[1].top})`,
          }}
        />
        {/* Horizontal segment to Step 3 */}
        <div
          className="absolute bg-[#5e2f7b] opacity-50 z-0"
          style={{
            left: stepPositions[1].centerHorizontal,
            bottom: `calc(${stepPositions[2].centerVertical} - ${lineWidth/2}px)`,
            width: `calc(${stepPositions[2].left} - ${stepPositions[1].centerHorizontal})`,
            height: `${lineWidth}px`,
          }}
        />

        {/* Line from Step 3 to Step 4 */}
        {/* Vertical segment from Step 3 */}
        <div
          className="absolute bg-[#5e2f7b] opacity-50 z-0"
          style={{
            left: stepPositions[2].centerHorizontal,
            bottom: stepPositions[2].top,
            width: `${lineWidth}px`,
            height: `calc(${stepPositions[3].centerVertical} - ${stepPositions[2].top})`,
          }}
        />
        {/* Horizontal segment to Step 4 */}
        <div
          className="absolute bg-[#5e2f7b] opacity-50 z-0"
          style={{
            left: stepPositions[2].centerHorizontal,
            bottom: `calc(${stepPositions[3].centerVertical} - ${lineWidth/2}px)`,
            width: `calc(${stepPositions[3].left} - ${stepPositions[2].centerHorizontal})`,
            height: `${lineWidth}px`,
          }}
        />
      </div>
    </div>
  );
};
