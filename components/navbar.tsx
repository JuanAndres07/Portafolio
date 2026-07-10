"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Sobre Mí" },
  { href: "/projects", label: "Proyectos" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-effect border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
      <div className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-1 group">
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-primary transition-colors duration-200">
            Juan<span className="text-primary">Andrés</span>
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-colors duration-200 hover:text-primary ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-slate-600 dark:text-slate-300"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full transition-all duration-300" />
                )}
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>

        {/* Mobile Nav Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            aria-label="Alternar menú de navegación"
            className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
          >
            {isOpen ? <IconX className="w-6 h-6" /> : <IconMenu2 className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-200/80 dark:border-slate-800/80 bg-white/95 dark:bg-neutral/95 backdrop-blur-lg animate-in slide-in-from-top-5 duration-300">
          <nav className="flex flex-col px-6 py-4 space-y-4 text-base font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-2 px-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
