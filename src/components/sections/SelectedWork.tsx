import { Placeholder } from "@/components/ui/Placeholder";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowLink } from "@/components/ui/Buttons";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

function ProjectMeta({
  client,
  scope,
  year,
  id,
  compact = false,
}: {
  client: string;
  scope: string;
  year: string;
  id: string;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <div className="flex flex-col gap-5">
        <div>
          <p className="font-sans text-[12px] uppercase tracking-[0.1em] text-[var(--color-ink-faint)]">
            Client
          </p>
          <p className="mt-1 font-sans text-[19px] text-[var(--color-ink)]">
            {client}
          </p>
        </div>
        <div>
          <p className="font-sans text-[12px] uppercase tracking-[0.1em] text-[var(--color-ink-faint)]">
            Scope
          </p>
          <p className="mt-1 font-sans text-[15px] text-[var(--color-ink-soft)]">
            {scope} · {year}
          </p>
        </div>
        <ArrowLink href={`/#${id}`}>Case study</ArrowLink>
      </div>
    );
  }

  return (
    <div className="grid-12 items-end">
      <div className="col-span-12 sm:col-span-7">
        <p className="font-sans text-[12px] uppercase tracking-[0.1em] text-[var(--color-ink-faint)]">
          Client
        </p>
        <p className="mt-1 font-sans text-[19px] text-[var(--color-ink)]">
          {client}
        </p>
      </div>
      <div className="col-span-8 mt-5 sm:col-span-3 sm:mt-0">
        <p className="font-sans text-[12px] uppercase tracking-[0.1em] text-[var(--color-ink-faint)]">
          Scope
        </p>
        <p className="mt-1 font-sans text-[15px] text-[var(--color-ink-soft)]">
          {scope} · {year}
        </p>
      </div>
      <div className="col-span-4 mt-5 sm:col-span-2 sm:mt-0 sm:text-right">
        <ArrowLink href={`/#${id}`}>Case study</ArrowLink>
      </div>
    </div>
  );
}

export function SelectedWork() {
  const [rocAthletic, okop, project03, project04] = projects;

  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="container-cubs">
        <Reveal>
          <SectionLabel index="02" label="Selected work" />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 max-w-2xl font-sans text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.01em]">
            Four projects.{" "}
            <span className="font-serif italic font-normal">
              Four different problems.
            </span>
          </h2>
        </Reveal>
      </div>

      {/* 01 — full-width cinematic project */}
      <div className="container-cubs mt-16 border-t border-[var(--color-line)] pt-16 sm:mt-20 sm:pt-20">
        <Reveal>
          <Placeholder
            tone={rocAthletic.tone}
            kind="video"
            label={rocAthletic.title}
            index={rocAthletic.index}
            ratio="21/9"
          />
        </Reveal>
        <Reveal delay={0.1} className="mt-8">
          <p className="mb-5 max-w-lg font-sans text-[16px] text-[var(--color-ink-soft)]">
            {rocAthletic.summary}
          </p>
          <ProjectMeta
            client={rocAthletic.client}
            scope={rocAthletic.scope}
            year={rocAthletic.year}
            id={rocAthletic.id}
          />
        </Reveal>
      </div>

      {/* 02 — contact-sheet composition */}
      <div className="container-cubs mt-20 border-t border-[var(--color-line)] pt-16 sm:mt-24 sm:pt-20">
        <div className="grid-12">
          <Reveal className="col-span-12 md:col-span-4">
            <span className="font-sans text-[13px] tabular-nums text-[var(--color-ink-faint)]">
              {okop.index}
            </span>
            <h3 className="mt-2 font-sans text-[26px] font-medium leading-tight">
              {okop.title}
            </h3>
            <p className="mt-4 max-w-sm font-sans text-[15px] text-[var(--color-ink-soft)]">
              {okop.summary}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="col-span-12 mt-8 md:col-span-8 md:mt-0">
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <Placeholder
                  key={i}
                  tone={i % 3 === 0 ? "primary" : "paper"}
                  kind="image"
                  label={`Frame`}
                  index={String(i + 1).padStart(2, "0")}
                  ratio="1/1"
                />
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-8">
          <ProjectMeta
            client={okop.client}
            scope={okop.scope}
            year={okop.year}
            id={okop.id}
          />
        </Reveal>
      </div>

      {/* 03 — offset editorial layout, deliberately breaking the grid */}
      <div className="container-cubs mt-20 border-t border-[var(--color-line)] pt-16 sm:mt-24 sm:pt-24">
        <div className="relative grid-12">
          <Reveal className="col-span-12 md:col-span-8">
            <Placeholder
              tone={project03.tone}
              kind="video"
              label={project03.title}
              index={project03.index}
              ratio="4/3"
            />
          </Reveal>

          <Reveal
            delay={0.15}
            className="relative z-10 col-span-12 -mt-6 bg-[var(--color-paper)] p-6 sm:p-8 md:col-span-5 md:col-start-7 md:-mt-16 md:ml-0"
          >
            <span className="font-sans text-[13px] tabular-nums text-[var(--color-ink-faint)]">
              {project03.index}
            </span>
            <h3 className="mt-2 font-sans text-[26px] font-medium leading-tight">
              {project03.title}
            </h3>
            <p className="mt-4 font-sans text-[15px] text-[var(--color-ink-soft)]">
              {project03.summary}
            </p>
            <div className="mt-6">
              <ProjectMeta
                compact
                client={project03.client}
                scope={project03.scope}
                year={project03.year}
                id={project03.id}
              />
            </div>
          </Reveal>
        </div>
      </div>

      {/* 04 — large image, tiny metadata */}
      <div className="container-cubs mt-20 border-t border-[var(--color-line)] pt-16 sm:mt-24 sm:pt-20">
        <Reveal>
          <Placeholder
            tone={project04.tone}
            kind="image"
            label={project04.title}
            index={project04.index}
            ratio="21/9"
          />
        </Reveal>
        <Reveal delay={0.1} className="mt-4 flex items-baseline justify-between gap-4">
          <p className="font-sans text-[13px] text-[var(--color-ink-faint)]">
            {project04.client} — {project04.scope} — {project04.year}
          </p>
          <ArrowLink href={`/#${project04.id}`} className="shrink-0">
            Case study
          </ArrowLink>
        </Reveal>
      </div>
    </section>
  );
}
