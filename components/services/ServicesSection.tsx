// components/services/ServicesSaintTropez.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/service";
import { Phone } from "lucide-react";

/*
  Palette utilisée (copiée depuis ton design) :
  - Bleu profond : #1E3A8A
  - Bleu secondaire : #2563EB
  - Accent / CTA : #F59E0B
  - Texte sombre : #0f203f
  - Fond carte : #F8FAFF
*/

export default function ServicesSaintTropez() {
  return (
    <section
      className="py-20 bg-white"
      aria-labelledby="services-saint-tropez-title"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold tracking-widest text-[#1E3A8A] uppercase">
            Nos services à Saint-Tropez
          </p>
          <h2
            id="services-saint-tropez-title"
            className="mt-4 text-3xl md:text-4xl font-extrabold text-[#0f203f] leading-tight"
          >
            Solutions complètes et non destructives pour votre piscine
          </h2>
          <p className="mt-3 text-gray-600">
            Détection de fuites, chemisage, tests sous pression, inspections
            vidéo et interventions discrètes pour villas & hôtels du Golfe.
            Devis sous 24h — Rapport illustré sous 48h.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <article
              key={s.slug}
              className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-white to-[#F8FAFF] border border-transparent hover:shadow-2xl transition-shadow duration-300"
              aria-labelledby={`service-${s.slug}-title`}
              role="article"
            >
              {/* image area */}
              <div className="relative h-44 md:h-48 w-full">
                <Image
                  src={s.image}
                  alt={s.alt || s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-400"
                />
                {/* overlay badge */}
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow">
                  <span className="text-xs font-medium text-[#1E3A8A]">Service</span>
                </div>
              </div>

              {/* content */}
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <h3
                    id={`service-${s.slug}-title`}
                    className="text-lg md:text-xl font-semibold text-[#0f203f]"
                  >
                    {s.title.replace(/Nice/gi, "Saint-Tropez")}
                  </h3>

                  {/* small badges (fake data / SEO micro-copy) */}
                  <div className="flex flex-col items-end">
                    <span className="text-xs font-semibold text-[#F59E0B]">Devis 24h</span>
                    <span className="text-[11px] text-gray-400 mt-1">Intervention 48h</span>
                  </div>
                </div>

                <p className="text-sm text-gray-700 line-clamp-4">
                  {/* adaptation wording SEO : remplace "Nice" par "Saint-Tropez" si présent */}
                  {s.description.replace(/Nice/gi, "Saint-Tropez")}
                </p>

                <div className="mt-2 flex items-center justify-between gap-4">
                  <Link
                    href={`/services/${s.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E3A8A] hover:underline"
                    aria-label={`En savoir plus sur ${s.title}`}
                  >
                    En savoir plus →
                  </Link>

                  <div className="flex items-center gap-3">
                    <a
                      href="tel:+33756935200"
                      className="inline-flex items-center gap-2 bg-[#F59E0B] text-[#1E3A8A] px-3 py-2 rounded-md font-semibold shadow hover:bg-[#fbbf24] transition"
                      aria-label="Appeler Fuite Piscine Saint-Tropez"
                      title="Appeler +33 7 56 93 52 00"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">Appeler</span>
                    </a>
                  </div>
                </div>

                {/* subtle footer row with SEO text */}
                <div className="mt-3 pt-3 border-t border-white/50 text-xs text-gray-500">
                  <span className="block">
                    Intervention à Saint-Tropez, Gassin, Ramatuelle et environs.
                  </span>
                  <span className="block">Techniques non destructives • Rapport 48h</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-12 rounded-xl bg-gradient-to-r from-[#EEF6FF] to-white p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-lg font-bold text-[#0f203f]">Besoin d&apos;une intervention urgente ?</h4>
            <p className="text-sm text-gray-600">
              Nous couvrons le Golfe de Saint-Tropez — devis gratuit sous 24h et intervention prioritaire en saison.
            </p>
          </div>

          <div className="flex items-center gap-4 max-md:flex-col">
            <a
              href="tel:+33756935200"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-[#1E3A8A] text-white font-semibold shadow hover:opacity-95 transition"
              aria-label="Appeler d'urgence Fuite Piscine Saint-Tropez"
            >
              <Phone className="w-5 h-5" />
              <span>Appelez Saint-Tropez — +33 7 56 93 52 00</span>
            </a>

            <Link href="/contact" className="inline-block px-5 py-3 rounded-md border border-[#1E3A8A] text-[#1E3A8A] font-semibold hover:bg-[#F8FAFF] transition">
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
