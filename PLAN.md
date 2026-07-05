# Plan de Proyecto: Portafolio Personal + Blog Técnico

## Descripción General

Construir un portafolio web moderno, rápido y escalable utilizando Next.js (App Router). El proyecto no solo servirá como vitrina para mostrar aplicaciones anteriores, sino que incluirá un sistema de blog basado en MDX y un formulario de contacto procesado en el servidor para demostrar un dominio avanzado del framework.

## Stack Tecnológico

- **Framework:** Next.js (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Contenido del Blog:** MDX con `next-mdx-remote` y `gray-matter` (frontmatter)
- **Funcionalidad Backend:** Server Actions (Next.js)
- **Validación:** Zod
- **Envío de Correos:** Resend
- **UI / Temas:** `next-themes` (Modo Oscuro)

## Objetivos de Aprendizaje

1.  **Dominar el App Router:** Entender la diferencia y la delimitación estricta entre _Server Components_ y _Client Components_.
2.  **Manejo de Archivos Locales (SSG):** Leer, procesar y pre-renderizar archivos `.mdx` dinámicamente.
3.  **Rutas Dinámicas:** Generar slugs automáticos para los artículos del blog (`/blog/[slug]`).
4.  **Mutación de Datos Segura:** Usar _Server Actions_ para procesar la información del formulario de contacto de forma nativa en el servidor.
5.  **Optimización de UI:** Implementar un cambio de tema (Claro/Oscuro) sin parpadeos y diseñar una arquitectura de componentes escalable.

## Fases de Desarrollo (Roadmap)

### Fase 1: Base y Diseño (UI/UX)

- [ ] Inicializar proyecto base (`npx create-next-app@latest`).
- [ ] Configurar TypeScript y Tailwind CSS v4 (sintaxis `@import "tailwindcss"`, `@theme`).
- [ ] Instalar `next-themes` e implementar Modo Oscuro global sin parpadeo.
- [ ] Construir los componentes UI reutilizables (Botones, Tarjetas, Inputs).
- [ ] Diseñar e implementar el `Navbar` y `Footer` en el layout principal.

### Fase 2: Enrutamiento y Contenido Estático

- [ ] Crear las páginas de navegación principales (`/`, `/about`, `/projects`).
- [ ] Estructurar la base de datos local (JSON o Array en TypeScript) con la información de los proyectos (ej. FinFlow).
- [ ] Construir la cuadrícula de presentación de proyectos.

### Fase 3: El Motor del Blog (MDX)

- [ ] Instalar `next-mdx-remote` y `gray-matter`.
- [ ] Crear el directorio `content/blog/` en la raíz del proyecto.
- [ ] Escribir la lógica en `src/lib/mdx.ts` para extraer metadatos (frontmatter con `gray-matter`) y contenido serializado con `next-mdx-remote`.
- [ ] Crear la página `/blog` que liste las tarjetas de todos los artículos publicados.
- [ ] Implementar la ruta dinámica `/blog/[slug]` para renderizar el MDX con los componentes personalizados.

### Fase 4: Interactividad y Backend

- [ ] Instalar `resend` y `zod`.
- [ ] Diseñar el componente interactivo del Formulario de Contacto (`"use client"`).
- [ ] Definir esquema de validación con Zod.
- [ ] Crear el Server Action `contact.ts` para recibir, validar y procesar el formulario.
- [ ] Integrar Resend para el envío de correos.
- [ ] Añadir estados de carga (`loading.tsx`) y pantallas de error personalizadas (`error.tsx`).
