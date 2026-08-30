import Link from "next/link";
import { cn } from "@/lib/utils";

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline-dark" | "outline-light";
  className?: string;
}

const START_PROJECT_HREF = "/start-a-project";

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={cn(
        "shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1",
        className
      )}
    >
      <path
        d="M2 8H14M14 8L9 3M14 8L9 13"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="square"
      />
    </svg>
  );
}

/** The one consistent primary conversion on the site: Start a project. */
export function CtaButton({
  href,
  children,
  variant = "solid",
  className,
}: CtaButtonProps) {
  const styles = {
    solid:
      "bg-[var(--color-primary)] text-white border border-[var(--color-primary)] hover:bg-[var(--color-dark)] hover:border-[var(--color-dark)]",
    "outline-dark":
      "bg-transparent text-[var(--color-ink)] border border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]",
    "outline-light":
      "bg-transparent text-white border border-white/60 hover:bg-white hover:text-[var(--color-dark)]",
  } as const;

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex min-h-12 items-center gap-2.5 px-6 py-3.5 font-sans text-[13px] font-medium uppercase tracking-[0.09em] transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
        styles[variant],
        className
      )}
    >
      {children}
      <ArrowIcon />
    </Link>
  );
}

export function StartProjectButton({
  variant = "solid",
  className,
}: {
  variant?: CtaButtonProps["variant"];
  className?: string;
}) {
  return (
    <CtaButton href={START_PROJECT_HREF} variant={variant} className={className}>
      Start a project
    </CtaButton>
  );
}

export function ArrowLink({
  href,
  children,
  className,
  tone = "ink",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  tone?: "ink" | "paper";
}) {
  return (
    <Link
      href={href}
      className={cn(
        "link-underline group inline-flex items-center gap-2 font-sans text-[15px] tracking-[0.01em]",
        tone === "ink" ? "text-[var(--color-dark)]" : "text-white",
        className
      )}
    >
      {children}
      <ArrowIcon />
    </Link>
  );
}
