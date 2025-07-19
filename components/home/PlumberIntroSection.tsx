"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function PlumbingIntro() {
    return (
        <section className=" h-auto py-40  max-w-7xl mx-auto px-16 max-md:px-6 ">
            <div className="container h-auto mx-auto flex  items-center gap-40 justify-between max-lg:flex-col ">
                {/* Texte côté gauche */}
                <div className="w-[40%] max-lg:w-full">
                    <p className="uppercase text-sm text-gray-600 font-semibold tracking-widest mb-2 ">
                        Plombier à Nice - Dépannage rapide
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        Votre plombier de confiance à Nice, disponible 7j/7
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Dépannage plomberie, recherche de fuite, débouchage canalisation,
                        installation sanitaire ou rénovation de salle de bain – notre équipe d’artisans plombiers à Nice intervient rapidement chez vous, avec un travail soigné et garanti.
                    </p>
                    <p className="text-sm text-gray-600 mb-8">
                        Intervention express sur Nice et alentours : devis gratuit, tarifs transparents, et service client à votre écoute.
                    </p>
                    <div className="flex items-center gap-6 max-sm:flex-col">
                        <Link href="/a-propos">
                            <Button size={"lg"} variant="submit" >
                                En savoir plus
                            </Button>
                        </Link>
                        <a href="tel:0612345678" aria-label="Appeler le plombier" className="flex items-center gap-2 text-gray-900 font-medium">

                            <div className="flex items-center gap-2 text-gray-900 font-medium">
                                <div className="p-3 rounded-full bg-[#13727b2d]">
                                    <Phone className="w-5 h-5 text-[#13727B]" />
                                </div>
                                <span>06 12 34 56 78</span>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Image côté droit */}
                <div className="relative w-[35%] h-[400px] max-lg:w-full max-lg:flex max-lg:flex-col  max-lg:gap-10 max-lg:h-auto">
                    <Image
                        src="/images/plombier-nice.Webp"
                        alt="Plombier professionnel à Nice"
                        className="object-cover w-full h-full  mt-[-60px]  max-lg:mt-0 max-lg:h-[500px]"
                        width={600}
                        height={500}
                    />
                    <Image
                        src="/images/plombier-expert-nice.webp"
                        alt="Plombier professionnel à Nice"
                        className="absolute inset-0 w-full h-full object-cover left-[-200px] max-lg:h-[500px] top-8 max-lg:relative max-lg:top-0  max-lg:left-0   "
                        width={600}
                        height={500}
                    />

                </div>
            </div>
        </section>
    );
}
