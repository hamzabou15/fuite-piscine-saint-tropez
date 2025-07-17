"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Hero() {
    return (
        <section className="bg-white ">
            <div className="max-w-7xl mx-auto  flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Image */}
                <div className="w-full md:w-1/2">
                    <Image
                        src="/images/plombier-nice-hero.webp"
                        alt="Plombier professionnel à Nice"
                        width={600}
                        height={500}
                        className="w-full h-auto object-cover "
                        priority
                    />
                </div>

                {/* Texte principal */}
                <div className="w-full md:w-1/2 text-center md:text-left pr-12">
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-[#222626]">
                        Interventions rapides à Nice <br />
                        par un plombier expérimenté
                    </h1>
                    <p className="text-gray-700 mb-6 text-lg">
                        Dépannage express, installation de chauffe-eau, débouchage, détection de fuites, rénovation de salle de bains.
                        Profitez d’un service de qualité avec garantie.
                    </p>
                    <Link
                        href="/contact"
                    >
                        <Button size={"lg"} variant="default" className="bg-[#13727B] text-white hover:bg-[#0e5a5f]">

                            Obtenir un devis gratuit
                        </Button>
                    </Link>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 text-center mt-10 py-">
                        <div>
                            <p className="text-2xl font-bold text-[#222626]">20+</p>
                            <p className="text-sm text-gray-500">Interventions/jour</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-[#222626]">100+</p>
                            <p className="text-sm text-gray-500">Clients satisfaits/semaine</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-[#222626]">10+</p>
                            <p className="text-sm text-gray-500">Nouveaux clients/jour</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
