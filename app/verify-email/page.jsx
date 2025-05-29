"use client";

import { useEffect } from "react";
import { auth } from "./firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function VerifyEmail() {
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      onAuthStateChanged(auth, async (user) => {
        await user?.reload();  // force check
        if (user && user.emailVerified) {
          router.push("/dashboard"); // Redirect to dashboard if email is verified
        }
      });
    }, 3000); // Poll every 3 seconds

    return () => clearInterval(interval);
  }, [router]);

  return (
    <div>
      <h2>Check your email</h2>
      <p>We sent you a verification link. This page will redirect after verification.</p>
    </div>
  );
}

