"use client";
import Link from "next/link";

export default function InfoSection() {
    return (
        <section className="bg-[#f7f9fa] py-16 px-16 max-sm:px-6   ">
            <div className="max-w-7xl mx-auto text-[#1b1e3f]">
            <div className="space-y-10  mx-auto">
                    <h2 className="text-4xl font-extrabold max-md:text-3xl">
                        Une équipe réactive pour vos dépannages urgents à Nice
                    </h2>

                    <p className="text-lg leading-relaxed">
                        En cas de <strong>fuite d’eau</strong>, de <strong>panne de chauffe-eau</strong> ou de <strong>chaudière défectueuse</strong>,{" "}
                        <strong>Plombiernice-expert</strong> intervient rapidement, 24h/24 et 7j/7, pour vous dépanner efficacement.
                        Spécialisés dans le <strong>dépannage plomberie</strong> et la <strong>remise en service de systèmes thermiques</strong> (chauffage, climatisation, chaudière), nos experts garantissent un service fiable et professionnel.
                    </p>

                    <p className="text-lg leading-relaxed">
                        Que ce soit pour <strong>diagnostiquer une fuite</strong>, <strong>réparer une canalisation</strong> ou <strong>entretenir votre installation</strong>, nous vous proposons toujours un devis clair et détaillé avant toute intervention. Avec <strong>Plombiernice-expert</strong>, pas de mauvaises surprises, juste des solutions durables.
                    </p>

                    <h2 className="text-4xl font-extrabold max-md:text-3xl mt-12">
                        Notre zone d’intervention autour de Nice
                    </h2>

                    <p className="text-lg leading-relaxed">
                        Basés à Nice, nous intervenons dans un rayon d’environ 50 km, notamment à Saint-Laurent-du-Var, Cagnes-sur-Mer, Carros, Vence, Antibes et les communes environnantes.
                        N’hésitez pas à nous contacter pour vérifier si nous pouvons intervenir rapidement dans votre secteur.
                    </p>

                    <div className="text-center mt-8">
                        <Link
                            href="/contact"
                            className="inline-block bg-[#1b1e3f] text-white font-semibold px-10 py-3 rounded-md shadow hover:bg-[#161833] transition"
                        >
                            Contactez-nous
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
