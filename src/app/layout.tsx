import { Dosis } from "next/font/google";
import { Caveat } from "next/font/google";
import { Knewave } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

// Initialize the Dosis font with desired weights
const dosis = Dosis({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dosis",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-caveat",
  display: "swap",
});

const knewave = Knewave({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-knewave",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});
export const metadata: Metadata = {
  title:
    "Beacon Street Digital - Los Angeles-based Web Design & Development, Vieo Creation",
  description:
    "Beacon Street Digital - Web design, development, and video content creation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dosis.variable} ${caveat.variable} ${knewave.variable} ${montserrat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
