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
    <div>
      <h2>Check your email</h2>
      <p>
        We sent you a verification link. This page will redirect after verification.<br />
        <span style={{ color: "red" }}>You have 30 seconds to verify your email.</span>
      </p>
    </div>
  );
}