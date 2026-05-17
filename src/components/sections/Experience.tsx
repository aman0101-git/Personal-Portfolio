"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronRight,
  Building2,
  Laptop,
} from "lucide-react";
import { useGsapScroll } from "@/lib/useGsap";

const experiences = [
  {
    id: 1,
    role: "Full-Stack Developer",
    company: "Firstclose Solutions",
    type: "Full-time",
    location: "Pune, Maharashtra, India · On-site",
    duration: "Dec 2025 - Present",
    icon: Building2,
    description: [
      "Designed and built three production internal platforms (AMS, CMS, HRMS) used by company operations to manage agents, customers, and workflow tracking.",
      "Developed a custom dialer-integrated Customer & Agent Management System enabling 50+ operational agents to manage real estate and financial collection workflows efficiently.",
      "Owned the entire SDLC including requirement gathering, system architecture, database schema design, API development, UI implementation, testing, and deployment.",
    ],
    skills: ["React.js", "Node.js", "Express.js", "MySQL", "Full-Stack Architecture"],
  },
  {
    id: 2,
    role: "Software Development Engineer",
    company: "Fingspace",
    type: "Internship",
    location: "Remote",
    duration: "Jun 2025 - Nov 2025",
    icon: Laptop,
    description: [
      "Developed production-ready full-stack web applications using the MERN stack, significantly improving application performance and scalability.",
      "Contributed to end-to-end development, including PRD analysis, architecture planning, database design, frontend UI development, and backend API implementation.",
      "Collaborated with cross-functional teams to debug issues, deploy updates using Git/GitHub, and improve code quality through code reviews.",
    ],
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "Git/GitHub", "API Development"],
  },
];

function calculateDuration(durationText: string) {
  if (!durationText) return "";
  const [startStr, endStr] = durationText.split(" - ");
  if (!startStr || !endStr) return "";
  const startDate = new Date(startStr);
  const endDate = endStr.trim().toLowerCase() === "present" ? new Date() : new Date(endStr);
  const totalMonths =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth()) +
    1;
  if (totalMonths >= 12) {
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    return months === 0 ? `${years} yr` : `${years} yr ${months} mos`;
  }
  return `${totalMonths} mos`;
}

export default function Experience() {
  /* GSAP refs */
  const sectionRef = useRef<HTMLElement>(null);
  const railRef = useRef<HTMLDivElement>(null);

  /* --------------------------------------------------------------
     GSAP ScrollTrigger choreography:
       1. The vertical timeline rail draws itself top-to-bottom as you
          scroll through the section (scaleY 0 -> 1 with scrub).
       2. Each `.exp-card` floats up + fades in when its trigger hits
          85% of the viewport.
       3. Each `.exp-dot` pulses to indicate "active" position.
     useGsapScroll auto-bails on `prefers-reduced-motion` and cleans
     itself up via gsap.context().
     -------------------------------------------------------------- */
  useGsapScroll(sectionRef, (gsap) => {
    if (!railRef.current) return;

    gsap.fromTo(
      railRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 70%",
          scrub: 0.6,
        },
      },
    );

    gsap.utils.toArray<HTMLElement>(".exp-card").forEach((card, i) => {
      gsap.from(card, {
        y: 80,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: i * 0.05,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Subtle parallax — card drifts up slightly faster than scroll
      gsap.to(card.querySelector(".exp-card-inner"), {
        y: -28,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    gsap.utils.toArray<HTMLElement>(".exp-dot").forEach((dot) => {
      gsap.to(dot, {
        scale: 1.15,
        boxShadow: "0 0 24px var(--glow)",
        scrollTrigger: {
          trigger: dot,
          start: "top 60%",
          end: "bottom 40%",
          toggleActions: "play reverse play reverse",
        },
      });
    });
  });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background glows */}
      <div
        className="orb"
        style={{
          top: "20%",
          left: "-10%",
          width: "30vmax",
          height: "30vmax",
          background: "radial-gradient(circle, var(--mesh-1), transparent 70%)",
          opacity: 0.3,
        }}
      />
      <div
        className="orb"
        style={{
          bottom: "0",
          right: "-5%",
          width: "28vmax",
          height: "28vmax",
          background: "radial-gradient(circle, var(--mesh-2), transparent 70%)",
          opacity: 0.25,
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 md:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-sm tracking-[0.3em] text-[var(--primary)] mb-3 font-semibold uppercase"
          >
            Career Journey
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Professional <span className="gradient-text">Experience</span>
          </motion.h3>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* The vertical rail (origin-top so GSAP can scale it from the top) */}
          <div className="absolute left-[19px] md:left-[23px] top-2 bottom-0 w-[2px] origin-top">
            <div className="absolute inset-0 bg-[var(--border-color)]" />
            <div
              ref={railRef}
              className="absolute inset-0 origin-top bg-gradient-to-b from-[var(--primary)] via-[var(--accent)] to-transparent"
            />
          </div>

          <div className="flex flex-col gap-12 md:gap-16">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.id} exp={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp }: { exp: (typeof experiences)[0] }) {
  const Icon = exp.icon;
  const calculatedTime = calculateDuration(exp.duration);

  return (
    <div className="exp-card relative pl-12 md:pl-20 group">
      {/* Timeline dot */}
      <div className="exp-dot absolute left-0 top-1 md:top-2 w-10 h-10 md:w-12 md:h-12 rounded-full glass flex items-center justify-center z-10 transition-transform">
        <Icon className="w-4 h-4 md:w-5 md:h-5 text-[var(--primary)]" />
      </div>

      {/* Card (the GSAP parallax target) */}
      <div className="exp-card-inner relative p-6 md:p-8 rounded-2xl glass shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)] hover:border-[var(--primary)] hover:shadow-[0_20px_60px_-16px_var(--glow)] transition-all duration-500">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
          <div>
            <h4 className="text-xl md:text-2xl font-bold group-hover:text-[var(--primary)] transition-colors">
              {exp.role}
            </h4>
            <div className="flex flex-wrap items-center gap-2 mt-2 text-base font-medium text-[var(--foreground-muted)]">
              <Briefcase className="w-4 h-4 text-[var(--primary)]" />
              <span className="text-[var(--foreground)]">{exp.company}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20">
                {exp.type}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-1.5 text-sm">
            <div className="flex items-center gap-2 md:justify-end text-[var(--foreground-muted)]">
              <Calendar className="w-4 h-4" />
              <span>
                {exp.duration}
                <span className="opacity-60"> · {calculatedTime}</span>
              </span>
            </div>
            <div className="flex items-center gap-2 md:justify-end text-[var(--foreground-muted)]">
              <MapPin className="w-4 h-4" />
              <span>{exp.location}</span>
            </div>
          </div>
        </div>

        {/* Bullets */}
        <ul className="space-y-3 mb-6">
          {exp.description.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[var(--foreground-muted)]"
            >
              <ChevronRight className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border-color)]">
          {exp.skills.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm rounded-full border border-[var(--border-color)] bg-[var(--background-elevated)]/60 text-[var(--foreground-muted)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
