"use client";

import { useState } from "react";

const subjectOptions = ["General", "Volunteer", "Press", "Partnership"];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // No backend/email routing configured yet (content gap: no official
    // email address). This confirms receipt locally until that exists.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-card shadow-card p-8 text-center">
        <p className="text-[16px] text-navy font-display font-600">Message received.</p>
        <p className="text-[14px] text-charcoal mt-2">
          Someone from GBSS will get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-card shadow-card p-6 md:p-8 flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-[13px] font-display font-600 text-navy uppercase tracking-wide">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="border border-navy-10 rounded-btn px-4 py-3 text-[15px] text-charcoal focus:border-gold outline-none"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact" className="text-[13px] font-display font-600 text-navy uppercase tracking-wide">
          Phone or Email
        </label>
        <input
          id="contact"
          name="contact"
          type="text"
          required
          className="border border-navy-10 rounded-btn px-4 py-3 text-[15px] text-charcoal focus:border-gold outline-none"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="text-[13px] font-display font-600 text-navy uppercase tracking-wide">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          className="border border-navy-10 rounded-btn px-4 py-3 text-[15px] text-charcoal focus:border-gold outline-none bg-white"
          defaultValue={subjectOptions[0]}
        >
          {subjectOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-[13px] font-display font-600 text-navy uppercase tracking-wide">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="border border-navy-10 rounded-btn px-4 py-3 text-[15px] text-charcoal focus:border-gold outline-none resize-none"
        />
      </div>

      <button
        type="submit"
        className="self-start bg-navy text-white rounded-btn px-7 py-3.5 text-[14px] font-display font-600 uppercase tracking-wide hover:bg-navy-hover transition-colors duration-200"
      >
        Send Message
      </button>
    </form>
  );
}
