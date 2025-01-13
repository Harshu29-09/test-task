"use client";

import { useTheme } from "@/components/ThemeProvider";
import { SlEnergy } from "react-icons/sl";
import { useRouter } from "next/navigation";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };

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
      <button
        onClick={handleLoginClick}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Login
      </button>
    </div>
  );
}
