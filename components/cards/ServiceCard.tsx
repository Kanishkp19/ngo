import { LucideIcon, Check } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const subServicesMap: Record<string, string[]> = {
  "Shelter": [
    "Secure Lodging & Safety",
    "Three Fresh Daily Meals",
    "Winter Blanket Support",
    "Shelter Infrastructure"
  ],
  "Medical Care": [
    "Immediate First Aid",
    "Psychiatric Treatments",
    "Routine Health Checkups",
    "Hygiene & Care Support"
  ],
  "Rehabilitation & Reunification": [
    "Family Location Tracing",
    "Safe Escort & Reunions",
    "Counseling & Recovery",
    "Cultural & Social Activities"
  ]
};

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  const subItems = subServicesMap[title] || [];

  return (
    <div className="group relative bg-white rounded-card shadow-card border border-navy-10/40 p-6 md:p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-gold/50 cursor-pointer min-h-[380px]">
      {/* Decorative top gold border that animates on hover */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-navy to-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      <div>
        {/* Icon & Title */}
        <div className="flex items-center gap-4 mb-4">
          <span className="w-12 h-12 rounded-full bg-navy-10 text-navy flex items-center justify-center transition-all duration-300 group-hover:bg-navy group-hover:text-white group-hover:scale-110 shrink-0">
            <Icon size={22} aria-hidden />
          </span>
          <h3 className="text-[18px] md:text-[20px] font-display font-700 text-navy transition-colors duration-300 group-hover:text-navy-hover">
            {title}
          </h3>
        </div>

        {/* Short Description */}
        <p className="text-[14px] md:text-[15px] text-charcoal/80 leading-relaxed mb-6">
          {description}
        </p>

        {/* Interactive Features List */}
        <div className="border-t border-slate-100 pt-5 mt-auto">
          <h4 className="text-[12px] font-display font-600 uppercase tracking-wider text-gold mb-3">
            Core Operations
          </h4>
          <ul className="flex flex-col gap-2">
            {subItems.map((item, idx) => (
              <li 
                key={idx} 
                className="flex items-center gap-2.5 text-[13.5px] text-charcoal/90 group-hover:translate-x-1.5 transition-transform duration-300"
                style={{ transitionDelay: `${idx * 40}ms` }}
              >
                <span className="w-4 h-4 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0">
                  <Check size={11} strokeWidth={3} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Bottom indicator link */}
      <div className="flex items-center justify-end text-[12px] font-display font-600 text-navy/40 group-hover:text-gold transition-colors duration-300 mt-6">
        <span className="flex items-center gap-1">
          Explore Services <span className="transform group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
        </span>
      </div>
    </div>
  );
}
