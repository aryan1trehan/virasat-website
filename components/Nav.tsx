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
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between"
      style={{
        padding: scrolled ? "14px 60px" : "22px 60px",
        background: scrolled
          ? "rgba(245,239,228,0.97)"
          : "rgba(245,239,228,0.88)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
        boxShadow: scrolled ? "0 4px 30px rgba(74,14,30,0.08)" : "none",
        transition: "padding 0.4s ease, box-shadow 0.4s ease, background 0.4s ease",
      }}
    >
      {/* Logo */}
      <div
        className="cormorant font-semibold tracking-wider"
        style={{
          fontSize: scrolled ? "1.45rem" : "1.7rem",
          color: "var(--deep-maroon)",
          transition: "font-size 0.4s",
        }}
      >
        Virasat<span style={{ color: "var(--gold)" }}>.</span>
      </div>

      {/* Links */}
      <ul className="hidden md:flex gap-9 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="group relative text-[0.72rem] tracking-[0.2em] uppercase no-underline"
              style={{ color: "var(--charcoal)", transition: "color 0.3s" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--gold)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--charcoal)")
              }
            >
              {l.label}
              <span
                className="absolute left-0 -bottom-0.5 h-px w-full origin-left scale-x-0 group-hover:scale-x-100"
                style={{
                  background: "var(--gold)",
                  transition: "transform 0.35s ease",
                }}
              />
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="text-[0.72rem] tracking-[0.18em] uppercase no-underline px-6 py-2.5"
            style={{
              background: "var(--deep-maroon)",
              color: "var(--cream)",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--burnt-sienna)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--deep-maroon)")
            }
          >
            Partner With Us
          </a>
        </li>
      </ul>
    </nav>
  );
}
