import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "700"],
});

const baseUrl = "https://tuwtl.com";
const imageUrl = `${baseUrl}/tuwtl.jpeg`;

export const metadata: Metadata = {
  title: "Tuwtl",
  description: "Choose Wed, get $TUWTL",
  openGraph: {
    type: "website",
    url: baseUrl,
    title: "Tuwtl",
    description: "Choose Wed, get $TUWTL",
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: "Tuwtl",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tuwtl",
    description: "Choose Wed, get $TUWTL",
    images: [imageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>{children}</body>
    </html>
  );
}
