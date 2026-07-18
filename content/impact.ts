export const impactStats = [
  { value: 250, suffix: "+", label: "Individuals currently housed and cared for" },
  { value: 260, suffix: "", label: "Reunited with their families" },
  { value: 2014, suffix: "", label: "Serving continuously since", isYear: true },
];

// Placeholder story blocks — real, consented beneficiary stories are a content gap
// per CONTENT.md / SITEMAP.md. Do not present these as real individuals.
export const storyPlaceholders = [
  {
    id: "story-1",
    excerpt:
      "On March 27, an elderly, lost woman was brought to our shelter by the railway police. Nurtured back to health under our care, she eventually remembered her name—Sarjeet Kaur—and her village Bhogpur in Uttarakhand. We contacted the local Jaspur police station via social media to find the village head, leading to a video call with her family. Her grandson Gurbachan Singh traveled to the shelter to bring her home, expressing immense gratitude.",
    name: "Sarjeet Kaur",
    consented: true,
    src: "/media/gallery/before-after/sarjeet_kaur.png",
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

export const reunificationVideos = [
  {
    id: "video-1",
    src: "/media/impact/video_1.mp4",
    title: "Reuniting Families - Part 1",
    description: "A young girl found lost at the railway station who got separated from her family. GBSS is caring for her and actively helping her find her way home.",
  },
  {
    id: "video-2",
    src: "/media/impact/video_2.mp4",
    title: "Serving the Shelter - Part 2",
    description: "Our organization's founder preparing and cooking meals for the shelter residents, showing hands-on dedication and daily volunteer assistance.",
  },
  {
    id: "video-3",
    src: "/media/impact/video_3.mp4",
    title: "Reuniting Families - Part 3",
    description: "The joy of another lost girl reunited with her family in just 48 hours, made possible by the swift coordination and tracing efforts of GBSS.",
  },
  {
    id: "video-4",
    src: "/media/impact/video_4.mp4",
    title: "Reuniting Families - Part 4",
    description: "A homeless man rescued from the railway station in distress, nurtured back to health, and successfully reunited with his family.",
  },
];
