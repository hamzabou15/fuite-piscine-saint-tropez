"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function FuiteInfos4() {
    return (
    <section className="py-20 max-w-7xl mx-auto px-6 md:px-16">
            <div className="flex items-start gap-20 justify-between flex-col lg:flex-row">
                {/* Image droite */}
                <div className="w-[55%] h-full max-lg:w-full max-lg:flex max-lg:flex-col max-lg:gap-10 max-lg:h-auto sticky top-12 left-0">
                    <Image
                        src="/images/detection-fuite-piscine-nice.webp"
                        alt="Technicien détectant une fuite de piscine"
                        width={600}
                        height={500}
                        className="w-full h-full shadow-lg min-h-[450px] object-cover"
                    />
                </div>

                {/* Texte gauche */}
                <div className="w-[40%] max-lg:w-full sticky top-20 left-0 ">
                    <p className="uppercase text-sm text-[#475565] font-semibold tracking-widest mb-2">
                        Spécialiste de la recherche de fuite - Nice
                    </p>

                    <h2 className="text-2xl md:text-[34px] font-bold text-[var(--color-pool-dark)] mb-6 leading-tight">
                        Recherche de fuite d&apos;eau sur une piscine coque à Peymeinade dans les Alpes Maritimes.
                    </h2>

                    <p className="text-base font-normal text-[var(--color-pool-muted)] mb-6">
                        L&apos;entreprise <strong> Fuite Piscine Nice Expert </strong> a été appelé pour une recherche de fuite d&apos;eau sur une piscine
                        à coque à Peymeinade dans le 06 dont le niveau d&apos;eau descendait très rapidement.A notre arrivée nous avons réalisé
                        une mise en pression de tous les réseaux, cela n&apos;a rien donné.Nous avons donc réalisé un test de...
                    </p>

                    <div className="flex items-center gap-6 flex-wrap max-sm:flex-col">
                        <Link href="/recherche-de-fuite-piscine-nice/fuite-piscine-coque-peymeinade">
                            <Button
                                size="lg"
                                className="bg-[var(--color-pool-primary)] text-white hover:bg-[var(--color-pool-dark)] transition duration-200"
                            >
                                En savoir plus
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
