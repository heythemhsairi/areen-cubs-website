import { Placeholder } from "@/components/ui/Placeholder";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { caseStudy } from "@/data/caseStudy";

const media: {
  kind: "image" | "note" | "video";
  tone: "paper" | "dark" | "primary" | "line";
  label: string;
}[] = [
  { kind: "image", tone: "dark", label: "Campaign still — before" },
  { kind: "note", tone: "paper", label: "Strategy note" },
  { kind: "note", tone: "primary", label: "Storyboard fragment" },
  { kind: "video", tone: "dark", label: "Production — video frame" },
  { kind: "image", tone: "primary", label: "Final creative" },
];

export function CaseStudy() {
  return (
    <section className="py-24 sm:py-32" id="roc-athletic">
      <div className="container-cubs">
        <Reveal>
          <SectionLabel index="05" label="Featured case study" />
        </Reveal>

        <div className="mt-8 grid-12 items-end">
          <Reveal className="col-span-12 md:col-span-8">
            <p className="font-sans text-[13px] uppercase tracking-[0.1em] text-[var(--color-ink-faint)]">
              {caseStudy.client} — {caseStudy.year}
            </p>
            <h2 className="mt-3 max-w-3xl font-sans text-[clamp(1.9rem,4.6vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.01em]">
              {caseStudy.title}
            </h2>
          </Reveal>
          <Reveal
            delay={0.08}
            className="col-span-12 mt-6 md:col-span-4 md:mt-0 md:text-right"
          >
            <p className="font-sans text-[14px] text-[var(--color-ink-soft)]">
              {caseStudy.scope}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 sm:mt-20">
        {caseStudy.stages.map((stage, i) => {
          const isReversed = i % 2 === 1;
          const m = media[i];
          return (
            <Reveal key={stage.label} delay={0.04 * i}>
              <div className="container-cubs border-t border-[var(--color-line)] py-12 last:border-b sm:py-16">
                <div className="grid-12 items-center">
                  <div
                    className={
                      isReversed
                        ? "col-span-12 md:col-span-6 md:col-start-7 md:order-2"
                        : "col-span-12 md:col-span-6"
                    }
                  >
                    <Placeholder
                      tone={m.tone}
                      kind={m.kind}
                      label={m.label}
                      index={String(i + 1).padStart(2, "0")}
                      ratio="4/3"
                    />
                  </div>
                  <div
                    className={
                      isReversed
                        ? "col-span-12 mt-6 md:col-span-5 md:order-1 md:mt-0"
                        : "col-span-12 mt-6 md:col-span-5 md:col-start-8 md:mt-0"
                    }
                  >
                    <span className="font-sans text-[12px] uppercase tracking-[0.12em] text-[var(--color-primary)]">
                      {stage.label}
                    </span>
                    <p className="mt-3 font-sans text-[19px] leading-[1.5] text-[var(--color-ink)] sm:text-[21px]">
                      {stage.text}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
