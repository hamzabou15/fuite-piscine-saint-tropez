import React from 'react'
import Link from 'next/link'

const Introduction = () => {
    return (
        <section className="">
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
                    Nous sommes présents dès la conception de votre projet et nous réalisons l’installation et l’entretien afin d’assurer une
                    <strong>continuité de service</strong>. En constante recherche de qualité nous associons dans nos ouvrages une sélection
                    de produits de confiance à une mise en œuvre efficace par des professionnels expérimentés.
                </p>

                <h2 className="text-4xl font-extrabold max-md:text-3xl mt-12">
                    Notre zone d’intervention autour de Nice
                </h2>
                <p className="text-lg leading-relaxed">
                    Votre projet de <Link href="/services/salle-de-bains-pmr"><span>rénovation de salle de bains</span></Link> sera livré <strong>clé en main</strong>, car nous coordonnons les différents corps de métiers pour que votre chantier vous soit livré dans les temps et selon les règles de l’art.
                </p>
           
            </div>
        </section>
    )
}

export default Introduction
