"use client";

/**
 * useGsapScroll
 *
 * A thin, SSR-safe wrapper around gsap.context() + ScrollTrigger that:
 *   - registers ScrollTrigger exactly once
 *   - scopes the GSAP context to a container ref so animations are
 *     auto-cleaned when the component unmounts (no orphan triggers)
 *   - bails out completely on `prefers-reduced-motion`
 *   - returns a stable `ready` flag so callers can render fallback styles
 *
 * The `setup` callback gets the gsap module and the ScrollTrigger class so
 * the heavy plugin import lives in one place.
 *
 * Example:
 *   const ref = useRef<HTMLDivElement>(null);
 *   useGsapScroll(ref, (gsap, ScrollTrigger) => {
 *     gsap.to(".card", { y: -80, scrollTrigger: { trigger: ref.current, scrub: true } });
 *   });
 */

import { useEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function useGsapScroll(
  scope: RefObject<HTMLElement | null>,
  setup: (gsapInstance: typeof gsap, ScrollTriggerInstance: typeof ScrollTrigger) => void,
  deps: unknown[] = [],
) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect the user's OS preference.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }

    const ctx = gsap.context(() => {
      setup(gsap, ScrollTrigger);
    }, scope);

    // Refresh once layout has settled so triggers anchor to correct positions.
    const refreshId = window.requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      window.cancelAnimationFrame(refreshId);
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
