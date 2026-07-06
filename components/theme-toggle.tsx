"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full border border-slate-200/80 dark:border-slate-800/80 bg-white/40 dark:bg-slate-900/40 opacity-0" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      type="button"
      aria-label="Cambiar tema de color"
      className="relative w-10 h-10 rounded-full flex items-center justify-center border border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md text-slate-800 dark:text-slate-200 hover:text-primary dark:hover:text-primary hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 shadow-xs cursor-pointer hover:scale-105 active:scale-95 group focus-visible:outline-2 focus-visible:outline-primary"
    >
      <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
        {isDark ? (
          <Sun className="w-5 h-5 transition-all duration-500 rotate-0 scale-100 group-hover:rotate-45" />
        ) : (
          <Moon className="w-5 h-5 transition-all duration-500 rotate-0 scale-100 group-hover:-rotate-12" />
        )}
      </div>
    </button>
  );
}
