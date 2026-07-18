"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { Home, HeartHandshake, Calendar } from "lucide-react";

type StatCardProps = {
  value: number;
  suffix?: string;
  label: string;
  isYear?: boolean;
};

export default function StatCard({ value, suffix = "", label, isYear = false }: StatCardProps) {
  const { ref, value: animated } = useCountUp<HTMLDivElement>(value);

  // Determine icon based on the stat type
  let IconComponent = Home;
  let iconBg = "bg-gold/10 text-gold border-gold/20";
  
  if (value === 129) {
    IconComponent = HeartHandshake;
    iconBg = "bg-navy/10 text-navy border-navy/20";
  } else if (value === 2014) {
    IconComponent = Calendar;
    iconBg = "bg-gold/10 text-gold border-gold/20";
  }

  return (
    <div 
      ref={ref} 
      className="group bg-white rounded-card shadow-card border border-navy-10/40 p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
    >
      <div className={`w-14 h-14 rounded-full flex items-center justify-center border mb-5 transition-transform duration-300 group-hover:scale-110 ${iconBg}`}>
        <IconComponent size={26} strokeWidth={2} />
      </div>
      <div className="font-display font-800 tracking-tight bg-gradient-to-br from-navy via-navy to-gold bg-clip-text text-transparent text-[44px] md:text-[52px] leading-none tabular-nums mb-3 select-none">
        {isYear ? value : animated}
        {suffix}
      </div>
      <p className="text-[14px] font-medium leading-relaxed text-charcoal/90 max-w-[200px]">
        {label}
      </p>
    </div>
  );
}
