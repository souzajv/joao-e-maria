"use client";

import { useRef } from "react";
import {
  memorial,
  getProposalVideo,
} from "@/content/memorial";
import { useMemorialScrollAnimations } from "@/lib/useMemorialScrollAnimations";
import { LetterShell } from "@/components/letter/LetterShell";
import { LetterHero } from "@/components/letter/LetterHero";
import { LetterDivider } from "@/components/letter/LetterDivider";
import { TimelineSection } from "@/components/letter/TimelineSection";
import { StorySection } from "@/components/letter/StorySection";
import { ProposalVideoInline } from "@/components/letter/ProposalVideoInline";
import { MomentsGallery } from "@/components/letter/MomentsGallery";
import { LetterClosing } from "@/components/letter/LetterClosing";
import { LetterFooterDecor } from "@/components/letter/LetterDecor";

export default function HomePage() {
  const mainRef = useRef<HTMLElement>(null);
  useMemorialScrollAnimations(mainRef);

  const proposalVideo = getProposalVideo(memorial);
  const timelineChapters = memorial.chapters.filter((c) => c.items.length > 0);

  return (
    <LetterShell>
      <article ref={mainRef} className="relative">
        <LetterHero hero={memorial.hero} />

        <LetterDivider />

        <div className="space-y-12">
          <TimelineSection milestones={memorial.milestones} />

          <LetterDivider variant="light" />

          {memorial.stories.map((story) => (
            <div key={story.id}>
              <StorySection story={story} />
              <LetterDivider />
            </div>
          ))}

          <LetterDivider variant="light" />

          <MomentsGallery
            title={memorial.gallery.title}
            footer={memorial.gallery.footer}
            chapters={timelineChapters}
          />

          {proposalVideo && (
            <>
              <LetterDivider variant="light" />
              <ProposalVideoInline video={proposalVideo} />
            </>
          )}

          <LetterDivider variant="light" />

          <LetterClosing closing={memorial.closing} />
        </div>

        <LetterFooterDecor />
      </article>
    </LetterShell>
  );
}
