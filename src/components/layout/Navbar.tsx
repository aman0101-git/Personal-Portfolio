"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

/* React-19-idiomatic "am I on the client?" check.
   Server snapshot returns false, client snapshot true — no `useEffect` +
   `setState`, so the new `react-hooks/set-state-in-effect` rule stays happy. */
const emptySubscribe = () => () => {};
function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}
import { Moon, Sun, Menu, X, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const mounted = useIsMounted();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  /* --------------------------------------------------------------
     Scroll-driven nav style: the bar tightens, gains a thicker glass
     blur and a subtle bottom border once we've scrolled past ~40px.
     -------------------------------------------------------------- */
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  /* --------------------------------------------------------------
     Active-section tracker. Uses IntersectionObserver so the animated
     pill under nav items always reflects what's on screen.
     -------------------------------------------------------------- */
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* Lock body scroll when the mobile drawer is open. */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-2 backdrop-blur-xl bg-[color-mix(in_oklab,var(--background)_70%,transparent)] border-b border-[var(--border-color)] shadow-[0_4px_30px_rgba(0,0,0,0.04)]"
            : "py-4 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* ============== LOGO ============== */}
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold tracking-tighter relative z-[60]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="gradient-text">&lt;</span>
            Aman
            <span className="gradient-text">/&gt;</span>
          </Link>

          {/* ============== DESKTOP LINKS ============== */}
          <div className="hidden md:flex items-center gap-1 rounded-full glass px-2 py-1.5">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium rounded-full transition-colors"
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-[var(--primary)]/15 border border-[var(--primary)]/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span
                    className={`relative z-10 ${
                      isActive
                        ? "text-[var(--primary)]"
                        : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* ============== RIGHT CONTROLS ============== */}
          <div className="flex items-center gap-2 relative z-[60]">
            {/* Theme toggle */}
            {mounted && (
              <MagneticButton strength={10}>
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2.5 rounded-full glass hover:border-[var(--primary)] transition-colors focus-ring"
                  aria-label="Toggle theme"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={theme}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="block"
                    >
                      {theme === "dark" ? (
                        <Sun className="w-4 h-4 text-amber-400" />
                      ) : (
                        <Moon className="w-4 h-4 text-indigo-600" />
                      )}
                    </motion.span>
                  </AnimatePresence>
                </button>
              </MagneticButton>
            )}

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <MagneticButton strength={14}>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--foreground)] text-[var(--background)] text-sm font-semibold hover:shadow-[0_0_24px_var(--glow)] transition-shadow"
                >
                  Let&apos;s talk
                </Link>
              </MagneticButton>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2.5 rounded-full glass focus-ring"
              onClick={() => setIsMobileMenuOpen((s) => !s)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 45, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="block"
                  >
                    <X className="w-5 h-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -45, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="block"
                  >
                    <Menu className="w-5 h-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ============== MOBILE FULL-SCREEN DRAWER ============== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 32 }}
            className="fixed inset-0 z-40 md:hidden bg-[var(--background)]/95 backdrop-blur-2xl flex flex-col"
          >
            {/* Soft mesh backdrop inside drawer */}
            <div className="mesh-bg"><span /></div>

            <div className="flex-1 flex flex-col justify-center px-8">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, i) => {
                  const id = link.href.replace("#", "");
                  const isActive = activeSection === id;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.06, duration: 0.4, ease: "easeOut" }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="group flex items-baseline gap-4 py-3 border-b border-[var(--border-color)]"
                      >
                        <span className="text-xs font-mono text-[var(--foreground-muted)]">
                          0{i + 1}
                        </span>
                        <span
                          className={`text-4xl font-bold tracking-tight transition-colors ${
                            isActive
                              ? "text-[var(--primary)]"
                              : "text-[var(--foreground)] group-hover:text-[var(--primary)]"
                          }`}
                        >
                          {link.name}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            {/* Drawer footer — social shortcuts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="px-8 pb-10 pt-6 border-t border-[var(--border-color)] flex items-center justify-between"
            >
              <div className="flex items-center gap-5 text-[var(--foreground-muted)]">
                <a href="https://github.com/aman0101-git" aria-label="GitHub" target="_blank" rel="noreferrer">
                  <Github className="w-5 h-5 hover:text-[var(--primary)] transition-colors" />
                </a>
                <a href="https://www.linkedin.com/in/aman-undre-0a1b0c1d/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                  <Linkedin className="w-5 h-5 hover:text-[var(--primary)] transition-colors" />
                </a>
                <a href="mailto:aman.undre01@gmail.com" aria-label="Email">
                  <Mail className="w-5 h-5 hover:text-[var(--primary)] transition-colors" />
                </a>
              </div>
              <span className="text-xs font-mono text-[var(--foreground-muted)]">
                Pune, IN
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
