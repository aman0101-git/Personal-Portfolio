"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Activity, Users, Database, ShieldCheck, Plane, Code2, PhoneCall, ChevronRight } from "lucide-react";

const projects = [
  {
    id: "ams",
    title: "Agent Management System",
    fullTitle: "AMS: Centralized Agent Workflow & Operations",
    company: "Firstclose Solutions",
    category: "Operations Platform",
    icon: PhoneCall,
    gradient: "from-blue-500/20 to-purple-500/20",
    description: "A full-stack, production-level application designed to replace fragmented manual workflows with a centralized platform for managing customer data, follow-ups, and daily team operations.",
    impact: "Actively used by 30+ users in a real business environment, significantly improving operational efficiency by reducing manual effort and increasing data visibility.",
    techStack: ["React.js", "Node.js", "Express", "MySQL", "TypeScript"],
    features: [
      "Comprehensive customer and lead management with structured follow-up tracking.",
      "Real-time dashboards for live supervisor monitoring and team performance metrics.",
      "Advanced search, filtering, and custom reporting tools for workflow monitoring.",
      "Role-Based Access Control (RBAC) ensuring secure data handling between agents and supervisors."
    ]
  },
  {
    id: "cms",
    title: "Customer Management System",
    fullTitle: "CMS: BPO & Loan Collection Management Platform",
    company: "Firstclose Solutions",
    category: "Enterprise Web Application",
    icon: Database,
    gradient: "from-emerald-500/20 to-teal-500/20",
    description: "A comprehensive full-stack application designed to systematically handle customer data, automate case allocation, manage agent interactions, and track employee performance in real-time.",
    impact: "Actively used by 20+ users, boosted operational efficiency by automating workflows, eliminating manual spreadsheet tracking, and providing team leaders with real-time analytics and complete audit trails for high-volume outreach.",
    techStack: [
      "React (Vite)",
      "Tailwind CSS",
      "Node.js & Express",
      "MySQL",
      "REST APIs"
    ],
    features: [
      "Automated massive dataset ingestion and systematic case allocation across multiple agents.",
      "Target-driven campaign management for logical grouping of leads.",
      "Isolated agent workspace for logging call outcomes, dispositions, and scheduling callbacks.",
      "Live oversight mechanism with real-time monitoring and performance analytics."
    ]
  },
  {
    id: "hrms",
    title: "HR Management System",
    fullTitle: "HRMS: Centralized Human Resources & Candidate Platform",
    company: "Firstclose Solutions",
    category: "Internal Tool / Portal",
    icon: Users,
    gradient: "from-indigo-500/20 to-blue-500/20",
    description: "A full-stack, role-based platform designed to securely manage human resources workflows, candidate tracking, and organizational data across Admin, Supervisor, and HR roles.",
    impact: "Streamlines internal HR operations by providing role-specific dashboards, secure JWT authentication, and automated form validations, drastically improving administrative efficiency.",
    techStack: [
      "React (Vite) & TypeScript",
      "Tailwind CSS & Radix UI",
      "Node.js & Express",
      "MySQL"
    ],
    features: [
      "Role-Based Access Control (RBAC) with secure JWT authentication for Admins, Supervisors, and HR staff.",
      "Candidate tracking and lead management workflows with robust schema validation using Zod and React Hook Form.",
      "Excel data ingestion capabilities for processing bulk candidate and employee records using ExcelJS.",
      "Strict end-to-end type safety utilizing TypeScript to ensure reliable data handling and minimized runtime errors."
    ]
  },
  {
    id: "pilot-prep",
    title: "Pilot Preparation App",
    fullTitle: "Aviation EdTech Platform",
    company: "Fingspace (Internship)",
    category: "EdTech Application",
    icon: Plane,
    gradient: "from-indigo-500/20 to-sky-500/20",
    description: "A comprehensive preparation platform designed to assist aviation students with study materials, practice tests, and progress tracking.",
    impact: "Engineered scalable backend architectures and dynamic frontend components during an intensive 6-month internship.",
    techStack: ["React.js", "Node.js", "Express", "MongoDB", "MERN Stack"],
    features: [
      "Dynamic quiz and assessment generation engine.",
      "User progress tracking and performance analytics.",
      "Secure authentication and user profile management.",
      "Collaborative development using Agile/Git workflows."
    ]
  }
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)]/5 blur-[150px] -z-10 rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 blur-[150px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 md:text-center flex flex-col items-start md:items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="text-sm tracking-widest text-[var(--primary)] mb-2 font-semibold uppercase"
          >
            Commercial & Enterprise
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] max-w-2xl"
          >
            Production <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-purple-500">Systems</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl"
          >
            A suite of secure, full-stack platforms built to handle complex business workflows, data compliance, and operational scaling.
          </motion.p>
        </div>

        {/* The 2026 Interactive Dashboard Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-xl shadow-2xl overflow-hidden min-h-[700px]"
        >
          
          {/* Sidebar / Top Navigation Wrapper */}
          <div className="relative w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-[var(--border-color)] bg-[var(--background)]/30 z-20">
            
            {/* Mobile Right-Edge Scroll Hint Fade */}
            <div className="absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-[var(--card-bg)] to-transparent z-30 lg:hidden pointer-events-none" />

            {/* Scrollable Container */}
            <div className="flex flex-row lg:flex-col overflow-x-auto hide-scrollbar snap-x snap-mandatory h-full">
              {projects.map((project, index) => {
                const Icon = project.icon;
                const isActive = activeIndex === index;
                
                return (
                  <button
                    key={project.id}
                    onClick={() => setActiveIndex(index)}
                    className={`group relative flex-shrink-0 w-[80%] sm:w-[45%] lg:w-full p-6 lg:p-8 flex items-center gap-5 text-left transition-all duration-300 snap-center lg:snap-align-none ${
                      isActive 
                        ? 'bg-[var(--foreground)]/5 lg:bg-transparent' // Subtle pop for active mobile tab
                        : 'hover:bg-[var(--card-bg)]/80' // Desktop hover state
                    }`}
                    suppressHydrationWarning
                  >
                    {/* The Framer Motion sliding active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/10 to-transparent border-b-2 lg:border-b-0 lg:border-l-2 border-[var(--primary)] z-0"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    {/* Icon Container with Hover Reactive Colors */}
                    <div className={`relative z-10 p-3 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-[var(--primary)]/20 shadow-[0_0_15px_var(--glow)] text-[var(--primary)]' 
                        : 'bg-[var(--border-color)]/50 text-slate-500 group-hover:bg-[var(--primary)]/10 group-hover:text-[var(--primary)]'
                    }`}>
                      <Icon className="w-6 h-6 transition-colors duration-300" />
                    </div>
                    
                    {/* Text Content with Hover Reactive Colors */}
                    <div className="relative z-10 flex-grow">
                      <h4 className={`text-lg font-bold transition-colors duration-300 ${
                        isActive 
                          ? 'text-[var(--foreground)]' 
                          : 'text-slate-500 dark:text-slate-400 group-hover:text-[var(--foreground)]'
                      }`}>
                        {project.title}
                      </h4>
                      <p className={`text-xs font-medium mt-1 transition-colors duration-300 ${
                        isActive 
                          ? 'text-[var(--primary)]' 
                          : 'text-slate-500 group-hover:text-[var(--primary)]/70'
                      }`}>
                        {project.category}
                      </p>
                    </div>

                    {/* Chevron Arrow (Desktop Only) - Peeks in on hover */}
                    <ChevronRight className={`hidden lg:block relative z-10 w-5 h-5 transition-all duration-300 ${
                      isActive 
                        ? 'text-[var(--primary)] opacity-100 translate-x-0' 
                        : 'text-slate-600 opacity-0 -translate-x-4 group-hover:opacity-50 group-hover:translate-x-0 group-hover:text-[var(--primary)]'
                    }`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Content Canvas */}
          <div className="w-full lg:w-2/3 relative bg-[var(--background)]/10 overflow-hidden">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--foreground) 1px, transparent 0)', backgroundSize: '32px 32px' }} />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative z-10 p-6 md:p-10 h-full flex flex-col"
              >
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-900 dark:bg-white text-white dark:text-black flex items-center gap-1.5">
                        {activeProject.id === "pilot-prep" ? <Code2 className="w-3 h-3" /> : <Lock className="w-3 h-3" />} 
                        {activeProject.company}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-4xl font-bold text-[var(--foreground)] tracking-tight mb-4">
                      {activeProject.fullTitle}
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                      {activeProject.description}
                    </p>
                  </div>
                </div>

                {/* Bento Grid Info Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
                  
                  {/* Impact Card */}
                  <div className="col-span-1 md:col-span-2 p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[50px] rounded-full transition-transform duration-700 group-hover:scale-150" />
                    <div className="flex items-start gap-4 relative z-10">
                      <div className="p-3 rounded-xl bg-emerald-500/10 shrink-0">
                        <Activity className="w-6 h-6 text-emerald-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-emerald-500 uppercase tracking-wider mb-2">Business Impact</h4>
                        <p className="text-[var(--foreground)] font-medium leading-relaxed">
                          {activeProject.impact}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Architecture & Features */}
                  <div className="col-span-1 flex flex-col p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)]">
                    <h4 className="text-base font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-[var(--primary)]" /> Core Features
                    </h4>
                    <ul className="flex flex-col gap-3">
                      {activeProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-1.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="col-span-1 flex flex-col p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)]">
                    <h4 className="text-base font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                      <Code2 className="w-5 h-5 text-[var(--primary)]" /> Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {activeProject.techStack.map((tech, i) => (
                        <span key={i} className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[var(--background)] text-[var(--foreground)] border border-[var(--border-color)] shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </motion.div>
      </div>

      {/* Global CSS for hiding scrollbar on the mobile tabs while keeping functionality */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}