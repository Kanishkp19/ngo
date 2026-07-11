export const impactStats = [
  { value: 250, suffix: "+", label: "Individuals currently housed and cared for" },
  { value: 129, suffix: "", label: "Reunited with their families" },
  { value: 2014, suffix: "", label: "Serving continuously since", isYear: true },
];

// Placeholder story blocks — real, consented beneficiary stories are a content gap
// per CONTENT.md / SITEMAP.md. Do not present these as real individuals.
export const storyPlaceholders = [
  {
    id: "story-1",
    excerpt:
      "A real story of recovery and reunification will be added here once a resident or family has given consent to share it.",
    consented: false,
  },
  {
    id: "story-2",
    excerpt:
      "GBSS is collecting consented stories from residents and families to feature in this space.",
    consented: false,
  },
  {
    id: "story-3",
    excerpt:
      "Check back soon — this space is reserved for a verified, consented account of a resident's journey.",
    consented: false,
  },
];
