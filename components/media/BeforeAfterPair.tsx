import { ArrowRight } from "lucide-react";
import CircleFrame from "./CircleFrame";

type BeforeAfterPairProps = {
  beforeSrc?: string;
  afterSrc?: string;
  caption: string;
};

export default function BeforeAfterPair({ beforeSrc, afterSrc, caption }: BeforeAfterPairProps) {
  return (
    <figure className="flex flex-col items-center">
      <div className="flex items-center gap-6 md:gap-10">
        <div className="flex flex-col items-center gap-3">
          <CircleFrame src={beforeSrc} alt="Resident before care at GBSS shelter" size={140} />
          <span className="text-[12px] font-display font-600 uppercase tracking-wide text-charcoal">
            Before
          </span>
        </div>
        <ArrowRight className="text-gold shrink-0" size={28} aria-hidden />
        <div className="flex flex-col items-center gap-3">
          <CircleFrame src={afterSrc} alt="Resident after care at GBSS shelter" size={140} />
          <span className="text-[12px] font-display font-600 uppercase tracking-wide text-charcoal">
            After
          </span>
        </div>
      </div>
      <figcaption className="text-[14px] text-charcoal text-center mt-5 max-w-xs">
        {caption}
      </figcaption>
    </figure>
  );
}
