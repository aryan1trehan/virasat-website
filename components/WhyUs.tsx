"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cards = [
  { icon: "⚡", title: "Fast Turnaround",          body: "Standard orders dispatched within 7–10 business days. Dedicated logistics team with real-time shipment tracking across 40+ countries." },
  { icon: "🔍", title: "Quality Assured",           body: "Every piece undergoes 3-stage quality inspection before dispatch. We guarantee colour consistency, finishing standards and accurate sizing." },
  { icon: "🎯", title: "Low MOQ",                   body: "Start with as little as 20 pieces per design. Flexible minimums designed for boutiques, growing brands and new market entrants." },
  { icon: "🏺", title: "Artisan Sourced",           body: "Direct relationships with 28 artisan clusters across Rajasthan, Varanasi, Surat, Lucknow and Tamil Nadu — no middlemen." },
  { icon: "🏷️", title: "Private Labelling",        body: "Full white-label and OEM services. Custom tags, packaging, and branding available for orders above 100 units." },
  { icon: "🤝", title: "Dedicated Account Manager", body: "Every partner gets a personal account manager for order updates, restock alerts, trend curation and seasonal previews." },
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
        The Partner <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Difference</em>
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
