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
      className="section-pad grid-2col-start"
      style={{ background: "var(--deep-maroon)" }}
    >
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionLabel>Get In Touch</SectionLabel>
        <h2
          className="cormorant"
          style={{ fontSize: "clamp(2.2rem,3.5vw,3.6rem)", fontWeight: 300, lineHeight: 1.15, color: "var(--cream)", marginBottom: 20 }}
        >
          Start Your <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Partnership</em>
        </h2>
        <p style={{ fontSize: "0.9rem", lineHeight: 1.85, color: "rgba(245,239,228,0.65)", marginBottom: 36 }}>
          Whether you're a boutique brand, global retailer, or sourcing agency, we'd love
          to be your trusted manufacturing and sourcing partner from India. Fill the form
          or reach us directly.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {info.map((item) => (
            <div key={item.label} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  border: "1px solid rgba(201,147,62,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.9rem",
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                {item.icon}
              </div>
              <div>
                <div style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)" }}>
                  {item.label}
                </div>
                <div style={{ fontSize: "0.85rem", color: "rgba(245,239,228,0.8)", marginTop: 3, whiteSpace: "pre-line" }}>
                  {item.val}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right: form */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        <form style={{ display: "flex", flexDirection: "column", gap: 16 }} onSubmit={handleSubmit}>
          <div className="form-row">
            <Field label="First Name" type="text"  placeholder="Ravi" />
            <Field label="Last Name"  type="text"  placeholder="Kumar" />
          </div>
          <Field label="Business / Company Name" type="text" placeholder="Your Store or Brand" />
          <div className="form-row">
            <Field label="Email"   type="email" placeholder="you@company.com" />
            <Field label="Country" type="text"  placeholder="e.g. India, UAE, UK" />
          </div>

          {/* Select */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(245,239,228,0.5)" }}>
              Category of Interest
            </label>
            <select
              style={{
                background: "rgba(245,239,228,0.06)",
                border: "1px solid rgba(201,147,62,0.2)",
                color: "var(--cream)",
                padding: "13px 16px",
                fontFamily: "'Josefin Sans', sans-serif",
                fontSize: "0.82rem",
                fontWeight: 300,
                outline: "none",
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
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(245,239,228,0.5)" }}>
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Tell us about your business, expected order volumes, and any specific requirements…"
              style={{
                background: "rgba(245,239,228,0.06)",
                border: "1px solid rgba(201,147,62,0.2)",
                color: "var(--cream)",
                padding: "13px 16px",
                fontFamily: "'Josefin Sans', sans-serif",
                fontSize: "0.82rem",
                fontWeight: 300,
                outline: "none",
                resize: "vertical",
                minHeight: 110,
                transition: "border-color 0.3s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
              onBlur={(e)  => (e.target.style.borderColor = "rgba(201,147,62,0.2)")}
            />
          </div>

          <button
            type="submit"
            style={{
              background: sent ? "#4caf50" : "var(--gold)",
              color: sent ? "#fff" : "var(--deep-maroon)",
              padding: "16px 40px",
              border: "none",
              cursor: "pointer",
              fontFamily: "'Josefin Sans', sans-serif",
              fontSize: "0.72rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              fontWeight: 400,
              alignSelf: "flex-start",
              marginTop: 6,
              transition: "background 0.3s, transform 0.2s",
            }}
            onMouseEnter={(e) => { if (!sent) e.currentTarget.style.background = "var(--gold-light)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { if (!sent) e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            {sent ? "✓ Enquiry Sent!" : "Send Enquiry →"}
          </button>
        </form>
      </motion.div>
    </section>
  );
}

function Field({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <label style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(245,239,228,0.5)" }}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        style={{
          background: "rgba(245,239,228,0.06)",
          border: "1px solid rgba(201,147,62,0.2)",
          color: "var(--cream)",
          padding: "13px 16px",
          fontFamily: "'Josefin Sans', sans-serif",
          fontSize: "0.82rem",
          fontWeight: 300,
          outline: "none",
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
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14, fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold-light)" }}>
      <span style={{ display: "block", width: 28, height: 1, background: "var(--gold-light)" }} />
      {children}
    </div>
  );
}
