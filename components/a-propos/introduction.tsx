import React from "react";
import Link from "next/link";

export default function Introduction() {
    return (
        <section
            className="max-w-7xl mx-auto px-6 md:px-12 py-10 prose prose-lg text-gray-700"
            aria-labelledby="a-propos-title"
        >
            <h3 id="a-propos-title" className="text-2xl md:text-3xl text-[#0f203f] font-bold">
                Fuite Piscine Saint-Tropez — expertise locale, interventions discrètes
            </h3>

            <p>
                À Saint-Tropez, chaque piscine a son histoire — et parfois une fuite
                cachée qui gâche la baignade et augmente discrètement vos factures.
                <strong> Fuite Piscine Saint-Tropez</strong> est née pour résoudre ces
                problèmes rapidement, proprement et sans spectacle : diagnostic
                précis, méthodes non destructives et réparations ciblées, adaptées aux
                villas, résidences et établissements hôteliers du Golfe.
            </p>

            <h4 className="mt-6 text-xl font-semibold">Notre promesse</h4>
            <p>
                Nous localisons la fuite, expliquons l’origine du problème et proposons
                la solution la plus discrète et la plus durable. Pas de vidange
                systématique, pas de terrasse cassée : uniquement des techniques
                éprouvées (écoute électro-acoustique, gaz traceur, colorant
                fluorescéine, caméra endoscopique, tests de pression), et un rapport
                illustré remis sous 48 h.
            </p>

            <h4 className="mt-6 text-xl font-semibold">Pourquoi faire appel à nous à Saint-Tropez ?</h4>
            <ul>
                <li>
                    <strong>Connaissance locale :</strong> constructions, margelles et
                    habitudes d’entretien propres à la Côte d’Azur.
                </li>
                <li>
                    <strong>Discrétion :</strong> interventions planifiées pour ne pas
                    déranger vos invités ou locataires.
                </li>
                <li>
                    <strong>Rapidité :</strong> devis sous 24 h et intervention possible en
                    24–48 h selon l’urgence.
                </li>
                <li>
                    <strong>Garantie :</strong> toutes nos réparations sont accompagnées
                    d’un contrôle final et d’un engagement qualité.
                </li>
            </ul>

            <h4 className="mt-6 text-xl font-semibold">Ce que nous cherchons</h4>
            <p>
                Nos techniciens recherchent les fuites sur les éléments suivants :
            </p>
            <ul>
                <li>liner et revêtements armés</li>
                <li>coques polyester</li>
                <li>canalisations enterrées (skimmers, refoulement, bondes de fond)</li>
                <li>pièces à sceller : projecteurs, buses, vanne de fond</li>
            </ul>

            <h4 className="mt-6 text-xl font-semibold">Comment se déroule une intervention ?</h4>
            <ol>
                <li>
                    <strong>Diagnostic initial :</strong> échange téléphonique + visite si
                    nécessaire.
                </li>
                <li>
                    <strong>Localisation non destructive :</strong> nous utilisons la
                    méthode la plus adaptée (acoustique, gaz, colorant, caméra).
                </li>
                <li>
                    <strong>Rapport & devis :</strong> réception d’un rapport illustré
                    sous 48 h avec proposition de réparation.
                </li>
                <li>
                    <strong>Réparation ciblée :</strong> colmatage, rustine, chemisage ou
                    remplacement ponctuel suivi d’un test d’étanchéité.
                </li>
            </ol>

            <h4 className="mt-6 text-xl font-semibold">Zones d’intervention</h4>
            <p>
                Nous couvrons l’ensemble du Golfe de Saint-Tropez : <strong>Saint-Tropez,
                    Gassin, Ramatuelle, Cogolin, Sainte-Maxime, Grimaud</strong> et les
                communes proches. Pour les locations saisonnières, nous proposons des
                créneaux matin/soir pour éviter la gêne aux occupants.
            </p>

            <h4 className="mt-6 text-xl font-semibold">FAQ rapide — recherche fuite piscine Saint-Tropez</h4>
            <dl>
                <dt className="font-semibold">Faut-il vider la piscine pour détecter la fuite ?</dt>
                <dd>Dans la plupart des cas non — nos techniques permettent la localisation sans vidange.</dd>

                <dt className="font-semibold mt-3">Combien coûte une intervention ?</dt>
                <dd>
                    Le diagnostic est souvent offert selon la nature du chantier ; le
                    devis détaillé est envoyé sous 24 h. Pour une estimation rapide,
                    contactez-nous.
                </dd>

                <dt className="font-semibold mt-3">Intervenez-vous pour les hôtels et résidences ?</dt>
                <dd>Oui — nous planifions des interventions discrètes et documentées pour la gestion locative et hôtelière.</dd>
            </dl>

            <p className="mt-6">
                Pour une prise en charge immédiate, appelez <a href="tel:+33756935200">+33 7 56 93 52 00</a> ou{" "}
                <Link href="/contact" className="text-[#1E3A8A] font-semibold">demandez un devis en ligne</Link>.
                Nous répondrons sous 24 h et vous enverrons un rapport clair sous 48 h.
            </p>

            <p className="text-sm text-gray-500 mt-4">
                Texte optimisé pour le référencement local « fuite piscine Saint-Tropez » — à compléter
                par pages services détaillées et avis clients pour maximiser la visibilité.
            </p>
        </section>
    );
}
