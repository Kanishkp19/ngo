import Link from "next/link";
import { Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { siteIdentity, navLinks } from "@/content/site";
import { namedContacts } from "@/content/team";

export default function SiteFooter() {
  return (
    <footer className="bg-cream border-t border-navy-10">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-3">
            <span
              aria-hidden
              className="w-9 h-9 rounded-full border-2 border-gold flex items-center justify-center bg-white"
            >
              <span className="font-display font-700 text-navy text-xs">GB</span>
            </span>
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
            <span
              className="w-9 h-9 rounded-full bg-navy-10 flex items-center justify-center text-navy opacity-50"
              title="Social handles not yet available"
            >
              <Facebook size={16} aria-hidden />
            </span>
            <span
              className="w-9 h-9 rounded-full bg-navy-10 flex items-center justify-center text-navy opacity-50"
              title="Social handles not yet available"
            >
              <Instagram size={16} aria-hidden />
            </span>
          </div>
          <p className="text-[12px] text-charcoal mt-3">Social handles coming soon.</p>
        </div>
      </div>

      <div className="border-t border-navy-10">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-[13px] text-charcoal">
          <span>{siteIdentity.registration}</span>
          <span>&copy; {new Date().getFullYear()} {siteIdentity.nameEnglish}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
