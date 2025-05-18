import { Dosis } from "next/font/google";
import { Caveat } from "next/font/google";
import { Knewave } from "next/font/google";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
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

// Initialize Pragmatica Extended as a local font
const pragmaticaExtended = localFont({
  src: [
    {
      path: "../fonts/Pragmatica_Extended_ExtraBold.otf", // Adjust the path as needed
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pragmatica-extended",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Beacon Street Digital - Los Angeles-based Digital Designer & Developer",
  description:
    "Beacon Street Digital - Los Angeles-based Digital Designer & Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dosis.variable} ${caveat.variable} ${knewave.variable} ${montserrat.variable} ${pragmaticaExtended.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
