"use client";

import { Github, Linkedin, Mail, MapPin, ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--border-color)] py-10 z-10">
      {/* Subtle top accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-6 text-[var(--foreground-muted)] text-sm">
        <p className="text-center md:text-left">
          © {currentYear}{" "}
          <span className="font-semibold text-[var(--foreground)]">Aman Undre</span>.
          All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="mailto:aman.undre01@gmail.com"
            aria-label="Email"
            className="hover:text-[var(--primary)] hover:-translate-y-0.5 transition-all"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/aman0101-git"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-[var(--primary)] hover:-translate-y-0.5 transition-all"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/aman-undre-0a1b0c1d/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#0a66c2] hover:-translate-y-0.5 transition-all"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-4 h-4" /> Pune, IN
          </span>
          <span className="hidden md:inline-block w-1 h-1 rounded-full bg-[var(--border-strong)]" />
          <span className="hidden md:inline">Built with Next.js & Tailwind</span>
          <Link
            href="#hero"
            aria-label="Back to top"
            className="ml-2 p-2 rounded-full glass hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
