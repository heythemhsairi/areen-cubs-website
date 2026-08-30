import type { Metadata } from "next";
import Link from "next/link";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageIntro } from "@/components/ui/PageIntro";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected strategy, creative and production work from Areen Cubs.",
};

export default function WorkPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Selected work / 2024—2026"
        title={<>The work, and the <span className="serif-accent text-[var(--color-primary)]">thinking behind it.</span></>}
        description="Projects are presented as creative decisions, not just finished frames. Approved imagery can drop into the media system without changing the story around it."
        aside={<span className="eyebrow">04 projects<br />02 full case studies</span>}
      />
      <section className="container-cubs pb-28 sm:pb-40">
        {projects.map((project, i) => (
          <Reveal key={project.slug} className={i === 0 ? "" : "mt-24 sm:mt-36"}>
            <article className={i === 1 ? "grid-12" : i === 2 ? "grid-12 items-end" : ""}>
              <Link
                href={`/work/${project.slug}`}
                className={i === 1 ? "group col-span-12 md:col-span-8 md:col-start-5" : i === 2 ? "group col-span-12 md:col-span-9" : "group block"}
              >
                <ProjectVisual kind={project.visual} client={project.client} index={project.index} compact={i > 0} />
                <div className="mt-5 grid-12 border-b border-[var(--color-line)] pb-7">
                  <div className="col-span-12 md:col-span-7">
                    <p className="eyebrow">{project.index} / {project.client} / {project.year}</p>
                    <h2 className="mt-3 font-sans text-[clamp(1.8rem,3.8vw,3.4rem)] font-medium leading-[1.04] tracking-[-0.025em] text-[var(--color-dark)] transition-colors group-hover:text-[var(--color-primary)]">{project.title}</h2>
                  </div>
                  <div className="col-span-12 mt-6 md:col-span-4 md:col-start-9 md:mt-0">
                    <p className="font-sans text-[15px] leading-[1.55] text-[var(--color-ink-soft)]">{project.summary}</p>
                    <p className="mt-4 font-sans text-xs uppercase tracking-[0.1em] text-[var(--color-primary)]">{project.scope.join(" · ")} ↗</p>
                  </div>
                </div>
              </Link>
            </article>
          </Reveal>
        ))}
      </section>
      <FinalCta />
    </main>
  );
}
