import { cn } from "@/lib/utils";

type BrandLogoVariant = "horizontal" | "vertical" | "mark";

const SOURCES: Record<BrandLogoVariant, string> = {
  horizontal: "/brand/areen-cubs-logo-horizontal.svg",
  vertical: "/brand/areen-cubs-logo-vertical.svg",
  mark: "/brand/areen-cubs-logo-mark.svg",
};

export function BrandLogo({
  variant = "horizontal",
  className,
  priority = false,
}: {
  variant?: BrandLogoVariant;
  className?: string;
  priority?: boolean;
}) {
  return (
    <span
      className={cn("brand-logo", `brand-logo--${variant}`, className)}
    >
      {/* The official SVGs are kept as raw files so their artwork is never
          rasterized or rewritten by the image optimizer. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={SOURCES[variant]}
        alt="Areen Cubs"
        className="brand-logo__image"
        fetchPriority={priority ? "high" : "auto"}
      />
    </span>
  );
}
