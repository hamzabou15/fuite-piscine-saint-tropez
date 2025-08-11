// components/FuiteInfosSaintTropez.tsx
"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { insights } from "@/lib/insights";

export default function FuiteInfosSaintTropez() {
  const saintTropezInsights = insights.filter(insight => 
    insight.title.includes("Saint-Tropez") || 
    insight.title.includes("Ramatuelle") || 
    insight.title.includes("Gassin")
  );

  return (
    <section className="py-20 max-w-7xl mx-auto px-6 md:px-16">
      <div className="flex items-start gap-20 justify-between flex-col lg:flex-row">
        <div className="lg:w-[50%] w-full sticky top-20 left-0 max-lg:relative max-lg:top-0">
          <p className="uppercase text-sm text-[#475565] font-semibold tracking-widest mb-2">
            Expertise Saint-Tropez
          </p>
          <h2 className="text-2xl md:text-[34px] font-bold text-[#0f203f] mb-6 leading-tight">
            Détection non-destructive pour piscines de prestige
          </h2>
          <p className="text-base text-[#475565] mb-4">
            Spécialistes des villas de luxe à Saint-Tropez, nous intervenons avec des méthodes discrètes et respectueuses de vos aménagements paysagers. Notre équipe utilise des technologies de pointe pour localiser les fuites sans endommager votre propriété.
          </p>
          <p className="text-base text-[#475565] mb-4">
            Grâce à notre équipement professionnel (caméra endoscopique, électro-acoustique, gaz traceur), nous identifions précisément les fuites dans les liners, coques polyester ou structures béton, même dans les configurations les plus complexes.
          </p>
          <p className="text-sm text-[#475565] mb-8">
            Zones d&apos;intervention : Saint-Tropez, Ramatuelle, Gassin, Cogolin, Grimaud et toute la presqu&apos;île de Saint-Tropez.
          </p>
          <div className="flex items-center gap-6 flex-col sm:flex-row">
            <Link href="/a-propos">
              <Button
                size="lg"
                className="bg-[#F59E0B] text-[#1E3A8A] hover:bg-[#D97706]"
              >
                Notre expertise
              </Button>
            </Link>
          </div>
        </div>

        <div className="lg:w-[45%] w-full flex flex-col gap-6">
          {saintTropezInsights.slice(0, 2).map((insight, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden border border-gray-200 shadow-lg">
              <div className="p-4 bg-white">
                <h3 className="text-lg font-bold text-[#0f203f] mb-2">{insight.title}</h3>
                <p className="text-sm text-[#475565] line-clamp-2 mb-3">
                  {insight.description.replace(/<[^>]+>/g, '').substring(0, 120)}...
                </p>
                <Link href={`/recherche-de-fuite-piscine-saint-tropez/${insight.slug}`}>
                  <Button
                    size="sm"
                    className="bg-[#1E3A8A] text-white hover:bg-[#2563EB]"
                  >
                    Voir le cas
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}