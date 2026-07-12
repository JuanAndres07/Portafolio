import React from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { FilterableProjects } from "@/components/filterable-projects";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Proyectos | Juan Andrés",
  description:
    "Explora la galería de proyectos de desarrollo de software, aplicaciones web y herramientas creadas por Juan Andrés.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10 md:py-14 animate-fade-in">
      <PageHeader
        title="Proyectos"
        description="Una colección de aplicaciones web, herramientas de backend y librerías en las que he trabajado. Cada proyecto refleja mi enfoque en el rendimiento, la accesibilidad y el código limpio."
      />
      <FilterableProjects projects={projects} />
    </div>
  );
}
