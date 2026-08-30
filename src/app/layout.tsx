import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

// Stand-in for Clear Sans until the licensed files are dropped into
// /public/fonts/clear-sans — see the README there.
const fallbackSans = Inter({
  subsets: ["latin"],
  variable: "--font-fallback-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://areencubs.com"),
  title: "Areen Cubs — Independent Creative Agency",
  description:
    "Areen Cubs is an independent creative agency. We help brands decide what to say, how to look, and what's worth producing — then make it.",
  openGraph: {
    title: "Areen Cubs — Independent Creative Agency",
    description:
      "Strategy, creative and production for brands that want to be remembered, not just seen.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${fallbackSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
