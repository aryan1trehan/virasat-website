import type { Metadata } from "next";
import { Cormorant_Garamond, Josefin_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SplashCurtain from "@/components/SplashCurtain";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
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
  metadataBase: new URL("https://www.globaltrendwave.in"),
  title: "Global Trendwave Pvt. Ltd. — Wholesale Garment Sourcing & Ethical Textile Manufacturing India",
  description:
    "Global Trendwave Pvt. Ltd. is India's premier B2B garment sourcing and manufacturing company. SEDEX, GOTS & BSCI certified. Ethnic wear, woven garments, home textiles & custom OEM — export-ready worldwide.",
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png",   sizes: "192x192", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    shortcut: "/favicon.ico",
  },
  openGraph: {
    siteName: "Global Trendwave",
    url: "https://www.globaltrendwave.in",
    type: "website",
    images: ["/icon-192.png"],
  },
  alternates: {
    canonical: "https://www.globaltrendwave.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${josefin.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E6L0VHBPQ5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E6L0VHBPQ5');
          `}
        </Script>
      </head>
      <body>
        <SplashCurtain />
        {children}
      </body>
    </html>
  );
}
