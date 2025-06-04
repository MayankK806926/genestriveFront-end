// src/components/support/CommunityCard.jsx
import React from 'react';

const CommunityCard = ({ children }) => {
  return (
    <div className="relative bg-white rounded-xl w-[200px] h-[280px] mx-auto flex flex-col items-center justify-start shadow-md">
      {/* Top center circle */}
      <div className="w-16 h-16 bg-[#D9D9D9] rounded-full absolute top-5 left-1/2 transform -translate-x-1/2 "></div>

      {/* Optional content slot */}
      <div className="mt-12 text-center">
        {children}
      </div>
    </div>
  );
};

export default CommunityCard;
