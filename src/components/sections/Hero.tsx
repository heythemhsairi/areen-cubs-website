"use client";

import { motion } from "framer-motion";
import { Placeholder } from "@/components/ui/Placeholder";
import { StartProjectButton, ArrowLink } from "@/components/ui/Buttons";

const easeEditorial = [0.16, 1, 0.3, 1] as const;

function Line({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "115%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1, ease: easeEditorial, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="container-cubs">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 font-sans text-[13px] uppercase tracking-[0.16em] text-[var(--color-ink-soft)] sm:mb-8"
        >
          Independent Creative Agency — Tunisia
        </motion.p>

        <h1 className="max-w-4xl font-sans text-[clamp(2.75rem,8vw,6.5rem)] font-medium leading-[0.98] tracking-[-0.02em] text-[var(--color-ink)]">
          <Line delay={0.15}>Make something</Line>
          <Line delay={0.28}>
            <span className="font-serif italic font-normal tracking-normal text-[var(--color-primary)]">
              people remember.
            </span>
          </Line>
        </h1>

        <div className="mt-10 grid-12 sm:mt-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeEditorial, delay: 0.55 }}
            className="col-span-12 max-w-md font-sans text-[18px] leading-[1.5] text-[var(--color-ink-soft)] sm:col-span-7 sm:text-[20px] md:col-span-6"
          >
            We help brands figure out what to say, how to look, and how to
            make people care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeEditorial, delay: 0.7 }}
            className="col-span-12 mt-6 flex flex-wrap items-center gap-x-8 gap-y-4 sm:col-span-5 sm:mt-0 sm:justify-end md:col-span-6"
          >
            <ArrowLink href="/#work">See our work</ArrowLink>
            <StartProjectButton />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: easeEditorial, delay: 0.85 }}
        className="container-cubs mt-16 sm:mt-20"
      >
        <Placeholder
          tone="dark"
          kind="video"
          label="Featured — ROC Athletic, 2025"
          meta="Reel"
          ratio="16/8"
          className="rounded-none"
        />
      </motion.div>
    </section>
  );
}
