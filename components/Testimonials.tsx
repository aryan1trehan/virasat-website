"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote:   "Virasat has been our primary ethnic wear supplier for 3 years. The quality is consistent and their team is incredibly responsive. Our saree collection has never looked better.",
    initials:"PM",
    name:    "Priya Menon",
    company: "Owner, Silkthread Boutique — Dubai",
  },
  {
    quote:   "We were nervous about sourcing directly from India, but Virasat made it effortless. Excellent logistics, great packaging, and a product range that keeps our customers coming back.",
    initials:"RK",
    name:    "Ravi Kumar",
    company: "Founder, Desi Drip — London",
  },
  {
    quote:   "The custom labelling service is a game-changer. We now sell Virasat pieces under our own brand. MOQs are fair and the account manager always keeps us ahead of trends.",
    initials:"SA",
    name:    "Sara Al-Fahim",
    company: "Buyer, Noor Fashion — Abu Dhabi",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" ref={ref} style={{ padding: "100px 80px", background: "var(--cream)" }}>
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionLabel>Partner Voices</SectionLabel>
        <h2
          className="cormorant font-light"
          style={{ fontSize: "clamp(2.2rem,3.5vw,3.6rem)", lineHeight: 1.15, color: "var(--deep-maroon)" }}
        >
          What <em style={{ fontStyle: "italic", color: "var(--burnt-sienna)" }}>Retailers</em> Say
        </h2>
      </motion.div>

      <div className="grid grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="relative group"
            style={{
              border: "1px solid var(--border)",
              padding: "36px 32px",
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
