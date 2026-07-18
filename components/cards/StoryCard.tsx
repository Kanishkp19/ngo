import Image from "next/image";
import ImagePlaceholder from "@/components/media/ImagePlaceholder";

type StoryCardProps = {
  excerpt: string;
  name?: string;
  consented: boolean;
  src?: string;
};

export default function StoryCard({ excerpt, name, consented, src }: StoryCardProps) {
  const displayName = consented && name ? name : "A resident of GBSS.";

  return (
    <div className="bg-white rounded-card shadow-card overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-[4/3] relative bg-navy-10">
        {consented && src ? (
          <Image
            src={src}
            alt={displayName}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <ImagePlaceholder label="Story photo pending consent" className="w-full h-full" />
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <p className="text-[15px] text-charcoal leading-relaxed italic">"{excerpt}"</p>
        <p className="text-[13px] font-display font-600 text-navy mt-4">{displayName}</p>
      </div>
    </div>
  );
}
