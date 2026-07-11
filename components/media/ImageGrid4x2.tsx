import ImagePlaceholder from "./ImagePlaceholder";

type GridItem = { titleEnglish: string; titleHindi: string; caption: string; src?: string };

export default function ImageGrid4x2({ items }: { items: GridItem[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
      {items.map((item, i) => (
        <div key={i} className="flex flex-col">
          <div className="aspect-square rounded-card overflow-hidden mb-3">
            <ImagePlaceholder label={item.titleEnglish} className="w-full h-full" />
          </div>
          <h3 className="text-[15px] font-display font-600 text-navy leading-snug">
            {item.titleEnglish}
          </h3>
          <p className="font-devanagari text-[13px] text-gold mt-0.5">{item.titleHindi}</p>
          <p className="text-[13px] text-charcoal mt-1.5 leading-snug">{item.caption}</p>
        </div>
      ))}
    </div>
  );
}
