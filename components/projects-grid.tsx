import { Project } from "@/types/project";
import { ProjectCard } from "@/components/project-card";

interface ProjectsGridProps {
  projects: Project[];
  className?: string;
}

export function ProjectsGrid({ projects, className = "" }: ProjectsGridProps) {
  if (projects.length === 0) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <p className="text-slate-500 dark:text-slate-400">
          No hay proyectos disponibles en este momento.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 ${className}`}
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
