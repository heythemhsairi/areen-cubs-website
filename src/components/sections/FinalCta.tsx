import { StartProjectButton } from "@/components/ui/Buttons";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section
      id="start-a-project"
      className="bg-[var(--color-primary)] py-28 text-white sm:py-36"
    >
      <div className="container-cubs">
        <Reveal>
          <p className="font-sans text-[13px] uppercase tracking-[0.16em] text-white/70">
            Start a project
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-6 max-w-3xl font-sans text-[clamp(2.25rem,6.5vw,5.25rem)] font-medium leading-[1.02] tracking-[-0.01em]">
            Have something{" "}
            <span className="font-serif italic font-normal">
              worth building?
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.12} className="mt-10 sm:mt-12">
          <StartProjectButton variant="outline-light" />
        </Reveal>
      </div>
    </section>
  );
}
