import Image from "next/image";
import ImagePlaceholder from "./ImagePlaceholder";

type GridImage = { src?: string; alt: string };

export default function ImageGrid2x2({ images }: { images: GridImage[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-5">
      {images.slice(0, 4).map((img, i) => (
        <div key={i} className="aspect-square rounded-card overflow-hidden relative bg-navy-10">
          {img.src ? (
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <ImagePlaceholder label={img.alt} className="w-full h-full" />
          )}
        </div>
      ))}
    </div>
  );
}
