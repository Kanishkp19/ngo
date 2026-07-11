import { QrCode } from "lucide-react";

type QRCodeDisplayProps = {
  src?: string;
  caption: string;
};

export default function QRCodeDisplay({ src, caption }: QRCodeDisplayProps) {
  return (
    <div className="bg-white rounded-card shadow-card p-6 md:p-8 flex flex-col items-center text-center">
      <div className="w-[160px] h-[160px] rounded-card bg-navy-10 flex items-center justify-center">
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt="Scan to donate QR code" className="w-full h-full object-contain" />
        ) : (
          <QrCode size={48} className="text-navy/40" aria-hidden />
        )}
      </div>
      <p className="text-[13px] text-charcoal mt-4">{caption}</p>
    </div>
  );
}
