"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const cats = [
  { bg: "#3A0D16", icon: "👘", image: "/ew-2-img1.jpg",  name: "Ethnic Womenswear", sub: "Kurtas · Festive Wear",       span: true,  href: "/collections/ethnic-womenswear" },
  { bg: "#4A1A35", icon: "🧵", image: "/cs-3-img1.jpg",  name: "Co-ord Sets",       sub: "Matching Sets · Fusion · Festive",         span: false, href: "/collections/coord-sets"        },
  { bg: "#1E3A4A", icon: "👗", image: "/tops-hero.jpg",   name: "Tops",              sub: "Casual",             span: false, comingSoon: true               },
  { bg: "#2A3A1A", icon: "👒", image: "/dp-3-img3.jpg",  name: "Dresses",           sub: "Casual · Formal · Occasion Wear",          span: false, wide: true, href: "/collections/dresses"           },
];

export default function Categories() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="categories"
      ref={ref}
      className="section-pad"
      style={{ background: "var(--cream)" }}
    >
      {/* Header */}
      <motion.div
        className="cat-header"
        style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 52 }}
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <SectionLabel>Our Catalogue</SectionLabel>
          <h2
            className="cormorant"
            style={{ fontSize: "clamp(2.2rem,3.5vw,3.6rem)", fontWeight: 300, lineHeight: 1.15, color: "var(--deep-maroon)" }}
          >
            Product <em style={{ fontStyle: "italic", color: "var(--burnt-sienna)" }}>Collections</em>
          </h2>
        </div>
        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", maxWidth: 340, lineHeight: 1.7 }}>
          All categories available in bulk wholesale quantities with consistent quality control,
          flexible MOQs, and export-ready packaging.
        </p>
        <p style={{ fontSize: "0.8rem", color: "var(--gold)", maxWidth: 340, lineHeight: 1.7, marginTop: 10, letterSpacing: "0.04em" }}>
          Minimum order: 100 MOQs per colour.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid-3col">
        {cats.map((c, i) => {
          const inner = (
            <>
              {/* Image block */}
              <div
                style={{
                  background: c.bg,
                  aspectRatio: c.span ? "3/7" : (c as any).wide ? "16/9" : "3/4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {c.image ? (
                  <Image src={c.image} alt={c.name} fill style={{ objectFit: "cover", transition: "transform 0.5s ease" }} className="cat-img" />
                ) : (
                  <>
                    <div
                      style={{
                        position: "absolute", inset: 0, opacity: 0.12,
                        backgroundImage: "repeating-linear-gradient(45deg,var(--gold) 0,var(--gold) 1px,transparent 0,transparent 50%)",
                        backgroundSize: "18px 18px",
                      }}
                    />
                    <span style={{ fontSize: "3rem", opacity: 0.35, filter: "grayscale(1)" }}>{c.icon}</span>
                  </>
                )}
                {(c as any).comingSoon ? (
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    background: "linear-gradient(transparent, rgba(0,0,0,0.6))",
                    padding: "28px 20px 18px",
                  }}>
                    <span style={{ fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(245,239,228,0.7)" }}>
                      Coming Soon
                    </span>
                  </div>
                ) : (
                <div
                  className="cat-overlay"
                  style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    background: "linear-gradient(transparent, rgba(74,14,30,0.92))",
                    padding: "36px 20px 20px",
                    transform: "translateY(10px)",
                    opacity: 0,
                    transition: "all 0.35s",
                  }}
                >
                  <span style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold-light)" }}>
                    {c.href ? "View Collection →" : "Enquire Now →"}
                  </span>
                </div>
                )}
              </div>
              {/* Info */}
              <div style={{ padding: "14px 4px" }}>
                <h3 className="cormorant" style={{ fontSize: "1.25rem", fontWeight: 400, color: "var(--deep-maroon)" }}>
                  {c.name}
                </h3>
                <span style={{ fontSize: "0.68rem", letterSpacing: "0.12em", color: "var(--text-muted)" }}>
                  {c.sub}
                </span>
              </div>
            </>
          );

          return (
            <motion.div
              key={c.name}
              className={`group${c.span ? " cat-span" : ""}${(c as any).wide ? " cat-wide" : ""}`}
              style={{
                cursor: (c as any).comingSoon ? "default" : "pointer",
                position: "relative",
                overflow: "hidden",
                ...(c.span ? { gridRow: "span 2" } : {}),
              }}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.05 * i }}
              whileHover={{ y: -6, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
            >
              {c.href ? (
                <Link href={c.href} style={{ textDecoration: "none", color: "inherit" }}>
                  {inner}
                </Link>
              ) : inner}
            </motion.div>
          );
        })}
      </div>

      <style>{`
        .group:hover .cat-overlay { transform: translateY(0) !important; opacity: 1 !important; }
        .group:hover .cat-img { transform: scale(1.05) !important; }
      `}</style>
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
