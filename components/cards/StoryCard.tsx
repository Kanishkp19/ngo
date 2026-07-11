import ImagePlaceholder from "@/components/media/ImagePlaceholder";

type StoryCardProps = {
  excerpt: string;
  name?: string;
  consented: boolean;
};

export default function StoryCard({ excerpt, name, consented }: StoryCardProps) {
  const displayName = consented && name ? name : "A resident of GBSS.";

  return (
    <div className="bg-white rounded-card shadow-card overflow-hidden flex flex-col">
      <div className="aspect-[4/3]">
        <ImagePlaceholder label="Story photo pending consent" className="w-full h-full" />
      </div>
      <div className="p-6">
        <p className="text-[15px] text-charcoal leading-relaxed italic">{excerpt}</p>
        <p className="text-[13px] font-display font-600 text-navy mt-4">{displayName}</p>
      </div>
    </div>
  );
}
