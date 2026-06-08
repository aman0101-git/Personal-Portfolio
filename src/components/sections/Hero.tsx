"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Sparkles } from "lucide-react";
import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";
import GlowOrbs from "@/components/ui/GlowOrbs";

/* --------------------------------------------------------------
   Framer Motion variants — one parent container fades+stagger,
   children just declare `variants={item}`. Keeps the JSX clean
   and the reveal feels deliberately choreographed.
   -------------------------------------------------------------- */
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Animated mesh-gradient + drifting orbs backdrop */}
      <div className="mesh-bg" aria-hidden>
        <span />
      </div>
      <GlowOrbs variant="hero" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center z-10"
      >
        {/* "Available" status pill */}
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8"
        >
          <span className="relative flex">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-soft-pulse" />
          </span>
          <span className="text-xs sm:text-sm font-medium text-[var(--foreground-muted)]">
            Available for new opportunities · Pune, IN
          </span>
        </motion.div>

        {/* Eyebrow line */}
        <motion.p
          variants={item}
          className="text-sm font-mono tracking-widest uppercase text-[var(--foreground-muted)] mb-4 flex items-center gap-2"
        >
          <Sparkles className="w-3.5 h-3.5 text-[var(--primary)]" />
          Full-Stack Software Developer
        </motion.p>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.03em] leading-[1.05] mb-6 text-balance max-w-4xl"
        >
          <span className="block text-[var(--foreground)]">Hi, I&apos;m Aman.</span>
          <span className="block gradient-text">I build systems that scale.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          variants={item}
          className="text-base md:text-lg text-[var(--foreground-muted)] max-w-xl mb-10 leading-relaxed text-balance"
        >
          Full-stack developer architecting production enterprise platforms —
          agent, collections, quality-audit and HR systems — used daily by{" "}
          <span className="text-[var(--foreground)] font-semibold">
            50+ operators
          </span>{" "}
          to run real-world business workflows.
        </motion.p>

        {/* CTA buttons (magnetic on desktop, scale-tap on mobile) */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center gap-4 mb-14"
        >
          <MagneticButton strength={16}>
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--foreground)] text-[var(--background)] font-semibold shadow-lg hover:shadow-[0_0_32px_var(--glow)] active:scale-95 transition-all"
            >
              View My Work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </MagneticButton>

          <MagneticButton strength={12}>
            <Link
              href="/Aman_Undre_Resume.pdf"
              target="_blank"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass hover:border-[var(--primary)] font-semibold active:scale-95 transition-colors"
            >
              Download Resume
              <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </Link>
          </MagneticButton>
        </motion.div>

        {/* Social row */}
        <motion.div variants={item} className="flex items-center gap-6">
          <Link
            href="https://github.com/aman0101-git"
            target="_blank"
            aria-label="GitHub"
            className="text-[var(--foreground-muted)] hover:text-[var(--primary)] hover:-translate-y-0.5 transition-all"
          >
            <Github className="w-6 h-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/aman-undre-0a1b0c1d/"
            target="_blank"
            aria-label="LinkedIn"
            className="text-[var(--foreground-muted)] hover:text-[var(--primary)] hover:-translate-y-0.5 transition-all"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          variants={item}
          className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[var(--foreground-muted)]"
        >
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase">
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-[var(--primary)] to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
