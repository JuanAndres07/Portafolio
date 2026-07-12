"use client";

import React, { useState } from "react";
import { Project } from "@/types/project";
import { ProjectsGrid } from "@/components/projects-grid";

interface FilterableProjectsProps {
  projects: Project[];
}

export function FilterableProjects({ projects }: FilterableProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  // Extract unique categories dynamically from the projects array
  const categories = [
    "Todos",
    ...Array.from(new Set(projects.map((project) => project.category))),
  ];

  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="w-full flex flex-col space-y-8">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2.5 justify-center sm:justify-start items-center">
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              type="button"
              className={`px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full border transition-all duration-300 ease-out cursor-pointer select-none
                ${
                  isActive
                    ? "bg-primary text-slate-950 border-primary shadow-lg shadow-primary/15 font-bold scale-[1.02]"
                    : "bg-slate-100/50 hover:bg-slate-200/60 dark:bg-slate-800/40 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-350 border-slate-200/50 dark:border-slate-800/50"
                }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Projects Grid Container with key to force rerender to trigger the animation */}
      <div key={selectedCategory} className="animate-fade-in">
        <ProjectsGrid projects={filteredProjects} />
      </div>
    </div>
  );
}
