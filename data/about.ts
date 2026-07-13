import { SkillGroup, TimelineItem } from "@/types/about";

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5 / CSS3"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "FastAPI", "Python", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Herramientas & DevOps",
    items: ["Git & GitHub", "Docker", "Vercel", "Linux", "SQLite", "Expo"],
  },
];

export const timeline: TimelineItem[] = [
  {
    id: "freelance",
    role: "Desarrollador Full Stack Freelance",
    company: "Proyectos Independientes",
    period: "2024 - Presente",
    description: "Diseño y desarrollo de aplicaciones web a medida para emprendimientos y startups. Implementación de arquitecturas modernas utilizando Next.js, integración de pasarelas de pago y optimización del rendimiento y accesibilidad.",
    tags: ["Next.js", "React", "TypeScript", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: "frontend-jr",
    role: "Desarrollador Frontend Junior",
    company: "Tech Solutions S.A.",
    period: "2023 - 2024",
    description: "Colaboración con equipos ágiles en el desarrollo de interfaces de usuario interactivas y responsivas. Maquetación con Tailwind CSS, consumo de APIs REST y refactorización de código legado para mejorar la mantenibilidad.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Git", "REST APIs"],
  },
  {
    id: "university",
    role: "Estudiante de Ingeniería de Software",
    company: "Universidad Tecnológica",
    period: "2020 - 2024",
    description: "Formación académica centrada en ingeniería de software, algoritmos, bases de datos relacionales, patrones de diseño de software y metodologías de desarrollo de sistemas de información.",
    tags: ["Python", "SQL", "Algoritmos", "Estructuras de Datos", "Linux"],
  },
];
