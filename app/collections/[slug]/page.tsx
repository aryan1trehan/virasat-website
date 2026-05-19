import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CollectionView from "@/components/CollectionView";

export type Product = {
  id: string;
  name: string;
  code: string;
  fabric: string;
  moq: string;
  image?: string;
};

export type Collection = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  bg: string;
  icon: string;
  sub: string;
  products: Product[];
};

export const collections: Collection[] = [
  {
    slug: "ethnic-womenswear",
    name: "Ethnic Womenswear",
    tagline: "Kurtas · Anarkalis · Festive Sets",
    sub: "India's heritage silhouettes, precision-crafted for global retail.",
    description:
      "From hand-block-printed kurtas to heavily embroidered anarkalis and co-ord festive sets — our ethnic womenswear range bridges traditional Indian craft with contemporary retail demand. Available in a wide range of fabrics, prints, and embellishments with flexible MOQs.",
    bg: "#3A0D16",
    icon: "👘",
    products: [],
  },
  {
    slug: "woven-garments",
    name: "Woven Garments",
    tagline: "Suiting · Shirting · Premium Blends",
    sub: "Structured, polished, export-grade wovens for every market.",
    description:
      "Our woven garment range covers formal suiting, premium dress shirting, and specialty blended fabrics tailored for European, Middle Eastern, and North American buyers. Consistent construction, precise sizing, and GOTS-compliant fabric sourcing.",
    bg: "#4A1A35",
    icon: "🧵",
    products: [],
  },
  {
    slug: "western-garments",
    name: "Western Garments",
    tagline: "Casual · Resort · Loungewear",
    sub: "Contemporary silhouettes with artisan-quality finishing.",
    description:
      "Casualwear, resort collections, and loungewear designed for fast-fashion retailers and premium lifestyle brands. Lightweight fabrics, trend-forward cuts, and private-label capabilities available from 50 pieces per style.",
    bg: "#1E3A4A",
    icon: "👗",
    products: [],
  },
  {
    slug: "home-textiles",
    name: "Home Textiles",
    tagline: "Bedding · Quilts · Table Linen",
    sub: "GOTS-certified home textiles built for hospitality and retail.",
    description:
      "Bed sets, quilts, duvets, cushion covers, and table linen crafted from organic and recycled fibres. ICMED 13485 and GOTS certified. Suitable for hospitality chains, specialty retail, and direct-to-consumer brands.",
    bg: "#2A3A1A",
    icon: "🛏️",
    products: [],
  },
  {
    slug: "home-decor",
    name: "Home Décor",
    tagline: "Cushions · Throws · Soft Furnishings",
    sub: "Artisan-crafted soft furnishings for discerning interiors.",
    description:
      "Hand-crafted cushion covers, throws, wall hangings, and decorative soft furnishings inspired by Indian textile traditions. Block print, kantha stitch, and embroidery finishes. Available in custom colorways and packaging for retail and hospitality.",
    bg: "#3A2A10",
    icon: "🏡",
    products: [],
  },
];

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const col = collections.find((c) => c.slug === slug);
  if (!col) return {};
  return {
    title: `${col.name} — Global Trendwave`,
    description: col.description,
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const col = collections.find((c) => c.slug === slug);
  if (!col) notFound();
  return <CollectionView collection={col} />;
}
