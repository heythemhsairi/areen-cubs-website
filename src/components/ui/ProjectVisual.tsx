import { cn } from "@/lib/utils";
import type { ProjectVisual as ProjectVisualKind } from "@/data/projects";

interface ProjectVisualProps {
  kind: ProjectVisualKind;
  client: string;
  index?: string;
  className?: string;
  compact?: boolean;
}

const assetNote = "Visual direction · final media pending";

export function ProjectVisual({
  kind,
  client,
  index,
  className,
  compact = false,
}: ProjectVisualProps) {
  return (
    <div
      role="img"
      aria-label={`${client} concept visual. Approved project media is still required.`}
      className={cn(
        "relative isolate w-full overflow-hidden border border-[var(--color-line)]",
        compact ? "aspect-[4/3]" : "aspect-[16/9] md:aspect-[2/1]",
        className,
      )}
    >
      {kind === "roc" ? <RocVisual compact={compact} /> : null}
      {kind === "okop" ? <OkopVisual compact={compact} /> : null}
      {kind === "film" ? <FilmVisual compact={compact} /> : null}
      {kind === "identity" ? <IdentityVisual compact={compact} /> : null}

      <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between gap-4 border-t border-white/25 bg-[var(--color-dark)]/88 px-4 py-3 text-white backdrop-blur-sm sm:px-5">
        <span className="font-sans text-[10px] font-medium uppercase tracking-[0.13em] sm:text-[11px]">
          {assetNote}
        </span>
        <span className="shrink-0 font-sans text-[11px] tabular-nums text-white/65">
          {index ?? "AC"}
        </span>
      </div>
    </div>
  );
}

function RocVisual({ compact }: { compact: boolean }) {
  return (
    <div className="blue-grid absolute inset-0 bg-[var(--color-primary)] text-white">
      <div className="absolute left-[5%] top-[8%] font-sans text-[10px] uppercase tracking-[0.18em] text-white/70 sm:text-xs">
        Campaign system / 2025
      </div>
      <div className="absolute right-[5%] top-[8%] text-right font-sans text-[10px] uppercase tracking-[0.18em] text-white/70 sm:text-xs">
        Move with intention
      </div>
      <div className="absolute inset-x-[5%] top-[25%] flex items-end justify-between border-y border-white/35 py-[3%]">
        <strong className={cn("font-sans font-bold leading-[0.72] tracking-[-0.08em]", compact ? "text-[22vw] sm:text-[12vw]" : "text-[24vw] md:text-[14vw]")}>ROC</strong>
        <span className="mb-1 max-w-[12ch] font-serif text-[clamp(1rem,2.3vw,2.2rem)] italic leading-none text-white/90">
          Keep the reason in the frame.
        </span>
      </div>
      <div className="absolute bottom-[18%] left-[5%] flex gap-6 font-sans text-[10px] uppercase tracking-[0.13em] text-white/70 sm:text-xs">
        <span>01 / Voice</span><span>02 / Motion</span><span>03 / Rhythm</span>
      </div>
    </div>
  );
}

function OkopVisual({ compact }: { compact: boolean }) {
  const cells = ["O", "K", "O", "P", "↗", "24"];
  return (
    <div className="absolute inset-0 bg-[var(--color-canvas)] p-[5%] text-[var(--color-dark)]">
      <div className="flex items-start justify-between border-b border-[var(--color-line-strong)] pb-[3%]">
        <strong className="font-sans text-sm tracking-[0.18em]">OKOP / SYSTEM</strong>
        <span className="font-sans text-[10px] uppercase tracking-[0.14em] text-[var(--color-ink-faint)]">Six formats / one grammar</span>
      </div>
      <div className={cn("mt-[4%] grid h-[58%] grid-cols-6 gap-[1.5%]", compact && "grid-cols-3 h-[55%]") }>
        {cells.map((cell, i) => (
          <div key={`${cell}-${i}`} className={cn("relative overflow-hidden border border-[var(--color-line)]", i % 3 === 0 ? "bg-[var(--color-primary)] text-white" : i % 3 === 1 ? "bg-[var(--color-paper-dim)]" : "bg-white")}>
            <span className="absolute left-2 top-2 font-sans text-[9px] tabular-nums opacity-60">0{i + 1}</span>
            <span className="absolute bottom-2 left-2 font-sans text-[clamp(1.4rem,5vw,4.5rem)] font-medium leading-none tracking-[-0.08em]">{cell}</span>
          </div>
        ))}
      </div>
      <p className="absolute bottom-[17%] left-[5%] font-serif text-[clamp(1rem,2vw,1.8rem)] italic">Structure that leaves room for the idea.</p>
    </div>
  );
}

function FilmVisual({ compact }: { compact: boolean }) {
  return (
    <div className="absolute inset-0 bg-[var(--color-dark)] text-white">
      <div className="absolute inset-[7%] border border-white/25">
        <div className="absolute left-[8%] top-[13%] h-[58%] w-[56%] bg-[var(--color-secondary)]">
          <div className="h-full w-full bg-[linear-gradient(125deg,transparent_0_42%,rgba(255,255,255,.24)_42%_43%,transparent_43%)]" />
        </div>
        <div className="absolute right-[7%] top-[22%] max-w-[27%]">
          <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-white/55">Edit note / 04</span>
          <p className={cn("mt-3 font-serif italic leading-[1.05]", compact ? "text-xl" : "text-[clamp(1.3rem,3vw,3.2rem)]")}>Start with the thought. Cut everything that hides it.</p>
        </div>
        <div className="absolute inset-x-[4%] bottom-[7%] flex items-center gap-1">
          {Array.from({ length: 18 }).map((_, i) => <span key={i} className={cn("h-2 flex-1", i < 7 ? "bg-[var(--color-secondary)]" : "bg-white/20")} />)}
        </div>
      </div>
      <span className="absolute left-[3%] top-[3%] font-sans text-[10px] tabular-nums tracking-[0.14em] text-white/55">00:12:08</span>
      <span className="absolute right-[3%] top-[3%] font-sans text-[10px] uppercase tracking-[0.14em] text-white/55">Picture lock / pending</span>
    </div>
  );
}

function IdentityVisual({ compact }: { compact: boolean }) {
  return (
    <div className="editorial-grid absolute inset-0 bg-[var(--color-paper-dim)] text-[var(--color-dark)]">
      <div className="absolute left-[9%] top-[9%] h-[64%] w-[29%] border border-[var(--color-line-strong)] bg-white p-[4%] shadow-[16px_16px_0_var(--color-secondary)]">
        <span className="font-sans text-[9px] uppercase tracking-[0.16em] text-[var(--color-ink-faint)]">Identity / A</span>
        <strong className={cn("absolute bottom-[9%] left-[12%] font-sans font-medium leading-none tracking-[-0.08em]", compact ? "text-3xl" : "text-[clamp(2rem,5vw,5rem)]")}>ONE</strong>
      </div>
      <div className="absolute right-[10%] top-[20%] h-[53%] w-[34%] bg-[var(--color-primary)] p-[4%] text-white">
        <span className="font-sans text-[9px] uppercase tracking-[0.16em] text-white/60">Identity / B</span>
        <span className="absolute bottom-[10%] left-[10%] font-serif text-[clamp(1.2rem,3vw,3rem)] italic leading-none">Fewer ingredients.<br />Stronger signal.</span>
      </div>
    </div>
  );
}
