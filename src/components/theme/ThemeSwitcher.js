"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Evita parpadeo en SSR

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded absolute top-4 left-4"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
    >
      {currentTheme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}