import { ReactNode } from "react";

type SectionProps = {
  background?: "white" | "cream";
  children: ReactNode;
  className?: string;
  id?: string;
};

export default function Section({
  background = "white",
  children,
  className = "",
  id,
}: SectionProps) {
  const bg = background === "cream" ? "bg-cream" : "bg-white";
  return (
    <section
      id={id}
      className={`${bg} py-14 md:py-24 ${className}`}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">{children}</div>
    </section>
  );
}
