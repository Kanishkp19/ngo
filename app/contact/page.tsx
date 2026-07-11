import { MapPin, Phone } from "lucide-react";
import Section from "@/components/layout/Section";
import TwoToneHeading from "@/components/primitives/TwoToneHeading";
import ContactForm from "@/components/forms/ContactForm";
import { siteIdentity } from "@/content/site";
import { namedContacts } from "@/content/team";

export default function ContactPage() {
  return (
    <>
      <Section background="white" className="!pt-14 !pb-10">
        <div className="max-w-section mx-auto text-center">
          <span className="text-[13px] font-display font-600 uppercase tracking-[0.08em] text-gold">
            Contact
          </span>
          <TwoToneHeading text="REACH OUT ANY TIME" highlight="ANY TIME" as="h1" />
        </div>
      </Section>

      <Section background="cream">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display font-700 text-navy text-[22px] mb-6">Visit or Call</h2>

            <div className="flex items-start gap-3 mb-6">
              <MapPin size={20} className="text-gold mt-1 shrink-0" aria-hidden />
              <p className="text-[15px] text-charcoal">
                {siteIdentity.address.line1}
                <br />
                {siteIdentity.address.line2}
              </p>
            </div>

            <div className="flex flex-col gap-4 mb-8">
              {namedContacts.map((c) => (
                <div key={c.phone} className="flex items-start gap-3">
                  <Phone size={20} className="text-gold mt-1 shrink-0" aria-hidden />
                  <p className="text-[15px] text-charcoal">
                    <span className="font-display font-600 text-navy">{c.name}</span>
                    <br />
                    {c.phone}
                  </p>
                </div>
              ))}
            </div>

            {/* Embedded map placeholder */}
            <div className="aspect-video rounded-card bg-navy-10 flex items-center justify-center text-navy/50 text-[13px]">
              Map of Suratgarh, Sri Ganganagar, Rajasthan
            </div>

            <p className="text-[13px] text-charcoal/70 italic mt-6">
              No official email address is available yet. Messages sent below reach our
              team directly by phone.
            </p>
          </div>

          <div>
            <h2 className="font-display font-700 text-navy text-[22px] mb-6">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
