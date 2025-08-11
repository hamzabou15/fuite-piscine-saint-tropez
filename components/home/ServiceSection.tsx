"use client";

import { Camera, Droplet, Wrench, Shield, Search, Hammer, FileText, Phone } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Head from "next/head";

const services = [
  {
    key: "non-destructive",
    title: "Détection non destructive de fuites",
    icon: <Droplet className="w-12 h-12 text-[#2563EB]" />,
    description:
      "Localisation précise des fuites sans vider le bassin ni casser : méthodes acoustiques, mise sous pression contrôlée et gaz traceur. Idéal pour villas et résidences de prestige à Saint-Tropez.",
  },
  {
    key: "camera",
    title: "Inspection par caméra endoscopique",
    icon: <Camera className="w-12 h-12 text-[#2563EB]" />,
    description:
      "Caméra haute résolution pour inspecter canalisations, skimmers et zones inaccessibles : visualisez la source exacte de la fuite et recevez des images dans votre rapport.",
  },
  {
    key: "pressure",
    title: "Test de pression des canalisations",
    icon: <Wrench className="w-12 h-12 text-[#2563EB]" />,
    description:
      "Contrôle étanche des réseaux hydrauliques de piscine (tuyauteries enterrées ou gainées) pour identifier les pertes de charge et localiser les anomalies rapidement.",
  },
  {
    key: "liner-coque",
    title: "Inspection liner & coque",
    icon: <Shield className="w-12 h-12 text-[#2563EB]" />,
    description:
      "Recherche des microfissures, décollements ou soudures endommagées sur liner et coques polyester. Réparations ciblées possibles après diagnostic.",
  },
  {
    key: "skimmer",
    title: "Contrôle skimmers & bondes de fond",
    icon: <Search className="w-12 h-12 text-[#2563EB]" />,
    description:
      "Examen complet des éléments de circulation (skimmer, bondes, projecteurs) — fuite souvent localisée au niveau des pièces à sceller ou joints vieillissants.",
  },
  {
    key: "pieces",
    title: "Diagnostic pièces à sceller",
    icon: <Hammer className="w-12 h-12 text-[#2563EB]" />,
    description:
      "Inspection et test d'étanchéité des pièces à sceller (buses, projecteurs, prises balais) ; remplacement et colmatage local si nécessaire.",
  },
  {
    key: "report",
    title: "Rapport d'intervention détaillé",
    icon: <FileText className="w-12 h-12 text-[#2563EB]" />,
    description:
      "Rapport PDF livré sous 48h avec photos, vidéos (si applicable), localisation précise, diagnostic et recommandations de réparation — parfait pour assurances ou syndicats de copropriété.",
  },
  {
    key: "devis",
    title: "Devis gratuit sous 24h",
    icon: <Phone className="w-12 h-12 text-[#2563EB]" />,
    description:
      "Réponse rapide : envoyez votre demande et recevez un devis personnalisé sous 24 heures. Intervention discrète et prioritaire pour clients sur Saint-Tropez et le Golfe.",
  },
];

export default function ServiceSection() {
  return (
    <>
      <Head>
        <meta name="description" content="Services de détection et réparation de fuites de piscine à Saint-Tropez : inspection caméra, gaz traceur, test de pression, diagnostic liner/coque. Devis 24h, rapport 48h." />
        <meta property="og:title" content="Services – Recherche de fuite piscine à Saint-Tropez" />
        <meta property="og:description" content="Découvrez nos prestations de détection de fuite piscine à Saint-Tropez : méthodes non destructives, inspection par caméra, test de pression et rapport détaillé." />
        {/* Schema (extrait) pour les services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Recherche de fuite piscine",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Fuite Piscine Saint-Tropez",
                "telephone": "+33756935200",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Saint-Tropez",
                  "postalCode": "83990",
                  "addressCountry": "FR"
                }
              },
              "areaServed": { "@type": "Place", "name": "Saint-Tropez et environs" },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Prestations détection fuite piscine",
                "itemListElement": services.map((s) => ({ "@type": "Offer", "itemOffered": { "@type": "Service", "name": s.title, "description": s.description } }))
              }
            })
          }}
        />
      </Head>

      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase text-sm tracking-widest text-[#F59E0B] font-semibold mb-2">Nos prestations à Saint-Tropez</p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f203f] mb-6">
            Solutions complètes pour la recherche et la réparation de fuites de piscine
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 mb-10">
            Nous couvrons l&apos;ensemble du Golfe de Saint-Tropez (Saint-Tropez, Gassin, Ramatuelle, Cogolin, Sainte-Maxime) avec des interventions adaptées aux villas, hôtels et copropriétés. Chaque prestation est réalisée par des techniciens certifiés, avec rapport détaillé et recommandations précises.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <article
                key={service.key}
                className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 cursor-default"
                aria-labelledby={`service-${service.key}`}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-tr from-[#EEF6FF] to-white inline-flex">
                    {service.icon}
                  </div>
                </div>

                <h3 id={`service-${service.key}`} className="text-lg font-semibold text-[#0f203f] mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>

                <div className="mt-4 text-sm">
                  <Link href={`/services#${service.key}`} className="text-[#2563EB] font-medium hover:underline">
                    En savoir plus
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/contact" className="inline-block">
              <Button size="lg" className="bg-[#F59E0B] text-[#1E3A8A] hover:bg-[#D97706]">
                Demandez votre devis gratuit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
