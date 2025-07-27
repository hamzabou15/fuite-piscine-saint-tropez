"use client";
import Link from "next/link";
import Image from "next/image";

export default function RechercheFuitePiscinePage() {
    return (
        <main className="bg-white text-[#1b1e3f]">
            {/* Hero */}
            <section className="bg-[#114877] text-white py-16 px-6 md:px-16">
                <div className="max-w-6xl mx-auto text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold">
                        Détection de Fuite de Piscine à Nice
                    </h1>
                    <p className="text-lg md:text-xl">
                        Intervention rapide, non destructive & efficace dans les Alpes-Maritimes
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-white text-[#114877] font-semibold px-8 py-3 rounded-md shadow hover:bg-gray-200 transition"
                    >
                        Demander un diagnostic gratuit
                    </Link>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-16 px-6 md:px-16 bg-[#f7f9fa]">
                <div className="max-w-6xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Pourquoi faire appel à FuitePiscine Expert ?
                    </h2>
                    <p className="text-lg text-[var(--color-pool-muted)] leading-relaxed">
                        Vous observez une perte d’eau anormale dans votre piscine ? Il est possible qu’une fuite soit en cause. Nos experts interviennent rapidement pour diagnostiquer et localiser l’origine du problème à l’aide de technologies avancées, sans endommager votre bassin.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-lg">
                        <li>Localisation précise de la fuite</li>
                        <li>Méthodes non destructives</li>
                        <li>Diagnostic rapide et fiable</li>
                        <li>Intervention dans tout le 06</li>
                    </ul>
                </div>
            </section>

            {/* Méthodes de détection */}
            <section className="py-16 px-6 md:px-16 bg-white">
                <div className="max-w-6xl mx-auto space-y-10">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Nos méthodes de détection de fuite
                    </h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <Image
                                src="/images/piscine-fuite-sur-nice.webp"
                                alt="Gaz traceur piscine"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-md w-full h-auto"
                            />
                        </div>
                        <div className="space-y-4  text-lg">
                            <p className="text-[var(--color-pool-muted)]">
                                Nos techniciens utilisent des technologies de pointe telles que :
                            </p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Gaz traceur</li>
                                <li>Caméra thermique</li>
                                <li>Colorants traceurs</li>
                                <li>Inspection par caméra endoscopique</li>
                            </ul>
                            <p>
                                Ces méthodes permettent de détecter les fuites dans les canalisations, skimmers, bonde de fond ou liner sans casser ni démonter.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Localisation */}
            <section className="py-16 px-6 md:px-16 bg-[#f7f9fa]">
                <div className="max-w-6xl mx-auto space-y-8 text-lg">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Zones d’intervention
                    </h2>
                    <p className="text-[var(--color-pool-muted)]">
                        Nous intervenons dans toutes les Alpes-Maritimes : Nice, Antibes, Cannes, Cagnes-sur-Mer, Grasse, Saint-Laurent-du-Var, Vence et alentours.
                    </p>
                    <p className="text-[var(--color-pool-muted)]">
                        Notre équipe se déplace chez vous rapidement avec tout le matériel nécessaire pour un diagnostic complet.
                    </p>
                </div>
            </section>

            {/* Appel à l'action */}
            <section className="py-16 px-6 md:px-16 bg-[#114877] text-white">
                <div className="max-w-6xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Vous suspectez une fuite dans votre piscine ?
                    </h2>
                    <p className="text-lg text-[var(--color-pool-muted)]">
                        Contactez FuitePiscine Expert pour une intervention rapide et fiable à Nice et dans le 06.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-white text-[#114877] font-semibold px-8 py-3 rounded-md shadow hover:bg-gray-200 transition"
                    >
                        Prendre rendez-vous
                    </Link>
                </div>
            </section>
        </main>
    );
}
