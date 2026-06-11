import Image from "next/image";
import { getPolaroidBackdropFloral } from "@/lib/letter-florals";

type PolaroidBackdropFloralProps = {
  photoIndex: number;
};

type FloralCorner = "bottom-right" | "top-left" | "bottom-left" | "top-right";

/** Classes estáticas — Tailwind JIT precisa vê-las neste arquivo */
const CORNER_CLASS: Record<FloralCorner, string> = {
  "bottom-right": "absolute z-0 -bottom-8 -right-12 sm:-bottom-10 sm:-right-14",
  "top-left": "absolute z-0 -top-6 -left-12 sm:-top-8 sm:-left-14",
  "bottom-left": "absolute z-0 -bottom-8 -left-12 sm:-bottom-10 sm:-left-14",
  "top-right": "absolute z-0 -top-6 -right-12 sm:-top-8 sm:-right-14",
};

export function PolaroidBackdropFloral({ photoIndex }: PolaroidBackdropFloralProps) {
  const floral = getPolaroidBackdropFloral(photoIndex);

  return (
    <div
      className={`pointer-events-none ${CORNER_CLASS[floral.corner]}`}
      aria-hidden
    >
      <Image
        src={floral.src}
        alt={floral.alt}
        width={floral.width}
        height={floral.height}
        className={`h-32 w-32 object-contain sm:h-40 sm:w-40 ${floral.flipX ? "-scale-x-100" : ""}`}
      />
    </div>
  );
}
