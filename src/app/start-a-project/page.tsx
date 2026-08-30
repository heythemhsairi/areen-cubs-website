import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Start a project",
  description: "Tell Areen Cubs what you are working on.",
};

const projectTypes = ["Branding", "Strategy", "Content", "Video production", "Multiple"];

export default function StartProjectPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Start a project / Keep it simple"
        title={<>Tell us what you’re <span className="serif-accent text-[var(--color-primary)]">trying to make.</span></>}
        description="A few useful details are enough to begin. We’ll ask better questions once we understand the shape of it."
      />

      <section className="container-cubs pb-28 sm:pb-40">
        <div className="grid-12 border-t border-[var(--color-line)] pt-12 sm:pt-16">
          <Reveal className="col-span-12 md:col-span-3"><p className="eyebrow">Project enquiry</p><p className="mt-5 max-w-xs font-sans text-[15px] leading-[1.6] text-[var(--color-ink-soft)]">Prefer email? Write to <a className="link-underline text-[var(--color-primary)]" href="mailto:hello@areencubs.com">hello@areencubs.com</a>.</p></Reveal>
          <Reveal delay={0.06} className="col-span-12 mt-10 md:col-span-8 md:col-start-5 md:mt-0">
            <form action="mailto:hello@areencubs.com" method="post" encType="text/plain" className="space-y-10">
              <fieldset>
                <legend className="font-sans text-[18px] font-medium text-[var(--color-dark)]">What are we working on?</legend>
                <div className="mt-5 flex flex-wrap gap-3">{projectTypes.map((type) => <label key={type} className="cursor-pointer"><input type="radio" name="Project type" value={type} className="peer sr-only" required /><span className="inline-flex min-h-11 items-center border border-[var(--color-line-strong)] px-4 font-sans text-sm text-[var(--color-dark)] transition-colors peer-checked:border-[var(--color-primary)] peer-checked:bg-[var(--color-primary)] peer-checked:text-white hover:border-[var(--color-primary)]">{type}</span></label>)}</div>
              </fieldset>
              <Field label="Tell us a little about it" name="Project details" textarea placeholder="What are you making, changing or trying to solve?" />
              <label className="block"><span className="font-sans text-[15px] font-medium text-[var(--color-dark)]">Budget range</span><select name="Budget range" required defaultValue="" className="mt-3 min-h-14 w-full border-0 border-b border-[var(--color-line-strong)] bg-transparent px-0 font-sans text-[17px] text-[var(--color-dark)] focus:border-[var(--color-primary)] focus:outline-none"><option value="" disabled>Select a range</option><option>Under 5,000 TND</option><option>5,000–15,000 TND</option><option>15,000–30,000 TND</option><option>30,000+ TND</option><option>Not sure yet</option></select></label>
              <div className="grid gap-8 sm:grid-cols-2"><Field label="Name" name="Name" autoComplete="name" /><Field label="Company" name="Company" autoComplete="organization" /></div>
              <div className="grid gap-8 sm:grid-cols-2"><Field label="Email" name="Email" type="email" autoComplete="email" /><Field label="Phone (optional)" name="Phone" type="tel" autoComplete="tel" required={false} /></div>
              <button type="submit" className="group inline-flex min-h-14 items-center gap-3 border border-[var(--color-primary)] bg-[var(--color-primary)] px-7 font-sans text-sm font-medium uppercase tracking-[0.1em] text-white transition-colors hover:border-[var(--color-dark)] hover:bg-[var(--color-dark)]">Start a project <span className="transition-transform group-hover:translate-x-1">→</span></button>
              <p className="max-w-lg font-sans text-xs leading-5 text-[var(--color-ink-faint)]">Submitting opens your email app with these details. A direct form-delivery endpoint can be connected when the studio chooses its inbox workflow.</p>
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function Field({ label, name, type = "text", autoComplete, textarea = false, placeholder, required = true }: { label: string; name: string; type?: string; autoComplete?: string; textarea?: boolean; placeholder?: string; required?: boolean }) {
  const classes = "mt-3 w-full border-0 border-b border-[var(--color-line-strong)] bg-transparent px-0 py-4 font-sans text-[17px] text-[var(--color-dark)] placeholder:text-[var(--color-ink-faint)] focus:border-[var(--color-primary)] focus:outline-none";
  return <label className="block"><span className="font-sans text-[15px] font-medium text-[var(--color-dark)]">{label}</span>{textarea ? <textarea name={name} required={required} placeholder={placeholder} rows={4} className={classes} /> : <input type={type} name={name} required={required} autoComplete={autoComplete} className={classes} />}</label>;
}
