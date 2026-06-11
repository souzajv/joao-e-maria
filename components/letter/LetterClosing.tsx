import type { MemorialContent } from "@/content/memorial";
import { SectionHeading } from "./SectionHeading";

type LetterClosingProps = {
  closing: MemorialContent["closing"];
};

export function LetterClosing({ closing }: LetterClosingProps) {
  return (
    <section className="pb-8 text-center">
      <SectionHeading
        title="Para você"
        icon="solar:letter-linear"
        className="mb-6"
      />

      <blockquote className="mx-auto mb-8 max-w-2xl font-display text-2xl italic leading-relaxed text-primary md:text-3xl">
        &ldquo;{closing.quote}&rdquo;
      </blockquote>

      <p className="mx-auto max-w-xl text-lg font-light italic text-body">
        {closing.signature}
      </p>

      <p className="mt-10 text-xs uppercase tracking-[0.2em] text-slate-400">
        {closing.footer}
      </p>
    </section>
  );
}
