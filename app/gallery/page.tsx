"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import TwoToneHeading from "@/components/primitives/TwoToneHeading";
import ImagePlaceholder from "@/components/media/ImagePlaceholder";
import DomeGallery from "@/components/media/DomeGallery";

const domeImages = [
  // Achievements
  "/media/gallery/achievment/achievement_1.jpg",
  "/media/gallery/achievment/achievement_2.png",
  "/media/gallery/achievment/achievement_3.png",
  "/media/gallery/achievment/achievement_4.png",
  "/media/gallery/achievment/achievement_5.png",
  "/media/gallery/achievment/achievement_6.png",
  // Events
  "/media/gallery/events/event_1.jpeg",
  "/media/gallery/events/event_2.jpeg",
  "/media/gallery/events/event_3.jpeg",
  // Medical Checkups
  "/media/gallery/medical/medical_1.jpeg",
  "/media/gallery/medical/medical_2.jpeg",
  "/media/gallery/medical/medical_3.jpeg",
  // Before & After
  "/media/gallery/before-after/before1.png",
  "/media/gallery/before-after/after1.png",
  "/media/gallery/before-after/before2.png",
  "/media/gallery/before-after/after2.png",
  "/media/gallery/before-after/sarjeet_kaur.png",
  // Our Work
  "/media/our_work/first_aid.png",
  "/media/our_work/food_service.jpeg",
  "/media/our_work/providing_resources.jpeg",
  "/media/our_work/home_return.jpeg",
  "/media/our_work/blanket_distribution.jpeg",
  "/media/our_work/care.png",
  "/media/our_work/sports&activity.png",
  // Life & Story Photos
  "/media/about/life/Screenshot 2026-07-19 at 1.53.50 PM.png",
  "/media/about/life/Screenshot 2026-07-19 at 1.54.36 PM.png",
  "/media/about/life/daily_life.jpeg",
  "/media/about/life/ourstory4.png",
  "/media/about/ourstory1.png",
  "/media/about/ourstory2.png",
  "/media/about/ourstory3.png",
  "/media/about/ourstory4.png",
  "/media/home/home.png",
  // Slideshow
  "/slideshow/reunion_3.jpeg",
  "/slideshow/Screenshot 2026-07-19 at 1.54.36 PM.png",
  "/slideshow/meal_service.jpeg",
  "/slideshow/blanket_pile.jpeg",
  "/slideshow/Screenshot 2026-07-19 at 1.55.26 PM.png",
  "/slideshow/Screenshot 2026-07-19 at 1.55.45 PM.png",
  "/slideshow/WhatsApp Image 2026-07-18 at 13.36.51.jpeg",
  "/slideshow/reunion_1.jpeg",
  "/slideshow/ourstory4.png",
  "/slideshow/exterior.jpeg",
  "/slideshow/Screenshot 2026-07-19 at 1.56.20 PM.png",
  // Team Members
  "/media/about/person/sikander.png",
  "/media/about/person/krishna.jpg",
  "/media/about/person/Dhanveer.jpg",
];

const categories = [
  {
    key: "achievements",
    title: "NEWS & ACHIEVEMENTS",
    highlight: "ACHIEVEMENTS",
    items: [
      { label: "Reunification Certificate", src: "/media/gallery/achievment/achievement_1.jpg" },
      { label: "Local News Coverage", src: "/media/gallery/achievment/achievement_2.png" },
      { label: "Police Desk Appreciation", src: "/media/gallery/achievment/achievement_3.png" },
      { label: "Uttarakhand Police Letter", src: "/media/gallery/achievment/achievement_4.png" },
      { label: "News Feature Story", src: "/media/gallery/achievment/achievement_5.png" },
      { label: "Appreciation News Clip", src: "/media/gallery/achievment/achievement_6.png" },
    ],
  },
  {
    key: "events",
    title: "COMMUNITY EVENTS",
    highlight: "COMMUNITY",
    items: [
      { label: "Raksha Bandhan celebration", src: "/media/gallery/events/event_1.jpeg" },
      { label: "Community volunteer day", src: "/media/gallery/events/event_2.jpeg" },
      { label: "Cultural program", src: "/media/gallery/events/event_3.jpeg" },
    ],
  },
  {
    key: "medical",
    title: "MEDICAL CHECKUPS",
    highlight: "MEDICAL",
    items: [
      { label: "Routine health checkup", src: "/media/gallery/medical/medical_1.jpeg" },
      { label: "Specialist visit", src: "/media/gallery/medical/medical_2.jpeg" },
      { label: "First aid in progress", src: "/media/gallery/medical/medical_3.jpeg" },
    ],
  },
];

