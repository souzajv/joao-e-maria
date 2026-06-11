import type { ReactNode } from "react";

type LetterShellProps = {
  children: ReactNode;
};

export function LetterShell({ children }: LetterShellProps) {
  return (
    <div className="min-h-screen bg-page pt-0 sm:p-8">
      <main className="relative mx-auto max-w-4xl overflow-hidden rounded-sm bg-card shadow-card">
        <div className="pointer-events-none absolute inset-0 z-10 m-3 mt-3 border border-primary/15 sm:m-6" />
        <div className="pointer-events-none absolute inset-0 z-10 m-4 mt-4 border border-primary-light/20 sm:m-8" />

        <div className="relative z-20 px-6 pb-16 pt-20 sm:px-16 sm:py-24">
          {children}
        </div>
      </main>
    </div>
  );
}
