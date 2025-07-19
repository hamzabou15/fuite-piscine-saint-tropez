
// app/layout.tsx
import "./globals.css";
import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "Plombier à Nice – Dépannage rapide et efficace | PlombierNice Expert",
  description:
    "Plombier professionnel à Nice : dépannage en urgence, détection de fuites, débouchage, rénovation de salle de bains. Devis gratuit 7j/7 !",
  keywords: [
    "plombier Nice",
    "urgence plomberie Nice",
    "chauffe-eau Nice",
    "débouchage canalisation Nice",
    "rénovation salle de bains Nice",
  ],
  openGraph: {
    title: "Plombier à Nice – Dépannage rapide et efficace | PlombierNice Expert",
    description:
      "Interventions express à Nice : fuite d’eau, débouchage, chauffe-eau, rénovation de salle de bains. Contactez un artisan local fiable.",
    url: "https://plombiernice-expert.fr/",
    siteName: "PlombierNice Expert",
    images: [
      {
        url: "/images/plombier-nice-hero.webp",
        width: 1200,
        height: 630,
        alt: "Plombier professionnel à Nice",
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

        {children}
        <Footer />
      </body>
    </html>
  );
}
