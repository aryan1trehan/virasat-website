"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 1400);
    return () => clearTimeout(t);
  }, []);

  if (hidden) return null;

  return (
    <div
      className="fixed inset-0 z-[9990] flex flex-col items-center justify-center gap-5 transition-opacity duration-700"
      style={{ background: "var(--deep-maroon)" }}
    >
      <div
        className="cormorant text-5xl font-light tracking-widest"
        style={{
          color: "var(--cream)",
          opacity: 0,
          animation: "loaderFadeIn 0.6s ease 0.2s forwards",
        }}
      >
        Virasat<span style={{ color: "var(--gold)" }}>.</span>
      </div>
      <div
        style={{
          height: 1,
          width: 0,
          background: "var(--gold)",
          animation: "loaderLine 1s ease 0.5s forwards",
        }}
      />
    </div>
  );
}
