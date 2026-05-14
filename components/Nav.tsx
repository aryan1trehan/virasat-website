"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about",      label: "About"     },
  { href: "#categories", label: "Catalogue" },
  { href: "#why",        label: "Why Us"    },
  { href: "#process",    label: "Process"   },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: scrolled ? "14px 60px" : "22px 60px",
        background: scrolled ? "rgba(245,239,228,0.97)" : "rgba(245,239,228,0.88)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
        boxShadow: scrolled ? "0 4px 30px rgba(74,14,30,0.08)" : "none",
        transition: "padding 0.4s ease, box-shadow 0.4s ease, background 0.4s ease",
      }}
    >
      {/* Logo */}
      <div
        className="cormorant font-semibold"
        style={{
          fontSize: scrolled ? "1.45rem" : "1.7rem",
          color: "var(--deep-maroon)",
          letterSpacing: "0.08em",
          transition: "font-size 0.4s",
          flexShrink: 0,
        }}
      >
        Global Trendwave<span style={{ color: "var(--gold)" }}>.</span>
      </div>

      {/* Links */}
      <ul
        style={{
          display: "flex",
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
    </nav>
  );
}
