"use client";

import { useState } from "react";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/layout/SectionHeading";
import TwoToneHeading from "@/components/primitives/TwoToneHeading";
import BankDetailsCard from "@/components/finance/BankDetailsCard";
import QRCodeDisplay from "@/components/finance/QRCodeDisplay";
import { bankDetails, qrCodeAsset, transparencyNote } from "@/content/donation";

export default function DonatePage() {
  const [frequency, setFrequency] = useState<"once" | "recurring">("once");

  return (
    <>
      <Section background="white" className="!pt-14 !pb-10">
        <div className="max-w-section mx-auto text-center">
          <span className="text-[13px] font-display font-600 uppercase tracking-[0.08em] text-gold">
            Donate
          </span>
          <TwoToneHeading text="YOUR SUPPORT, DIRECTLY TO CARE" highlight="DIRECTLY TO CARE" as="h1" />
        </div>
      </Section>

      <Section background="cream">
        <div className="max-w-md mx-auto mb-10">
          <div className="flex bg-white rounded-btn p-1 shadow-card" role="tablist" aria-label="Donation frequency">
            <button
              role="tab"
              aria-selected={frequency === "once"}
              onClick={() => setFrequency("once")}
              className={`flex-1 py-3 rounded-btn text-[14px] font-display font-600 uppercase tracking-wide transition-colors ${
                frequency === "once" ? "bg-navy text-white" : "text-navy"
              }`}
            >
              One-Time
            </button>
            <button
              role="tab"
              aria-selected={frequency === "recurring"}
              onClick={() => setFrequency("recurring")}
              className={`flex-1 py-3 rounded-btn text-[14px] font-display font-600 uppercase tracking-wide transition-colors ${
                frequency === "recurring" ? "bg-navy text-white" : "text-navy"
              }`}
            >
              Recurring
            </button>
          </div>
          {frequency === "recurring" && (
            <p className="text-[13px] text-charcoal/70 italic text-center mt-3">
              Recurring donation setup is in progress. For now, please use the bank
              transfer details below and repeat as you&apos;d like.
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto items-start">
          <BankDetailsCard {...bankDetails} />
          <QRCodeDisplay src={qrCodeAsset.src || undefined} caption={qrCodeAsset.caption} />
        </div>
      </Section>

      <Section background="white">
        <SectionHeading eyebrow="Transparency" title="WHERE YOUR MONEY GOES" highlight="MONEY GOES" />
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[15px] text-charcoal">{transparencyNote}</p>
          <p className="text-[13px] text-charcoal/70 italic mt-6">
            PAN requirements for tax receipts and 80G tax-exemption status are not yet
            confirmed — we will not claim tax-deductibility until this is verified.
          </p>
        </div>
      </Section>
    </>
  );
}
