"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { href: "#about",      label: "About"     },
  { href: "#categories", label: "Catalogue" },
  { href: "#why",        label: "Why Us"    },
  { href: "#process",    label: "Process"   },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: 80,
          paddingRight: 80,
          paddingTop: scrolled ? 14 : 22,
          paddingBottom: scrolled ? 14 : 22,
          background: scrolled ? "rgba(245,239,228,0.97)" : "rgba(245,239,228,0.88)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
          boxShadow: scrolled ? "0 4px 30px rgba(74,14,30,0.08)" : "none",
          transition: "padding 0.4s ease, box-shadow 0.4s ease, background 0.4s ease",
        }}
      >
        {/* Logo */}
        <a href="#hero" style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
          <Image
            src="/logo.png"
            alt="Global Trendwave"
            height={scrolled ? 44 : 54}
            width={scrolled ? 176 : 216}
            style={{ transition: "height 0.4s, width 0.4s", objectFit: "contain" }}
            priority
          />
        </a>

        {/* Desktop Links */}
        <ul
          className="hidden md:flex"
          style={{
            alignItems: "center",
            gap: 38,
            listStyle: "none",
            margin: 0,
            padding: 0,
            flexShrink: 0,
          }}
        >
          {links.map((l) => (
            <li key={l.href} style={{ flexShrink: 0 }}>
              <a
                href={l.href}
                style={{
                  textDecoration: "none",
                  fontSize: "0.72rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--charcoal)",
                  transition: "color 0.3s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--charcoal)")}
              >
                {l.label}
              </a>
            </li>
          ))}

          {/* CTA */}
          <li style={{ flexShrink: 0 }}>
            <a
              href="#contact"
              style={{
                textDecoration: "none",
                fontSize: "0.72rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                background: "var(--deep-maroon)",
                color: "var(--cream)",
                padding: "10px 24px",
                whiteSpace: "nowrap",
                display: "inline-block",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--burnt-sienna)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--deep-maroon)")}
            >
              Partner With Us
            </a>
          </li>
        </ul>

        {/* Hamburger Button (mobile only) */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          style={{ background: "none", border: "none", cursor: "pointer", zIndex: 200 }}
        >
          <span
            style={{
              display: "block",
              width: 24,
              height: 2,
              background: "var(--deep-maroon)",
              transition: "transform 0.3s, opacity 0.3s",
              transform: open ? "translateY(6px) rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: 24,
              height: 2,
              background: "var(--deep-maroon)",
              transition: "opacity 0.3s",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: 24,
              height: 2,
              background: "var(--deep-maroon)",
              transition: "transform 0.3s, opacity 0.3s",
              transform: open ? "translateY(-6px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className="md:hidden fixed inset-0 flex flex-col"
        style={{
          zIndex: 99,
          background: "var(--cream)",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
          paddingTop: 80,
        }}
      >
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: "40px 32px",
            display: "flex",
            flexDirection: "column",
            gap: 32,
          }}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  textDecoration: "none",
                  fontSize: "1.6rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--deep-maroon)",
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  fontWeight: 300,
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              style={{
                textDecoration: "none",
                fontSize: "0.8rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                background: "var(--deep-maroon)",
                color: "var(--cream)",
                padding: "14px 32px",
                display: "inline-block",
              }}
            >
              Partner With Us
            </a>
          </li>
        </ul>
        {/* Bottom accent */}
        <div
          style={{
            marginTop: "auto",
            padding: "24px 32px",
            borderTop: "1px solid var(--border)",
          }}
        >
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)" }}>
            B2B Garment Sourcing &amp; Manufacturing — India
          </p>
        </div>
      </div>
    </>
  );
}
