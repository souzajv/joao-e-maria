import { gsap } from "./gsap";

export function animateLetterHero(scope: HTMLElement | null) {
  if (!scope) return () => {};

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return () => {};

  const ctx = gsap.context(() => {
    gsap.from("[data-letter-hero]", {
      opacity: 0,
      y: 24,
      duration: 1,
      stagger: 0.12,
      ease: "power2.out",
      delay: 0.2,
    });
  }, scope);

  return () => ctx.revert();
}
