"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const HERO_VIDEO = "/media/hero/areen-cubs-hero.mp4";
const HERO_POSTER = "/media/hero/areen-cubs-hero-poster.jpg";

export function HeroMedia() {
  const [reduceMotion, setReduceMotion] = useState<boolean | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(media.matches);

    updatePreference();
    media.addEventListener("change", updatePreference);
    return () => media.removeEventListener("change", updatePreference);
  }, []);

  if (reduceMotion !== false) {
    return (
      <Image
        src={HERO_POSTER}
        alt="A bright Areen Cubs creative studio inside a rounded architectural frame"
        fill
        priority
        sizes="100vw"
        className="object-contain"
      />
    );
  }

  return (
    <video
      className="h-full w-full object-contain"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={HERO_POSTER}
      aria-label="Areen Cubs creative studio"
    >
      <source src={HERO_VIDEO} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
