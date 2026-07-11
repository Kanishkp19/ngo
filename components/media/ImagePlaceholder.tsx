import { ImageIcon } from "lucide-react";

type ImagePlaceholderProps = {
  label?: string;
  className?: string;
  rounded?: "full" | "card";
};

/**
 * GBSS does not yet have a library of real, consented photography (flagged
 * as a gap in CONTENT.md/DESIGN.md). Per DESIGN.md §8, we deliberately never
 * substitute stock photos of unrelated people. This placeholder is used
 * everywhere a real photo will eventually go, so components can be wired up
 * now and swapped for real assets later without changing markup.
 */
export default function ImagePlaceholder({
  label,
  className = "",
  rounded = "card",
}: ImagePlaceholderProps) {
  const radius = rounded === "full" ? "rounded-full" : "rounded-card";
  return (
    <div
      className={`${radius} bg-navy-10 flex flex-col items-center justify-center gap-2 text-navy/50 ${className}`}
      role="img"
      aria-label={label ?? "Photo coming soon"}
    >
      <ImageIcon size={28} aria-hidden strokeWidth={1.5} />
      {label && (
        <span className="text-[11px] font-medium text-center px-3 leading-snug">{label}</span>
      )}
    </div>
  );
}
