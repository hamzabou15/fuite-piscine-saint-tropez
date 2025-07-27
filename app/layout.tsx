// app/layout.tsx
import "./globals.css";
import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CTA from "@/components/layout/CTA";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fuite piscine à Nice – Détection et réparation experte | Expert",
  description:
    "Détection de fuite piscine à Nice : intervention rapide, technologie de pointe, réparation efficace. Contactez nos spécialistes en recherche de fuite non destructive.",
  keywords: [
    "fuite piscine Nice",
    "détection fuite piscine Nice",
    "réparation fuite piscine Nice",
    "fuite bassin Nice",
    "expert fuite piscine Nice",
  ],
  openGraph: {
    title: "Fuite piscine à Nice – Détection et réparation experte | Expert",
    description:
      "Problème de fuite piscine à Nice ? Faites appel à notre équipe d'experts. Inspection caméra, test de pression, réparation ciblée. Service rapide et professionnel.",
    url: "https://fuitepiscinenice-expert.fr/recherche-de-fuite-piscine-nice",
    siteName: "Fuite Picine Nice Expert",
    images: [
      {
        url: "/images/fuite-piscine-nice.webp",
        width: 1200,
        height: 630,
        alt: "Détection de fuite piscine à Nice",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={montserrat.variable}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased bg-white text-[#1b1e3f]">
        <Header />
        <CTA />
        {children}
        <Footer />
      </body>
    </html>
  );
}
