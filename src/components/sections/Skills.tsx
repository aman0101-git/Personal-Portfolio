"use client";

import { motion, type Variants } from "framer-motion";
import {
  Code2, Database, Server, Layout, FileJson, Cpu, Globe, Terminal,
  Palette, Brush, ShieldCheck, Send, Layers, GitBranch, Github,
  TerminalSquare, Box, Network, RefreshCw, Cloud, Bot, LayoutTemplate,
} from "lucide-react";

const frontendSkills = [
  { name: "React.js", icon: Layout },
  { name: "Next.js", icon: Globe },
  { name: "TypeScript", icon: FileJson },
  { name: "JavaScript", icon: Code2 },
  { name: "HTML5", icon: Globe },
  { name: "CSS3", icon: Palette },
  { name: "Tailwind CSS", icon: Brush },
  { name: "Bootstrap", icon: LayoutTemplate },
  { name: "Framer Motion", icon: Cpu },
];

const backendSkills = [
  { name: "Node.js", icon: Server },
  { name: "Express", icon: Server },
  { name: "MongoDB", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "Java", icon: Terminal },
  { name: "RESTful APIs", icon: Network },
  { name: "JWT / OAuth", icon: ShieldCheck },
  { name: "Postman", icon: Send },
  { name: "System Architecture", icon: Layers },
];

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

/* Staggered fade-in for the section heading + each marquee row. */
const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Skills() {
  const frontendMarquee = [...frontendSkills, ...frontendSkills];
  const backendMarquee = [...backendSkills, ...backendSkills];
  const toolsMarquee = [...toolSkills, ...toolSkills];

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="orb"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "50vmax",
          height: "30vmax",
          background:
            "radial-gradient(ellipse at center, var(--glow-soft), transparent 70%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-6 mb-14 relative z-10 flex flex-col items-center text-center"
      >
        <motion.p variants={item} className="text-sm tracking-[0.3em] text-[var(--primary)] mb-3 font-semibold uppercase">
          Toolkit
        </motion.p>
        <motion.h3
          variants={item}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
        >
          Skills & <span className="gradient-text">Technologies</span>
        </motion.h3>
        <motion.p
          variants={item}
          className="text-base md:text-lg text-[var(--foreground-muted)] max-w-2xl"
        >
          The frameworks, languages and tools I reach for when shipping
          scalable web applications and seamless user experiences.
        </motion.p>
      </motion.div>

      {/* Marquee rows */}
      <div className="relative flex flex-col gap-5 w-full max-w-[100vw] overflow-hidden mask-image-fade">
        <motion.div
          className="flex w-max gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        >
          {frontendMarquee.map((skill, i) => (
            <SkillCard key={`f-${i}`} name={skill.name} Icon={skill.icon} />
          ))}
        </motion.div>

        <motion.div
          className="flex w-max gap-4"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
        >
          {backendMarquee.map((skill, i) => (
            <SkillCard key={`b-${i}`} name={skill.name} Icon={skill.icon} />
          ))}
        </motion.div>

        <motion.div
          className="flex w-max gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 45, repeat: Infinity }}
        >
          {toolsMarquee.map((skill, i) => (
            <SkillCard key={`t-${i}`} name={skill.name} Icon={skill.icon} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({ name, Icon }: { name: string; Icon: React.ElementType }) {
  return (
    <div className="group flex items-center gap-3 px-5 py-3.5 rounded-2xl glass cursor-default hover:border-[var(--primary)] hover:shadow-[0_0_24px_var(--glow)] transition-all duration-300">
      <Icon className="w-5 h-5 text-[var(--primary)] group-hover:scale-110 transition-transform duration-300" />
      <span className="text-base font-medium whitespace-nowrap">{name}</span>
    </div>
  );
}
