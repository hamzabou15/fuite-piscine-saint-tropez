"use client";

import Image from "next/image";

type Item = {
    icon: string;
    title: string;
    description: string;
};

const keyPoints: Item[] = [
    {
        icon: "/icons/plumber.webp",
        title: "Interventions non destructives",
        description:
            "Nous localisons les fuites avec précision sans endommager vos installations. Grâce à des méthodes innovantes, nous évitons de casser murs ou sols, réduisant ainsi les coûts et délais de réparation.",
    },
    {
        icon: "/icons/outil.svg",
        title: "Outils et technologie de pointe",
        description:
            "Caméra thermique, gaz traceur, électroacoustique… Nous utilisons des équipements professionnels pour une détection rapide, fiable et adaptée à tous types de canalisations ou piscines.",
    },
    {
        icon: "/icons/reparation.svg",
        title: "Devis réparation offert avec rapport",
        description:
            "Après chaque intervention, un devis clair et précis vous est envoyé gratuitement avec un rapport illustré complet, vous permettant de prendre les bonnes décisions rapidement.",
    },
];

const interventions: Item[] = [
    {
        icon: "/images/24h1.png",
        title: "Devis en 24h",
        description:
            "Recevez un devis gratuit sous 24h après votre demande. Nous analysons votre situation avec réactivité pour vous proposer la meilleure solution au meilleur prix.",
    },
    {
        icon: "/images/48h1-fuite-nice.webp",
        title: "Intervention en 48h",
        description:
            "Nos équipes peuvent se déplacer en 48h maximum à Nice et ses alentours pour toute intervention urgente liée à une fuite ou infiltration d’eau.",
    },
    {
        icon: "/images/48h2-fuite-piscine-nice.webp",
        title: "Rapport détaillé sous 48h",
        description:
            "Un rapport complet vous est transmis dans les 48h suivant notre passage, avec photos, explications techniques, localisation des fuites et préconisations claires.",
    },
    {
        icon: "/images/devis2.png",
        title: "Devis réparation offert avec rapport",
        description:
            "En plus du rapport de diagnostic, bénéficiez d’un devis gratuit pour les travaux à prévoir. Transparence, clarté et professionnalisme garantis.",
    },
];

export default function KeyPointsSection() {
    return (
        <section className="w-full">
            {/* Section Points-clés */}
            <section className="bg-[#F5F5F5] py-16 text-center px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-12">Points-clés</h2>
                    <div className="flex flex-col md:flex-row flex-wrap justify-center gap-12 max-md:items-center">
                        {keyPoints.map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center max-w-xs text-center">
                                <Image src={item.icon} alt="icon" width={60} height={60} />
                                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                                <p className="mt-2 text-base text-gray-700">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section L'intervention */}
            <section className="bg-[#1f6169] py-16 text-center text-white px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-12">L&apos;intervention</h2>
                    <div className="flex flex-col md:flex-row flex-wrap justify-center gap-12 max-md:items-center">
                        {interventions.map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center max-w-xs text-center">
                                <Image
                                    src={item.icon}
                                    alt="icon"
                                    width={60}
                                    height={60}
                                    className="filter invert"
                                />
                                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                                <p className="mt-2 text-base text-gray-200">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    );
}
