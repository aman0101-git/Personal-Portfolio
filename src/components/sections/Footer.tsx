"use client";

import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--background)] py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-8 text-slate-500 text-sm font-medium">
        
        {/* Left: Copyright */}
        <p className="text-center md:text-left">
          © {currentYear} Aman Undre. All rights reserved.
        </p>

        {/* Center: Minimalist Connect Links */}
        <div className="flex items-center gap-8">
          <a 
            href="mailto:aman.undre01@gmail.com" 
            title="Email Me"
            className="hover:text-[var(--primary)] hover:-translate-y-1 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a 
            href="https://github.com/aman0101-git" 
            target="_blank" 
            rel="noreferrer" 
            title="GitHub"
            className="hover:text-[var(--primary)] hover:-translate-y-1 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/aman-undre-0a1b0c1d/" 
            target="_blank" 
            rel="noreferrer" 
            title="LinkedIn"
            className="hover:text-[#0a66c2] hover:-translate-y-1 transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Right: Location & Tech */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-right">
          <div className="flex items-center gap-1.5 hover:text-[var(--foreground)] transition-colors cursor-default">
            <MapPin className="w-4 h-4" /> Pune, India
          </div>
          <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
          <p className="hidden md:block">Crafted with Next.js & Tailwind</p>
        </div>

      </div>
    </footer>
  );
}