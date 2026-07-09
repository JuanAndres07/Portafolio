import React from "react";

interface HighlightCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: "primary" | "secondary";
  className?: string;
}

const colorMaps = {
  primary: {
    bg: "bg-primary/10 dark:bg-primary/15",
    text: "text-primary",
    borderHover: "hover:border-primary/30 dark:hover:border-primary/20",
    shadowHover: "hover:shadow-primary/5",
  },
  secondary: {
    bg: "bg-secondary/10 dark:bg-secondary/15",
    text: "text-secondary",
    borderHover: "hover:border-secondary/30 dark:hover:border-secondary/20",
    shadowHover: "hover:shadow-secondary/5",
  },
};

export function HighlightCard({
  icon,
  title,
  description,
  color = "primary",
  className = "",
}: HighlightCardProps) {
  const styles = colorMaps[color];

  return (
    <div
      className={`glass-effect p-6 rounded-2xl text-left transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg ${styles.borderHover} ${styles.shadowHover} ${className}`}
    >
      {/* Icon wrapper with tinted background and hover scale animation */}
      <div
        className={`w-10 h-10 rounded-xl ${styles.bg} ${styles.text} flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-2`}
      >
        {icon}
      </div>

      {/* Card Title */}
      <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-slate-100 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-200">
        {title}
      </h3>

      {/* Card Description */}
      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
