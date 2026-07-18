import { MapPin, Phone, Mail } from "lucide-react";
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
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-gold mt-1 shrink-0" aria-hidden />
                <p className="text-[15px] text-charcoal">
                  <a href={`mailto:${siteIdentity.email}`} className="hover:underline">
                    {siteIdentity.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="aspect-video rounded-card overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.8944485934935!2d73.91554750000002!3d29.314771699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391672344ba967ef%3A0x9de0b0972111d19!2sGuru%20Bharosa%20Seva%20Sanstha!5e0!3m2!1sen!2sin!4v1784358852875!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Guru Bharosa Seva Sanstha Location"
              ></iframe>
            </div>
            <a
              href="https://maps.app.goo.gl/aXKu9HjpiqyexZGz7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-[13px] text-gold hover:underline"
            >
              View larger map →
            </a>
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
