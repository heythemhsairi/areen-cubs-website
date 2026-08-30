import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FinalCta } from "@/components/sections/FinalCta";
import { ArrowLink } from "@/components/ui/Buttons";
import { Reveal } from "@/components/ui/Reveal";
import { getInsight, insights } from "@/data/insights";

type Props = { params: Promise<{ article: string }> };

export function generateStaticParams() {
  return insights.map(({ slug }) => ({ article: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { article: slug } = await params;
  const insight = getInsight(slug);
  return insight ? { title: insight.title, description: insight.excerpt } : {};
}

export default async function InsightPage({ params }: Props) {
  const { article: slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();

  return (
    <main>
      <article>
        <header className="container-cubs page-pad pb-16 sm:pb-24">
          <Reveal><ArrowLink href="/insights">All insights</ArrowLink></Reveal>
          <div className="mt-12 grid-12">
            <Reveal className="col-span-12 lg:col-span-9">
              <p className="eyebrow">{insight.category} / {insight.date} / {insight.readTime} read</p>
              <h1 className="display-lg mt-5 text-balance text-[var(--color-dark)]">{insight.title}</h1>
            </Reveal>
            <Reveal delay={0.08} className="col-span-12 mt-10 lg:col-span-3 lg:mt-0"><p className="border-l border-[var(--color-line-strong)] pl-5 font-serif text-[24px] italic leading-[1.25] text-[var(--color-primary)]">{insight.excerpt}</p></Reveal>
          </div>
        </header>

        <div className="blue-grid mx-auto max-w-[1440px] bg-[var(--color-primary)] px-[var(--container-pad)] py-[8vw] text-white">
          <div className="grid-12"><p className="col-span-12 font-sans text-[clamp(3.5rem,13vw,11rem)] font-medium leading-[0.78] tracking-[-0.08em]">{insight.index}</p><p className="col-span-9 col-start-4 mt-8 max-w-3xl font-serif text-[clamp(1.7rem,4vw,3.8rem)] italic leading-[1.05] sm:col-span-7 sm:col-start-6">A note from the space before the work becomes visible.</p></div>
        </div>

        <div className="container-cubs section-pad">
          {insight.sections.map((section, i) => <Reveal key={section.heading}><section className="grid-12 border-t border-[var(--color-line)] py-12 sm:py-20"><span className="col-span-2 font-sans text-xs tabular-nums text-[var(--color-ink-faint)]">{String(i + 1).padStart(2, "0")}</span><div className="col-span-10 md:col-span-7 md:col-start-5"><h2 className="font-sans text-[clamp(1.9rem,3.7vw,3.4rem)] font-medium leading-[1.08] tracking-[-0.025em] text-[var(--color-dark)]">{section.heading}</h2><div className="mt-8 space-y-5">{section.paragraphs.map((paragraph) => <p key={paragraph} className="font-sans text-[17px] leading-[1.75] text-[var(--color-ink-soft)] sm:text-[19px]">{paragraph}</p>)}</div></div></section></Reveal>)}
        </div>
      </article>
      <FinalCta />
    </main>
  );
}
