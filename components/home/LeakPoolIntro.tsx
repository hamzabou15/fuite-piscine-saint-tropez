"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Head from "next/head";

export default function LeakPoolIntro() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Fuite Piscine Nice Expert",
              "image": "https://fuitepiscinenice-expert.fr/images/og-fuite-piscine.jpg",
              "url": "https://fuitepiscinenice-expert.fr",
              "telephone": "+33612345678",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "10 Rue Masséna",
                "addressLocality": "Nice",
                "postalCode": "06000",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 43.7031,
                "longitude": 7.2661
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                  ],
                  "opens": "00:00",
                  "closes": "23:59"
                }
              ],
              "description":
                "Spécialistes en détection de fuite de piscine à Nice : liner, coque, canalisation, skimmer. Intervention rapide, devis gratuit, rapport en 48h sans vider le bassin.",
              "priceRange": "€€",
              "paymentAccepted": "Cash, Credit Card",
              "areaServed": {
                "@type": "Place",
                "name": "Nice et Alpes-Maritimes (06)"
              }
            })
          }}
        />
      </Head>

      <section className="py-20 max-w-7xl mx-auto px-6 md:px-16">
        <div className="flex items-center gap-20 justify-between flex-col lg:flex-row">
          {/* Texte gauche */}
          <div className="lg:w-[45%] w-full sticky top-20 left-0 max-lg:relative max-lg:top-0">
            <p className="uppercase text-sm text-gray-600 font-semibold tracking-widest mb-2">
              Recherche fuite piscine à Nice – Expert local
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-pool-dark)] mb-4 leading-tight">
              Détection de fuite piscine à Nice sans casse ni tracas
            </h2>
            <p className="text-lg text-[#4A5568] mb-6">
              Vous constatez une baisse anormale du niveau d’eau ? Notre équipe spécialisée à Nice détecte rapidement avec des techniques non destructives : électro-acoustique, caméra endoscopique, fluorescéine, gaz traceur, test de pression… pour localiser précisément la fuite liner, coque, canalisation ou pièce à sceller.
            </p>
            <p className="text-sm text-gray-600 mb-8">
              Devis gratuit sous 24 h, rapport complet sous 48 h, et garantie de résultat ou vous ne payez rien. Interventions sur tout Nice et les Alpes‑Maritimes 06.
            </p>
            <div className="flex items-center gap-6 flex-col sm:flex-row">
              <Link href="/recherche-de-fuite-piscine-nice">
                <Button
                  size="lg"
                  className="bg-[var(--color-pool-primary)] text-white hover:bg-[var(--color-pool-dark)] transition duration-200"
                >
                  En savoir plus
                </Button>
              </Link>
              <a
                href="tel:0612345678"
                className="flex items-center gap-2 text-[#114877] font-medium"
              >
                <div className="p-3 rounded-full bg-[#5BC0BE]/15">
                  <Phone className="w-5 h-5 text-[#114877]" />
                </div>
                <span>06 12 34 56 78</span>
              </a>
            </div>
          </div>

          {/* Image droite */}
          <div className="relative lg:w-[50%] w-full flex flex-col gap-6">
            <Image
              src="/images/piscine-mainten-a-Nice.webp"
              alt="Recherche de fuite piscine à Nice"
              className="object-cover w-full rounded-lg shadow-lg"
              width={600}
              height={500}
            />
            <Image
              src="/images/recherche-de-fuite-de-piscine-nice.webp"
              alt="Expert détection fuite piscine à Nice"
              className="object-cover w-full rounded-lg shadow-xl"
              width={600}
              height={500}
            />
          </div>
        </div>
      </section>
    </>
  );
}
