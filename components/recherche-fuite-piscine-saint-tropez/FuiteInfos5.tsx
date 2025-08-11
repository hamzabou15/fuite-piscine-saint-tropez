// components/FuiteInfos5SaintTropez.tsx
"use client";

import Link from "next/link";
import { Button } from "../ui/button";

export default function FuiteInfos5SaintTropez() {
    return (
        <section className="py-20 max-w-7xl mx-auto px-6 md:px-16">
            <div className="flex items-start gap-20 justify-between flex-col lg:flex-row">
                <div className="lg:w-[50%] w-full sticky top-20 left-0 max-lg:relative max-lg:top-0  max-lg:mb-6">
                    <p className="uppercase text-sm text-[#475565] font-semibold tracking-widest mb-2">
                        Expertise technique
                    </p>
                    <h2 className="text-2xl md:text-[34px] font-bold text-[#0f203f] mb-6 leading-tight">
                        Fuite sur piscine à débordement à Cogolin
                    </h2>
                    <p className="text-base text-[#475565] mb-4">
                        Pour une propriété exceptionnelle à Cogolin, nous avons diagnostiqué une fuite sur une piscine à débordement avec système hydraulique complexe. Le client constatait une surconsommation d&apos;eau anormale malgré un entretien régulier.
                    </p>
                    
                    <p className="text-base text-[#475565] mb-4">
                        Notre approche : isolation des circuits, tests de pression différentiels et utilisation d&apos;un endoscope haute définition pour inspecter les canalisations cachées. Résultat : une micro-fuite dans une vanne multivoies détectée en moins de 3 heures.
                    </p>

                    <div className="flex items-center gap-6 flex-col sm:flex-row">
                        <Link href="/recherche-de-fuite-piscine-saint-tropez/piscine-debordement">
                            <Button
                                size="lg"
                                className="bg-[#F59E0B] text-[#1E3A8A] hover:bg-[#D97706]"
                            >
               
                                Piscines à débordement
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