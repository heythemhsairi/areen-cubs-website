import { Placeholder } from "@/components/ui/Placeholder";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { serviceCategories } from "@/data/services";

const kindByCategory: Record<string, "note" | "logo" | "video"> = {
  strategy: "note",
  creative: "logo",
  production: "video",
};

const toneByCategory: Record<string, "paper" | "primary" | "dark"> = {
  strategy: "paper",
  creative: "primary",
  production: "dark",
};

export function WhatWeDo() {
  return (
    <section id="expertise" className="py-24 sm:py-32">
      <div className="container-cubs">
        <Reveal>
          <SectionLabel index="04" label="What we actually do" />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 max-w-2xl font-sans text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.01em]">
            Three disciplines.{" "}
            <span className="font-serif italic font-normal">
              One line of thinking.
            </span>
          </h2>
        </Reveal>
      </div>

      <div>
        {serviceCategories.map((category, i) => (
          <Reveal key={category.id} delay={i * 0.05}>
            <div className="group container-cubs border-t border-[var(--color-line)] py-14 sm:py-20 last:border-b">
              <div className="grid-12 items-start">
                <div className="col-span-12 md:col-span-5">
                  <span className="font-sans text-[13px] tabular-nums text-[var(--color-ink-faint)]">
                    {category.index}
                  </span>
                  <h3 className="mt-3 font-sans text-[clamp(1.75rem,3.4vw,2.75rem)] font-medium leading-[1.05]">
                    {category.name}
                  </h3>
                  <p className="mt-3 font-serif text-[22px] italic text-[var(--color-ink-soft)] sm:text-[26px]">
                    {category.headline}
                  </p>
                  <p className="mt-5 max-w-sm font-sans text-[15px] leading-[1.6] text-[var(--color-ink-soft)]">
                    {category.description}
                  </p>

                  <ul className="mt-7 flex flex-wrap gap-x-3 gap-y-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="font-sans text-[12px] uppercase tracking-[0.06em] text-[var(--color-ink-faint)] after:ml-3 after:content-['/'] last:after:content-none"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="col-span-12 mt-8 md:col-span-6 md:col-start-7 md:mt-0">
                  <div className="origin-center scale-[0.99] opacity-90 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100">
                    <Placeholder
                      tone={toneByCategory[category.id]}
                      kind={kindByCategory[category.id]}
                      label={category.visualLabel}
                      index={category.index}
                      ratio="4/3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
