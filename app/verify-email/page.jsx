"use client";

import { useEffect, useRef } from "react";
import { auth } from "../pages/authentication/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import nookies from "nookies";


export default function VerifyEmail() {
  const router = useRouter();
  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(async () => {
      // If not verified in 30s, delete user and redirect
      if (auth.currentUser && !auth.currentUser.emailVerified) {
        try {
          await auth.currentUser.delete();
        } catch (e) {
          // ignore
        }
      }
      router.replace("/signup");
    }, 60000);

    // Poll for email verification every 3s
    intervalRef.current = setInterval(() => {
      onAuthStateChanged(auth, async (user) => {
        await user?.reload();
        if (user && user.emailVerified) {
          clearTimeout(timeoutRef.current);
          clearInterval(intervalRef.current);

          // Set session cookie
          const token = await user.getIdToken();
          nookies.set(null, "__session", token, {
            path: "/",
            maxAge: 60 * 60,
            httpOnly: false,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
          });
          // After successful signup and before router.push("/verify-email")
          const name = localStorage.getItem("signup_name") || "";
          const phone = localStorage.getItem("signup_phone") || "";
          const userType = localStorage.getItem("user_role") || "";
          console.log("1")
          // Store user details in backend
          const response = await fetch("http://localhost:8000/register_user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              Password_hash: user.uid,
              EMAIL: user.email,
              User_name: name,
              Phone_number: phone,
              Role: userType,
            }),
          });
          console.log("Response:", response);

          console.log("2")
          localStorage.removeItem("signup_name");
          localStorage.removeItem("signup_phone");
          localStorage.removeItem("user_role");
          router.push("/dashboard");
        }
      });
    }, 3000);

    return () => {
      clearTimeout(timeoutRef.current);
      clearInterval(intervalRef.current);
    };
  }, [router]);

  return (
    <main>
      <div className="bg-white min-h-screen flex justify-center items-center w-full overflow-hidden relative">
        <div className="relative py-8 px-8 max-w-7xl w-full">
          <div className="flex justify-start">
            <h1 className="font-bold text-[#15609e] text-2xl md:text-4xl mt-1 ml-4 md:ml-6 mb-6">
              TESTWALE.AI
            </h1>
          </div>

          <div className="relative top-[1px] flex justify-start items-center min-h-screen py-8 pl-0 md:pl-4">
            <div className="w-[90%] sm:w-[500px] md:w-[600px] bg-[#f0ddff91] rounded-[20px] p-4 md:p-6 z-10 relative ml-0">
              <div className="max-w-[90vw] md:w-[256px] h-[45px] md:h-[55px] bg-[#001e32] rounded-[50px] mt-2.5 ml-2.5 hover:bg-[#001e32] flex items-center justify-center">
                <h2 className="font-semibold text-white text-[18px] md:text-[22px]">
                  Check Your Email
                </h2>
              </div>

              <div className="mt-8 text-center">
                <div className="flex justify-center mb-6">
                  <svg className="w-16 h-16 text-[#15609e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <p className="text-gray-700 text-lg mb-4">
                  We sent you a verification link.
                </p>
                <p className="text-gray-600 mb-2">
                  This page will redirect after verification.
                </p>
                <p className="text-red-600 font-medium mt-4">
                You have 30 seconds to verify your email.
                </p>
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
    </main>
  );
}