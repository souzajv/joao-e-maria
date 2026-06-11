import Image from "next/image";
import type { MemorialChapter } from "@/content/memorial";
import { PolaroidFrame } from "./PolaroidFrame";
import { SectionHeading } from "./SectionHeading";

type MomentsGalleryProps = {
  title: string;
  footer: string;
  chapters: MemorialChapter[];
};

function tiltForIndex(index: number): "left" | "none" | "right" {
  const mod = index % 3;
  if (mod === 0) return "left";
  if (mod === 1) return "none";
  return "right";
}

export function MomentsGallery({ title, footer, chapters }: MomentsGalleryProps) {
  let photoIndex = 0;

  return (
    <section className="overflow-visible">
      <SectionHeading
        title={title}
        icon="solar:camera-linear"
        showOrnament={false}
        className="mb-10"
      />

      <div className="mx-auto max-w-2xl space-y-14 overflow-visible">
        {chapters.map((chapter) => (
          <div key={chapter.id} className="overflow-visible">
            <SectionHeading
              title={chapter.title}
              eyebrow={`Capítulo ${chapter.number}`}
              subtitle={chapter.subtitle}
              size="sm"
              className="mb-8"
            />

            <div className="grid grid-cols-1 gap-y-14 gap-x-8 overflow-visible sm:grid-cols-2 sm:gap-x-10">
              {chapter.items.map((photo) => {
                const index = photoIndex++;
                const offset = index % 2 === 1;

                return (
                  <div
                    key={photo.src}
                    className={`overflow-visible px-5 py-3 sm:px-7 sm:py-4 ${offset ? "sm:mt-14" : "sm:mt-0"}`}
                  >
                    <PolaroidFrame
                      caption={photo.caption}
                      tilt={tiltForIndex(index)}
                      backdropIndex={index}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, 320px"
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        priority={index < 2}
                      />
                    </PolaroidFrame>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-12 text-center text-sm font-light italic text-body/60">
        {footer}
      </p>
    </section>
  );
}
