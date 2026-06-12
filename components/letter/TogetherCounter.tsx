"use client";

import { useEffect, useState } from "react";

type TogetherCounterProps = {
  sinceDate: string;
};

type TimeTogether = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const EMPTY_TIME: TimeTogether = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

function calcTimeTogether(sinceDate: string): TimeTogether {
  const start = new Date(sinceDate).getTime();
  const now = Date.now();
  const diff = Math.max(0, now - start);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

export function TogetherCounter({ sinceDate }: TogetherCounterProps) {
  const [time, setTime] = useState<TimeTogether>(EMPTY_TIME);

  useEffect(() => {
    const tick = () => setTime(calcTimeTogether(sinceDate));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [sinceDate]);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="mt-14" data-letter-hero>
      <p className="mb-6 text-center font-script text-4xl text-primary sm:text-5xl">
        Juntos há...
      </p>
      <div className="mx-auto flex max-w-fit items-center justify-center gap-4 rounded-full border border-primary/10 bg-white/60 px-6 py-5 shadow-sm shadow-primary/10 sm:gap-8 sm:px-10">
        <CounterUnit value={time.days} label="Dias" />
        <span className="mb-4 text-2xl font-light text-primary/20">:</span>
        <CounterUnit value={time.hours} label="Horas" padded />
        <span className="mb-4 text-2xl font-light text-primary/20">:</span>
        <CounterUnit value={time.minutes} label="Min" padded />
        <span className="mb-4 hidden text-2xl font-light text-primary/20 sm:inline">
          :
        </span>
        <div className="hidden min-w-[3rem] flex-col items-center sm:flex sm:min-w-[4rem]">
          <span className="font-display text-3xl tracking-tight text-primary sm:text-4xl">
            {pad(time.seconds)}
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-widest text-primary-light sm:text-xs">
            Seg
          </span>
        </div>
      </div>
    </div>
  );
}

function CounterUnit({
  value,
  label,
  padded = false,
}: {
  value: number;
  label: string;
  padded?: boolean;
}) {
  return (
    <div className="flex min-w-[3rem] flex-col items-center sm:min-w-[4rem]">
      <span className="font-display text-3xl tracking-tight text-primary sm:text-4xl">
        {padded ? value.toString().padStart(2, "0") : value}
      </span>
      <span className="mt-1 text-[10px] uppercase tracking-widest text-primary-light sm:text-xs">
        {label}
      </span>
    </div>
  );
}
