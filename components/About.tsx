"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { display: "25+",  label: "Years of Experience"    },
  { display: "4",    label: "Global Certifications"  },
  { display: "4",    label: "Export Markets"         },
  { display: "360°", label: "Design to Delivery"     },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="grid items-center px-6 py-24 md:px-16 md:py-32 lg:px-20 lg:py-40 gap-10 md:gap-16 lg:gap-20 grid-cols-1 md:grid-cols-2"
      style={{
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
          <em style={{ fontStyle: "italic", color: "var(--burnt-sienna)" }}>Trusted Worldwide</em>
        </h2>
        <p className="text-[0.9rem] leading-loose mb-4" style={{ color: "var(--text-muted)" }}>
          Global Trendwave Pvt. Ltd. is a premier garment sourcing and manufacturing company
          founded by Mr. Mayyank Malhotra and Mr. Kishan Maheshwari. With over two decades
          of combined expertise in the textile and apparel industry, we bridge the gap between
          global demand and reliable, ethical supply.
        </p>
        <p className="text-[0.9rem] leading-loose" style={{ color: "var(--text-muted)" }}>
          Headquartered in New Delhi and Jaipur with a manufacturing unit in Gurugram, we
          serve leading ethnic womenswear retailers across India and international export
          clients including Omnika, Karl Legrand, and other prestigious global brands —
          delivering cost-effective, sustainable, and design-forward solutions from concept
          to shipment.
        </p>

        <div className="grid grid-cols-2 gap-7 mt-10">
          {stats.map((s) => (
            <StatCard key={s.label} display={s.display} label={s.label} inView={inView} />
          ))}
        </div>
      </motion.div>

      {/* Visual */}
      <motion.div
        className="relative overflow-hidden md:overflow-visible"
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        <div
          className="relative overflow-hidden flex items-center justify-center"
          style={{ background: "var(--deep-maroon)", aspectRatio: "4/5" }}
        >
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
            Ethical Manufacturing Since 1999
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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-3 text-[0.65rem] tracking-[0.35em] uppercase" style={{ color: "var(--gold)" }}>
      <span className="block w-7 h-px" style={{ background: "var(--gold)" }} />
      {children}
    </div>
  );
}

function StatCard({ display, label, inView }: { display: string; label: string; inView: boolean }) {
  const [shown, setShown] = useState("0");
  const started = useRef(false);
  const numeric = parseInt(display);
  const isNumeric = !isNaN(numeric) && !display.includes("°");

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    if (!isNumeric) { setShown(display); return; }
    const suffix = display.replace(String(numeric), "");
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setShown(Math.round(eased * numeric) + suffix);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, display, isNumeric, numeric]);

  return (
    <div style={{ borderLeft: "2px solid var(--gold)", paddingLeft: 18 }}>
      <div className="cormorant font-semibold leading-none" style={{ fontSize: "2.4rem", color: "var(--deep-maroon)" }}>
        {isNumeric ? shown : display}
      </div>
      <div className="text-[0.68rem] tracking-[0.18em] uppercase mt-1" style={{ color: "var(--text-muted)" }}>
        {label}
      </div>
    </div>
  );
}
