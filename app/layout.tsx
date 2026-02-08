import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bright Black - Revenue Design for Games, Platforms & Digital Products",
  description: "Helping partners generate $2B+ in lifetime revenue through strategic monetization and high-performance product design.",
  keywords: "revenue design, monetization, game design, product design, UX, UI, mobile games, digital products",
  authors: [{ name: "Jordan Blackman", url: "https://brightblack.co" }],
  creator: "Jordan Blackman",
  publisher: "Bright Black, LLC",
  icons: {
    icon: "/slit.svg",
    shortcut: "/slit.svg",
    apple: "/slit.svg",
  },
  openGraph: {
    title: "Bright Black - Revenue Design for Games, Platforms & Digital Products",
    description: "Helping partners generate $2B+ in lifetime revenue through strategic monetization and high-performance product design.",
    url: "https://brightblack.co",
    siteName: "Bright Black",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bright Black - Revenue Design",
    description: "Helping partners generate $2B+ in lifetime revenue through strategic monetization and high-performance product design.",
    creator: "@jordanmblackman",
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}