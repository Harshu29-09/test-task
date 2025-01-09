// components/ThemeToggle.tsx
"use client";

import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded-md"
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
