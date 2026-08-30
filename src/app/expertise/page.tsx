import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/FinalCta";
import { ArrowLink } from "@/components/ui/Buttons";
import { PageIntro } from "@/components/ui/PageIntro";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { Reveal } from "@/components/ui/Reveal";
import { processStages } from "@/data/process";
import { projects } from "@/data/projects";
import { serviceCategories } from "@/data/services";

export const metadata: Metadata = {
  title: "Expertise",
  description: "Strategy, creative and production—connected by one line of thinking.",
};

export default function ExpertisePage() {
  return (
    <main>
      <PageIntro
        eyebrow="Expertise / Three connected capabilities"
        title={<>What we <span className="serif-accent text-[var(--color-primary)]">actually do.</span></>}
        description="Strategy gives the work a reason. Creative gives it a shape. Production puts it into the world without losing the point."
      />

      <section className="pb-28 sm:pb-40">
        {serviceCategories.map((service, i) => {
          const project = projects[i % projects.length];
          return (
            <Reveal key={service.id}>
              <article className="container-cubs border-t border-[var(--color-line)] py-16 sm:py-24">
                <div className="grid-12">
                  <div className="col-span-12 md:col-span-5">
                    <p className="eyebrow">{service.index} / {service.name}</p>
                    <h2 className="display-md mt-5 text-[var(--color-dark)]">{service.headline}</h2>
                    <p className="mt-7 max-w-lg font-sans text-[17px] leading-[1.65] text-[var(--color-ink-soft)]">{service.description}</p>
                  </div>
                  <div className="col-span-12 mt-10 md:col-span-6 md:col-start-7 md:mt-0">
                    <ProjectVisual kind={project.visual} client={project.client} index={`Related / ${service.index}`} compact />
                    <ul className="mt-6 grid grid-cols-1 border-t border-[var(--color-line)] sm:grid-cols-2">
                      {service.items.map((item) => <li key={item} className="border-b border-[var(--color-line)] py-3 font-sans text-[15px] text-[var(--color-dark)]">{item}</li>)}
                    </ul>
                    <ArrowLink href={`/work/${project.slug}`} className="mt-6">See related work</ArrowLink>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </section>

      <section className="section-pad bg-[var(--color-canvas)]">
        <div className="container-cubs">
          <Reveal><p className="eyebrow">Process / Think → Create → Produce → Learn</p><h2 className="display-md mt-6 max-w-3xl text-[var(--color-dark)]">How the work <span className="serif-accent">moves.</span></h2></Reveal>
          <div className="mt-16 border-t border-[var(--color-line)]">
            {processStages.map((stage) => <Reveal key={stage.name}><div className="grid-12 border-b border-[var(--color-line)] py-7 sm:py-10"><span className="col-span-2 font-sans text-xs tabular-nums text-[var(--color-ink-faint)]">{stage.index}</span><h3 className="col-span-10 font-sans text-[clamp(1.8rem,3.3vw,3rem)] font-medium text-[var(--color-primary)] sm:col-span-4">{stage.name}</h3><p className="col-span-10 col-start-3 mt-4 max-w-lg font-sans text-[16px] leading-[1.55] text-[var(--color-ink-soft)] sm:col-span-5 sm:col-start-8 sm:mt-1">{stage.text}</p></div></Reveal>)}
          </div>
        </div>
      </section>
      <FinalCta />
    </main>
  );
}
