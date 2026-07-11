export type Contact = {
  name: string;
  phone: string;
  role?: string; // gap flagged in CONTENT.md — not yet provided
};

export const namedContacts: Contact[] = [
  { name: "Sikandar Singh", phone: "94600 95563" },
  { name: "Krishna Chaudhary", phone: "93146 50479" },
  { name: "Dhanveer Singh Hundal", phone: "97720 36420" },
];

export const committee = {
  count: 27,
  labelHindi: "आजीवन सदस्य",
  labelEnglish: "Life Members",
  note:
    "27 life members guide GBSS's work. Individual roles and bios are being compiled and will be added here.",
};
