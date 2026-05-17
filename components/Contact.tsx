"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const info = [
  { icon: "📍", label: "Office",             val: "M-26, Main Market, G.K. II, New Delhi – 110048\n4th Floor, Mangalam Plaza, RICCO Mansarovar, Jaipur – 302020" },
  { icon: "🏭", label: "Manufacturing Unit", val: "Kiah, Plot No. 370, Sector 37, Phase VI, Udyog Vihar, Gurugram, Haryana – 122004" },
  { icon: "📞", label: "Phone",              val: "+91-11-49488902  |  +91 92205 22551" },
  { icon: "✉️", label: "Email",              val: "info@globaltrendwave.com" },
];

const categories = [
  "Ethnic Womenswear", "Woven Garments", "Western Garments",
  "Home Textiles", "Home Décor", "Denim", "Custom OEM / ODM", "Multiple Categories",
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 items-start gap-10 md:gap-16 lg:gap-20 px-6 py-16 md:px-16 md:py-20 lg:px-20 lg:py-24"
      style={{
        background: "var(--deep-maroon)",
      }}
    >
      {/* Left: info */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionLabel>Get In Touch</SectionLabel>
        <h2
          className="cormorant font-light mb-5"
          style={{ fontSize: "clamp(2.2rem,3.5vw,3.6rem)", lineHeight: 1.15, color: "var(--cream)" }}
        >
          Start Your <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Partnership</em>
        </h2>
        <p
          className="text-[0.9rem] leading-loose mb-9"
          style={{ color: "rgba(245,239,228,0.65)" }}
        >
          Whether you're a boutique brand, global retailer, or sourcing agency, we'd love
          to be your trusted manufacturing and sourcing partner from India. Fill the form
          or reach us directly.
        </p>

        <div className="flex flex-col gap-5">
          {info.map((item) => (
            <motion.div
              key={item.label}
              className="flex gap-4 items-start group"
              whileHover={{ x: 4, transition: { duration: 0.3 } }}
            >
              <div
                className="flex items-center justify-center flex-shrink-0 mt-0.5 text-[0.9rem] group-hover:border-[var(--gold)] group-hover:bg-[rgba(201,147,62,0.1)] transition-all duration-300"
                style={{
                  width: 36, height: 36,
                  border: "1px solid rgba(201,147,62,0.35)",
                }}
              >
                {item.icon}
              </div>
              <div>
                <div className="text-[0.62rem] tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
                  {item.label}
                </div>
                <div className="text-[0.85rem] mt-0.5" style={{ color: "rgba(245,239,228,0.8)", whiteSpace: "pre-line" }}>
                  {item.val}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right: form */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="First Name" type="text"  placeholder="Ravi" />
            <Field label="Last Name"  type="text"  placeholder="Kumar" />
          </div>
          <Field label="Business / Company Name" type="text" placeholder="Your Store or Brand" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Email"   type="email" placeholder="you@company.com" />
            <Field label="Country" type="text"  placeholder="e.g. India, UAE, UK" />
          </div>

          {/* Select */}
          <div className="flex flex-col gap-2">
            <label className="text-[0.65rem] tracking-[0.2em] uppercase" style={{ color: "rgba(245,239,228,0.5)" }}>
              Category of Interest
            </label>
            <select
              className="outline-none text-[0.82rem] font-light px-4 py-3"
              style={{
                background: "rgba(245,239,228,0.06)",
                border: "1px solid rgba(201,147,62,0.2)",
                color: "var(--cream)",
                fontFamily: "'Josefin Sans', sans-serif",
                transition: "border-color 0.3s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
              onBlur={(e)  => (e.target.style.borderColor = "rgba(201,147,62,0.2)")}
            >
              <option value="" style={{ background: "var(--deep-maroon)" }}>Select a category</option>
              {categories.map((c) => (
                <option key={c} value={c} style={{ background: "var(--deep-maroon)" }}>{c}</option>
              ))}
            </select>
          </div>

          {/* Textarea */}
          <div className="flex flex-col gap-2">
            <label className="text-[0.65rem] tracking-[0.2em] uppercase" style={{ color: "rgba(245,239,228,0.5)" }}>
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Tell us about your business, expected order volumes, and any specific requirements…"
              className="outline-none text-[0.82rem] font-light px-4 py-3 resize-y"
              style={{
                background: "rgba(245,239,228,0.06)",
                border: "1px solid rgba(201,147,62,0.2)",
                color: "var(--cream)",
                fontFamily: "'Josefin Sans', sans-serif",
                minHeight: 110,
                transition: "border-color 0.3s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
              onBlur={(e)  => (e.target.style.borderColor = "rgba(201,147,62,0.2)")}
            />
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            className="w-full sm:w-auto self-start relative overflow-hidden group mt-1.5 text-[0.72rem] tracking-[0.25em] uppercase font-normal cursor-none"
            style={{
              background: sent ? "#4caf50" : "var(--gold)",
              color: "var(--deep-maroon)",
              padding: "16px 40px",
              border: "none",
              fontFamily: "'Josefin Sans', sans-serif",
              transition: "background 0.3s, transform 0.3s",
            }}
            whileHover={{ y: -2 }}
            data-cursor-hover
          >
            <span
              className="absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100"
              style={{
                background: "var(--gold-light)",
                transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
              }}
            />
            <span className="relative z-10">
              {sent ? "✓ Enquiry Sent!" : "Send Enquiry →"}
            </span>
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}

function Field({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[0.65rem] tracking-[0.2em] uppercase" style={{ color: "rgba(245,239,228,0.5)" }}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="outline-none text-[0.82rem] font-light px-4 py-3"
        style={{
          background: "rgba(245,239,228,0.06)",
          border: "1px solid rgba(201,147,62,0.2)",
          color: "var(--cream)",
          fontFamily: "'Josefin Sans', sans-serif",
          transition: "border-color 0.3s",
        }}
        onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
        onBlur={(e)  => (e.target.style.borderColor = "rgba(201,147,62,0.2)")}
      />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-3 text-[0.65rem] tracking-[0.35em] uppercase" style={{ color: "var(--gold-light)" }}>
      <span className="block w-7 h-px" style={{ background: "var(--gold-light)" }} />
      {children}
    </div>
  );
}
