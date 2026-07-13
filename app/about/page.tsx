import React from "react";
import type { Metadata } from "next";
import { IconCode, IconHeart, IconRocket } from "@tabler/icons-react";
import { PageHeader } from "@/components/page-header";
import { TechBadge } from "@/components/tech-badge";
import { skillGroups, timeline } from "@/data/about";

export const metadata: Metadata = {
  title: "Sobre Mí | Juan Andrés",
  description:
    "Conoce más sobre Juan Andrés, su trayectoria como desarrollador de software y las habilidades técnicas que domina.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10 md:py-14 animate-fade-in space-y-16">
      {/* Page Header */}
      <PageHeader
        title="Sobre Mí"
        description="Una mirada detallada a quién soy, qué tecnologías me apasionan y la trayectoria que me ha traído hasta aquí como desarrollador de software."
      />

      {/* Hero & Intro Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        {/* Left Column: Visual Monogram Avatar */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden glass-effect border border-slate-200/50 dark:border-slate-800/50 shadow-2xl flex items-center justify-center group transition-all duration-300">
            <div className="absolute inset-0 bg-linear-to-tr from-primary/10 via-transparent to-secondary/10 group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute w-44 h-44 rounded-full bg-linear-to-r from-primary to-secondary blur-3xl opacity-20 dark:opacity-10 animate-pulse" />
            <span className="text-6xl sm:text-7xl font-extrabold tracking-tighter bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent select-none group-hover:scale-105 transition-transform duration-300">
              JA
            </span>
          </div>
        </div>

        {/* Right Column: Bio Text */}
        <div className="md:col-span-7 space-y-5 text-slate-600 dark:text-slate-350 text-base sm:text-lg leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">
            Desarrollador Web Frontend & Ingeniero de Software
          </h2>
          <p>
            ¡Hola! Soy Juan Andrés, un apasionado por la tecnología con sede en
            el desarrollo frontend y la ingeniería de sistemas. Mi misión
            principal es diseñar y construir experiencias web excepcionales que
            unan una estética impecable con un rendimiento óptimo.
          </p>
          <p>
            Me especializo en ecosistemas modernos basados en{" "}
            <strong>React</strong> y <strong>Next.js</strong>. Disfruto resolver
            problemas complejos a través de arquitecturas de software limpias y
            mantenibles. Creo firmemente que los mejores productos digitales son
            aquellos que ponen la accesibilidad, el diseño adaptativo y la
            experiencia del desarrollador en primer plano.
          </p>
        </div>
      </section>

      {/* Philosophy / Core Strengths */}
      <section className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">
          Mi Filosofía de Desarrollo
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-effect p-6 rounded-2xl border border-slate-200/40 dark:border-slate-800/40 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <IconRocket className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100">
              Rendimiento y Velocidad
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Código optimizado, optimización de assets e implementación de
              caches inteligentes para lograr tiempos de carga instantáneos y la
              mejor puntuación de Web Vitals.
            </p>
          </div>

          <div className="glass-effect p-6 rounded-2xl border border-slate-200/40 dark:border-slate-800/40 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center">
              <IconHeart className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100">
              Accesibilidad Primero
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Cumplimiento de estándares de accesibilidad WCAG y maquetación
              semántica. El software debe ser usable por todas las personas, sin
              importar sus capacidades.
            </p>
          </div>

          <div className="glass-effect p-6 rounded-2xl border border-slate-200/40 dark:border-slate-800/40 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <IconCode className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100">
              Arquitecturas Modulares
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Estructura de archivos ordenada, tipado estricto con TypeScript,
              componentes desacoplados y mantenibles listos para el crecimiento
              del negocio.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Skills */}
      <section className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">
          Habilidades Técnicas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="glass-effect p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 space-y-4"
            >
              <h4 className="text-base font-bold text-slate-800 dark:text-slate-100 tracking-wide uppercase border-b border-slate-200/30 dark:border-slate-800/30 pb-2">
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-2 pt-1">
                {group.items.map((item) => (
                  <TechBadge key={item} name={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="space-y-8 pb-8">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">
          Mi Trayectoria
        </h3>
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-6 space-y-8 md:space-y-12">
          {timeline.map((item) => (
            <div key={item.id} className="relative pl-8 group">
              {/* Timeline node dot */}
              <div className="absolute -left-2.25 top-1.5 w-4 h-4 rounded-full border-4 border-white dark:border-neutral bg-slate-350 dark:bg-slate-700 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping group-hover:inline-block hidden" />
              </div>

              {/* Period badge */}
              <span className="inline-block px-2.5 py-0.5 mb-2 text-xs font-semibold rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200/40 dark:border-slate-800/45">
                {item.period}
              </span>

              {/* Position and Company */}
              <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors duration-250">
                {item.role}
              </h4>
              <p className="text-xs sm:text-sm font-semibold text-slate-400 dark:text-slate-450 mb-3">
                {item.company}
              </p>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-3xl mb-4">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <TechBadge key={tag} name={tag} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
