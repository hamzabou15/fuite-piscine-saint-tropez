// components/Footer.tsx
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Phone } from "lucide-react";

export default function Footer() {
  // Couleurs utilisées (2025 clean palette)
  // primaryDeepBlue: #1E3A8A
  // secondaryBlue:  #2563EB
  // accentOrange:   #F59E0B
  // bgDark:         #0f1724  (utilisé pour footer background)
  // textMuted:      #94A3B8

  return (
    <>
      <Head>
        {/* JSON-LD LocalBusiness — FAKE DATA: remplace par les coordonnées réelles */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Fuite Piscine Saint-Tropez",
              url: "https://fuitepiscinesainttropez.fr",
              logo: "https://fuitepiscinesainttropez.fr/images/logo.png",
              image: "https://fuitepiscinesainttropez.fr/images/og-fuite-piscine.jpg",
              telephone: "+33756935200",
              email: "contact@fuitepiscinesainttropez.fr",
              address: {
                "@type": "PostalAddress",
                streetAddress: "10 Rue de la Plage",
                addressLocality: "Saint-Tropez",
                postalCode: "83990",
                addressCountry: "FR",
              },
              geo: { "@type": "GeoCoordinates", latitude: 43.2683, longitude: 6.6361 },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "07:00",
                  closes: "20:00",
                },
              ],
              areaServed: ["Saint-Tropez", "Gassin", "Ramatuelle", "Cogolin", "Sainte-Maxime"],
              sameAs: [
                "https://www.facebook.com/fuitepiscinesainttropez",
                "https://www.instagram.com/fuitepiscinesainttropez",
                "https://twitter.com/fuitepiscine_st",
              ],
              priceRange: "€€",
              description:
                "Recherche et réparation de fuites de piscine à Saint-Tropez. Méthodes non destructives (gaz traceur, inspection vidéo, tests de pression). Devis 24h, rapport 48h.",
              // SIRET (fake) — remplace par ton vrai SIRET si tu veux l'afficher
              employee: { "@type": "Person", name: "Equipe technique Fuite Piscine Saint-Tropez" },
              additionalProperty: [{ "@type": "PropertyValue", name: "SIRET", value: "123 456 789 00010" }],
            }),
          }}
        />
      </Head>

      <footer className="bg-[#0f1724] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {/* Branding + pitch */}
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Fuite Piscine Saint-Tropez
            </h2>
            <p className="text-sm text-[#94A3B8] max-w-md">
              Détection & réparation de fuites piscine à Saint-Tropez, Gassin et Ramatuelle — techniques
              non destructives (gaz traceur, inspection vidéo, chemisage). Devis sous 24h • Rapport 48h.
            </p>

            <div className="mt-4 flex items-center gap-3">
              <a
                href="tel:+33756935200"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white font-semibold shadow"
                aria-label="Appeler Fuite Piscine Saint Tropez"
              >
                <Phone className="w-4 h-4" /> <span>+33 7 56 93 52 00</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#2b344b] text-[#F59E0B] bg-transparent font-medium hover:bg-white/5"
                aria-label="Demander un devis - Fuite Piscine Saint Tropez"
              >
                Demander un devis
              </Link>
            </div>
          </div>

          {/* Services / Pages (SEO anchors) */}
          <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Nos services</h3>
              <ul className="text-sm text-[#94A3B8] space-y-2">
                <li>
                  <Link href="/recherche-de-fuite-piscine-saint-tropez" className="hover:text-white">
                    Recherche de fuite piscine Saint-Tropez
                  </Link>
                </li>
                <li>
                  <Link href="/services/inspection-video-electroacoustique" className="hover:text-white">
                    Inspection vidéo & électro-acoustique
                  </Link>
                </li>
                <li>
                  <Link href="/services/detection-fluoresceine-gaz" className="hover:text-white">
                    Détection fluorescéine & gaz traceur
                  </Link>
                </li>
                <li>
                  <Link href="/services/chemisage-canalisation-piscine" className="hover:text-white">
                    Chemisage de canalisation (sans casse)
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">À propos & aide</h3>
              <ul className="text-sm text-[#94A3B8] space-y-2">
                <li>
                  <Link href="/a-propos" className="hover:text-white">
                    Qui sommes-nous ?
                  </Link>
                </li>
                <li>
                  <Link href="/avis-clients" className="hover:text-white">
                    Avis clients
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white">
                    FAQ — Fuites piscine
                  </Link>
                </li>
                <li>
                  <Link href="/mentions-legales" className="hover:text-white">
                    Mentions légales & RGPD
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact details + socials */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Contact</h3>

            <address className="not-italic text-sm text-[#94A3B8]">
              Fuite Piscine Saint-Tropez <br />
              10 Rue de la Plage <br />
              83990 Saint-Tropez <br />
            </address>

            <p className="text-sm mt-2">
              <strong className="text-white">Tél :</strong>{" "}
              <a href="tel:+33756935200" className="text-[#F59E0B] hover:underline">
                +33 7 56 93 52 00
              </a>
            </p>

            <p className="text-sm">
              <strong className="text-white">Email :</strong>{" "}
              <a href="mailto:contact@fuitepiscinesainttropez.fr" className="text-[#F59E0B] hover:underline">
                contact@fuitepiscinesainttropez.fr
              </a>
            </p>

            <div className="pt-3 flex items-center gap-3">
              <a
                href="https://www.facebook.com/fuitepiscinesainttropez"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Fuite Piscine Saint Tropez"
                className="p-2 rounded-md bg-white/5 hover:bg-white/10"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/fuitepiscinesainttropez"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Fuite Piscine Saint Tropez"
                className="p-2 rounded-md bg-white/5 hover:bg-white/10"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://twitter.com/fuitepiscine_st"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Fuite Piscine Saint Tropez"
                className="p-2 rounded-md bg-white/5 hover:bg-white/10"
              >
                <Twitter size={18} />
              </a>
            </div>

            <div className="mt-4 text-xs text-[#6B7280]">
              <p>SIRET: <span className="text-[#94A3B8]">123 456 789 00010</span> (exemple)</p>
              <p className="mt-2">Disponibilité : intervention 24/48h selon urgence</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-sm text-[#94A3B8] flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            &copy; {new Date().getFullYear()} Fuite Piscine Saint-Tropez. Tous droits réservés.{" "}
            <span className="hidden md:inline">— Détection, diagnostic et réparation de fuites piscine.</span>
          </p>

          <div className="flex items-center gap-4">
            <Link href="/plan-du-site" className="hover:text-white">Plan du site</Link>
            <Link href="/mentions-legales" className="hover:text-white">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-white">Politique de confidentialité</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
