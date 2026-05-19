"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote:   "Global Trendwave's design-to-delivery approach is unmatched. Their in-house team understood our brief immediately and the GOTS certification gave us full confidence in the sourcing chain for our European retail clients.",
    initials:"AK",
    name:    "Anika Klein",
    company: "Sourcing Head, Bloom & Thread — Berlin",
  },
  {
    quote:   "We needed a partner who could handle ethnic womenswear at scale with consistent quality and shorter lead times. Global Trendwave delivered on every front — their ERP visibility made our planning seamless.",
    initials:"RM",
    name:    "Ravi Mehta",
    company: "Director, Omnika Fashion Group — Mumbai",
  },
  {
    quote:   "Their OEM capability is exceptional. From tech pack creation to final packaging, the team handled every detail. BSCI certification made on-boarding with our compliance team completely straightforward.",
    initials:"LB",
    name:    "Laura Benoit",
    company: "Buyer, Karl Legrand — Paris",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="px-6 py-24 md:px-16 md:py-32 lg:px-20 lg:py-40"
      style={{ background: "var(--cream)" }}
    >
      <motion.div
        className="text-center mb-10 md:mb-14"
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionLabel>Partner Voices</SectionLabel>
        <h2
          className="cormorant font-light"
          style={{ fontSize: "clamp(2.2rem,3.5vw,3.6rem)", lineHeight: 1.15, color: "var(--deep-maroon)" }}
        >
          What <em style={{ fontStyle: "italic", color: "var(--burnt-sienna)" }}>Brands</em> Say
        </h2>
      </motion.div>

      {/* 1-col mobile & tablet, 3-col desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="relative group"
            style={{
              border: "1px solid var(--border)",
              padding: "clamp(24px, 3.5vw, 36px) clamp(20px, 3vw, 32px)",
              transition: "border-color 0.35s",
            }}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 * i }}
            whileHover={{
              y: -6,
              boxShadow: "0 20px 50px rgba(74,14,30,0.1)",
              borderColor: "var(--gold)",
              transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
            } as never}
            data-cursor-hover
          >
            {/* Quote mark */}
            <span
              className="cormorant absolute top-3 left-6 leading-none select-none group-hover:opacity-40 transition-opacity duration-350"
              style={{ fontSize: "5rem", color: "var(--gold)", opacity: 0.2 }}
            >
              "
            </span>

            <p className="text-[0.88rem] leading-loose mb-6" style={{ color: "var(--text-muted)" }}>
              {t.quote}
            </p>

            <div className="flex items-center gap-3.5">
              <motion.div
                className="flex items-center justify-center rounded-full flex-shrink-0 cormorant font-semibold"
                style={{
                  width: 40, height: 40,
                  background: "var(--deep-maroon)",
                  color: "var(--gold-light)",
                  fontSize: "0.8rem",
                }}
                whileHover={{ scale: 1.1 }}
              >
                {t.initials}
              </motion.div>
              <div>
                <div className="text-[0.78rem] font-normal tracking-wider" style={{ color: "var(--charcoal)" }}>
                  {t.name}
                </div>
                <div className="text-[0.68rem] tracking-wider" style={{ color: "var(--text-muted)" }}>
                  {t.company}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex justify-center items-center gap-3 mb-3 text-[0.65rem] tracking-[0.35em] uppercase"
      style={{ color: "var(--gold)" }}
    >
      <span className="block w-7 h-px" style={{ background: "var(--gold)" }} />
      {children}
      <span className="block w-7 h-px" style={{ background: "var(--gold)" }} />
    </div>
  );
}
