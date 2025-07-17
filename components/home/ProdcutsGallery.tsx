"use client";
import React from "react";
import Image from "next/image";

const images = [

    {
        src: "/images/plombier-sur-nice-fuite-depannage.webp",
        alt: "Intervention de dépannage plomberie urgence 24h/24 à Nice nord",
    },
    {
        src: "/images/plombier-sur-nice-fuite-Renovation.webp",
        alt: "Réparation de canalisation bouchée par plombier professionnel à Nice ouest",
    },
    {
        src: "/images/plombier-sur-nice-fuite-reparation.webp",
        alt: "Travaux de rénovation plomberie salle de bain à Nice est",
    },
    {
        src: "/images/plombier-sur-nice-fuite.webp",
        alt: "Installation de robinetterie moderne par plombier à Nice sud",
    },
    {
        src: "/images/plombier-sur-nice-fuite-canalisation.webp",
        alt: "Détection de fuite d'eau par plombier expert à Nice centre",
    },
];

export default function ProductGallery() {
    return (
        <section
            className="w-full pt-8 px-0  bg-white"
            aria-label="Galerie de réalisations plomberie à Nice"
        >

            {/* Galerie statique sans scroll ni boutons */}
            <div className="grid grid-cols-5 w-full bg-black justify-center  px-0">
                {images.map((img, i) => (
                    <div
                        key={i}
                        className=" w-full h-[180px] relative overflow-hidden  hover:opacity-80 transition duration-300"
                    >
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover"
                            priority={i === 0} // Priorise la 1ère image pour perf
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
