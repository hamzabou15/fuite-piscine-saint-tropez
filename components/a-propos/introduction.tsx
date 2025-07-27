import React from 'react'
import Link from 'next/link'

const Introduction = () => {
    return (
        <section className="">
            <div className="space-y-10 mx-auto">
                <h2 className="text-4xl font-extrabold max-md:text-3xl text-[var(--color-pool-dark)]">
                    Votre **expert en fuite de piscine à Nice** – intervention rapide et non destructive
                </h2>

                <p className="text-lg leading-relaxed text-[var(--color-pool-muted)]">
                    Vous constatez une <strong>baisse inexpliquée du niveau d’eau</strong> ou suspectez une fuite sur votre <strong>bassin</strong> ?
                    Notre entreprise **Fuite Piscine Expert Nice** intervient dans les Alpes‑Maritimes (06) avec des techniques professionnelles éprouvées.
                    Nous proposons une recherche de fuite <strong>sans vider la piscine</strong> et <strong>sans démolition :</strong> tests de pression, colorant fluorescéine, gaz traceur, inspection vidéo endoscopique et acoustique.
                </p>

                <p className="text-lg leading-relaxed text-[var(--color-pool-muted)]">
                    Grâce à nos équipements de pointe (caméras thermiques, hydrophones, capteurs acoustiques), nous localisons précisément l’origine de la fuite sans endommager vos installations.
                    Chaque intervention se conclut par un <strong>rapport complet sous 48h</strong> avec photos, explications et recommandations pour réparer efficacement votre piscine :contentReference.
                </p>

                <h2 className="text-4xl font-extrabold max-md:text-3xl mt-12 text-[var(--color-pool-dark)]">
                    Une zone d’intervention optimisée autour de Nice
                </h2>
                <p className="text-lg leading-relaxed text-[var(--color-pool-muted)]">
                    Nous couvrons l’ensemble des communes proches de Nice : Antibes, Cannes, Cagnes‑sur‑Mer, Monaco. Que votre piscine soit en coque, liner ou béton, nous intervenons rapidement, souvent dans les <strong>48 heures</strong>, pour limiter les pertes d’eau et préserver votre structure.
                </p>

                <p className="text-lg leading-relaxed text-[var(--color-pool-muted)]">
                    Confiez-nous votre fuite de piscine et bénéficiez de la réactivité, de la précision et de l’expertise d’une entreprise spécialisée, reconnue pour ses interventions sans casse et ses diagnostics fiables.
                </p>

                <div>
                    <Link href="/contact" className="text-primary font-semibold underline">
                        Contactez-nous pour un devis rapide
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Introduction
