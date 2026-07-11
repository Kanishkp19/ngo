"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/content/site";
import Button from "@/components/primitives/Button";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-navy-10">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 h-[76px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="GBSS home">
          <span
            aria-hidden
            className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center bg-navy-10"
          >
            <span className="font-display font-700 text-navy text-sm">GB</span>
          </span>
          <span className="hidden sm:block font-display font-700 text-navy text-[15px] leading-tight">
            Guru Bharosa
            <br />
            Sewa Sanstha
          </span>
        </Link>

        <nav className="hidden [@media(min-width:900px)]:flex items-center gap-7" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[14px] font-medium text-navy py-2 nav-link ${
                  active ? "nav-link-active" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden [@media(min-width:900px)]:block">
          <Button href="/donate" label="Donate" variant="primary" />
        </div>

        <button
          className="[@media(min-width:900px)]:hidden text-navy"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          className="[@media(min-width:900px)]:hidden border-t border-navy-10 bg-white px-5 py-4 flex flex-col gap-1"
          aria-label="Primary mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-navy text-[15px] font-medium py-3 border-b border-navy-10 last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3">
            <Button href="/donate" label="Donate" variant="primary" />
          </div>
        </nav>
      )}

      <style>{`
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          height: 2px;
          width: 0;
          background: var(--color-gold);
          transition: width 200ms ease;
        }
        .nav-link:hover::after,
        .nav-link-active::after {
          width: 100%;
        }
      `}</style>
    </header>
  );
}
