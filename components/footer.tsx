import {
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-200/80 dark:border-slate-800/80 bg-white/40 dark:bg-neutral/40 transition-colors duration-300">
      <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-sm text-slate-500 dark:text-slate-400 text-center md:text-left">
          &copy; {currentYear} Juan Andrés. Todos los derechos reservados.
        </p>

        {/* Redes Sociales */}
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Juan Andrés"
            className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors duration-200"
          >
            <IconBrandGithub className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Juan Andrés"
            className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors duration-200"
          >
            <IconBrandLinkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:tu-correo@example.com"
            aria-label="Enviar correo electrónico a Juan Andrés"
            className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors duration-200"
          >
            <IconMail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
