"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-4 py-3 bg-white relative top-4 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href='/' className="text-[#15609e] text-xl md:text-2xl font-bold">
          TESTWALE.AI
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center bg-[#f0ddff] px-6 py-2 rounded-full gap-8 text-[#2f2f68] font-semibold text-sm">
          <Link href="/" className="hover:text-[#15609e]">Home</Link>
          <Link href="/dashboard" className="hover:text-[#15609e]">Dashboard</Link>
          <Link href="/AboutUs" className="hover:text-[#15609e]">About Us</Link>
        </div>

        {/* Profile Pic */}
        <div className="hidden lg:flex ml-16">
          <div className="bg-[#D9D9D9] rounded-full w-14 h-14"></div>
        </div>

        {/* Tablet Navigation */}
        <div className="hidden md:flex lg:hidden items-center gap-3">
          <div className="bg-[#f0ddff] px-6 py-2 rounded-full text-[#2f2f68] font-semibold text-sm flex gap-4">
            <Link href="/" className="hover:text-[#15609e]">Home</Link>
            <Link href="/dashboard" className="hover:text-[#15609e]">Dashboard</Link>
            <Link href="/AboutUs" className="hover:text-[#15609e]">About Us</Link>
          </div>
        </div>

        {/* Tablet Profile Pic */}
        <div className="hidden md:flex lg:hidden ml-8">
          <div className="bg-[#D9D9D9] rounded-full w-10 h-10"></div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-xl">
            {isOpen ? "✖️" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col items-center gap-2">
          <div className="bg-[#f0ddff] w-full rounded-2xl py-2 flex flex-col items-center gap-2">
            <Link href="/" className="text-[#2f2f68] font-semibold text-sm">Home</Link>
            <Link href="/dashboard" className="text-[#2f2f68] font-semibold text-sm">Dashboard</Link>
            <Link href="/AboutUs" className="text-[#2f2f68] font-semibold text-sm">About Us</Link>
          </div>
          <button className="w-4/5 bg-[#001e32] text-white py-1 rounded-full font-semibold text-xs">
            Log Out
          </button>
          <button className="w-4/5 bg-[#001e32] text-white py-1 rounded-full font-semibold text-xs">
            Help
          </button>
          <button className="w-4/5 bg-[#001e32] text-white py-1 rounded-full font-semibold text-xs">
            Settings
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;
