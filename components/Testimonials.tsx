"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote:    "As a brand, we are particular about quality and finishing because every piece reflects our identity. Global Trendwave has consistently delivered production that meets our standards while ensuring timelines are never compromised. Their understanding of fabrics, craftsmanship, and production planning makes them a partner we can rely on.",
    initials: "RH",
    name:     "Rimjhim Hada",
    company:  "Co-Founder, Aachho",
  },
  {
    quote:    "Scaling a fashion brand requires manufacturing partners who can deliver consistency at every stage. Global Trendwave has been instrumental in maintaining product quality, fit accuracy, and timely deliveries across production cycles. Their professionalism and commitment to excellence have made them a trusted extension of our supply chain.",
    initials: "SK",
    name:     "Sidhant Keshwani",
    company:  "CEO, Libas",
  },
  {
    quote:    "Fashion moves fast and manufacturing needs to keep up. What we appreciate about Global Trendwave is their responsiveness and attention to detail. Whether it's fabric quality, finishing, or meeting tight deadlines, they've always approached every order with professionalism and accountability.",
    initials: "VK",
    name:     "Vikram Kankaria",
    company:  "Founder, FASHOR",
  },
  {
    quote:    "The success of a fashion collection often depends on the strength of the manufacturing behind it. Global Trendwave has consistently delivered high-quality products with excellent finishing, dependable timelines, and smooth communication throughout the production process. Their team understands the importance of getting every detail right.",
    initials: "SS",
    name:     "Sanjay Kumar Singh",
    company:  "Director, Feather Touch",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="section-pad"
      style={{ background: "var(--cream)" }}
    >
      <motion.div
        style={{ textAlign: "center" }}
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionLabel>Partner Voices</SectionLabel>
        <h2
          className="cormorant"
          style={{ fontSize: "clamp(2.2rem,3.5vw,3.6rem)", fontWeight: 300, lineHeight: 1.15, color: "var(--deep-maroon)" }}
        >
          What <em style={{ fontStyle: "italic", color: "var(--burnt-sienna)" }}>Brands</em> Say
        </h2>
      </motion.div>

      <div className="grid-2col" style={{ marginTop: 52 }}>
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="testi-card"
            style={{
              border: "1px solid var(--border)",
              padding: "36px 32px",
              position: "relative",
              transition: "border-color 0.3s, transform 0.3s",
            }}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 * i }}
            whileHover={{ y: -4, boxShadow: "0 20px 50px rgba(74,14,30,0.1)", transition: { duration: 0.4 } } as never}
          >
            {/* Big quote mark */}
            <span
              className="cormorant"
              style={{
                position: "absolute",
                top: 12,
                left: 24,
                fontSize: "5rem",
                lineHeight: 1,
                color: "var(--gold)",
                opacity: 0.2,
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              "
            </span>

            <p style={{ fontSize: "0.88rem", lineHeight: 1.85, color: "var(--text-muted)", marginBottom: 24 }}>
              {t.quote}
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                className="cormorant"
                style={{
                  width: 40,
                  height: 40,
                  background: "var(--deep-maroon)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--gold-light)",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  flexShrink: 0,
                }}
              >
                {t.initials}
              </div>
              <div>
                <div style={{ fontSize: "0.78rem", fontWeight: 400, color: "var(--charcoal)", letterSpacing: "0.06em" }}>
                  {t.name}
                </div>
                <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", letterSpacing: "0.08em" }}>
                  {t.company}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .testi-card:hover { border-color: var(--gold) !important; }
      `}</style>
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
