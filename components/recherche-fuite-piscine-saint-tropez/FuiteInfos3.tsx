// components/FuiteInfos3SaintTropez.tsx
"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { insights } from "@/lib/insights";

export default function FuiteInfos3SaintTropez() {
  const betonInsight = insights.find(i => i.slug === "fuite-piscine-beton-ramatuelle");
  
  if (!betonInsight) return null;

  return (
    <section className="py-20 max-w-7xl mx-auto px-6 md:px-16">
      <div className="flex items-start gap-20 justify-between flex-col lg:flex-row">
        <div className="lg:w-[50%] w-full sticky top-20 left-0 max-lg:relative max-lg:top-0  max-lg:mb-6">
          <p className="uppercase text-sm text-[#475565] font-semibold tracking-widest mb-2">
            Cas pratique
          </p>
          <h2 className="text-2xl md:text-[34px] font-bold text-[#0f203f] mb-6 leading-tight">
            Fuite sur piscine béton à Ramatuelle
          </h2>
          <p className="text-base text-[#475565] mb-4">
            Intervention urgente pour une villa prestigieuse à Ramatuelle : la piscine béton perdait 3 cm d&apos;eau par jour. Notre diagnostic a révélé une fissure structurelle cachée sous la margelle en pierre naturelle.
          </p>
          
          <p className="text-base text-[#475565] mb-4">
            Grâce à notre technologie d&apos;électro-acoustique, nous avons localisé précisément la source sans percer inutilement. La réparation a pu être effectuée en 48h avec un rendu parfaitement invisible.
          </p>

          <div className="flex items-center gap-6 flex-col sm:flex-row">
            <Link href={`/recherche-de-fuite-piscine-saint-tropez/${betonInsight.slug}`}>
              <Button
                size="lg"
                className="bg-[#F59E0B] text-[#1E3A8A] hover:bg-[#D97706]"
              >
                Détails de l&apos;intervention
              </Button>
            </Link>
          </div>
        </div>

        <div className="lg:w-[45%] w-full flex flex-col gap-6">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-[450px]" />
        </div>
      </div>
    </section>
  );
}