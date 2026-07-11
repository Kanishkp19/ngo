import CircleFrame from "@/components/media/CircleFrame";

type TeamMemberCardProps = {
  name: string;
  role?: string;
};

export default function TeamMemberCard({ name, role }: TeamMemberCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <CircleFrame alt={`Photo of ${name}`} size={120} dashed={false} />
      <h3 className="text-[16px] font-display font-600 text-navy mt-4">{name}</h3>
      <p className="text-[13px] text-charcoal mt-1">{role ?? "Role to be added"}</p>
    </div>
  );
}
