type ElegantOrnamentProps = {
  className?: string;
};

/** Traço ornamental simétrico — inspirado em divisórias caligráficas */
export function ElegantOrnament({ className = "h-5 w-52 text-primary" }: ElegantOrnamentProps) {
  return (
    <svg
      viewBox="0 0 280 24"
      className={className}
      aria-hidden
      fill="currentColor"
    >
      <polygon points="4,12 9,9 9,15" />
      <line
        x1="12"
        y1="12"
        x2="98"
        y2="12"
        stroke="currentColor"
        strokeWidth="0.55"
      />
      <path
        d="M108 12 C112 7 118 7 122 12 C126 17 132 17 136 12 C140 7 146 7 150 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.55"
      />
      <path
        d="M114 12 C110 9 106 11 108 12 C106 13 110 15 114 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.45"
      />
      <path
        d="M144 12 C148 9 152 11 150 12 C152 13 148 15 144 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.45"
      />
      <rect x="137" y="10.2" width="6" height="3.6" transform="rotate(45 140 12)" />
      <line
        x1="182"
        y1="12"
        x2="268"
        y2="12"
        stroke="currentColor"
        strokeWidth="0.55"
      />
      <polygon points="276,12 271,9 271,15" />
    </svg>
  );
}
