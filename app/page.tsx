import { Home as HomeIcon, HeartPulse, Users } from "lucide-react";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import TwoToneHeading from "@/components/primitives/TwoToneHeading";
import RectangleFrame from "@/components/media/RectangleFrame";
import Button from "@/components/primitives/Button";
import StatCard from "@/components/primitives/StatCard";
import ServiceCard from "@/components/cards/ServiceCard";
import StoryCard from "@/components/cards/StoryCard";
import { siteIdentity } from "@/content/site";
import { impactStats, storyPlaceholders } from "@/content/impact";
import { topLevelOfferings } from "@/content/services";

const offeringIcons = [HomeIcon, HeartPulse, Users];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Section background="white" className="!py-16 md:!py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <TwoToneHeading text="GIVING THE FORGOTTEN A HOME" highlight="FORGOTTEN" as="h1" />
            <p className="text-[17px] text-charcoal mt-6 max-w-lg mx-auto md:mx-0">
              {siteIdentity.missionOneLiner} Based in Suratgarh, Rajasthan, serving since{" "}
              {siteIdentity.founded}.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-8">
              <Button href="/donate" label="Donate Now" variant="primary" />
              <Button href="/programs" label="See Our Work" variant="secondary" />
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <RectangleFrame src="/media/home/home.png" alt="Residents at the GBSS shelter in Suratgarh" />
          </div>
        </div>
      </Section>

      <Section background="cream">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 max-w-5xl mx-auto">
          {impactStats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </Section>

      {/* Mission snapshot */}
      <Section background="white">
        <div className="max-w-section mx-auto text-center">
          <span className="text-[13px] font-display font-600 uppercase tracking-[0.08em] text-gold">
            Our Mission
          </span>
          <h2 className="font-display font-700 text-navy text-[26px] md:text-[30px] mt-3 leading-snug">
            Shelter, medical care, and rehabilitation — with dignity
          </h2>
          <p className="text-[16px] text-charcoal mt-5">
            GBSS was founded in 2014 to care for helpless, destitute, orphaned, and
            disabled individuals found at railway stations, bus stands, hospitals, and
            public spaces — treating every one of them as an{" "}
            <span className="italic">ईश्वरीय प्राणी</span>, a divine soul deserving of
            care.
          </p>
          <div className="mt-6">
            <Button href="/about" label="Know More" variant="secondary" icon={false} />
          </div>
        </div>
      </Section>

      {/* What We Do */}
      <Section background="cream">
        <SectionHeading
          eyebrow="What We Do"
          title="THREE WAYS WE SHOW UP"
          highlight="SHOW UP"
          description="Our 8 core services fall under three broad commitments."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-8 max-w-6xl mx-auto">
          {topLevelOfferings.map((offering, i) => (
            <ServiceCard
              key={offering.title}
              icon={offeringIcons[i]}
              title={offering.title}
              description={offering.description}
            />
          ))}
        </div>
        <div className="text-center mt-10">
          <Button href="/programs" label="View All Services" variant="secondary" />
        </div>
      </Section>

      {/* Latest work / recent story */}
      <Section background="white">
        <SectionHeading
          eyebrow="Recent Story"
          title="EVERY RETURN HOME IS A STORY"
          highlight="STORY"
        />
        <div className="max-w-md mx-auto">
          <StoryCard {...storyPlaceholders[0]} />
        </div>
        <div className="text-center mt-8">
          <Button href="/impact" label="See More Stories" variant="secondary" />
        </div>
      </Section>



      {/* CTA band */}
      <Section background="cream" className="!py-14">
        <div className="flex flex-col md:flex-row items-center justify-center gap-5">
          <Button href="/donate" label="Donate" variant="primary" />
          <Button href="/get-involved" label="Volunteer" variant="secondary" />
        </div>
      </Section>
    </>
  );
}
