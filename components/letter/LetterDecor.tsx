import { LetterIcon } from "./LetterIcon";

export function LetterFooterDecor() {
  return (
    <div className="mt-20 flex justify-center gap-2 opacity-70" aria-hidden>
      <LetterIcon
        icon="solar:leaf-linear"
        className="text-2xl text-primary -scale-x-100"
      />
      <LetterIcon icon="solar:leaf-linear" className="text-2xl text-gold" />
    </div>
  );
}
