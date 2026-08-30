import { cn } from "@/lib/utils";

interface SectionLabelProps {
  index: string;
  label: string;
  className?: string;
  tone?: "ink" | "paper";
}

export function SectionLabel({
  index,
  label,
  className,
  tone = "ink",
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 font-sans text-[12px] uppercase tracking-[0.16em]",
        tone === "ink" ? "text-[var(--color-ink-soft)]" : "text-white/60",
        className
      )}
    >
      <span className="tabular-nums">{index}</span>
      <span
        className={cn(
          "h-px w-8 shrink-0",
          tone === "ink" ? "bg-[var(--color-line-strong)]" : "bg-white/30"
        )}
        aria-hidden="true"
      />
      <span>{label}</span>
    </div>
  );
}
