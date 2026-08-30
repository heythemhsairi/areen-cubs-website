import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { insights } from "@/data/insights";

export function Insights() {
  return (
    <section id="insights" className="py-24 sm:py-32">
      <div className="container-cubs">
        <Reveal>
          <SectionLabel index="09" label="Insights" />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 max-w-2xl font-sans text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.01em]">
            Things we&rsquo;ve been{" "}
            <span className="font-serif italic font-normal">
              thinking about.
            </span>
          </h2>
        </Reveal>

        <div className="mt-16 border-t border-[var(--color-line)] sm:mt-20">
          {insights.map((insight, i) => (
            <Reveal key={insight.id} delay={i * 0.05}>
              <Link
                href={`/#${insight.id}`}
                className="group block border-b border-[var(--color-line)] py-8 sm:py-10"
              >
                <div className="grid-12 items-center">
                  <span className="col-span-2 hidden font-sans text-[13px] tabular-nums text-[var(--color-ink-faint)] sm:col-span-1 sm:block">
                    {insight.index}
                  </span>
                  <span className="col-span-3 font-sans text-[12px] uppercase tracking-[0.08em] text-[var(--color-primary)] sm:col-span-2">
                    {insight.category}
                  </span>
                  <h3 className="col-span-12 mt-3 font-sans text-[21px] font-medium leading-snug transition-colors duration-300 group-hover:text-[var(--color-primary)] sm:col-span-6 sm:mt-0 sm:text-[24px]">
                    {insight.title}
                  </h3>
                  <span className="col-span-9 mt-3 hidden font-sans text-[14px] text-[var(--color-ink-faint)] sm:col-span-2 sm:mt-0 sm:block sm:text-right">
                    {insight.date}
                  </span>
                </div>
                <p className="mt-3 max-w-lg font-sans text-[15px] text-[var(--color-ink-soft)] sm:hidden">
                  {insight.excerpt}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
