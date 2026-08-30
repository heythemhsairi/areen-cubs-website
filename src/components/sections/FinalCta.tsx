import { Reveal } from "@/components/ui/Reveal";
import { StartProjectButton } from "@/components/ui/Buttons";

export function FinalCta() {
  return (
    <section className="bg-[var(--color-secondary)] py-24 text-white sm:py-32">
      <div className="container-cubs grid-12 items-end">
        <Reveal className="col-span-12 lg:col-span-9">
          <p className="eyebrow !text-white/65">Start a project</p>
          <h2 className="display-lg mt-5 max-w-5xl">Have something <span className="serif-accent">worth building?</span></h2>
        </Reveal>
        <Reveal delay={0.08} className="col-span-12 mt-10 lg:col-span-3 lg:mt-0 lg:text-right">
          <StartProjectButton variant="outline-light" />
        </Reveal>
      </div>
    </section>
  );
}
