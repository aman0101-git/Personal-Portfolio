"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, ArrowRight, X, PhoneCall, Users, Database, ShieldCheck, Activity, Plane, Code2 } from "lucide-react";

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
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedProject]);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)]/5 blur-[150px] -z-10 rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:text-center flex flex-col items-start md:items-center">
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

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col h-full rounded-3xl border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-sm overflow-hidden hover:border-[var(--primary)] hover:shadow-[0_0_30px_var(--glow)] transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Abstract Visual Header */}
                <div className={`relative h-56 w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center border-b border-[var(--border-color)] overflow-hidden`}>
                  
                  {/* Badges */}
                  <div className="absolute top-4 right-4 flex gap-2 z-10">
                    <div className="bg-slate-900/80 dark:bg-black/60 text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-md border border-white/10 shadow-sm">
                      {project.id === "pilot-prep" ? <Code2 className="w-3 h-3 text-sky-400" /> : <Lock className="w-3 h-3 text-emerald-400" />} 
                      {project.company}
                    </div>
                  </div>
                  
                  {/* Floating Icon Animation */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative z-10 p-6 rounded-2xl bg-[var(--background)]/80 backdrop-blur-md border border-[var(--border-color)] shadow-lg"
                  >
                    <Icon className="w-14 h-14 text-[var(--primary)]" />
                  </motion.div>

                  <div className="absolute inset-0 opacity-[0.03] dark:opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--foreground) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                </div>

                {/* Card Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-sm font-semibold text-[var(--primary)] mb-2 uppercase tracking-wider">{project.category}</div>
                  <h4 className="text-2xl font-bold text-[var(--foreground)] mb-3">{project.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack Preview */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.slice(0, 4).map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 text-xs font-semibold rounded-md bg-[var(--background)] text-slate-700 dark:text-slate-300 border border-[var(--border-color)]">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-3 py-1.5 text-xs font-semibold rounded-md bg-[var(--background)] text-slate-500 border border-[var(--border-color)]">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="mt-auto flex items-center gap-2 text-[var(--primary)] font-semibold group-hover:gap-3 transition-all">
                    Read Case Study <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Expandable Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-md bg-slate-900/40 dark:bg-black/60"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-[var(--border-color)] bg-[var(--background)] shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()} 
            >
              {/* Modal Header */}
              <div className="sticky top-0 z-20 flex items-center justify-between p-6 md:p-8 border-b border-[var(--border-color)] bg-[var(--background)]/80 backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-[var(--primary)]/10">
                    <selectedProject.icon className="w-8 h-8 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-3xl font-bold text-[var(--foreground)]">{selectedProject.fullTitle}</h3>
                    <p className="text-[var(--primary)] font-medium mt-1">{selectedProject.company}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors text-slate-500 hover:text-[var(--foreground)]"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 flex flex-col gap-8">
                
                {/* Impact Metric */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-[var(--primary)]/5 border border-[var(--primary)]/20">
                  <Activity className="w-6 h-6 text-[var(--primary)] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[var(--primary)] uppercase tracking-wider mb-1">Business Impact</h4>
                    <p className="text-[var(--foreground)] font-medium leading-relaxed">{selectedProject.impact}</p>
                  </div>
                </div>

                {/* Key Features List */}
                <div>
                  <h4 className="text-xl font-bold text-[var(--foreground)] mb-4">Architecture & Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 p-4 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)]">
                        <ShieldCheck className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Full Tech Stack */}
                <div>
                  <h4 className="text-xl font-bold text-[var(--foreground)] mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.techStack.map((tech, i) => (
                      <span key={i} className="px-4 py-2 text-sm font-semibold rounded-xl bg-[var(--card-bg)] text-[var(--foreground)] border border-[var(--border-color)] shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}