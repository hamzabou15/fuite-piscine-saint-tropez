"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

interface Project {
  title: string;
  category: string;
  image: string;
  alt: string;
}

const projects: Project[] = [
  {
    title: "Détection de fuite de piscine à Nice",
    category: "Expertise en recherche de fuites",
    image: "/images/detection-fuite-piscine-nice.webp",
    alt: "Technicien détectant une fuite dans une piscine à Nice",
  },
  {
    title: "Réparation de fuites sur canalisations de piscine",
    category: "Solutions sans tranchée",
    image: "/images/reparation-canalisations-piscine.webp",
    alt: "Réparation de canalisations de piscine sans excavation",
  },
  {
    title: "Entretien et maintenance de piscine à Nice",
    category: "Service complet et professionnel",
    image: "/images/entretien-piscine-nice.webp",
    alt: "Technicien effectuant l'entretien d'une piscine à Nice",
  },
  {
    title: "Inspection de bassin pour détection de fuites",
    category: "Méthodes non destructives",
    image: "/images/inspection-bassin-piscine.webp",
    alt: "Inspection de bassin de piscine pour détecter des fuites",
  },
  {
    title: "Réparation de skimmer de piscine",
    category: "Intervention rapide et efficace",
    image: "/images/reparation-skimmer-piscine.webp",
    alt: "Réparation de skimmer de piscine à Nice",
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
        left: direction === "left" ? -300 : 300,
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

  return (
    <section className="bg-[#f7f9fa] px-16 max-md:px-6 py-12 ">
      <div className="max-w-6xl mx-auto mb-10">
        <div className="flex justify-between items-center mb-6 flex-wrap gap-6">
          <div className="flex flex-col gap-4 max-w-3xl">
            <p className="uppercase text-sm tracking-widest text-[#475565] font-semibold ">
              Services spécialisés en détection de fuites
            </p>
            <div className="flex flex-col gap-5 max-sm:flex-col">
              <h2 className="text-4xl font-extrabold max-md:text-3xl text-[var(--color-pool-dark)]">
                Nos projets de détection et réparation de fuites de piscine à Nice
              </h2>
              <p className="mt-2 text-[var(--color-pool-muted)] max-w-xl text-base">
                Découvrez nos interventions professionnelles pour la détection et la réparation de fuites dans les piscines à Nice. Nos experts utilisent des méthodes non destructives pour préserver l&apos;intégrité de votre bassin.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full border border-[#cbd5e1] hover:bg-[var(--color-pool-primary)] hover:text-white transition"
              aria-label="Scroll gauche"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full border border-[#cbd5e1] hover:bg-[var(--color-pool-primary)] hover:text-white transition"
              aria-label="Scroll droite"
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
            <div
              key={index}
              className="group relative min-w-[350px] bg-white rounded-xl overflow-hidden shadow-sm transition snap-center cursor-pointer duration-300"
            >
              <div className="relative w-full h-72 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.1] "
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 px-4 py-3 translate-y-full group-hover:translate-y-[-20px] transition-transform duration-500 ease-in-out max-md:translate-y-[-20px] max-md:h-[100px]">
                  <h3 className="text-base font-semibold text-[var(--color-pool-dark)]">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--color-pool-muted)]">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
