export default function Pill({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center px-4 py-2 rounded-full border border-gold text-gold text-[13px] font-display font-600 uppercase tracking-wide">
      {text}
    </span>
  );
}
