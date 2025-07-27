"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function FuiteInfos() {
    return (
        <section className="py-20 max-w-7xl mx-auto px-6 md:px-16">
            <div className="flex items-start gap-20 justify-between flex-col lg:flex-row">
                {/* Texte gauche */}
                <div className="lg:w-[50%] w-full sticky top-20 left-0 max-lg:relative max-lg:top-0">
                    <p className="uppercase text-sm text-[#475565] font-semibold tracking-widest mb-2">
                        FuitePiscine Expert – À propos
                    </p>
                    <h2 className="text-2xl md:text-[34px] font-bold text-[var(--color-pool-dark)] mb-6 leading-tight">
                        Spécialiste de la recherche de fuites d’eau sans destruction à Nice
                    </h2>
                    <p className="text-base text-[var(--color-pool-muted)] mb-4">
                        FuitePiscine Expert est une entreprise spécialisée dans la <strong>détection non destructive de fuites</strong> sur piscines et réseaux hydrauliques. Implantée dans les Alpes-Maritimes, notre équipe intervient rapidement pour diagnostiquer tout type de fuite, avec des équipements professionnels et des méthodes précises.
                    </p>
                    <p className="text-base text-[var(--color-pool-muted)] mb-4">
                        Grâce à des outils de pointe (caméra endoscopique, électro-acoustique, gaz traceur, fluorescéine), nous localisons efficacement les pertes d’eau, sans détériorer votre installation. Chaque intervention est accompagnée d’un <strong>rapport complet</strong> pour vous garantir transparence et efficacité.
                    </p>
                    <p className="text-sm text-[var(--color-pool-muted)] mb-8">
                        Zone d’intervention : Nice, Antibes, Cannes, Menton, Grasse, Cagnes-sur-Mer, Mandelieu-la-Napoule, et toute la Côte d’Azur. Un service de proximité, réactif et orienté satisfaction client.
                    </p>
                    <div className="flex items-center gap-6 flex-col sm:flex-row">
                        <Link href="/a-propos">
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
                        src="/images/fuite-piscine-sur-nice.webp"
                        alt="Technicien en détection de fuite piscine à Nice"
                        width={600}
                        height={500}
                        className="object-cover w-full rounded-lg shadow-lg"
                    />
                    <Image
                        src="/images/piscine-fuite-sur-nice.webp"
                        alt="Matériel pour recherche de fuite piscine"
                        width={600}
                        height={500}
                        className="object-cover w-full rounded-lg shadow-xl"
                    />
                </div>
            </div>
        </section>
    );
}
