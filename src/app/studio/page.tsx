import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Studio",
  description: "Meet the thinking, process and people behind Areen Cubs.",
};

const principles = [
  ["01", "Ask before making", "We start by finding the thing that actually needs solving."],
  ["02", "Stay close to the work", "The people in the conversation are the people shaping the idea."],
  ["03", "Protect the point", "Every production decision should make the original thought clearer."],
  ["04", "Learn in public", "The next piece gets better because we pay attention to the last one."],
];

export default function StudioPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Studio / Tunis, Tunisia"
        title={<>We’re <span className="serif-accent text-[var(--color-primary)]">Areen Cubs.</span></>}
        description="A small creative team that likes good ideas, clear thinking and work people actually remember."
      />

      <section className="container-cubs pb-24 sm:pb-36">
        <div className="grid-12 items-end">
          <Reveal className="col-span-12 md:col-span-7"><StudioFrame tone="primary" label="Shoot day / documentary photography slot" copy="Close to the work, from the first note to the final cut." /></Reveal>
          <Reveal delay={0.08} className="col-span-9 col-start-4 -mt-12 md:col-span-4 md:col-start-9 md:-ml-12 md:mt-0"><StudioFrame tone="paper" label="Edit desk / photography slot" copy="Ideas get better when they survive contact with the timeline." small /></Reveal>
        </div>
      </section>

      <section className="section-pad bg-[var(--color-canvas)]">
        <div className="container-cubs grid-12">
          <Reveal className="col-span-12 md:col-span-4"><p className="eyebrow">How we like to work</p></Reveal>
          <div className="col-span-12 mt-10 md:col-span-8 md:mt-0">
            {principles.map(([index, title, text]) => <Reveal key={index}><article className="grid grid-cols-[3rem_1fr] gap-3 border-t border-[var(--color-line)] py-7 last:border-b sm:grid-cols-[5rem_1fr_1fr]"><span className="font-sans text-xs text-[var(--color-ink-faint)]">{index}</span><h2 className="font-sans text-[22px] font-medium leading-tight text-[var(--color-primary)] sm:text-[27px]">{title}</h2><p className="col-start-2 mt-3 max-w-md font-sans text-[15px] leading-[1.6] text-[var(--color-ink-soft)] sm:col-start-auto sm:mt-1">{text}</p></article></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-cubs">
          <Reveal><p className="eyebrow">The people behind the work</p><h2 className="display-md mt-6 max-w-4xl text-[var(--color-dark)]">Real names, roles and portraits <span className="serif-accent text-[var(--color-primary)]">belong here.</span></h2><p className="mt-7 max-w-xl font-sans text-[17px] leading-[1.6] text-[var(--color-ink-soft)]">Team profiles have not been invented. This layout is ready for documentary portraits and short, human introductions when the studio supplies them.</p></Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-3">{["Creative direction", "Strategy", "Production"].map((role, i) => <Reveal key={role} delay={i * 0.05}><div className="editorial-grid aspect-[3/4] border border-[var(--color-line)] bg-[var(--color-paper-dim)] p-5"><span className="eyebrow">Portrait / {String(i + 1).padStart(2, "0")}</span><p className="mt-[75%] border-t border-[var(--color-line-strong)] pt-3 font-sans text-sm text-[var(--color-dark)]">{role} · Name and bio pending</p></div></Reveal>)}</div>
        </div>
      </section>
      <FinalCta />
    </main>
  );
}

function StudioFrame({ tone, label, copy, small = false }: { tone: "primary" | "paper"; label: string; copy: string; small?: boolean }) {
  return <div role="img" aria-label={`${label}. Final studio photography required.`} className={`${small ? "aspect-[4/5]" : "aspect-[4/3]"} relative overflow-hidden border border-[var(--color-line)] p-[7%] ${tone === "primary" ? "blue-grid bg-[var(--color-primary)] text-white" : "editorial-grid bg-[var(--color-paper-dim)] text-[var(--color-dark)]"}`}><span className="font-sans text-[10px] uppercase tracking-[0.14em] opacity-65">{label}</span><p className="absolute bottom-[10%] left-[8%] max-w-[12ch] font-serif text-[clamp(1.5rem,4vw,3.8rem)] italic leading-[1]">{copy}</p></div>;
}
