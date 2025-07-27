"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSwipeable } from "react-swipeable";

const testimonials = [
  {
    name: "Nathalie Dupont",
    location: "Nice Centre (06)",
    image: "/icons/user1.webp",
    quote:
      "Fuite piscine localisée sans casse en plein centre de Nice. Service rapide et professionnel. Détection par caméra et gaz traceur très efficace. Je recommande !",
    color: "black",
  },
  {
    name: "Olivier Martin",
    location: "Cagnes-sur-Mer",
    image: "/icons/user2.webp",
    quote:
      "Une équipe au top pour la recherche de fuite d’eau dans ma piscine enterrée. Résultat fiable, sans dégât sur la terrasse. Intervention en moins de 48h !",
    color: "teal",
  },
  {
    name: "Claire Lefèvre",
    location: "Saint-Laurent-du-Var",
    image: "/icons/user3.webp",
    quote:
      "J'avais une perte d’eau constante dans ma piscine. Diagnostic précis avec inspection endoscopique. Aucun besoin de casser. Très bon rapport qualité/prix.",
    color: "teal",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const handleSwipe = (dir: "LEFT" | "RIGHT") => {
    if (dir === "LEFT") {
      setIndex((prev) => (prev + 1) % testimonials.length);
    } else {
      setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("LEFT"),
    onSwipedRight: () => handleSwipe("RIGHT"),
    trackMouse: true,
  });

  const visibleCards = 2;
  const visibleTestimonials = testimonials.slice(index, index + visibleCards);

  while (visibleTestimonials.length < visibleCards) {
    visibleTestimonials.push(
      testimonials[(visibleTestimonials.length + index) % testimonials.length]
    );
  }

  return (
    <section
      className="w-full py-16 bg-white relative overflow-hidden px-16 max-md:px-6"
      id="avis-clients-recherche-fuite-nice"
      aria-label="Témoignages clients sur la recherche de fuite piscine à Nice"
    >
      <div className="text-center mb-12">
        <p className="text-sm tracking-widest text-gray-500 uppercase">
          Témoignages clients
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
          Avis sur nos interventions de détection de fuite piscine à Nice
        </h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Découvrez les témoignages authentiques de nos clients à Nice, Cagnes-sur-Mer, Saint-Laurent-du-Var et dans tout le 06. Nos interventions sont rapides, précises et sans casse.
        </p>
      </div>

      <div
        className="flex items-stretch justify-center gap-6 px-4 flex-wrap md:flex-nowrap cursor-grab active:cursor-grabbing select-none"
        {...handlers}
      >
        {visibleTestimonials.map((t, i) => (
          <Card
            key={i}
            className="bg-[#f4f7f8] rounded-2xl p-8 shadow-md w-full max-w-md transition-transform duration-500 ease-in-out"
          >
            <Quote
              className={cn(
                "w-6 h-6 mb-4",
                t.color === "black" ? "text-black" : "text-[#02BAD6]"
              )}
            />
            <p className="text-gray-700 text-lg leading-relaxed">{t.quote}</p>
            <div className="flex items-center gap-4 mt-6">
              <img
                src={t.image}
                alt={`${t.name}, ${t.location}`}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.location}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8 gap-2">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={cn(
              "h-2 w-2 rounded-full",
              i === index ? "bg-[#02BAD6]" : "bg-gray-300"
            )}
          ></span>
        ))}
      </div>

      <div
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#02BAD6] text-white rounded-full p-2 cursor-pointer"
        onClick={() => handleSwipe("RIGHT")}
      >
        <ChevronLeft size={16} />
      </div>
      <div
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#02BAD6] text-white rounded-full p-2 cursor-pointer"
        onClick={() => handleSwipe("LEFT")}
      >
        <ChevronRight size={16} />
      </div>
    </section>
  );
}
