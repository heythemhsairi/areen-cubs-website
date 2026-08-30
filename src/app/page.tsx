import { FinalCta } from "@/components/sections/FinalCta";
import {
  HomeExpertise,
  HomeFeaturedCase,
  HomeHero,
  HomeInsights,
  HomePhilosophy,
  HomeStudio,
  HomeWork,
} from "@/components/sections/HomeSections";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <HomeWork />
      <HomePhilosophy />
      <HomeExpertise />
      <HomeFeaturedCase />
      <HomeStudio />
      <HomeInsights />
      <FinalCta />
    </main>
  );
}
