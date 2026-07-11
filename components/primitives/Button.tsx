import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
  icon?: boolean;
  onClick?: () => void;
};

export default function Button({
  href,
  label,
  variant = "primary",
  icon = true,
  onClick,
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2 rounded-btn px-7 py-3.5 text-[14px] font-display font-600 uppercase tracking-wide transition-colors duration-200";

  const styles =
    variant === "primary"
      ? "bg-navy text-white hover:bg-navy-hover"
      : "bg-transparent text-navy border-[1.5px] border-navy hover:bg-navy hover:text-white";

  return (
    <Link href={href} onClick={onClick} className={`${base} ${styles}`}>
      {label}
      {icon && (
        <ArrowRight
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden
        />
      )}
    </Link>
  );
}
