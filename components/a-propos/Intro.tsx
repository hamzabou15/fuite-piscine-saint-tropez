"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Intro() {
    return (
        <section className="h-auto py-40">
            <div className="container h-auto mx-auto flex items-center gap-40 justify-between max-lg:flex-col-reverse">
                {/* Image côté droit */}
                <div className="relative w-[35%] h-[400px] max-lg:w-full max-lg:grid grid-cols-2 max-lg:gap-6 max-sm:grid-cols-1 max-sm:h-auto">
                    <Image
                        src="/images/Fuite-piscine-canalisation-nice.Webp"
                        alt="Expert recherche fuite piscine Nice"
                        className="object-cover w-full h-full mt-[-60px] max-lg:mt-0"
                        width={600}
                        height={500}
                    />
                    <Image
                        src="/images/reparation-piscine-beton-nice.webp"
                        alt="Expert fuite piscine à Nice"
                        className="absolute inset-0 w-full h-full object-cover left-[150px] top-8 max-lg:relative max-lg:left-auto max-lg:top-0"
                        width={600}
                        height={500}
                    />
                </div>
                {/* Texte côté gauche */}
                <div className="w-[40%] max-lg:w-full flex flex-col max-md:items-center">
                    <p className="uppercase text-sm text-gray-600 font-semibold tracking-widest mb-2">
                        Fuite piscine expert à Nice – Intervention rapide
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-pool-dark)] mb-4 leading-tight max-md:text-center">
                        Votre spécialiste en recherche de fuite piscine, sans casse ni vidange
                    </h2>
                    <p className="text-lg text-[var(--color-pool-muted)] mb-6 max-md:text-center">
                        Expert en détection non destructive sur piscines coque, liner ou béton, nous localisons les fuites (skimmers, canalisations, revêtements) avec des techniques avancées : inspection vidéo, test sous pression, colorants fluorescents ou détection acoustique. Intervention fiable et professionnelle dans tout le département des Alpes‑Maritimes.
                    </p>
                    <p className="text-sm text-gray-600 mb-8 max-md:text-center">
                        Devis gratuit sous 24 h, rapport détaillé sous 48 h, et solutions ciblées (colmatage, chemisage, réparation sans casse).
                    </p>
                    <div className="flex items-center gap-6 flex-col sm:flex-row">
                        <Link href="/recherche-de-fuite-piscine-nice">
                            <Button
                                size="lg"
                                className="bg-[var(--color-pool-primary)] text-white hover:bg-[var(--color-pool-dark)] transition duration-200"
                            >
                                En savoir plus
                            </Button>
                        </Link>
                        <a
                            href="tel:0612345678"
                            className="flex items-center gap-2 text-[#114877] font-medium"
                        >
                            <div className="p-3 rounded-full bg-[#5BC0BE]/15">
                                <Phone className="w-5 h-5 text-[#114877]" />
                            </div>
                            <span>06 12 34 56 78</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
