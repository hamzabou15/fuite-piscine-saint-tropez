import ContactSection from "@/components/home/ContactSection";
import Hero from "@/components/home/Hero";
import InfoSection from "@/components/home/InfoSection";
import PlumbingIntro from "@/components/home/PlumberIntroSection";
import ProductGallery from "@/components/home/ProdcutsGallery";
import ProjectSection from "@/components/home/ProjectSection";
import ServiceSection from "@/components/home/ServiceSection";
import Testimonials from "@/components/home/Testimonials";
import StatsCard from "@/components/StatsCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plombier Nice Expert – Dépannage & Installation 24h/24",
  description: "Intervention rapide sur Nice pour vos urgences plomberie : fuite, débouchage, chauffe-eau, rénovation salle de bain. Appelez-nous pour un devis gratuit.",
  keywords: [
    "plombier Nice",
    "dépannage plomberie Nice",
    "urgence fuite d'eau",
    "installation sanitaire Nice",
    "plombier pas cher Nice",
    "chauffe-eau Nice",
    "rénovation salle de bains Nice"
  ],
  openGraph: {
    title: "Plombier Nice Expert – Intervention rapide & efficace",
    description: "Faites appel à un plombier expérimenté à Nice pour tous vos besoins en dépannage, entretien et installation.",
    url: "https://plombiernice-expert.fr",
    siteName: "Plombier Nice Expert",
    locale: "fr_FR",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="font-sans bg-white text-[#1b1e3f]">
      {/* Hero principal avec image et stats */}
      <Hero />
      <PlumbingIntro />
      <ServiceSection />
      <ProjectSection />
      <InfoSection/>
      <ContactSection />
      <StatsCard />
      <Testimonials />
      <ProductGallery />
    </main>
  );
}
