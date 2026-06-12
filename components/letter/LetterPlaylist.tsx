import type { MemorialContent } from "@/content/memorial";
import { PolaroidFrame } from "./PolaroidFrame";

type LetterPlaylistProps = {
  playlist: MemorialContent["playlist"];
};

export function LetterPlaylist({ playlist }: LetterPlaylistProps) {
  return (
    <section className="overflow-visible pb-4 text-center">
      <div className="relative mx-auto max-w-lg overflow-visible px-2 sm:px-4">
        <div className="relative overflow-visible p-5 sm:p-8">
          <div className="pointer-events-none absolute inset-0 border border-primary/15" />
          <div className="pointer-events-none absolute inset-2 border border-primary-light/20 sm:inset-3" />

          <PolaroidFrame
            caption={playlist.caption}
            tilt="left"
            backdropIndex={3}
            showTape
            mediaClassName="aspect-auto"
            className="mx-auto max-w-md"
          >
            <iframe
              title={playlist.title}
              src={playlist.embedUrl}
              width="100%"
              height={352}
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              className="block h-[352px] w-full rounded-xl border-0"
            />
          </PolaroidFrame>
        </div>
      </div>
    </section>
  );
}
