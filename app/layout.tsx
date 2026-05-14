import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Virasat — Ethnic Clothing Wholesale",
  description:
    "Premium ethnic clothing for retailers, boutiques & fashion brands. Sourced from India's finest artisan clusters.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
