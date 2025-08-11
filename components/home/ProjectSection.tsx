"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";

interface Project {
  title: string;
  category: string;
  image: string;
  alt: string;
  short: string;
}

const projects: Project[] = [
  {
    title: "Détection de fuite de piscine à Saint Tropez",
    category: "Expertise en recherche de fuites",
    image: "/images/detection-fuite-piscine-saint-tropez.webp",
    alt: "Technicien détectant une fuite dans une piscine à Saint Tropez",
    short:
      "Localisation précise sur réseau enterré grâce à acoustique et gaz traceur — réparation ciblée sans vider le bassin.",
  },
  {
    title: "Réparation canalisations de piscine",
    category: "Solutions sans tranchée",
    image: "/images/reparation-canalisations-piscine.webp",
    alt: "Réparation de canalisations de piscine sans excavation",
    short:
      "Colmatage et reprise de tuyauteries avec méthodes non destructives — minimisation des travaux de maçonnerie.",
  },
  {
    title: "Entretien & maintenance de piscine",
    category: "Service complet et professionnel",
    image: "/images/entretien-piscine-saint-tropez.webp",
    alt: "Technicien effectuant l'entretien d'une piscine à Saint Tropez",
    short:
      "Contrats de maintenance préventive incluant vérification d’étanchéité et contrôle hydraulique pour éviter les fuites.",
  },
  {
    title: "Inspection de bassin (endoscopie)",
    category: "Méthodes non destructives",
    image: "/images/inspection-bassin-piscine.webp",
    alt: "Inspection de bassin de piscine pour détecter des fuites",
    short:
      "Caméra endoscopique haute définition pour inspecter skimmers, bondes et gaines inaccessible à l’œil nu.",
  },
  {
    title: "Réparation de skimmer",
    category: "Intervention rapide et efficace",
    image: "/images/reparation-skimmer-piscine.webp",
    alt: "Réparation de skimmer de piscine à Saint Tropez",
    short:
      "Remplacement/colmatage des pièces à sceller et joints, avec test d'étanchéité final et garantie.",
  },
];

export default function ProjectSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scroll = (direction: "left" | "right"): void => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -360 : 360,
        behavior: "smooth",
      });
    }
  };

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = scrollLeft - (x - startX);
  };

  const stopDrag = () => setIsDragging(false);

  // JSON-LD ItemList pour SEO (projets)
  const itemListJson = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Réalisations - Fuite Piscine Saint-Tropez",
    "itemListElement": projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.title,
      image: `https://fuitepiscinesainttropez.fr${p.image}`,
      description: p.short,
    })),
  };

  return (
    <>
      <Head>
        <title>Réalisations – Détection & réparation de fuites de piscine | Saint-Tropez</title>
        <meta
          name="description"
          content="Galerie de nos interventions : détection non destructive, inspections caméra, réparations de skimmers et canalisations. Interventions rapides à Saint-Tropez et Golfe."
        />
        <meta property="og:title" content="Réalisations – Fuite Piscine Saint-Tropez" />
        <meta
          property="og:description"
          content="Exemples d'interventions locales : localisation précise de fuites et réparations discrètes pour villas et hôtels à Saint-Tropez."
        />
        <meta property="og:image" content="https://fuitepiscinesainttropez.fr/images/og-fuite-piscine.jpg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJson) }} />
      </Head>

      <section className="bg-[#f7f9fa] px-6 md:px-16 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-8">
            <div className="max-w-3xl">
              <p className="uppercase text-sm tracking-widest text-[#F59E0B] font-semibold mb-3">
                Réalisations & cas clients
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f203f] leading-tight mb-4">
                Projets de détection et réparation de fuites de piscine — Saint-Tropez & Côte d’Azur
              </h2>

              <p className="text-gray-600">
                Découvrez des interventions réelles : détection non destructive, inspection par caméra, tests de pression, et réparations ciblées sur liners,
                coques et canalisations. Nos équipes interviennent discrètement pour villas, hôtels et copropriétés du Golfe de Saint-Tropez — résultats
                documentés par photos et rapport technique remis sous 48h.
              </p>

              <div className="mt-6 flex gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-4 py-3 rounded-lg bg-[#F59E0B] text-[#1E3A8A] font-semibold shadow hover:opacity-95"
                >
                  Demandez un devis
                </Link>

                <a
                  href="tel:+33756935200"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-[#2563EB] text-[#2563EB] hover:bg-[#eef6ff]text-[15px]"
                >
                  <ChevronRight className="w-4 h-4 transform rotate-180" />
                  +33 7 56 93 52 00
                </a>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="p-2 rounded-full border border-[#cbd5e1] hover:bg-[#1E3A8A] hover:text-white transition"
                aria-label="faire défiler vers la gauche"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2 rounded-full border border-[#cbd5e1] hover:bg-[#1E3A8A] hover:text-white transition"
                aria-label="faire défiler vers la droite"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory -mx-2 px-2 cursor-grab active:cursor-grabbing select-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {projects.map((project, index) => (
              <article
                key={index}
                className="group relative min-w-[320px] sm:min-w-[360px] bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1 duration-300 snap-center"
                aria-labelledby={`proj-${index}`}
              >
                <div className="relative w-full h-64">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                    priority
                  />
                  {/* gradient top border to echo hero */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB]" />
                  {/* overlay info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent px-4 py-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                    <h3 id={`proj-${index}`} className="text-white text-base font-semibold">
                      {project.title}
                    </h3>
                    <p className="text-xs text-white/90">{project.category}</p>
                    <p className="text-sm text-white/80 mt-2 line-clamp-2">{project.short}</p>
                    <div className="mt-3 flex items-center gap-3">
         
                      <span className="text-sm text-white/80">•</span>
                      <span className="text-sm text-white/80">Rapport en 48h</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* bottom summary */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#F59E0B]">99%</p>
                <p className="text-sm text-gray-600">Fuites détectées</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#1E3A8A]">48h</p>
                <p className="text-sm text-gray-600">Rapport envoyé</p>
              </div>
            </div>

            <p className="text-sm text-gray-600 max-w-xl">
              Chaque projet est documenté et livré avec un diagnostic technique, images et recommandations de réparation. Nos interventions privilégient les méthodes non destructives pour préserver l’esthétique et la valeur de votre propriété.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
