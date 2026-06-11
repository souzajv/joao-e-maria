import type { MemorialChapter } from "@/content/memorial";
import { PolaroidFrame } from "./PolaroidFrame";
import { SectionHeading } from "./SectionHeading";

type ProposalVideoInlineProps = {
  video: NonNullable<MemorialChapter["video"]>;
};

export function ProposalVideoInline({ video }: ProposalVideoInlineProps) {
  return (
    <section className="overflow-visible">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-10 overflow-visible md:flex-row md:items-center md:gap-12">
        <div className="w-full shrink-0 overflow-visible px-2 md:w-[42%]">
          <PolaroidFrame
            className="mx-auto w-full max-w-[260px] sm:max-w-[280px]"
            mediaClassName="aspect-[9/16]"
            tilt="left"
            backdropIndex={0}
          >
            <video
              controls
              playsInline
              preload="metadata"
              poster={video.poster}
              className="h-full w-full object-contain"
            >
              <source src={video.src} type="video/mp4" />
            </video>
          </PolaroidFrame>
        </div>

        <div className="relative z-10 flex flex-1 flex-col items-center md:items-start">
          <SectionHeading
            title="O momento em movimento"
            icon="solar:videocamera-record-linear"
            align="start"
            showOrnament={false}
          />
          <p className="mt-2 max-w-sm font-display text-lg italic leading-relaxed text-body">
            {video.caption}
          </p>
        </div>
      </div>
    </section>
  );
}
