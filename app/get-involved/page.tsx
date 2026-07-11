import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import TwoToneHeading from "@/components/primitives/TwoToneHeading";
import VolunteerInterestForm from "@/components/forms/VolunteerInterestForm";
import { AlertCircle } from "lucide-react";
import { socialCall } from "@/content/site";

export default function GetInvolvedPage() {
  return (
    <>
      <Section background="white" className="!pt-14 !pb-10">
        <div className="max-w-section mx-auto text-center">
          <span className="text-[13px] font-display font-600 uppercase tracking-[0.08em] text-gold">
            Get Involved
          </span>
          <TwoToneHeading text="VOLUNTEER WITH US" highlight="VOLUNTEER" as="h1" />
          <p className="text-[16px] text-charcoal mt-5">
            GBSS runs on people who show up — with time, skills, or simply attention.
            Here&apos;s how you can be one of them.
          </p>
        </div>
      </Section>

      {/* Public call to action - real operational ask */}
      <Section background="cream">
        <div className="max-w-2xl mx-auto bg-white rounded-card shadow-card p-8 md:p-10 text-center border-2 border-gold/40">
          <span className="w-14 h-14 rounded-full bg-gold-10 flex items-center justify-center mx-auto mb-5">
            <AlertCircle size={26} className="text-gold" aria-hidden />
          </span>
          <h2 className="font-display font-700 text-navy text-[20px] mb-3">
            {socialCall.heading}
          </h2>
          <p className="text-[15px] text-charcoal">{socialCall.body}</p>
        </div>
      </Section>

      {/* Interest form */}
      <Section background="white">
        <SectionHeading
          eyebrow="Volunteer Interest"
          title="TELL US HOW YOU'D LIKE TO HELP"
          highlight="HELP"
          description="We don't yet have a formal volunteer pipeline — this short form reaches our team directly until one exists."
        />
        <div className="max-w-lg mx-auto">
          <VolunteerInterestForm />
        </div>
      </Section>
    </>
  );
}
