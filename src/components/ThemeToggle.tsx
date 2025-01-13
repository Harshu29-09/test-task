"use client";

import { useTheme } from "@/components/ThemeProvider";
import { SlEnergy } from "react-icons/sl";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
  const [admin, setAdmin] = useState<string | null>(null);

  const handleLoginClick = () => {
    router.push("/login");
  }; 

  const handleAdminClick = () => {
    router.push("/admin/dashboard");}

  useEffect(() => {
    const userId = window.sessionStorage.getItem("userId");
    setAdmin(userId);
  }, []);

  return (
    <div className="flex space-x-4">
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="flex items-center px-4 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded-md"
      >
        <SlEnergy className="mr-2" />
        <span>{theme === "dark" ? "Dark Mode" : "Light Mode"}</span>
      </button>

      {/* Login Button */}
      {!admin ? (
        <button
          onClick={handleLoginClick}
          className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Login
        </button>
      ):(<button
        onClick={handleAdminClick}
        className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Admin Dashboard
      </button>)}
    </div>
  );
}
