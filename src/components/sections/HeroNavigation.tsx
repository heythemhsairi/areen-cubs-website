"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "Expertise", href: "/expertise" },
  { label: "Studio", href: "/studio" },
  { label: "Insights", href: "/insights" },
];

export function HeroNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="hero-nav">
      <Link
        href="/"
        className="hero-nav-logo"
        aria-label="Areen Cubs home"
        onClick={() => setMenuOpen(false)}
      >
        <BrandLogo priority className="h-full w-full" />
      </Link>

      <nav className="hero-nav-links" aria-label="Primary">
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href} className="hero-nav-link">
            {link.label}
          </Link>
        ))}
      </nav>

      <Link href="/start-a-project" className="hero-nav-project">
        Start a project
      </Link>

      <button
        type="button"
        className="hero-nav-toggle"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className={cn(menuOpen && "translate-y-[2px] rotate-45")} />
        <span className={cn(menuOpen && "-translate-y-[2px] -rotate-45")} />
      </button>

      <div className={cn("hero-nav-mobile", menuOpen && "is-open")}>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link href="/start-a-project" onClick={() => setMenuOpen(false)}>
          Start a project
        </Link>
      </div>
    </header>
  );
}
