import React from "react";
import Link from "next/link";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-white text-[#1E293B]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h3 className="text-blue-700 font-bold text-xl mb-2">TESTWALE.AI</h3>
          <p className="text-sm text-gray-600 mb-4 whitespace-nowrap">
            AI-powered exam preparation platform for students from Grade 1 to
            12.
          </p>
          <div className="flex gap-4 text-gray-500">
            <FiFacebook className="hover:text-blue-700 cursor-pointer" />
            <FiInstagram className="hover:text-blue-700 cursor-pointer" />
            <FiTwitter className="hover:text-blue-700 cursor-pointer" />
          </div>
        </div>
        <div className="flex w-auto">
          <div className="ml-auto">
          
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 ">
         
         
             <Link href="/AboutUs">
              <h4 className="font-semibold text-sm mb-2">About Us</h4>
            </Link>
            <Link href="/legal">
              <h4 className="font-semibold text-sm mb-2">LEGAL</h4>
            </Link>
             <h4 className="font-semibold text-sm mb-2">PLATFORM</h4>
             <Link href="/Support">
              <h4 className="font-semibold text-sm mb-2">Support</h4>
            </Link>
             
           
          </div>
        </div>
        </div>

        <hr className="my-8 border-t border-gray-200" />
        <p className="text-center text-xs text-gray-500">
          © 2024 TESTWALE.AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
