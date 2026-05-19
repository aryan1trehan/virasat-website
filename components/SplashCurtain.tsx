"use client";

/**
 * SplashCurtain — Global Trendwave intro animation.
 *
 * Two velvet curtains part to reveal the brand wordmark, then the overlay
 * fades and removes itself. Shows once per session by default (sessionStorage
 * gate); pass `alwaysShow` to disable.
 *
 * Drop into app/layout.tsx (or page.tsx) like:
 *
 *   import SplashCurtain from "@/components/SplashCurtain";
 *
 *   export default function RootLayout({ children }) {
 *     return (
 *       <html lang="en">
 *         <body>
 *           <SplashCurtain />
 *           {children}
 *         </body>
 *       </html>
 *     );
 *   }
 */

import { useEffect, useState } from "react";
import styles from "./SplashCurtain.module.css";

type Props = {
  /** Brand text. Last word renders italic + gold. */
  brandName?: string;
  /** Headline shown below wordmark. */
  tagline?: string;
  /** Italic subline under tagline. */
  subline?: string;
  /** Force-show every visit (default: once per browser session). */
  alwaysShow?: boolean;
  /** Total ms before overlay fades out. */
  totalDuration?: number;
};

const SESSION_KEY = "gtw_splash_seen";

export default function SplashCurtain({
  brandName = "Global Trendwave",
  tagline = "Wave Into the Future of Sourcing",
  subline = "Crafted in India · Trusted Worldwide",
  alwaysShow = false,
  totalDuration = 4200,
}: Props) {
  const [mounted, setMounted] = useState(false);
  const [fading, setFading] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!alwaysShow && sessionStorage.getItem(SESSION_KEY) === "1") {
      setVisible(false);
      return;
    }
    // Lock scroll while splash is up
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Kick off animation on next frame
    requestAnimationFrame(() => setMounted(true));

    const fadeAt = totalDuration - 600;
    const removeAt = totalDuration;
    const t1 = window.setTimeout(() => setFading(true), fadeAt);
    const t2 = window.setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = prevOverflow;
      if (!alwaysShow) sessionStorage.setItem(SESSION_KEY, "1");
    }, removeAt);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      document.body.style.overflow = prevOverflow;
    };
  }, [alwaysShow, totalDuration]);

  if (!visible) return null;

  // Split brand name so the last word can be italic + gold.
  const parts = brandName.trim().split(/\s+/);
  const last = parts.pop() ?? "";
  const first = parts.join(" ");

  return (
    <div
      className={[
        styles.stage,
        mounted ? styles.play : "",
        fading ? styles.fade : "",
      ].join(" ")}
      role="presentation"
      aria-hidden="true"
    >
      {/* Reveal content (behind curtains) */}
      <div className={styles.reveal}>
        <div className={styles.wordmark}>
          {first && <span>{first} </span>}
          <span className={styles.italic}>{last}</span>
        </div>
        <div className={styles.ornament}>
          <span className={styles.line} />
          <span className={styles.diamond} />
          <span className={styles.line} />
        </div>
        <div className={styles.tagline}>{tagline}</div>
        <div className={styles.small}>{subline}</div>
      </div>

      {/* Light beams */}
      <div className={`${styles.beam} ${styles.beamL}`} />
      <div className={`${styles.beam} ${styles.beamR}`} />

      {/* Curtains */}
      <div className={`${styles.curtain} ${styles.left}`} />
      <div className={`${styles.curtain} ${styles.right}`} />

      {/* Top valance */}
      <div className={styles.valance}>
        <div className={styles.scallops} />
        <div className={styles.beads} />
      </div>

      {/* Gold frame */}
      <div className={styles.frame} />
      <div className={styles.frameInner} />
    </div>
  );
}
