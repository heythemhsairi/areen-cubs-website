import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

const sequence = ["Strategy", "Idea", "Execution", "Consistency"];

export function Philosophy() {
  return (
    <section className="bg-[var(--color-dark)] py-24 text-white sm:py-32">
      <div className="container-cubs">
        <Reveal>
          <SectionLabel index="03" label="Philosophy" tone="paper" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-8 max-w-4xl font-sans text-[clamp(2.25rem,6.5vw,5rem)] font-medium leading-[1.05] tracking-[-0.01em]">
            Creative is{" "}
            <span className="font-serif italic font-normal">
              not decoration.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.12} className="mt-10 max-w-xl sm:mt-12">
          <p className="font-sans text-[18px] leading-[1.6] text-white/70 sm:text-[20px]">
            Good-looking content isn&rsquo;t enough. Every visual, hook,
            script and edit should have a reason to exist — or it&rsquo;s
            just more noise with better lighting.
          </p>
        </Reveal>

        <Reveal delay={0.18} className="mt-20 sm:mt-28">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-5 border-t border-white/15 pt-10 sm:gap-x-6">
            {sequence.map((word, i) => (
              <span key={word} className="flex items-center gap-x-4 sm:gap-x-6">
                <span
                  className="font-sans text-[clamp(1.5rem,3.6vw,2.75rem)] font-medium tracking-[-0.01em]"
                  style={{ opacity: 0.35 + i * 0.22 }}
                >
                  {word}
                </span>
                {i < sequence.length - 1 && (
                  <span className="font-sans text-[1.5rem] text-white/30" aria-hidden="true">
                    →
                  </span>
                )}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
