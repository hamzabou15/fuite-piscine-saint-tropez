"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function FuiteInfos2() {
    return (
        <section className="py-20 max-w-7xl mx-auto px-6 md:px-16">
            <div className="flex items-start gap-20 justify-between flex-col lg:flex-row">
                {/* Image droite */}
                <div className="w-[55%] h-full max-lg:w-full max-lg:flex max-lg:flex-col max-lg:gap-10 max-lg:h-auto sticky top-12 left-0 max-lg:relative">
                    <Image
                        src="/images/fuite-piscine-sur-nice-hydrite.webp"
                        alt="Technicien détectant une fuite de piscine"
                        width={600}
                        height={500}
                        className="w-full h-full shadow-lg min-h-[450px] object-cover"
                    />
                </div>

                {/* Texte gauche */}
                <div className="w-[40%] max-lg:w-full sticky top-20 left-0 max-lg:relative max-lg:top-0">
                    <p className="uppercase text-sm text-[#475565] font-semibold tracking-widest mb-2">
                        Spécialiste de la recherche de fuite - Nice & 06
                    </p>

                    <h2 className="text-2xl md:text-[34px] font-bold text-[var(--color-pool-dark)] mb-6 leading-tight">
                        Détection de fuite sur piscine coque à Nice
                    </h2>

                    <p className="text-base font-normal text-[var(--color-pool-muted)] mb-6">
                        Vous suspectez une fuite dans votre piscine coque ? Faites appel à Fuite Piscine Expert. Nous sommes intervenus récemment à Nice (06) pour localiser précisément une perte d&apos;eau persistante sur une piscine privée. Nos technologies nous permettent d&apos;agir sans dégâts et en toute efficacité.
                    </p>

                    <div className="flex items-center gap-6 flex-wrap max-sm:flex-col">
                        <Link href="/recherche-de-fuite-piscine-nice/fuite-piscine-coque-nice">
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
