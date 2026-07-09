import React from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function PageHeader({
  title,
  description,
  centered = false,
  className = "",
}: PageHeaderProps) {
  return (
    <div
      className={`relative w-full py-10 md:py-14 border-b border-slate-200/40 dark:border-slate-800/40 mb-10 
        ${centered ? "text-center flex flex-col items-center" : "text-left"} 
        ${className}`}
    >
      {/* Decorative subtle background glow block */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none">
        <div
          className={`absolute -top-1/2 w-[40%] h-[150%] rounded-full bg-primary/5 blur-[80px] dark:bg-primary/2.5 
            ${centered ? "left-1/2 -translate-x-1/2" : "left-0"}`}
        />
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white transition-all duration-300">
        <span className="relative inline-block">
          {title}
          {/* Decorative colored accent bar under the title */}
          <span
            className={`absolute bottom-1.5 left-0 h-1 rounded-full bg-linear-to-r from-primary to-secondary
              ${centered ? "w-1/2 left-1/4" : "w-12"}`}
          />
        </span>
      </h1>

      {/* Description */}
      {description && (
        <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mt-6 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
