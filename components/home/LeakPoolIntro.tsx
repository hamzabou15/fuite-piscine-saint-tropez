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
        <title>Détection de fuite piscine à Saint-Tropez — Intervention rapide & non destructive</title>
        <meta
          name="description"
          content="Experts en détection et réparation de fuites de piscine à Saint-Tropez : liner, coque, canalisation, skimmer. Devis sous 24h, rapport sous 48h, interventions discrètes pour villas et hôtels."
        />
        <meta property="og:title" content="Recherche de fuite piscine à Saint-Tropez — Intervention sans casse" />
        <meta
          property="og:description"
          content="Localisation précise de fuites de piscine à Saint-Tropez avec méthodes non destructives (acoustique, gaz traceur, caméra). Devis gratuit — intervention rapide."
        />
        <meta property="og:image" content="https://fuitepiscinesainttropez.fr/images/og-fuite-piscine.jpg" />
        <meta property="og:url" content="https://fuitepiscinesainttropez.fr" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Schema JSON-LD local business (Saint-Tropez) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Fuite Piscine Saint-Tropez",
              "image": "https://fuitepiscinesainttropez.fr/images/og-fuite-piscine.jpg",
              "url": "https://fuitepiscinesainttropez.fr",
              "telephone": "+33756935200",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "10 Rue de la Plage",
                "addressLocality": "Saint-Tropez",
                "postalCode": "83990",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 43.2683,
                "longitude": 6.6361
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
                  ],
                  "opens": "07:00",
                  "closes": "20:00"
                }
              ],
              "description": "Détection et réparation de fuites de piscine à Saint-Tropez — techniques non destructives, devis sous 24h, rapport sous 48h.",
              "areaServed": { "@type": "Place", "name": "Saint-Tropez et environs" }
            })
          }}
        />
      </Head>

      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Container décoratif : rappel du dégradé hero (ornement) */}
          <div className="relative overflow-hidden">
            {/* decorative gradient wave (harmonise avec hero sans répliquer) */}
            <svg
              className="absolute -top-10 -right-10 w-72 h-72 opacity-40 pointer-events-none"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0%" stopColor="#1E3A8A" />
                  <stop offset="100%" stopColor="#2563EB" />
                </linearGradient>
              </defs>
              <path fill="url(#g1)" d="M43.8,-38.4C57.1,-28.8,69.8,-18.1,73,-4.6C76.2,8.9,69.9,24.3,58.6,34.4C47.4,44.4,31.1,49.1,15.2,54.6C-0.7,60.1,-16.2,66.4,-28.5,62.1C-40.9,57.9,-50,43.1,-56.7,27.3C-63.4,11.6,-67.6,-5.2,-61.6,-19.2C-55.7,-33.3,-39.6,-44.7,-23.1,-52.1C-6.6,-59.5,10.4,-63.0,26.2,-58.6C41.9,-54.2,57.9,-41.9,43.8,-38.4Z" transform="translate(100 100)" />
            </svg>

            {/* Main white card */}
            <div className="relative bg-white  grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ">
              {/* Left text area */}
              <div className="space-y-4">
                <span className="uppercase inline-block text-sm font-semibold tracking-widest text-[#F59E0B]">Recherche fuite piscine — Saint-Tropez</span>

                <h3 className="text-3xl md:text-4xl font-extrabold text-[#0f203f] leading-tight">
                  Détection de fuites de piscine à Saint-Tropez — rapide, discrète, sans vider
                </h3>

                <p className="text-gray-600 text-lg">
                  Vous remarquez une baisse du niveau d’eau ou une surconsommation ? Nos techniciens locaux utilisent des techniques non destructives (écoute acoustique, gaz traceur, fluorescéine, endoscopie, test de pression) pour localiser précisément les fuites — liner, coque, canalisations ou pièces à sceller — et proposer une réparation ciblée.
                </p>

                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
                  <li>✅ Devis gratuit sous 24 h</li>
                  <li>✅ Rapport détaillé sous 48 h</li>
                  <li>✅ Intervention discrète pour villas & hôtels</li>
                  <li>✅ Garantie de réparation</li>
                </ul>

                <div className="flex items-center gap-4 mt-6 max-md:flex-col">
                  <Link href="/recherche-de-fuite-piscine-saint-tropez">
                    <Button size="lg" className="bg-[#F59E0B] text-[#1E3A8A] hover:bg-[#D97706]">
                      En savoir plus
                    </Button>
                  </Link>

                  <a
                    href="tel:+33756935200"
                    className="inline-flex items-center gap-3 px-4 py-3 rounded-lg border border-transparent shadow-sm bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white hover:opacity-95"
                    aria-label="Appeler Fuite Piscine Saint-Tropez"
                  >
                    <Phone className="w-5 h-5 " />
                    <span className="font-semibold text-[15px]">+33 7 56 93 52 00</span>
                  </a>
                </div>
              </div>

              {/* Right images / proof column */}
              <div className="grid grid-cols-1 gap-4">
                <div className="relative rounded-lg overflow-hidden border border-gray-100">
                  <Image
                    src="/images/piscine-saint-tropez.webp"
                    alt="Technicien détectant une fuite sur une piscine à Saint-Tropez"
                    width={900}
                    height={600}
                    className="w-full h-72 object-cover"
                    priority
                  />
                </div>

                <div className="flex gap-4">
                  <div className="flex-1 relative rounded-lg overflow-hidden border border-gray-100">
                    <Image
                      src="/images/recherche-fuite-piscine-saint-tropez.webp"
                      alt="Matériel de détection de fuite piscine"
                      width={600}
                      height={400}
                      className="w-full h-32 object-cover"
                      priority
                    />
                  </div>
                  <div className="flex-1 p-4 bg-[#F8FAFF] rounded-lg flex flex-col justify-center">
                    <p className="text-sm text-gray-700 mb-2">Interventions rapides</p>
                    <p className="text-2xl font-bold text-[#1E3A8A]">24h → devis</p>
                  </div>
                </div>
              </div>
            </div>

            {/* small bottom ribbon with stats to echo hero */}
            <div className="mt-6 flex items-center justify-between bg-gradient-to-r from-[#EEF6FF] to-[#FFFFFF] rounded-b-xl px-6 py-4 border-t">
              <div className="flex items-center gap-6">
                <div>
                  <p className="text-lg font-bold text-[#F59E0B]">99%</p>
                  <p className="text-sm text-gray-600">Fuites détectées</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-[#1E3A8A]">48h</p>
                  <p className="text-sm text-gray-600">Rapport envoyé</p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-sm text-gray-600">Zone</p>
                <p className="font-semibold text-[#0f203f]">Saint-Tropez, Gassin, Ramatuelle</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
