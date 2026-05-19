"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  { num: "01", title: "Enquire & Connect",   body: "Fill our short partner form with your business details, target categories, and order volumes. Our team responds within 24 hours." },
  { num: "02", title: "Catalogue & Costing", body: "Receive a personalised wholesale catalogue with transparent tiered pricing, MOQ details, and lead time estimates tailored to your market." },
  { num: "03", title: "Sample & Approve",    body: "Order pre-production samples before committing to bulk. Rapid prototype turnaround with precise fit approval before full-scale manufacturing." },
  { num: "04", title: "Produce & Export",    body: "Confirm your bulk order and we handle end-to-end production, multi-level QC, international documentation, and global delivery." },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="process"
      ref={ref}
      className="section-pad"
      style={{ background: "#fff8f0" }}
    >
      <motion.div
        style={{ textAlign: "center", marginBottom: 0 }}
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionLabel>How It Works</SectionLabel>
        <h2
          className="cormorant"
          style={{ fontSize: "clamp(2.2rem,3.5vw,3.6rem)", fontWeight: 300, lineHeight: 1.15, color: "var(--deep-maroon)" }}
        >
          Simple <em style={{ fontStyle: "italic", color: "var(--burnt-sienna)" }}>Onboarding</em>
        </h2>
      </motion.div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 0,
          marginTop: 52,
          position: "relative",
        }}
      >
        {/* Connector line */}
        <div
          style={{
            position: "absolute",
            top: 32,
            left: "8%",
            right: "8%",
            height: 1,
            background: "var(--border)",
          }}
        >
          <motion.div
            style={{ height: "100%", background: "linear-gradient(90deg,var(--gold),var(--gold-light))" }}
            initial={{ width: 0 }}
            animate={inView ? { width: "100%" } : { width: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          />
        </div>

        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            className="group"
            style={{ padding: "0 24px", textAlign: "center" }}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.15 * i }}
          >
            <div
              className="cormorant"
              style={{
                width: 64,
                height: 64,
                border: "1px solid var(--gold)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
                background: "#fff8f0",
                fontSize: "1.6rem",
                fontWeight: 300,
                color: "var(--gold)",
                position: "relative",
                zIndex: 1,
              }}
            >
              {s.num}
            </div>
            <h3
              className="cormorant"
              style={{ fontSize: "1.2rem", fontWeight: 400, color: "var(--deep-maroon)", marginBottom: 10 }}
            >
              {s.title}
            </h3>
            <p style={{ fontSize: "0.8rem", lineHeight: 1.75, color: "var(--text-muted)" }}>
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
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 12, marginBottom: 14, fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)" }}>
      <span style={{ display: "block", width: 28, height: 1, background: "var(--gold)" }} />
      {children}
      <span style={{ display: "block", width: 28, height: 1, background: "var(--gold)" }} />
    </div>
  );
}
