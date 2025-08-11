import Head from "next/head";
import PlumbingIntro from "@/components/home/LeakPoolIntro";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/services/ContactSection";
import Services from "@/components/services/ServicesSection";
import HeroSection from "@/components/HeroSection";

export const metadata = {
  title: "Recherche fuite piscine à Saint-Tropez | Détection non destructive",
  description:
    "Expert local à Saint-Tropez pour la recherche de fuite piscine (liner, canalisation, skimmer). Devis sous 24h, rapport sous 48h, sans vider le bassin, interventions sur Ramatuelle, Gassin, Pampelonne.",
  openGraph: {
    title: "Recherche fuite piscine à Saint-Tropez | Intervention rapide & sans casse",
    description:
      "Spécialiste Saint-Tropez – détection précise de fuite piscine sans casser votre bassin. Devis 24h, rapport 48h. Contactez +33 7 56 93 52 00.",
    url: "https://fuitepiscinesainttropez.fr/services/recherche-fuite-piscine-saint-tropez",
    siteName: "Fuite Piscine Expert Saint-Tropez",
    images: [
      {
        url: "https://fuitepiscinesainttropez.fr/images/fuite-piscine-st-tropez.webp",
        width: 1200,
        height: 630,
        alt: "Recherche fuite piscine Saint-Tropez",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Recherche fuite piscine à Saint-Tropez – Devis 24 h & rapport 48 h",
    description:
      "Détection de fuite piscine à Saint-Tropez, sans vider le bassin. Devis gratuit sous 24h, rapport technique sous 48h.",
    images: ["https://fuitepiscinesainttropez.fr/images/fuite-piscine-st-tropez.webp"],
  },
};

export default function PageSaintTropez() {
  const ldData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Fuite Piscine Expert – Saint-Tropez",
    url: "https://fuitepiscinesainttropez.fr/services/recherche-fuite-piscine-saint-tropez",
    telephone: "+33756935200",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Place des Lices",
      addressLocality: "Saint-Tropez",
      postalCode: "83990",
      addressCountry: "FR",
    },
    areaServed: "Golfe de Saint-Tropez, Ramatuelle, Gassin, Sainte-Maxime",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    image: "https://fuitepiscinesainttropez.fr/images/fuite-piscine-st-tropez.webp",
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldData) }}
        />
      </Head>
      <main className="bg-white text-gray-900   mx-auto">
        <HeroSection subtitle={""} title="Recherche de fuite piscine à Saint-Tropez – Service local, rapide et non destructif" />
        <section className="px-6 md:px-16  max-w-7xl">
          <PlumbingIntro />
        </section>

        <section className="mt-8 px-6 md:px-16  max-w-7xl">
          <h2 className="text-2xl font-semibold mb-4">Pourquoi nous choisir à Saint-Tropez ?</h2>
          <p className="mb-4 text-gray-700">
            Nous intervenons rapidement dans tout le Golfe de Saint-Tropez (Ramatuelle, Pampelonne, Gassin), en utilisant des techniques avancées comme le gaz traceur, la caméra thermique ou la mise sous pression pour détecter les fuites sans casser votre bassin – comme l’attestent les spécialistes du secteur.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-800">
            <li>Devis personnalisé sous 24 h, rapport illustré sous 48 h — classique des pros de la région.</li>
            <li>Spécialistes des piscines de prestige sur Pampelonne et le Vieux-Port.</li>
            <li>Intervention rapide pendant la saison, y compris les week-ends.</li>
            <li>Technologie non destructive pour éviter tout vandalisme à votre bassin.</li>
          </ul>
        </section>

        <div className="mt-8 text-center px-6 md:px-16">
          <a
            href="tel:+33756935200"
            className="bg-[#1E3A8A] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#2563EB] transition"
          >
            Appelez Saint-Tropez – Devis gratuit
          </a>
        </div>
        <section className="px-6 md:px-16  max-w-7xl">
          <Services />
        </section>
        <section className="px-6 md:px-16  max-w-7xl">
          <Contact />
        </section>
        <section className="px-6 md:px-16  max-w-7xl">
          <Testimonials />
        </section>
      </main>
    </>
  );
}
