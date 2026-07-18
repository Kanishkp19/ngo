import Image from "next/image";
import ImagePlaceholder from "./ImagePlaceholder";

type CollageImage = { src?: string; alt: string };

export default function PhotoCollage({ images }: { images: CollageImage[] }) {
  const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];
  
  // Tailwind position styles for desktop (md screens and up)
  const desktopPositions = [
    "md:absolute md:top-[2%] md:left-[2%] md:z-[0]",
    "md:absolute md:top-[48%] md:left-[2%] md:z-[1]",
    "md:absolute md:top-[2%] md:left-[50%] md:z-[2]",
    "md:absolute md:top-[48%] md:left-[50%] md:z-[3]"
  ];

  return (
    <div className="flex flex-col items-center gap-8 w-full md:relative md:h-[540px] md:max-w-xl md:block mx-auto">
      {images.slice(0, 4).map((img, i) => (
        <div
          key={i}
          className={`w-full max-w-[330px] aspect-[4/3] relative rounded-card overflow-hidden shadow-card bg-navy-10 ${rotations[i % rotations.length]} 
            md:w-[245px] md:h-[245px] md:aspect-square ${desktopPositions[i % desktopPositions.length]}`}
        >
          {img.src ? (
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 330px, 250px"
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
