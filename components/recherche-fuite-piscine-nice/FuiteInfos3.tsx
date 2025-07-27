"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function FuiteInfos3() {
    return (
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-16">
            <div className="flex items-start gap-20 justify-between flex-col lg:flex-row">
                {/* Texte gauche */}
                <div className="lg:w-[50%] w-full sticky top-20 left-0 max-lg:relative max-lg:top-0">
                    <p className="uppercase text-sm text-[#475565] font-semibold tracking-widest mb-2">
                        Spécialiste de la recherche de fuite - Nice & 06
                    </p>
                    <h2 className="text-2xl md:text-[34px] font-bold text-[var(--color-pool-dark)] mb-6 leading-tight">
                        Recherche de fuite d&apos;eau sur une piscine béton a Nice dans les Alpes Maritimes.                    </h2>
                    <p className="text-base text-[var(--color-pool-muted)] mb-4">
                        Votre spécialiste en recherche de fuites d&apos;eau non desctructive sur piscine dans le 06. L’entreprise Fuite Picine Nice a été appelé pour une recherche de fuite sur une piscine béton a Nice. Le client nous informe que le niveau de la piscine descend de 2 cm en 3 jours.A notre arrivée, nous avons réalisé un...
                    </p>

                    <div className="flex items-center gap-6 flex-col sm:flex-row">
                        <Link href="/recherche-de-fuite-piscine-nice/fuite-piscine-beton-nice">
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
                        src="/images/recherche-fuite-sur-nice-beton.webp"
                        alt="Technicien en détection de fuite piscine à Nice"
                        width={600}
                        height={500}
                        className="object-cover w-full h-[450px] rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}
