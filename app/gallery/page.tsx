import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import TwoToneHeading from "@/components/primitives/TwoToneHeading";
import ImagePlaceholder from "@/components/media/ImagePlaceholder";
import BeforeAfterPair from "@/components/media/BeforeAfterPair";

const categories = [
  {
    key: "facility",
    title: "THE FACILITY",
    highlight: "FACILITY",
    items: ["Shelter exterior", "Resident living quarters", "Common dining area"],
  },
  {
    key: "events",
    title: "COMMUNITY EVENTS",
    highlight: "COMMUNITY",
    items: ["Raksha Bandhan celebration", "Community volunteer day", "Cultural program"],
  },
  {
    key: "medical",
    title: "MEDICAL CHECKUPS",
    highlight: "MEDICAL",
    items: ["Routine health checkup", "Specialist visit", "First aid in progress"],
  },
];

export default function GalleryPage() {
  return (
    <>
      <Section background="white" className="!pt-14 !pb-10">
        <div className="max-w-section mx-auto text-center">
          <span className="text-[13px] font-display font-600 uppercase tracking-[0.08em] text-gold">
            Gallery
          </span>
          <TwoToneHeading text="A WINDOW INTO EVERYDAY CARE" highlight="EVERYDAY CARE" as="h1" />
          <p className="text-[14px] text-charcoal/70 mt-4 italic">
            High-resolution photography and explicit consent confirmations for
            identifiable residents are being finalized before publishing full galleries.
          </p>
        </div>
      </Section>

      <Section background="cream">
        <SectionHeading
          eyebrow="Before & After"
          title="RECOVERY, SIDE BY SIDE"
          highlight="SIDE BY SIDE"
          description="Our signature circular pairing — used only with confirmed consent."
        />
        <div className="grid md:grid-cols-3 gap-10 justify-items-center">
          <BeforeAfterPair caption="Recovery story pending consent confirmation." />
          <BeforeAfterPair caption="Recovery story pending consent confirmation." />
          <BeforeAfterPair caption="Recovery story pending consent confirmation." />
        </div>
      </Section>

      {categories.map((cat, i) => (
        <Section key={cat.key} background={i % 2 === 0 ? "white" : "cream"}>
          <SectionHeading title={cat.title} highlight={cat.highlight} />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {cat.items.map((label) => (
              <div key={label} className="aspect-[4/3] rounded-card overflow-hidden">
                <ImagePlaceholder label={label} className="w-full h-full" />
              </div>
            ))}
          </div>
        </Section>
      ))}
    </>
  );
}
