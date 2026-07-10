import { IconArrowRight, IconSparkles, IconCode, IconRss, IconStack } from "@tabler/icons-react";
import { HighlightCard } from "@/components/highlight-card";
import { CtaLink } from "@/components/cta-link";

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-8rem)] flex items-center justify-center py-20 overflow-hidden">
      {/* Background gradients for premium feel */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-40%] left-[-10%] w-[80%] h-[80%] rounded-full bg-primary/10 blur-[120px] dark:bg-primary/5 animate-pulse duration-8000ms" />
        <div className="absolute bottom-[-40%] right-[-10%] w-[80%] h-[80%] rounded-full bg-secondary/10 blur-[120px] dark:bg-secondary/5 animate-pulse duration-12000ms" />
      </div>

      <div className="mx-auto max-w-5xl px-6 flex flex-col items-center text-center space-y-12">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider animate-fade-in">
          <IconSparkles className="w-3.5 h-3.5" />
          Fase 1 Completada
        </div>

        {/* Hero Content */}
        <div className="space-y-6 max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Hola, soy{" "}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
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
          <CtaLink
            href="/projects"
            variant="primary"
            icon={<IconArrowRight className="w-4 h-4" />}
            iconPosition="end"
          >
            Ver Proyectos
          </CtaLink>
          <CtaLink href="/about" variant="ghost">
            Saber Más
          </CtaLink>
        </div>

        {/* Grid of highlights */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          <HighlightCard
            icon={<IconCode className="w-5 h-5" />}
            title="Tailwind CSS v4"
            description="Estilos ultrarrápidos y modulares definidos mediante variables CSS nativas y sintaxis simplificada @theme."
            color="primary"
          />

          <HighlightCard
            icon={<IconStack className="w-5 h-5" />}
            title="Diseño Adaptativo"
            description="Esquema de colores premium con modo claro/oscuro automatizado y menú móvil responsivo e interactivo."
            color="secondary"
          />

          <HighlightCard
            icon={<IconRss className="w-5 h-5" />}
            title="Motor MDX del Blog"
            description="Preparado para la Fase 3, donde implementaremos rutas dinámicas y lectura de archivos de blog estáticos."
            color="primary"
          />
        </div>
      </div>
    </div>
  );
}
