import type { Metadata } from "next";
import { Cormorant_Garamond, Josefin_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  variable: "--font-josefin",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Global Trendwave Pvt. Ltd. — Wholesale Garment Sourcing & Ethical Textile Manufacturing India",
  description:
    "Global Trendwave Pvt. Ltd. is India's premier B2B garment sourcing and manufacturing company. SEDEX, GOTS & BSCI certified. Ethnic wear, woven garments, home textiles & custom OEM — export-ready worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${josefin.variable}`}>
      <body>{children}</body>
    </html>
  );
}
