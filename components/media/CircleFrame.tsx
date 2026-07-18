import Image from "next/image";
import ImagePlaceholder from "./ImagePlaceholder";

type CircleFrameProps = {
  src?: string;
  alt: string;
  className?: string;
  dashed?: boolean;
  size?: number;
};

export default function CircleFrame({
  src,
  alt,
  className = "w-[140px] h-[140px] md:w-[190px] md:h-[190px]",
  dashed = true,
  size,
}: CircleFrameProps) {
  const sizeStyles = size ? { width: size, height: size } : {};

  return (
    <div 
      className={`relative shrink-0 group cursor-pointer ${size ? "" : className}`}
      style={sizeStyles}
    >
      {dashed && (
        <svg
          className="absolute -inset-3 w-[calc(100%+24px)] h-[calc(100%+24px)] transition-transform duration-700 ease-out group-hover:rotate-45"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="var(--color-gold)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        </svg>
      )}
      <div className="w-full h-full rounded-full overflow-hidden bg-navy-10 shadow-md transition-shadow duration-300 group-hover:shadow-lg relative">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 140px, 190px"
            className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-110"
          />
        ) : (
          <ImagePlaceholder label={alt} rounded="full" className="w-full h-full" />
        )}
      </div>
    </div>
  );
}
