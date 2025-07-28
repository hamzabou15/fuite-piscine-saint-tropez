"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function FuiteInfos7() {
    return (
    <section className="py-20 max-w-7xl mx-auto px-6 md:px-16">
            <div className="flex items-start gap-20 justify-between flex-col lg:flex-row">
                {/* Texte gauche */}
                <div className="lg:w-[50%] w-full sticky top-20 left-0 max-lg:relative  max-lg:mb-6">
                    <p className="uppercase text-sm text-[#475565] font-semibold tracking-widest mb-2">
                        Spécialiste de la recherche de fuite - Nice & 06
                    </p>
                    <h2 className="text-2xl md:text-[34px] font-bold text-[var(--color-pool-dark)] mb-6 leading-tight">
                        Recherche de fuite d&apos;eau sur piscine béton à Antibes près de Biot dans le 06                   </h2>
                    <p className="text-base text-[var(--color-pool-muted)] mb-4">
                        Vous recherchez un professionnel pour la recherche de fuite dans votre piscine coque à Nice ou ses environs dans les Alpes-Maritimes ? Fuite Picine Nice vous propose une intervention rapide pour la recherche de fuite dans votre piscine et la réparation sur Nice. Dès notre arrivée, nous réalisons une rech...                    </p>
                    <div className="flex items-center gap-6 flex-col sm:flex-row">
                        <Link href="/recherche-de-fuite-piscine-nice/recherche-fuite-piscine-beton-antibes-biot">
                            <Button
                                size="lg"
                                className="bg-[var(--color-pool-primary)] text-white hover:bg-[var(--color-pool-dark)] transition duration-200"
                            >
                                En savoir plus
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Image droite */}
                <div className="lg:w-[45%] w-full flex flex-col gap-6">
                    <Image
                        src="/images/fuite-piscine-expert-nice-7.webp"
                        alt="Technicien en détection de fuite piscine à Nice"
                        width={600}
                        height={500}
                        className="w-full rounded-lg shadow-lg object-cover h-[450px]"
                    />
                </div>
            </div>
        </section>
    );
}
