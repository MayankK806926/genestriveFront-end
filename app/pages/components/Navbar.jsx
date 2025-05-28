import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 bg-white relative top-8 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-[#15609e] text-2xl md:text-3xl lg:text-[2.3rem] font-bold">
          TESTWALE.AI
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center bg-[#f0ddff] px-10 py-3 rounded-full gap-20 text-[#2f2f68] font-semibold text-lg">
          <a href="/" className="hover:text-[#15609e]">Home</a>
          <a href="#" className="hover:text-[#15609e]">DashBoard</a>
          <a href="#" className="hover:text-[#15609e]">About Us</a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-4">
          <button className="bg-[#001e32] text-white px-10 py-4 rounded-full font-semibold text-sm">
            Login
          </button>
          <button className="bg-[#001e32] text-white px-8 py-4 rounded-full font-semibold text-sm">
            Sign Up
          </button>
        </div>

        {/* Tablet Navigation */}
        <div className="hidden md:flex lg:hidden items-center gap-4">
          <div className="bg-[#f0ddff] px-11 py-2 rounded-full text-[#2f2f68] font-semibold text-base flex gap-6">
            <a href="/" className="hover:text-[#15609e]">Home</a>
            <a href="#" className="hover:text-[#15609e]">DashBoard</a>
            <a href="#" className="hover:text-[#15609e]">About Us</a>
          </div>
        </div>

        {/* Tablet Buttons */}
        <div className="hidden md:flex lg:hidden gap-2">
          <button className="bg-[#001e32] text-white px-4 py-2 rounded-full font-semibold text-sm">
            Login
          </button>
          <button className="bg-[#001e32] text-white px-3 py-2 rounded-full font-semibold text-sm">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? "✖️" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center gap-4">
          {/* Pink box container for links */}
          <div className="bg-[#f0ddff] w-full rounded-2xl py-3 flex flex-col items-center gap-3">
            <a href="#" className="text-[#2f2f68] font-semibold text-lg">Home</a>
            <a href="#" className="text-[#2f2f68] font-semibold text-lg">DashBoard</a>
            <a href="#" className="text-[#2f2f68] font-semibold text-lg">About Us</a>
          </div>
          <button className="w-4/5 bg-[#001e32] text-white py-2 rounded-full font-semibold text-sm">
            Login
          </button>
          <button className="w-4/5 bg-[#001e32] text-white py-2 rounded-full font-semibold text-sm">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 