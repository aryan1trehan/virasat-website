"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cats = [
  { bg: "#3A0D16", icon: "🥻", name: "Silk Sarees",    sub: "Banarasi · Kanjivaram · Chanderi", span: true },
  { bg: "#4A1A35", icon: "👗", name: "Lehengas",       sub: "Bridal · Party · Festival" },
  { bg: "#1E3A4A", icon: "🧥", name: "Sherwanis",      sub: "Wedding · Festive · Formal" },
  { bg: "#2A3A1A", icon: "👘", name: "Kurta Sets",     sub: "Cotton · Linen · Silk Blend" },
  { bg: "#3A2A10", icon: "✨", name: "Anarkali Suits", sub: "Floor Length · Knee Length" },
  { bg: "#3A1A3A", icon: "🎨", name: "Custom & OEM",  sub: "Your Label · Your Design" },
  { bg: "#1A1A3A", icon: "💎", name: "Accessories",   sub: "Dupattas · Stoles · Jewellery" },
];

export default function Categories() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="categories" style={{ padding: "100px 80px", background: "var(--cream)" }}>
      {/* Header */}
      <motion.div
        className="flex justify-between items-end mb-14"
        ref={ref}
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <SectionLabel>Our Catalogue</SectionLabel>
          <h2
            className="cormorant font-light"
            style={{ fontSize: "clamp(2.2rem,3.5vw,3.6rem)", lineHeight: 1.15, color: "var(--deep-maroon)" }}
          >
            Product <em style={{ fontStyle: "italic", color: "var(--burnt-sienna)" }}>Collections</em>
          </h2>
        </div>
        <p className="text-[0.85rem] leading-relaxed max-w-xs" style={{ color: "var(--text-muted)" }}>
          All categories available in bulk wholesale quantities with consistent sizing,
          colour matching and quality control.
        </p>
      </motion.div>

      {/* Grid */}
      <div
        className="grid gap-5"
        style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
      >
        {cats.map((c, i) => (
          <motion.div
            key={c.name}
            className="cursor-none group relative overflow-hidden"
            style={{ gridRow: c.span ? "span 2" : undefined }}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.05 * i }}
            whileHover={{ y: -8, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
            data-cursor-hover
          >
            {/* Image block */}
            <div
              className="relative flex items-center justify-center overflow-hidden"
              style={{
                background: c.bg,
                aspectRatio: c.span ? "3/7" : "3/4",
              }}
            >
              {/* Pattern */}
              <div
                className="absolute inset-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  opacity: 0.12,
                  backgroundImage:
                    "repeating-linear-gradient(45deg,var(--gold) 0,var(--gold) 1px,transparent 0,transparent 50%)",
                  backgroundSize: "18px 18px",
                }}
              />
              {/* Icon */}
              <span
                className="text-5xl opacity-35 grayscale group-hover:opacity-50 group-hover:scale-110 transition-all duration-500"
              >
                {c.icon}
              </span>
              {/* Overlay */}
              <div
                className="absolute inset-x-0 bottom-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-3 transition-all duration-400"
                style={{
                  background: "linear-gradient(transparent,rgba(74,14,30,0.92))",
                  padding: "36px 20px 20px",
                }}
              >
                <a
                  href="#contact"
                  className="text-[0.65rem] tracking-[0.2em] uppercase no-underline"
                  style={{ color: "var(--gold-light)" }}
                >
                  Enquire Now →
                </a>
              </div>
            </div>
            {/* Info */}
            <div className="pt-3 pb-1 px-1">
              <h3
                className="cormorant font-normal"
                style={{ fontSize: "1.25rem", color: "var(--deep-maroon)" }}
              >
                {c.name}
              </h3>
              <span className="text-[0.68rem] tracking-wider" style={{ color: "var(--text-muted)" }}>
                {c.sub}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-3 text-[0.65rem] tracking-[0.35em] uppercase" style={{ color: "var(--gold)" }}>
      <span className="block w-7 h-px" style={{ background: "var(--gold)" }} />
      {children}
    </div>
  );
}
