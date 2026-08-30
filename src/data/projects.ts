export type PlaceholderTone = "paper" | "dark" | "primary" | "line";

export interface Project {
  id: string;
  index: string;
  client: string;
  title: string;
  scope: string;
  year: string;
  summary: string;
  tone: PlaceholderTone;
  tag: string;
}

export const projects: Project[] = [
  {
    id: "roc-athletic",
    index: "01",
    client: "ROC Athletic",
    title: "Building a challenger sportswear voice",
    scope: "Brand strategy, campaign concept, social system",
    year: "2025",
    summary:
      "A performance brand that talked like every other performance brand. We gave it an argument worth repeating.",
    tone: "dark",
    tag: "Campaign still",
  },
  {
    id: "okop",
    index: "02",
    client: "OKOP",
    title: "A content system that outlasts the campaign",
    scope: "Content strategy, social design, motion",
    year: "2025",
    summary:
      "Instead of another content calendar, we built a set of rules the brand could run without us.",
    tone: "primary",
    tag: "Contact sheet",
  },
  {
    id: "project-03",
    index: "03",
    client: "Confidential — F&B",
    title: "Launch film for a brand with no name yet",
    scope: "Creative direction, video production, edit",
    year: "2024",
    summary:
      "The name wasn't approved when we shot this. The idea didn't need it to be.",
    tone: "line",
    tag: "Film frame",
  },
  {
    id: "project-04",
    index: "04",
    client: "Confidential — Retail",
    title: "Identity for a store that sells one thing well",
    scope: "Brand identity, art direction, packaging",
    year: "2024",
    summary:
      "Fewer products meant less room to hide behind decoration. So we didn't.",
    tone: "paper",
    tag: "Identity sheet",
  },
];
