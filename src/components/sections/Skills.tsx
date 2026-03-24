"use client";

import { motion } from "framer-motion";
import { 
  Code2, Database, Server, Layout, FileJson, Cpu, Globe, Terminal, 
  Palette, Brush, ShieldCheck, Send, Layers, GitBranch, Github, 
  TerminalSquare, Box, Network, RefreshCw, Cloud, Bot, LayoutTemplate
} from "lucide-react";

// 1. Frontend & UI
const frontendSkills = [
  { name: "React.js", icon: Layout },
  { name: "Next.js 15", icon: Globe },
  { name: "TypeScript", icon: FileJson },
  { name: "JavaScript", icon: Code2 },
  { name: "HTML5", icon: Globe },
  { name: "CSS3", icon: Palette },
  { name: "Tailwind CSS v4", icon: Brush },
  { name: "Bootstrap", icon: LayoutTemplate },
  { name: "Framer Motion", icon: Cpu },
];

// 2. Backend & Data
const backendSkills = [
  { name: "Node.js", icon: Server },
  { name: "Express", icon: Server },
  { name: "MongoDB", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "Java", icon: Terminal },
  { name: "RESTful APIs", icon: Network },
  { name: "JWT/OAuth", icon: ShieldCheck },
  { name: "Postman", icon: Send },
  { name: "System Architecture", icon: Layers },
];

// 3. Tools & Technologies
const toolSkills = [
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: Github },
  { name: "VS Code", icon: TerminalSquare },
  { name: "Docker", icon: Box },
  { name: "Kubernetes", icon: Network },
  { name: "CI/CD", icon: RefreshCw },
  { name: "Render", icon: Cloud },
  { name: "Copilot", icon: Bot },
];

export default function Skills() {
  // Duplicating arrays ensures the infinite scroll has no gaps
  const frontendMarquee = [...frontendSkills, ...frontendSkills];
  const backendMarquee = [...backendSkills, ...backendSkills];
  const toolsMarquee = [...toolSkills, ...toolSkills];

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[var(--primary)]/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10 flex flex-col items-center text-center">
        
        <motion.h3
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false }}
           transition={{ duration: 0.5, delay: 0.1 }}
           className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[var(--foreground)]"
        >
          Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-purple-500">Technologies</span>
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl"
        >
          The frameworks, languages, and tools I use to build scalable web applications and seamless user experiences.
        </motion.p>
      </div>

      {/* Marquee Container */}
      <div className="relative flex flex-col gap-6 w-full max-w-[100vw] overflow-hidden mask-image-fade">
        
        {/* Row 1: Frontend (Moves Right to Left) */}
        <motion.div
          className="flex w-max gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        >
          {frontendMarquee.map((skill, index) => (
            <SkillCard key={`frontend-${index}`} name={skill.name} Icon={skill.icon} />
          ))}
        </motion.div>

        {/* Row 2: Backend (Moves Left to Right) */}
        <motion.div
          className="flex w-max gap-6"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }} // Slightly faster
        >
          {backendMarquee.map((skill, index) => (
            <SkillCard key={`backend-${index}`} name={skill.name} Icon={skill.icon} />
          ))}
        </motion.div>

        {/* Row 3: Tools (Moves Right to Left) */}
        <motion.div
          className="flex w-max gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 45, repeat: Infinity }} // Slightly slower
        >
          {toolsMarquee.map((skill, index) => (
            <SkillCard key={`tools-${index}`} name={skill.name} Icon={skill.icon} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}

// Reusable Inner Component for the Glassmorphism Cards
function SkillCard({ name, Icon }: { name: string; Icon: React.ElementType }) {
  return (
    <div className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-sm transition-all duration-300 group cursor-default hover:border-[var(--primary)] hover:shadow-[0_0_20px_var(--glow)]">
      <Icon className="w-6 h-6 text-[var(--primary)] group-hover:scale-110 transition-transform duration-300" />
      <span className="text-lg font-medium text-[var(--foreground)] whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}