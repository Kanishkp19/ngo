import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import TwoToneHeading from "@/components/primitives/TwoToneHeading";
import StatCard from "@/components/primitives/StatCard";
import BeforeAfterPair from "@/components/media/BeforeAfterPair";
import StoryCard from "@/components/cards/StoryCard";
import HindiQuote from "@/components/primitives/HindiQuote";
import { impactStats, storyPlaceholders } from "@/content/impact";
import { pressFeature } from "@/content/site";

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

      {/* Stat band, larger treatment */}
      <Section background="cream">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {impactStats.map((stat) => (
            <div key={stat.label} className="scale-110">
              <StatCard {...stat} />
            </div>
          ))}
        </div>
      </Section>

      {/* Before/after pairs */}
      <Section background="white">
        <SectionHeading
          eyebrow="Recovery"
          title="BEFORE AND AFTER CARE"
          highlight="BEFORE AND AFTER"
          description="Shown only with consent, and captioned respectfully — no full names unless the resident or family has agreed."
        />
        <div className="grid md:grid-cols-2 gap-12 justify-items-center max-w-2xl mx-auto">
          <BeforeAfterPair caption="A resident's recovery, shared with family consent." />
          <BeforeAfterPair caption="A resident's recovery, shared with family consent." />
        </div>
      </Section>

      {/* Beneficiary narratives */}
      <Section background="cream">
        <SectionHeading
          eyebrow="Their Stories"
          title="STORIES OF THE JOURNEY HOME"
          highlight="JOURNEY HOME"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {storyPlaceholders.map((story) => (
            <StoryCard key={story.id} {...story} />
          ))}
        </div>
      </Section>

      {/* Press feature */}
      <Section background="white">
        <SectionHeading eyebrow={`As Featured In ${pressFeature.publication}`} title="OUR WORK, IN THE NEWS" highlight="IN THE NEWS" />
        <HindiQuote text={pressFeature.headline} />
      </Section>
    </>
  );
}
