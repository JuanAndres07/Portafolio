import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { TechBadge } from "@/components/tech-badge";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  github?: string;
  image?: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  href,
  github,
  image,
  className = "",
}: ProjectCardProps) {
  return (
    <div
      className={`glass-effect flex flex-col rounded-2xl overflow-hidden border border-slate-200/50 dark:border-slate-800/50 
        hover:border-primary/30 dark:hover:border-primary/20 
        hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1.5 
        transition-all duration-300 group ${className}`}
    >
      {/* Optional Image Section with hover-zoom effect */}
      {image && (
        <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-100 dark:bg-slate-900/40 border-b border-slate-200/20 dark:border-slate-800/20">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            priority={false}
          />
          {/* Subtle overlay for dark/light integration */}
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      {/* Card Content Area */}
      <div className="p-6 flex flex-col grow">
        {/* Title */}
        <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 grow">
          {description}
        </p>

        {/* Tags con TechBadge */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <TechBadge key={tag} name={tag} />
            ))}
          </div>
        )}

        {/* Actions/Links Footer */}
        {(github || href) && (
          <div className="flex items-center gap-4 pt-4 border-t border-slate-200/40 dark:border-slate-800/40 mt-auto">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver código de ${title} en GitHub`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors duration-200 cursor-pointer"
              >
                <GithubIcon className="w-4 h-4" />
                Código
              </a>
            )}
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver sitio en vivo de ${title}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors duration-200 cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" />
                Demo en Vivo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
