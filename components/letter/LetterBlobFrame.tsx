import type { ReactNode } from "react";

type LetterBlobFrameProps = {
  children: ReactNode;
  className?: string;
};

/** Moldura orgânica do vídeo hero — borda branca + glow wine */
export function LetterBlobFrame({ children, className = "" }: LetterBlobFrameProps) {
  return (
    <div
      className={`relative h-full w-full overflow-hidden rounded-tl-[50%] rounded-br-[50%] rounded-tr-2xl rounded-bl-2xl border-[5px] border-white bg-white shadow-[0_24px_48px_-12px_rgba(123,45,59,0.32),0_8px_20px_-8px_rgba(92,34,48,0.18)] ${className}`.trim()}
    >
      {children}
    </div>
  );
}
