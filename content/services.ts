export type Service = {
  id: string;
  titleHindi: string;
  titleEnglish: string;
  caption: string;
  src?: string;
};

export const coreServices: Service[] = [
  {
    id: "first-aid",
    titleHindi: "प्राथमिक उपचार",
    titleEnglish: "First Aid",
    caption: "Immediate care for those found injured or unwell in public spaces.",
    src: "/media/our_work/first_aid.png",
  },
  {
    id: "food-service",
    titleHindi: "भोजन सेवा",
    titleEnglish: "Food Service",
    caption: "Regular, nourishing meals for every resident of the shelter.",
    src: "/media/our_work/food_service.jpeg",
  },
  {
    id: "blanket-distribution",
    titleHindi: "कंबल वितरण सेवा",
    titleEnglish: "Blanket Distribution",
    caption: "Providing blankets and warm clothing to those in need during the cold winter months.",
    src: "/media/our_work/blanket_distribution.jpeg",
  },
  {
    id: "daily-routine",
    titleHindi: "ज़रूरतमंदों को आश्रय एवं संसाधन सहायता",
    titleEnglish: "Providing Shelter & Infrastructure Support",
    caption: "Accepting brick and steel donations to expand and build proper shelter facilities for the NGO's betterment.",
    src: "/media/our_work/providing_resources.jpeg",
  },
  {
    id: "mental-development",
    titleHindi: "मानसिक विकास हेतु प्रयास",
    titleEnglish: "Mental Development Efforts",
    caption: "Structured efforts to support cognitive and emotional growth.",
  },
  {
    id: "rehabilitation",
    titleHindi: "पुनर्वास हेतु प्रयास - घर वापसी",
    titleEnglish: "Rehabilitation & Home Return",
    caption: "Working to reunite residents with their families wherever possible.",
    src: "/media/our_work/home_return.jpeg",
  },
  {
    id: "cultural-programs",
    titleHindi: "विशेष योग्यजनों हेतु सांस्कृतिक कार्यक्रमों का आयोजन",
    titleEnglish: "Cultural Programs for Specially-Abled Individuals",
    caption: "Festivals and cultural events organized for and with residents.",
  },
];

// Top-level grouping used on the homepage "What We Do" section
export const topLevelOfferings = [
  {
    title: "Shelter",
    description:
      "A safe, stable home for individuals found destitute, orphaned, or disoriented in public spaces.",
  },
  {
    title: "Medical Care",
    description:
      "First aid, ongoing health monitoring, and access to psychiatric specialists.",
  },
  {
    title: "Rehabilitation & Reunification",
    description:
      "Mental development support, daily care, and efforts to reunite residents with family.",
  },
];
