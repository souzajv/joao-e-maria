import { Icon } from "@iconify/react";

export function LetterFooterDecor() {
  return (
    <div className="mt-20 flex justify-center gap-2 opacity-70" aria-hidden>
      <Icon
        icon="solar:leaf-linear"
        className="text-2xl text-primary -scale-x-100"
      />
      <Icon icon="solar:leaf-linear" className="text-2xl text-gold" />
    </div>
  );
}
