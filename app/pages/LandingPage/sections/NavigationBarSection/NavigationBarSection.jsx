import React from "react";
import Link from "next/link";

export const NavigationBarSection = () => {
  // Navigation menu items
  const navItems = [
    { label: "Home", id: "home", href: "/" },
    { label: "DashBoard", id: "dashboard", href: "/dashboard" },
    { label: "About Us", id: "about", href: "/about" },
  ];

  return (
    <div className="py-3 px-4 flex justify-between items-center">
      {/* Brand Logo */}
      <div className="text-3xl font-bold text-[#15609e] font-['Inter',_Helvetica]">
        TESTWALE.AI
      </div>

      {/* Navigation Menu */}
      <div className="bg-[#f0ddff] rounded-[50px] px-4 py-1.5 flex gap-5">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="font-['Inter',_Helvetica] font-semibold text-[#2f2f68] text-lg cursor-pointer hover:text-[#5e2f7c] transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Auth Buttons */}
      <div className="flex gap-2">
        <Link href="/login" className="no-underline">
          <button className="bg-[#001e32] text-white rounded-[50px] px-3 py-1.5 font-['Inter',_Helvetica] font-semibold text-[15px] hover:bg-[#002a45] transition-colors">
            Login
          </button>
        </Link>
        <Link href="/signup" className="no-underline">
          <button className="bg-[#001e32] text-white rounded-[50px] px-3 py-1.5 font-['Inter',_Helvetica] font-semibold text-[15px] hover:bg-[#002a45] transition-colors">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};
