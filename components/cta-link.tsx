import React from "react";
import Link from "next/link";

interface CtaLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "primary" | "ghost";
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";
}

export function CtaLink({
  href,
  children,
  variant = "primary",
  icon,
  iconPosition = "end",
  className = "",
  target,
  rel,
  ...props
}: CtaLinkProps) {
  const isPrimary = variant === "primary";

  // Base and variant styles from page.tsx CTA buttons
  const baseStyles =
    "group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 select-none";

  const variantStyles = isPrimary
    ? "bg-primary text-slate-950 hover:bg-primary-hover shadow-lg shadow-primary/20 dark:shadow-primary/5"
    : "border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-neutral/40 backdrop-blur-xs hover:bg-slate-50 dark:hover:bg-slate-800/50";

  return (
    <Link
      href={href}
      target={target}
      rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {/* Icon at the start */}
      {icon && iconPosition === "start" && (
        <span className="inline-flex shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}

      {/* Button Content */}
      <span>{children}</span>

      {/* Icon at the end */}
      {icon && iconPosition === "end" && (
        <span className="inline-flex shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </Link>
  );
}
