"use client";

/**
 * MagneticButton
 *
 * A premium, accessibility-aware "magnetic" wrapper. The child element
 * smoothly drifts toward the cursor while hovered, then springs back on
 * leave. Disables itself on touch devices and when `prefers-reduced-motion`
 * is set so the page stays calm and fast on mobile.
 *
 * Drop in around any clickable element:
 *   <MagneticButton><Link href="#x">Click</Link></MagneticButton>
 */

import { useRef, useSyncExternalStore, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  /** Magnetic pull strength in px (default 18). Lower = more subtle. */
  strength?: number;
  className?: string;
}

/* Media-query subscription via useSyncExternalStore — React-19 idiomatic,
   SSR-safe, and avoids the `react-hooks/set-state-in-effect` rule. */
function subscribeMQ(query: string) {
  return (onChange: () => void) => {
    if (typeof window === "undefined") return () => {};
    const mql = window.matchMedia(query);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  };
}
function getMQ(query: string) {
  if (typeof window === "undefined") return false;
  return window.matchMedia(query).matches;
}
function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    subscribeMQ(query),
    () => getMQ(query),
    () => false,
  );
}

export default function MagneticButton({
  children,
  strength = 18,
  className = "",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const finePointer = useMediaQuery("(hover: hover) and (pointer: fine)");
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const enabled = finePointer && !reducedMotion;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set((dx / rect.width) * strength * 2);
    y.set((dy / rect.height) * strength * 2);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
