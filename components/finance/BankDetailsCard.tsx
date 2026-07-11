"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

type BankDetailsCardProps = {
  bankName: string;
  accountNumber: string;
  ifsc: string;
};

function Field({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable — silently ignore
    }
  }

  return (
    <div className="flex items-center justify-between border-b border-navy-10 py-4 last:border-0">
      <div>
        <p className="text-[12px] font-display font-600 uppercase tracking-wide text-charcoal">
          {label}
        </p>
        <p className="font-mono text-[16px] text-navy mt-1 tracking-wide">{value}</p>
      </div>
      <button
        onClick={handleCopy}
        aria-label={`Copy ${label}`}
        className="w-9 h-9 rounded-full bg-navy-10 flex items-center justify-center text-navy shrink-0"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
    </div>
  );
}

export default function BankDetailsCard({ bankName, accountNumber, ifsc }: BankDetailsCardProps) {
  return (
    <div className="bg-white rounded-card shadow-card p-6 md:p-8">
      <Field label="Bank" value={bankName} />
      <Field label="Account Number" value={accountNumber} />
      <Field label="IFSC Code" value={ifsc} />
    </div>
  );
}
