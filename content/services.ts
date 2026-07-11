export type Service = {
  id: string;
  titleHindi: string;
  titleEnglish: string;
  caption: string;
};

export const coreServices: Service[] = [
  {
    id: "first-aid",
    titleHindi: "प्राथमिक उपचार",
    titleEnglish: "First Aid",
    caption: "Immediate care for those found injured or unwell in public spaces.",
  },
  {
    id: "food-service",
    titleHindi: "भोजन सेवा",
    titleEnglish: "Food Service",
    caption: "Regular, nourishing meals for every resident of the shelter.",
  },
  {
    id: "recreation",
    titleHindi: "मनोरंजन के संसाधन",
    titleEnglish: "Recreation Resources",
    caption: "Space and activity for rest, play, and everyday dignity.",
  },
  {
    id: "daily-routine",
    titleHindi: "दैनिक दिनचर्या",
    titleEnglish: "Daily Routine Care & Basic Needs",
    caption: "Hygiene, clothing, and the basic needs of daily life, met consistently.",
  },
  {
    id: "mental-development",
    titleHindi: "मानसिक विकास हेतु प्रयास",
    titleEnglish: "Mental Development Efforts",
    caption: "Structured efforts to support cognitive and emotional growth.",
  },
  {
    id: "psychiatric-services",
    titleHindi: "मनोरोग विशेषज्ञ की सेवाएँ",
    titleEnglish: "Psychiatric Specialist Services",
    caption: "Access to psychiatric specialists for residents who need it.",
  },
  {
    id: "rehabilitation",
    titleHindi: "पुनर्वास हेतु प्रयास - घर वापसी",
    titleEnglish: "Rehabilitation & Home Return",
    caption: "Working to reunite residents with their families wherever possible.",
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
