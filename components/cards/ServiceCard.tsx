import { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-card shadow-card p-6 md:p-8 flex flex-col items-center text-center">
      <span className="w-14 h-14 rounded-full bg-navy-10 flex items-center justify-center mb-5">
        <Icon size={26} className="text-navy" aria-hidden />
      </span>
      <h3 className="text-[20px] md:text-[20px] font-display font-600 text-navy mb-2">{title}</h3>
      <p className="text-[15px] text-charcoal leading-relaxed">{description}</p>
    </div>
  );
}
