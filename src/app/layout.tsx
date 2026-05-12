import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LM Solutions — Custom Websites, Apps, AI & Software for Growing Teams",
  description:
    "We design and ship custom digital products for SMEs and startups — websites, mobile apps, AI automation, and bespoke software. Fast turnaround, transparent pricing, code you own.",
  openGraph: {
    title: "LM Solutions — Custom Websites, Apps, AI & Software for Growing Teams",
    description:
      "We design and ship custom digital products for SMEs and startups — websites, mobile apps, AI automation, and bespoke software. Fast turnaround, transparent pricing, code you own.",
    type: "website",
    locale: "en_SG",
    siteName: "LM Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "LM Solutions — Custom Websites, Apps, AI & Software for Growing Teams",
    description:
      "We design and ship custom digital products for SMEs and startups — websites, mobile apps, AI automation, and bespoke software. Fast turnaround, transparent pricing, code you own.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
