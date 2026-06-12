import Image from "next/image";
import { getPolaroidBackdropFloral } from "@/lib/letter-florals";

type PolaroidBackdropFloralProps = {
  photoIndex: number;
};

type FloralCorner = "bottom-right" | "top-left" | "bottom-left" | "top-right";

/** +20% vs offsets anteriores — pétalas vazam mais do canto da polaroid */
const CORNER_CLASS: Record<FloralCorner, string> = {
  "bottom-right":
    "absolute z-0 -bottom-[2.4rem] -right-[3.6rem] sm:-bottom-12 sm:-right-[4.2rem]",
  "top-left":
    "absolute z-0 -top-[1.8rem] -left-[3.6rem] sm:-top-10 sm:-left-[4.2rem]",
  "bottom-left":
    "absolute z-0 -bottom-[2.4rem] -left-[3.6rem] sm:-bottom-12 sm:-left-[4.2rem]",
  "top-right":
    "absolute z-0 -top-[1.8rem] -right-[3.6rem] sm:-top-10 sm:-right-[4.2rem]",
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
