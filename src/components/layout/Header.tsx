"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { StartProjectButton } from "@/components/ui/Buttons";
import { BrandLogo } from "@/components/brand/BrandLogo";

const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "Expertise", href: "/expertise" },
  { label: "Studio", href: "/studio" },
  { label: "Insights", href: "/insights" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sentinel = document.querySelector("[data-scroll-sentinel]");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { rootMargin: "-12px 0px 0px" }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Decorative bar background lives on its own layer — kept off the
          <header> element itself, because backdrop-filter on an ancestor
          would make it the containing block for the fixed mobile menu
          panel below, collapsing that panel's height to the bar's. */}
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-x-0 top-0 h-16 -z-10 transition-colors duration-300 sm:h-20",
          scrolled || menuOpen
            ? "bg-[var(--color-paper)]/90 backdrop-blur-sm border-b border-[var(--color-line)]"
            : "bg-transparent border-b border-transparent"
        )}
      />
      <div className="container-cubs site-header-shell flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          className="block"
          onClick={() => setMenuOpen(false)}
          aria-label="Areen Cubs home"
        >
          <BrandLogo
            priority
            className="h-[52px] w-[156px] sm:h-[56px] sm:w-[168px]"
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-underline font-sans text-[14px] text-[var(--color-ink-soft)] hover:text-[var(--color-primary)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <StartProjectButton
            variant="solid"
            className="px-5 py-2.5 text-[12px]"
          />
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={cn(
              "h-px w-6 bg-[var(--color-ink)] transition-transform duration-300",
              menuOpen && "translate-y-[3px] rotate-45"
            )}
          />
          <span
            className={cn(
              "h-px w-6 bg-[var(--color-ink)] transition-transform duration-300",
              menuOpen && "-translate-y-[3px] -rotate-45"
            )}
          />
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-x-0 top-16 bottom-0 flex flex-col justify-between bg-[var(--color-paper)] px-6 pb-10 pt-6 transition-[opacity,visibility] duration-300 md:hidden",
          menuOpen
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col gap-1" aria-label="Mobile">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-[var(--color-line)] py-5 font-serif text-[32px] leading-none text-[var(--color-ink)]"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <StartProjectButton
          variant="solid"
          className="w-full justify-center"
        />
      </div>
    </header>
  );
}
