import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { TechBadge } from "@/components/tech-badge";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  tags?: string[];
  className?: string;
}

export function BlogCard({
  title,
  excerpt,
  date,
  slug,
  tags = [],
  className = "",
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className={`glass-effect flex flex-col p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 
        hover:border-primary/30 dark:hover:border-primary/20 
        hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1.5 
        transition-all duration-300 group ${className}`}
    >
      {/* Date Header */}
      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 dark:text-slate-500 mb-3 select-none">
        <Calendar className="w-3.5 h-3.5" />
        <time dateTime={date}>{date}</time>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors duration-200">
        {title}
      </h3>

      {/* Excerpt / Summary */}
      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 grow">
        {excerpt}
      </p>

      {/* Footer Area with Tags and dynamic CTA */}
      <div className="flex flex-col gap-4 mt-auto">
        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200/40 dark:border-slate-800/40">
            {tags.map((tag) => (
              <TechBadge key={tag} name={tag} />
            ))}
          </div>
        )}

        {/* Action Link (Micro-animation on Arrow) */}
        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-400 group-hover:text-primary dark:group-hover:text-primary transition-colors duration-200 select-none">
          <span>Leer artículo</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
