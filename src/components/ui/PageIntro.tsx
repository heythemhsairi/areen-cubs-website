import { Reveal } from "@/components/ui/Reveal";

interface PageIntroProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  aside?: React.ReactNode;
}

export function PageIntro({ eyebrow, title, description, aside }: PageIntroProps) {
  return (
    <header className="container-cubs page-pad pb-16 sm:pb-24">
      <Reveal><p className="eyebrow">{eyebrow}</p></Reveal>
      <div className="mt-6 grid-12 items-end">
        <Reveal className="col-span-12 lg:col-span-9">
          <h1 className="display-lg text-balance text-[var(--color-dark)]">{title}</h1>
        </Reveal>
        {aside ? <Reveal delay={0.08} className="col-span-12 mt-8 lg:col-span-3 lg:mt-0 lg:text-right">{aside}</Reveal> : null}
      </div>
      {description ? (
        <Reveal delay={0.1} className="mt-10 max-w-2xl border-l border-[var(--color-line-strong)] pl-5 sm:ml-[33.333%]">
          <p className="font-sans text-[18px] leading-[1.55] text-[var(--color-ink-soft)] sm:text-[21px]">{description}</p>
        </Reveal>
      ) : null}
    </header>
  );
}
