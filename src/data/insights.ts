export interface InsightSection {
  heading: string;
  paragraphs: string[];
}

export interface Insight {
  slug: string;
  index: string;
  category: "Strategy" | "Production" | "Creative" | "Content" | "Branding";
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  sections: InsightSection[];
}

export const insights: Insight[] = [
  {
    slug: "recognizable-without-the-logo",
    index: "01",
    category: "Strategy",
    title: "Why some brands are impossible to recognize without their logo",
    excerpt: "Recognition comes from repeated decisions, not from placing the mark in every corner.",
    date: "Aug 2026",
    readTime: "4 min",
    sections: [
      {
        heading: "A logo can identify a brand. It cannot do all the remembering for it.",
        paragraphs: [
          "The brands we recognize fastest usually repeat more than a symbol. They repeat a point of view, a way of framing things, a rhythm and a set of choices.",
          "Remove the logo and those choices still leave a trail. That trail is the brand system doing its real job.",
        ],
      },
      {
        heading: "Consistency is not sameness.",
        paragraphs: [
          "A rigid template can make every post match while making none of them memorable. A stronger system keeps the logic consistent and lets the execution adapt.",
          "The useful question is not whether two posts look identical. It is whether they feel like the same mind made them.",
        ],
      },
    ],
  },
  {
    slug: "better-cameras-better-ads",
    index: "02",
    category: "Production",
    title: "Why better cameras don’t automatically make better ads",
    excerpt: "Production value can sharpen an idea. It cannot replace one.",
    date: "Jul 2026",
    readTime: "3 min",
    sections: [
      {
        heading: "A beautiful frame can still say nothing.",
        paragraphs: [
          "Cameras solve image-making problems. They do not decide what the audience should notice, feel or remember.",
          "That work starts in the brief, the concept and the script—well before the first lens is chosen.",
        ],
      },
      {
        heading: "Production should protect the idea.",
        paragraphs: [
          "The right production choice is the one that makes the thought clearer. Sometimes that means a larger set. Sometimes it means one honest performance and less equipment.",
        ],
      },
    ],
  },
  {
    slug: "nice-post-or-content-system",
    index: "03",
    category: "Creative",
    title: "The difference between a nice post and an actual content system",
    excerpt: "One looks good once. The other helps the next fifty decisions make sense.",
    date: "Jun 2026",
    readTime: "5 min",
    sections: [
      {
        heading: "A post is an output. A system is a way of deciding.",
        paragraphs: [
          "A content system defines roles, priorities and repeatable behaviors. It explains why one idea should become a film while another should stay a single line of copy.",
          "That structure makes work faster because the team is not rebuilding the brand from zero every morning.",
        ],
      },
      {
        heading: "Rules are useful when they create range.",
        paragraphs: [
          "Good rules make many expressions feel related. Bad rules make every expression look the same. The distinction is small on paper and obvious in a feed.",
        ],
      },
    ],
  },
  {
    slug: "first-three-seconds",
    index: "04",
    category: "Content",
    title: "Why your first three seconds can’t fix a weak idea",
    excerpt: "A hook earns attention. The idea has to deserve what happens next.",
    date: "May 2026",
    readTime: "4 min",
    sections: [
      {
        heading: "Attention is only the door.",
        paragraphs: [
          "A sharp opening can stop a thumb, but retention without meaning is a short-lived win. People still need a reason to stay and something worth carrying away.",
          "The best hooks are not bolted onto the front. They are the most compressed version of the idea itself.",
        ],
      },
    ],
  },
  {
    slug: "recognition-before-reach",
    index: "05",
    category: "Branding",
    title: "Recognition before reach",
    excerpt: "More people seeing the work matters less when none of it feels connected.",
    date: "Apr 2026",
    readTime: "3 min",
    sections: [
      {
        heading: "Reach distributes whatever is already there.",
        paragraphs: [
          "If the idea, voice and visual language change every week, more impressions simply distribute more inconsistency.",
          "Build something recognizable first. Then make sure more people see it.",
        ],
      },
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}
