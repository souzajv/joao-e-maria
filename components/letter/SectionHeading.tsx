import { Icon } from "@iconify/react";
import { ElegantOrnament } from "./ElegantOrnament";

type SectionHeadingProps = {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  icon?: string;
  size?: "lg" | "sm";
  align?: "center" | "start";
  showOrnament?: boolean;
  className?: string;
};

export function SectionHeading({
  title,
  eyebrow,
  subtitle,
  icon,
  size = "lg",
  align = "center",
  showOrnament = true,
  className = "",
}: SectionHeadingProps) {
  const titleClass =
    size === "lg"
      ? "font-display text-3xl font-normal tracking-tight text-primary sm:text-4xl"
      : "font-display text-xl font-normal tracking-tight text-primary sm:text-2xl";

  const alignClass =
    align === "start" ? "items-start text-left" : "items-center text-center";

  const HeadingTag = size === "lg" ? "h2" : "h3";

  return (
    <div
      className={`flex flex-col ${alignClass} ${className}`.trim()}
    >
      {icon && (
        <Icon icon={icon} className="mb-4 text-4xl text-primary" />
      )}
      {eyebrow && (
        <span className="mb-1 block text-xs uppercase tracking-[0.25em] text-primary-light">
          {eyebrow}
        </span>
      )}
      <HeadingTag className={titleClass}>{title}</HeadingTag>
      {showOrnament && (
        <ElegantOrnament className="mt-4 h-5 w-48 text-primary sm:w-56" />
      )}
      {subtitle && (
        <p className="mt-3 max-w-md text-sm font-light italic text-body/70">
          {subtitle}
        </p>
      )}
    </div>
  );
}
