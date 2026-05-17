"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Lock,
  Activity,
  Users,
  Database,
  ShieldCheck,
  Plane,
  Code2,
  PhoneCall,
  ArrowUpRight,
} from "lucide-react";
import { useGsapScroll } from "@/lib/useGsap";

const projects = [
  {
    id: "ams",
    title: "Agent Management System",
    fullTitle: "AMS — Centralized Agent Workflow Platform",
    company: "Firstclose Solutions",
    category: "Operations Platform",
    icon: PhoneCall,
    accent: "from-indigo-500/30 via-purple-500/20 to-transparent",
    badge: "Featured",
    span: "lg:col-span-8 lg:row-span-2",
    description:
      "A full-stack production application that replaces fragmented manual workflows with a centralized platform for managing customer data, follow-ups and daily team operations.",
    impact:
      "Used daily by 30+ users — reduced manual effort and increased data visibility across the operations team.",
    techStack: ["React.js", "Node.js", "Express", "MySQL", "TypeScript"],
    features: [
      "Comprehensive customer & lead management with structured follow-up tracking.",
      "Real-time supervisor dashboards and team performance metrics.",
      "Advanced search, filtering and custom reporting tools.",
      "Role-Based Access Control between agents and supervisors.",
    ],
  },
  {
    id: "cms",
    title: "Customer Management System",
    fullTitle: "CMS — BPO & Loan Collection Platform",
    company: "Firstclose Solutions",
    category: "Enterprise Web App",
    icon: Database,
    accent: "from-emerald-500/30 via-teal-500/20 to-transparent",
    badge: "Production",
    span: "lg:col-span-4 lg:row-span-2",
    description:
      "Handles customer data, automates case allocation, manages agent interactions and tracks employee performance in real time.",
    impact:
      "Used by 20+ users; eliminated spreadsheet tracking and provided team leaders with live analytics and full audit trails.",
    techStack: ["React (Vite)", "Tailwind", "Node.js", "Express", "MySQL"],
    features: [
      "Massive dataset ingestion and systematic case allocation.",
      "Target-driven campaign management.",
      "Isolated agent workspace for logging dispositions.",
      "Live oversight with real-time monitoring.",
    ],
  },
  {
    id: "hrms",
    title: "HR Management System",
    fullTitle: "HRMS — Role-Based HR Platform",
    company: "Firstclose Solutions",
    category: "Internal Portal",
    icon: Users,
    accent: "from-sky-500/30 via-blue-500/20 to-transparent",
    badge: "Production",
    span: "lg:col-span-5 lg:row-span-2",
    description:
      "Securely manages HR workflows, candidate tracking and organizational data across Admin, Supervisor and HR roles.",
    impact:
      "Drastically improved administrative efficiency through role-specific dashboards, JWT auth and automated form validation.",
    techStack: ["React + TS", "Tailwind", "Radix UI", "Node.js", "MySQL"],
    features: [
      "RBAC + JWT authentication for Admin, Supervisor, HR.",
      "Candidate tracking with Zod + React Hook Form validation.",
      "Excel bulk ingestion via ExcelJS.",
      "End-to-end type safety with TypeScript.",
    ],
  },
  {
    id: "pilot-prep",
    title: "Pilot Preparation App",
    fullTitle: "Aviation EdTech Platform",
    company: "Fingspace (Internship)",
    category: "EdTech",
    icon: Plane,
    accent: "from-rose-500/30 via-pink-500/20 to-transparent",
    badge: "Internship",
    span: "lg:col-span-7 lg:row-span-2",
    description:
      "A comprehensive preparation platform assisting aviation students with study materials, practice tests and progress tracking.",
    impact:
      "Engineered scalable backend architectures and dynamic frontend components during an intensive 6-month internship.",
    techStack: ["React.js", "Node.js", "Express", "MongoDB", "MERN"],
    features: [
      "Dynamic quiz and assessment generation engine.",
      "Progress tracking and performance analytics.",
      "Secure authentication and user profile management.",
      "Collaborative Agile + Git workflows.",
    ],
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  /* --------------------------------------------------------------
     GSAP scroll-parallax: each project card drifts subtly on Y as
     the section scrolls past, creating layered depth.
     -------------------------------------------------------------- */
  useGsapScroll(sectionRef, (gsap) => {
    gsap.utils.toArray<HTMLElement>(".project-card").forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          delay: (i % 2) * 0.08,
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Parallax drift while in view
      gsap.to(card, {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background glows */}
      <div
        className="orb"
        style={{
          top: "0",
          right: "-10%",
          width: "32vmax",
          height: "32vmax",
          background: "radial-gradient(circle, var(--mesh-1), transparent 70%)",
          opacity: 0.3,
        }}
      />
      <div
        className="orb"
        style={{
          bottom: "0",
          left: "-10%",
          width: "30vmax",
          height: "30vmax",
          background: "radial-gradient(circle, var(--mesh-2), transparent 70%)",
          opacity: 0.25,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="mb-14 md:mb-20 md:text-center flex flex-col items-start md:items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm tracking-[0.3em] text-[var(--primary)] mb-3 font-semibold uppercase"
          >
            Commercial & Enterprise
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl"
          >
            Production <span className="gradient-text">Systems</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base md:text-lg text-[var(--foreground-muted)] max-w-2xl"
          >
            A suite of secure, full-stack platforms built to handle complex
            business workflows, data compliance and operational scaling.
          </motion.p>
        </div>

        {/* ============================================================
            DESKTOP — asymmetrical bento grid (12-col).
            Spans defined per card so the layout is intentional, not uniform.
            ============================================================ */}
        <div className="hidden lg:grid grid-cols-12 grid-rows-2 gap-6 auto-rows-[280px]">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* ============================================================
            MOBILE — swipeable carousel with snap & dot indicators.
            ============================================================ */}
        <MobileProjects />
      </div>
    </section>
  );
}

/* ============================================================
   PROJECT CARD — premium tilt + glow on hover, no `motion`
   wrapping (so GSAP can own the transform). 3D tilt is applied
   via inline transform with a single rAF on mouse move.
   ============================================================ */
function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = project.icon;

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (py - 0.5) * -8; // tilt X (deg)
    const ry = (px - 0.5) * 10; // tilt Y (deg)
    card.style.setProperty("--rx", `${rx}deg`);
    card.style.setProperty("--ry", `${ry}deg`);
    card.style.setProperty("--mx", `${px * 100}%`);
    card.style.setProperty("--my", `${py * 100}%`);
  }, []);

  const handleLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
  }, []);

  return (
    <article
      className={`project-card group relative overflow-hidden rounded-3xl glass ${project.span} [perspective:1200px]`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="relative h-full p-7 md:p-8 flex flex-col transition-transform duration-300 will-change-transform"
        style={{
          transform: "rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Hover spotlight that follows the cursor */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), color-mix(in oklab, var(--primary) 20%, transparent), transparent 60%)",
          }}
        />

        {/* Accent gradient at top-right */}
        <div
          aria-hidden
          className={`absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl opacity-60 bg-gradient-to-br ${project.accent}`}
        />

        {/* Card chrome */}
        <div className="relative z-10 flex items-start justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[var(--primary)]/15 border border-[var(--primary)]/25">
              <Icon className="w-5 h-5 text-[var(--primary)]" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--foreground-muted)]">
              {project.category}
            </span>
          </div>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[var(--foreground)] text-[var(--background)]">
            <Lock className="w-3 h-3" /> {project.badge}
          </span>
        </div>

        {/* Title + description */}
        <div className="relative z-10 flex-1">
          <h4 className="text-xl md:text-2xl font-bold tracking-tight mb-2">
            {project.fullTitle}
          </h4>
          <p className="text-sm md:text-base text-[var(--foreground-muted)] leading-relaxed">
            {project.description}
          </p>

          {/* Impact strip */}
          <div className="mt-4 flex items-start gap-2 p-3 rounded-xl bg-emerald-500/8 border border-emerald-500/20">
            <Activity className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <p className="text-xs leading-relaxed text-[var(--foreground)]">
              {project.impact}
            </p>
          </div>
        </div>

        {/* Footer chips + CTA */}
        <div className="relative z-10 mt-5 pt-4 border-t border-[var(--border-color)] flex items-end justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 4).map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-[var(--background-elevated)]/60 border border-[var(--border-color)] text-[var(--foreground-muted)]"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="shrink-0 inline-flex items-center gap-1 text-xs font-semibold text-[var(--primary)] group-hover:gap-2 transition-all">
            <ShieldCheck className="w-3.5 h-3.5" />
            Secured
          </div>
        </div>
      </div>
    </article>
  );
}

