// components/FuiteInfos6SaintTropez.tsx
"use client";

import Link from "next/link";
import { Button } from "../ui/button";

export default function FuiteInfos6SaintTropez() {
    return (
        <section className="py-20 max-w-7xl mx-auto px-6 md:px-16">
            <div className="flex items-start gap-20 justify-between flex-col lg:flex-row">
                <div className="w-full lg:w-[55%] h-full max-lg:flex max-lg:flex-col max-lg:gap-10 max-lg:h-auto sticky top-12 left-0 max-lg:relative">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-[450px]" />
                </div>

                <div className="w-full lg:w-[40%] max-lg:w-full sticky top-20 left-0">
                    <p className="uppercase text-sm text-[#475565] font-semibold tracking-widest mb-2">
                        Solution innovante
                    </p>

                    <h2 className="text-2xl md:text-[34px] font-bold text-[#0f203f] mb-6 leading-tight">
                        Fuite invisible sur piscine liner à Grimaud
                    </h2>

                    <p className="text-base font-normal text-[#475565] mb-6">
                        Une résidence de Grimaud était confrontée à une fuite impossible à localiser sur une grande piscine liner. Toutes les tentatives précédentes avaient échoué, menaçant de nécessiter le remplacement complet du liner.
                    </p>

                    <p className="text-base font-normal text-[#475565] mb-6">
                        Notre intervention : utilisation combinée de gaz traceur et de caméra thermique pour détecter un minuscule défaut d&apos;étanchéité au niveau d&apos;une couture. Réparation non invasive réalisée en préservant l&apos;intégrité du liner.
                    </p>

                    <div className="flex items-center gap-6 flex-wrap max-sm:flex-col">
                        <Link href="/recherche-de-fuite-piscine-saint-tropez/fuite-liner">
                            <Button
                                size="lg"
                                className="bg-[#F59E0B] text-[#1E3A8A] hover:bg-[#D97706]"
                            >
                                Expertise liners
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}