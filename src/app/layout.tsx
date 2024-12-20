import type { Metadata } from "next";
import { Urbanist, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/landing/ui/Navbar";
import Footer from "./components/landing/ui/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-urbanist",
});

// Konfigurasi font Poppins
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Anugrah Niaga Mandiri",
    default: "Anugrah Niaga Mandiri",
  },
  description:
    "PT. Anugrah Niaga Mandiri menyediakan solusi lengkap untuk kebutuhan peralatan laboratorium berkualitas tinggi di Indonesia.",
  keywords: [
    "peralatan laboratorium",
    "alat laboratorium",
    "distributor laboratorium",
    "agen laboratorium",
    "suplier laboratorium",
    "distributor alat laboratorium",
    "agen alat laboratorium",
    "suplier alat laboratorium",
  ],
  // authors: [{ name: "Nama Anda" }],
  openGraph: {
    title: "Anugrah Niaga Mandiri",
    description: "Deskripsi untuk social media",
    url: "https://website-anda.com",
    siteName: "Nama Website",
    images: [
      {
        url: "https://website-anda.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.jpeg" type="image/jpeg" />
      </head>
      <body className={`${urbanist.variable} ${poppins.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
