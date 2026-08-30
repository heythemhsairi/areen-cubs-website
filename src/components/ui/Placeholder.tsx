import { cn } from "@/lib/utils";

type Tone = "paper" | "dark" | "primary" | "line";
type Kind = "image" | "video" | "logo" | "note";

interface PlaceholderProps {
  tone?: Tone;
  kind?: Kind;
  label: string;
  meta?: string;
  index?: string;
  className?: string;
  ratio?: string;
}

const toneStyles: Record<Tone, string> = {
  paper: "bg-[var(--color-paper-dim)] text-[var(--color-ink)]",
  dark: "bg-[var(--color-dark)] text-white",
  primary: "bg-[var(--color-primary)] text-white",
  line: "bg-transparent text-[var(--color-ink)] border border-[var(--color-line-strong)]",
};

const hatchClass: Record<Tone, string> = {
  paper: "hatch-pattern",
  dark: "hatch-pattern-dark",
  primary: "hatch-pattern-dark",
  line: "hatch-pattern",
};

function KindMark({ kind }: { kind: Kind }) {
  if (kind === "video") {
    return (
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="17" cy="17" r="16.5" stroke="currentColor" opacity="0.5" />
        <path d="M14 11L23 17L14 23V11Z" fill="currentColor" opacity="0.85" />
      </svg>
    );
  }
  if (kind === "logo") {
    return (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="1"
          y="1"
          width="28"
          height="28"
          rx="1"
          stroke="currentColor"
          opacity="0.5"
        />
        <path d="M8 21L15 9L22 21" stroke="currentColor" opacity="0.85" />
      </svg>
    );
  }
  if (kind === "note") {
    return (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        aria-hidden="true"
      >
        <path d="M4 4H26V26H4V4Z" stroke="currentColor" opacity="0.4" />
        <path d="M9 11H21M9 15H21M9 19H16" stroke="currentColor" opacity="0.85" />
      </svg>
    );
  }
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="1.5"
        y="1.5"
        width="27"
        height="27"
        rx="1"
        stroke="currentColor"
        opacity="0.5"
      />
      <circle cx="10" cy="11" r="2.4" stroke="currentColor" opacity="0.85" />
      <path
        d="M3 22L11 15L16 19L22 12L27 18"
        stroke="currentColor"
        opacity="0.85"
      />
    </svg>
  );
}

/**
 * Stands in for real photography/video. Reads unambiguously as a
 * placeholder (crop marks, kind icon, editorial caption) rather than
 * pretending to be a finished asset — swap for real media via the
 * same aspect box.
 */
export function Placeholder({
  tone = "paper",
  kind = "image",
  label,
  meta,
  index,
  className,
  ratio,
}: PlaceholderProps) {
  return (
    <div
      className={cn(
        "relative isolate flex w-full items-end overflow-hidden",
        toneStyles[tone],
        className
      )}
      style={ratio ? { aspectRatio: ratio } : undefined}
      role="img"
      aria-label={label}
    >
      <div className={cn("absolute inset-0", hatchClass[tone])} aria-hidden="true" />

      {/* corner crop marks */}
      <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-current opacity-40" />
      <span className="absolute right-3 top-3 h-3 w-3 border-r border-t border-current opacity-40" />
      <span className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-current opacity-40" />
      <span className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-current opacity-40" />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60">
        <KindMark kind={kind} />
      </div>

      <div className="relative z-10 flex w-full items-end justify-between gap-3 p-4 sm:p-5">
        <span className="max-w-[70%] font-sans text-[11px] uppercase tracking-[0.08em] opacity-70 sm:text-[12px]">
          {label}
        </span>
        <span className="shrink-0 font-sans text-[11px] tabular-nums uppercase tracking-[0.08em] opacity-50 sm:text-[12px]">
          {index ? `${index}` : meta}
        </span>
      </div>
    </div>
  );
}