export default function GalleryPage() {
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <Section background="white" className="!pt-14 !pb-10">
        <div className="max-w-section mx-auto text-center">
          <span className="text-[13px] font-display font-600 uppercase tracking-[0.08em] text-gold">
            Gallery
          </span>
          <TwoToneHeading text="A WINDOW INTO EVERYDAY CARE" highlight="EVERYDAY CARE" as="h1" />
        </div>
      </Section>

      {/* 3D Dome Gallery Section */}
      <Section background="white" className="!py-12">
        <div className="max-w-section mx-auto text-center mb-8">
          <span className="text-[13px] font-display font-600 uppercase tracking-[0.08em] text-gold">
            Interactive 3D Sphere
          </span>
          <h2 className="text-[28px] font-display font-700 text-navy mt-2 mb-4 leading-tight">
            EXPLORE THE GALLERY DOME
          </h2>
          <p className="text-[14px] text-charcoal/80 max-w-xl mx-auto">
            Click and drag to rotate the dome. Click any image to enlarge and explore our daily operations, reunions, medical checkups, and news clippings.
          </p>
        </div>
        <div className="w-full h-[450px] md:h-[600px] rounded-card overflow-hidden bg-white shadow-md border border-slate-100 relative">
          <DomeGallery 
            images={domeImages} 
            grayscale={false} 
            overlayBlurColor="#ffffff" 
            fit={0.65}
            openedImageWidth="min(380px, 85vw)"
            openedImageHeight="min(480px, 60vh)"
          />
        </div>
      </Section>

      {categories.map((cat, i) => (
        <Section key={cat.key} background={i % 2 === 0 ? "white" : "cream"}>
          <SectionHeading title={cat.title} highlight={cat.highlight} />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {cat.items.map((item) => (
              <div 
                key={item.label} 
                className="aspect-[4/3] rounded-card overflow-hidden relative bg-navy-10 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group/item"
                onClick={() => item.src && setActiveImage({ src: item.src, alt: item.label })}
              >
                {item.src ? (
                  <>
                    <Image
                      src={item.src}
                      alt={item.label}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className={`w-full h-full hover:scale-105 transition-transform duration-500 ${
                        cat.key === "achievements" ? "object-contain bg-slate-50 p-2" : "object-cover"
                      }`}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/item:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                      <span className="bg-white/95 text-navy font-display text-[12px] font-600 tracking-wide px-3 py-1.5 rounded-full opacity-0 group-hover/item:opacity-100 shadow-sm transition-opacity duration-300">
                        View Larger
                      </span>
                    </div>
                  </>
                ) : (
                  <ImagePlaceholder label={item.label} className="w-full h-full" />
                )}
              </div>
            ))}
          </div>
        </Section>
      ))}

      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out animate-fade-in"
          onClick={() => setActiveImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors duration-200 p-2"
            onClick={() => setActiveImage(null)}
            aria-label="Close Lightbox"
          >
            <X size={28} />
          </button>
          <div className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
          <p className="text-white/80 font-display font-500 mt-6 text-center text-[15px] max-w-xl">
            {activeImage.alt}
          </p>
        </div>
      )}
    </>
  );
}
