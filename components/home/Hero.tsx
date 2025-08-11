import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import Head from "next/head";

export default function Hero() {
  return (
    <>
      <Head>
        <title>Recherche de fuite piscine à Saint-Tropez – Intervention rapide et non destructive</title>
        <meta
          name="description"
          content="Spécialistes en détection de fuite de piscine à Saint-Tropez : liner, coque, canalisation, skimmer. Devis gratuit sous 24 h, rapport sous 48 h, sans vider le bassin."
        />
        <meta property="og:title" content="Recherche de fuite piscine à Saint-Tropez – Intervention sans casse" />
        <meta
          property="og:description"
          content="Localisation précise de fuites piscine enterrée, liner ou canalisation. Intervention rapide et non destructive. Demandez votre devis gratuit."
        />
        <meta property="og:image" content="https://fuitepiscinesainttropez.fr/images/og-fuite-piscine.jpg" />
        <meta property="og:url" content="https://fuitepiscinesainttropez.fr" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <section className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] pb-20 pt-10 max-md:pt-0">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 ">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/images/recherche-fuite-piscine-saint-tropez.webp"
              alt="Expert en détection de fuite piscine à Saint-Tropez"
              width={600}
              height={500}
              priority
              fetchPriority="high"
              className="w-full h-full min-h-[450px] object-cover shadow-lg rounded-lg"
            />
          </div>

          {/* Texte principal */}
          <div className="w-full md:w-1/2 text-center md:text-left mt-4 max-lg:px-5">
            <h1 className="text-4xl font-extrabold leading-tight mb-4 text-white">
              Recherche et réparation de fuite de piscine à Saint-Tropez
              <br />
              Et l’ensemble du Golfe de Saint-Tropez
            </h1>
            <p className="text-lg text-white mb-6">
              Spécialistes en <strong>détection de fuite piscine</strong> (liner, coque, canalisation, skimmer) – intervention rapide à Saint-Tropez. <br />
              Devis gratuit sous 24 h · rapport complet sous 48 h.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[#F59E0B] text-white hover:bg-[#D97706] transition duration-200"
              >
                Obtenir un devis gratuit
              </Button>
            </Link>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-center mt-10">
              <div>
                <p className="text-2xl font-bold text-[#F59E0B]">99 %</p>
                <p className="text-sm text-white">Fuites détectées</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#F59E0B]">48 h</p>
                <p className="text-sm text-white">Rapport par e‑mail</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#F59E0B]">100 %</p>
                <p className="text-sm text-white">Sans vider le bassin</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
