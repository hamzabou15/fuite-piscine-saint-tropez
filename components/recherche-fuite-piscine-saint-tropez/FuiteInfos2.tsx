// components/FuiteInfos2SaintTropez.tsx
"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { insights } from "@/lib/insights";

export default function FuiteInfos2SaintTropez() {
  const coqueInsight = insights.find(i => i.slug === "fuite-piscine-coque-saint-tropez");
  
  if (!coqueInsight) return null;

  return (
    <section className="py-20 max-w-7xl mx-auto px-6 md:px-16">
      <div className="flex items-start gap-20 justify-between flex-col lg:flex-row">
        <div className="w-full lg:w-[55%] h-full max-lg:flex max-lg:flex-col max-lg:gap-10 max-lg:h-auto sticky top-12 left-0 max-lg:relative">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-[450px]" />
        </div>

        <div className="w-full lg:w-[40%] max-lg:w-full sticky top-20 left-0">
          <p className="uppercase text-sm text-[#475565] font-semibold tracking-widest mb-2">
            Expertise Saint-Tropez
          </p>

          <h2 className="text-2xl md:text-[34px] font-bold text-[#0f203f] mb-6 leading-tight">
            Détection de fuite sur piscine coque à Saint-Tropez
          </h2>

          <p className="text-base font-normal text-[#475565] mb-6">
            Vous suspectez une fuite dans votre piscine coque de prestige à Saint-Tropez ? Notre équipe est spécialisée dans la localisation précise des fuites sur les piscines haut de gamme sans aucun dégât. Nous intervenons dans les plus beaux domaines de la presqu&apos;île avec des méthodes discrètes et respectueuses de vos aménagements.
          </p>

          <p className="text-base font-normal text-[#475565] mb-6">
            Récemment intervenu à Saint-Tropez pour une piscine coque de 15m avec mosaïque, nous avons localisé une micro-fuite au niveau d&apos;une bonde de fond en moins de 2 heures grâce à notre caméra endoscopique haute résolution.
          </p>

          <div className="flex items-center gap-6 flex-wrap max-sm:flex-col">
            <Link href={`/recherche-de-fuite-piscine-saint-tropez/${coqueInsight.slug}`}>
              <Button
                size="lg"
                className="bg-[#F59E0B] text-[#1E3A8A] hover:bg-[#D97706]"
              >
                Voir notre intervention
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}