export interface ServiceCategory {
  id: string;
  index: string;
  name: string;
  headline: string;
  description: string;
  items: string[];
  visualLabel: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "strategy",
    index: "01",
    name: "Strategy",
    headline: "The thinking before the making.",
    description:
      "We figure out what the brand should say and why anyone would care, before a single visual gets made.",
    items: [
      "Brand strategy",
      "Content strategy",
      "Creative strategy",
      "Campaign concepts",
      "Copywriting",
      "Creative direction",
    ],
    visualLabel: "Planning notes, campaign logic, positioning drafts",
  },
  {
    id: "creative",
    index: "02",
    name: "Creative",
    headline: "The idea, given a shape.",
    description:
      "Identity, design and art direction that carry the strategy instead of decorating over it.",
    items: [
      "Brand identity",
      "Social design",
      "Campaign visuals",
      "Content systems",
      "Motion design",
    ],
    visualLabel: "Art direction boards, type systems, layout studies",
  },
  {
    id: "production",
    index: "03",
    name: "Production",
    headline: "The idea, in the world.",
    description:
      "We shoot, edit and ship the thing — with the same reasoning that got it approved in the first place.",
    items: [
      "Video concepts",
      "Video production",
      "UGC direction",
      "Editing",
      "Short-form content",
    ],
    visualLabel: "Shot lists, timelines, camera and edit frames",
  },
];