/* ============================================================
   MOBILE — full-bleed swipeable cards with snap + dots
   ============================================================ */
function MobileProjects() {
  const [active, setActive] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const c = e.currentTarget;
    const cardW = c.scrollWidth / projects.length;
    setActive(Math.min(projects.length - 1, Math.max(0, Math.round(c.scrollLeft / cardW))));
  };

  return (
    <div className="lg:hidden">
      <div
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 pb-6 -mx-4 px-4"
      >
        {projects.map((p) => {
          const Icon = p.icon;
          return (
            <article
              key={p.id}
              className="shrink-0 snap-center w-[88vw] sm:w-[78vw] glass rounded-3xl p-6 relative overflow-hidden"
            >
              <div
                aria-hidden
                className={`absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-50 bg-gradient-to-br ${p.accent}`}
              />
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 rounded-lg bg-[var(--primary)]/15">
                    <Icon className="w-4 h-4 text-[var(--primary)]" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--foreground-muted)]">
                    {p.category}
                  </span>
                </div>
                <h4 className="text-lg font-bold tracking-tight mb-2">
                  {p.fullTitle}
                </h4>
                <p className="text-sm text-[var(--foreground-muted)] mb-4">
                  {p.description}
                </p>
                <div className="p-3 rounded-xl bg-emerald-500/8 border border-emerald-500/20 mb-4">
                  <p className="text-xs leading-relaxed flex gap-2">
                    <Activity className="w-4 h-4 text-emerald-500 shrink-0" />
                    {p.impact}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.techStack.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-[var(--background-elevated)]/60 border border-[var(--border-color)] text-[var(--foreground-muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[var(--primary)]">
                  <Code2 className="w-3.5 h-3.5" />
                  Production · {p.company}
                  <ArrowUpRight className="w-3.5 h-3.5 ml-auto" />
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <div className="flex justify-center gap-2 mt-2">
        {projects.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              active === i
                ? "w-8 bg-[var(--primary)]"
                : "w-1.5 bg-[var(--border-color)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
