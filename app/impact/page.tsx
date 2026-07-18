import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import TwoToneHeading from "@/components/primitives/TwoToneHeading";
import StatCard from "@/components/primitives/StatCard";
import BeforeAfterPair from "@/components/media/BeforeAfterPair";
import VideoCard from "@/components/cards/VideoCard";
import { impactStats, reunificationVideos } from "@/content/impact";

export default function ImpactPage() {
  return (
    <>
      <Section background="white" className="!pt-14 !pb-10">
        <div className="max-w-section mx-auto text-center">
          <span className="text-[13px] font-display font-600 uppercase tracking-[0.08em] text-gold">
            Impact & Stories
          </span>
          <TwoToneHeading text="NUMBERS BEHIND EVERY NAME" highlight="EVERY NAME" as="h1" />
        </div>
      </Section>

      <Section background="cream">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {impactStats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </Section>

      {/* Beneficiary narratives */}
      <Section background="white">
        <SectionHeading
          eyebrow="Their Stories"
          title="STORIES OF THE JOURNEY HOME"
          highlight="JOURNEY HOME"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {reunificationVideos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </Section>

      {/* Before/after pairs */}
      <Section background="cream">
        <SectionHeading
          eyebrow="Recovery"
          title="BEFORE AND AFTER CARE"
          highlight="BEFORE AND AFTER"
          description="Shown only with consent, and captioned respectfully — no full names unless the resident or family has agreed."
        />
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 justify-items-center max-w-5xl mx-auto">
          <BeforeAfterPair
            beforeSrc="/media/gallery/before-after/before1.png"
            afterSrc="/media/gallery/before-after/after1.png"
            caption="Found lost and disoriented at the Suratgarh railway station with severely matted hair and high physical exhaustion. Through medical care, counseling, and nutritional support, Sikander made a complete recovery and was joyfully reunited with his family."
          />
          <BeforeAfterPair
            beforeSrc="/media/gallery/before-after/before2.png"
            afterSrc="/media/gallery/before-after/after2.png"
            caption="Brought to the shelter in a state of severe mental distress, this resident was provided with regular psychiatric care, hygiene support, and counseling. Over several months, he regained his health, memory, and dignity."
          />
        </div>
      </Section>

    </>
  );
}
