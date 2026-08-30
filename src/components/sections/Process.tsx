import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { processStages } from "@/data/process";

export function Process() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-cubs">
        <Reveal>
          <SectionLabel index="07" label="Process" />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 max-w-2xl font-sans text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.01em]">
            How the work{" "}
            <span className="font-serif italic font-normal">gets made.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid-12 border-t border-[var(--color-line)] sm:mt-20">
          {processStages.map((stage, i) => (
            <Reveal
              key={stage.index}
              delay={i * 0.06}
              className="col-span-12 border-b border-[var(--color-line)] py-8 sm:col-span-3 sm:border-b-0 sm:py-10"
            >
              <div className="sm:border-l sm:border-[var(--color-line)] sm:pl-6">
                <span className="font-sans text-[13px] tabular-nums text-[var(--color-ink-faint)]">
                  {stage.index}
                </span>
                <h3 className="mt-4 font-sans text-[26px] font-medium leading-none">
                  {stage.name}
                </h3>
                <p className="mt-4 max-w-[22ch] font-sans text-[15px] leading-[1.55] text-[var(--color-ink-soft)]">
                  {stage.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
