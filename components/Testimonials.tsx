// components/Testimonials.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useSwipeable, SwipeableHandlers } from "react-swipeable";
import { cn } from "@/lib/utils"; // si tu n'as pas cn, remplace par une simple fonction ou classes tailwind direct

type Testimonial = {
  name: string;
  location: string;
  image: string;
  quote: string;
  rating: number;
  date?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Isabelle Martin",
    location: "Saint-Tropez (83990)",
    image: "/icons/user2.webp",
    quote:
      "Intervention impeccable à Saint-Tropez : fuite localisée sur une canalisation enterrée sans dégrader la terrasse. Rapport détaillé et devis clair. Très pro !",
    rating: 5,
    date: "2024-08-12",
  },
  {
    name: "Jean-Pierre Lambert",
    location: "Ramatuelle",
    image: "/icons/user1.webp",
    quote:
      "Techniciens discrets et efficaces pour une villa près de la plage. Détection par gaz traceur, réparation ciblée — plus de perte d'eau. Je recommande Fuite Piscine Saint-Tropez.",
    rating: 5,
    date: "2024-05-03",
  },
  {
    name: "Hôtel La Plage (Gassin)",
    location: "Gassin - Hôtel",
    image: "/icons/user3.webp",
    quote:
      "Service professionnel pour la piscine de notre établissement : diagnostic rapide, réparations sans casse et rapport pour les assurances. Prestataire fiable pour la région.",
    rating: 5,
    date: "2023-11-20",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const autoRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const len = testimonials.length;

  // swipeable handlers
  const swipeable = useSwipeable({
    onSwipedLeft: () => setIndex((p) => (p + 1) % len),
    onSwipedRight: () => setIndex((p) => (p - 1 + len) % len),
    trackMouse: true,
    trackTouch: true,
  });

  // extract possible ref from swipeable (avoid double ref warning)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { ref: swipeRef, ...swipeHandlers } = swipeable as SwipeableHandlers & { ref?: any };

  // keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setIndex((p) => (p - 1 + len) % len);
      if (e.key === "ArrowRight") setIndex((p) => (p + 1) % len);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [len]);

  // auto-rotate carousel
  useEffect(() => {
    autoRef.current = window.setInterval(() => setIndex((p) => (p + 1) % len), 6000);
    return () => {
      if (autoRef.current) window.clearInterval(autoRef.current);
      autoRef.current = null;
    };
  }, [len]);

  const pauseAuto = () => {
    if (autoRef.current) {
      window.clearInterval(autoRef.current);
      autoRef.current = null;
    }
  };

  const resumeAuto = () => {
    if (!autoRef.current) {
      autoRef.current = window.setInterval(() => setIndex((p) => (p + 1) % len), 6000);
    }
  };

  // JSON-LD structured data: LocalBusiness + aggregate reviews
  const aggregateRating = {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: testimonials.length,
  };

  const reviewsJSON = testimonials.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    datePublished: t.date,
    reviewBody: t.quote,
    reviewRating: { "@type": "Rating", ratingValue: String(t.rating), bestRating: "5" },
  }));

  // compose ref: set containerRef and forward to swipeRef if present
  const composedRef = (el: HTMLDivElement | null) => {
    containerRef.current = el;
    if (!swipeRef) return;
    if (typeof swipeRef === "function") swipeRef(el);
    else (swipeRef as React.MutableRefObject<HTMLElement | null>).current = el;
  };

  // helper to get circular index item
  const itemAt = (pos: number) => testimonials[(pos + len) % len];

  return (
    <>
      <Head>
        <title>Témoignages – Recherche de fuite piscine à Saint-Tropez</title>
        <meta
          name="description"
          content="Avis clients réels pour Fuite Piscine Saint-Tropez : interventions rapides et non destructives pour localiser et réparer les fuites de piscine dans le Golfe."
        />
        <link rel="canonical" href="https://fuitepiscinesainttropez.fr/avis-clients" />
        <meta property="og:title" content="Témoignages – Recherche de fuite piscine à Saint-Tropez" />
        <meta
          property="og:description"
          content="Découvrez des avis de clients à Saint-Tropez, Gassin et Ramatuelle sur nos interventions de détection et réparation de fuites piscine (non destructives)."
        />
        <meta property="og:url" content="https://fuitepiscinesainttropez.fr/avis-clients" />
        <meta property="og:image" content="https://fuitepiscinesainttropez.fr/images/og-fuite-piscine.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Fuite Piscine Saint-Tropez",
              image: "https://fuitepiscinesainttropez.fr/images/og-fuite-piscine.jpg",
              "@id": "https://fuitepiscinesainttropez.fr",
              url: "https://fuitepiscinesainttropez.fr",
              telephone: "+33756935200",
              address: {
                "@type": "PostalAddress",
                streetAddress: "10 Rue de la Plage",
                addressLocality: "Saint-Tropez",
                postalCode: "83990",
                addressCountry: "FR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 43.2683,
                longitude: 6.6361,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  opens: "07:00",
                  closes: "20:00",
                },
              ],
              areaServed: { "@type": "Place", name: "Saint-Tropez et environs" },
              aggregateRating,
              review: reviewsJSON,
            }),
          }}
        />
      </Head>

      <section
        id="avis-clients-recherche-fuite-saint-tropez"
        aria-label="Témoignages clients - détection fuite piscine Saint-Tropez"
        className="w-full py-16 bg-white relative overflow-hidden px-6 md:px-16"
        onMouseEnter={pauseAuto}
        onMouseLeave={resumeAuto}
      >
        <div className="text-center mb-10">
          <p className="text-sm tracking-widest text-[#1E3A8A] uppercase font-semibold">Témoignages clients • Saint-Tropez</p>
          <h2 className="text-4xl font-bold text-[#0f203f] mt-2">
            Ils nous font confiance pour la recherche de fuite piscine à Saint-Tropez
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Avis vérifiés de propriétaires et d’établissements du Golfe de Saint-Tropez sur nos interventions non destructives :
            détection par gaz traceur, inspection vidéo, tests de pression et réparations ciblées.
          </p>
        </div>

        {/* Carousel container — spread swipeHandlers but not the ref */}
        <div
          ref={composedRef}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          {...(swipeHandlers as any)}
          className="flex items-stretch justify-center gap-6 px-2 flex-wrap md:flex-nowrap cursor-grab active:cursor-grabbing select-none"
          role="region"
          aria-roledescription="carousel"
          aria-label="Carousel d'avis clients"
        >
          {[0, 1].map((offset) => {
            const item = itemAt(index + offset);
            const key = `${index + offset}-${item.name}`;
            return (
              <article
                key={key}
                className="group relative min-w-[320px] sm:min-w-[360px] bg-[#f8fafb] rounded-2xl p-6 shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1 duration-300"
                aria-label={`Témoignage de ${item.name}`}
              >
                <div className="flex items-start gap-4">
                  <div aria-hidden className="p-2 rounded-lg bg-gradient-to-tr from-[#1E3A8A] to-[#2563EB] text-white inline-flex">
                    <Quote className="w-5 h-5" />
                  </div>

                  <div className="flex-1">
                    <p className="text-gray-800 text-base leading-relaxed">{item.quote}</p>

                    <div className="flex items-center gap-3 mt-4">
                      <Image
                        src={item.image}
                        alt={`${item.name} - ${item.location}`}
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-[#0f203f]">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.location}</p>
                        <p className="text-sm mt-1 text-gray-600">Note : {item.rating}/5</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* pagination dots */}
        <div className="flex justify-center mt-8 gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Afficher le témoignage ${i + 1}`}
              className={cn(
                "h-3 w-3 rounded-full transition-all",
                i === index ? "bg-[#F59E0B] shadow-lg scale-110" : "bg-gray-300"
              )}
            />
          ))}
        </div>

        {/* arrows */}
        <button
          onClick={() => setIndex((prev) => (prev - 1 + len) % len)}
          aria-label="Précédent"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white border border-[#1E3A8A] text-[#1E3A8A] rounded-full p-2 shadow hover:bg-[#1E3A8A] hover:text-white transition"
        >
          <ChevronLeft size={16} />
        </button>

        <button
          onClick={() => setIndex((prev) => (prev + 1) % len)}
          aria-label="Suivant"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white border border-[#1E3A8A] text-[#1E3A8A] rounded-full p-2 shadow hover:bg-[#1E3A8A] hover:text-white transition"
        >
          <ChevronRight size={16} />
        </button>

        {/* CTA / internal linking */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-600 mb-3">
            Besoin d&apos;une recherche de fuite à Saint-Tropez ? <strong>Intervention rapide et discrète</strong>.
          </p>
          <Link href="/contact" className="inline-block">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-[#F59E0B] text-[#0f203f] font-semibold shadow hover:opacity-95">
              Obtenir un diagnostic gratuit
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
