"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Collection } from "@/app/collections/[slug]/page";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function CollectionView({ collection: c }: { collection: Collection }) {
  return (
    <>
      {/* ── Nav ── */}
      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 60px",
          background: "rgba(245,239,228,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <Link href="/" style={{ flexShrink: 0 }}>
          <Image src="/logo.png" alt="Global Trendwave" height={44} width={176} style={{ objectFit: "contain" }} priority />
        </Link>
        <Link
          href="/#categories"
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
          ← All Collections
        </Link>
      </nav>

      <main style={{ paddingTop: 80, background: "var(--cream)", minHeight: "100vh" }}>

        {/* ── Hero ── */}
        <section
          className="grid-2col"
          style={{ minHeight: 480, overflow: "hidden" }}
        >
          {/* Left: text */}
          <motion.div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              background: "var(--cream)",
            }}
            className="hero-left-pad"
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18, fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)" }}>
              <span style={{ width: 28, height: 1, background: "var(--gold)", display: "block" }} />
              Our Catalogue
            </div>
            <h1
              className="cormorant"
              style={{ fontSize: "clamp(2.8rem,5vw,5rem)", fontWeight: 300, lineHeight: 1.08, color: "var(--deep-maroon)", marginBottom: 16 }}
            >
              {c.name.split(" ").slice(0, -1).join(" ")}{" "}
              <em style={{ fontStyle: "italic", color: "var(--burnt-sienna)" }}>
                {c.name.split(" ").slice(-1)[0]}
              </em>
            </h1>
            <p style={{ fontSize: "0.85rem", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: 20 }}>
              {c.tagline}
            </p>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.85, color: "var(--text-muted)", maxWidth: 420 }}>
              {c.description}
            </p>
            <div style={{ marginTop: 36, display: "flex", gap: 16 }}>
              <a
                href="/#contact"
                style={{
                  background: "var(--deep-maroon)",
                  color: "var(--cream)",
                  padding: "14px 32px",
                  textDecoration: "none",
                  fontSize: "0.72rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
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
                  padding: "14px 32px",
                  textDecoration: "none",
                  fontSize: "0.72rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "var(--cream)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--gold)"; }}
              >
                Get Catalogue
              </a>
            </div>
          </motion.div>

          {/* Right: hero visual */}
          <motion.div
            style={{ background: c.bg, position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.1 }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0.1,
                backgroundImage: "repeating-linear-gradient(45deg,var(--gold) 0,var(--gold) 1px,transparent 0,transparent 50%)",
                backgroundSize: "18px 18px",
              }}
            />
            <span style={{ fontSize: "8rem", opacity: 0.2, filter: "grayscale(1)" }}>{c.icon}</span>
            <div
              className="cormorant"
              style={{
                position: "absolute",
                bottom: 0, left: 0, right: 0,
                background: "linear-gradient(transparent, rgba(0,0,0,0.5))",
                padding: "40px 40px 32px",
                color: "var(--cream)",
                fontSize: "1rem",
                fontStyle: "italic",
                letterSpacing: "0.05em",
              }}
            >
              {c.sub}
            </div>
          </motion.div>
        </section>

        {/* ── Products grid ── */}
        <section className="section-pad" style={{ background: "#fff8f0" }}>
          <motion.div
            style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 52 }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)" }}>
                <span style={{ width: 28, height: 1, background: "var(--gold)", display: "block" }} />
                Products
              </div>
              <h2 className="cormorant" style={{ fontSize: "clamp(2rem,3vw,3rem)", fontWeight: 300, color: "var(--deep-maroon)" }}>
                {c.products.length > 0 ? `${c.products.length} Styles Available` : <><em style={{ fontStyle: "italic", color: "var(--burnt-sienna)" }}>Coming</em> Soon</>}
              </h2>
            </div>
            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", maxWidth: 320, lineHeight: 1.7, textAlign: "right" }}>
              Wholesale pricing available on request. MOQs start from 50 units per style.
            </p>
          </motion.div>

          {c.products.length > 0 ? (
            <div className="grid-4col-lg">
              {c.products.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          ) : (
            <PlaceholderGrid count={8} bg={c.bg} icon={c.icon} />
          )}
        </section>

        {/* ── CTA Banner ── */}
        <section
          className="section-pad"
          style={{
            background: "var(--deep-maroon)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 24,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold-light)" }}>
            <span style={{ width: 28, height: 1, background: "var(--gold-light)", display: "block" }} />
            Partner With Us
            <span style={{ width: 28, height: 1, background: "var(--gold-light)", display: "block" }} />
          </div>
          <h2
            className="cormorant"
            style={{ fontSize: "clamp(2.2rem,3.5vw,3.6rem)", fontWeight: 300, color: "var(--cream)" }}
          >
            Ready to Source <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>{c.name}?</em>
          </h2>
          <p style={{ fontSize: "0.88rem", lineHeight: 1.85, color: "rgba(245,239,228,0.65)", maxWidth: 520 }}>
            Fill our short partner form and receive a personalised wholesale catalogue with
            tiered pricing, MOQ details, and lead time estimates within 24 hours.
          </p>
          <a
            href="/#contact"
            style={{
              background: "var(--gold)",
              color: "var(--deep-maroon)",
              padding: "16px 44px",
              textDecoration: "none",
              fontSize: "0.72rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              fontWeight: 400,
              marginTop: 8,
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gold-light)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--gold)")}
          >
            Request Catalogue →
          </a>
        </section>

      </main>
    </>
  );
}

