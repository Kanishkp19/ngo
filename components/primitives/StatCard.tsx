"use client";

import { useCountUp } from "@/hooks/useCountUp";

type StatCardProps = {
  value: number;
  suffix?: string;
  label: string;
  isYear?: boolean;
};

export default function StatCard({ value, suffix = "", label, isYear = false }: StatCardProps) {
  const { ref, value: animated } = useCountUp<HTMLDivElement>(value);

  return (
    <div ref={ref} className="text-center px-4">
      <div className="font-display font-700 text-navy text-[32px] md:text-[40px] tabular-nums">
        {isYear ? value : animated}
        {suffix}
      </div>
      <p className="text-[14px] text-charcoal mt-2 mx-auto max-w-[220px]">{label}</p>
    </div>
  );
}
