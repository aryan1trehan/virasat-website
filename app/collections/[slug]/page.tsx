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
  images?: string[];
};

export type Collection = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  bg: string;
  icon: string;
  sub: string;
  heroImage?: string;
  products: Product[];
};

export const collections: Collection[] = [
  {
    slug: "ethnic-womenswear",
    name: "Ethnic Womenswear",
    tagline: "",
    sub: "India's heritage silhouettes, precision-crafted for global retail.",
    description:
      "From hand-block-printed kurtas to heavily embroidered anarkalis and co-ord festive sets — our ethnic womenswear range bridges traditional Indian craft with contemporary retail demand. Available in a wide range of fabrics, prints, and embellishments with flexible MOQs.",
    bg: "#3A0D16",
    icon: "👘",
    heroImage: "/ew-4-img1.jpg",
    products: [
      { id: "ew-7",  name: "Teal Blue Embroidered Kurta Set",  code: "GTW-EW-007", fabric: "Cotton",       moq: "100 per colour", image: "/ew-7-img1.jpg",  images: ["/ew-7-img1.jpg","/ew-7-img2.jpg","/ew-7-img3.jpg","/ew-7-img4.jpg"] },
      { id: "ew-24", name: "Maroon Embroidered Kurta Set",   code: "GTW-EW-024", fabric: "Mul Chanderi", moq: "100 per colour", image: "/ew-24-img1.jpg", images: ["/ew-24-img1.jpg","/ew-24-img2.jpg","/ew-24-img3.jpg","/ew-24-img4.jpg","/ew-24-img5.jpg","/ew-24-img6.jpg","/ew-24-img7.jpg","/ew-24-img8.jpg","/ew-24-img9.jpg","/ew-24-img10.jpg"] },
      { id: "ew-2",  name: "Maroon Printed Co-Ord Set",      code: "GTW-EW-002", fabric: "Muslin",       moq: "100 per colour", image: "/ew-2-img1.jpg",  images: ["/ew-2-img1.jpg","/ew-2-img2.jpg","/ew-2-img3.jpg","/ew-2-img4.jpg","/ew-2-img5.jpg"] },
      { id: "ew-18", name: "Brown Embroidered Kurta Set",    code: "GTW-EW-018", fabric: "Cotton",       moq: "100 per colour", image: "/ew-18-img1.jpg", images: ["/ew-18-img1.jpg","/ew-18-img2.jpg","/ew-18-img3.jpg","/ew-18-img4.jpg","/ew-18-img5.jpg","/ew-18-img6.jpg","/ew-18-img7.jpg","/ew-18-img8.jpg"] },
      { id: "ew-4",  name: "Maroon Embroidered Kurta Set",   code: "GTW-EW-004", fabric: "Cotton",       moq: "100 per colour", image: "/ew-4-img1.jpg",  images: ["/ew-4-img1.jpg","/ew-4-img2.jpg","/ew-4-img3.jpg","/ew-4-img4.jpg","/ew-4-img5.jpg","/ew-4-img6.jpg"] },
      { id: "ew-12", name: "Brown Embroidered Kurta Set",    code: "GTW-EW-012", fabric: "Mul Chanderi", moq: "100 per colour", image: "/ew-12-img1.jpg", images: ["/ew-12-img1.jpg","/ew-12-img2.jpg","/ew-12-img3.jpg","/ew-12-img4.jpg"] },
      { id: "ew-25", name: "Red Printed Kurta Set",          code: "GTW-EW-025", fabric: "Cotton",       moq: "100 per colour", image: "/ew-25-img1.jpg", images: ["/ew-25-img1.jpg","/ew-25-img2.jpg","/ew-25-img3.jpg","/ew-25-img4.jpg","/ew-25-img5.jpg","/ew-25-img6.jpg","/ew-25-img7.jpg","/ew-25-img8.jpg","/ew-25-img9.jpg","/ew-25-img10.jpg"] },
      { id: "ew-1",  name: "Mustard Embroidered Kurta Set",  code: "GTW-EW-001", fabric: "Cotton",       moq: "100 per colour", image: "/ew-1-img1.jpg",  images: ["/ew-1-img1.jpg","/ew-1-img2.jpg","/ew-1-img3.jpg","/ew-1-img4.jpg","/ew-1-img5.jpg","/ew-1-img6.jpg"] },
      { id: "ew-9",  name: "Terracotta Embroidered Kurta Set", code: "GTW-EW-009", fabric: "Cotton",     moq: "100 per colour", image: "/ew-9-img1.jpg",  images: ["/ew-9-img1.jpg","/ew-9-img2.jpg","/ew-9-img3.jpg","/ew-9-img4.jpg","/ew-9-img5.jpg","/ew-9-img6.jpg","/ew-9-img7.jpg"] },
      { id: "ew-19", name: "Maroon Embroidered Kurta Set",   code: "GTW-EW-019", fabric: "Cotton",       moq: "100 per colour", image: "/ew-19-img1.jpg", images: ["/ew-19-img1.jpg","/ew-19-img2.jpg","/ew-19-img3.jpg","/ew-19-img4.jpg","/ew-19-img5.jpg"] },
      { id: "ew-5",  name: "Teal Blue Embroidered Kurta Set", code: "GTW-EW-005", fabric: "Cotton",      moq: "100 per colour", image: "/ew-5-img1.jpg",  images: ["/ew-5-img1.jpg","/ew-5-img2.jpg","/ew-5-img3.jpg","/ew-5-img4.jpg","/ew-5-img5.jpg","/ew-5-img6.jpg","/ew-5-img7.jpg"] },
      { id: "ew-14", name: "Lime Embroidered Kurta Set",     code: "GTW-EW-014", fabric: "Cotton",       moq: "100 per colour", image: "/ew-14-img1.jpg", images: ["/ew-14-img1.jpg","/ew-14-img2.jpg","/ew-14-img3.jpg","/ew-14-img4.jpg"] },
      { id: "ew-26", name: "Terracotta Embroidered Kurta Set", code: "GTW-EW-026", fabric: "Cotton",     moq: "100 per colour", image: "/ew-26-img1.jpg", images: ["/ew-26-img1.jpg","/ew-26-img2.jpg","/ew-26-img3.jpg","/ew-26-img4.jpg","/ew-26-img5.jpg","/ew-26-img6.jpg","/ew-26-img7.jpg","/ew-26-img8.jpg"] },
      { id: "ew-3",  name: "Rust Embroidered Kurta Set",     code: "GTW-EW-003", fabric: "Cotton",       moq: "100 per colour", image: "/ew-3-img1.jpg",  images: ["/ew-3-img1.jpg","/ew-3-img2.jpg","/ew-3-img3.jpg","/ew-3-img4.jpg","/ew-3-img5.jpg","/ew-3-img6.jpg","/ew-3-img7.jpg"] },
      { id: "ew-11", name: "Chiku Embroidered Kurta Set",    code: "GTW-EW-011", fabric: "Mul Chanderi", moq: "100 per colour", image: "/ew-11-img1.jpg", images: ["/ew-11-img1.jpg","/ew-11-img2.jpg","/ew-11-img3.jpg","/ew-11-img4.jpg","/ew-11-img5.jpg"] },
      { id: "ew-20", name: "Black Embroidered Kurta Set",    code: "GTW-EW-020", fabric: "Cotton",       moq: "100 per colour", image: "/ew-20-img1.jpg", images: ["/ew-20-img1.jpg","/ew-20-img2.jpg","/ew-20-img3.jpg","/ew-20-img4.jpg","/ew-20-img5.jpg","/ew-20-img6.jpg"] },
      { id: "ew-6",  name: "Terracotta Embroidered Kurta Set", code: "GTW-EW-006", fabric: "Cotton",     moq: "100 per colour", image: "/ew-6-img1.jpg",  images: ["/ew-6-img1.jpg","/ew-6-img2.jpg","/ew-6-img3.jpg","/ew-6-img4.jpg"] },
      { id: "ew-13", name: "Teal Blue Embroidered Kurta Set", code: "GTW-EW-013", fabric: "Cotton",      moq: "100 per colour", image: "/ew-13-img1.jpg", images: ["/ew-13-img1.jpg","/ew-13-img2.jpg","/ew-13-img3.jpg","/ew-13-img4.jpg"] },
      { id: "ew-8",  name: "Maroon Embroidered Kurta Set",   code: "GTW-EW-008", fabric: "Mul Chanderi", moq: "100 per colour", image: "/ew-8-img1.jpg",  images: ["/ew-8-img1.jpg","/ew-8-img2.jpg","/ew-8-img3.jpg","/ew-8-img4.jpg","/ew-8-img5.jpg"] },
      { id: "ew-21", name: "Teal Blue Mirror Work Kurta Set", code: "GTW-EW-021", fabric: "Cotton",      moq: "100 per colour", image: "/ew-21-img1.jpg", images: ["/ew-21-img1.jpg","/ew-21-img2.jpg","/ew-21-img3.jpg","/ew-21-img4.jpg"] },
      { id: "ew-10", name: "Terracotta Embroidered Kurta Set", code: "GTW-EW-010", fabric: "Cotton",     moq: "100 per colour", image: "/ew-10-img1.jpg", images: ["/ew-10-img1.jpg","/ew-10-img2.jpg","/ew-10-img3.jpg","/ew-10-img4.jpg","/ew-10-img5.jpg","/ew-10-img6.jpg","/ew-10-img7.jpg"] },
      { id: "ew-16", name: "Terracotta Embroidered Kurta Set", code: "GTW-EW-016", fabric: "Cotton",     moq: "100 per colour", image: "/ew-16-img1.jpg", images: ["/ew-16-img1.jpg","/ew-16-img2.jpg"] },
      { id: "ew-22", name: "Maroon Embroidered Kurta Set",   code: "GTW-EW-022", fabric: "Cotton",       moq: "100 per colour", image: "/ew-22-img1.jpg", images: ["/ew-22-img1.jpg","/ew-22-img2.jpg","/ew-22-img3.jpg"] },
      { id: "ew-15", name: "Chiku Embroidered Kurta Set",    code: "GTW-EW-015", fabric: "Mul Chanderi", moq: "100 per colour", image: "/ew-15-img1.jpg", images: ["/ew-15-img1.jpg","/ew-15-img2.jpg"] },
      { id: "ew-17", name: "Lime Embroidered Kurta Set",     code: "GTW-EW-017", fabric: "Mul Chanderi", moq: "100 per colour", image: "/ew-17-img1.jpg", images: ["/ew-17-img1.jpg","/ew-17-img2.jpg"] },
      { id: "ew-23", name: "Brown Embroidered Kurta Set",    code: "GTW-EW-023", fabric: "Cotton",       moq: "100 per colour", image: "/ew-23-img1.jpg", images: ["/ew-23-img1.jpg","/ew-23-img2.jpg"] },
    ],
  },
  {
    slug: "coord-sets",
    name: "Co-ord Sets",
    tagline: "",
    sub: "Perfectly matched sets crafted for modern retail demand.",
    description:
      "Curated co-ord sets blending traditional Indian craftsmanship with contemporary silhouettes. From festive fusion sets to everyday matching separates — available in a wide range of fabrics, prints, and embellishments.",
    bg: "#4A1A35",
    icon: "🧵",
    heroImage: "/cs-1-img1.jpg",
    products: [
      { id: "cs-3",  name: "Magenta Lazer-Cut Co-ord Set",      code: "GTW-CS-003", fabric: "Cotton", moq: "100 per colour", image: "/cs-3-img1.jpg",  images: ["/cs-3-img1.jpg","/cs-3-img2.jpg","/cs-3-img3.jpg","/cs-3-img4.jpg"] },
      { id: "cs-10", name: "Black Embroidered Co-Ord Set",    code: "GTW-CS-010", fabric: "Cotton", moq: "100 per colour", image: "/cs-10-img1.jpg", images: ["/cs-10-img1.jpg","/cs-10-img2.jpg","/cs-10-img3.jpg","/cs-10-img4.jpg","/cs-10-img5.jpg","/cs-10-img6.jpg","/cs-10-img7.jpg","/cs-10-img8.jpg"] },
      { id: "cs-6",  name: "Purple Embroidered Co-Ord Set",   code: "GTW-CS-006", fabric: "Cotton", moq: "100 per colour", image: "/cs-6-img1.jpg",  images: ["/cs-6-img1.jpg","/cs-6-img2.jpg","/cs-6-img3.jpg","/cs-6-img4.jpg","/cs-6-img5.jpg","/cs-6-img6.jpg","/cs-6-img7.jpg"] },
      { id: "cs-15", name: "Black Embroidered Co-Ord Set",    code: "GTW-CS-015", fabric: "Cotton", moq: "100 per colour", image: "/cs-15-img1.jpg", images: ["/cs-15-img1.jpg","/cs-15-img2.jpg","/cs-15-img3.jpg","/cs-15-img4.jpg","/cs-15-img5.jpg","/cs-15-img6.jpg","/cs-15-img7.jpg","/cs-15-img8.jpg"] },
      { id: "cs-1",  name: "Black Lazer-Cut Co-Ord Set",      code: "GTW-CS-001", fabric: "Cotton", moq: "100 per colour", image: "/cs-1-img1.jpg",  images: ["/cs-1-img1.jpg","/cs-1-img2.jpg","/cs-1-img3.jpg"] },
      { id: "cs-11", name: "Teal Blue Embroidered Co-Ord Set", code: "GTW-CS-011", fabric: "Cotton", moq: "100 per colour", image: "/cs-11-img1.jpg", images: ["/cs-11-img1.jpg","/cs-11-img2.jpg","/cs-11-img3.jpg","/cs-11-img4.jpg","/cs-11-img5.jpg","/cs-11-img6.jpg","/cs-11-img7.jpg","/cs-11-img8.jpg","/cs-11-img9.jpg"] },
      { id: "cs-4",  name: "Lime Lazer-Cut Work Co-ord Set",  code: "GTW-CS-004", fabric: "Cotton", moq: "100 per colour", image: "/cs-4-img1.jpg",  images: ["/cs-4-img1.jpg","/cs-4-img2.jpg","/cs-4-img3.jpg"] },
      { id: "cs-16", name: "Terracotta Embroidered Co-Ord Set", code: "GTW-CS-016", fabric: "Cotton", moq: "100 per colour", image: "/cs-16-img1.jpg", images: ["/cs-16-img1.jpg","/cs-16-img2.jpg","/cs-16-img3.jpg","/cs-16-img4.jpg","/cs-16-img5.jpg","/cs-16-img6.jpg","/cs-16-img7.jpg","/cs-16-img8.jpg"] },
      { id: "cs-9",  name: "Terracotta Embroidered Co-Ord Set", code: "GTW-CS-009", fabric: "Cotton", moq: "100 per colour", image: "/cs-9-img1.jpg",  images: ["/cs-9-img1.jpg","/cs-9-img2.jpg","/cs-9-img3.jpg","/cs-9-img4.jpg","/cs-9-img5.jpg","/cs-9-img6.jpg","/cs-9-img7.jpg"] },
      { id: "cs-2",  name: "Brown Lazer-Cut Co-Ord Set",      code: "GTW-CS-002", fabric: "Cotton", moq: "100 per colour", image: "/cs-2-img1.jpg",  images: ["/cs-2-img1.jpg","/cs-2-img2.jpg"] },
      { id: "cs-12", name: "Teal Blue Embroidered Co-Ord Set", code: "GTW-CS-012", fabric: "Cotton", moq: "100 per colour", image: "/cs-12-img1.jpg", images: ["/cs-12-img1.jpg","/cs-12-img2.jpg","/cs-12-img3.jpg","/cs-12-img4.jpg","/cs-12-img5.jpg"] },
      { id: "cs-7",  name: "Teal Blue Embroidered Co-Ord Set", code: "GTW-CS-007", fabric: "Cotton", moq: "100 per colour", image: "/cs-7-img1.jpg",  images: ["/cs-7-img1.jpg","/cs-7-img2.jpg","/cs-7-img3.jpg","/cs-7-img4.jpg","/cs-7-img5.jpg","/cs-7-img6.jpg"] },
      { id: "cs-5",  name: "Brown Embroidered Co-Ord Set",    code: "GTW-CS-005", fabric: "Cotton", moq: "100 per colour", image: "/cs-5-img1.jpg",  images: ["/cs-5-img1.jpg","/cs-5-img2.jpg","/cs-5-img3.jpg","/cs-5-img4.jpg"] },
      { id: "cs-13", name: "Purple Embroidered Co-Ord Set",   code: "GTW-CS-013", fabric: "Cotton", moq: "100 per colour", image: "/cs-13-img1.jpg", images: ["/cs-13-img1.jpg","/cs-13-img2.jpg","/cs-13-img3.jpg"] },
      { id: "cs-14", name: "Teal Blue Printed Co-Ord Set",    code: "GTW-CS-014", fabric: "Cotton", moq: "100 per colour", image: "/cs-14-img1.jpg", images: ["/cs-14-img1.jpg","/cs-14-img2.jpg"] },
    ],
  },
  {
    slug: "tops",
    name: "Tops",
    tagline: "Casual · Resort · Loungewear",
    sub: "Contemporary tops with artisan-quality finishing.",
    description:
      "Casualwear tops, resort styles, and loungewear designed for fast-fashion retailers and premium lifestyle brands. Lightweight fabrics, trend-forward cuts, and private-label capabilities available.",
    bg: "#1E3A4A",
    icon: "👗",
    heroImage: "/dp-1-img3.jpg",
    products: [],
  },
  {
    slug: "dresses",
    name: "Dresses",
    tagline: "",
    sub: "Elegant dresses for every occasion and market.",
    description:
      "From everyday casual dresses to formal and occasion wear — our dress range offers versatile silhouettes crafted with quality fabrics and precise construction for global retail buyers.",
    bg: "#2A3A1A",
    icon: "👒",
    heroImage: "/dp-3-img3.jpg",
    products: [
      { id: "dp-1", name: "Denim Dress",         code: "GTW-DR-001", fabric: "Denim",  moq: "100 per colour", image: "/dp-1-img1.jpg", images: ["/dp-1-img1.jpg","/dp-1-img2.jpg","/dp-1-img3.jpg","/dp-1-img4.jpg","/dp-1-img5.jpg"] },
      { id: "dp-2", name: "Denim Midi Dress",    code: "GTW-DR-002", fabric: "Denim",  moq: "100 per colour", image: "/dp-2-img1.jpg", images: ["/dp-2-img1.jpg","/dp-2-img2.jpg","/dp-2-img3.jpg"] },
      { id: "dp-3", name: "Cotton Printed Dress", code: "GTW-DR-003", fabric: "Cotton", moq: "100 per colour", image: "/dp-3-img1.jpg", images: ["/dp-3-img1.jpg","/dp-3-img2.jpg","/dp-3-img3.jpg","/dp-3-img4.jpg","/dp-3-img5.jpg","/dp-3-img6.jpg","/dp-3-img7.jpg"] },
      { id: "dp-4", name: "Cotton Printed Dress", code: "GTW-DR-004", fabric: "Cotton", moq: "100 per colour", image: "/dp-4-img1.jpg", images: ["/dp-4-img1.jpg","/dp-4-img2.jpg","/dp-4-img3.jpg","/dp-4-img4.jpg","/dp-4-img5.jpg","/dp-4-img6.jpg","/dp-4-img7.jpg","/dp-4-img8.jpg","/dp-4-img9.jpg","/dp-4-img10.jpg","/dp-4-img11.jpg"] },
    ],
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
