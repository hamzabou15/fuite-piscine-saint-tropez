"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Intro() {
    return (
        <section className=" h-auto py-40">
            <div className="container h-auto mx-auto flex  items-center gap-40 justify-between max-lg:flex-col-reverse   ">
                {/* Image côté droit */}
                <div className="relative w-[35%] h-[400px] max-lg:w-full max-lg:grid grid-cols-2 max-lg:gap-6 max-sm:grid-cols-1 max-sm:h-auto">
                    <Image
                        src="/images/chauffeau.Webp"
                        alt="Plombier professionnel à Nice"
                        className="object-cover w-full h-full  mt-[-60px] max-lg:mt-0 "
                        width={600}
                        height={500}
                    />
                    <Image
                        src="/images/plombier-nice.webp"
                        alt="Plombier professionnel à Nice"
                        className="absolute inset-0 w-full h-full object-cover left-[150px] top-8 max-lg:relative max-lg:left-auto max-lg:top-0  "
                        width={600}
                        height={500}
                    />

                </div>
                {/* Texte côté gauche */}
                <div className="w-[40%] max-lg:w-full flex flex-col max-md:items-center">
                    <p className="uppercase text-sm text-gray-600 font-semibold tracking-widest mb-2 ">
                        Plombier à Nice - Dépannage rapide
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight max-md:text-center">
                        Votre plombier de confiance à Nice, disponible 7j/7
                    </h2>
                    <p className="text-lg text-gray-700 mb-6 max-md:text-center">
                        Dépannage plomberie, recherche de fuite, débouchage canalisation,
                        installation sanitaire ou rénovation de salle de bain – notre équipe d’artisans plombiers à Nice intervient rapidement chez vous, avec un travail soigné et garanti.
                    </p>
                    <p className="text-sm text-gray-600 mb-8 max-md:text-center">
                        Intervention express sur Nice et alentours : devis gratuit, tarifs transparents, et service client à votre écoute.
                    </p>
                    <div className="flex items-center gap-6 max-sm:flex-col">
                        <Link href="/a-propos">
                            <Button size={"lg"} variant="submit" >
                                En savoir plus
                            </Button>
                        </Link>
                        <a href="tel:+33693788807" aria-label="Appeler le plombier" className="flex items-center gap-2 text-gray-900 font-medium">

                            <div className="flex items-center gap-2 text-gray-900 font-medium">
                                <div className="p-3 rounded-full bg-[#13727b2d]">
                                    <Phone className="w-5 h-5 text-[#13727B]" />
                                </div>
                                <span>+33 693 78 88 07</span>
                            </div>
                        </a>
                    </div>
                </div>


            </div>
        </section>
    );
}
