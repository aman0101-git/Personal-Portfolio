"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Neon Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-[var(--primary)]/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center z-10">
        
        {/* 'Available for work' Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-medium">Available for new opportunities</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          Hi, I'm <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-purple-500">
            Aman Undre
          </span>
        </motion.h1>

        {/* Subtitle / Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-2xl text-slate-500 dark:text-slate-400 max-w-2xl mb-10"
        >
          Full-Stack Developer focused on building scalable internal tools and business systems, with hands-on experience delivering production-level applications used by 50+ users.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link 
            href="#projects"
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--foreground)] text-[var(--background)] font-semibold hover:scale-105 transition-transform duration-300"
          >
            View My Work <ArrowRight className="w-4 h-4" />
          </Link>
          
          <Link 
            href="/resume.pdf" 
            target="_blank"
            className="flex items-center gap-2 px-8 py-4 rounded-full border border-[var(--border-color)] hover:bg-[var(--card-bg)] font-semibold hover:scale-105 transition-transform duration-300"
          >
            Download Resume <Download className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-6 mt-12"
        >
          <Link href="https://github.com/aman0101-git" target="_blank" className="text-slate-500 hover:text-[var(--primary)] transition-colors duration-300">
            <Github className="w-7 h-7" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/aman-undre-0a1b0c1d/" target="_blank" className="text-slate-500 hover:text-[var(--primary)] transition-colors duration-300">
            <Linkedin className="w-7 h-7" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}