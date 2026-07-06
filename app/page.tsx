import Link from "next/link";
import { ArrowRight, Sparkles, Code2, Rss, Layers } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-8rem)] flex items-center justify-center py-20 overflow-hidden">
      {/* Background gradients for premium feel */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[40%] -left-[10%] w-[80%] h-[80%] rounded-full bg-primary/10 blur-[120px] dark:bg-primary/5 animate-pulse duration-[8000ms]" />
        <div className="absolute -bottom-[40%] -right-[10%] w-[80%] h-[80%] rounded-full bg-secondary/10 blur-[120px] dark:bg-secondary/5 animate-pulse duration-[12000ms]" />
      </div>

      <div className="mx-auto max-w-5xl px-6 flex flex-col items-center text-center space-y-12">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider animate-fade-in">
          <Sparkles className="w-3.5 h-3.5" />
          Fase 1 Completada
        </div>

        {/* Hero Content */}
        <div className="space-y-6 max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Hola, soy{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Juan Andrés
            </span>
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-slate-600 dark:text-slate-300">
            Desarrollador Web Frontend & Ingeniero de Software
          </p>
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Bienvenido al inicio de tu nuevo portafolio. Este espacio está
            construido con las tecnologías más modernas y optimizadas del
            ecosistema: <strong>Next.js 16 (App Router)</strong>,{" "}
            <strong>React 19</strong> y <strong>Tailwind CSS v4</strong>.
          </p>
        </div>

        {/* Inline Premium CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/projects"
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-slate-950 font-semibold hover:bg-primary-hover shadow-lg shadow-primary/20 dark:shadow-primary/5 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            Ver Proyectos
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-neutral/40 backdrop-blur-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            Saber Más
          </Link>
        </div>

        {/* Grid of highlights */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          <div className="glass-effect p-6 rounded-2xl text-left hover:border-primary/30 transition-all duration-300 group hover:translate-y-[-4px]">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold mb-2">Tailwind CSS v4</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Estilos ultrarrápidos y modulares definidos mediante variables CSS
              nativas y sintaxis simplificada `@theme`.
            </p>
          </div>

          <div className="glass-effect p-6 rounded-2xl text-left hover:border-primary/30 transition-all duration-300 group hover:translate-y-[-4px]">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-4 group-hover:scale-110 transition-transform duration-300">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold mb-2">Diseño Adaptativo</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Esquema de colores premium con modo claro/oscuro automatizado y
              menú móvil responsivo e interactivo.
            </p>
          </div>

          <div className="glass-effect p-6 rounded-2xl text-left hover:border-primary/30 transition-all duration-300 group hover:translate-y-[-4px]">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
              <Rss className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold mb-2">Motor MDX del Blog</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Preparado para la Fase 3, donde implementaremos rutas dinámicas y
              lectura de archivos de blog estáticos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
