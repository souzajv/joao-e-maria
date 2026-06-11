"use client";

import { RefObject } from "react";
import { useGSAP } from "./gsap";
import { animateLetterHero } from "./memorial-animations";

export function useMemorialScrollAnimations(
  mainRef: RefObject<HTMLElement | null>
) {
  useGSAP(
    () => {
      const el = mainRef.current;
      if (!el) return;
      return animateLetterHero(el);
    },
    { scope: mainRef }
  );
}
