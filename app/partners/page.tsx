import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import TwoToneHeading from "@/components/primitives/TwoToneHeading";
import Button from "@/components/primitives/Button";
import { Users } from "lucide-react";

export default function PartnersPage() {
  return (
    <>
      <Section background="white" className="!pt-14 !pb-10">
        <div className="max-w-section mx-auto text-center">
          <span className="text-[13px] font-display font-600 uppercase tracking-[0.08em] text-gold">
            Our Support Base
          </span>
          <TwoToneHeading text="CARRIED BY THE COMMUNITY" highlight="COMMUNITY" as="h1" />
          <p className="text-[16px] text-charcoal mt-5">
            GBSS isn&apos;t funded by large institutional partners. It runs on the
            continuous cooperation of local city and village residents — the same
            neighbours who report a wandering stranger, donate a meal, or give an hour of
            their time.
          </p>
        </div>
      </Section>

      <Section background="cream">
        <div className="max-w-xl mx-auto bg-white rounded-card shadow-card p-10 text-center">
          <span className="w-14 h-14 rounded-full bg-navy-10 flex items-center justify-center mx-auto mb-5">
            <Users size={26} className="text-navy" aria-hidden />
          </span>
          <h2 className="font-display font-600 text-navy text-[20px] mb-3">
            No formal partners listed — yet
          </h2>
          <p className="text-[15px] text-charcoal">
            As GBSS grows, we intend to build formal partnerships with organizations that
            share our commitment to shelter and rehabilitation. This page will list them,
            with logos, once those relationships exist.
          </p>
        </div>
      </Section>

      <Section background="white" className="text-center">
        <SectionHeading title="WANT TO BECOME A PARTNER?" highlight="BECOME A PARTNER" />
        <div className="flex justify-center">
          <Button href="/contact" label="Get in Touch" variant="primary" />
        </div>
      </Section>
    </>
  );
}
