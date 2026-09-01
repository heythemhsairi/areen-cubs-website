import Link from "next/link";
import { ArrowLink } from "@/components/ui/Buttons";
import { BrandLogo } from "@/components/brand/BrandLogo";

export function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white">
      <div className="container-cubs grid-12 py-16 sm:py-20">
        <div className="col-span-12 mb-12 md:col-span-5 md:mb-0">
          <div className="inline-flex bg-[var(--color-paper)] px-4 py-2.5">
            <BrandLogo className="h-[68px] w-[204px]" />
          </div>
          <p className="mt-4 max-w-xs font-sans text-[15px] leading-[1.6] text-white/60">
            Strategy, creative and production for brands that want every
            piece of work to have a reason to exist.
          </p>
          <ArrowLink
            href="/start-a-project"
            tone="paper"
            className="mt-6 text-white"
          >
            Start a project
          </ArrowLink>
        </div>

        <div className="col-span-6 md:col-span-3">
          <p className="mb-4 font-sans text-[12px] uppercase tracking-[0.14em] text-white/50">
            Sitemap
          </p>
          <ul className="flex flex-col gap-2.5 font-sans text-[15px]">
            <li>
              <Link href="/work" className="link-underline text-white/85">
                Work
              </Link>
            </li>
            <li>
              <Link
                href="/expertise"
                className="link-underline text-white/85"
              >
                Expertise
              </Link>
            </li>
            <li>
              <Link href="/studio" className="link-underline text-white/85">
                Studio
              </Link>
            </li>
            <li>
              <Link
                href="/insights"
                className="link-underline text-white/85"
              >
                Insights
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-6 md:col-span-4">
          <p className="mb-4 font-sans text-[12px] uppercase tracking-[0.14em] text-white/50">
            Studio
          </p>
          <ul className="flex flex-col gap-2.5 font-sans text-[15px] text-white/85">
            <li>Tunis, Tunisia</li>
            <li>
              <a href="mailto:hello@areencubs.com" className="link-underline">
                hello@areencubs.com
              </a>
            </li>
            <li className="text-white/55">Social links pending</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="container-cubs flex flex-col gap-2 py-6 font-sans text-[12px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Areen Cubs. All rights reserved.</span>
          <span>Independent Creative Agency — Tunisia</span>
        </div>
      </div>
    </footer>
  );
}
