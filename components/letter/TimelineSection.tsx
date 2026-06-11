import type { MemorialContent } from "@/content/memorial";
import { SectionHeading } from "./SectionHeading";

type TimelineSectionProps = {
  milestones: MemorialContent["milestones"];
};

export function TimelineSection({ milestones }: TimelineSectionProps) {
  return (
    <section>
      <SectionHeading
        title="Nossa linha do tempo"
        icon="solar:calendar-mark-linear"
        className="mb-10"
      />

      <div className="mx-auto max-w-xl space-y-5 text-lg font-light text-body">
        {milestones.map((item) => (
          <div
            key={item.number}
            className="flex items-start gap-6 border-b border-primary/10 pb-5 last:border-0"
          >
            <div className="w-16 pt-0.5 text-right font-normal text-primary">
              {item.number}
            </div>
            <div className="flex-1">
              <p className="text-slate-700">{item.title}</p>
              <p className="mt-1 text-sm uppercase tracking-wider text-slate-400">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
