"use client";

import { useState } from "react";

export default function VolunteerInterestForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-card shadow-card p-8 text-center">
        <p className="text-[16px] text-navy font-display font-600">Thank you for offering your time.</p>
        <p className="text-[14px] text-charcoal mt-2">
          GBSS will reach out to you about how you can help.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-card shadow-card p-6 md:p-8 flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="v-name" className="text-[13px] font-display font-600 text-navy uppercase tracking-wide">
          Name
        </label>
        <input
          id="v-name"
          name="name"
          type="text"
          required
          className="border border-navy-10 rounded-btn px-4 py-3 text-[15px] text-charcoal focus:border-gold outline-none"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="v-phone" className="text-[13px] font-display font-600 text-navy uppercase tracking-wide">
          Phone
        </label>
        <input
          id="v-phone"
          name="phone"
          type="tel"
          required
          className="border border-navy-10 rounded-btn px-4 py-3 text-[15px] text-charcoal focus:border-gold outline-none"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="v-help" className="text-[13px] font-display font-600 text-navy uppercase tracking-wide">
          How would you like to help?
        </label>
        <textarea
          id="v-help"
          name="help"
          rows={4}
          required
          className="border border-navy-10 rounded-btn px-4 py-3 text-[15px] text-charcoal focus:border-gold outline-none resize-none"
          placeholder="e.g. time on weekends, medical skills, transport, fundraising..."
        />
      </div>

      <button
        type="submit"
        className="self-start bg-navy text-white rounded-btn px-7 py-3.5 text-[14px] font-display font-600 uppercase tracking-wide hover:bg-navy-hover transition-colors duration-200"
      >
        Submit Interest
      </button>
    </form>
  );
}
