// app/ClientLayout.jsx
"use client";
import { DashboardProvider } from "../context/DashboardContext";

export default function ClientLayout({ children }) {
  return <DashboardProvider>{children}</DashboardProvider>;
}
