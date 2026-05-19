"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const stats = [
  { display: "25+",  label: "Years of Experience"   },
  { display: "4",    label: "Global Certifications" },
  { display: "4",    label: "Export Markets"        },
  { display: "360°", label: "Design to Delivery"    },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="section-pad"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "80px",
        alignItems: "center",
        background: "#fff8f0",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionLabel>Our Story</SectionLabel>
        <h2
          className="cormorant"
          style={{ fontSize: "clamp(2.2rem,3.5vw,3.6rem)", fontWeight: 300, lineHeight: 1.15, color: "var(--deep-maroon)", marginBottom: 20 }}
        >
          Crafted in India,<br />
          <em style={{ fontStyle: "italic", color: "var(--burnt-sienna)" }}>Trusted Worldwide</em>
        </h2>
        <p style={{ fontSize: "0.9rem", lineHeight: 1.9, color: "var(--text-muted)", marginBottom: 18 }}>
          Global Trendwave Pvt. Ltd. is a premier garment sourcing and manufacturing company
          founded by Mr. Mayyank Malhotra and Mr. Kishan Maheshwari. With over two decades
          of combined expertise in the textile and apparel industry, we bridge the gap between
          global demand and reliable, ethical supply.
        </p>
        <p style={{ fontSize: "0.9rem", lineHeight: 1.9, color: "var(--text-muted)" }}>
          Headquartered in New Delhi and Jaipur with a manufacturing unit in Gurugram, we
          serve leading ethnic womenswear retailers across India and international export
          clients — delivering cost-effective, sustainable, and design-forward solutions
          from concept to shipment.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginTop: 40 }}>
          {stats.map((s) => (
            <StatCard key={s.label} display={s.display} label={s.label} inView={inView} />
          ))}
        </div>
      </motion.div>

      {/* Visual */}
      <motion.div
        style={{ position: "relative" }}
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        <div
          style={{
            aspectRatio: "4/5",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Image
            src="/about-model.jpg"
            alt="Ethnic womenswear — Global Trendwave"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div
            className="cormorant"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              background: "linear-gradient(transparent, rgba(74,14,30,0.85))",
              padding: "32px 28px 24px",
              color: "var(--cream)",
              fontSize: "1.4rem",
              fontStyle: "italic",
            }}
          >
            Ethical Manufacturing Since 1999
          </div>
        </div>
        <div
          className="about-accent-pulse"
          style={{
            position: "absolute",
            top: -18,
            right: -18,
            width: 90,
            height: 90,
            border: "2px solid var(--gold)",
          }}
        />
      </motion.div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14, fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)" }}>
      <span style={{ display: "block", width: 28, height: 1, background: "var(--gold)" }} />
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
      <div className="cormorant" style={{ fontSize: "2.4rem", fontWeight: 600, color: "var(--deep-maroon)", lineHeight: 1 }}>
        {isNumeric ? shown : display}
      </div>
      <div style={{ fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-muted)", marginTop: 5 }}>
        {label}
      </div>
    </div>
  );
}
