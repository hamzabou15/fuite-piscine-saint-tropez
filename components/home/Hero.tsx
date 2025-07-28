"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import Head from "next/head";

export default function Hero() {
  return (
    <>
      <Head>
        <title>Recherche de fuite piscine à Nice – Intervention non destructive</title>
        <meta
          name="description"
          content="Spécialistes en détection de fuite de piscine à Nice : liner, coque, canalisation, skimmer. Devis rapide, rapport sous 48h, sans vider le bassin."
        />
        <meta property="og:title" content="Recherche de fuite piscine à Nice – Intervention sans casse" />
        <meta
          property="og:description"
          content="Localisation précise de fuites piscine enterrée, liner ou canalisation. Intervention rapide et non destructive. Demandez votre devis gratuit."
        />
        <meta property="og:image" content="https://fuitepiscinenice-expert.fr/images/og-fuite-piscine.jpg" />
        <meta property="og:url" content="https://fuitepiscinenice-expert.fr" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <section className="bg-white pb-20 pt-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10  ">
          {/* Image */}
          <div className="w-full md:w-1/2 ">
            <Image
              src="/images/panne-reparation-fuite-nice.webp"
              alt="Expert en détection de fuite piscine à Nice"
              width={600}
              height={500}
              className="w-full h-auto object-cover shadow-lg"
              priority
            />
          </div>

          {/* Texte principal */}
          <div className="w-full md:w-1/2 text-center md:text-left mt-4">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-[var(--color-pool-dark)]">
              Recherche et réparation de fuite de piscine à Nice
              <br />
              Et l’ensemble des Alpes-Maritimes (06)
            </h1>
            <p className="text-lg text-[var(--color-pool-muted)] mb-6">
              Spécialistes en <strong>détection de fuite piscine</strong> (liner, coque, canalisation, skimmer) – intervention rapide à Nice. <br />
              Devis gratuit sous 24 h · rapport complet sous 48 h.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[var(--color-pool-primary)] text-white hover:bg-[var(--color-pool-dark)] transition duration-200"
              >
                Obtenir un devis gratuit
              </Button>
            </Link>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-center mt-10">
              <div>
                <p className="text-2xl font-bold text-[var(--color-pool-primary)]">99 %</p>
                <p className="text-sm text-[var(--color-pool-dark)]">Fuites détectées</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--color-pool-primary)]">48 h</p>
                <p className="text-sm text-[var(--color-pool-dark)]">Rapport par e‑mail</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--color-pool-primary)]">100 %</p>
                <p className="text-sm text-[var(--color-pool-dark)]">Sans vider le bassin</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
