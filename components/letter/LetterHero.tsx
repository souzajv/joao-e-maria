import { Icon } from "@iconify/react";
import type { MemorialContent } from "@/content/memorial";
import { HeroVideoBlob } from "./HeroVideoBlob";
import { TogetherCounter } from "./TogetherCounter";

type LetterHeroProps = {
  hero: MemorialContent["hero"];
};

export function LetterHero({ hero }: LetterHeroProps) {
  return (
    <>
      <HeroVideoBlob background={hero.background} />

      <section className="relative my-12 text-center">
        <span
          className="mb-8 block text-xs font-normal uppercase tracking-[0.3em] text-primary-light"
          data-letter-hero
        >
          {hero.eyebrow}
        </span>

        <h1
          className="mb-8 font-script text-7xl leading-tight tracking-tight text-primary sm:text-8xl md:text-9xl"
          data-letter-hero
        >
          {hero.names.first}{" "}
          <span className="mx-2 text-4xl text-gold-muted sm:text-6xl">&</span>{" "}
          {hero.names.second}
        </h1>

        <div
          className="mb-12 flex flex-col items-center justify-center font-display text-xl uppercase tracking-widest text-primary sm:flex-row sm:gap-6 sm:text-2xl"
          data-letter-hero
        >
          <span>{hero.dateLabel}</span>
          <span className="hidden text-primary-light sm:block">·</span>
          <span>{hero.dateSub}</span>
        </div>

        <div className="mx-auto max-w-2xl" data-letter-hero>
          <p className="text-center text-lg font-light italic leading-relaxed text-body">
            {hero.dedication}
            <Icon
              icon="solar:heart-linear"
              className="ml-1 inline-block translate-y-1 text-xl text-gold"
            />
          </p>
        </div>

        <TogetherCounter proposalDate={hero.proposalDate} />
      </section>
    </>
  );
}
