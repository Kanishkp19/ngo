import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Facebook, Instagram, Mail } from "lucide-react";
import { siteIdentity, navLinks } from "@/content/site";
import { namedContacts } from "@/content/team";
import ShinyText from "@/components/media/ShinyText";

export default function SiteFooter() {
  return (
    <footer className="bg-cream border-t border-navy-10">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-3">
            <Image
              src="/images/logo.png"
              alt="Guru Bharosa Sewa Sanstha Logo"
              width={36}
              height={36}
              className="rounded-full object-cover border border-gold/30"
            />
            <span className="font-display font-700 text-navy text-[15px] leading-tight">
              {siteIdentity.nameEnglish}
            </span>
          </div>
          <p className="text-[14px] text-charcoal">{siteIdentity.missionOneLiner}</p>
        </div>

        <div>
          <h3 className="text-[14px] font-display font-600 uppercase tracking-wide text-navy mb-4">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-[14px] text-charcoal hover:text-navy">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[14px] font-display font-600 uppercase tracking-wide text-navy mb-4">
            Contact
          </h3>
          <ul className="flex flex-col gap-3">
            {namedContacts.map((c) => (
              <li key={c.phone} className="flex items-start gap-2 text-[14px] text-charcoal">
                <Phone size={16} className="mt-0.5 text-gold shrink-0" aria-hidden />
                <span>
                  {c.name} — {c.phone}
                </span>
              </li>
            ))}
            <li className="flex items-start gap-2 text-[14px] text-charcoal">
              <Mail size={16} className="mt-0.5 text-gold shrink-0" aria-hidden />
              <a href={`mailto:${siteIdentity.email}`} className="hover:text-navy break-all">
                {siteIdentity.email}
              </a>
            </li>
            <li className="flex items-start gap-2 text-[14px] text-charcoal">
              <MapPin size={16} className="mt-0.5 text-gold shrink-0" aria-hidden />
              <span>
                {siteIdentity.address.line1}, {siteIdentity.address.line2}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[14px] font-display font-600 uppercase tracking-wide text-navy mb-4">
            Follow
          </h3>
          <div className="flex gap-3">
            <a
              href={siteIdentity.socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-navy flex items-center justify-center text-white hover:bg-gold transition-colors"
              aria-label="Visit our Facebook page"
            >
              <Facebook size={16} aria-hidden />
            </a>
            <span
              className="w-9 h-9 rounded-full bg-navy-10 flex items-center justify-center text-navy opacity-50"
              title="Instagram coming soon"
            >
              <Instagram size={16} aria-hidden />
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-10">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] text-charcoal">
          <span>&copy; {new Date().getFullYear()} {siteIdentity.nameEnglish}. All rights reserved.</span>
          <span className="text-[13px]">
            Made with ❤️ by{" "}
            <a
              href="https://www.site-story.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block align-middle ml-1 hover:scale-105 transition-transform duration-200"
            >
              <ShinyText 
                text="Site Story" 
                speed={2} 
                color="#b89c65" 
                shineColor="#ffffff" 
                className="font-700 font-display tracking-wide text-[14px]"
              />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
