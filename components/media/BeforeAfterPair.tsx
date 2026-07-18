import { ArrowRight } from "lucide-react";
import CircleFrame from "./CircleFrame";

type BeforeAfterPairProps = {
  beforeSrc?: string;
  afterSrc?: string;
  caption: string;
};

export default function BeforeAfterPair({ beforeSrc, afterSrc, caption }: BeforeAfterPairProps) {
  return (
    <figure className="flex flex-col items-center group">
      <div className="flex items-center gap-3 min-[400px]:gap-6 md:gap-10">
        <div className="flex flex-col items-center gap-3">
          <CircleFrame 
            src={beforeSrc} 
            alt="Resident before care at GBSS shelter" 
            className="w-[95px] h-[95px] min-[400px]:w-[120px] min-[400px]:h-[120px] sm:w-[140px] sm:h-[140px] md:w-[190px] md:h-[190px]"
          />
          <span className="text-[12px] font-display font-600 uppercase tracking-wide text-charcoal transition-colors group-hover:text-navy">
            Before
          </span>
        </div>
        <ArrowRight className="text-gold shrink-0 transition-transform duration-300 group-hover:translate-x-1.5 w-5 h-5 sm:w-7 sm:h-7" aria-hidden />
        <div className="flex flex-col items-center gap-3">
          <CircleFrame 
            src={afterSrc} 
            alt="Resident after care at GBSS shelter" 
            className="w-[95px] h-[95px] min-[400px]:w-[120px] min-[400px]:h-[120px] sm:w-[140px] sm:h-[140px] md:w-[190px] md:h-[190px]"
          />
          <span className="text-[12px] font-display font-600 uppercase tracking-wide text-charcoal transition-colors group-hover:text-navy">
            After
          </span>
        </div>
      </div>
      <figcaption className="text-[14px] text-charcoal text-center mt-5 max-w-xs transition-colors duration-300 group-hover:text-navy">
        {caption}
      </figcaption>
    </figure>
  );
}
