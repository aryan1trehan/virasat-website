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
      style={{ padding: "100px 80px", background: "var(--deep-maroon)", color: "var(--cream)" }}
    >
      <SectionLabel gold="var(--gold-light)">Why Virasat</SectionLabel>
      <h2
        className="cormorant font-light mb-0"
        style={{ fontSize: "clamp(2.2rem,3.5vw,3.6rem)", lineHeight: 1.15, color: "var(--cream)" }}
      >
        The Sourcing <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Difference</em>
      </h2>

      <div
        className="grid mt-14"
        style={{
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1,
          background: "rgba(201,147,62,0.15)",
        }}
      >
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            className="relative overflow-hidden group"
            style={{
              background: "rgba(74,14,30,0.6)",
              padding: "44px 36px",
              transition: "background 0.4s",
            }}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.07 * i }}
            whileHover={{ backgroundColor: "rgba(201,147,62,0.08)" } as never}
            data-cursor-hover
          >
            {/* Top gold line sweep */}
            <span
              className="absolute top-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100"
              style={{ background: "var(--gold)", transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)" }}
            />
            {/* Diagonal shimmer */}
            <span
              className="absolute top-[-50%] w-[60%] h-[200%] -skew-x-12 pointer-events-none"
              style={{
                background: "linear-gradient(105deg,transparent 40%,rgba(201,147,62,0.06) 50%,transparent 60%)",
                left: "-80%",
                transition: "left 0.6s ease",
              }}
            />

            {/* Icon */}
            <div
              className="flex items-center justify-center mb-6 text-xl group-hover:scale-110 group-hover:rotate-[5deg]"
              style={{
                width: 48, height: 48,
                border: "1px solid rgba(201,147,62,0.4)",
                transition: "border-color 0.35s, transform 0.35s",
              }}
            >
              {c.icon}
            </div>

            <h3
              className="cormorant font-normal mb-3"
              style={{ fontSize: "1.4rem", color: "var(--cream)" }}
            >
              {c.title}
            </h3>
            <p
              className="text-[0.82rem] leading-loose"
              style={{ color: "rgba(245,239,228,0.6)" }}
            >
              {c.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function SectionLabel({ children, gold }: { children: React.ReactNode; gold: string }) {
  return (
    <div className="flex items-center gap-3 mb-3 text-[0.65rem] tracking-[0.35em] uppercase" style={{ color: gold }}>
      <span className="block w-7 h-px" style={{ background: gold }} />
      {children}
    </div>
  );
}
