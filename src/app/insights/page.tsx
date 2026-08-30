import type { Metadata } from "next";
import Link from "next/link";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { insights } from "@/data/insights";

export const metadata: Metadata = {
  title: "Insights",
  description: "Creative observations on strategy, branding, content and production.",
};

export default function InsightsPage() {
  const [featured, ...rest] = insights;
  return (
    <main>
      <PageIntro
        eyebrow="Insights / Notes from the studio"
        title={<>Things we’ve been <span className="serif-accent text-[var(--color-primary)]">thinking about.</span></>}
        description="Short observations about why some work gets remembered, why some does not, and what usually happens before the camera turns on."
      />

      <section className="container-cubs pb-28 sm:pb-40">
        <Reveal>
          <Link href={`/insights/${featured.slug}`} className="group grid-12 border-y border-[var(--color-line)] py-10 sm:py-16">
            <div className="col-span-12 md:col-span-4"><p className="eyebrow">Featured / {featured.category}</p><div className="blue-grid mt-8 aspect-square bg-[var(--color-primary)] p-6 text-white"><span className="font-sans text-xs uppercase tracking-[0.14em] text-white/65">Areen Cubs / Journal {featured.index}</span><strong className="mt-[32%] block font-sans text-[clamp(4rem,11vw,9rem)] font-medium leading-none tracking-[-0.08em]">R≠L</strong></div></div>
            <div className="col-span-12 mt-9 md:col-span-7 md:col-start-6 md:mt-0"><h2 className="display-md text-[var(--color-dark)] transition-colors group-hover:text-[var(--color-primary)]">{featured.title}</h2><p className="mt-7 max-w-xl font-sans text-[18px] leading-[1.6] text-[var(--color-ink-soft)]">{featured.excerpt}</p><p className="mt-8 font-sans text-sm text-[var(--color-ink-faint)]">{featured.date} · {featured.readTime} read ↗</p></div>
          </Link>
        </Reveal>

        <div className="mt-14 border-t border-[var(--color-line)] sm:mt-20">
          {rest.map((insight) => <Reveal key={insight.slug}><Link href={`/insights/${insight.slug}`} className="group grid-12 border-b border-[var(--color-line)] py-8 sm:py-11"><span className="col-span-3 font-sans text-xs uppercase tracking-[0.12em] text-[var(--color-primary)] sm:col-span-2">{insight.index} / {insight.category}</span><div className="col-span-9 sm:col-span-7"><h2 className="font-sans text-[clamp(1.5rem,3vw,2.5rem)] font-medium leading-[1.1] tracking-[-0.02em] text-[var(--color-dark)] transition-colors group-hover:text-[var(--color-primary)]">{insight.title}</h2><p className="mt-3 max-w-lg font-sans text-[15px] leading-[1.55] text-[var(--color-ink-soft)]">{insight.excerpt}</p></div><span className="col-span-9 col-start-4 mt-5 font-sans text-sm text-[var(--color-ink-faint)] sm:col-span-3 sm:col-start-auto sm:mt-1 sm:text-right">{insight.date} · {insight.readTime} ↗</span></Link></Reveal>)}
        </div>
      </section>
      <FinalCta />
    </main>
  );
}
