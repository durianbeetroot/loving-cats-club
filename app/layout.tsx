import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Limelight } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const limelight = Inter({
  variable: "--font-limelight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Loving Cats Club",
  description: "Pet platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`
      ${geistSans.variable}
      ${geistMono.variable}
      ${inter.variable}
      ${limelight.variable}
      `}
    >
      <body>{children}</body>
    </html>
  );
}
