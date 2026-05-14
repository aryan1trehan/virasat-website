"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { n: 12,  suffix: "+", label: "Years in Business" },
  { n: 800, suffix: "+", label: "Retail Partners"   },
  { n: 28,  suffix: "",  label: "Artisan Clusters"  },
  { n: 40,  suffix: "+", label: "Countries Served"  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="grid gap-20 items-center"
      style={{
        padding: "100px 80px",
        gridTemplateColumns: "1fr 1fr",
        background: "#fff8f0",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
      ref={ref}
    >
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionLabel>Our Story</SectionLabel>
        <h2
          className="cormorant font-light mb-5"
          style={{ fontSize: "clamp(2.2rem,3.5vw,3.6rem)", lineHeight: 1.15, color: "var(--deep-maroon)" }}
        >
          Crafted in India,<br />
          <em style={{ fontStyle: "italic", color: "var(--burnt-sienna)" }}>Worn Worldwide</em>
        </h2>
        <p className="text-[0.9rem] leading-loose mb-4" style={{ color: "var(--text-muted)" }}>
          Virasat connects retailers and fashion businesses with India's most skilled artisan
          communities. From Banarasi silk weavers to Rajasthani block-print masters, every
          piece carries a legacy of craftsmanship.
        </p>
        <p className="text-[0.9rem] leading-loose" style={{ color: "var(--text-muted)" }}>
          We operate as a trusted B2B partner — offering competitive wholesale pricing,
          reliable logistics, consistent quality checks, and the flexibility to fulfil both
          standard and custom orders.
        </p>

        <div className="grid grid-cols-2 gap-7 mt-10">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} inView={inView} />
          ))}
        </div>
      </motion.div>

      {/* Visual */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        <div
          className="relative overflow-hidden flex items-center justify-center"
          style={{ background: "var(--deep-maroon)", aspectRatio: "4/5" }}
        >
          {/* Sheen sweep */}
          <div
            className="absolute top-0 bottom-0 w-3/5 pointer-events-none"
            style={{
              background: "linear-gradient(105deg,transparent 40%,rgba(201,147,62,0.1) 50%,transparent 60%)",
              animation: "sheenSweep 4s ease-in-out 3s infinite",
              left: "-100%",
            }}
          />
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.15 }}>
            <path d="M100 10 L190 100 L100 190 L10 100 Z" stroke="#C9933E" strokeWidth="1.5"/>
            <path d="M100 40 L160 100 L100 160 L40 100 Z" stroke="#C9933E" strokeWidth="1"/>
            <circle cx="100" cy="100" r="25" stroke="#C9933E" strokeWidth="1.5"/>
            <circle cx="100" cy="100" r="8" fill="#C9933E" opacity="0.6"/>
            <line x1="100" y1="10"  x2="100" y2="190" stroke="#C9933E" strokeWidth="0.5"/>
            <line x1="10"  y1="100" x2="190" y2="100" stroke="#C9933E" strokeWidth="0.5"/>
          </svg>
          <div
            className="absolute bottom-0 left-0 right-0 cormorant italic"
            style={{
              background: "linear-gradient(transparent,rgba(74,14,30,0.9))",
              padding: "32px 28px 24px",
              color: "var(--cream)",
              fontSize: "1.4rem",
            }}
          >
            Indian Artisan Heritage
          </div>
        </div>
        <div
          className="absolute -top-4 -right-4 w-24 h-24 about-accent-pulse"
          style={{ border: "2px solid var(--gold)" }}
        />
      </motion.div>
    </section>
  );
}

/* ── Helpers ── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-3 text-[0.65rem] tracking-[0.35em] uppercase" style={{ color: "var(--gold)" }}>
      <span className="block w-7 h-px" style={{ background: "var(--gold)" }} />
      {children}
    </div>
  );
}

function StatCard({ n, suffix, label, inView }: { n: number; suffix: string; label: string; inView: boolean }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * n));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, n]);

  return (
    <div style={{ borderLeft: "2px solid var(--gold)", paddingLeft: 18 }}>
      <div
        className="cormorant font-semibold leading-none"
        style={{ fontSize: "2.4rem", color: "var(--deep-maroon)" }}
      >
        {count}{suffix}
      </div>
      <div className="text-[0.68rem] tracking-[0.18em] uppercase mt-1" style={{ color: "var(--text-muted)" }}>
        {label}
      </div>
    </div>
  );
}
