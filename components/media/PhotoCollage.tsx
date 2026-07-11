import ImagePlaceholder from "./ImagePlaceholder";

type CollageImage = { alt: string };

export default function PhotoCollage({ images }: { images: CollageImage[] }) {
  const rotations = ["-rotate-6", "rotate-3", "-rotate-3", "rotate-6"];

  return (
    <div className="relative h-[340px] md:h-[420px] w-full max-w-md mx-auto">
      {images.slice(0, 4).map((img, i) => (
        <div
          key={i}
          className={`absolute w-[140px] h-[140px] md:w-[170px] md:h-[170px] rounded-card overflow-hidden shadow-card ${rotations[i % rotations.length]}`}
          style={{
            top: `${(i % 2) * 45}%`,
            left: `${i < 2 ? 5 : 45}%`,
            zIndex: i,
          }}
        >
          <ImagePlaceholder label={img.alt} className="w-full h-full" />
        </div>
      ))}
    </div>
  );
}
