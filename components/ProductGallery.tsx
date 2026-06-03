"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { Product, Collection } from "@/app/collections/[slug]/page";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ProductGallery({
  product: p,
  collection: c,
}: {
  product: Product;
  collection: Collection;
}) {
  const images = p.images?.length ? p.images : p.image ? [p.image] : [];
  const [active, setActive] = useState(0);

  return (
    <>
      {/* Nav */}
      <nav
        className="nav-pad"
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 18,
          paddingBottom: 18,
          background: "rgba(245,239,228,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <Link href="/" style={{ flexShrink: 0 }}>
          <Image src="/logo.png" alt="Global Trendwave" height={44} width={176} style={{ objectFit: "contain" }} priority />
        </Link>
        <Link
          href={`/collections/${c.slug}`}
          style={{
            fontSize: "0.68rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--charcoal)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 8,
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--charcoal)")}
        >
          ← {c.name}
        </Link>
      </nav>

      <main style={{ paddingTop: 80, background: "var(--cream)", minHeight: "100vh" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "60px 40px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "start",
          }}
          className="product-page-grid"
        >
          {/* Left: image gallery */}
          <div>
            {/* Main image */}
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: EASE }}
              style={{
                position: "relative",
                aspectRatio: "3/4",
                background: "#f0e8d8",
                overflow: "hidden",
                marginBottom: 16,
              }}
            >
              {images[active] && (
                <Image
                  src={images[active]}
                  alt={p.name}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              )}
            </motion.div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${Math.min(images.length, 5)}, 1fr)`,
                  gap: 8,
                }}
              >
                {images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    style={{
                      position: "relative",
                      aspectRatio: "3/4",
                      border: i === active ? "2px solid var(--deep-maroon)" : "2px solid transparent",
                      padding: 0,
                      cursor: "pointer",
                      background: "#f0e8d8",
                      overflow: "hidden",
                      transition: "border-color 0.2s",
                    }}
                  >
                    <Image src={src} alt={`${p.name} view ${i + 1}`} fill style={{ objectFit: "cover" }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: product info */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            style={{ paddingTop: 8 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)" }}>
              <span style={{ width: 28, height: 1, background: "var(--gold)", display: "block" }} />
              {c.name}
            </div>

            <h1
              className="cormorant"
              style={{ fontSize: "clamp(2rem,3.5vw,3rem)", fontWeight: 300, color: "var(--deep-maroon)", lineHeight: 1.1, marginBottom: 24 }}
            >
              {p.name}
            </h1>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
              {[
                { label: "Fabric", value: p.fabric },
                { label: "MOQ", value: p.moq },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: "flex", gap: 16, alignItems: "center", paddingBottom: 12, borderBottom: "1px solid var(--border)" }}>
                  <span style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)", width: 120, flexShrink: 0 }}>
                    {label}
                  </span>
                  <span style={{ fontSize: "0.9rem", color: "var(--charcoal)" }}>{value}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a
                href="/#contact"
                style={{
                  background: "var(--deep-maroon)",
                  color: "var(--cream)",
                  padding: "16px 32px",
                  textDecoration: "none",
                  fontSize: "0.72rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  textAlign: "center",
                  transition: "background 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--burnt-sienna)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--deep-maroon)")}
              >
                Request Pricing
              </a>
              <a
                href="/#contact"
                style={{
                  border: "1px solid var(--gold)",
                  color: "var(--gold)",
                  padding: "16px 32px",
                  textDecoration: "none",
                  fontSize: "0.72rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  textAlign: "center",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "var(--cream)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--gold)"; }}
              >
                Get Catalogue
              </a>
            </div>

            <p style={{ marginTop: 32, fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
              Wholesale pricing available on request. Customisation in fabric, colour, and embellishment available for orders above MOQ.
            </p>
          </motion.div>
        </div>
      </main>

      <style>{`
        @media (max-width: 768px) {
          .product-page-grid { grid-template-columns: 1fr !important; gap: 32px !important; padding: 24px !important; }
        }
      `}</style>
    </>
  );
}
