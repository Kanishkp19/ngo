import Image from "next/image";
import ImagePlaceholder from "./ImagePlaceholder";

type CircleFrameProps = {
  src?: string;
  alt: string;
  size?: number;
  dashed?: boolean;
};

export default function CircleFrame({ src, alt, size = 320, dashed = true }: CircleFrameProps) {
  return (
    <div
      className="relative shrink-0"
      style={{ width: size, height: size }}
    >
      {dashed && (
        <svg
          className="absolute -inset-3 w-[calc(100%+24px)] h-[calc(100%+24px)]"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="var(--color-gold)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        </svg>
      )}
      <div className="w-full h-full rounded-full overflow-hidden bg-navy-10">
        {src ? (
          <Image src={src} alt={alt} width={size} height={size} className="object-cover w-full h-full" />
        ) : (
          <ImagePlaceholder label={alt} rounded="full" className="w-full h-full" />
        )}
      </div>
    </div>
  );
}
