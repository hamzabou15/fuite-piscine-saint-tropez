import ContactSection from "@/components/home/ContactSection";
import Hero from "@/components/home/Hero";
import InfoSection from "@/components/home/InfoSection";
import PlumbingIntro from "@/components/home/PlumberIntroSection";
import ProductGallery from "@/components/home/ProdcutsGallery";
import ProjectSection from "@/components/home/ProjectSection";
import ServiceSection from "@/components/home/ServiceSection";
import Testimonials from "@/components/Testimonials";
import StatsCard from "@/components/StatsCard";
import type { Metadata } from "next";
import LocalBusinessSchema from "@/components/SEO/LocalBusiness";

export const metadata = {
  title: "Plombier à Nice - Interventions rapides & professionnelles",
  description: "Intervention express à Nice pour dépannage, fuite, débouchage, chauffe-eau et plus. Plombier expérimenté, devis gratuit et service garanti.",
  openGraph: {
    title: "Plombier à Nice - Interventions rapides & professionnelles",
    description: "Intervention express à Nice pour dépannage, fuite, débouchage, chauffe-eau et plus.",
    url: "https://plombiernice-expert.fr",
    siteName: "Plombier Nice Expert",
    images: [
      {
        url: "https://plombiernice-expert.fr/images/plombier-nice-hero.webp",
        width: 800,
        height: 600,
        alt: "Plombier professionnel à Nice",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plombier à Nice - Interventions rapides & professionnelles",
    description: "Plombier expérimenté pour dépannage, fuite, chauffe-eau, rénovation à Nice. Service rapide, devis gratuit.",
    images: ["https://plombiernice-expert.fr/images/plombier-nice-hero.webp"],
  },
};


export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <main className="font-sans bg-white text-[#1b1e3f]  ">
        {/* Hero principal avec image et stats */}
        <Hero />
        <section className="bg-white ">
          <PlumbingIntro />
        </section>
        <ServiceSection />
        <ProjectSection />
        <InfoSection />
        <ContactSection />
        <StatsCard />
        <Testimonials />
        <ProductGallery />
      </main>
    </>
  );
}
