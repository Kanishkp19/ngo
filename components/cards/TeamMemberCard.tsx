import Image from "next/image";
import ImagePlaceholder from "@/components/media/ImagePlaceholder";

type TeamMemberCardProps = {
  name: string;
  roleEnglish?: string;
  roleHindi?: string;
  src?: string;
};

export default function TeamMemberCard({ name, roleEnglish, roleHindi, src }: TeamMemberCardProps) {
  const displayRole = roleEnglish && roleHindi 
    ? `${roleEnglish} (${roleHindi})` 
    : roleEnglish || roleHindi || "Life Member";

  return (
    <div className="w-full max-w-[200px] md:max-w-[250px] h-[290px] min-[400px]:h-[320px] md:h-[390px] bg-white border border-navy-10 rounded-[16px] shadow-sm flex flex-col items-center p-3 md:p-4 relative overflow-hidden transition-all duration-300 hover:shadow-md hover:scale-[1.02] bg-gradient-to-b from-white via-white to-navy-5/10 group mx-auto">
      {/* Gold top strip */}
      <div className="absolute top-0 left-0 w-full h-[5px] md:h-[6px] bg-gold" />
      
      {/* ID Card Header */}
      <span className="text-[9px] md:text-[10px] font-display font-700 tracking-[0.06em] text-navy-40 uppercase mt-1 md:mt-2 mb-2 md:mb-3">
        GBSS Life Member
      </span>

      {/* Photo Box */}
      <div className="w-full h-[140px] min-[400px]:h-[180px] md:h-[240px] rounded-[10px] overflow-hidden bg-slate-50 shadow-inner relative border border-navy-5 mb-2 md:mb-3">
        {src ? (
          <Image
            src={src}
            alt={`Photo of ${name}`}
            fill
            sizes="(max-width: 768px) 100vw, 210px"
            className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <ImagePlaceholder label={`Photo of ${name}`} className="w-full h-full" />
        )}
      </div>

      {/* Profile Details */}
      <div className="text-center w-full mt-1 flex-1 flex flex-col justify-center px-1">
        <h3 className="text-[14px] md:text-[16px] font-display font-700 text-navy leading-tight transition-colors group-hover:text-gold">
          {name}
        </h3>
        <p className="text-[11px] md:text-[12px] text-charcoal font-600 mt-1 uppercase tracking-wide">
          {displayRole}
        </p>
      </div>
    </div>
  );
}
