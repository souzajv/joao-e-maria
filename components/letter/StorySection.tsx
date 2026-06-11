import type { MemorialStory } from "@/content/memorial";
import { SectionHeading } from "./SectionHeading";

type StorySectionProps = {
  story: MemorialStory;
};

export function StorySection({ story }: StorySectionProps) {
  return (
    <section>
      <SectionHeading
        title={story.title}
        icon={story.icon}
        className="mb-8"
      />
      <div className="mx-auto max-w-2xl space-y-4 text-center text-lg font-light leading-relaxed text-body">
        {story.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
