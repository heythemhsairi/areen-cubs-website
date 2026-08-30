import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { clients, testimonial } from "@/data/clients";

export function Trust() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-cubs">
        <Reveal>
          <SectionLabel index="06" label="Who we've worked with" />
        </Reveal>

        <Reveal delay={0.05}>
          <ul className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-5 border-y border-[var(--color-line)] py-8 sm:mt-12 sm:gap-x-14 sm:py-10">
            {clients.map((client) => (
              <li
                key={client}
                className="font-sans text-[17px] tracking-[-0.01em] text-[var(--color-ink-faint)] sm:text-[20px]"
              >
                {client}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="mt-16 sm:mt-20">
          <blockquote className="max-w-3xl">
            <p className="font-serif text-[clamp(1.5rem,3.6vw,2.5rem)] italic leading-[1.3] text-[var(--color-ink)]">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <footer className="mt-6 font-sans text-[14px] text-[var(--color-ink-soft)]">
              {testimonial.name} — {testimonial.role}
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
