export type FloralCorner = "bottom-right" | "top-left" | "bottom-left" | "top-right";

export type BodyFloral = {
  src: string;
  alt: string;
  width: number;
  height: number;
  corner: FloralCorner;
  flipX?: boolean;
};

const FLORAL_BASE = "/media/flores";

const BODY_ASSETS = [
  `${FLORAL_BASE}/flor-sem-caule-1.png`,
  `${FLORAL_BASE}/flor-sem-caule-2.png`,
  `${FLORAL_BASE}/flor-sem-caule-3.png`,
] as const;

const CORNER_CYCLE: FloralCorner[] = [
  "bottom-right",
  "top-left",
  "bottom-left",
  "top-right",
];

export function getPolaroidBackdropFloral(photoIndex: number): BodyFloral {
  const corner = CORNER_CYCLE[photoIndex % CORNER_CYCLE.length];

  return {
    src: BODY_ASSETS[photoIndex % BODY_ASSETS.length],
    alt: "",
    width: 160,
    height: 160,
    corner,
    flipX: corner === "top-right" || corner === "bottom-right",
  };
}
