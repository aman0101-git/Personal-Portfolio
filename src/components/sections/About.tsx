"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { Code2, MapPin, GraduationCap, Layers } from "lucide-react";

/* --------------------------------------------------------------
   ASYMMETRIC GRID — on desktop we use a 12-col layout where the
   profile card takes 5 columns and rises slightly, while the
   narrative takes 7 columns and sits lower. Stats card breaks the
   grid to span across both columns at the bottom.
   -------------------------------------------------------------- */

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

const stats = [
  { value: "50+", label: "Daily Users Served", icon: Layers },
  { value: "3", label: "Production Platforms", icon: Code2 },
  { value: "2025", label: "Year of Graduation", icon: GraduationCap },
  { value: "Pune, IN", label: "Based In", icon: MapPin },
];

export default function About() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="orb"
        style={{
          top: "20%",
          right: "-10%",
          width: "32vmax",
          height: "32vmax",
          background: "radial-gradient(circle, var(--mesh-1), transparent 70%)",
          opacity: 0.3,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16 md:mb-24"
        >
          <p className="text-sm tracking-[0.3em] text-[var(--primary)] mb-3 font-semibold uppercase">
            About
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Engineering <span className="gradient-text">that solves real problems.</span>
          </h2>
        </motion.div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Profile card — col 1-5, slightly raised */}
          <motion.div
            custom={0}
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5 lg:-mt-8 flex justify-center lg:justify-start"
          >
            <div
              onClick={() => setIsFlipped((s) => !s)}
              className={`relative group w-72 h-[360px] md:w-80 md:h-[400px] lg:w-full lg:max-w-md lg:h-[520px] rounded-3xl overflow-hidden glass-strong cursor-pointer transition-all duration-500 ${
                isFlipped
                  ? "-translate-y-2 border-[var(--primary)] shadow-[0_20px_60px_-12px_var(--glow)]"
                  : "lg:hover:-translate-y-2 lg:hover:border-[var(--primary)] lg:hover:shadow-[0_20px_60px_-12px_var(--glow)]"
              }`}
            >
              <Image
                src="/profile1.jpg"
                alt="Aman Undre"
                fill
                className={`object-cover transition-transform duration-700 ${
                  isFlipped ? "scale-105" : "lg:group-hover:scale-105"
                }`}
                sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 448px"
                priority
              />

              {/* Slide-up overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/90 to-transparent p-6 flex flex-col justify-end items-center text-center transition-all duration-500 ${
                  isFlipped
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8 lg:group-hover:opacity-100 lg:group-hover:translate-y-0"
                }`}
              >
                <div className="p-3 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] mb-3 shadow-[0_0_15px_var(--glow)]">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Aman Undre</h3>
                <p className="text-md font-medium text-[var(--primary)] mb-3">
                  Full-Stack SDE
                </p>
                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed mb-5">
                  Building scalable internal systems, APIs and robust UIs at
                  Firstclose Solutions.
                </p>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {["React", "Node", "Express", "MongoDB"].map((t) => (
                    <span
                      key={t}
                      className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[var(--foreground)] text-[var(--background)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Narrative — col 6-12 */}
          <motion.div
            custom={1}
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7 space-y-6 text-base md:text-lg text-[var(--foreground-muted)] leading-relaxed"
          >
            <p>
              I build software that solves real business problems, not just
              projects for the showcase. Currently working as a Full-Stack
              Developer at{" "}
              <span className="text-[var(--foreground)] font-semibold">
                Firstclose Solutions
              </span>
              , I&apos;ve designed and developed multiple internal systems
              (AMS, CMS, HRMS) used daily by 50+ agents to manage operations,
              customer data and workflows.
            </p>
            <p>
              My journey started with data analytics and visualization, but I
              quickly transitioned into development to build the systems
              behind those insights. Today I combine a data-driven mindset
              with strong full-stack engineering to ship scalable, practical
              and performance-focused applications.
            </p>
            <p>
              With nearly a year of hands-on industry experience, I focus on
              reliable systems, workflow optimization and continuously
              improving my problem-solving through DSA and system design.
            </p>
          </motion.div>

          {/* Stats — full-width strip below grid */}
          <motion.div
            custom={2}
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="group p-5 rounded-2xl glass hover:border-[var(--primary)] hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-[var(--primary)] mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-2xl mb-1 tracking-tight">
                    {s.value}
                  </h4>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    {s.label}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
