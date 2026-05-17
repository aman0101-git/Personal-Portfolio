"use client";

/**
 * ScrollProgress
 *
 * A fixed gradient bar at the very top of the viewport that fills as the
 * page scrolls. Uses Framer Motion's `useScroll` + `useSpring` so it stays
 * silky smooth without spamming `requestAnimationFrame` listeners.
 */

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--accent-2)]"
      aria-hidden="true"
    />
  );
}
