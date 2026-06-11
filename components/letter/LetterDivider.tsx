type LetterDividerProps = {
  variant?: "primary" | "light";
};

export function LetterDivider({ variant = "primary" }: LetterDividerProps) {
  return (
    <div
      className={`mx-auto mb-12 h-px w-12 ${
        variant === "light" ? "bg-primary-light/15" : "bg-primary/10"
      }`}
    />
  );
}
