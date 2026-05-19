"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cards = [
  { icon: "🏅", title: "Global Certifications",      body: "SEDEX 4.0 Pillar, GOTS, BSCI, and ICMED 13485 certified — we meet the most rigorous international compliance standards for ethical, sustainable, and quality manufacturing." },
  { icon: "⚡", title: "Speed & Flexibility",         body: "Quick turnaround on sampling and development. We handle both small-batch runs and large-scale production, giving growing brands and established retailers equal agility." },
  { icon: "🎨", title: "In-House Design Capability", body: "From trend forecasting and CAD creation to fabric surface design and prototype development — our in-house design team delivers complete concept-to-sample solutions." },
  { icon: "🌿", title: "Sustainable Sourcing",        body: "Organic, BCI, and recycled material sourcing backed by GOTS certification. Environmentally responsible production methods that reduce ecological impact at every stage." },
  { icon: "🔍", title: "End-to-End Transparency",    body: "Digital ERP systems provide full visibility across the supply chain — clear costing, real-time order tracking, and proactive communication at every production milestone." },
  { icon: "🌍", title: "Global Export Network",      body: "Proven export expertise to Europe, the Middle East, Southeast Asia, and North America. Full management of international documentation, certifications, and logistics." },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="why"
      ref={ref}
      className="section-pad"
      style={{ background: "var(--deep-maroon)", color: "var(--cream)" }}
    >
      <SectionLabel>Why Global Trendwave</SectionLabel>
      <h2
        className="cormorant"
        style={{ fontSize: "clamp(2.2rem,3.5vw,3.6rem)", fontWeight: 300, lineHeight: 1.15, color: "var(--cream)", marginBottom: 0 }}
      >
        The Sourcing <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Difference</em>
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1,
          background: "rgba(201,147,62,0.15)",
          marginTop: 52,
        }}
      >
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            className="why-card group"
            style={{
              background: "rgba(74,14,30,0.6)",
              padding: "44px 36px",
              position: "relative",
              overflow: "hidden",
              transition: "background 0.3s",
            }}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.07 * i }}
            whileHover={{ backgroundColor: "rgba(201,147,62,0.08)" } as never}
          >
            <span
              className="why-top-line"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                background: "var(--gold)",
                transformOrigin: "left",
                transform: "scaleX(0)",
                transition: "transform 0.4s",
              }}
            />
            <div
              style={{
                width: 48,
                height: 48,
                border: "1px solid rgba(201,147,62,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 22,
                fontSize: "1.3rem",
              }}
            >
              {c.icon}
            </div>
            <h3
              className="cormorant"
              style={{ fontSize: "1.4rem", fontWeight: 400, color: "var(--cream)", marginBottom: 12 }}
            >
              {c.title}
            </h3>
            <p style={{ fontSize: "0.82rem", lineHeight: 1.8, color: "rgba(245,239,228,0.6)" }}>
              {c.body}
            </p>
          </motion.div>
        ))}
      </div>

      <style>{`
        .why-card:hover .why-top-line { transform: scaleX(1) !important; }
      `}</style>
    </section>
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
