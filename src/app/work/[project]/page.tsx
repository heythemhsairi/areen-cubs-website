import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FinalCta } from "@/components/sections/FinalCta";
import { ArrowLink } from "@/components/ui/Buttons";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { Reveal } from "@/components/ui/Reveal";
import { getProject, projects } from "@/data/projects";

type Props = { params: Promise<{ project: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ project: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { project: slug } = await params;
  const project = getProject(slug);
  return project ? { title: project.client, description: project.summary } : {};
}

export default async function ProjectPage({ params }: Props) {
  const { project: slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const chapters = project.chapters.length ? project.chapters : [
    { label: "Context" as const, title: "This case-study structure is ready for approved project detail.", text: "The client name, brief, process, credits and outcomes remain intentionally unpublished while the project is confidential." },
    { label: "Execution" as const, title: "Media, working files and production credits still required.", text: "Final photography, film frames, identity applications and behind-the-scenes material can replace the visual-direction panels when cleared." },
    { label: "Result" as const, title: "No result has been invented for this placeholder.", text: "Documented outcomes can be added when the client and team approve them." },
  ];

  return (
    <main>
      <header className="container-cubs page-pad pb-14 sm:pb-20">
        <Reveal><ArrowLink href="/work">All work</ArrowLink></Reveal>
        <div className="mt-12 grid-12 items-end">
          <Reveal className="col-span-12 lg:col-span-8">
            <p className="eyebrow">{project.index} / {project.client}</p>
            <h1 className="display-lg mt-5 text-[var(--color-dark)]">{project.title}</h1>
          </Reveal>
          <Reveal delay={0.08} className="col-span-12 mt-8 lg:col-span-3 lg:col-start-10 lg:mt-0">
            <dl className="space-y-5 border-l border-[var(--color-line-strong)] pl-5 font-sans text-sm">
              <div><dt className="eyebrow">Year</dt><dd className="mt-1 text-[var(--color-dark)]">{project.year}</dd></div>
              <div><dt className="eyebrow">Scope</dt><dd className="mt-1 leading-6 text-[var(--color-dark)]">{project.scope.join(" / ")}</dd></div>
            </dl>
          </Reveal>
        </div>
      </header>

      <Reveal className="container-cubs"><ProjectVisual kind={project.visual} client={project.client} index={`${project.index} / Hero`} /></Reveal>

      <section className="container-cubs section-pad">
        <div className="grid-12 border-y border-[var(--color-line)] py-10 sm:py-14">
          <p className="col-span-12 eyebrow md:col-span-3">Project note</p>
          <p className="col-span-12 mt-6 max-w-3xl font-sans text-[clamp(1.4rem,2.6vw,2.2rem)] leading-[1.35] tracking-[-0.015em] text-[var(--color-dark)] md:col-span-8 md:mt-0">{project.summary}</p>
        </div>
      </section>

      <section className="pb-28 sm:pb-40">
        {chapters.map((chapter, i) => (
          <Reveal key={`${chapter.label}-${i}`}>
            <article className="container-cubs border-t border-[var(--color-line)] py-14 sm:py-24">
              <div className="grid-12 items-start">
                <p className="col-span-3 eyebrow">{String(i + 1).padStart(2, "0")} / {chapter.label}</p>
                <div className="col-span-12 mt-6 md:col-span-5 md:mt-0">
                  <h2 className="font-sans text-[clamp(1.8rem,3.4vw,3rem)] font-medium leading-[1.08] tracking-[-0.02em] text-[var(--color-dark)]">{chapter.title}</h2>
                  <p className="mt-6 max-w-xl font-sans text-[17px] leading-[1.65] text-[var(--color-ink-soft)]">{chapter.text}</p>
                </div>
                <div className="col-span-12 mt-9 md:col-span-3 md:col-start-10 md:mt-0">
                  <ChapterFragment index={i + 1} label={chapter.label} />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
      <FinalCta />
    </main>
  );
}

function ChapterFragment({ index, label }: { index: number; label: string }) {
  const primary = index % 3 === 1;
  return (
    <div role="img" aria-label={`${label} working-material placeholder`} className={`relative aspect-[4/5] overflow-hidden border border-[var(--color-line)] p-5 ${primary ? "blue-grid bg-[var(--color-primary)] text-white" : "editorial-grid bg-[var(--color-canvas)] text-[var(--color-dark)]"}`}>
      <span className="font-sans text-[10px] uppercase tracking-[0.14em] opacity-65">Working material / {String(index).padStart(2, "0")}</span>
      <strong className="absolute bottom-14 left-5 font-sans text-[clamp(2.5rem,6vw,5rem)] font-medium leading-none tracking-[-0.08em]">{label.slice(0, 3).toUpperCase()}</strong>
      <span className="absolute inset-x-5 bottom-5 border-t border-current pt-2 font-sans text-[9px] uppercase tracking-[0.12em] opacity-55">Approved asset required</span>
    </div>
  );
}
