"use client";

import { useEffect, useRef, useState } from "react";
import type { MemorialContent } from "@/content/memorial";
import { LetterBlobFrame } from "./LetterBlobFrame";

type HeroVideoBlobProps = {
  background: MemorialContent["hero"]["background"];
};

export function HeroVideoBlob({ background }: HeroVideoBlobProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useGif, setUseGif] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || useGif) return;

    let lastTime = video.currentTime;
    let lastCheck = performance.now();
    let rafId = 0;

    const play = () => {
      void video.play().catch(() => setUseGif(true));
    };

    const onReady = () => play();
    const onError = () => setUseGif(true);

    const watchdog = (now: number) => {
      if (video.paused && !video.ended) {
        play();
      } else if (!video.paused && now - lastCheck >= 500) {
        if (video.currentTime <= lastTime + 0.01) {
          play();
        } else {
          lastTime = video.currentTime;
        }
        lastCheck = now;
      }
      rafId = requestAnimationFrame(watchdog);
    };

    video.addEventListener("loadeddata", onReady);
    video.addEventListener("canplay", onReady);
    video.addEventListener("playing", onReady);
    video.addEventListener("error", onError);

    if (video.readyState >= 3) play();

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) play();
      },
      { threshold: 0.1 }
    );
    if (container) observer.observe(container);

    rafId = requestAnimationFrame(watchdog);

    return () => {
      video.removeEventListener("loadeddata", onReady);
      video.removeEventListener("canplay", onReady);
      video.removeEventListener("playing", onReady);
      video.removeEventListener("error", onError);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [useGif]);

  const mediaClass = "h-full w-full object-cover";

  const transformWrapper =
    "h-full w-full -rotate-6 scale-[0.85] transition-transform duration-1000 hover:scale-90 hover:-rotate-3";

  return (
    <div
      ref={containerRef}
      className="relative z-20 mb-10 flex justify-center"
    >
      <div className="aspect-[3/4] w-44 sm:w-52">
        <div className={transformWrapper}>
          <LetterBlobFrame className="h-full w-full">
            {!useGif ? (
              <video
                ref={videoRef}
                src={background.mp4}
                poster={background.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className={mediaClass}
                aria-hidden
              >
                <source
                  src="/media/hero-pedido-loop.webm"
                  type="video/webm"
                />
                <source src={background.mp4} type="video/mp4" />
              </video>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={background.gif}
                alt=""
                className={mediaClass}
                aria-hidden
              />
            )}
          </LetterBlobFrame>
        </div>
      </div>
    </div>
  );
}
