// components/FuiteInfos4SaintTropez.tsx
"use client";

import Link from "next/link";
import { Button } from "../ui/button";

export default function FuiteInfos4SaintTropez() {
    return (
        <section className="py-20 max-w-7xl mx-auto px-6 md:px-16">
            <div className="flex items-start gap-20 justify-between flex-col lg:flex-row">
                <div className="w-full lg:w-[55%] h-full max-lg:flex max-lg:flex-col max-lg:gap-10 max-lg:h-auto sticky top-12 left-0 max-lg:relative  max-lg:mb-6">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-[450px]" />
                </div>

                <div className="w-full lg:w-[40%] max-lg:w-full sticky top-20 left-0">
                    <p className="uppercase text-sm text-[#475565] font-semibold tracking-widest mb-2">
                        Intervention d&apos;urgence
                    </p>

                    <h2 className="text-2xl md:text-[34px] font-bold text-[#0f203f] mb-6 leading-tight">
                        Fuite complexe dans un hôtel 5* à Gassin
                    </h2>

                    <p className="text-base font-normal text-[#475565] mb-6">
                        Pour un palace de Gassin, nous avons résolu une fuite intermittente qui durait depuis 3 mois. Le système de filtration complexe et les multiples canalisations enterrées rendaient le diagnostic particulièrement difficile.
                    </p>

                    <p className="text-base font-normal text-[#475565] mb-6">
                        Notre méthode : 
                    </p>
                    
                    <ul className="list-disc pl-6 mb-6 text-[#475565] space-y-2">
                        <li>Cartographie complète du réseau hydraulique</li>
                        <li>Test de pression sectorisé</li>
                        <li>Inspection caméra des canalisations</li>
                        <li>Détection au gaz traceur dans les zones critiques</li>
                    </ul>

                    <div className="flex items-center gap-6 flex-wrap max-sm:flex-col">
                        <Link href="/recherche-de-fuite-piscine-saint-tropez/cas-complexe">
                            <Button
                                size="lg"
                                className="bg-[#F59E0B] text-[#1E3A8A] hover:bg-[#D97706]"
                            >
                                Solutions complexes
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}