import Image from "next/image";
import ImagePlaceholder from "./ImagePlaceholder";

type CollageImage = { src?: string; alt: string };

export default function PhotoCollage({ images }: { images: CollageImage[] }) {
  const rotations = ["-rotate-6", "rotate-3", "-rotate-3", "rotate-6"];
  return (
    <div className="relative h-[410px] sm:h-[460px] md:h-[540px] w-full max-w-[390px] sm:max-w-md md:max-w-xl mx-auto">
      {images.slice(0, 4).map((img, i) => (
        <div
          key={i}
          className={`absolute w-[165px] h-[165px] sm:w-[190px] sm:h-[190px] md:w-[245px] md:h-[245px] rounded-card overflow-hidden shadow-card bg-navy-10 ${rotations[i % rotations.length]}`}
          style={{
            top: `${(i % 2) === 0 ? 2 : 48}%`,
            left: `${i < 2 ? 2 : 50}%`,
            zIndex: i,
          }}
        >
          {img.src ? (
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 190px, 250px"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <ImagePlaceholder label={img.alt} className="w-full h-full" />
          )}
        </div>
      ))}
    </div>
  );}
