
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

export const metadata: Metadata = {
  title: "Plombier Nice Expert | Dépannage rapide 24h/7j",
  description:
    "Besoin d’un plombier à Nice ? Intervention rapide 24h/7j pour fuites, débouchages, chauffe-eau. Devis gratuit. Plombier Nice Expert est là pour vous aider !",
  metadataBase: new URL("https://plombiernice-expert.fr"),
  keywords: [
    "Plombier Nice",
    "Dépannage plomberie Nice",
    "Urgence fuite d’eau Nice",
    "Installation chauffe-eau Nice",
    "Plomberie 24h/24 Nice",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Plombier Nice Expert | Dépannage rapide 24h/7j",
    description:
      "Fuite d’eau ? Chauffe-eau en panne ? Plombier Nice Expert intervient rapidement pour tous vos besoins en plomberie à Nice et alentours.",
    url: "https://plombiernice-expert.fr",
    siteName: "Plombier Nice Expert",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plombier Nice Expert",
    description:
      "Intervention rapide en plomberie à Nice. Fuites, débouchages, chauffe-eau… Devis gratuit 24h/24.",
  },
  themeColor: "#f25000",
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
