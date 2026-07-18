export type Contact = {
  name: string;
  phone: string;
  roleEnglish?: string;
  roleHindi?: string;
  src?: string;
};

export const namedContacts: Contact[] = [
  {
    name: "Krishna Chaudhary",
    phone: "93146 50479",
    roleEnglish: "Treasurer",
    roleHindi: "कोषाध्यक्ष",
    src: "/media/about/person/krishna.jpg",
  },
  {
    name: "Sikander Singh",
    phone: "94600 95563",
    roleEnglish: "President",
    roleHindi: "अध्यक्ष",
    src: "/media/about/person/sikander.png",
  },
  {
    name: "Dhanveer Singh Hundal",
    phone: "97720 36420",
    roleEnglish: "Secretary",
    roleHindi: "सचिव",
    src: "/media/about/person/Dhanveer.jpg",
  },
];

export const committee = {
  count: 27,
  labelHindi: "आजीवन सदस्य",
  labelEnglish: "Life Members",
  note:
    "27 life members guide GBSS's work. Individual roles and bios are being compiled and will be added here.",
};
