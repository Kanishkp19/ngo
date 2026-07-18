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
    <div className="flex flex-col items-center gap-10 w-full md:relative md:h-[560px] md:max-w-xl md:block mx-auto px-2">
      {images.slice(0, 4).map((img, i) => (
        <div
          key={i}
          className={`w-[94vw] max-w-[460px] aspect-[4/3] relative bg-white p-3 border border-gold/25 rounded-card shadow-card ${rotations[i % rotations.length]} 
            md:w-[245px] md:h-[245px] md:aspect-square ${desktopPositions[i % desktopPositions.length]} 
            transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
        >
          <div className="relative w-full h-full rounded-[8px] overflow-hidden bg-navy-10">
            {img.src ? (
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 460px, 250px"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <ImagePlaceholder label={img.alt} className="w-full h-full" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
