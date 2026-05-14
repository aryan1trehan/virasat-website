"use client";

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
      <div className="cormorant text-[1.4rem]" style={{ color: "var(--cream)" }}>
        Virasat<span style={{ color: "var(--gold)" }}>.</span>
      </div>
      <p
        className="text-[0.68rem] tracking-wider"
        style={{ color: "rgba(245,239,228,0.3)" }}
      >
        © 2025 Virasat Ethnic Wear Pvt. Ltd. · All rights reserved.
      </p>
      <div className="flex gap-6">
        {["Privacy", "Terms", "Catalogue"].map((l) => (
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
