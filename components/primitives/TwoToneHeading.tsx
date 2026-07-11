type TwoToneHeadingProps = {
  text: string;
  highlight: string;
  as?: "h1" | "h2";
};

/**
 * Renders `text` with the `highlight` substring (if found) in gold, and the
 * rest in navy. Per DESIGN.md §3: only one keyword/short phrase gets gold,
 * never more than ~30% of the heading's characters.
 */
export default function TwoToneHeading({ text, highlight, as = "h2" }: TwoToneHeadingProps) {
  const Tag = as;
  const idx = text.toLowerCase().indexOf(highlight.toLowerCase());

  const sizeClasses =
    as === "h1"
      ? "text-[32px] md:text-[48px] leading-[1.15]"
      : "text-[26px] md:text-[34px] leading-[1.2] uppercase tracking-[0.02em]";

  if (idx === -1) {
    return (
      <Tag className={`font-display font-700 text-navy ${sizeClasses}`}>{text}</Tag>
    );
  }

  const before = text.slice(0, idx);
  const match = text.slice(idx, idx + highlight.length);
  const after = text.slice(idx + highlight.length);

  return (
    <Tag className={`font-display font-700 text-navy ${sizeClasses}`}>
      {before}
      <span className="gold-highlight">{match}</span>
      {after}
    </Tag>
  );
}
