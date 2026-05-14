"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  { num: "01", title: "Enquire & Connect",    body: "Fill our short partner form with your business details, target categories, and order volumes. Our team responds within 24 hours." },
  { num: "02", title: "Catalogue & Costing", body: "Receive a personalised wholesale catalogue with transparent tiered pricing, MOQ details, and lead time estimates tailored to your market." },
  { num: "03", title: "Sample & Approve",    body: "Order pre-production samples before committing to bulk. Rapid prototype turnaround with precise fit approval before full-scale manufacturing." },
  { num: "04", title: "Produce & Export",    body: "Confirm your bulk order and we handle end-to-end production, multi-level QC, international documentation, and global delivery." },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" ref={ref} style={{ padding: "100px 80px", background: "#fff8f0" }}>
      <motion.div
        className="text-center mb-0"
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionLabel>How It Works</SectionLabel>
        <h2
          className="cormorant font-light"
          style={{ fontSize: "clamp(2.2rem,3.5vw,3.6rem)", lineHeight: 1.15, color: "var(--deep-maroon)" }}
        >
          Simple <em style={{ fontStyle: "italic", color: "var(--burnt-sienna)" }}>Onboarding</em>
        </h2>
      </motion.div>

      <div className="relative grid mt-14" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
        {/* Connector line */}
        <div
          className="absolute h-px overflow-hidden"
          style={{ top: 32, left: "8%", right: "8%", background: "var(--border)" }}
        >
          <motion.div
            className="h-full"
            style={{ background: "linear-gradient(90deg,var(--gold),var(--gold-light))" }}
            initial={{ width: 0 }}
            animate={inView ? { width: "100%" } : { width: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          />
        </div>

        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            className="text-center group"
            style={{ padding: "0 24px" }}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.15 * i }}
            data-cursor-hover
          >
            <div
              className="flex items-center justify-center mx-auto mb-6 cormorant font-light relative z-10 transition-all duration-400"
              style={{
                width: 64, height: 64,
                border: "1px solid var(--gold)",
                background: "#fff8f0",
                fontSize: "1.6rem",
                color: "var(--gold)",
              }}
            >
              <span className="group-hover:opacity-0 transition-opacity duration-300 absolute">{s.num}</span>
              <span
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute"
                style={{ fontSize: "1.2rem", color: "var(--deep-maroon)" }}
              >
                ✓
              </span>
            </div>
            <h3
              className="cormorant font-normal mb-2.5"
              style={{ fontSize: "1.2rem", color: "var(--deep-maroon)" }}
            >
              {s.title}
            </h3>
            <p className="text-[0.8rem] leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {s.body}
            </p>
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
