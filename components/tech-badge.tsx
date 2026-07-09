import React from "react";

interface TechBadgeProps {
  name: string;
  className?: string;
}

const getBadgeStyle = (name: string) => {
  const lower = name.toLowerCase().trim();

  // Next.js, React -> blue/sky
  if (
    lower.includes("react") ||
    lower.includes("next.js") ||
    lower.includes("nextjs")
  ) {
    return "bg-sky-50 dark:bg-sky-950/25 text-sky-600 dark:text-sky-400 border-sky-200/50 dark:border-sky-800/30 hover:bg-sky-100/50 dark:hover:bg-sky-900/20";
  }

  // Tailwind CSS, CSS, PostCSS -> teal
  if (
    lower.includes("tailwind") ||
    lower === "css" ||
    lower.includes("postcss")
  ) {
    return "bg-teal-50 dark:bg-teal-950/25 text-teal-600 dark:text-teal-400 border-teal-200/50 dark:border-teal-800/30 hover:bg-teal-100/50 dark:hover:bg-teal-900/20";
  }

  // TypeScript, TS -> blue
  if (lower.includes("typescript") || lower === "ts") {
    return "bg-blue-50 dark:bg-blue-950/25 text-blue-600 dark:text-blue-400 border-blue-200/50 dark:border-blue-800/30 hover:bg-blue-100/50 dark:hover:bg-blue-900/20";
  }

  // JavaScript, JS -> amber/yellow
  if (lower.includes("javascript") || lower === "js") {
    return "bg-amber-50/70 dark:bg-amber-950/20 text-amber-600 dark:text-amber-450 border-amber-200/50 dark:border-amber-850/30 hover:bg-amber-100/50 dark:hover:bg-amber-900/20";
  }

  // Node, Express, Fastify -> emerald/green
  if (
    lower.includes("node") ||
    lower.includes("express") ||
    lower.includes("fastify")
  ) {
    return "bg-emerald-50 dark:bg-emerald-950/25 text-emerald-600 dark:text-emerald-400 border-emerald-200/50 dark:border-emerald-800/30 hover:bg-emerald-100/50 dark:hover:bg-emerald-900/20";
  }

  // Zod -> purple
  if (lower.includes("zod")) {
    return "bg-purple-50 dark:bg-purple-950/25 text-purple-600 dark:text-purple-400 border-purple-200/50 dark:border-purple-800/30 hover:bg-purple-100/50 dark:hover:bg-purple-900/20";
  }

  // Resend, Mail -> pink/rose
  if (
    lower.includes("resend") ||
    lower.includes("mail") ||
    lower.includes("email")
  ) {
    return "bg-rose-50 dark:bg-rose-950/25 text-rose-600 dark:text-rose-455 border-rose-200/50 dark:border-rose-800/30 hover:bg-rose-100/50 dark:hover:bg-rose-900/20";
  }

  // MDX, Markdown -> violet
  if (lower.includes("mdx") || lower.includes("markdown")) {
    return "bg-violet-50 dark:bg-violet-950/25 text-violet-600 dark:text-violet-400 border-violet-200/50 dark:border-violet-800/30 hover:bg-violet-100/50 dark:hover:bg-violet-900/20";
  }

  // Python -> indigo
  if (lower.includes("python")) {
    return "bg-indigo-50 dark:bg-indigo-950/25 text-indigo-600 dark:text-indigo-400 border-indigo-200/50 dark:border-indigo-800/30 hover:bg-indigo-100/50 dark:hover:bg-indigo-900/20";
  }

  // Databases -> red
  if (
    lower.includes("postgres") ||
    lower.includes("sql") ||
    lower.includes("mongo") ||
    lower.includes("db") ||
    lower.includes("database")
  ) {
    return "bg-red-50 dark:bg-red-950/25 text-red-650 dark:text-red-400 border-red-200/50 dark:border-red-800/30 hover:bg-red-100/50 dark:hover:bg-red-900/20";
  }

  // Default / fallback style
  return "bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 border-slate-200/40 dark:border-slate-750/30 hover:bg-slate-200/50 dark:hover:bg-slate-800 hover:text-slate-800 dark:hover:text-white";
};

export function TechBadge({ name, className = "" }: TechBadgeProps) {
  const dynamicStyles = getBadgeStyle(name);

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold
        border transition-all duration-200 select-none ${dynamicStyles} ${className}`}
    >
      {name}
    </span>
  );
}
