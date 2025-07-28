"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function FuiteInfos6() {
    return (
    <section className="py-20 max-w-7xl mx-auto px-6 md:px-16">
            <div className="flex items-start gap-20 justify-between flex-col lg:flex-row">
                {/* Image droite */}
                <div className="w-[55%] h-full max-lg:w-full max-lg:flex max-lg:flex-col max-lg:gap-10 max-lg:h-auto sticky top-12 left-0 max-lg:relative">
                    <Image
                        src="/images/piscine-fuite-coque.webp"
                        alt="Technicien détectant une fuite de piscine"
                        width={600}
                        height={500}
                        className="w-full  shadow-lg h-[450px] object-cover"
                    />
                </div>

                {/* Texte gauche */}
                <div className="w-[40%] max-lg:w-full sticky top-20 left-0">
                    <p className="uppercase text-sm text-[#475565] font-semibold tracking-widest mb-2">
                        Spécialiste de la recherche de fuite - Nice
                    </p>

                    <h2 className="text-2xl md:text-[34px] font-bold text-[var(--color-pool-dark)] mb-6 leading-tight">
                        Recherche de fuite d&apos;eau sur une piscine coque a Vallauris dans les Alpes Maritimes
                    </h2>

                    <p className="text-base font-normal text-[var(--color-pool-muted)] mb-6">
                        L’entreprise <strong> Fuite Piscine Nice Expert </strong>  a été appelée pour une recherche de fuite d&apos;eau sur une piscine coque dont le
                         niveau descendait rapidement a Vallauris dans les Alpes Maritimes A notre arrivée, nous avons réalisé 
                         un contrôle des pièces à sceller étanchéité autour des skimmers et buse de refoulement ainsi...
                    </p>

                    <div className="flex items-center gap-6 flex-wrap max-sm:flex-col">
                        <Link href="/recherche-de-fuite-piscine-nice/fuite-piscine-coque-vallauris">
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
