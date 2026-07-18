import Image from "next/image";
import ImagePlaceholder from "./ImagePlaceholder";

type CollageImage = { src?: string; alt: string };

export default function PhotoCollage({ images }: { images: CollageImage[] }) {
  const rotations = ["-rotate-6", "rotate-3", "-rotate-3", "rotate-6"];
  return (
    <div className="relative h-[380px] md:h-[480px] w-full max-w-md md:max-w-lg mx-auto">
      {images.slice(0, 4).map((img, i) => (
        <div
          key={i}
          className={`absolute w-[160px] h-[160px] md:w-[210px] md:h-[210px] rounded-card overflow-hidden shadow-card bg-navy-10 ${rotations[i % rotations.length]}`}
          style={{
            top: `${(i % 2) * 45}%`,
            left: `${i < 2 ? 5 : 45}%`,
            zIndex: i,
          }}
        >
          {img.src ? (
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 160px, 210px"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <ImagePlaceholder label={img.alt} className="w-full h-full" />
          )}
        </div>
      ))}
    </div>
  );}
