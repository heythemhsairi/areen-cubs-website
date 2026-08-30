export type ProjectVisual = "roc" | "okop" | "film" | "identity";

export interface CaseChapter {
  label: "Context" | "Problem" | "Insight" | "Strategy" | "Idea" | "Execution" | "Result";
  title: string;
  text: string;
}

export interface Project {
  slug: string;
  index: string;
  client: string;
  title: string;
  scope: string[];
  year: string;
  summary: string;
  visual: ProjectVisual;
  status: "documented" | "asset-pending";
  chapters: CaseChapter[];
}

export const projects: Project[] = [
  {
    slug: "roc-athletic",
    index: "01",
    client: "ROC Athletic",
    title: "Building a challenger sportswear voice",
    scope: ["Brand strategy", "Campaign concept", "Social system"],
    year: "2025",
    summary:
      "ROC already had the product and ambition. The challenge was turning that into a content identity people could recognize consistently.",
    visual: "roc",
    status: "asset-pending",
    chapters: [
      {
        label: "Context",
        title: "An ambitious performance brand, ready for a clearer point of view.",
        text: "ROC Athletic came to the work with a product range and a clear appetite to grow. The case-study structure below is ready for approved campaign assets and final client detail.",
      },
      {
        label: "Problem",
        title: "Turn ambition into a repeatable, recognizable content language.",
        text: "The task was to connect strategy, voice and visual direction so every piece of content could feel related without becoming repetitive.",
      },
      {
        label: "Insight",
        title: "Recognition is built through decisions, not decoration.",
        text: "A useful system needs rules the team can apply: what deserves attention, how the brand speaks and which visual choices should stay consistent.",
      },
      {
        label: "Strategy",
        title: "Build the point of view before building the feed.",
        text: "The strategic direction organized messaging, campaign themes and content roles before individual executions were developed.",
      },
      {
        label: "Idea",
        title: "One creative territory with room to move.",
        text: "The campaign idea was designed as a platform rather than a single post: a clear premise that could travel through film, social and still imagery.",
      },
      {
        label: "Execution",
        title: "A connected system across direction, production and edit.",
        text: "Shot planning, layouts, copy and edit decisions were treated as parts of the same system. Approved production frames will replace the concept panels shown here.",
      },
      {
        label: "Result",
        title: "Reserved for confirmed outcomes.",
        text: "No performance claims have been added. Approved results, final campaign media and client commentary can be published here when supplied.",
      },
    ],
  },
  {
    slug: "okop",
    index: "02",
    client: "OKOP",
    title: "A content system designed to stay coherent",
    scope: ["Content strategy", "Social design", "Motion"],
    year: "2025",
    summary:
      "A modular direction for keeping everyday content connected to one recognizable brand idea.",
    visual: "okop",
    status: "asset-pending",
    chapters: [
      {
        label: "Context",
        title: "A project framework awaiting approved source material.",
        text: "The page is structured to hold the real OKOP brief, working process and outcomes. Current copy stays intentionally neutral until that information is confirmed.",
      },
      {
        label: "Problem",
        title: "Make frequent content feel connected, not templated.",
        text: "The working challenge was to create enough flexibility for different messages while keeping a clear relationship between them.",
      },
      {
        label: "Insight",
        title: "A system should guide decisions without flattening ideas.",
        text: "Useful content systems define hierarchy, rhythm and behavior. They leave room for the subject to change while the brand remains recognizable.",
      },
      {
        label: "Strategy",
        title: "Start with content roles and a shared visual grammar.",
        text: "The direction groups content by purpose, then gives each role a related set of layout, type and motion principles.",
      },
      {
        label: "Idea",
        title: "One language, multiple tempos.",
        text: "The concept uses repeatable structures at different levels of energy, making space for announcements, product moments and quieter editorial posts.",
      },
      {
        label: "Execution",
        title: "A kit of parts for static, motion and short-form work.",
        text: "The current panels demonstrate pacing and format only. Final social posts, motion studies and production files should replace them when approved.",
      },
      {
        label: "Result",
        title: "Reserved for documented outcomes.",
        text: "This section intentionally contains no invented reach, engagement or conversion figures.",
      },
    ],
  },
  {
    slug: "project-03",
    index: "03",
    client: "Confidential — Film",
    title: "A launch-film framework built around one clear idea",
    scope: ["Creative direction", "Video production", "Edit"],
    year: "2024",
    summary:
      "A confidential production slot showing how film work will be presented once approved frames and credits are available.",
    visual: "film",
    status: "asset-pending",
    chapters: [],
  },
  {
    slug: "project-04",
    index: "04",
    client: "Confidential — Identity",
    title: "An identity system with fewer, stronger ingredients",
    scope: ["Brand identity", "Art direction", "Packaging"],
    year: "2024",
    summary:
      "A reserved identity case-study shell, ready for approved brand applications and project detail.",
    visual: "identity",
    status: "asset-pending",
    chapters: [],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
