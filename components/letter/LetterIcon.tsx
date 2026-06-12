import { Icon, type IconProps } from "@iconify/react";

type LetterIconProps = Omit<IconProps, "icon"> & {
  icon: string;
};

/** Solar linear (traço fino) — padrão único de ícones do memorial */
export function LetterIcon({ icon, className = "", ...props }: LetterIconProps) {
  const resolvedIcon =
    icon.startsWith("solar:") && !icon.includes("-linear")
      ? `${icon}-linear`
      : icon;

  return (
    <Icon
      icon={resolvedIcon}
      inline
      className={`letter-icon ${className}`.trim()}
      {...props}
    />
  );
}
