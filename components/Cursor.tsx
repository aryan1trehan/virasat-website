"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const posRef  = useRef({ x: 0, y: 0, rx: 0, ry: 0 });
  const rafRef  = useRef<number | null>(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMove = (e: MouseEvent) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;
      dot.style.left = e.clientX + "px";
      dot.style.top  = e.clientY + "px";
      if (!rafRef.current) rafRef.current = requestAnimationFrame(animate);
    };

    const animate = () => {
      const { x, y, rx, ry } = posRef.current;
      posRef.current.rx += (x - rx) * 0.12;
      posRef.current.ry += (y - ry) * 0.12;
      ring.style.left = posRef.current.rx + "px";
      ring.style.top  = posRef.current.ry + "px";
      rafRef.current = requestAnimationFrame(animate);
    };

    const addHover = () => ring.classList.add("scale-150");
    const rmHover  = () => ring.classList.remove("scale-150");

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button, [data-cursor-hover]").forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", rmHover);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
        style={{ background: "var(--gold)" }}
      />
      <div
        ref={ringRef}
        className="fixed z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border transition-all duration-300"
        style={{ borderColor: "rgba(201,147,62,0.6)" }}
      />
    </>
  );
}
