import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EduKit Pro — Professional Electrical Training Kits",
  description:
    "India's leading manufacturer of professional electrical and electronics training kits for polytechnics, ITIs, and engineering colleges.",
  keywords: [
    "electrical training kit",
    "electronics trainer",
    "lab equipment",
    "PLC trainer",
    "microcontroller kit",
    "engineering education",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-dm antialiased">{children}</body>
    </html>
  );
}
