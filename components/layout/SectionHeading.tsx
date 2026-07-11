import TwoToneHeading from "@/components/primitives/TwoToneHeading";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  highlight: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-section mx-auto text-center mb-12">
      {eyebrow && (
        <div className="mb-3">
          <span className="block w-10 h-[2px] bg-gold mx-auto mb-3" aria-hidden />
          <span className="text-[13px] font-display font-600 uppercase tracking-[0.08em] text-gold">
            {eyebrow}
          </span>
        </div>
      )}
      <TwoToneHeading text={title} highlight={highlight} as="h2" />
      {description && (
        <p className="text-[16px] text-charcoal mt-4 mx-auto">{description}</p>
      )}
    </div>
  );
}
