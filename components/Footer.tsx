"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="flex justify-between items-center"
      style={{
        background: "#0f0508",
        padding: "40px 80px",
        borderTop: "1px solid rgba(201,147,62,0.12)",
      }}
    >
      <Image
        src="/logo.png"
        alt="Global Trendwave"
        height={40}
        width={160}
        style={{ objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.85 }}
      />
      <p
        className="text-[0.68rem] tracking-wider"
        style={{ color: "rgba(245,239,228,0.3)" }}
      >
        © 2025 Global Trendwave Pvt. Ltd. · All rights reserved.
      </p>
      <div className="flex gap-6">
        {["Privacy", "Terms", "Website"].map((l) => (
          <a
            key={l}
            href="#"
            className="text-[0.65rem] tracking-[0.15em] uppercase no-underline"
            style={{ color: "rgba(245,239,228,0.4)", transition: "color 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,239,228,0.4)")}
          >
            {l}
          </a>
        ))}
      </div>
    </footer>
  );
}
