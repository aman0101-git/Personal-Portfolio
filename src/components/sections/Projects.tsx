"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Banknote,
  Building2,
  ClipboardCheck,
  Users,
  Plane,
  Compass,
  Activity,
  ChevronDown,
  CheckCircle2,
  Lock,
  Sparkles,
  Layers,
} from "lucide-react";

/* ------------------------------------------------------------------
   PROJECT DATA — sourced from Aman's project kit + résumé.
   Each entry carries everything the card needs: a compact summary for
   the collapsed state and the full feature/tech/impact detail revealed
   on expand.
   ------------------------------------------------------------------ */
type Project = {
  id: string;
  title: string;
  company: string;
  role: string;
  category: string;
  icon: React.ElementType;
  accent: string;
  status: "Production" | "Internship";
  featured?: boolean;
  metric?: string;
  description: string;
  features: string[];
  highlight: string;
  tech: string[];
};

const projects: Project[] = [
  {
    id: "ams",
    title: "AMS — Agent Management System",
    company: "Firstclose Solutions",
    role: "Full-Stack Developer",
    category: "Loan Collections · FinTech",
    icon: Banknote,
    accent: "from-indigo-500/30 via-violet-500/20 to-transparent",
    status: "Production",
    featured: true,
    metric: "Zero-downtime migration",
    description:
      "A full-stack loan-collections platform that ingests overdue-loan spreadsheets, distributes accounts to recovery agents by campaign, and captures every customer interaction as a structured, rules-validated disposition.",
    features: [
      "Excel ingestion pipeline with header-alias normalization & validation into a central borrower book.",
      "Campaign-based case allocation — equal, transactional distribution across agents.",
      "16-code disposition rules engine (Promise-To-Pay, Part Payment, Settled, Broken Promise…) with full edit-history audit trail.",
      "Supervisor monitoring analytics with principal-outstanding bucketing, drill-downs & master Excel export.",
      "Field customer-visit tracking, per-agent monthly targets, and account re-churn.",
    ],
    highlight:
      "Led a zero-downtime strangler-fig migration from a legacy Express/MySQL backend to a modular, secured NestJS API over a shared live database.",
    tech: [
      "React 19",
      "TypeScript",
      "NestJS 11",
      "Prisma 6",
      "MySQL",
      "Zustand",
      "TanStack Table",
      "Passport-JWT",
    ],
  },
  {
    id: "cms",
    title: "CMS — Customer Management System",
    company: "Firstclose Solutions",
    role: "Full-Stack Developer",
    category: "Real-Estate CRM · Sales Pipeline",
    icon: Building2,
    accent: "from-emerald-500/30 via-teal-500/20 to-transparent",
    status: "Production",
    featured: true,
    metric: "50+ daily agents",
    description:
      "A role-based lead-management and sales-pipeline platform where real-estate agents track customers through an 11-stage funnel, while supervisors allocate projects, monitor performance, and audit every interaction.",
    features: [
      "11-stage lead pipeline (ringing → follow-up → visit / virtual-meet → booking / lost) with scheduled follow-ups.",
      "Supervisor analytics — pipeline funnels, an agent-by-status performance matrix with drill-down, and Excel export.",
      "Strict supervisor-scoped data isolation so each team lead sees only their own agents' data — enforced in SQL.",
      "Per-lead audit logging with transactional status-history timelines.",
      "Per-project WhatsApp templating with variable substitution and a full message audit trail.",
    ],
    highlight:
      "Used daily by 50+ agents; hardened for production with sargable SQL, composite indexing, connection pooling, login rate limiting, health checks and graceful shutdown.",
    tech: [
      "React 19",
      "TypeScript",
      "TanStack Query",
      "Express 5",
      "MySQL",
      "shadcn / Radix",
      "Recharts",
      "JWT + bcrypt",
    ],
  },
  {
    id: "qams",
    title: "QAMS — Quality Audit Management System",
    company: "Firstclose Solutions",
    role: "Full-Stack Developer",
    category: "Call-Center QA · Compliance",
    icon: ClipboardCheck,
    accent: "from-sky-500/30 via-blue-500/20 to-transparent",
    status: "Production",
    metric: "Immutable audit trail",
    description:
      "A platform for auditing and scoring agent calls against weighted, versioned QA scorecards — with a strict audit lifecycle, immutable published records, and a built-in agent acknowledgment/dispute workflow.",
    features: [
      "Deterministic weighted scoring engine — four question types, N/A exclusion and fatal-error overrides, computed server-side.",
      "Strict audit lifecycle (Draft → In Progress → Submitted → Published → Reviewed) where published records lock.",
      "Tamper-evident revision history — every correction snapshots prior state; scorecard versioning keeps history from drifting.",
      "Agent acknowledgment & dispute flow (agree / disagree with a required remark).",
      "Three-role RBAC (Admin / Supervisor / Agent) with a guided audit wizard and live score panel.",
    ],
    highlight:
      "Replaces spreadsheet-based QA with a defensible, integrity-first audit trail built for compliance and dispute resolution — shipped as a pnpm monorepo.",
    tech: [
      "NestJS 11",
      "Prisma 6",
      "MySQL",
      "React 19",
      "TypeScript",
      "Zustand",
      "React Hook Form + Zod",
      "pnpm monorepo",
    ],
  },
  {
    id: "hrms",
    title: "HRMS — Recruitment / Tele-calling ATS",
    company: "Firstclose Solutions",
    role: "Full-Stack Developer",
    category: "HR · Applicant Tracking",
    icon: Users,
    accent: "from-rose-500/30 via-pink-500/20 to-transparent",
    status: "Production",
    metric: "8-table normalized schema",
    description:
      "A role-based recruitment & tele-calling Applicant Tracking System where HR executives log candidate calls and move leads through a configurable hiring pipeline, with supervisor and admin oversight via live analytics.",
    features: [
      "Configurable, stage-ordered hiring pipeline backed by an append-only status history.",
      "Atomic “log interaction” — records a call outcome and advances the pipeline stage in a single DB transaction.",
      "Three role-based panels (HR / Supervisor / Admin) with JWT-cookie auth and route guards.",
      "Self-referencing supervisor → HR team hierarchy modeling the real org structure.",
      "Recruiting analytics: connect rate, conversion rate, pipeline funnel, call outcomes and sourcing ROI.",
    ],
    highlight:
      "Hardened Express API (Helmet, rate limiting, compression, centralized errors, /health) over an 8-table normalized MySQL schema with composite indexes.",
    tech: [
      "React 19",
      "TypeScript",
      "Express 5",
      "MySQL2",
      "Tailwind",
      "shadcn/ui",
      "Recharts",
      "JWT (httpOnly)",
    ],
  },
  {
    id: "hangarhq",
    title: "HangarHQ — Pilot Exam-Prep Platform",
    company: "Fingspace",
    role: "SDE Intern",
    category: "EdTech · Aviation",
    icon: Plane,
    accent: "from-amber-500/30 via-orange-500/20 to-transparent",
    status: "Internship",
    metric: "17,000+ question bank",
    description:
      "A full-stack platform for DGCA / ATPL pilot-licensing aspirants to practice from a 17,000+ question bank and sit timed, proctored mock exams with performance analytics.",
    features: [
      "Idempotent question-ingestion pipeline — SHA-256 deduplication of ~17,339 questions from 363 source files.",
      "Full-screen anti-cheat exam engine — countdown timer, disqualification on tab / full-screen exit, server-side scoring.",
      "OTP email-verified registration, HTTP-only-cookie JWT auth, bcrypt, OTP password reset and tiered rate limiting.",
      "MongoDB-aggregation analytics — pass rate, per-subject averages and recent-score trends.",
      "Dockerized backend + nginx-served frontend, GitHub Actions CI, Playwright end-to-end tests.",
    ],
    highlight:
      "Converts scattered DGCA PDFs and notes into one exam-realistic practice platform with an objective, measurable readiness signal.",
    tech: [
      "React 19",
      "Express 5",
      "MongoDB",
      "Mongoose 8",
      "JWT + Nodemailer",
      "Recharts",
      "Docker · nginx",
      "Playwright",
    ],
  },
  {
    id: "arrivo",
    title: "Arrivo — Travel-Booking Platform",
    company: "Fingspace",
    role: "SDE Intern",
    category: "Full-Stack · MVC Web App",
    icon: Compass,
    accent: "from-cyan-500/30 via-sky-500/20 to-transparent",
    status: "Internship",
    metric: "MVC · server-rendered",
    description:
      "An MVC travel-booking platform with authentication, interactive maps and image uploads, built during the Fingspace internship with server-side rendering.",
    features: [
      "Passport.js authentication with secure sessions.",
      "Leaflet interactive maps for listing locations.",
      "Cloudinary image uploads and media management.",
      "EJS server-side rendering on a clean MVC architecture.",
      "Optimized Mongoose schemas to reduce query times.",
    ],
    highlight:
      "Collaborated via Git/GitHub on code reviews, debugging and deployments while shipping a complete booking flow end to end.",
    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "Passport.js",
      "Leaflet",
      "Cloudinary",
      "EJS",
      "Bootstrap",
    ],
  },
];

