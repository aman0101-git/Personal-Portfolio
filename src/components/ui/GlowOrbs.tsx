"use client";

/**
 * GlowOrbs
 *
 * Decorative, theme-aware floating orbs for section backgrounds. Renders
 * absolutely-positioned blurred radial gradients tagged with the global
 * `.orb` utility. Cheap (no JS animation per frame; pure CSS keyframes).
 *
 * Use as a sibling INSIDE any `relative overflow-hidden` section.
 */

interface GlowOrbsProps {
  variant?: "hero" | "contact" | "section";
}

export default function GlowOrbs({ variant = "section" }: GlowOrbsProps) {
  if (variant === "hero") {
    return (
      <>
        <div
          className="orb animate-float-slow"
          style={{
            top: "-10%",
            left: "-5%",
            width: "40vmax",
            height: "40vmax",
            background:
              "radial-gradient(circle, var(--mesh-1), transparent 70%)",
            opacity: 0.7,
          }}
        />
        <div
          className="orb animate-float-slow"
          style={{
            bottom: "-15%",
            right: "-10%",
            width: "45vmax",
            height: "45vmax",
            background:
              "radial-gradient(circle, var(--mesh-2), transparent 70%)",
            opacity: 0.6,
            animationDelay: "-4s",
          }}
        />
      </>
    );
  }

  if (variant === "contact") {
    return (
      <>
        <div
          className="orb"
          style={{
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
            width: "70vmax",
            height: "30vmax",
            background:
              "radial-gradient(ellipse at center, var(--glow-soft), transparent 70%)",
            opacity: 0.9,
          }}
        />
      </>
    );
  }

  // generic 'section'
  return (
    <>
      <div
        className="orb"
        style={{
          top: "10%",
          left: "-10%",
          width: "30vmax",
          height: "30vmax",
          background:
            "radial-gradient(circle, var(--mesh-1), transparent 70%)",
          opacity: 0.35,
        }}
      />
      <div
        className="orb"
        style={{
          bottom: "10%",
          right: "-10%",
          width: "32vmax",
          height: "32vmax",
          background:
            "radial-gradient(circle, var(--mesh-2), transparent 70%)",
          opacity: 0.3,
        }}
      />
    </>
  );
}
