export interface Insight {
  id: string;
  index: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
}

export const insights: Insight[] = [
  {
    id: "more-content",
    index: "01",
    category: "Strategy",
    title: "Your brand probably doesn't need more content",
    excerpt:
      "It needs a better reason to make content. Volume was never the bottleneck.",
    date: "Jul 2026",
  },
  {
    id: "good-looking-isnt-enough",
    index: "02",
    category: "Creative",
    title: "Good-looking content is easy",
    excerpt:
      "Making people remember your brand is the harder part — and the part most agencies skip.",
    date: "May 2026",
  },
  {
    id: "make-less",
    index: "03",
    category: "Production",
    title: "Make less. Mean more.",
    excerpt:
      "A smaller number of ideas with a real reason to exist beats a full calendar of filler.",
    date: "Mar 2026",
  },
];
