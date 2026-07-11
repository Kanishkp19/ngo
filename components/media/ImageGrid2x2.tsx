import ImagePlaceholder from "./ImagePlaceholder";

type GridImage = { src?: string; alt: string };

export default function ImageGrid2x2({ images }: { images: GridImage[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-5">
      {images.slice(0, 4).map((img, i) => (
        <div key={i} className="aspect-square rounded-card overflow-hidden">
          <ImagePlaceholder label={img.alt} className="w-full h-full" />
        </div>
      ))}
    </div>
  );
}
