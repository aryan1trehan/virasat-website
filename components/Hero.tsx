"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE, delay: i * 0.18 },
  }),
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen grid overflow-hidden"
      style={{ gridTemplateColumns: "1fr", paddingTop: 80 }}
    >
      {/* Responsive grid: single column on mobile, 2-col on md+ */}
      <div className="grid min-h-[calc(100vh-80px)] grid-cols-1 md:grid-cols-2">
        {/* LEFT */}
        <div
          className="flex flex-col justify-center px-6 py-16 md:px-14 lg:px-20"
          style={{ paddingTop: "clamp(48px, 8vw, 80px)", paddingBottom: "clamp(48px, 8vw, 80px)" }}
        >
          {/* Eyebrow */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="flex items-center gap-3 mb-5"
          >
            <motion.span
              className="block h-px"
              style={{ background: "var(--gold)" }}
              initial={{ width: 0 }}
              animate={mounted ? { width: 36 } : { width: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1.6 }}
            />
            <span
              className="text-[0.68rem] tracking-[0.35em] uppercase"
              style={{ color: "var(--gold)" }}
            >
              B2B Garment Sourcing &amp; Manufacturing — India
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="cormorant font-light mb-7"
            style={{
              fontSize: "clamp(3.2rem,5vw,5.5rem)",
              lineHeight: 1.08,
              color: "var(--deep-maroon)",
            }}
          >
            Wave Into the
            <br />
            Future of{" "}
            <em className="shimmer-text not-italic">Sourcing</em>
          </motion.h1>

          {/* Description */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="text-[0.88rem] leading-loose mb-11 max-w-md"
            style={{ color: "var(--text-muted)" }}
          >
            India's trusted wholesale partner for ethical garment manufacturing,
            ethnic womenswear, woven apparel & home textiles. SEDEX · GOTS · BSCI
            certified. Export-ready across Europe, Middle East & North America.
          </motion.p>

          {/* Buttons */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="flex gap-4 flex-wrap"
          >
            <SlideBtn href="#categories">
              View Catalogue
            </SlideBtn>
            <OutlineBtn href="#contact">Request Pricing</OutlineBtn>
          </motion.div>
        </div>

        {/* RIGHT — hidden on mobile */}
        <div
          className="relative overflow-hidden hidden md:block"
          style={{ background: "var(--deep-maroon)" }}
        >
          {/* Drifting pattern */}
          <div
            className="absolute inset-0 hero-pattern-anim"
            style={{
              opacity: 0.08,
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z' fill='none' stroke='%23C9933E' stroke-width='1'/%3E%3Ccircle cx='30' cy='30' r='6' fill='%23C9933E'/%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Particles */}
          <Particles />

          {/* Mandala */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative" style={{ width: 420, height: 420 }}>
              {/* Outer */}
              <svg className="mandala-outer absolute inset-0 w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="200" r="190" fill="none" stroke="#C9933E" strokeWidth="1"/>
                <circle cx="200" cy="200" r="155" fill="none" stroke="#C9933E" strokeWidth="0.5"/>
                <g stroke="#C9933E" strokeWidth="0.8" fill="none">
                  <line x1="200" y1="10"  x2="200" y2="390"/>
                  <line x1="10"  y1="200" x2="390" y2="200"/>
                  <line x1="65"  y1="65"  x2="335" y2="335"/>
                  <line x1="335" y1="65"  x2="65"  y2="335"/>
                </g>
                <g fill="#C9933E">
                  <circle cx="200" cy="45"  r="4"/>
                  <circle cx="200" cy="355" r="4"/>
                  <circle cx="45"  cy="200" r="4"/>
                  <circle cx="355" cy="200" r="4"/>
                </g>
              </svg>
              {/* Inner (counter-rotate) */}
              <svg className="mandala-inner w-full h-full" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="150" r="140" fill="none" stroke="#C9933E" strokeWidth="1"/>
                <circle cx="150" cy="150" r="90"  fill="none" stroke="#C9933E" strokeWidth="0.5"/>
                <circle cx="150" cy="150" r="40"  fill="none" stroke="#C9933E" strokeWidth="1"/>
                <circle cx="150" cy="150" r="14"  fill="none" stroke="#C9933E" strokeWidth="1"/>
                <g fill="#C9933E">
                  <circle cx="150" cy="11"  r="3"/>
                  <circle cx="150" cy="289" r="3"/>
                  <circle cx="11"  cy="150" r="3"/>
                  <circle cx="289" cy="150" r="3"/>
                  <circle cx="57"  cy="57"  r="2"/>
                  <circle cx="243" cy="243" r="2"/>
                  <circle cx="243" cy="57"  r="2"/>
                  <circle cx="57"  cy="243" r="2"/>
                </g>
                <polygon
                  points="150,60 165,130 235,130 178,172 198,242 150,200 102,242 122,172 65,130 135,130"
                  fill="none" stroke="#C9933E" strokeWidth="0.8" opacity="0.6"
                />
              </svg>
            </div>
          </div>

          {/* Tag box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
            className="absolute bottom-12 right-12 backdrop-blur-sm"
            style={{
              background: "rgba(201,147,62,0.18)",
              border: "1px solid var(--border)",
              padding: "24px 30px",
              color: "var(--cream)",
            }}
          >
            <div
              className="cormorant font-light leading-none"
              style={{ fontSize: "2.8rem", color: "var(--gold-light)" }}
            >
              25+
            </div>
            <div
              className="text-[0.65rem] tracking-[0.2em] uppercase mt-1"
              style={{ color: "rgba(245,239,228,0.65)" }}
            >
              Years of Industry Experience
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Helpers ─────────────────────────────── */

function SlideBtn({
  href, children,
}: {
  href: string; children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="relative overflow-hidden inline-block text-[0.72rem] tracking-[0.22em] uppercase no-underline"
      style={{
        background: "var(--deep-maroon)",
        color: "var(--cream)",
        padding: "15px 36px",
        display: "inline-block",
        transition: "background 0.3s, transform 0.2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = "var(--burnt-sienna)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "var(--deep-maroon)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {children}
    </a>
  );
}

function OutlineBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-block text-[0.72rem] tracking-[0.22em] uppercase no-underline"
      style={{
        border: "1px solid var(--gold)",
        color: "var(--gold)",
        padding: "15px 36px",
        transition: "background 0.3s, color 0.3s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = "var(--gold)";
        (e.currentTarget as HTMLElement).style.color = "var(--cream)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "transparent";
        (e.currentTarget as HTMLElement).style.color = "var(--gold)";
      }}
    >
      {children}
    </a>
  );
}

function Particles() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    size:  Math.random() * 3 + 1.5,
    x:     Math.random() * 100,
    y:     Math.random() * 100,
    dur:   (Math.random() * 5 + 5).toFixed(1),
    delay: (Math.random() * 6).toFixed(1),
    op:    (Math.random() * 0.3 + 0.1).toFixed(2),
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width:  p.size,
            height: p.size,
            left:   p.x + "%",
            top:    p.y + "%",
            background: "var(--gold)",
            opacity: 0,
            animation: `floatParticle ${p.dur}s ease-in-out ${p.delay}s infinite`,
            ["--op" as string]: p.op,
          }}
        />
      ))}
    </div>
  );
}
