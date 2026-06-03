"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 md:gap-4 items-center text-center md:text-left px-6 py-8 md:px-20"
      style={{
        background: "#0f0508",
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
    </footer>
  );
}
