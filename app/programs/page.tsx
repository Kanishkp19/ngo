import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import TwoToneHeading from "@/components/primitives/TwoToneHeading";
import ImageGrid4x2 from "@/components/media/ImageGrid4x2";
import Button from "@/components/primitives/Button";
import { coreServices } from "@/content/services";

const deepDiveIds = ["first-aid", "food-service", "rehabilitation"];
const deepDives = coreServices.filter((s) => deepDiveIds.includes(s.id));

const deepDiveDetails: Record<string, { problem: string; whatWeDo: string; outcome: string }> = {
  "first-aid": {
    problem: "Individuals are often found injured, unwell, or in medical distress in public spaces.",
    whatWeDo: "Our team provides immediate first aid and stabilizes residents before further care.",
    outcome: "Faster recovery and a safer transition into ongoing shelter and treatment.",
  },
  "food-service": {
    problem: "Destitute individuals face severe hunger and malnutrition on the streets.",
    whatWeDo: "We provide three fresh, hygienic, and nutritious meals daily to all shelter residents.",
    outcome: "Improved physical health, energy, and overall dignity for every resident.",
  },
  rehabilitation: {
    problem: "Families are often unaware of what happened to a missing relative.",
    whatWeDo: "We work to trace, verify, and safely reunite residents with their families.",
    outcome: "129 individuals reunited with their families to date.",
  },
};

export default function ProgramsPage() {
  return (
    <>
      <Section background="white" className="!pt-14 !pb-10">
        <div className="max-w-section mx-auto text-center">
          <span className="text-[13px] font-display font-600 uppercase tracking-[0.08em] text-gold">
            Our Work
          </span>
          <TwoToneHeading text="FROM FIRST AID TO FULL REHABILITATION" highlight="REHABILITATION" as="h1" />
          <p className="text-[16px] text-charcoal mt-5">
            Every resident's journey with GBSS moves through the same arc: immediate
            care, daily stability, mental and medical support, and — wherever possible —
            a safe return home.
          </p>
        </div>
      </Section>

      <Section background="cream">
        <SectionHeading eyebrow="8 Core Services" title="HOW WE CARE, STEP BY STEP" highlight="STEP BY STEP" />
        <ImageGrid4x2
          items={coreServices.map((s) => ({
            titleEnglish: s.titleEnglish,
            titleHindi: s.titleHindi,
            caption: s.caption,
            src: s.src,
          }))}
        />
      </Section>

      <Section background="white">
        <SectionHeading
          eyebrow="A Closer Look"
          title="THREE SERVICES, IN DEPTH"
          highlight="IN DEPTH"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {deepDives.map((service) => {
            const d = deepDiveDetails[service.id];
            return (
              <div key={service.id} className="bg-cream rounded-card p-7">
                <h3 className="font-display font-600 text-navy text-[18px] mb-4">
                  {service.titleEnglish}
                </h3>
                <p className="text-[13px] font-display font-600 uppercase tracking-wide text-gold mb-1">
                  Problem
                </p>
                <p className="text-[14px] text-charcoal mb-4">{d.problem}</p>
                <p className="text-[13px] font-display font-600 uppercase tracking-wide text-gold mb-1">
                  What We Do
                </p>
                <p className="text-[14px] text-charcoal mb-4">{d.whatWeDo}</p>
                <p className="text-[13px] font-display font-600 uppercase tracking-wide text-gold mb-1">
                  Outcome
                </p>
                <p className="text-[14px] text-charcoal">{d.outcome}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section background="cream" className="!py-14 text-center">
        <h2 className="font-display font-700 text-navy text-[22px] mb-6">
          See the impact of this work
        </h2>
        <Button href="/impact" label="View Our Impact" variant="primary" />
      </Section>
    </>
  );
}
