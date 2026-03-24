"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight, Building2, Laptop } from "lucide-react";

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
      "Owned the entire software development lifecycle including requirement gathering, system architecture, database schema design, API development, UI implementation, testing, and deployment."
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
      "Collaborated with cross-functional teams to debug issues, deploy updates using Git/GitHub, and improve code quality through code reviews."
    ],
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "Git/GitHub", "API Development"],
  }
];

// Helper function to calculate duration dynamically
function calculateDuration(durationText: string) {
  if (!durationText) return "";
  const [startStr, endStr] = durationText.split(" - ");
  if (!startStr || !endStr) return "";

  const startDate = new Date(startStr);
  const endDate = endStr.trim().toLowerCase() === "present" ? new Date() : new Date(endStr);

  // Calculate total months (+1 to make it inclusive, e.g., Jun-Nov is 6 months)
  const totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth()) + 1;
  
  if (totalMonths >= 12) {
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    return months === 0 ? `${years} yr` : `${years} yr ${months} mos`;
  }
  return `${totalMonths} mos`;
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[600px] bg-[var(--primary)]/5 blur-[120px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-sm tracking-widest text-[var(--primary)] mb-2 font-semibold uppercase"
          >
            Career Journey
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]"
          >
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-purple-500">Experience</span>
          </motion.h3>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* The vertical timeline line */}
          <div className="absolute left-[19px] md:left-[23px] top-2 bottom-0 w-[2px] bg-gradient-to-b from-[var(--primary)] via-[var(--border-color)] to-transparent" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// Separate component for the card to keep the code clean and handle individual animations
function ExperienceCard({ exp, index }: { exp: typeof experiences[0], index: number }) {
  const Icon = exp.icon;
  const calculatedTime = calculateDuration(exp.duration);

  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative pl-12 md:pl-16 group"
    >
      {/* Timeline Node (The glowing dot/icon on the line) */}
      <div className="absolute left-0 top-1 md:top-2 w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-[var(--background)] bg-[var(--card-bg)] shadow-[0_0_15px_var(--glow)] flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110 group-hover:border-[var(--primary)]">
        <Icon className="w-4 h-4 md:w-5 md:h-5 text-[var(--primary)]" />
      </div>

      {/* Experience Content Card */}
      <div className="p-6 md:p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-sm transition-all duration-300 hover:border-[var(--primary)] hover:shadow-[0_0_20px_var(--glow)]">
        
        {/* Header: Role and Company */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
          <div>
            <h4 className="text-xl md:text-2xl font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
              {exp.role}
            </h4>
            <div className="flex items-center gap-2 mt-1 text-lg font-medium text-slate-700 dark:text-slate-300">
              <Briefcase className="w-4 h-4 text-[var(--primary)]" />
              <span>{exp.company}</span>
              <span className="text-sm px-2 py-0.5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] ml-2">
                {exp.type}
              </span>
            </div>
          </div>
          
          {/* Metadata: Date and Location */}
          <div className="flex flex-col gap-1.5 text-sm font-medium">
            <div className="flex items-center gap-2 md:justify-end text-slate-500 dark:text-slate-400">
              <Calendar className="w-4 h-4" />
              <span>
                {exp.duration} <span className="text-slate-400 dark:text-slate-500">· {calculatedTime}</span>
              </span>
            </div>
            <div className="flex items-center gap-2 md:justify-end text-slate-500 dark:text-slate-400">
              <MapPin className="w-4 h-4" />
              <span>{exp.location}</span>
            </div>
          </div>
        </div>

        {/* Responsibilities / Achievements */}
        <ul className="space-y-3 mb-6">
          {exp.description.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
              <ChevronRight className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack Used at this job */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border-color)]">
          {exp.skills.map((skill, i) => (
            <span 
              key={i}
              className="px-3 py-1 text-sm rounded-full border border-[var(--border-color)] bg-[var(--background)] text-slate-600 dark:text-slate-300 hover:border-[var(--primary)] transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>

      </div>
    </motion.div>
  );
}