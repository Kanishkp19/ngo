import Image from "next/image";

type RectangleFrameProps = {
  src: string;
  alt: string;
  className?: string;
  dashed?: boolean;
  maxWidth?: number;
};

export default function RectangleFrame({
  src,
  alt,
  className = "w-full max-w-[360px] md:max-w-[380px] aspect-[4/5]",
  dashed = true,
  maxWidth,
}: RectangleFrameProps) {
  const sizeStyles = maxWidth ? { maxWidth } : {};

  return (
    <div 
      className={`relative shrink-0 group cursor-pointer ${className} mx-auto`}
      style={sizeStyles}
    >
      {dashed && (
        <div className="absolute -inset-3 border-2 border-dashed border-gold/45 rounded-card opacity-80 transition-transform duration-700 ease-out group-hover:rotate-3" />
      )}
      <div className="w-full h-full rounded-card overflow-hidden bg-navy border-2 border-gold/30 shadow-[0_12px_40px_rgba(10,28,63,0.12)] transition-all duration-300 group-hover:shadow-[0_20px_50px_rgba(10,28,63,0.2)] group-hover:border-gold relative">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 380px"
          className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
          priority
        />
        {/* Subtle dark vignette overlay for a premium look */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent opacity-80 pointer-events-none" />
      </div>
    </div>
  );
}