/* ── Product card (used when products are added) ── */
function ProductCard({ product: p, index }: { product: import("@/app/collections/[slug]/page").Product; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: EASE, delay: 0.05 * index }}
      className="group"
      style={{ cursor: "pointer" }}
    >
      <div
        style={{
          aspectRatio: "3/4",
          background: "var(--deep-maroon)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {p.image ? (
          <Image src={p.image} alt={p.name} fill style={{ objectFit: "cover" }} />
        ) : (
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(245,239,228,0.3)" }}>
              No Image
            </span>
          </div>
        )}
        <div
          style={{
            position: "absolute", inset: "0 0 0 0",
            background: "linear-gradient(transparent 50%, rgba(74,14,30,0.9))",
            opacity: 0, transition: "opacity 0.3s",
          }}
          className="card-overlay"
        />
      </div>
      <div style={{ padding: "14px 4px 4px" }}>
        <h3 className="cormorant" style={{ fontSize: "1.2rem", fontWeight: 400, color: "var(--deep-maroon)", marginBottom: 4 }}>
          {p.name}
        </h3>
        <div style={{ display: "flex", gap: 16, fontSize: "0.68rem", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
          <span>{p.code}</span>
          <span style={{ color: "var(--border)" }}>|</span>
          <span>{p.fabric}</span>
          <span style={{ color: "var(--border)" }}>|</span>
          <span>MOQ {p.moq}</span>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Placeholder grid shown before products are added ── */
function PlaceholderGrid({ count, bg, icon }: { count: number; bg: string; icon: string }) {
  return (
    <div>
      <div className="grid-4col-lg">
        {Array.from({ length: count }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.04 * i }}
          >
            <div
              style={{
                aspectRatio: "3/4",
                background: bg,
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 0.55 + (i % 3) * 0.1,
              }}
            >
              <div
                style={{
                  position: "absolute", inset: 0, opacity: 0.08,
                  backgroundImage: "repeating-linear-gradient(45deg,var(--gold) 0,var(--gold) 1px,transparent 0,transparent 50%)",
                  backgroundSize: "18px 18px",
                }}
              />
              <span style={{ fontSize: "2.5rem", opacity: 0.25, filter: "grayscale(1)" }}>{icon}</span>
              <div
                style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  background: "linear-gradient(transparent, rgba(0,0,0,0.4))",
                  padding: "24px 16px 16px",
                  display: "flex", justifyContent: "center",
                }}
              >
                <span style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(245,239,228,0.4)" }}>
                  Coming Soon
                </span>
              </div>
            </div>
            <div style={{ padding: "12px 4px 4px" }}>
              <div style={{ height: 14, width: "70%", background: "var(--border)", borderRadius: 2, marginBottom: 8 }} />
              <div style={{ height: 10, width: "50%", background: "rgba(201,147,62,0.15)", borderRadius: 2 }} />
            </div>
          </motion.div>
        ))}
      </div>
      <div style={{ marginTop: 60, textAlign: "center" }}>
        <div
          style={{
            display: "inline-block",
            border: "1px solid var(--border)",
            padding: "28px 48px",
          }}
        >
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 10 }}>
            Full Catalogue Available
          </p>
          <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
            Contact us to receive the complete product catalogue<br />with pricing and specifications.
          </p>
          <a
            href="/#contact"
            style={{
              display: "inline-block",
              marginTop: 20,
              background: "var(--deep-maroon)",
              color: "var(--cream)",
              padding: "12px 28px",
              textDecoration: "none",
              fontSize: "0.68rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--burnt-sienna)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--deep-maroon)")}
          >
            Request Catalogue
          </a>
        </div>
      </div>
    </div>
  );
}
