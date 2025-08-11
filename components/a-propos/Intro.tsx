"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function Intro() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left text */}
                <div className="space-y-6">
                    <p className="uppercase text-sm font-semibold text-[#F59E0B] tracking-widest">
                        À propos — Saint-Tropez
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-[#0f203f] leading-tight">
                        Votre expert local en recherche et réparation de fuites de piscine
                    </h2>

                    <p className="text-gray-700 leading-relaxed">
                        Basés à Saint-Tropez, nous intervenons rapidement sur le Golfe pour
                        diagnostiquer et réparer les fuites de piscine sans casser vos
                        margelles ni vider le bassin. Nous travaillons pour les propriétaires
                        de villas, régies de location saisonnière, hôtels et résidences
                        haut de gamme.
                    </p>

                    <div className="flex flex-wrap gap-4 items-center">
                        <Link href="/contact" className="inline-block bg-[#F59E0B] text-[#0f203f] px-5 py-3 rounded-lg font-semibold shadow hover:opacity-95">
                            Demander un devis gratuit
                        </Link>

                        <a
                            href="tel:+33756935200"
                            className="inline-flex items-center gap-3 px-4 py-3 rounded-lg border border-transparent shadow-sm bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white"
                        >
                            <Phone className="w-4 h-4" />
                            <span>+33 7 56 93 52 00</span>
                        </a>
                    </div>
                </div>

                {/* Right images */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg overflow-hidden shadow">
                        <Image
                            src="/images/detection-fuite-piscine-saint-tropez.webp"
                            alt="Intervention détection fuite piscine Saint-Tropez"
                            width={600}
                            height={420}
                            className="object-cover w-full h-48"
                        />
                    </div>
                    <div className="rounded-lg overflow-hidden shadow">
                        <Image
                            src="/images/piscine-saint-tropez-2.webp"
                            alt="Matériel de détection de fuite"
                            width={600}
                            height={420}
                            className="object-cover w-full h-48"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