/* Entrance reveal — shared easing with the rest of the site. */
const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
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
        <div className="mb-12 md:mb-16 md:text-center flex flex-col items-start md:items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm tracking-[0.3em] text-[var(--primary)] mb-3 font-semibold uppercase"
          >
            Selected Work
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
            Six full-stack platforms — enterprise operations tooling, an
            EdTech exam engine and a travel app. Tap any card to expand the
            full feature breakdown, stack and impact.
          </motion.p>
        </div>

        {/* Project grid — uniform 2-col on desktop, single column on mobile */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6 items-start">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================================================================
   PROJECT CARD — compact by default, expands inline to reveal the
   full feature list, complete tech stack and impact highlight.
   ================================================================== */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const Icon = project.icon;
  const collapsedTech = project.tech.slice(0, 4);
  const hiddenTechCount = project.tech.length - collapsedTech.length;

  return (
    <motion.article
      custom={index}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="group relative overflow-hidden rounded-3xl glass transition-colors duration-300 hover:border-[var(--primary)]"
    >
      {/* Accent gradient blob */}
      <div
        aria-hidden
        className={`absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-60 bg-gradient-to-br ${project.accent} transition-opacity duration-500 group-hover:opacity-90`}
      />

      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
        className="relative z-10 w-full text-left p-6 md:p-7 cursor-pointer focus-ring rounded-3xl"
      >
        {/* Top row: category + status */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex items-center gap-3 min-w-0">
            <div className="p-2.5 rounded-xl bg-[var(--primary)]/15 border border-[var(--primary)]/25 shrink-0">
              <Icon className="w-5 h-5 text-[var(--primary)]" />
            </div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--foreground-muted)] truncate">
              {project.category}
            </span>
          </div>
          <span
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shrink-0 ${
              project.status === "Production"
                ? "bg-[var(--foreground)] text-[var(--background)]"
                : "bg-[var(--primary)]/15 text-[var(--primary)] border border-[var(--primary)]/30"
            }`}
          >
            {project.status === "Production" ? (
              <Lock className="w-3 h-3" />
            ) : (
              <Sparkles className="w-3 h-3" />
            )}
            {project.status}
          </span>
        </div>

        {/* Title + company */}
        <h4 className="text-xl md:text-2xl font-bold tracking-tight mb-1.5 pr-2">
          {project.title}
        </h4>
        <p className="text-xs font-medium text-[var(--foreground-muted)] mb-3">
          {project.role} · {project.company}
          {project.metric && (
            <>
              <span className="mx-2 opacity-40">|</span>
              <span className="text-[var(--primary)]">{project.metric}</span>
            </>
          )}
        </p>

        <p className="text-sm md:text-[15px] text-[var(--foreground-muted)] leading-relaxed">
          {project.description}
        </p>

        {/* Collapsed tech preview */}
        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          {collapsedTech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-[var(--background-elevated)]/60 border border-[var(--border-color)] text-[var(--foreground-muted)]"
            >
              {t}
            </span>
          ))}
          {hiddenTechCount > 0 && !open && (
            <span className="px-2 py-0.5 text-[10px] font-semibold rounded-md text-[var(--primary)]">
              +{hiddenTechCount} more
            </span>
          )}
        </div>

        {/* Expandable detail */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="detail"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-6 mt-5 border-t border-[var(--border-color)]">
                {/* Key features */}
                <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-[var(--foreground-muted)] mb-3">
                  <Layers className="w-3.5 h-3.5 text-[var(--primary)]" />
                  Key Features
                </p>
                <ul className="space-y-2 mb-6">
                  {project.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[var(--primary)] shrink-0 mt-0.5" />
                      <span className="text-[13px] leading-relaxed text-[var(--foreground)]/85">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Full tech stack */}
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--foreground-muted)] mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--foreground)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Impact highlight */}
                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-emerald-500/8 border border-emerald-500/20">
                  <Activity className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-[13px] leading-relaxed text-[var(--foreground)]">
                    {project.highlight}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand / collapse affordance */}
        <div className="mt-5 pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
          <span className="text-xs font-semibold text-[var(--primary)]">
            {open ? "Show less" : "View details"}
          </span>
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex"
            >
              <ChevronDown className="w-4 h-4" />
            </motion.span>
          </span>
        </div>
      </button>
    </motion.article>
  );
}
