import Image from "next/image";
import ImagePlaceholder from "./ImagePlaceholder";

type GridItem = { titleEnglish: string; titleHindi: string; caption: string; src?: string };

export default function ImageGrid4x2({ items }: { items: GridItem[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
      {items.map((item, i) => (
        <div key={i} className="flex flex-col group">
          <div className="aspect-square rounded-card overflow-hidden mb-3 relative bg-navy-10 shadow-sm hover:shadow-md transition-shadow duration-300">
            {item.src ? (
              <Image
                src={item.src}
                alt={item.titleEnglish}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <ImagePlaceholder label={item.titleEnglish} className="w-full h-full" />
            )}
          </div>
          <h3 className="text-[15px] font-display font-600 text-navy leading-snug group-hover:text-gold transition-colors duration-300">
            {item.titleEnglish}
          </h3>
          <p className="font-devanagari text-[13px] text-gold mt-0.5">{item.titleHindi}</p>
          <p className="text-[13px] text-charcoal mt-1.5 leading-snug">{item.caption}</p>
        </div>
      ))}
    </div>
  );
}
