import ContactSection from "@/components/home/ContactSection";
import Hero from "@/components/home/Hero";
import InfoSection from "@/components/home/InfoSection";
import PlumbingIntro from "@/components/home/LeakPoolIntro";
import ProjectSection from "@/components/home/ProjectSection";
import ServiceSection from "@/components/home/ServiceSection";
import Testimonials from "@/components/Testimonials";
import StatsCard from "@/components/StatsCard";
import KeyPointsSection from "@/components/recherche-fuite-piscine-saint-tropez/KeyPointSection";
import SchemaLocalBusiness from "@/components/SEO/LocalBusiness";

export const metadata = {
  title: "Recherche fuite piscine à Saint Tropez – Expert technicien local sans casse",
  description:
    "Technicien spécialisé en recherche de fuite piscine sur Saint Tropez. Intervention rapide, sans destruction. Fuite piscine liner, coque ou canalisation – rapport complet en 48h.",
  keywords:
    "recherche fuite piscine Saint Tropez, fuite piscine sur Saint Tropez, technicien fuite piscine Saint Tropez, détection fuite piscine, fuite liner, fuite coque piscine, fuite canalisation",
  robots: "index, follow",
  canonical: "https://fuitepiscinesainttropez.fr",
  openGraph: {
    title: "Recherche de fuite piscine à Saint Tropez – Intervention sans destruction",
    description:
      "Technicien expert en détection de fuite piscine sur Saint Tropez : liner, coque, canalisation. Localisation rapide, rapport détaillé avec photos. Sans vidange.",
    url: "https://fuitepiscinesainttropez.fr",
    siteName: "Fuite Piscine Saint Tropez Expert",
    images: [
      {
        url: "https://fuitepiscinesainttropez.fr/images/og-fuite-piscine.jpg",
        width: 1200,
        height: 630,
        alt: "Technicien recherche fuite piscine Saint Tropez",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fuite piscine sur Saint Tropez – Recherche sans casse par expert",
    description:
      "Technicien spécialisé en recherche fuite piscine à Saint Tropez. Intervention sans vidange, rapport photo sous 48h, détection liner, coque et canalisation.",
    images: ["https://fuitepiscinesainttropez.fr/images/og-fuite-piscine.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <SchemaLocalBusiness />
      <main className="font-sans bg-white text-[#1b1e3f]">
        {/* Hero principal avec image et stats */}
        <Hero />
        <section className="bg-white">
          <PlumbingIntro />
        </section>
        <ServiceSection />
        <ProjectSection />
        <InfoSection />
        <ContactSection />
        <StatsCard />
        <Testimonials />
        <KeyPointsSection />
      </main>
    </>
  );
}
