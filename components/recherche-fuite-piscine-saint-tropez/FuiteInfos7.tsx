// components/FuiteInfos7SaintTropez.tsx
"use client";

import Link from "next/link";
import { Button } from "../ui/button";

export default function FuiteInfos7SaintTropez() {
    return (
        <section className="py-20 max-w-7xl mx-auto px-6 md:px-16">
            <div className="flex items-start gap-20 justify-between flex-col lg:flex-row">
                <div className="lg:w-[50%] w-full sticky top-20 left-0 max-lg:relative max-lg:top-0  max-lg:mb-6">
                    <p className="uppercase text-sm text-[#475565] font-semibold tracking-widest mb-2">
                        Urgence saisonnière
                    </p>
                    <h2 className="text-2xl md:text-[34px] font-bold text-[#0f203f] mb-6 leading-tight">
                        Fuite sur skimmer avant l&apos;été à Saint-Tropez
                    </h2>
                    <p className="text-base text-[#475565] mb-4">
                        En mai dernier, un client nous a contacté en urgence pour une fuite importante sur sa piscine, menaçant d&apos;annuler l&apos;ouverture estivale. Le niveau baissait de 5 cm par jour, avec une zone humide près du skimmer.
                    </p>
                    
                    <p className="text-base text-[#475565] mb-4">
                        Diagnostic : joint défectueux sur le collier de skimmer. Notre intervention : dépose sans casse du carrelage, remplacement du joint et remise en état parfaite en moins d&apos;une journée. La piscine a pu être ouverte à temps pour la saison.
                    </p>

                    <div className="flex items-center gap-6 flex-col sm:flex-row">
                        <Link href="/recherche-de-fuite-piscine-saint-tropez/fuite-skimmer">
                            <Button
                                size="lg"
                                className="bg-[#F59E0B] text-[#1E3A8A] hover:bg-[#D97706]"
                            >
                                Problèmes de skimmers
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