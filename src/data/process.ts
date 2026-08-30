export interface ProcessStage {
  index: string;
  name: string;
  text: string;
}

export const processStages: ProcessStage[] = [
  {
    index: "01",
    name: "Think",
    text: "We ask what the brand is actually trying to say, and whether it's worth saying at all.",
  },
  {
    index: "02",
    name: "Create",
    text: "We give the idea a look, a voice and a shape it can travel in.",
  },
  {
    index: "03",
    name: "Produce",
    text: "We shoot it, edit it, and ship it — on time, without losing the point.",
  },
  {
    index: "04",
    name: "Learn",
    text: "We watch what actually landed, and feed that back into the next idea.",
  },
];
