"use client";
import React, { useState } from "react";

export default function TwoFactorLogin() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/two-factor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ OTP: e.target.value }),
      });

      const data = await response.json();

      if (data.success) {
        window.location.href = "/login"; // missing for now, /login to be replaced
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (error) {
      setError("An error occurred during registration");
      console.error("Signup failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen flex justify-center items-center w-full overflow-hidden relative">
      <div className="relative py-8 pl-8 max-w-7xl w-full">
        <h1 className="font-bold text-[#15609e] text-2xl md:text-4xl absolute left-5 md:left-[-50px]">
          TESTWALE.AI
        </h1>

        <div className="relative top-[50px] flex justify-start items-center min-h-screen py-8 pl-0 md:pl-4">
          <div className="w-[90%] sm:w-[500px] md:w-[600px] bg-[#f0ddff91] rounded-[20px] p-4 md:p-6 z-10 relative ml-0">
            <button className="w-[200px] md:w-[256px] h-[45px] md:h-[55px] bg-[#001e32] rounded-[50px] mt-2.5 ml-2.5 hover:bg-[#001e32]">
              <h2 className="font-semibold text-white text-[22px] md:text-[28px]">
                Login
              </h2>
            </button>

            <div className="mt-6 flex flex-col gap-4">
              <div className="w-full">
                <h3 className="font-medium text-[#000000c4] mb-1 text-xl">
                  Enter OTP*
                </h3>
                <input
                  type="email"
                  className="w-full h-[42px] bg-white border border-gray-300 rounded px-4 text-base placeholder:text-gray-600"
                  placeholder="Write here"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center w-full">
                <button
                  className="w-full sm:w-[200px] h-[55px] rounded-[30px] border bg-[#5e2f7c] text-white border-none"
                  onClick={handleSubmit}
                >
                  <h2 className="font-semibold">Submit</h2>
                </button>
              </div>
            </div>
          </div>

          <img
            src="https://c.animaapp.com/mayx5w53ABHDjN/img/smiling-young-woman-with-books-backpack-standing-white-backgroun.png"
            alt="Smiling young woman"
            className="hidden md:block absolute w-[1100px] h-[800px] -right-[230px] top-[62%] -translate-y-1/2 object-contain z-0 opacity-80"
          />
        </div>
      </div>
    </div>
  );
}
