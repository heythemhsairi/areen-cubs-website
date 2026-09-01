import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import "@fontsource/clear-sans/400.css";
import "@fontsource/clear-sans/500.css";
import "@fontsource/clear-sans/700.css";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://areen-cubs-website.vercel.app"),
  icons: {
    icon: "/brand/areen-cubs-logo-mark.svg",
  },
  title: {
    default: "Areen Cubs — Independent Creative Agency",
    template: "%s — Areen Cubs",
  },
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
      className={instrumentSerif.variable}
    >
      <body>
        <div
          data-scroll-sentinel
          aria-hidden="true"
          className="absolute left-0 top-0 h-px w-px"
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
