export default function HindiQuote({ text }: { text: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <span className="block w-8 h-[2px] bg-gold mx-auto mb-4" aria-hidden />
      <p className="font-devanagari font-600 text-navy text-[18px] md:text-[22px] leading-relaxed">
        {text}
      </p>
      <span className="block w-8 h-[2px] bg-gold mx-auto mt-4" aria-hidden />
    </div>
  );
}
