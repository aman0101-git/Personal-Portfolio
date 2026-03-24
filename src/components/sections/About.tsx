"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Code2 } from "lucide-react";

export default function About() {
  // Use state to track hover, required for smooth framer-motion flips
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            About <span className="text-[var(--primary)]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-[var(--primary)] rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Interactive Overlay Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2, // Slight delay for the dramatic entrance
              ease: [0.16, 1, 0.3, 1] // Custom smooth easing
            }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            {/* The Base Card Container */}
            <div className="relative flex-shrink-0 group w-72 h-[360px] md:w-80 md:h-[400px] lg:w-96 lg:h-[480px] rounded-2xl overflow-hidden border-2 border-[var(--border-color)] bg-[var(--card-bg)] shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-[var(--primary)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]">
              
              {/* Background Image */}
              <Image
                src="/profile1.jpg" 
                alt="Aman Undre"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                priority
              />

              {/* Smooth Slide-Up Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/90 to-transparent opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out p-6 flex flex-col justify-end items-center text-center pb-8">
                
                {/* Glowing Icon (Slides up slightly faster for a 3D feel) */}
                <div className="p-3 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] mb-3 shadow-[0_0_15px_rgba(0,240,255,0.2)] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  <Code2 className="w-6 h-6" />
                </div>

                {/* Text Content */}
                <h3 className="text-2xl font-bold text-[var(--foreground)] tracking-tight">Aman Undre</h3>
                <p className="text-md font-medium text-[var(--primary)] mb-3">Full-Stack SDE</p>
                
                <p className="text-sm text-slate-300 leading-relaxed px-2 mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  Building scalable internal systems, APIs, and robust UIs at Firstclose Solution.
                </p>

                {/* Tech Stack Pills (Fades in last) */}
                <div className="flex flex-wrap justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                  <span className="text-xs font-semibold px-3 py-1 bg-[var(--foreground)] text-[var(--background)] rounded-full">React.js</span>
                  <span className="text-xs font-semibold px-3 py-1 bg-[var(--foreground)] text-[var(--background)] rounded-full">Node.js</span>
                  <span className="text-xs font-semibold px-3 py-1 bg-[var(--foreground)] text-[var(--background)] rounded-full">Express.js</span>
                  <span className="text-xs font-semibold px-3 py-1 bg-[var(--foreground)] text-[var(--background)] rounded-full">MongoDB</span>
                </div>
                
              </div>
            </div>
          </motion.div>

          {/* Right Column: Your Story (Remains exactly the same) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-7 space-y-6 text-lg text-slate-500 dark:text-slate-300"
          >
            <p>
              I build software that solves real business problems, not just projects for showcase.
              Currently working as a Full-Stack Developer at Firstclose Solution, I have designed and developed multiple internal systems (AMS, CMS, HRMS) used daily by 50+ agents to manage operations, customer data, and workflows.
            </p>
            <p>
              My journey started with data analyzing & visualizing insights, but I quickly transitioned into development to build the systems behind those insights. Today, I combine a data-driven mindset with strong full-stack development skills to create scalable, practical, and performance-focused applications.
            </p>
            <p>
              With nearly a year of hands-on industry experience, I focus on building reliable systems, optimizing workflows, and continuously improving my problem-solving skills through Data Structures and system design.
            </p>
            
            {/* Quick Stats/Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6">
              <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] hover:border-[var(--primary)] transition-colors duration-300">
                <h4 className="font-bold text-[var(--primary)] text-2xl mb-1">MERN</h4>
                <p className="text-sm font-medium">Core Stack</p>
              </div>
              <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] hover:border-[var(--primary)] transition-colors duration-300">
                <h4 className="font-bold text-[var(--primary)] text-2xl mb-1">2025</h4>
                <p className="text-sm font-medium">Graduation Year</p>
              </div>
              <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] hover:border-[var(--primary)] transition-colors duration-300">
                <h4 className="font-bold text-[var(--primary)] text-2xl mb-1">Pune</h4>
                <p className="text-sm font-medium">Location</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}