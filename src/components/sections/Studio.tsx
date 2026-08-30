import { Placeholder } from "@/components/ui/Placeholder";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

export function Studio() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-cubs">
        <Reveal>
          <SectionLabel index="08" label="The studio" />
        </Reveal>

        <div className="mt-8 grid-12">
          <Reveal className="col-span-12 md:col-span-7">
            <h2 className="font-sans text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.01em]">
              We&rsquo;re{" "}
              <span className="font-serif italic font-normal">
                Areen Cubs.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="col-span-12 mt-6 md:col-span-5 md:mt-0">
            <p className="font-sans text-[17px] leading-[1.6] text-[var(--color-ink-soft)] sm:text-[18px]">
              A small creative team that likes good ideas, clear thinking,
              and work people actually remember. No layers of account
              management between you and the people making the thing.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid-12 sm:mt-16">
          <Reveal className="col-span-12 md:col-span-7">
            <Placeholder
              tone="dark"
              kind="video"
              label="On set — BTS, production day"
              meta="Studio"
              ratio="4/5"
            />
          </Reveal>

          <div className="col-span-12 mt-4 flex flex-col gap-4 md:col-span-5 md:mt-0">
            <Reveal delay={0.06}>
              <Placeholder
                tone="paper"
                kind="image"
                label="The edit desk, midway through a cut"
                meta="Studio"
                ratio="16/10"
              />
            </Reveal>
            <Reveal delay={0.12}>
              <Placeholder
                tone="primary"
                kind="note"
                label="Whiteboard — campaign logic, week two"
                meta="Studio"
                ratio="16/10"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
