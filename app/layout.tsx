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
  title: "Virasat — Ethnic Clothing Wholesale",
  description:
    "Premium ethnic clothing for retailers, boutiques & fashion brands. Sourced from India's finest artisan clusters.",
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
