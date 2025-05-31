"use client";
import React, { useState } from "react";

export default function Login() {
  const [userType, setUserType] = useState("student");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          userType,
        }),
      });

      const data = await response.json();

      if (data.success) {
        if (userType === "student") {
          window.location.href = "/dashboard";
        } else {
        window.location.href = "/admin-panel";
      }
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (error) {
      setError("An error occurred during registration");
      console.error("Signup failed:", error);
    } finally {
      setLoading(false);
      // Reset form data manually
      setFormData({
        email: "",
        password: "",
        phone: "",
      });
    }
  };

  return (
    <div className="bg-white min-h-screen flex justify-center items-center w-full overflow-hidden relative">
      <div className="relative py-8 pl-8 max-w-7xl w-full">
        <h1 className="font-bold text-[#15609e] text-2xl md:text-4xl absolute left-5 md:left-[-50px]">
          TESTWALE.AI
        </h1>

        <div className="relative top-[50px] flex justify-start items-center min-h-screen py-8 pl-0 md:pl-4">
          <form
            onSubmit={handleSubmit}
            className="w-[90%] sm:w-[500px] md:w-[600px] bg-[#f0ddff91] rounded-[20px] p-4 md:p-6 z-10 relative ml-0"
          >
            <button
              type="submit"
              disabled={loading}
              className="w-[200px] md:w-[256px] h-[45px] md:h-[55px] bg-[#001e32] rounded-[50px] mt-2.5 ml-2.5 hover:bg-[#001e32] disabled:opacity-50"
            >
              <h2 className="font-semibold text-white text-[22px] md:text-[28px]">
                {loading ? "Logging in..." : "Login"}
              </h2>
            </button>

            {error && (
              <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">
                {error}
              </div>
            )}

            <div className="mt-6 flex flex-col gap-4">
              <div className="w-full">
                <h3 className="font-medium text-[#000000c4] mb-1 text-xl">
                  Enter Email*
                </h3>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full h-[42px] bg-white border border-gray-300 rounded px-4 text-base text-gray-600 placeholder:text-gray-400"
                  placeholder="Write here"
                />
              </div>

              <div className="w-full">
                <h3 className="font-medium text-[#000000c4] mb-1 text-xl">
                  Password*
                </h3>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full h-[42px] bg-white border border-gray-300 rounded px-4 text-base text-gray-600 placeholder:text-gray-400"
                  placeholder="Write here"
                />
              </div>

              <div className="w-full">
                <h3 className="font-medium text-[#000000c4] mb-1 text-xl">
                  Phone*
                </h3>
                <div className="flex items-center bg-white border border-gray-300 rounded">
                  <img
                    src="https://c.animaapp.com/mayx5w53ABHDjN/img/image-50.png"
                    alt="Country flag"
                    className="w-16 h-[33px] px-2"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="flex-1 h-[42px] border-none px-4 text-base text-gray-600 placeholder:text-gray-400"
                    placeholder="Write here"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="w-[25px] h-[25px] rounded accent-[#5e2f7c]"
                />
                <label
                  htmlFor="remember"
                  className="font-medium text-[#2f2f68] text-xl ml-1"
                >
                  Remember me?
                </label>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center w-full cursor">
                <button
                  type="button"
                  className={`w-full cursor-pointer sm:w-[200px] h-[55px] rounded-[30px] border ${
                    userType === "student"
                      ? "bg-[#5e2f7c] text-white border-none"
                      : "bg-white text-[#001e32] border-[#2f2f68] shadow-[0px_0px_4px_#00000040]"
                  }`}
                  onClick={() => {
                    handleUserTypeChange("student");
                  }}
                >
                  <h2 className="font-semibold">Student</h2>
                </button>

                <button
                  type="button"
                  className={`w-full cursor-pointer sm:w-[200px] h-[55px] rounded-[30px] border ${
                    userType === "mentor"
                      ? "bg-[#5e2f7c] text-white border-none"
                      : "bg-white text-[#001e32] border-[#2f2f68] shadow-[0px_0px_4px_#00000040]"
                  }`}
                  onClick={() => {
                    handleUserTypeChange("mentor");
                  }}
                >
                  <h2 className="font-semibold">Mentor</h2>
                </button>
              </div>

              <div className="text-center mt-4">
                <p className="text-[#000000c4] font-light text-xl">
                  Don't have an Account?{" "}
                  <a
                    href="signup"
                    className="text-black font-light hover:underline"
                  >
                    Sign up
                  </a>
                </p>
              </div>

              <div className="text-center">
                <a
                  href="/forgot-password"
                  className="text-black font-light text-xl hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
          </form>

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
