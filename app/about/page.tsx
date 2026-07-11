import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import HindiQuote from "@/components/primitives/HindiQuote";
import Pill from "@/components/primitives/Pill";
import TwoToneHeading from "@/components/primitives/TwoToneHeading";
import ImageGrid2x2 from "@/components/media/ImageGrid2x2";
import PhotoCollage from "@/components/media/PhotoCollage";
import TeamMemberCard from "@/components/cards/TeamMemberCard";
import { siteIdentity, mottos, values } from "@/content/site";
import { namedContacts, committee } from "@/content/team";

export default function AboutPage() {
  return (
    <>
      <Section background="white" className="!pt-14 !pb-10">
        <div className="max-w-section mx-auto text-center">
          <span className="text-[13px] font-display font-600 uppercase tracking-[0.08em] text-gold">
            About Us
          </span>
          <TwoToneHeading text="A HOME BUILT ON TRUST" highlight="TRUST" as="h1" />
        </div>
      </Section>

      {/* Founder story */}
      <Section background="white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[24px] font-display font-700 text-navy mb-4">Our Story</h2>
            <p className="text-[16px] text-charcoal leading-relaxed">
              {siteIdentity.nameEnglish} ({siteIdentity.nameHindi}) has operated out of
              Suratgarh, Rajasthan since {siteIdentity.founded}. What began as a response
              to helpless and disoriented individuals found at railway stations and bus
              stands has grown into a shelter caring for {" "}
              <span className="font-semibold text-navy">250+ residents</span> today, with{" "}
              <span className="font-semibold text-navy">129 people</span> already reunited
              with their families.
            </p>
            <p className="text-[16px] text-charcoal leading-relaxed mt-4">
              We are registered under {siteIdentity.registration} and are sustained
              entirely through the continuous cooperation of local city and village
              residents — no formal institutional partners are attached to this work yet.
            </p>
          </div>
          <PhotoCollage
            images={[
              { alt: "Meal service at the GBSS shelter" },
              { alt: "Medical checkup for a resident" },
              { alt: "Cultural program for residents" },
              { alt: "Daily routine care at the shelter" },
            ]}
          />
        </div>
      </Section>

      {/* Mission & values */}
      <Section background="cream">
        <SectionHeading eyebrow="Mission & Values" title="WHAT GUIDES OUR CARE" highlight="GUIDES" />
        <div className="flex flex-wrap gap-3 justify-center mb-14">
          {values.map((v) => (
            <Pill key={v.english} text={`${v.english} · ${v.hindi}`} />
          ))}
        </div>
        <div className="flex flex-col gap-10">
          {mottos.map((m) => (
            <HindiQuote key={m} text={m} />
          ))}
        </div>
      </Section>

      {/* Registration & legal credibility */}
      <Section background="white">
        <SectionHeading eyebrow="Credibility" title="REGISTERED & ACCOUNTABLE" highlight="ACCOUNTABLE" />
        <div className="max-w-2xl mx-auto bg-cream rounded-card p-8 text-center">
          <p className="text-[15px] text-charcoal">
            <span className="font-display font-600 text-navy">Registration:</span>{" "}
            {siteIdentity.registration}
          </p>
          <p className="text-[15px] text-charcoal mt-2">
            <span className="font-display font-600 text-navy">Registered address:</span>{" "}
            {siteIdentity.address.line1}, {siteIdentity.address.line2}
          </p>
          <p className="text-[13px] text-charcoal/70 mt-5 italic">
            12A / 80G tax exemption and FCRA registration status are still being confirmed
            and will be published here once verified.
          </p>
        </div>
      </Section>

      {/* 2x2 photo grid */}
      <Section background="cream">
        <SectionHeading eyebrow="A Look Inside" title="LIFE AT THE SHELTER" highlight="SHELTER" />
        <div className="max-w-2xl mx-auto">
          <ImageGrid2x2
            images={[
              { alt: "Facility exterior" },
              { alt: "Residents in daily life" },
              { alt: "Community event at GBSS" },
              { alt: "Volunteers with residents" },
            ]}
          />
        </div>
      </Section>

      {/* Management committee */}
      <Section background="white">
        <SectionHeading
          eyebrow="Who Runs GBSS"
          title="A COMMITTEE OF 27 LIFE MEMBERS"
          highlight="27 LIFE MEMBERS"
          description={committee.note}
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 max-w-2xl mx-auto">
          {namedContacts.map((c) => (
            <TeamMemberCard key={c.phone} name={c.name} />
          ))}
        </div>
      </Section>
    </>
  );
}
