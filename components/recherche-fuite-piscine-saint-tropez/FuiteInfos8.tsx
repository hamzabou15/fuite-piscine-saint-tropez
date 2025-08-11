// components/FuiteInfos8SaintTropez.tsx
"use client";

import Link from "next/link";
import { Button } from "../ui/button";

export default function FuiteInfos8SaintTropez() {
    return (
        <section className="py-20 max-w-7xl mx-auto px-6 md:px-16">
            <div className="flex items-start gap-20 justify-between flex-col lg:flex-row">
                <div className="w-full lg:w-[55%] h-full max-lg:flex max-lg:flex-col max-lg:gap-10 max-lg:h-auto sticky top-12 left-0 max-lg:relative">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-[450px]" />
                </div>

                <div className="w-full lg:w-[40%] max-lg:w-full sticky top-20 left-0">
                    <p className="uppercase text-sm text-[#475565] font-semibold tracking-widest mb-2">
                        Garantie premium
                    </p>

                    <h2 className="text-2xl md:text-[34px] font-bold text-[#0f203f] mb-6 leading-tight">
                        Notre engagement qualité à Saint-Tropez
                    </h2>

                    <p className="text-base font-normal text-[#475565] mb-6">
                        Pour chaque intervention dans la presqu&apos;île de Saint-Tropez, nous offrons une garantie premium de 2 ans sur nos réparations. Notre service inclut :
                    </p>
                    
                    <ul className="list-disc pl-6 mb-6 text-[#475565] space-y-2">
                        <li>Rapport technique détaillé avec photos et vidéos</li>
                        <li>Garantie écrite sur les réparations effectuées</li>
                        <li>Suivi post-intervention à 3 mois</li>
                        <li>Assistance téléphonique prioritaire</li>
                    </ul>

                    <p className="text-base font-normal text-[#475565] mb-6">
                        Nous intervenons dans un rayon de 30 km autour de Saint-Tropez, avec une priorité donnée aux résidences de la presqu&apos;île.
                    </p>

                    <div className="flex items-center gap-6 flex-wrap max-sm:flex-col">
                        <Link href="/garanties">
                            <Button
                                size="lg"
                                className="bg-[#F59E0B] text-[#1E3A8A] hover:bg-[#D97706]"
                            >
                                Nos garanties
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}