import type { ReactNode } from "react";
import { PolaroidBackdropFloral } from "./PolaroidBackdropFloral";

type PolaroidFrameProps = {
  children: ReactNode;
  caption?: string;
  className?: string;
  mediaClassName?: string;
  tilt?: "left" | "none" | "right";
  showTape?: boolean;
  backdropIndex?: number;
};

const TILT_CLASSES = {
  left: "-rotate-[2.5deg]",
  none: "rotate-0",
  right: "rotate-[2.5deg]",
} as const;

export function PolaroidFrame({
  children,
  caption,
  className = "",
  mediaClassName = "aspect-[4/5]",
  tilt = "none",
  showTape = true,
  backdropIndex,
}: PolaroidFrameProps) {
  return (
    <div className={`relative w-full overflow-visible ${className}`.trim()}>
      {showTape && <div className="polaroid-tape" aria-hidden />}

      {backdropIndex !== undefined && (
        <PolaroidBackdropFloral photoIndex={backdropIndex} />
      )}

      <figure
        className={`relative z-10 bg-white px-3.5 pb-5 pt-3.5 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.18),0_4px_12px_-4px_rgba(123,45,59,0.12)] transition-transform duration-500 hover:rotate-0 ${TILT_CLASSES[tilt]}`}
      >
        <div className={`relative overflow-hidden ${mediaClassName}`}>
          <div className="relative h-full w-full overflow-hidden bg-neutral-100/80">
            {children}
          </div>
        </div>

        {caption && (
          <figcaption className="relative z-10 flex min-h-[4.25rem] items-center justify-center px-2 pt-4">
            <p className="font-script text-center text-[1.4rem] leading-snug text-primary-dark sm:text-[1.55rem]">
              {caption}
            </p>
          </figcaption>
        )}
      </figure>
    </div>
  );
}
