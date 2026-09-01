import Link from "next/link";
import { ArrowLink } from "@/components/ui/Buttons";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects } from "@/data/projects";
import { insights } from "@/data/insights";
import { serviceCategories } from "@/data/services";
import { HeroMedia } from "@/components/sections/HeroMedia";
import { HeroNavigation } from "@/components/sections/HeroNavigation";

export function HomeHero() {
  return (
    <section className="hero-stage bg-[var(--color-paper)]">
      <div className="hero-canvas">
        <div className="hero-media">
          <HeroMedia />
        </div>

        <HeroNavigation />

        <div className="hero-copy">
          <Reveal>
            <p className="hero-eyebrow">Independent Creative Agency - Tunisia</p>
          </Reveal>
          <Reveal delay={0.04}>
            <h1 className="hero-heading text-[var(--color-dark)]">
              <span className="block font-sans">Make something</span>
              <span className="serif-accent block text-[var(--color-primary)]">
                people remember.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="hero-support font-sans text-[var(--color-ink-soft)]">
              We help brands figure out what to say, how to look, and how to
              make people care.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <ArrowLink href="/work" className="hero-cta">
              See our work
            </ArrowLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function HomeWork() {
  const [roc, okop] = projects;
  return (
    <section className="section-pad border-t border-[var(--color-line)]">
      <div className="container-cubs">
        <Reveal><SectionLabel index="02" label="Selected work" /></Reveal>
        <div className="mt-10 grid-12 items-end">
          <Reveal className="col-span-12 lg:col-span-8"><h2 className="display-md text-[var(--color-dark)]">Different problems need <span className="serif-accent">different shapes.</span></h2></Reveal>
          <Reveal delay={0.06} className="col-span-12 mt-7 lg:col-span-4 lg:mt-0 lg:text-right"><ArrowLink href="/work">View all work</ArrowLink></Reveal>
        </div>
        <article className="mt-16 sm:mt-20">
          <Reveal><Link href={`/work/${roc.slug}`} className="group block"><ProjectVisual kind={roc.visual} client={roc.client} index={roc.index} /><ProjectCaption project={roc} /></Link></Reveal>
        </article>
        <article className="mt-20 grid-12 items-start sm:mt-28">
          <Reveal className="col-span-12 md:col-span-7 md:col-start-5"><Link href={`/work/${okop.slug}`} className="group block"><ProjectVisual kind={okop.visual} client={okop.client} index={okop.index} compact /><ProjectCaption project={okop} /></Link></Reveal>
        </article>
      </div>
    </section>
  );
}

function ProjectCaption({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="mt-5 grid grid-cols-[1fr_auto] gap-5 border-b border-[var(--color-line)] pb-6">
      <div><p className="font-sans text-xs uppercase tracking-[0.14em] text-[var(--color-ink-faint)]">{project.client} · {project.year}</p><h3 className="mt-2 max-w-2xl font-sans text-[22px] font-medium leading-tight text-[var(--color-dark)] transition-colors group-hover:text-[var(--color-primary)] sm:text-[28px]">{project.title}</h3></div>
      <span className="mt-1 text-[var(--color-primary)] transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
    </div>
  );
}

export function HomePhilosophy() {
  return (
    <section className="section-pad bg-[var(--color-canvas)]">
      <div className="container-cubs grid-12">
        <Reveal className="col-span-12 lg:col-span-4"><SectionLabel index="03" label="Point of view" /></Reveal>
        <div className="col-span-12 mt-10 lg:col-span-8 lg:mt-0">
          <Reveal><h2 className="display-md max-w-4xl text-[var(--color-primary)]">Creative is <span className="serif-accent text-[var(--color-dark)]">not decoration.</span></h2></Reveal>
          <Reveal delay={0.06}><p className="mt-8 max-w-2xl font-sans text-[19px] leading-[1.55] text-[var(--color-ink-soft)] sm:text-[22px]">A visual, hook, script or edit should have a reason to exist. Looking good is useful. Knowing what the work is trying to do comes first.</p></Reveal>
          <Reveal delay={0.1}><div className="mt-14 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[var(--color-line)] pt-7 font-sans text-[clamp(1.1rem,2.2vw,1.8rem)] text-[var(--color-dark)]"><span>Strategy</span><span className="text-[var(--color-secondary)]">→</span><span>Idea</span><span className="text-[var(--color-secondary)]">→</span><span>Execution</span><span className="text-[var(--color-secondary)]">→</span><span>Learning</span></div></Reveal>
        </div>
      </div>
    </section>
  );
}

export function HomeExpertise() {
  return (
    <section className="section-pad">
      <div className="container-cubs">
        <Reveal><SectionLabel index="04" label="Expertise" /></Reveal>
        <div className="mt-10 grid-12 items-end"><Reveal className="col-span-12 lg:col-span-8"><h2 className="display-md text-[var(--color-dark)]">Think it through. <span className="serif-accent">Then make it real.</span></h2></Reveal><Reveal className="col-span-12 mt-7 lg:col-span-4 lg:mt-0 lg:text-right"><ArrowLink href="/expertise">Explore expertise</ArrowLink></Reveal></div>
        <div className="mt-16 border-t border-[var(--color-line)]">
          {serviceCategories.map((item) => <Reveal key={item.id}><div className="grid-12 border-b border-[var(--color-line)] py-7 sm:py-9"><span className="col-span-2 font-sans text-xs text-[var(--color-ink-faint)]">{item.index}</span><h3 className="col-span-10 font-sans text-[clamp(1.7rem,3vw,2.6rem)] font-medium text-[var(--color-primary)] sm:col-span-4">{item.name}</h3><p className="col-span-10 col-start-3 mt-4 max-w-lg font-sans text-[16px] leading-[1.55] text-[var(--color-ink-soft)] sm:col-span-5 sm:col-start-8 sm:mt-0">{item.description}</p></div></Reveal>)}
        </div>
      </div>
    </section>
  );
}

export function HomeFeaturedCase() {
  const project = projects[0];
  return (
    <section className="section-pad bg-[var(--color-paper-dim)]">
      <div className="container-cubs">
        <Reveal><SectionLabel index="05" label="Featured case study" /></Reveal>
        <div className="mt-10 grid-12"><Reveal className="col-span-12 lg:col-span-8"><p className="eyebrow">{project.client} / {project.year}</p><h2 className="display-md mt-4 max-w-4xl text-[var(--color-dark)]">From ambition to a <span className="serif-accent text-[var(--color-primary)]">recognizable system.</span></h2></Reveal><Reveal delay={0.06} className="col-span-12 mt-8 lg:col-span-4 lg:mt-0"><p className="font-sans text-[17px] leading-[1.55] text-[var(--color-ink-soft)]">{project.summary}</p><ArrowLink href={`/work/${project.slug}`} className="mt-6">Read the case study</ArrowLink></Reveal></div>
        <Reveal delay={0.1} className="mt-14"><ProjectVisual kind={project.visual} client={project.client} index="Case / 01" /></Reveal>
      </div>
    </section>
  );
}

export function HomeStudio() {
  return (
    <section className="section-pad">
      <div className="container-cubs grid-12 items-center">
        <Reveal className="col-span-12 md:col-span-6"><StudioVisual /></Reveal>
        <Reveal delay={0.08} className="col-span-12 mt-10 md:col-span-5 md:col-start-8 md:mt-0"><SectionLabel index="06" label="The studio" /><h2 className="display-md mt-6 text-[var(--color-dark)]">Small team. <span className="serif-accent">Close to the work.</span></h2><p className="mt-6 font-sans text-[18px] leading-[1.6] text-[var(--color-ink-soft)]">We like clear thinking, honest conversations and staying near the thing being made—from the first note to the final cut.</p><ArrowLink href="/studio" className="mt-7">Meet the studio</ArrowLink></Reveal>
      </div>
    </section>
  );
}

function StudioVisual() {
  return <div role="img" aria-label="Documentary studio photography placeholder" className="editorial-grid relative aspect-[4/5] overflow-hidden border border-[var(--color-line)] bg-[var(--color-canvas)]"><div className="absolute inset-[8%] bg-[var(--color-primary)] p-[8%] text-white"><span className="eyebrow !text-white/65">Behind the work / Asset slot</span><p className="absolute bottom-[9%] left-[9%] max-w-[8ch] font-serif text-[clamp(2.2rem,6vw,5rem)] italic leading-[0.9]">The room where ideas get tested.</p></div><div className="absolute bottom-[5%] right-[4%] h-[34%] w-[35%] border border-[var(--color-line-strong)] bg-[var(--color-paper)] p-4"><span className="font-sans text-[10px] uppercase tracking-[0.12em] text-[var(--color-ink-faint)]">Documentary BTS photography required</span></div></div>;
}

export function HomeInsights() {
  return (
    <section className="section-pad border-t border-[var(--color-line)]">
      <div className="container-cubs"><Reveal><SectionLabel index="07" label="Selected insights" /></Reveal><div className="mt-10 grid-12 items-end"><Reveal className="col-span-12 lg:col-span-8"><h2 className="display-md text-[var(--color-dark)]">Things we’ve been <span className="serif-accent">thinking about.</span></h2></Reveal><Reveal className="col-span-12 mt-7 lg:col-span-4 lg:mt-0 lg:text-right"><ArrowLink href="/insights">Read all insights</ArrowLink></Reveal></div>
        <div className="mt-14 border-t border-[var(--color-line)]">{insights.slice(0,3).map((insight) => <Reveal key={insight.slug}><Link href={`/insights/${insight.slug}`} className="group grid-12 border-b border-[var(--color-line)] py-7"><span className="col-span-3 font-sans text-xs uppercase tracking-[0.12em] text-[var(--color-primary)] sm:col-span-2">{insight.category}</span><h3 className="col-span-9 font-sans text-[20px] font-medium leading-tight text-[var(--color-dark)] transition-colors group-hover:text-[var(--color-primary)] sm:col-span-7 sm:text-[25px]">{insight.title}</h3><span className="col-span-9 col-start-4 mt-3 font-sans text-sm text-[var(--color-ink-faint)] sm:col-span-3 sm:col-start-auto sm:mt-1 sm:text-right">{insight.readTime} read ↗</span></Link></Reveal>)}</div>
      </div>
    </section>
  );
}
