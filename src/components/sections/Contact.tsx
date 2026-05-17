"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  Send,
  Check,
  Loader2,
} from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import GlowOrbs from "@/components/ui/GlowOrbs";

/* --------------------------------------------------------------
   Shared reveal variant — same easing curve and stagger cadence
   used across the rest of the portfolio (Hero, About, Skills).
   -------------------------------------------------------------- */
const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

/* Real contact handles for Aman — replaces the placeholder values. */
const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "aman.undre01@gmail.com",
    href: "mailto:aman.undre01@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/aman-undre",
    href: "https://www.linkedin.com/in/aman-undre-0a1b0c1d/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/aman0101-git",
    href: "https://github.com/aman0101-git",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /* --------------------------------------------------------------
     Web3Forms submission — the project's real backend.
     Same access key, same toast UX, same 4-second auto-dismiss as
     the rest of the portfolio's existing behavior.
     -------------------------------------------------------------- */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const body = new FormData(e.currentTarget);
      body.append("access_key", "79b9c84c-fdb3-42d0-9b5d-d89be97ef17a");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body,
      });
      const data = await response.json();

      if (data.success) {
        setFormData({ name: "", email: "", message: "" });
        (e.target as HTMLFormElement).reset();
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
      } else {
        console.error("Form error:", data);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Animated mesh + soft contact-variant orb backdrop */}
      <div className="mesh-bg" aria-hidden>
        <span />
      </div>
      <GlowOrbs variant="contact" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* ============== HEADING ============== */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="mb-16 md:text-center flex flex-col md:items-center"
        >
          <motion.p
            custom={0}
            variants={reveal}
            className="text-sm tracking-[0.3em] text-[var(--primary)] mb-3 font-semibold uppercase"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            custom={1}
            variants={reveal}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
          >
            Let&apos;s build something{" "}
            <span className="gradient-text">together.</span>
          </motion.h2>
          <motion.p
            custom={2}
            variants={reveal}
            className="text-base md:text-lg text-[var(--foreground-muted)] max-w-2xl"
          >
            Have a project in mind or want to collaborate? I&apos;m currently
            open to new opportunities — drop a message and I&apos;ll get back
            to you shortly.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
          {/* ============== CONTACT FORM ============== */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            className="rounded-3xl glass-strong p-6 sm:p-8 md:p-10 relative overflow-hidden"
            suppressHydrationWarning
          >
            <motion.form
              custom={0}
              variants={reveal}
              onSubmit={handleSubmit}
              className="space-y-6"
              suppressHydrationWarning
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[var(--foreground-muted)] mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  suppressHydrationWarning
                  className="w-full px-4 py-2.5 rounded-lg bg-[var(--background-elevated)]/60 border border-[var(--border-color)] text-[var(--foreground)] placeholder-[var(--foreground-muted)] focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/30 transition-all disabled:opacity-50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[var(--foreground-muted)] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  suppressHydrationWarning
                  className="w-full px-4 py-2.5 rounded-lg bg-[var(--background-elevated)]/60 border border-[var(--border-color)] text-[var(--foreground)] placeholder-[var(--foreground-muted)] focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/30 transition-all disabled:opacity-50"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[var(--foreground-muted)] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  disabled={isSubmitting}
                  suppressHydrationWarning
                  className="w-full px-4 py-2.5 rounded-lg bg-[var(--background-elevated)]/60 border border-[var(--border-color)] text-[var(--foreground)] placeholder-[var(--foreground-muted)] focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/30 transition-all resize-none disabled:opacity-50"
                  placeholder="Project details or just say hi..."
                />
              </div>

              {/* Honeypot — keeps Web3Forms spam filter happy */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
                tabIndex={-1}
                aria-hidden
              />

              <motion.div custom={1} variants={reveal}>
                <MagneticButton strength={14}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    suppressHydrationWarning
                    className="group inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg bg-[var(--foreground)] text-[var(--background)] font-semibold transition-all duration-300 hover:shadow-[0_0_32px_var(--glow)] active:scale-95 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        Sending
                        <Loader2 className="w-4 h-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </MagneticButton>
              </motion.div>
            </motion.form>
          </motion.div>

          {/* ============== CONTACT LINKS ============== */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            className="flex flex-col justify-center space-y-4"
          >
            {contactLinks.map((link, idx) => {
              const Icon = link.icon;
              const isExternal = link.href.startsWith("http");
              return (
                <motion.a
                  key={link.label}
                  custom={idx}
                  variants={reveal}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 p-4 rounded-2xl glass hover:border-[var(--primary)] hover:shadow-[0_12px_40px_-12px_var(--glow)] transition-all duration-500"
                  aria-label={`${link.label}: ${link.value}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/15 border border-[var(--primary)]/25 flex items-center justify-center shrink-0 group-hover:bg-[var(--primary)]/25 transition-colors">
                    <Icon className="w-5 h-5 text-[var(--primary)]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-wider text-[var(--foreground-muted)] mb-0.5">
                      {link.label}
                    </p>
                    <p className="font-semibold text-[var(--foreground)] truncate">
                      {link.value}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[var(--foreground-muted)] shrink-0 group-hover:text-[var(--primary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </motion.a>
              );
            })}

            {/* Location card */}
            <motion.div
              custom={contactLinks.length}
              variants={reveal}
              className="p-4 rounded-2xl glass border-dashed"
            >
              <p className="text-xs uppercase tracking-wider text-[var(--foreground-muted)] mb-1">
                Based in
              </p>
              <p className="font-semibold text-[var(--foreground)]">
                Pune, Maharashtra · India
              </p>
              <p className="text-xs text-[var(--foreground-muted)] mt-1">
                Open to remote and on-site opportunities
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ============== SUCCESS TOAST ============== */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl glass-strong border border-emerald-500/30 shadow-2xl md:max-w-sm mx-auto"
          >
            <div className="p-2 rounded-full bg-emerald-500/20 shrink-0">
              <Check className="w-5 h-5 text-emerald-500" />
            </div>
            <div>
              <p className="font-semibold text-sm">Message Sent!</p>
              <p className="text-[var(--foreground-muted)] text-xs">
                I will get back to you shortly.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
