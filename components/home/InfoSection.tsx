"use client";

import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function RechercheFuitePiscinePage() {
  return (
    <>
      <Head>
        <title>Recherche & détection de fuite piscine à Saint-Tropez — Intervention rapide</title>
        <meta
          name="description"
          content="Experts en détection et réparation de fuites de piscine à Saint-Tropez et Golfe : méthodes non destructives (acoustique, gaz traceur, caméra endoscopique). Devis 24h, rapport 48h."
        />
        <meta property="og:title" content="Recherche de fuite piscine à Saint-Tropez — Intervention non destructive" />
        <meta
          property="og:description"
          content="Localisation précise de fuites piscine (liner, coque, canalisations, skimmer). Intervention discrète pour villas et hôtels. Contact rapide : +33 7 56 93 52 00."
        />
        <meta property="og:image" content="https://fuitepiscinesainttropez.fr/images/og-fuite-piscine.jpg" />
        <meta property="og:url" content="https://fuitepiscinesainttropez.fr/recherche-de-fuite-piscine" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://fuitepiscinesainttropez.fr/recherche-de-fuite-piscine" />

        {/* LocalBusiness JSON-LD */}
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
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  ],
                  "opens": "07:00",
                  "closes": "20:00"
                }
              ],
              "description": "Détection et réparation de fuites de piscine à Saint-Tropez. Devis sous 24h, rapport sous 48h, interventions non destructives pour villas et hôtels."
            }),
          }}
        />
      </Head>

      <main className="bg-white text-[#0f203f]">
        {/* Hero */}
        <section className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white py-16 px-6 md:px-16">
          <div className="max-w-6xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Recherche et détection de fuite de piscine à Saint-Tropez
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Intervention rapide, discrète et non destructive pour liner, coque, canalisations et pièces à sceller. Devis gratuit sous 24 h — rapport technique sous 48 h.
            </p>

            <div className="flex items-center justify-center gap-4 pt-4 flex-col sm:flex-row">
              <Link
                href="/contact"
                className="inline-block bg-[#F59E0B] text-[#1E3A8A] font-semibold px-8 py-3 rounded-md shadow hover:opacity-95 transition"
              >
                Demander un diagnostic gratuit
              </Link>

              <Link
                href="tel:+33756935200"
                className="inline-block bg-white text-[#1E3A8A] font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-100 transition"
              >
                Appeler +33 7 56 93 52 00
              </Link>
            </div>
          </div>
        </section>

        {/* Intro enrichie (SEO, > 300 mots ici) */}
        <section className="py-16 px-6 md:px-16 bg-[#f7f9fa]">
          <div className="max-w-6xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f203f]">
              Pourquoi nous choisir pour la recherche de fuite piscine à Saint-Tropez ?
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Une fuite de piscine non détectée peut rapidement provoquer des dégâts coûteux : dégradation des margelles, affaissement de la terrasse, surconsommation d&apos;eau et nuisances structurelles. À Saint-Tropez et dans le Golfe, les caractéristiques des piscines (liners, coques polyester, bassins maçonnés) exigent une expertise locale et des méthodes adaptées. Nous proposons une approche méthodique : diagnostic visuel, tests de pression, détection acoustique, gaz traceur et inspection par caméra endoscopique. Ces méthodes permettent de localiser précisément la fuite sans vider le bassin ni effectuer de travaux destructifs.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Notre promesse : intervention rapide, rapport technique illustré (photos/vidéos) sous 48 heures et devis transparent sous 24 heures. Nous intervenons pour des propriétaires de villas, gestionnaires d&apos;hôtels et syndics de copropriété, en privilégiant la discrétion et le respect des lieux. Chaque diagnostic inclut une évaluation des réparations nécessaires, options de colmatage local, et une estimation des coûts et délais.
            </p>

            <ul className="grid md:grid-cols-2 gap-3 mt-4 text-gray-700">
              <li>• Expertise sur liner, coque, canalisations et skimmers</li>
              <li>• Méthodes non destructives adaptées au bâti local</li>
              <li>• Rapport technique complet (photos & vidéos)</li>
              <li>• Garantie sur les réparations effectuées</li>
            </ul>
          </div>
        </section>

        {/* Méthodes de détection — cartes stylées */}
        <section className="py-16 px-6 md:px-16 bg-white">
          <div className="max-w-6xl mx-auto space-y-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f203f]">
              Nos méthodes de détection (techniques éprouvées)
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src="/images/piscine-fuite-sur-saint-tropez.Webp"
                  alt="Matériel de détection gaz traceur"
                  width={900}
                  height={600}
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                  priority
                />
              </div>

              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Nous combinons plusieurs méthodes complémentaires pour garantir une localisation fiable :
                </p>

                <dl className="space-y-4">
                  <div>
                    <dt className="font-semibold text-[#1E3A8A]">Gaz traceur</dt>
                    <dd className="text-gray-600">Technique idéale pour canalisations enterrées et réseaux gainés. Le gaz remonte à la source et permet une détection rapide.</dd>
                  </div>

                  <div>
                    <dt className="font-semibold text-[#1E3A8A]">Écoute acoustique</dt>
                    <dd className="text-gray-600">Microphones et capteurs détectent les fuites actives sur canalisations et skimmers sans démontage.</dd>
                  </div>

                  <div>
                    <dt className="font-semibold text-[#1E3A8A]">Caméra endoscopique & thermique</dt>
                    <dd className="text-gray-600">Inspection interne des gaines et vision thermique pour repérer les anomalies sur liners et coques.</dd>
                  </div>

                  <div>
                    <dt className="font-semibold text-[#1E3A8A]">Test de pression</dt>
                    <dd className="text-gray-600">Mise sous pression contrôlée des circuits pour isoler la section concernée.</dd>
                  </div>
                </dl>

                <p>
                  Après diagnostic, nous fournissons des solutions adaptées : colmatage local, reprise de pièces à sceller, réparation de skimmer, ou travaux d&apos;étanchéité selon le cas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Zones d'intervention */}
        <section className="py-16 px-6 md:px-16 bg-[#f7f9fa]">
          <div className="max-w-6xl mx-auto space-y-6 text-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f203f]">Zones d’intervention</h2>
            <p>
              Nous couvrons Saint-Tropez, Gassin, Ramatuelle, Cogolin, Sainte-Maxime et l’ensemble du Golfe. Pour les interventions d’urgence, nous proposons des créneaux prioritaires et un service discret dédié aux résidences de prestige et aux établissements hôteliers.
            </p>
            <p>
              Pour une réponse rapide, envoyez-nous des photos et une description via le formulaire de contact : cela accélère le chiffrage et l’envoi du devis sous 24 h.
            </p>
          </div>
        </section>

        {/* Appel à l'action final */}
        <section className="py-16 px-6 md:px-16 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white">
          <div className="max-w-6xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Vous suspectez une fuite ? Agissez vite — préservez votre bassin.
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-white/90">
              Contactez nos experts pour une évaluation rapide et un diagnostic précis. Devis gratuit sous 24 h — intervention prioritaire si nécessaire.
            </p>

            <div className="flex justify-center gap-4 pt-4 flex-col sm:flex-row">
              <Link
                href="/contact"
                className="inline-block bg-white text-[#1E3A8A] font-semibold px-8 py-3 rounded-md shadow hover:bg-gray-100 transition"
              >
                Prendre rendez-vous
              </Link>

              <Link
                href="tel:+33756935200"
                className="inline-block border border-white/30 text-white px-6 py-3 rounded-md hover:bg-white/10 transition"
              >
                Appeler +33 7 56 93 52 00
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
